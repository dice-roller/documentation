[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / TargetRule

# Interface: TargetRule

Defined in: [src/ast/nodes.ts:221](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L221)

A target comparison; amount is a whole number from 1 to 10 and defaults to 1.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:224](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L224)

***

### comparePoint

> `readonly` **comparePoint**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:223](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L223)

***

### kind

> `readonly` **kind**: `"success"` \| `"failure"`

Defined in: [src/ast/nodes.ts:222](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L222)
