[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / explodeMatchingBatchHandler

# Variable: explodeMatchingBatchHandler

> `const` **explodeMatchingBatchHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`ExplodeMatchingBatchNode`](../../ast/interfaces/ExplodeMatchingBatchNode.md)\>

Defined in: [src/modifiers/handlers/explode-matching-batch.ts:21](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/handlers/explode-matching-batch.ts#L21)

`!m`: repeats a complete batch when every die in it has the same value and the optional compare
point matches. An optional failure compare point is checked first and zeroes accumulated scoring.
Limits count additional batches and are capped by `ctx.limits.maxIterations`.

## Throws

the pool die or `rollBatch` is missing
