[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / conditional

# Function: conditional()

> **conditional**(`condition`, `trueBranch`, `falseBranch`): [`ConditionalNode`](../interfaces/ConditionalNode.md)

Defined in: [src/ast/builders.ts:206](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L206)

A conditional expression, using `null` for the shorthand's omitted true branch.

## Parameters

### condition

[`ExpressionInput`](../type-aliases/ExpressionInput.md)

### trueBranch

[`ExpressionInput`](../type-aliases/ExpressionInput.md) \| `null`

### falseBranch

[`ExpressionInput`](../type-aliases/ExpressionInput.md)

## Returns

[`ConditionalNode`](../interfaces/ConditionalNode.md)
