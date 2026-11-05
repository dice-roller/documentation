[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / BinaryNode

# Interface: BinaryNode

Defined in: [src/ast/nodes.ts:88](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L88)

A binary maths operation, e.g. `2d6 + 3`.

## Properties

### left

> `readonly` **left**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:91](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L91)

***

### op

> `readonly` **op**: `"+"` \| `"-"` \| `"*"` \| `"/"` \| `"%"` \| `"^"`

Defined in: [src/ast/nodes.ts:90](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L90)

***

### right

> `readonly` **right**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:92](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L92)

***

### type

> `readonly` **type**: `"binary"`

Defined in: [src/ast/nodes.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L89)
