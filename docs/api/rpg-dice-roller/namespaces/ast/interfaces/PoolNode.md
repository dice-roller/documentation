[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / PoolNode

# Interface: PoolNode

Defined in: [src/ast/nodes.ts:33](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L33)

A pool of dice, e.g. `4d6kh3`.

## Properties

### description?

> `readonly` `optional` **description?**: [`DescriptionNode`](DescriptionNode.md)

Defined in: [src/ast/nodes.ts:40](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L40)

***

### die

> `readonly` **die**: [`DieNode`](DieNode.md)

Defined in: [src/ast/nodes.ts:37](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L37)

***

### modifiers

> `readonly` **modifiers**: readonly [`ModifierNode`](../type-aliases/ModifierNode.md)[]

Defined in: [src/ast/nodes.ts:39](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L39)

In notation order after deduplication; handlers may execute in a different order.

***

### qty

> `readonly` **qty**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:36](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L36)

The number of dice; a `NumberNode` for literal quantities.

***

### type

> `readonly` **type**: `"pool"`

Defined in: [src/ast/nodes.ts:34](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L34)
