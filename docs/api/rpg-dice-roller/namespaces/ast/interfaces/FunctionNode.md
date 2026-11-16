[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / FunctionNode

# Interface: FunctionNode

Defined in: [src/ast/nodes.ts:143](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L143)

A maths function call, e.g. `floor(2d6 / 2)`.

## Properties

### args

> `readonly` **args**: readonly [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)[]

Defined in: [src/ast/nodes.ts:146](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L146)

***

### name

> `readonly` **name**: `"abs"` \| `"ceil"` \| `"cos"` \| `"exp"` \| `"floor"` \| `"log"` \| `"round"` \| `"sign"` \| `"sin"` \| `"sqrt"` \| `"tan"` \| `"pow"` \| `"max"` \| `"min"` \| `"trunc"`

Defined in: [src/ast/nodes.ts:145](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L145)

***

### type

> `readonly` **type**: `"function"`

Defined in: [src/ast/nodes.ts:144](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L144)
