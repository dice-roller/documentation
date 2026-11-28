export default defineAppConfig({
  header: {
    title: 'RPG Dice Roller',
    logo: { light: '/hero.svg', dark: '/hero.svg', alt: 'RPG Dice Roller' },
  },
  github: {
    owner: 'dice-roller',
    name: 'documentation',
    branch: 'feature/next/docus',
  },
  socials: { github: 'https://github.com/dice-roller/rpg-dice-roller' },
  ui: {
    colors: { primary: 'clay', neutral: 'parchment' },
    pageHero: { slots: { title: 'font-serif' } },
    pageHeader: { slots: { title: 'font-serif' } },
    pageSection: { slots: { title: 'font-serif' } },
    pageFeature: { slots: { title: 'font-serif' } },
    pageCard: { slots: { title: 'font-serif' } },
  },
})
