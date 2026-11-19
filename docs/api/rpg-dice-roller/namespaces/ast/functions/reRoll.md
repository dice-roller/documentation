[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / reRoll

# Function: reRoll()

> **reRoll**(`options?`): [`ReRollNode`](../interfaces/ReRollNode.md)

Defined in: [src/ast/builders.ts:374](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L374)

Re-roll matching dice. `once` is the `ro` alias; numeric `limit: 1` has the same budget but
retains `r1` notation. Limits count generations per die and cannot exceed the context cap;
`amount` is the positive safe-integer number of replacement dice generated per match and defaults
to 1.

## Parameters

### options?

#### amount?

`number`

#### comparePoint?

[`ComparePoint`](../interfaces/ComparePoint.md)

#### limit?

`number`

#### once?

`boolean`

## Returns

[`ReRollNode`](../interfaces/ReRollNode.md)
