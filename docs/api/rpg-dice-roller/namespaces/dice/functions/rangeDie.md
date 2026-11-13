[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / rangeDie

# Function: rangeDie()

> **rangeDie**(`min`, `max`, `options?`): [`RangeDieDefinition`](../interfaces/RangeDieDefinition.md)

Defined in: [src/dice/presets.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/presets.ts#L18)

A die with every integer from `min` to `max`, e.g. `rangeDie(-2, 3)`.

Registered in the `DieRegistry` as `range`; notation such as `d{0...2}` or `d{0:2}` uses it
for implicit ascending safe-integer ranges.

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
