[@dice-roller/rpg-dice-roller](../index.md) / Roller

# Class: Roller\<T, Options\>

Defined in: [src/Roller.ts:80](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L80)

Rolls notation and keeps a history of the rolls.

For a single roll without a history, use `new Roll(notation)` instead.

## Example

```ts
const roller = new Roller();
roller.roll("4d6");
roller.roll("2d10+3");
roller.history.total;  // e.g. 27
`${roller}`;           // e.g. "4d6: [3, 5, 2, 2] = 12; 2d10+3: [4, 8]+3 = 15"
```

## Type Parameters

### T

`T` = `string`

the output type of the configured presenter

### Options

`Options` *extends* [`RollerOptions`](../type-aliases/RollerOptions.md)\<`T`\> = [`SyncRollOptions`](../type-aliases/SyncRollOptions.md)\<`T`\>

## Constructors

### Constructor

> **new Roller**\<`T`, `Options`\>(`options?`): `Roller`\<`T`, `Options`\>

Defined in: [src/Roller.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L89)

#### Parameters

##### options?

`Options` & [`RollerOptions`](../type-aliases/RollerOptions.md)\<`T`\> = `...`

#### Returns

`Roller`\<`T`, `Options`\>

## Properties

### history

> `readonly` **history**: [`RollHistory`](RollHistory.md)

Defined in: [src/Roller.ts:85](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L85)

Mutable history of rolls made or imported by this roller.

***

### settings

> `readonly` **settings**: [`RollSettings`](RollSettings.md)\<`T`, `ConfiguredDrawMode`\<`Options`\>\>

Defined in: [src/Roller.ts:87](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L87)

Shared by every roll of this roller (and their re-rolls).

## Accessors

### dice

#### Get Signature

> **get** **dice**(): [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/Roller.ts:105](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L105)

##### Returns

[`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

***

### generator

#### Get Signature

> **get** **generator**(): [`NumberGenerator`](../interfaces/NumberGenerator.md)

Defined in: [src/Roller.ts:101](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L101)

##### Returns

[`NumberGenerator`](../interfaces/NumberGenerator.md)

***

### limits

#### Get Signature

> **get** **limits**(): [`RollLimits`](../interfaces/RollLimits.md)

Defined in: [src/Roller.ts:113](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L113)

##### Returns

[`RollLimits`](../interfaces/RollLimits.md)

***

### modifiers

#### Get Signature

> **get** **modifiers**(): [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/Roller.ts:109](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L109)

##### Returns

[`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

***

### presenter

#### Get Signature

> **get** **presenter**(): [`Presenter`](../interfaces/Presenter.md)\<`T`\>

Defined in: [src/Roller.ts:97](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L97)

##### Returns

[`Presenter`](../interfaces/Presenter.md)\<`T`\>

## Methods

### export()

#### Call Signature

> **export**(`format?`): `object`

Defined in: [src/Roller.ts:180](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L180)

Exports the history as a JSON-safe object (default), JSON, or UTF-8 base64 JSON. May evaluate uncached min/max totals.

##### Parameters

###### format?

`"object"`

##### Returns

###### rolls

> `readonly` **rolls**: readonly `object`[]

###### total

> `readonly` **total**: [`EncodedNumber`](../type-aliases/EncodedNumber.md)

Can be `NaN`, e.g. for a history of `1/0` and `-1/0`.

###### type

> `readonly` **type**: `"history"`

###### version

> `readonly` **version**: `1`

#### Call Signature

> **export**(`format`): `string`

Defined in: [src/Roller.ts:181](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L181)

Exports the history as a JSON-safe object (default), JSON, or UTF-8 base64 JSON. May evaluate uncached min/max totals.

##### Parameters

###### format

`"json"` \| `"base64"`

##### Returns

`string`

#### Call Signature

> **export**(`format`): `string` \| \{ `rolls`: readonly `object`[]; `total`: [`EncodedNumber`](../type-aliases/EncodedNumber.md); `type`: `"history"`; `version`: `1`; \}

Defined in: [src/Roller.ts:182](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L182)

Exports the history as a JSON-safe object (default), JSON, or UTF-8 base64 JSON. May evaluate uncached min/max totals.

##### Parameters

###### format

`"object"` \| `"json"` \| `"base64"`

##### Returns

`string`

***

###### Type Literal

\{ `rolls`: readonly `object`[]; `total`: [`EncodedNumber`](../type-aliases/EncodedNumber.md); `type`: `"history"`; `version`: `1`; \}

###### rolls

> `readonly` **rolls**: readonly `object`[]

###### total

> `readonly` **total**: [`EncodedNumber`](../type-aliases/EncodedNumber.md)

Can be `NaN`, e.g. for a history of `1/0` and `-1/0`.

###### type

> `readonly` **type**: `"history"`

###### version

> `readonly` **version**: `1`

***

### import()

> **import**(`data`): [`Roll`](Roll.md)\<`T`, `ConfiguredDrawMode`\<`Options`\>\>[]

Defined in: [src/Roller.ts:197](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L197)

Imports a roll, a whole history or concise finished results (an object, JSON or base64), and adds the rolls
to the history, without rolling.

The data is validated first, so nothing is added if any of it is invalid. Imported rolls share
this roller's settings for later re-rolls; re-rolling does not add the new roll to the history.

#### Parameters

##### data

`string` \| [`ConciseRollData`](../interfaces/ConciseRollData.md) \| [`EncodedExportData`](../type-aliases/EncodedExportData.md)

#### Returns

[`Roll`](Roll.md)\<`T`, `ConfiguredDrawMode`\<`Options`\>\>[]

the imported rolls

#### Throws

the data is invalid

***

### parse()

> **parse**(`notation`): [`ExpressionNode`](../type-aliases/ExpressionNode.md)

Defined in: [src/Roller.ts:118](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L118)

Parses notation into the AST, without rolling.

#### Parameters

##### notation

`string`

#### Returns

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

***

### present()

#### Call Signature

> **present**(): `T`

Defined in: [src/Roller.ts:173](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L173)

Presents the history with the presenter, or the one from the options (default `TextPresenter`).

##### Returns

`T`

#### Call Signature

> **present**\<`U`\>(`presenter`): `U`

Defined in: [src/Roller.ts:174](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L174)

Presents the history with the presenter, or the one from the options (default `TextPresenter`).

##### Type Parameters

###### U

`U`

##### Parameters

###### presenter

[`Presenter`](../interfaces/Presenter.md)\<`U`\>

##### Returns

`U`

***

### roll()

#### Call Signature

> **roll**(`input`, `options`): `Promise`\<[`Roll`](Roll.md)\<`T`, `"async"`\>\>

Defined in: [src/Roller.ts:123](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L123)

Rolls notation (or an AST), and adds the roll to the history only if it succeeds. Async rolls are appended in completion order. Per-roll data replaces the roller's defaults and is snapshotted for the roll.

##### Parameters

###### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

###### options

`AsyncRollCallOptions`

##### Returns

`Promise`\<[`Roll`](Roll.md)\<`T`, `"async"`\>\>

#### Call Signature

> **roll**(`input`, `options`): [`Roll`](Roll.md)\<`T`, `"sync"`\>

Defined in: [src/Roller.ts:127](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L127)

Rolls notation (or an AST), and adds the roll to the history only if it succeeds. Async rolls are appended in completion order. Per-roll data replaces the roller's defaults and is snapshotted for the roll.

##### Parameters

###### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

###### options

`SyncRollCallOptions`

##### Returns

[`Roll`](Roll.md)\<`T`, `"sync"`\>

#### Call Signature

> **roll**(`this`, `input`, `options?`): `RollResultForMode`\<`T`, `ConfiguredDrawMode`\<`Options`\>\>

Defined in: [src/Roller.ts:131](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L131)

Rolls notation (or an AST), and adds the roll to the history only if it succeeds. Async rolls are appended in completion order. Per-roll data replaces the roller's defaults and is snapshotted for the roll.

##### Parameters

###### this

`Roller`\<`T`, `Options`\>

###### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

###### options?

`Omit`\<`RollCallOptions`, `"drawDie"`\>

##### Returns

`RollResultForMode`\<`T`, `ConfiguredDrawMode`\<`Options`\>\>

#### Call Signature

> **roll**(`input`, `options`): `Promise`\<[`Roll`](Roll.md)\<`T`, `"async"`\>\> \| [`Roll`](Roll.md)\<`T`, `"sync"`\>

Defined in: [src/Roller.ts:136](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L136)

Rolls notation (or an AST), and adds the roll to the history only if it succeeds. Async rolls are appended in completion order. Per-roll data replaces the roller's defaults and is snapshotted for the roll.

##### Parameters

###### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

###### options

`RollCallOptions`

##### Returns

`Promise`\<[`Roll`](Roll.md)\<`T`, `"async"`\>\> \| [`Roll`](Roll.md)\<`T`, `"sync"`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/Roller.ts:211](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L211)

Always the default `TextPresenter` output of the history.

#### Returns

`string`
