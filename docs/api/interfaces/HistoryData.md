[@dice-roller/rpg-dice-roller](../index.md) / HistoryData

# Interface: HistoryData

Defined in: [src/serialization/formats.ts:33](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/serialization/formats.ts#L33)

A roll history.

## Properties

### rolls

> `readonly` **rolls**: readonly [`RollData`](RollData.md)[]

Defined in: [src/serialization/formats.ts:36](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/serialization/formats.ts#L36)

***

### total

> `readonly` **total**: `number`

Defined in: [src/serialization/formats.ts:38](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/serialization/formats.ts#L38)

Can be `NaN`, e.g. for a history of `1/0` and `-1/0`.

***

### type

> `readonly` **type**: `"history"`

Defined in: [src/serialization/formats.ts:34](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/serialization/formats.ts#L34)

***

### version

> `readonly` **version**: `1`

Defined in: [src/serialization/formats.ts:35](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/serialization/formats.ts#L35)
