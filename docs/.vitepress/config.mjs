import { defineConfig } from 'vitepress';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';
import { diceRollerPlugin } from '@dice-roller/vitepress-plugin-dice-roller';
import apiConfig from '../api/typedoc-sidebar.json' with { type: 'json' };

const isDev = process.env.NODE_ENV === 'development';
const preview = process.env.DOCS_PREVIEW || '';
const base = `/${process.env.BASE_PATH || 'documentation'}/`;
const docsVersion = base.match(/\/versions\/([^/]+)\/$/)?.[1] || 'main';
const docsRepo = process.env.DOCS_REPO || 'dice-roller/documentation';
const docsBranch = process.env.DOCS_BRANCH || 'main';

// Keep consuming the existing VuePress-shaped TypeDoc sidebar until its
// generator is migrated in the library repository.
const apiSidebarItems = (items) => items.map(({ text, link, children, collapsible }) => ({
  text,
  ...(link ? { link } : {}),
  ...(children?.length ? {
    items: apiSidebarItems(children),
    ...(collapsible ? { collapsed: false } : {}),
  } : {}),
  collapsed: true,
}));

export default defineConfig({
  lang: 'en-GB',
  title: preview ? `RPG Dice Roller — ${preview}` : 'RPG Dice Roller',
  description: 'A JS based dice roller that can roll various types of dice and modifiers, along with mathematical equations.',
  base,
  lastUpdated: true,
  async transformPageData({ frontmatter }) {
    if (frontmatter.layout !== 'home') return;

    // Inline local SVG feature icons so they inherit the theme's CSS colour.
    for (const feature of frontmatter.features || []) {
      const icon = feature.icon;
      if (!icon?.src?.startsWith('/') || !icon.src.endsWith('.svg')) continue;

      const svg = await readFile(new URL(`../public${icon.src}`, import.meta.url), 'utf8');
      feature.icon = svg.replace('<svg ',
        `<svg width="${Number(icon.width) || 48}" height="${Number(icon.height) || 48}" aria-hidden="true" `);
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          // Wrap the layout's footer, leaving imports of the original component
          // available to the wrapper without recursively aliasing them.
          find: './components/VPFooter.vue',
          replacement: fileURLToPath(new URL('./theme/Footer.vue', import.meta.url)),
        },
      ],
    },
  },
  markdown: {
    config(md) {
      md.use(diceRollerPlugin);
      md.use(tabsMarkdownPlugin);
    },
  },
  head: [
    ['meta', { name: 'docsearch:version', content: docsVersion }],
    ['link', { rel: 'icon', href: `${base}dice-roller-logo.png` }],
    ...((preview || docsVersion === 'next') ? [['meta', { name: 'robots', content: 'noindex, nofollow' }]] : []),
  ],
  themeConfig: {
    logo: '/hero.svg',
    docsBranch,
    footer: {
      message: `MIT Licensed · <a href="${base}credits.html">Credits</a>`,
      copyright: 'Copyright © GreenImp Media ltd.',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/dice-roller/rpg-dice-roller' }],
    editLink: {
      pattern: `https://github.com/${docsRepo}/edit/${docsBranch}/docs/:path`,
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      {
        text: 'Contribute',
        items: [
          { text: 'Contributing', link: '/contributing/' },
          { text: 'Code of Conduct', link: '/contributing/code-of-conduct' },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Get Started', link: '/guide/getting-started' },
            { text: 'CLI', link: '/guide/cli' },
            { text: 'Usage', link: '/guide/usage' },
            { text: 'Customisation', link: '/guide/customisation' },
          ],
        },
        {
          text: 'Notation',
          collapsed: true,
          items: [
            { text: 'What are notations?', link: '/guide/notation/' },
            { text: 'Dice', link: '/guide/notation/dice' },
            { text: 'Modifiers', link: '/guide/notation/modifiers' },
            { text: 'Roll Groups', link: '/guide/notation/roll-groups' },
            { text: 'Roll Descriptions', link: '/guide/notation/roll-descriptions' },
            { text: 'Maths', link: '/guide/notation/maths' },
          ],
        },
      ],
      '/api/': [{
        text: 'API',
        items: [
          { text: 'Introduction', link: '/api/' },
          ...apiSidebarItems(apiConfig),
        ],
      }],
      '/contributing/': [
        { text: 'Contributing', link: '/contributing/' },
        { text: 'Code of Conduct', link: '/contributing/code-of-conduct' },
      ],
    },
    search: (isDev || preview || docsVersion === 'next')
      ? { provider: 'local' }
      : {
        provider: 'algolia',
        options: {
          disableUserPersonalization: true,
          apiKey: '01e04cdac0da20e46c358d3c975962bf',
          appId: 'KJX1KIQOVL',
          indexName: 'rpg-dice-roller',
          searchParameters: {
            facetFilters: [`version:${docsVersion}`],
          },
        },
      },
  },
});
