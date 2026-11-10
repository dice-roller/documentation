[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / isRollHistory

# Function: isRollHistory()

> **isRollHistory**(`target`): `target is RollHistory`

Defined in: [src/presenters/Presentable.ts:26](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/Presentable.ts#L26)

Narrows a presentable to a history by its shape: no `type` property and a `rolls` property.
This is not validation of arbitrary input; lookalike objects can match.

## Parameters

### target

[`Presentable`](../../../../type-aliases/Presentable.md)

## Returns

`target is RollHistory`
