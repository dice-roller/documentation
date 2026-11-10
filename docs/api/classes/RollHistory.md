[@dice-roller/rpg-dice-roller](../index.md) / RollHistory

# Class: RollHistory

Defined in: [src/RollHistory.ts:8](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L8)

A log of rolls.

## Implements

- `Iterable`\<[`Roll`](Roll.md)\<`unknown`\>\>

## Constructors

### Constructor

> **new RollHistory**(): `RollHistory`

#### Returns

`RollHistory`

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [src/RollHistory.ts:22](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L22)

Number of rolls in the history.

##### Returns

`number`

***

### rolls

#### Get Signature

> **get** **rolls**(): readonly [`Roll`](Roll.md)\<`unknown`\>[]

Defined in: [src/RollHistory.ts:12](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L12)

A copy of the rolls, oldest first.

##### Returns

readonly [`Roll`](Roll.md)\<`unknown`\>[]

***

### total

#### Get Signature

> **get** **total**(): `number`

Defined in: [src/RollHistory.ts:17](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L17)

The sum of the roll totals, or 0 when empty (`NaN` if they include both `Infinity` and `-Infinity`).

##### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<[`Roll`](Roll.md)\<`unknown`\>\>

Defined in: [src/RollHistory.ts:37](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L37)

Iterates over a snapshot of the rolls, oldest first.

#### Returns

`Iterator`\<[`Roll`](Roll.md)\<`unknown`\>\>

#### Implementation of

`Iterable.[iterator]`

***

### add()

> **add**(...`rolls`): `void`

Defined in: [src/RollHistory.ts:27](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L27)

Appends rolls in order.

#### Parameters

##### rolls

...[`Roll`](Roll.md)\<`unknown`\>[]

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [src/RollHistory.ts:32](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L32)

Removes all rolls from the history.

#### Returns

`void`

***

### present()

> **present**\<`T`\>(`presenter?`): `T`

Defined in: [src/RollHistory.ts:42](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L42)

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

Defined in: [src/RollHistory.ts:54](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L54)

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

Defined in: [src/RollHistory.ts:49](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollHistory.ts#L49)

Always the default `TextPresenter` output.

#### Returns

`string`
