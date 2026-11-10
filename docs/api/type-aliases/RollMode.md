[@dice-roller/rpg-dice-roller](../index.md) / RollMode

# Type Alias: RollMode

> **RollMode** = `"random"` \| `"min"` \| `"max"`

Defined in: [src/evaluator/RollContext.ts:10](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/evaluator/RollContext.ts#L10)

How dice are rolled.

- `random`: use the generator
- `min` / `max`: every die rolls its minimum / maximum value (used for `minTotal` / `maxTotal`)
