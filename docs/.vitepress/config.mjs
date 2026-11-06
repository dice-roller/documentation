import { defineConfig } from 'vitepress';
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
}));

export default defineConfig({
  lang: 'en-GB',
  title: preview ? `RPG Dice Roller — ${preview}` : 'RPG Dice Roller',
  description: 'A JS based dice roller that can roll various types of dice and modifiers, along with mathematical equations.',
  base,
  lastUpdated: true,
  // Preserve directory index URLs without renaming the Markdown sources yet.
  rewrites: (path) => path.replace(/(^|\/)readme\.md$/i, '$1index.md'),
  head: [
    ['meta', { name: 'docsearch:version', content: docsVersion }],
    ['link', { rel: 'icon', href: `${base}dice-roller-logo.png` }],
    ...((preview || docsVersion === 'next') ? [['meta', { name: 'robots', content: 'noindex, nofollow' }]] : []),
  ],
  themeConfig: {
    logo: '/hero.svg',
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
          collapsed: false,
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
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/guide/notation/' },
            { text: 'Dice', link: '/guide/notation/dice' },
            { text: 'Modifiers', link: '/guide/notation/modifiers' },
            { text: 'Group Rolls', link: '/guide/notation/group-rolls' },
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
