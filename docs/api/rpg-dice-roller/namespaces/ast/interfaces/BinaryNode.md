[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / BinaryNode

# Interface: BinaryNode

Defined in: [src/ast/nodes.ts:92](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L92)

A binary maths operation, e.g. `2d6 + 3`.

## Properties

### left

> `readonly` **left**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:95](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L95)

***

### op

> `readonly` **op**: `"+"` \| `"-"` \| `"*"` \| `"/"` \| `"%"` \| `"^"`

Defined in: [src/ast/nodes.ts:94](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L94)

***

### right

> `readonly` **right**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:96](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L96)

***

### type

> `readonly` **type**: `"binary"`

Defined in: [src/ast/nodes.ts:93](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L93)
