[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / targetHandler

# Variable: targetHandler

> `const` **targetHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`TargetNode`](../../ast/interfaces/TargetNode.md)\>

Defined in: [src/modifiers/handlers/target.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/handlers/target.ts#L13)

`>=8`, `>=8:2f<=2`: counts weighted successes and failures.

The last matching rule determines the signed contribution. Dropped items are still scored and
flagged, but remain excluded from the total. Groups count members by their totals.
