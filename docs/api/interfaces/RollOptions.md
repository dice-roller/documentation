[@dice-roller/rpg-dice-roller](../index.md) / RollOptions

# Interface: RollOptions\<T\>

Defined in: [src/RollSettings.ts:22](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollSettings.ts#L22)

How notation is parsed, rolled and presented. Every option is optional.

## Type Parameters

### T

`T` = `string`

the output type of the presenter

## Properties

### dice?

> `optional` **dice?**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/RollSettings.ts:26](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollSettings.ts#L26)

Default: `new DieRegistry()` (the built-in dice).

***

### engine?

> `optional` **engine?**: [`RandomEngine`](RandomEngine.md)

Defined in: [src/RollSettings.ts:24](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollSettings.ts#L24)

The source of randomness (default `nativeMath`).

***

### limits?

> `optional` **limits?**: `Partial`\<[`RollLimits`](RollLimits.md)\>

Defined in: [src/RollSettings.ts:30](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollSettings.ts#L30)

Safety limits: default `maxQty` 999 and `maxIterations` 1000; each must be a positive safe integer.

***

### modifiers?

> `optional` **modifiers?**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/RollSettings.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollSettings.ts#L28)

Default: `new ModifierRegistry()` (the built-in modifiers).

***

### presenter?

> `optional` **presenter?**: [`Presenter`](Presenter.md)\<`T`\>

Defined in: [src/RollSettings.ts:32](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/RollSettings.ts#L32)

Used by `Roll.present()` and `Roller.present()` (default: the default `TextPresenter`).
