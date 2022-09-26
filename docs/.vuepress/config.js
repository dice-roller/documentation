import { defaultTheme, defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
//import { searchPlugin } from '@vuepress/plugin-search'
import { diceRollerPlugin } from '@dice-roller/vuepress-plugin-dice-roller';
import { sidebarTree } from '../api/config';

export default defineUserConfig({
  lang: 'en-GB',
  title: 'RPG Dice Roller',
  description: 'A JS based dice roller that can roll various types of dice and modifiers, along with mathematical equations.',
  home: `/${process.env.BASE_PATH || 'documentation'}/`,
  theme: defaultTheme({
    logo: '/hero.svg',
    repo: 'dice-roller/rpg-dice-roller',
    docsRepo: 'dice-roller/documentation',
    docsBranch: 'develop',
    docsDir: 'docs',
    contributors: false,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Contribute', link: '/contributing/' },
    ],
    sidebar: {
      ...{
        '/guide/': [
          {
            text: 'Guide',
            children: [
              '/guide/',
              '/guide/getting-started',
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
    backToTopPlugin(),
    diceRollerPlugin(),
    docsearchPlugin({
      apiKey: '01e04cdac0da20e46c358d3c975962bf',
      appId: 'KJX1KIQOVL',
      indexName: 'rpg-dice-roller'
    }),
    /*searchPlugin({
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
    }),*/
  ],
})
