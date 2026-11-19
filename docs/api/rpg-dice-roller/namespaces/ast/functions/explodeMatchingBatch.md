[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / explodeMatchingBatch

# Function: explodeMatchingBatch()

> **explodeMatchingBatch**(`options?`): [`ExplodeMatchingBatchNode`](../interfaces/ExplodeMatchingBatchNode.md)

Defined in: [src/ast/builders.ts:295](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L295)

Explodes complete pool batches whose dice all match; an optional failure comparison stops `!m`.

## Parameters

### options?

#### comparePoint?

[`ComparePoint`](../interfaces/ComparePoint.md)

#### failureComparePoint?

[`ComparePoint`](../interfaces/ComparePoint.md)

#### limit?

`number`

## Returns

[`ExplodeMatchingBatchNode`](../interfaces/ExplodeMatchingBatchNode.md)
