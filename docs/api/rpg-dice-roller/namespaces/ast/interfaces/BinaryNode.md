[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / BinaryNode

# Interface: BinaryNode

Defined in: [src/ast/nodes.ts:90](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L90)

A binary maths operation, e.g. `2d6 + 3`.

## Properties

### left

> `readonly` **left**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:93](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L93)

***

### op

> `readonly` **op**: `"+"` \| `"-"` \| `"*"` \| `"/"` \| `"%"` \| `"^"`

Defined in: [src/ast/nodes.ts:92](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L92)

***

### right

> `readonly` **right**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:94](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L94)

***

### type

> `readonly` **type**: `"binary"`

Defined in: [src/ast/nodes.ts:91](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L91)
