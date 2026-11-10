[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / NumberOrGetter

# Type Alias: NumberOrGetter

> **NumberOrGetter** = `number` \| (() => `number`)

Defined in: [src/dice/types.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/dice/types.ts#L18)

A number, or a function that returns one.

Functions are called with the die as `this`, so class getters and methods both work.
