[@dice-roller/rpg-dice-roller](../index.md) / RollSettings

# Class: RollSettings\<T\>

Defined in: [src/RollSettings.ts:44](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L44)

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

Defined in: [src/RollSettings.ts:54](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L54)

Resolves options and validates limits; supplied registries and presenter are shared by reference.

#### Parameters

##### options?

[`RollOptions`](../interfaces/RollOptions.md)\<`T`\> = `{}`

#### Returns

`RollSettings`\<`T`\>

## Properties

### dice

> `readonly` **dice**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/RollSettings.ts:46](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L46)

***

### evaluator

> `readonly` **evaluator**: [`Evaluator`](Evaluator.md)

Defined in: [src/RollSettings.ts:51](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L51)

***

### generator

> `readonly` **generator**: [`NumberGenerator`](../interfaces/NumberGenerator.md)

Defined in: [src/RollSettings.ts:45](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L45)

***

### limits

> `readonly` **limits**: [`RollLimits`](../interfaces/RollLimits.md)

Defined in: [src/RollSettings.ts:48](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L48)

***

### modifiers

> `readonly` **modifiers**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/RollSettings.ts:47](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L47)

***

### parser

> `readonly` **parser**: [`Parser`](Parser.md)

Defined in: [src/RollSettings.ts:50](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L50)

***

### presenter

> `readonly` **presenter**: [`Presenter`](../interfaces/Presenter.md)\<`T`\>

Defined in: [src/RollSettings.ts:49](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L49)

## Methods

### evaluate()

> **evaluate**(`expression`, `mode?`): [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/RollSettings.ts:86](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L86)

Evaluates the AST in the given mode (default `random`); `min` and `max` select each die's extreme.

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

Defined in: [src/RollSettings.ts:81](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L81)

Parses notation into the AST, without rolling.

#### Parameters

##### notation

`string`

#### Returns

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

***

### from()

> `static` **from**\<`T`\>(`options?`): `RollSettings`\<`T`\>

Defined in: [src/RollSettings.ts:70](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/RollSettings.ts#L70)

Returns settings as they are, or creates settings from options (undefined: fresh defaults).

#### Type Parameters

##### T

`T` = `string`

#### Parameters

##### options?

[`RollOptions`](../interfaces/RollOptions.md)\<`T`\> \| `RollSettings`\<`T`\>

#### Returns

`RollSettings`\<`T`\>
