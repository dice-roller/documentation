[@dice-roller/rpg-dice-roller](../index.md) / EncodedNumber

# Type Alias: EncodedNumber

> **EncodedNumber** = `number` \| \{ `$number`: [`NonFiniteNumber`](NonFiniteNumber.md); \}

Defined in: [src/serialization/formats.ts:57](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/serialization/formats.ts#L57)

A number in exported data: a finite number as it is, otherwise a tag, e.g.
`{ "$number": "Infinity" }`, so it survives JSON (which would turn it into `null`).
