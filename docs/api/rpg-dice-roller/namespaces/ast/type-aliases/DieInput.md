[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / DieInput

# Type Alias: DieInput

> **DieInput** = [`ExpressionInput`](ExpressionInput.md) \| [`DieNode`](../interfaces/DieNode.md)

Defined in: [src/ast/builders.ts:93](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L93)

The die of a pool: a number of sides or an expression (a `standard` die, e.g. `6` or
`paren(binary("+", 2, 3))`), or a `DieNode` from `die()`.
