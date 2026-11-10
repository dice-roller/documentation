[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / criticalFailureHandler

# Variable: criticalFailureHandler

> `const` **criticalFailureHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`CriticalFailureNode`](../../ast/interfaces/CriticalFailureNode.md)\>

Defined in: [src/modifiers/handlers/critical-failure.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/handlers/critical-failure.ts#L13)

`cf`, `cf<3`: flags rolls matching the compare point (the die's min by default) as
`critical-failure`.

Purely for display: values and totals don't change.
