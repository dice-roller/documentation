[@dice-roller/rpg-dice-roller](../index.md) / RollSettings

# Class: RollSettings\<T\>

Defined in: [src/RollSettings.ts:56](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L56)

Resolved `RollOptions`, with the services built from them.

Shared by a `Roller` and its rolls, and by a roll and its re-rolls, so the generator, registries,
parser and evaluator are only created once. It can also be created once and passed to many
standalone rolls: `new Roll("4d6", settings)`.

## Type Parameters

### T

`T` = `string`

the output type of the presenter

## Constructors

### Constructor

> **new RollSettings**\<`T`\>(`options?`): `RollSettings`\<`T`\>

Defined in: [src/RollSettings.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L69)

Resolves options and validates limits; supplied registries and presenter are shared by reference.

#### Parameters

##### options?

[`RollOptions`](../interfaces/RollOptions.md)\<`T`\> = `{}`

#### Returns

`RollSettings`\<`T`\>

## Properties

### data

> `readonly` **data**: [`RollInputData`](../interfaces/RollInputData.md)

Defined in: [src/RollSettings.ts:63](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L63)

A validated, deeply frozen snapshot of the default roll data.

***

### dice

> `readonly` **dice**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/RollSettings.ts:59](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L59)

***

### engines

> `readonly` **engines**: [`EngineRegistry`](EngineRegistry.md)

Defined in: [src/RollSettings.ts:58](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L58)

***

### evaluator

> `readonly` **evaluator**: [`Evaluator`](Evaluator.md)

Defined in: [src/RollSettings.ts:66](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L66)

***

### generator

> `readonly` **generator**: [`NumberGenerator`](../interfaces/NumberGenerator.md)

Defined in: [src/RollSettings.ts:57](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L57)

***

### limits

> `readonly` **limits**: [`RollLimits`](../interfaces/RollLimits.md)

Defined in: [src/RollSettings.ts:61](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L61)

***

### modifiers

> `readonly` **modifiers**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/RollSettings.ts:60](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L60)

***

### parser

> `readonly` **parser**: [`Parser`](Parser.md)

Defined in: [src/RollSettings.ts:65](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L65)

***

### presenter

> `readonly` **presenter**: [`Presenter`](../interfaces/Presenter.md)\<`T`\>

Defined in: [src/RollSettings.ts:64](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L64)

## Methods

### evaluate()

> **evaluate**(`expression`, `mode?`, `data?`): [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/RollSettings.ts:144](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L144)

Evaluates the AST in the given mode (default `random`); `min` and `max` select each die's extreme. Optional data replaces the settings defaults. Every evaluation starts a fresh generated-roll budget per pool; exhausting it returns the dice rolled so far.

#### Parameters

##### expression

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

##### mode?

[`RollMode`](../type-aliases/RollMode.md) = `"random"`

##### data?

[`RollInputData`](../interfaces/RollInputData.md) = `...`

#### Returns

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

***

### parse()

> **parse**(`notation`): [`ExpressionNode`](../type-aliases/ExpressionNode.md)

Defined in: [src/RollSettings.ts:139](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L139)

Parses notation into the AST, without rolling.

#### Parameters

##### notation

`string`

#### Returns

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

***

### from()

> `static` **from**\<`T`\>(`options?`): `RollSettings`\<`T`\>

Defined in: [src/RollSettings.ts:96](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L96)

Returns settings as they are, or creates settings from options (undefined: fresh defaults).

#### Type Parameters

##### T

`T` = `string`

#### Parameters

##### options?

[`RollOptions`](../interfaces/RollOptions.md)\<`T`\> \| `RollSettings`\<`T`\>

#### Returns

`RollSettings`\<`T`\>

***

### withData()

> `static` **withData**\<`T`\>(`settings`, `data`): `RollSettings`\<`T`\>

Defined in: [src/RollSettings.ts:123](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L123)

Creates settings with replacement data and all other configuration shared with the source.

#### Type Parameters

##### T

`T`

#### Parameters

##### settings

`RollSettings`\<`T`\>

##### data

[`RollInputData`](../interfaces/RollInputData.md)

#### Returns

`RollSettings`\<`T`\>

***

### withEngine()

> `static` **withEngine**\<`T`\>(`settings`, `engine`): `RollSettings`\<`T`\>

Defined in: [src/RollSettings.ts:107](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L107)

Creates settings with a new engine and all other configuration shared with the source.

#### Type Parameters

##### T

`T`

#### Parameters

##### settings

`RollSettings`\<`T`\>

##### engine

[`EngineOption`](../type-aliases/EngineOption.md)

#### Returns

`RollSettings`\<`T`\>
