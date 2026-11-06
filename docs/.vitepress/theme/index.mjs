import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import SponsorButton from './SponsorButton.vue';
import ProjectBadges from './ProjectBadges.vue';
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
    enhanceAppWithTabs(app);
  },
};
