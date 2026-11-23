[@dice-roller/rpg-dice-roller](../index.md) / HistoryData

# Interface: HistoryData

Defined in: [src/serialization/formats.ts:37](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L37)

A roll history.

## Properties

### rolls

> `readonly` **rolls**: readonly [`RollData`](RollData.md)[]

Defined in: [src/serialization/formats.ts:40](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L40)

***

### total

> `readonly` **total**: `number`

Defined in: [src/serialization/formats.ts:42](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L42)

Can be `NaN`, e.g. for a history of `1/0` and `-1/0`.

***

### type

> `readonly` **type**: `"history"`

Defined in: [src/serialization/formats.ts:38](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L38)

***

### version

> `readonly` **version**: `1`

Defined in: [src/serialization/formats.ts:39](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L39)
