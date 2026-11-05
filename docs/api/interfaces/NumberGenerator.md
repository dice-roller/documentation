[@dice-roller/rpg-dice-roller](../index.md) / NumberGenerator

# Interface: NumberGenerator

Defined in: [src/random/NumberGenerator.ts:10](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/random/NumberGenerator.ts#L10)

Generates numbers in a range from a `RandomEngine`.

Used by dice and modifier handlers. Each `Roller` has its own generator, using `nativeMath`
by default. Passing the same stateful engine to multiple rollers shares that engine's state.

## Properties

### engine

> `readonly` **engine**: [`RandomEngine`](RandomEngine.md) = `nativeMath`

Defined in: [src/random/NumberGenerator.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/random/NumberGenerator.ts#L13)

## Methods

### integer()

> **integer**(`min`, `max`): `number`

Defined in: [src/random/NumberGenerator.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/random/NumberGenerator.ts#L18)

Returns an integer between `min` and `max`, inclusive.

#### Parameters

##### min

`number`

##### max

`number`

#### Returns

`number`

***

### real()

> **real**(`min`, `max`, `inclusive?`): `number`

Defined in: [src/random/NumberGenerator.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/random/NumberGenerator.ts#L23)

Returns a real number between `min` and `max` (`max` is excluded unless `inclusive` is true).

#### Parameters

##### min

`number`

##### max

`number`

##### inclusive?

`boolean` = `false`

#### Returns

`number`
