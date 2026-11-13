[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / NumberOrGetter

# Type Alias: NumberOrGetter

> **NumberOrGetter** = `number` \| (() => `number`)

Defined in: [src/dice/types.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L18)

A number, or a function that returns one.

Functions are called with the die as `this`, so class getters and methods both work.
