[@dice-roller/rpg-dice-roller](../index.md) / EncodedRollData

# Type Alias: EncodedRollData

> **EncodedRollData** = [`Encoded`](Encoded.md)\<[`RollData`](../interfaces/RollData.md)\>

Defined in: [src/serialization/formats.ts:75](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L75)

An exported roll: JSON-safe, with non-finite numbers tagged.

Plain `RollData` with only finite numbers is valid encoded data too.
