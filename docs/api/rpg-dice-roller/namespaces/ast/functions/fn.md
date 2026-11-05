[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / fn

# Function: fn()

> **fn**(`name`, ...`args`): [`FunctionNode`](../interfaces/FunctionNode.md)

Defined in: [src/ast/builders.ts:173](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L173)

A maths function call, e.g. `fn("floor", binary("/", pool(2, 6), 2))`. Arity is checked at evaluation.

## Parameters

### name

`"abs"` \| `"ceil"` \| `"cos"` \| `"exp"` \| `"floor"` \| `"log"` \| `"round"` \| `"sign"` \| `"sin"` \| `"sqrt"` \| `"tan"` \| `"pow"` \| `"max"` \| `"min"` \| `"trunc"`

### args

...[`ExpressionInput`](../type-aliases/ExpressionInput.md)[]

## Returns

[`FunctionNode`](../interfaces/FunctionNode.md)
