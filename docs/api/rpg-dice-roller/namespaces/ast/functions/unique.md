[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / unique

# Function: unique()

> **unique**(`options?`): [`UniqueNode`](../interfaces/UniqueNode.md)

Defined in: [src/ast/builders.ts:309](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/builders.ts#L309)

Re-roll duplicate dice. `once` is the `uo` alias; numeric `limit: 1` has the same budget but
retains `u1` notation. Limits count additional rolls per die and cannot exceed the context cap.

## Parameters

### options?

#### comparePoint?

[`ComparePoint`](../interfaces/ComparePoint.md)

#### limit?

`number`

#### once?

`boolean`

## Returns

[`UniqueNode`](../interfaces/UniqueNode.md)
