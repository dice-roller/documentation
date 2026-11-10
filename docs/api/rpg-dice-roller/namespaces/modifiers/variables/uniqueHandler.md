[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / uniqueHandler

# Variable: uniqueHandler

> `const` **uniqueHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`UniqueNode`](../../ast/interfaces/UniqueNode.md)\>

Defined in: [src/modifiers/handlers/unique.ts:21](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/handlers/unique.ts#L21)

`u`, `uo` and numeric limits: re-roll rolls whose value an earlier roll already has (optionally
only those matching the compare point), replacing the value (the initial value is kept). The first
roll is never re-rolled.

`u` repeats while the current value is a matching duplicate (up to its optional limit or
`ctx.limits.maxIterations` per roll, default 1000, flag `unique`); `uo` re-rolls once (flag
`unique-once`). Both can leave duplicates: the limit can be reached, or a replacement can fall
outside the compare point.

## Throws

the pool die or `rollDie` is missing, or the die can only roll one value,
  even if there are no duplicates
