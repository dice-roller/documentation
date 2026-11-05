[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / FunctionNode

# Interface: FunctionNode

Defined in: [src/ast/nodes.ts:130](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L130)

A maths function call, e.g. `floor(2d6 / 2)`.

## Properties

### args

> `readonly` **args**: readonly [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)[]

Defined in: [src/ast/nodes.ts:133](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L133)

***

### name

> `readonly` **name**: `"abs"` \| `"ceil"` \| `"cos"` \| `"exp"` \| `"floor"` \| `"log"` \| `"round"` \| `"sign"` \| `"sin"` \| `"sqrt"` \| `"tan"` \| `"pow"` \| `"max"` \| `"min"` \| `"trunc"`

Defined in: [src/ast/nodes.ts:132](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L132)

***

### type

> `readonly` **type**: `"function"`

Defined in: [src/ast/nodes.ts:131](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L131)
