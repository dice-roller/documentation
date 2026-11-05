import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'
import { diceRollerPlugin } from '@dice-roller/vuepress-plugin-dice-roller';
import { sidebarTree } from '../api/config';

const isDev = process.env.NODE_ENV === 'development';
const preview = process.env.DOCS_PREVIEW || '';
const base = `/${process.env.BASE_PATH || 'documentation'}/`;

const docsVersion = base.match(/\/versions\/([^/]+)\/$/)?.[1] || 'main';

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  lang: 'en-GB',
  title: preview ? `RPG Dice Roller — ${preview}` : 'RPG Dice Roller',
  description: 'A JS based dice roller that can roll various types of dice and modifiers, along with mathematical equations.',
  base: base,
  head: [
    ['meta', { name: 'docsearch:version', content: docsVersion }],
    [
      'link',
      { rel: 'icon', href: `${base}dice-roller-logo.png` }
    ],
    ...((preview || base.endsWith('/versions/next/')) ? [['meta', { name: 'robots', content: 'noindex, nofollow' }]] : []),
  ],
  theme: defaultTheme({
    logo: '/hero.svg',
    repo: 'dice-roller/rpg-dice-roller',
    docsRepo: process.env.DOCS_REPO || 'dice-roller/documentation',
    docsBranch: process.env.DOCS_BRANCH || 'main',
    docsDir: 'docs',
    contributors: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      {
        text: 'Contribute',
        //link: '/contributing/'
        children: ['/contributing/', '/contributing/code-of-conduct.md'],
      },
    ],
    sidebar: {
      ...{
        '/guide/': [
          {
            text: 'Guide',
            children: [
              '/guide/',
              '/guide/getting-started',
              '/guide/cli',
              '/guide/usage',
              '/guide/customisation',
            ],
            collapsible: true,
          },
          {
            text: 'Notation',
            children: [
              '/guide/notation/',
              '/guide/notation/dice',
              '/guide/notation/modifiers',
              '/guide/notation/group-rolls',
              '/guide/notation/roll-descriptions',
              '/guide/notation/maths',
            ],
            collapsible: true,
          },
        ],
      },
      ...sidebarTree('Introduction'),
    },
  }),
  plugins: [
    diceRollerPlugin(),
    (isDev || preview || base.endsWith('/versions/next/'))
        ? searchPlugin({
          hotKeys: [
            {
              key: 's',
              ctrl: true,
            },
            {
              key: '/',
              ctrl: true,
            }
          ],
        })
        : docsearchPlugin({
          apiKey: '01e04cdac0da20e46c358d3c975962bf',
          appId: 'KJX1KIQOVL',
          indexName: 'rpg-dice-roller',
          searchParameters: {
            facetFilters: [`version:${docsVersion}`],
          }
        }),
  ],
})
