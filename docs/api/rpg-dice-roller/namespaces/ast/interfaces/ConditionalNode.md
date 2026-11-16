[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ConditionalNode

# Interface: ConditionalNode

Defined in: [src/ast/nodes.ts:141](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L141)

A conditional expression; `null` preserves the omitted true-branch shorthand.

## Properties

### condition

> `readonly` **condition**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:143](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L143)

***

### falseBranch

> `readonly` **falseBranch**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:145](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L145)

***

### trueBranch

> `readonly` **trueBranch**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md) \| `null`

Defined in: [src/ast/nodes.ts:144](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L144)

***

### type

> `readonly` **type**: `"conditional"`

Defined in: [src/ast/nodes.ts:142](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L142)
