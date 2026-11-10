[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / die

# Function: die()

> **die**(`name`, ...`args`): [`DieNode`](../interfaces/DieNode.md)

Defined in: [src/ast/builders.ts:109](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/builders.ts#L109)

A reference to a die factory, e.g. `die("percentile")` for `d%`, or `die("range", -2, 3)`.
Register custom names in the die registry used by the evaluator before rolling. Registration is
not checked here; valid literal `range` and `face` dice use brace notation, while custom names
and unsupported arguments have display-only notation.

## Parameters

### name

`string`

### args

...[`ExpressionInput`](../type-aliases/ExpressionInput.md)[]

## Returns

[`DieNode`](../interfaces/DieNode.md)
