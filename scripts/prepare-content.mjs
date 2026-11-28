// Temporary VitePress-to-Docus adapter for the preview.
// The existing docs remain the source of truth until the migration is accepted.
import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { posix as path } from 'node:path'

const toolsUrl = (process.env.TOOLS_SITE_URL || 'https://tools.dice-roller.dev/').replace(/\/?$/, '/')
const tool = (slug = '') => new URL(slug, toolsUrl).href
const source = 'docs'
const target = 'content'

const sections = {
  'guide': '1.guide', 'api': '2.api', 'contributing': '3.contributing',
  'guide/whats-new.md': '1.whats-new.md',
  'guide/migration.md': '2.migration.md',
  'guide/getting-started.md': '3.getting-started.md',
  'guide/usage': '4.usage', 'guide/customisation': '5.customisation',
  'guide/notation': '6.notation', 'guide/packages': '7.packages',
}
const navNames = { guide: 'Guide', api: 'API', contributing: 'Contributing', 'guide/usage': 'Usage', 'guide/customisation': 'Customisation', 'guide/notation': 'Notation', 'guide/packages': 'Related packages' }

function destination(relative) {
  const parts = relative.split('/')
  return parts.map((part, i) => sections[parts.slice(0, i + 1).join('/')] || part.toLowerCase()).join('/')
}

function linkFor(relative, href) {
  if (href.startsWith('tools:')) return tool(href.slice(6))
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('#') || href.startsWith('//')) return href
  const match = href.match(/^([^?#]+)(.*)$/)
  if (!match) return href
  const [, dest, suffix] = match
  if (!/\.md$|\.html$/.test(dest)) return href
  const absolute = dest.startsWith('/') ? dest.slice(1) : path.normalize(path.join(path.dirname(relative), dest))
  return '/' + absolute.replace(/(?:^|\/)index\.(?:md|html)$/, '').replace(/\.(?:md|html)$/, '').toLowerCase() + suffix
}

function convert(text, relative) {
  // Split fenced code blocks out before rewriting Markdown syntax.
  let fence = null
  let inTabs = false
  const lines = []
  for (const line of text.split('\n')) {
    const delimiter = line.match(/^\s*([~`]{3,})/)
    if (delimiter) {
      if (!fence) fence = delimiter[1][0]
      else if (fence === delimiter[1][0]) fence = null
      lines.push(line)
      continue
    }
    if (fence) { lines.push(line); continue }
    const roller = line.match(/^\s*:::\s*roller\s+(.+?)\s*:::\s*$/)
    if (roller) {
      lines.push('::dice-example\n---\nnotation: ' + JSON.stringify(roller[1]) + '\n---\n::')
      continue
    }
    if (/^\s*:::tabs\b/.test(line)) { inTabs = true; continue }
    if (inTabs && /^\s*==\s+/.test(line)) {
      lines.push('**' + line.replace(/^\s*==\s+/, '') + '**')
      continue
    }
    if (inTabs && /^\s*:::\s*$/.test(line)) { inTabs = false; continue }
    const callout = line.match(/^\s*:::\s*(tip|warning|danger|info|note|caution|details)\b\s*(.*)$/)
    if (callout) {
      const kinds = { tip: 'tip', warning: 'warning', danger: 'caution', info: 'note', note: 'note', caution: 'caution', details: 'note' }
      lines.push('::' + kinds[callout[1]])
      if (callout[2]) lines.push('**' + callout[2] + '**\n')
      continue
    }
    if (/^\s*:::\s*$/.test(line)) { lines.push('::'); continue }
    const svg = line.match(/^\s*<SvgExample\s*(.*?)\s*\/>\s*$/)
    if (svg) {
      const attributes = [...svg[1].matchAll(/(\w+)(?:="([^"]*)")?/g)]
      lines.push('::svg-example\n---\n' + attributes.map(([, key, value]) => key + ': ' + (value === undefined ? 'true' : JSON.stringify(value))).join('\n') + '\n---\n::')
      continue
    }
    lines.push(line.replace(/<Badge\b[^>]*text="([^"]+)"[^>]*\/>/g, '($1)')
      .replace(/\]\(([^)\s]+)\)/g, (_, href) => '](' + linkFor(relative, href) + ')'))
  }
  return lines.join('\n')
}

async function walk(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'public') continue
    const rel = prefix ? prefix + '/' + entry.name : entry.name
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) { await walk(full, rel); continue }
    if (!entry.name.endsWith('.md') || rel === 'index.md') continue
    let text = await readFile(full, 'utf8')
    // Docus does not understand the old sidebar/outline controls.
    text = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, (block) => {
      const filtered = block.split('\n').filter(line => !/^(sidebarDepth|sidebar|outline|layout):/.test(line))
      return filtered.join('\n').replace(/^---\r?\n---\r?\n/, '')
    })
    // A few generated TypeDoc pages are exceptionally large. Preserve their
    // complete source and show a link instead of risking the preview build.
    if (text.length > 500000) {
      const title = text.match(/^# (.+)$/m)?.[1] || entry.name.replace(/\.md$/, '')
      text = '# ' + title + '\n\n[Read the full generated reference on GitHub](https://github.com/dice-roller/documentation/blob/next/docs/' + rel + ').\n'
    }
    const out = path.join(target, destination(rel))
    await mkdir(path.dirname(out), { recursive: true })
    await writeFile(out, convert(text, rel))
  }
}

await rm(target, { recursive: true, force: true })
await mkdir(target, { recursive: true })
await walk(source)
for (const [dir, title] of Object.entries(navNames)) {
  const out = path.join(target, destination(dir), '.navigation.yml')
  await mkdir(path.dirname(out), { recursive: true })
  await writeFile(out, 'title: ' + title + '\n')
}
const homepage = await readFile('templates/home.md', 'utf8')
await writeFile(path.join(target, 'index.md'), homepage.replaceAll('__PLAYGROUND_URL__', tool('playground')).replaceAll('__TOOLS_URL__', tool()))
console.log('Prepared Docus content from docs/')
