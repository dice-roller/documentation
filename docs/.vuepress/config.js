module.exports = ctx => ({
  title: 'RPG Dice Roller',
  description: 'A JS based dice roller that can roll various types of dice and modifiers, along with mathematical equations.',
  base: '/rpg-dice-roller/',
  themeConfig: {
    logo: '/hero.svg',
    repo: 'GreenImp/rpg-dice-roller',

    docsDir: 'docs',
    docsRepo: 'GreenImp/rpg-dice-roller-docs',
    docsBranch: 'develop',
    editLinks: true,
    lastUpdated: 'Last Updated',

    smoothScroll: true,
    algolia: ctx.isProd ? ({
      apiKey: 'f5ccf286c5bf08a4db96d17194b54c41',
      indexName: 'rpg-dice-roller'
    }) : null,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Contribute', link: '/contributing/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          children: [
            '',
            'getting-started',
            'usage',
            'customisation',
          ],
        },
        {
          title: 'Notation',
          children: [
            'notation/',
            'notation/dice',
            'notation/modifiers',
            'notation/group-rolls',
            'notation/maths',
          ],
        },
      ],
      '/api/': [
        {
          title: 'API',
          collapsable: false,
          children: [
            '',
            'DiceRoller',
            'DiceRoll',
            'RollResult',
            'RollResults',
            'ComparePoint',
            'Parser',
            'NumberGenerator',
            'exportFormats',
          ],
        }
      ],
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    'dice-roller',
  ],
});
