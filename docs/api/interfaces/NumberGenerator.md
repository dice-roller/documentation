[@dice-roller/rpg-dice-roller](../index.md) / NumberGenerator

# Interface: NumberGenerator

Defined in: [src/random/NumberGenerator.ts:35](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/NumberGenerator.ts#L35)

Generates numbers in a range from a `RandomEngine`.

Used by dice and modifier handlers. Each `Roller` has its own generator, using `nativeMath`
by default. Passing the same stateful engine to multiple rollers shares that engine's state.

## Properties

### engine

> `readonly` **engine**: [`RandomEngine`](RandomEngine.md) = `nativeMath`

Defined in: [src/random/NumberGenerator.ts:38](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/NumberGenerator.ts#L38)

## Methods

### integer()

> **integer**(`min`, `max`): `number`

Defined in: [src/random/NumberGenerator.ts:43](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/NumberGenerator.ts#L43)

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

Defined in: [src/random/NumberGenerator.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/NumberGenerator.ts#L69)

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
