<script setup>
const badges = [
  {
    alt: 'npm version',
    src: 'https://img.shields.io/npm/v/@dice-roller/rpg-dice-roller?label=version',
    href: 'https://www.npmjs.com/package/@dice-roller/rpg-dice-roller',
  },
  {
    alt: 'Build status',
    src: 'https://github.com/dice-roller/rpg-dice-roller/actions/workflows/build.yml/badge.svg',
    href: 'https://github.com/dice-roller/rpg-dice-roller/actions/workflows/build.yml',
  },
  {
    alt: 'Coverage status',
    src: 'https://coveralls.io/repos/github/dice-roller/rpg-dice-roller/badge.svg?branch=main',
    href: 'https://coveralls.io/github/dice-roller/rpg-dice-roller?branch=main',
  },
  {
    alt: 'npm type definitions',
    src: 'https://img.shields.io/npm/types/@dice-roller/rpg-dice-roller',
  },
  {
    alt: 'Licence',
    src: 'https://img.shields.io/npm/l/@dice-roller/rpg-dice-roller',
    href: 'https://github.com/dice-roller/rpg-dice-roller/blob/develop/licence.txt',
  },
  {
    alt: 'npm downloads',
    src: 'https://img.shields.io/npm/dm/@dice-roller/rpg-dice-roller',
    href: 'https://www.npmjs.com/package/@dice-roller/rpg-dice-roller',
  },
];
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
