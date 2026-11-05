[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / nodeToNotation

# Function: nodeToNotation()

> **nodeToNotation**(`node`): `string`

Defined in: [src/ast/notation.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/notation.ts#L29)

Converts an expression to canonical notation, e.g. a pool to `4d6kh3`.

Parentheses may be added to preserve precedence. Parsed notation round-trips through the parser,
but arbitrary builder nodes need not: for example, `range`, `face`, and custom dice are written
as display-only `name(args)` forms, and ambiguous `!=` comparisons may be written as `<>`.

## Parameters

### node

[`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

## Returns

`string`
