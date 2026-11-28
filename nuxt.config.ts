export default defineNuxtConfig({
  extends: ['docus'],
  compatibilityDate: '2026-06-30',
  site: { name: 'RPG Dice Roller', indexable: false },
  app: {
    head: {
      htmlAttrs: { lang: 'en-GB' },
      link: [{ rel: 'icon', href: '/dice-roller-logo.png' }],
    },
  },
  ui: { fonts: false },
  docus: { assistant: { enabled: false } },
  mcp: { name: 'RPG Dice Roller v6 documentation' },
  robots: { robotsTxt: false },
  routeRules: { '/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } } },
})
