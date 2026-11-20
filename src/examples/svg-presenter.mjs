import { Roll, Roller, RollHistory, RollSettings } from '@dice-roller/rpg-dice-roller';

// Shared stored rolls keep appearance comparisons identical.
// A fixed seed also reproduces these results during SSR and browser hydration.
const roll = (notation) => new Roll(notation, {
  engine: { name: 'xoroshiro128plus', seed: 1234 },
});
const basic = roll('2d6 + 3');
const wide = roll('6d6 + 3');
const modifiers = roll('2d6!1 + 4d6kh3cs=6cf=2');
const history = new Roller({ engine: { name: 'xoroshiro128plus', seed: 1234 } });

history.roll('d20 + 5');
history.roll('2d6 + 3');

// Evaluate the gallery at each die's maximum while retaining normal roll metadata.
const maximumRoll = (notation) => {
  const rolled = roll(notation);
  const result = new RollSettings().evaluate(rolled.expression, 'max');
  return new Roll({ ...rolled.toJSON(), result, total: result.value });
};
const shapes = new RollHistory();

shapes.add(maximumRoll('d2 + d4 + d6 + d8'), maximumRoll('d10 + d12 + d20 + d3'));

const hover = roll('{2d6 + d8, (d10 + 2) * 2} + max(d4, d6)');

export const svgExamples = Object.fromEntries([
  ['shapes', shapes, { size: 90, noWrap: true, showNotation: false, showTotals: false }],
  ['hover', hover, { size: 65, width: 760 }],
  ['modifiers-corner', modifiers, { size: 90, width: 700, modifierIconPosition: 'corner' }],
  ['basic', basic, {}],
  ['colours', basic, { size: 100, width: 600, stroke: '#236b57', fill: '#dff3e9', filled: true }],
  ['wrapped', wide, { size: 90, width: 420 }],
  ['nowrap', wide, { size: 90, noWrap: true }],
  ['minimal', basic, { size: 100, width: 600, showDiceLabels: false, showModifierLabels: false, showNotation: false, showTotals: false }],
  ['modifiers', modifiers, { size: 90, width: 700, modifierIconPosition: 'below' }],
  ['history', history, { size: 80, width: 600 }],
].map(([name, target, options]) => [name, { target, options }]));
