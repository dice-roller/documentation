[@dice-roller/rpg-dice-roller](../index.md) / Roller

# Class: Roller\<T\>

Defined in: [src/Roller.ts:43](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L43)

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

## Constructors

### Constructor

> **new Roller**\<`T`\>(`options?`): `Roller`\<`T`\>

Defined in: [src/Roller.ts:49](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L49)

#### Parameters

##### options?

[`RollerOptions`](../type-aliases/RollerOptions.md)\<`T`\> = `{}`

#### Returns

`Roller`\<`T`\>

## Properties

### history

> `readonly` **history**: [`RollHistory`](RollHistory.md)

Defined in: [src/Roller.ts:45](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L45)

Mutable history of rolls made or imported by this roller.

***

### settings

> `readonly` **settings**: [`RollSettings`](RollSettings.md)\<`T`\>

Defined in: [src/Roller.ts:47](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L47)

Shared by every roll of this roller (and their re-rolls).

## Accessors

### dice

#### Get Signature

> **get** **dice**(): [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/Roller.ts:61](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L61)

##### Returns

[`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

***

### generator

#### Get Signature

> **get** **generator**(): [`NumberGenerator`](../interfaces/NumberGenerator.md)

Defined in: [src/Roller.ts:57](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L57)

##### Returns

[`NumberGenerator`](../interfaces/NumberGenerator.md)

***

### limits

#### Get Signature

> **get** **limits**(): [`RollLimits`](../interfaces/RollLimits.md)

Defined in: [src/Roller.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L69)

##### Returns

[`RollLimits`](../interfaces/RollLimits.md)

***

### modifiers

#### Get Signature

> **get** **modifiers**(): [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/Roller.ts:65](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L65)

##### Returns

[`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

***

### presenter

#### Get Signature

> **get** **presenter**(): [`Presenter`](../interfaces/Presenter.md)\<`T`\>

Defined in: [src/Roller.ts:53](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L53)

##### Returns

[`Presenter`](../interfaces/Presenter.md)\<`T`\>

## Methods

### export()

#### Call Signature

> **export**(`format`): `object`

Defined in: [src/Roller.ts:108](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L108)

Exports the history as JSON (default), a JSON-safe object, or UTF-8 base64 JSON. May evaluate uncached min/max totals.

##### Parameters

###### format

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

> **export**(`format?`): `string`

Defined in: [src/Roller.ts:109](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L109)

Exports the history as JSON (default), a JSON-safe object, or UTF-8 base64 JSON. May evaluate uncached min/max totals.

##### Parameters

###### format?

`"json"` \| `"base64"`

##### Returns

`string`

#### Call Signature

> **export**(`format`): `string` \| \{ `rolls`: readonly `object`[]; `total`: [`EncodedNumber`](../type-aliases/EncodedNumber.md); `type`: `"history"`; `version`: `1`; \}

Defined in: [src/Roller.ts:110](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L110)

Exports the history as JSON (default), a JSON-safe object, or UTF-8 base64 JSON. May evaluate uncached min/max totals.

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

> **import**(`data`): [`Roll`](Roll.md)\<`T`\>[]

Defined in: [src/Roller.ts:125](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L125)

Imports a roll, a whole history or concise finished results (an object, JSON or base64), and adds the rolls
to the history, without rolling.

The data is validated first, so nothing is added if any of it is invalid. Imported rolls share
this roller's settings for later re-rolls; re-rolling does not add the new roll to the history.

#### Parameters

##### data

`string` \| [`ConciseRollData`](../interfaces/ConciseRollData.md) \| [`EncodedExportData`](../type-aliases/EncodedExportData.md)

#### Returns

[`Roll`](Roll.md)\<`T`\>[]

the imported rolls

#### Throws

the data is invalid

***

### parse()

> **parse**(`notation`): [`ExpressionNode`](../type-aliases/ExpressionNode.md)

Defined in: [src/Roller.ts:74](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L74)

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

Defined in: [src/Roller.ts:101](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L101)

Presents the history with the presenter, or the one from the options (default `TextPresenter`).

##### Returns

`T`

#### Call Signature

> **present**\<`U`\>(`presenter`): `U`

Defined in: [src/Roller.ts:102](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L102)

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

> **roll**(`input`, `options?`): [`Roll`](Roll.md)\<`T`\>

Defined in: [src/Roller.ts:79](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L79)

Rolls notation (or an AST), and adds the roll to the history only if it succeeds. Per-roll data replaces the roller's defaults and is snapshotted for the roll.

#### Parameters

##### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

##### options?

###### data?

[`RollInputData`](../interfaces/RollInputData.md)

###### engine?

[`EngineOption`](../type-aliases/EngineOption.md)

#### Returns

[`Roll`](Roll.md)\<`T`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/Roller.ts:137](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/Roller.ts#L137)

Always the default `TextPresenter` output of the history.

#### Returns

`string`
