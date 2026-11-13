[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / standardDie

# Function: standardDie()

> **standardDie**(`sides`): [`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

Defined in: [src/dice/presets.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/presets.ts#L77)

A die numbered from 1 to `sides`, e.g. `standardDie(6)` for `d6`.

Registered in the `DieRegistry` as `standard`.

## Parameters

### sides

`number`

## Returns

[`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

## Throws

`sides` isn't a positive safe integer
