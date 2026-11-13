[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / nodeToNotation

# Function: nodeToNotation()

> **nodeToNotation**(`node`): `string`

Defined in: [src/ast/notation.ts:34](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/notation.ts#L34)

Converts an expression to canonical notation, e.g. a pool to `4d6kh3`.

Parentheses may be added to preserve precedence. Parsed notation round-trips through the parser,
but arbitrary builder nodes need not: custom factories, unsupported `range` / `face` arguments,
and face lists above the notation limit use display-only `name(args)` forms. Ambiguous `!=`
comparisons may be written as `<>`.

## Parameters

### node

[`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

## Returns

`string`
