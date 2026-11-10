[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / explode

# Function: explode()

> **explode**(`options?`): [`ExplodeNode`](../interfaces/ExplodeNode.md)

Defined in: [src/ast/builders.ts:208](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/builders.ts#L208)

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
