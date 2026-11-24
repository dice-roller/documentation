[@dice-roller/rpg-dice-roller](../index.md) / RollHistory

# Class: RollHistory

Defined in: [src/RollHistory.ts:9](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L9)

A log of rolls.

## Implements

- `Iterable`\<[`Roll`](Roll.md)\<`unknown`, [`DrawMode`](../type-aliases/DrawMode.md)\>\>

## Constructors

### Constructor

> **new RollHistory**(): `RollHistory`

#### Returns

`RollHistory`

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [src/RollHistory.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L23)

Number of rolls in the history.

##### Returns

`number`

***

### rolls

#### Get Signature

> **get** **rolls**(): readonly [`Roll`](Roll.md)\<`unknown`, [`DrawMode`](../type-aliases/DrawMode.md)\>[]

Defined in: [src/RollHistory.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L13)

A copy of the rolls, oldest first.

##### Returns

readonly [`Roll`](Roll.md)\<`unknown`, [`DrawMode`](../type-aliases/DrawMode.md)\>[]

***

### total

#### Get Signature

> **get** **total**(): `number`

Defined in: [src/RollHistory.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L18)

The sum of the roll totals, or 0 when empty (`NaN` if they include both `Infinity` and `-Infinity`).

##### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<[`Roll`](Roll.md)\<`unknown`, [`DrawMode`](../type-aliases/DrawMode.md)\>\>

Defined in: [src/RollHistory.ts:38](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L38)

Iterates over a snapshot of the rolls, oldest first.

#### Returns

`Iterator`\<[`Roll`](Roll.md)\<`unknown`, [`DrawMode`](../type-aliases/DrawMode.md)\>\>

#### Implementation of

`Iterable.[iterator]`

***

### add()

> **add**(...`rolls`): `void`

Defined in: [src/RollHistory.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L28)

Appends rolls in order.

#### Parameters

##### rolls

...[`Roll`](Roll.md)\<`unknown`, [`DrawMode`](../type-aliases/DrawMode.md)\>[]

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [src/RollHistory.ts:33](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L33)

Removes all rolls from the history.

#### Returns

`void`

***

### present()

> **present**\<`T`\>(`presenter?`): `T`

Defined in: [src/RollHistory.ts:43](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L43)

Presents the whole history; defaults to the default `TextPresenter`.

#### Type Parameters

##### T

`T` = `string`

#### Parameters

##### presenter?

[`Presenter`](../interfaces/Presenter.md)\<`T`\>

#### Returns

`T`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [src/RollHistory.ts:55](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L55)

JSON-safe export data with non-finite numbers tagged; evaluates uncached roll min/max totals.

#### Returns

##### rolls

> `readonly` **rolls**: readonly `object`[]

##### total

> `readonly` **total**: [`EncodedNumber`](../type-aliases/EncodedNumber.md)

Can be `NaN`, e.g. for a history of `1/0` and `-1/0`.

##### type

> `readonly` **type**: `"history"`

##### version

> `readonly` **version**: `1`

***

### toString()

> **toString**(): `string`

Defined in: [src/RollHistory.ts:50](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollHistory.ts#L50)

Always the default `TextPresenter` output.

#### Returns

`string`
