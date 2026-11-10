[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / DieInput

# Type Alias: DieInput

> **DieInput** = [`ExpressionInput`](ExpressionInput.md) \| [`DieNode`](../interfaces/DieNode.md)

Defined in: [src/ast/builders.ts:84](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/builders.ts#L84)

The die of a pool: a number of sides or an expression (a `standard` die, e.g. `6` or
`paren(binary("+", 2, 3))`), or a `DieNode` from `die()`.
