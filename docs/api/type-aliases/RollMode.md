[@dice-roller/rpg-dice-roller](../index.md) / RollMode

# Type Alias: RollMode

> **RollMode** = `"random"` \| `"min"` \| `"max"`

Defined in: [src/evaluator/RollContext.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L13)

How dice are rolled.

- `random`: use the generator
- `min` / `max`: every die rolls its minimum / maximum value (used for `minTotal` / `maxTotal`)
