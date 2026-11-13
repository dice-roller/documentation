[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / explode

# Function: explode()

> **explode**(`options?`): [`ExplodeNode`](../interfaces/ExplodeNode.md)

Defined in: [src/ast/builders.ts:208](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L208)

Explode matching rolls. An optional positive safe-integer `limit` bounds additional rolls per
initial die and is capped by the roll context's `maxIterations`.

## Parameters

### options?

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
