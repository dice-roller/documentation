import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
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
    const { theme } = useData();

    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(SponsorButton),
      'home-features-after': () => h(ProjectBadges, {
        branch: theme.value.docsBranch,
      }),
    });
  },
  enhanceApp({ app }) {
    enhanceAppWithDiceRoller(app);
    enhanceAppWithTabs(app);
  },
};
