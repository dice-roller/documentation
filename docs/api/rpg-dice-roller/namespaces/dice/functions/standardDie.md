[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / standardDie

# Function: standardDie()

> **standardDie**(`sides`): [`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

Defined in: [src/dice/presets.ts:75](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/presets.ts#L75)

A die numbered from 1 to `sides`, e.g. `standardDie(6)` for `d6`.

Registered in the `DieRegistry` as `standard`.

## Parameters

### sides

`number`

## Returns

[`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

## Throws

`sides` isn't a positive safe integer
