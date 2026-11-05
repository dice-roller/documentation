[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / uniqueHandler

# Variable: uniqueHandler

> `const` **uniqueHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`UniqueNode`](../../ast/interfaces/UniqueNode.md)\>

Defined in: [src/modifiers/handlers/unique.ts:20](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/handlers/unique.ts#L20)

`u`, `uo`: re-rolls rolls whose value an earlier roll already has (optionally only those
matching the compare point), replacing the value (the initial value is kept). The first roll is
never re-rolled.

`u` repeats while the current value is a matching duplicate (up to `ctx.limits.maxIterations`
per roll, default 1000, flag `unique`); `uo` re-rolls once (flag `unique-once`). Both can leave
duplicates: the limit can be reached, or a replacement can fall outside the compare point.

## Throws

the pool die or `rollDie` is missing, or the die can only roll one value,
  even if there are no duplicates
