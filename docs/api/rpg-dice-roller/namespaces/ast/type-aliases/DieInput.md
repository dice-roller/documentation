[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / DieInput

# Type Alias: DieInput

> **DieInput** = [`ExpressionInput`](ExpressionInput.md) \| [`DieNode`](../interfaces/DieNode.md)

Defined in: [src/ast/builders.ts:83](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L83)

The die of a pool: a number of sides or an expression (a `standard` die, e.g. `6` or
`paren(binary("+", 2, 3))`), or a `DieNode` from `die()`.
