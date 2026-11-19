[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / explode

# Function: explode()

> **explode**(`options?`): [`ExplodeNode`](../interfaces/ExplodeNode.md)

Defined in: [src/ast/builders.ts:272](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L272)

Explode matching rolls. An optional positive safe-integer `limit` bounds generations per
initial die and is capped by the roll context's `maxIterations`; `amount` is the positive
safe-integer number of child dice generated per match and defaults to 1.

## Parameters

### options?

#### amount?

`number`

#### comparePoint?

[`ComparePoint`](../interfaces/ComparePoint.md)

#### compound?

`boolean`

#### limit?

`number`

#### penetrate?

`boolean`

## Returns

[`ExplodeNode`](../interfaces/ExplodeNode.md)
