[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / FunctionNode

# Interface: FunctionNode

Defined in: [src/ast/nodes.ts:132](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L132)

A maths function call, e.g. `floor(2d6 / 2)`.

## Properties

### args

> `readonly` **args**: readonly [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)[]

Defined in: [src/ast/nodes.ts:135](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L135)

***

### name

> `readonly` **name**: `"abs"` \| `"ceil"` \| `"cos"` \| `"exp"` \| `"floor"` \| `"log"` \| `"round"` \| `"sign"` \| `"sin"` \| `"sqrt"` \| `"tan"` \| `"pow"` \| `"max"` \| `"min"` \| `"trunc"`

Defined in: [src/ast/nodes.ts:134](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L134)

***

### type

> `readonly` **type**: `"function"`

Defined in: [src/ast/nodes.ts:133](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L133)
