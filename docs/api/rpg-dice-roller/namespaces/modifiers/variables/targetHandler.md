[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / targetHandler

# Variable: targetHandler

> `const` **targetHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`TargetNode`](../../ast/interfaces/TargetNode.md)\>

Defined in: [src/modifiers/handlers/target.ts:14](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/handlers/target.ts#L14)

`>=8`, `>=8f<=2`: counts successes and failures.

Items matching `success` count as `1` (flag `target-success`), items matching `failure` as `-1`
(flag `target-failure`), and the rest as `0` (via `calculationValue`). An item matching both
is a success. Dropped items are still scored and flagged, but remain excluded from the total.
On a group, it always counts the members by their totals.
