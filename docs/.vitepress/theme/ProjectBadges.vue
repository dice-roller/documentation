<script setup>
import { computed } from 'vue';

const props = defineProps({
  branch: {
    type: String,
    default: 'main',
  },
});

const mappedBranch = computed(() => {
  if (props.branch.startsWith('versions/')) {
    return props.branch.replace('versions/', 'releases/');
  }

  if (props.branch.startsWith('feature/next/')) {
    return 'next';
  }

  if (!['main', 'next'].includes(props.branch)) {
    return 'main';
  }

  return props.branch;
});

const tag = computed(() => {
  if (mappedBranch.value === 'next') {
    return mappedBranch.value;
  }

  if (mappedBranch.value.startsWith('releases/v')) {
    return mappedBranch.value.replace('releases/', 'releases-');
  }

  return 'latest';
});

const badges = computed(() => [
  {
    alt: 'npm version',
    src: `https://img.shields.io/npm/v/@dice-roller/rpg-dice-roller${tag.value !== 'latest' ? `/${tag.value}` : ''}`,
    href: `https://www.npmjs.com/package/@dice-roller/rpg-dice-roller/v/${tag.value}`,
  },
  {
    alt: 'Build status',
    src: `https://github.com/dice-roller/rpg-dice-roller/actions/workflows/build.yml/badge.svg?branch=${encodeURIComponent(mappedBranch.value)}`,
    href: `https://github.com/dice-roller/rpg-dice-roller/actions/workflows/build.yml?query=${encodeURIComponent(`branch:${mappedBranch.value}`)}`,
  },
  {
    alt: 'Coverage status',
    src: `https://coveralls.io/repos/github/dice-roller/rpg-dice-roller/badge.svg?branch=${encodeURIComponent(mappedBranch.value)}`,
    href: `https://coveralls.io/github/dice-roller/rpg-dice-roller?branch=${encodeURIComponent(mappedBranch.value)}`,
  },
  {
    alt: 'npm type definitions',
    src: 'https://img.shields.io/npm/types/@dice-roller/rpg-dice-roller',
  },
  {
    alt: 'Licence',
    src: 'https://img.shields.io/npm/l/@dice-roller/rpg-dice-roller',
    href: `https://github.com/dice-roller/rpg-dice-roller/blob/${mappedBranch.value}/licence.txt`,
  },
  {
    alt: 'npm downloads',
    src: 'https://img.shields.io/npm/dm/@dice-roller/rpg-dice-roller',
    href: 'https://www.npmjs.com/package/@dice-roller/rpg-dice-roller',
  },
]);
</script>

<template>
  <div class="project-badges">
    <component
      :is="badge.href ? 'a' : 'span'"
      v-for="badge in badges"
      :key="badge.src"
      class="badge"
      :href="badge.href"
      :target="badge.href ? '_blank' : undefined"
      :rel="badge.href ? 'noreferrer' : undefined"
    >
      <img :src="badge.src" :alt="badge.alt" />
    </component>
  </div>
</template>

<style scoped>
.project-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 24px auto;
  padding: 0 24px;
}

.badge {
  display: inline-flex;
  flex-shrink: 0;
}

.badge img {
  height: 20px;
}
</style>
