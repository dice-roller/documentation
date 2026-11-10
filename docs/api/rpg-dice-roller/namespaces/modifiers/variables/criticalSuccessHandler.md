[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / criticalSuccessHandler

# Variable: criticalSuccessHandler

> `const` **criticalSuccessHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`CriticalSuccessNode`](../../ast/interfaces/CriticalSuccessNode.md)\>

Defined in: [src/modifiers/handlers/critical-success.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/handlers/critical-success.ts#L13)

`cs`, `cs>18`: flags rolls matching the compare point (the die's max by default) as
`critical-success`.

Purely for display: values and totals don't change.
