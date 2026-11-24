[@dice-roller/rpg-dice-roller](../index.md) / RollSettings

# Class: RollSettings\<T, Mode\>

Defined in: [src/RollSettings.ts:68](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L68)

Resolved `RollOptions`, with the services built from them.

Shared by a `Roller` and its rolls, and by a roll and its re-rolls, so the generator, registries,
parser and evaluator are only created once. It can also be created once and passed to many
standalone rolls: `new Roll("4d6", settings)`.

## Type Parameters

### T

`T` = `string`

the output type of the presenter

### Mode

`Mode` *extends* [`DrawMode`](../type-aliases/DrawMode.md) = `"sync"`

## Constructors

### Constructor

> **new RollSettings**\<`T`, `Mode`\>(`options?`): `RollSettings`\<`T`, `Mode`\>

Defined in: [src/RollSettings.ts:82](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L82)

Resolves options and validates limits; supplied registries and presenter are shared by reference.

#### Parameters

##### options?

[`RollOptions`](../interfaces/RollOptions.md)\<`T`, `Mode`\>

#### Returns

`RollSettings`\<`T`, `Mode`\>

## Properties

### data

> `readonly` **data**: [`RollInputData`](../interfaces/RollInputData.md)

Defined in: [src/RollSettings.ts:76](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L76)

A validated, deeply frozen snapshot of the default roll data.

***

### dice

> `readonly` **dice**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/RollSettings.ts:71](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L71)

***

### drawDie?

> `readonly` `optional` **drawDie?**: `DrawDieOptionsForMode`\<`Mode`\>

Defined in: [src/RollSettings.ts:74](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L74)

***

### engines

> `readonly` **engines**: [`EngineRegistry`](EngineRegistry.md)

Defined in: [src/RollSettings.ts:70](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L70)

***

### evaluator

> `readonly` **evaluator**: [`Evaluator`](Evaluator.md)

Defined in: [src/RollSettings.ts:79](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L79)

***

### generator

> `readonly` **generator**: [`NumberGenerator`](../interfaces/NumberGenerator.md)

Defined in: [src/RollSettings.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L69)

***

### limits

> `readonly` **limits**: [`RollLimits`](../interfaces/RollLimits.md)

Defined in: [src/RollSettings.ts:73](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L73)

***

### modifiers

> `readonly` **modifiers**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/RollSettings.ts:72](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L72)

***

### parser

> `readonly` **parser**: [`Parser`](Parser.md)

Defined in: [src/RollSettings.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L78)

***

### presenter

> `readonly` **presenter**: [`Presenter`](../interfaces/Presenter.md)\<`T`\>

Defined in: [src/RollSettings.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L77)

## Methods

### evaluate()

> **evaluate**(`expression`, `mode?`, `data?`): [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/RollSettings.ts:180](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L180)

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

### evaluateAsync()

> **evaluateAsync**(`expression`, `mode?`, `data?`): `Promise`\<[`ExpressionResult`](../type-aliases/ExpressionResult.md)\>

Defined in: [src/RollSettings.ts:198](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L198)

Evaluates the AST asynchronously using the configured external dice source.

#### Parameters

##### expression

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

##### mode?

[`RollMode`](../type-aliases/RollMode.md) = `"random"`

##### data?

[`RollInputData`](../interfaces/RollInputData.md) = `...`

#### Returns

`Promise`\<[`ExpressionResult`](../type-aliases/ExpressionResult.md)\>

***

### parse()

> **parse**(`notation`): [`ExpressionNode`](../type-aliases/ExpressionNode.md)

Defined in: [src/RollSettings.ts:175](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L175)

Parses notation into the AST, without rolling.

#### Parameters

##### notation

`string`

#### Returns

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

***

### from()

> `static` **from**\<`T`, `Mode`\>(`options?`): `RollSettings`\<`T`, `Mode`\>

Defined in: [src/RollSettings.ts:113](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L113)

Returns settings as they are, or creates settings from options (undefined: fresh defaults).

#### Type Parameters

##### T

`T` = `string`

##### Mode

`Mode` *extends* [`DrawMode`](../type-aliases/DrawMode.md) = `"sync"`

#### Parameters

##### options?

[`RollOptions`](../interfaces/RollOptions.md)\<`T`, `Mode`\> \| `RollSettings`\<`T`, `Mode`\>

#### Returns

`RollSettings`\<`T`, `Mode`\>

***

### withData()

> `static` **withData**\<`T`, `Mode`\>(`settings`, `data`): `RollSettings`\<`T`, `Mode`\>

Defined in: [src/RollSettings.ts:141](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L141)

Creates settings with replacement data and all other configuration shared with the source.

#### Type Parameters

##### T

`T`

##### Mode

`Mode` *extends* [`DrawMode`](../type-aliases/DrawMode.md)

#### Parameters

##### settings

`RollSettings`\<`T`, `Mode`\>

##### data

[`RollInputData`](../interfaces/RollInputData.md)

#### Returns

`RollSettings`\<`T`, `Mode`\>

***

### withDrawDie()

> `static` **withDrawDie**\<`T`, `Mode`\>(`settings`, `drawDie`): `RollSettings`\<`T`, `Mode`\>

Defined in: [src/RollSettings.ts:158](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L158)

Creates settings with a new external dice source and all other configuration shared.

#### Type Parameters

##### T

`T`

##### Mode

`Mode` *extends* [`DrawMode`](../type-aliases/DrawMode.md)

#### Parameters

##### settings

`RollSettings`\<`T`, [`DrawMode`](../type-aliases/DrawMode.md)\>

##### drawDie

`DrawDieOptionsForMode`\<`Mode`\> \| `undefined`

#### Returns

`RollSettings`\<`T`, `Mode`\>

***

### withEngine()

> `static` **withEngine**\<`T`, `Mode`\>(`settings`, `engine`): `RollSettings`\<`T`, `Mode`\>

Defined in: [src/RollSettings.ts:124](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L124)

Creates settings with a new engine and all other configuration shared with the source.

#### Type Parameters

##### T

`T`

##### Mode

`Mode` *extends* [`DrawMode`](../type-aliases/DrawMode.md)

#### Parameters

##### settings

`RollSettings`\<`T`, `Mode`\>

##### engine

[`EngineOption`](../type-aliases/EngineOption.md)

#### Returns

`RollSettings`\<`T`, `Mode`\>
