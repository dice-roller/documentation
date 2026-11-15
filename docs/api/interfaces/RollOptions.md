[@dice-roller/rpg-dice-roller](../index.md) / RollOptions

# Interface: RollOptions\<T\>

Defined in: [src/RollSettings.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L28)

How notation is parsed, rolled and presented. Every option is optional.

## Type Parameters

### T

`T` = `string`

the output type of the presenter

## Properties

### dice?

> `optional` **dice?**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/RollSettings.ts:34](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L34)

Default: `new DieRegistry()` (the built-in dice).

***

### engine?

> `optional` **engine?**: [`EngineOption`](../type-aliases/EngineOption.md)

Defined in: [src/RollSettings.ts:30](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L30)

The source of randomness (default `nativeMath`); may be a name, engine instance, or definition.

***

### engines?

> `optional` **engines?**: [`EngineRegistry`](../classes/EngineRegistry.md)

Defined in: [src/RollSettings.ts:32](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L32)

Engine factories used to resolve names (default: the built-in engines).

***

### limits?

> `optional` **limits?**: `Partial`\<[`RollLimits`](RollLimits.md)\>

Defined in: [src/RollSettings.ts:38](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L38)

Safety limits: `maxQty` 999, `maxIterations` 1000 and `maxGeneratedRolls` 1,000,000 generated rolls per pool/evaluation; each must be a positive safe integer. The generated-roll limit excludes initial dice and truncates repeating modifiers without throwing.

***

### modifiers?

> `optional` **modifiers?**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/RollSettings.ts:36](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L36)

Default: `new ModifierRegistry()` (the built-in modifiers).

***

### presenter?

> `optional` **presenter?**: [`Presenter`](Presenter.md)\<`T`\>

Defined in: [src/RollSettings.ts:40](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L40)

Used by `Roll.present()` and `Roller.present()` (default: the default `TextPresenter`).
