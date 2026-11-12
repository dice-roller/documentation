import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import { enhanceAppWithDiceRoller } from '@dice-roller/vitepress-plugin-dice-roller/client';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import SponsorButton from './SponsorButton.vue';
import ProjectBadges from './ProjectBadges.vue';
import '@dice-roller/vitepress-plugin-dice-roller/style.css';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(SponsorButton),
      'home-features-after': () => h(ProjectBadges),
    });
  },
  enhanceApp({ app }) {
    enhanceAppWithDiceRoller(app);
    enhanceAppWithTabs(app);
  },
};
