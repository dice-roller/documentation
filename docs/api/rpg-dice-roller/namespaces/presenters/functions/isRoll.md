[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / isRoll

# Function: isRoll()

> **isRoll**(`target`): `target is Roll<unknown>`

Defined in: [src/presenters/Presentable.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/Presentable.ts#L18)

Narrows a presentable to a roll by its shape: no `type` property and a `result` property.
This is not validation of arbitrary input; lookalike objects can match.

## Parameters

### target

[`Presentable`](../../../../type-aliases/Presentable.md)

## Returns

`target is Roll<unknown>`
