<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { VPFeatures } from 'vitepress/theme';

const { frontmatter } = useData();
const iconClasses = {
  '/icons/dice-twenty-faces-twenty.svg': 'feature-icon-dice',
  '/icons/rule-book.svg': 'feature-icon-book',
  '/icons/scroll-quill.svg': 'feature-icon-quill',
};

const features = computed(() => frontmatter.value.features?.map((feature) => {
  const iconClass = iconClasses[feature.icon?.src];
  return iconClass ? {
    ...feature,
    icon: `<span class="feature-icon ${iconClass}" aria-hidden="true"></span>`,
  } : feature;
}));
</script>

<template>
  <VPFeatures v-if="features" class="VPHomeFeatures" :features="features" />
</template>

<style scoped>
.VPHomeFeatures :deep(.icon:has(.feature-icon)) {
  background-color: transparent;
}

.VPHomeFeatures :deep(.feature-icon) {
  display: block;
  width: 48px;
  height: 48px;
  background-color: var(--vp-button-brand-bg);
  -webkit-mask: var(--feature-icon-image) center / contain no-repeat;
  mask: var(--feature-icon-image) center / contain no-repeat;
}

.VPHomeFeatures :deep(.feature-icon-dice) {
  --feature-icon-image: url('/icons/dice-twenty-faces-twenty.svg');
}

.VPHomeFeatures :deep(.feature-icon-book) {
  --feature-icon-image: url('/icons/rule-book.svg');
}

.VPHomeFeatures :deep(.feature-icon-quill) {
  --feature-icon-image: url('/icons/scroll-quill.svg');
}
</style>
