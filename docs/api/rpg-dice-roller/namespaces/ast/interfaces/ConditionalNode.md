[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ConditionalNode

# Interface: ConditionalNode

Defined in: [src/ast/nodes.ts:150](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L150)

A conditional expression; `null` preserves the omitted true-branch shorthand.

## Properties

### condition

> `readonly` **condition**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:152](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L152)

***

### falseBranch

> `readonly` **falseBranch**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:154](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L154)

***

### trueBranch

> `readonly` **trueBranch**: [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md) \| `null`

Defined in: [src/ast/nodes.ts:153](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L153)

***

### type

> `readonly` **type**: `"conditional"`

Defined in: [src/ast/nodes.ts:151](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L151)
