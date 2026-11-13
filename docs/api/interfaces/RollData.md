[@dice-roller/rpg-dice-roller](../index.md) / RollData

# Interface: RollData

Defined in: [src/serialization/formats.ts:21](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L21)

A roll, with its result tree and totals.

The expression is `result.node`. Text output isn't stored; call `present()` after importing.
Numbers can be non-finite (`1/0` is `Infinity`); `EncodedRollData` is the JSON-safe export.

## Properties

### averageTotal

> `readonly` **averageTotal**: `number`

Defined in: [src/serialization/formats.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L29)

***

### maxTotal

> `readonly` **maxTotal**: `number`

Defined in: [src/serialization/formats.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L28)

***

### minTotal

> `readonly` **minTotal**: `number`

Defined in: [src/serialization/formats.ts:27](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L27)

***

### notation

> `readonly` **notation**: `string`

Defined in: [src/serialization/formats.ts:24](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L24)

***

### result

> `readonly` **result**: [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/serialization/formats.ts:25](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L25)

***

### total

> `readonly` **total**: `number`

Defined in: [src/serialization/formats.ts:26](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L26)

***

### type

> `readonly` **type**: `"roll"`

Defined in: [src/serialization/formats.ts:22](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L22)

***

### version

> `readonly` **version**: `1`

Defined in: [src/serialization/formats.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L23)
