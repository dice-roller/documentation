[@dice-roller/rpg-dice-roller](../index.md) / RandomEngine

# Interface: RandomEngine

Defined in: [src/random/RandomEngine.ts:8](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/random/RandomEngine.ts#L8)

A source of randomness.

The same shape as random-js's `Engine`, so `nativeMath`, `nodeCrypto`, `browserCrypto` and
`MersenneTwister19937.seed(n)` can be used directly as the `engine` option of a `Roll` or
`Roller`. Use separately seeded engine instances for reproducible independent sequences.

## Methods

### next()

> **next**(): `number`

Defined in: [src/random/RandomEngine.ts:10](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/random/RandomEngine.ts#L10)

Returns a 32-bit integer.

#### Returns

`number`
