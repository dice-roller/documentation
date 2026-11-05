[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / ResolvedDie

# Interface: ResolvedDie

Defined in: [src/dice/types.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L89)

A die with every value resolved to a plain number, and a `roll()` that always exists.

## Extends

- [`DieSnapshot`](DieSnapshot.md)

## Properties

### average

> `readonly` **average**: `number`

Defined in: [src/dice/types.ts:84](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L84)

#### Inherited from

[`DieSnapshot`](DieSnapshot.md).[`average`](DieSnapshot.md#average)

***

### faceCount

> `readonly` **faceCount**: `number`

Defined in: [src/dice/types.ts:85](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L85)

#### Inherited from

[`DieSnapshot`](DieSnapshot.md).[`faceCount`](DieSnapshot.md#facecount)

***

### max

> `readonly` **max**: `number`

Defined in: [src/dice/types.ts:83](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L83)

#### Inherited from

[`DieSnapshot`](DieSnapshot.md).[`max`](DieSnapshot.md#max)

***

### min

> `readonly` **min**: `number`

Defined in: [src/dice/types.ts:82](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L82)

#### Inherited from

[`DieSnapshot`](DieSnapshot.md).[`min`](DieSnapshot.md#min)

***

### notation

> `readonly` **notation**: `string`

Defined in: [src/dice/types.ts:81](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L81)

#### Inherited from

[`DieSnapshot`](DieSnapshot.md).[`notation`](DieSnapshot.md#notation)

***

### source

> `readonly` **source**: [`DieLike`](../../../../type-aliases/DieLike.md)

Defined in: [src/dice/types.ts:92](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L92)

The die that was resolved.

## Methods

### roll()

> **roll**(`generator`): `number`

Defined in: [src/dice/types.ts:90](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/types.ts#L90)

#### Parameters

##### generator

[`NumberGenerator`](../../../../interfaces/NumberGenerator.md)

#### Returns

`number`
