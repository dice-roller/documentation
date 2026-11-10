[@dice-roller/rpg-dice-roller](../index.md) / Encoded

# Type Alias: Encoded\<T\>

> **Encoded**\<`T`\> = `T` *extends* `number` ? `number` *extends* `T` ? [`EncodedNumber`](EncodedNumber.md) : `T` : `T` *extends* readonly infer U[] ? readonly `Encoded`\<`U`\>[] : `T` *extends* `object` ? `{ readonly [K in keyof T]: Encoded<T[K]> }` : `T`

Defined in: [src/serialization/formats.ts:60](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/serialization/formats.ts#L60)

The data with every number (except literal ones, like `version`) as an `EncodedNumber`.

## Type Parameters

### T

`T`
