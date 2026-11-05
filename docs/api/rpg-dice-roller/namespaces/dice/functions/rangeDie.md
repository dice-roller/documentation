[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / rangeDie

# Function: rangeDie()

> **rangeDie**(`min`, `max`, `options?`): [`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

Defined in: [src/dice/presets.ts:17](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/presets.ts#L17)

A die with every integer from `min` to `max`, e.g. `rangeDie(-2, 3)`.

Registered in the `DieRegistry` as `range`.

## Parameters

### min

`number`

### max

`number`

### options?

[`DieOptions`](../interfaces/DieOptions.md) = `{}`

## Returns

[`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

## Throws

`min` or `max` isn't a safe integer, or `min` is greater than `max`
