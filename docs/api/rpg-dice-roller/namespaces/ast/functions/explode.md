[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / explode

# Function: explode()

> **explode**(`options?`): [`ExplodeNode`](../interfaces/ExplodeNode.md)

Defined in: [src/ast/builders.ts:203](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L203)

Explode matching rolls; compound and penetrate default to false, and the handler supplies the default compare point.

## Parameters

### options?

#### comparePoint?

[`ComparePoint`](../interfaces/ComparePoint.md)

#### compound?

`boolean`

#### penetrate?

`boolean`

## Returns

[`ExplodeNode`](../interfaces/ExplodeNode.md)
