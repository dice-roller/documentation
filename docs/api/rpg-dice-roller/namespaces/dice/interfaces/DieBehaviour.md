[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / DieBehaviour

# Interface: DieBehaviour

Defined in: [src/dice/types.ts:46](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L46)

Optional behaviour a die can provide, instead of the default helpers.

For face dice, bounds default to the extrema, average to the mean including repeats, and
face count to the array length. For range dice, average defaults to `(min + max) / 2` and
face count to `max - min + 1`. Overrides are resolved with the die as `this`.

## Properties

### average

> `readonly` **average**: [`NumberOrGetter`](../type-aliases/NumberOrGetter.md)

Defined in: [src/dice/types.ts:52](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L52)

Average of a single roll; override this for a custom distribution.

***

### faceCount

> `readonly` **faceCount**: [`NumberOrGetter`](../type-aliases/NumberOrGetter.md)

Defined in: [src/dice/types.ts:54](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L54)

Number of faces, including repeats.

***

### max

> `readonly` **max**: [`NumberOrGetter`](../type-aliases/NumberOrGetter.md)

Defined in: [src/dice/types.ts:50](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L50)

Highest value, used in `max` mode; defaults to the highest face for a face die.

***

### min

> `readonly` **min**: [`NumberOrGetter`](../type-aliases/NumberOrGetter.md)

Defined in: [src/dice/types.ts:48](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L48)

Lowest value, used in `min` mode; defaults to the lowest face for a face die.

## Methods

### roll()

> **roll**(`generator`): `number`

Defined in: [src/dice/types.ts:59](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L59)

Rolls once using the supplied generator; called with the die as `this` in random mode.
It must return a finite number. `min` / `max` mode ignores it and uses the resolved bounds.

#### Parameters

##### generator

[`NumberGenerator`](../../../../interfaces/NumberGenerator.md)

#### Returns

`number`
