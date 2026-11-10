[@dice-roller/rpg-dice-roller](../index.md) / EncodedNumber

# Type Alias: EncodedNumber

> **EncodedNumber** = `number` \| \{ `$number`: [`NonFiniteNumber`](NonFiniteNumber.md); \}

Defined in: [src/serialization/formats.ts:57](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/serialization/formats.ts#L57)

A number in exported data: a finite number as it is, otherwise a tag, e.g.
`{ "$number": "Infinity" }`, so it survives JSON (which would turn it into `null`).
