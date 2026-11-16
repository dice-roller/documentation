<script setup>
import { computed, useId } from 'vue';
import { Roll } from '@dice-roller/rpg-dice-roller';
import { SvgPresenter } from '@dice-roller/svg-presenter';
import { svgExamples } from '../examples/svg-presenter.mjs';

const props = defineProps({
  name: { type: String, default: '' },
  legend: Boolean,
  scroll: Boolean,
  styled: Boolean,
});

const id = `svg-example-${useId().replace(/[^a-zA-Z0-9-]/g, '-')}`;
// Scope embedded styles and mask IDs so examples and legend entries can coexist.
const scopeSvg = (source, suffix = '') => {
  const scope = `${id}${suffix}`;
  return source.replaceAll('.result-preview', `.${scope}`)
    .replace('class="result-preview"', `class="result-preview ${scope}"`)
    .replace(/dice-\d+-/g, `${scope}-`);
};
const svg = computed(() => {
  if (props.legend) return '';
  const example = svgExamples[props.name];
  if (!example) throw new Error(`Unknown SVG example: ${props.name}`);
  return scopeSvg(example.target.present(new SvgPresenter(example.options)));
});

const legendEntries = [
  { flag: 'explode', title: 'Explode', notation: 'd6!1=4', description: 'Triggered an additional roll.' },
  { flag: 'compound', title: 'Compound', notation: 'd6!!1=4', description: 'Explosion results are combined into one value.' },
  { flag: 'penetrate', title: 'Penetrate', notation: 'd6!p1=4', description: 'Explosion rolls have one subtracted.' },
  { flag: 're-roll', title: 'Re-roll', notation: 'd6r1=4', description: 'The original result was replaced.' },
  { flag: 'unique', title: 'Unique', notation: '2d6u1', seed: 1, description: 'A duplicate was re-rolled for uniqueness.' },
  { flag: 'min', title: 'Minimum', notation: 'd6min5', description: 'Raised to the specified minimum.' },
  { flag: 'max', title: 'Maximum', notation: 'd6max3', description: 'Capped at the specified maximum.' },
  { flag: 'target-success', title: 'Success', notation: 'd6>=4', description: 'Matched a success target.' },
  { flag: 'target-failure', title: 'Failure', notation: 'd6>4f<=4', description: 'Matched a failure target.' },
  { flag: 'critical-success', title: 'Critical success', notation: 'd6cs=4', description: 'Matched the critical success condition.' },
  { flag: 'critical-failure', title: 'Critical failure', notation: 'd6cf=4', description: 'Matched the critical failure condition.' },
  { flag: 'drop', title: 'Dropped', notation: '2d6kh1', description: 'Faded and crossed out; excluded from the total.' },
];
const legendItems = computed(() => {
  if (!props.legend) return [];
  return legendEntries.map((entry) => {
    const roll = new Roll(entry.notation, {
      engine: { name: 'xoroshiro128plus', seed: entry.seed ?? 1234 },
    });
    const source = roll.present(new SvgPresenter({ modifierIconPosition: 'below' }));
    // Use the public presenter output rather than copying artwork or importing package internals.
    const styles = source.match(/<style>[\s\S]*?<\/style>/)?.[0];
    const match = entry.flag === 'drop'
      ? source.match(/<g class="excluded"[^>]*data-die-type[^>]*>[\s\S]*?(<svg\b[\s\S]*?<\/svg>)/)
      : source.match(new RegExp(`(<svg class="modifier-icon modifier-${entry.flag}"[\\s\\S]*?<\\/svg>)`));
    if (!styles || !match) throw new Error(`Missing legend symbol: ${entry.flag}`);
    const symbol = match[1].replace(/^<svg\b[^>]*>/, (tag) => tag
      .replace(/ (?:x|y|width|height)="[^"]*"/g, '')
      .replace(/>$/, ' x="4" y="4" width="40" height="40">'));
    const markup = `<svg xmlns="http://www.w3.org/2000/svg" class="result-preview" width="48" height="48" viewBox="0 0 48 48" style="color:#7962b5">${styles}<g${entry.flag === 'drop' ? ' class="excluded"' : ''}>${symbol}</g></svg>`;
    return { ...entry, symbol: scopeSvg(markup, `-${entry.flag}`) };
  });
});
</script>

<template>
  <div v-if="legend" class="svg-example svg-legend" role="list" aria-label="Modifier symbols">
    <div v-for="entry in legendItems" :key="entry.flag" class="svg-legend-item" role="listitem">
      <span class="svg-legend-symbol" aria-hidden="true" v-html="entry.symbol" />
      <div>
        <h3>{{ entry.title }}</h3>
        <p>{{ entry.description }}</p>
      </div>
    </div>
  </div>
  <div v-else class="svg-example" :class="{ 'svg-example-scroll': scroll, 'svg-example-styled': styled }" v-html="svg" />
</template>

<style scoped>
.svg-example {
  margin: 16px 0;
  overflow-x: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}
.svg-example :deep(> svg) {
  display: block;
  max-width: 100%;
  height: auto;
}
.svg-example-scroll :deep(> svg) {
  max-width: none;
}
.svg-example-styled :deep([data-shape="d6"] .die-outline) {
  fill: #fff0d6;
  stroke: #9b5d0a;
}
.svg-example-styled :deep([data-shape="d6"] .die-value) {
  fill: #704200;
}
.svg-legend {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 24px 16px;
  padding: 20px;
}
.svg-legend-item {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 10px;
  align-items: start;
}
.svg-legend-symbol {
  display: block;
  width: 48px;
  height: 48px;
}
.svg-legend h3 {
  margin: 0 0 4px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--vp-c-brand-1);
}
.svg-legend p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}
</style>
