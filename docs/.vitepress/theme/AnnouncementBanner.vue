<script setup>
import { useData } from 'vitepress';
import { VPButton } from 'vitepress/theme';
import { computed, ref, watch, onUnmounted } from 'vue';

const { site } = useData();
const props = defineProps({
  version: {
    type: String,
  },
});

const isProd = computed(() => {
  const host = window.location.host;

  return !host.startsWith('localhost') && !host.includes('github.io');
});
const base = computed(() => site.value.base.replace(/^\/?(documentation\/?)?/, ''));
const displayVersion = computed(() => {
  if (props.version === 'staging' || base.value === 'staging') {
    return 'staging';
  }

  const stagingRegex = /^staging\/(?<prName>pr-[0-9]+)\/?$/;
  const { groups } = props.version.match(stagingRegex)
    ?? base.value.match(stagingRegex)
    ?? {};

  if (groups?.prName) {
    return groups.prName;
  }

  if (props.version !== 'main') {
    return props.version;
  }

  return 'main';
});
const branchType = computed(() => {
  if (displayVersion.value === 'next') {
    return displayVersion.value;
  }

  if (displayVersion.value === 'staging' || /^pr-[0-9]+$/.test(displayVersion.value)) {
    return 'staging';
  }

  return displayVersion.value === 'main' ? 'main' : 'version';
});
const bannerStyles = {
  'main': 'success',
  'version': 'info',
  'next': 'warning',
  'staging': 'warning',
};
const bannerActions = {
  'main': [
    { theme: 'brand', text: "What's new →", link: '/guide/' },
    { theme: 'alt', text: "v5 documentation →", link: 'https://dice-roller.dev/versions/v5/' },
  ],
  'version': [
    { theme: 'brand', text: "View latest version →", link: '/' },
  ],
  'next': [
    { theme: 'brand', text: "View stable docs →", link: '/' },
  ],
  'staging': [
    { theme: 'brand', text: "View stable docs →", link: '/' },
  ],
};

// hide the "main" version banner unless it's gone live for v6+
const showBanner = computed(() => displayVersion.value !== 'main' || isProd);
const bannerStyle = computed(() => bannerStyles[branchType.value] || 'info');
const actions = computed(() => bannerActions[branchType.value] || []);

const banner = ref(null);

watch(banner, (element, _, onCleanup) => {
  if (!element) {
    document.documentElement.style.removeProperty('--vp-layout-top-height');
    return;
  }

  const observer = new ResizeObserver(() => {
    document.documentElement.style.setProperty(
        '--vp-layout-top-height',
        `${element.getBoundingClientRect().height}px`
    );
  });

  observer.observe(element);

  onCleanup(() => observer.disconnect());
}, { flush: 'post', immediate: true });

onUnmounted(() => {
  document.documentElement.style.removeProperty('--vp-layout-top-height');
});
</script>

<template>
  <aside v-if="showBanner" ref="banner" class="announcement-banner" :class="bannerStyle">
    <div>
      <template v-if="branchType === 'next'">
      🚧 You're viewing the development documentation.
      </template>

      <template v-else-if="branchType === 'staging'">
      🚧 You're viewing the staging documentation{{ displayVersion !== 'staging' ? ` for ${displayVersion.toLocaleUpperCase()}` : ''}}.
      </template>

      <template v-else-if="branchType === 'version'">
        📚 You're viewing the documentation for <strong>{{ displayVersion }}</strong>
      </template>

      <template v-else>
        🚀 <strong>v6 has been released!</strong>
      </template>
    </div>

    <div v-if="actions.length > 0" class="actions">
      <VPButton
          v-for="action in actions"
          :key="action.text"
          :theme="action.theme"
          :text="action.text"
          :href="action.link"
      />
    </div>
  </aside>
</template>

<style scoped>
.announcement-banner {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--vp-z-index-layout-top);

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
}

.announcement-banner.warning {
  background-image: linear-gradient(
      var(--vp-c-warning-soft),
      var(--vp-c-warning-soft)
  );
}

.announcement-banner.info {
  background-image: linear-gradient(
      var(--vp-c-note-soft),
      var(--vp-c-note-soft)
  );
}

.announcement-banner.danger {
  background-image: linear-gradient(
      var(--vp-c-danger-soft),
      var(--vp-c-danger-soft)
  );
}

.announcement-banner.success {
  background-image: linear-gradient(
      var(--vp-c-success-soft),
      var(--vp-c-success-soft)
  );
}

.announcement-banner.important {
  background-image: linear-gradient(
      var(--vp-c-important-soft),
      var(--vp-c-important-soft)
  );
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
