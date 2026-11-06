import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client';
import SponsorButton from './SponsorButton.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(SponsorButton),
    });
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app);
    app.component('SponsorButton', SponsorButton);
  },
};
