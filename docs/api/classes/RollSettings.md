[@dice-roller/rpg-dice-roller](../index.md) / RollSettings

# Class: RollSettings\<T\>

Defined in: [src/RollSettings.ts:52](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L52)

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

Defined in: [src/RollSettings.ts:63](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L63)

Resolves options and validates limits; supplied registries and presenter are shared by reference.

#### Parameters

##### options?

[`RollOptions`](../interfaces/RollOptions.md)\<`T`\> = `{}`

#### Returns

`RollSettings`\<`T`\>

## Properties

### dice

> `readonly` **dice**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/RollSettings.ts:55](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L55)

***

### engines

> `readonly` **engines**: [`EngineRegistry`](EngineRegistry.md)

Defined in: [src/RollSettings.ts:54](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L54)

***

### evaluator

> `readonly` **evaluator**: [`Evaluator`](Evaluator.md)

Defined in: [src/RollSettings.ts:60](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L60)

***

### generator

> `readonly` **generator**: [`NumberGenerator`](../interfaces/NumberGenerator.md)

Defined in: [src/RollSettings.ts:53](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L53)

***

### limits

> `readonly` **limits**: [`RollLimits`](../interfaces/RollLimits.md)

Defined in: [src/RollSettings.ts:57](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L57)

***

### modifiers

> `readonly` **modifiers**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/RollSettings.ts:56](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L56)

***

### parser

> `readonly` **parser**: [`Parser`](Parser.md)

Defined in: [src/RollSettings.ts:59](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L59)

***

### presenter

> `readonly` **presenter**: [`Presenter`](../interfaces/Presenter.md)\<`T`\>

Defined in: [src/RollSettings.ts:58](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L58)

## Methods

### evaluate()

> **evaluate**(`expression`, `mode?`): [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/RollSettings.ts:120](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L120)

Evaluates the AST in the given mode (default `random`); `min` and `max` select each die's extreme. Every evaluation starts a fresh generated-roll budget per pool; exhausting it returns the dice rolled so far.

#### Parameters

##### expression

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

##### mode?

[`RollMode`](../type-aliases/RollMode.md) = `"random"`

#### Returns

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

***

### parse()

> **parse**(`notation`): [`ExpressionNode`](../type-aliases/ExpressionNode.md)

Defined in: [src/RollSettings.ts:115](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L115)

Parses notation into the AST, without rolling.

#### Parameters

##### notation

`string`

#### Returns

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

***

### from()

> `static` **from**\<`T`\>(`options?`): `RollSettings`\<`T`\>

Defined in: [src/RollSettings.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L89)

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

### withEngine()

> `static` **withEngine**\<`T`\>(`settings`, `engine`): `RollSettings`\<`T`\>

Defined in: [src/RollSettings.ts:100](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L100)

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
