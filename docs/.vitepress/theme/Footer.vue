<script setup>
import { useData } from 'vitepress';
import DefaultFooter from 'vitepress/dist/client/theme-default/components/VPFooter.vue';
import SponsorButton from './SponsorButton.vue';

const { frontmatter } = useData();
</script>

<template>
  <SponsorButton v-if="frontmatter.layout === 'home'" />
  <DefaultFooter />
</template>
