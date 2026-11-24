[@dice-roller/rpg-dice-roller](../index.md) / RollOptions

# Interface: RollOptions\<T, Mode\>

Defined in: [src/RollSettings.ts:35](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L35)

How notation is parsed, rolled and presented. Every option is optional.

## Type Parameters

### T

`T` = `string`

the output type of the presenter

### Mode

`Mode` *extends* [`DrawMode`](../type-aliases/DrawMode.md) = [`DrawMode`](../type-aliases/DrawMode.md)

## Properties

### data?

> `optional` **data?**: [`RollInputData`](RollInputData.md)

Defined in: [src/RollSettings.ts:39](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L39)

Default nested values available through `$path`; each roll snapshots these unless replaced by per-roll data.

***

### dice?

> `optional` **dice?**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/RollSettings.ts:43](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L43)

Default: `new DieRegistry()` (the built-in dice).

***

### drawDie?

> `optional` **drawDie?**: `DrawDieOptionsForMode`\<`Mode`\>

Defined in: [src/RollSettings.ts:49](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L49)

External dice source used instead of the random generator when configured.

***

### engine?

> `optional` **engine?**: [`EngineOption`](../type-aliases/EngineOption.md)

Defined in: [src/RollSettings.ts:37](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L37)

The source of randomness (default `nativeMath`); may be a name, engine instance, or definition.

***

### engines?

> `optional` **engines?**: [`EngineRegistry`](../classes/EngineRegistry.md)

Defined in: [src/RollSettings.ts:41](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L41)

Engine factories used to resolve names (default: the built-in engines).

***

### limits?

> `optional` **limits?**: `Partial`\<[`RollLimits`](RollLimits.md)\>

Defined in: [src/RollSettings.ts:47](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L47)

Safety limits: `maxQty` 999, `maxIterations` 1000 and `maxGeneratedRolls` 1,000,000 generated rolls per pool/evaluation; each must be a positive safe integer. The generated-roll limit excludes initial dice and truncates repeating modifiers without throwing.

***

### modifiers?

> `optional` **modifiers?**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/RollSettings.ts:45](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L45)

Default: `new ModifierRegistry()` (the built-in modifiers).

***

### presenter?

> `optional` **presenter?**: [`Presenter`](Presenter.md)\<`T`\>

Defined in: [src/RollSettings.ts:51](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/RollSettings.ts#L51)

Used by `Roll.present()` and `Roller.present()` (default: the default `TextPresenter`).
