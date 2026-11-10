[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / standardDie

# Function: standardDie()

> **standardDie**(`sides`): [`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

Defined in: [src/dice/presets.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/dice/presets.ts#L77)

A die numbered from 1 to `sides`, e.g. `standardDie(6)` for `d6`.

Registered in the `DieRegistry` as `standard`.

## Parameters

### sides

`number`

## Returns

[`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

## Throws

`sides` isn't a positive safe integer
