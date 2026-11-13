[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / reRoll

# Function: reRoll()

> **reRoll**(`options?`): [`ReRollNode`](../interfaces/ReRollNode.md)

Defined in: [src/ast/builders.ts:291](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L291)

Re-roll matching dice. `once` is the `ro` alias; numeric `limit: 1` has the same budget but
retains `r1` notation. Limits count additional rolls per die and cannot exceed the context cap.

## Parameters

### options?

#### comparePoint?

[`ComparePoint`](../interfaces/ComparePoint.md)

#### limit?

`number`

#### once?

`boolean`

## Returns

[`ReRollNode`](../interfaces/ReRollNode.md)
