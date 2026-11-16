[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / PoolNode

# Interface: PoolNode

Defined in: [src/ast/nodes.ts:36](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L36)

A pool of dice, e.g. `4d6kh3`.

## Properties

### description?

> `readonly` `optional` **description?**: [`DescriptionNode`](DescriptionNode.md)

Defined in: [src/ast/nodes.ts:43](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L43)

***

### die

> `readonly` **die**: [`DieNode`](DieNode.md)

Defined in: [src/ast/nodes.ts:40](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L40)

***

### modifiers

> `readonly` **modifiers**: readonly [`ModifierNode`](../type-aliases/ModifierNode.md)[]

Defined in: [src/ast/nodes.ts:42](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L42)

In notation order after deduplication; handlers may execute in a different order.

***

### qty

> `readonly` **qty**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:39](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L39)

The number of dice; a `NumberNode` for literal quantities.

***

### type

> `readonly` **type**: `"pool"`

Defined in: [src/ast/nodes.ts:37](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L37)
