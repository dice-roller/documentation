[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / die

# Function: die()

> **die**(`name`, ...`args`): [`DieNode`](../interfaces/DieNode.md)

Defined in: [src/ast/builders.ts:107](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L107)

A reference to a die factory, e.g. `die("percentile")` for `d%`, or `die("range", -2, 3)`.
Register custom names in the die registry used by the evaluator before rolling. Registration is
not checked here; custom dice and some built-ins have display-only notation.

## Parameters

### name

`string`

### args

...[`ExpressionInput`](../type-aliases/ExpressionInput.md)[]

## Returns

[`DieNode`](../interfaces/DieNode.md)
