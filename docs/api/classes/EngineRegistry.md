[@dice-roller/rpg-dice-roller](../index.md) / EngineRegistry

# Class: EngineRegistry

Defined in: [src/random/EngineRegistry.ts:9](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L9)

Factories for built-in and custom random engines.

## Constructors

### Constructor

> **new EngineRegistry**(): `EngineRegistry`

Defined in: [src/random/EngineRegistry.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L13)

A registry with the built-in engines: `crypto`, `mersenne`, `nativeMath`, `xoroshiro128plus`.

#### Returns

`EngineRegistry`

## Accessors

### names

#### Get Signature

> **get** **names**(): readonly `string`[]

Defined in: [src/random/EngineRegistry.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L29)

The registered names, in alphabetical order.

##### Returns

readonly `string`[]

## Methods

### create()

> **create**(`name`, `seed?`): [`RandomEngine`](../interfaces/RandomEngine.md)

Defined in: [src/random/EngineRegistry.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L77)

Creates a fresh engine using the named factory.

#### Parameters

##### name

`string`

##### seed?

`number`

#### Returns

[`RandomEngine`](../interfaces/RandomEngine.md)

***

### get()

> **get**(`name`): [`EngineFactory`](../type-aliases/EngineFactory.md) \| `undefined`

Defined in: [src/random/EngineRegistry.ts:51](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L51)

The factory registered with the name.

#### Parameters

##### name

`string`

#### Returns

[`EngineFactory`](../type-aliases/EngineFactory.md) \| `undefined`

***

### getOrThrow()

> **getOrThrow**(`name`): [`EngineFactory`](../type-aliases/EngineFactory.md)

Defined in: [src/random/EngineRegistry.ts:56](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L56)

Returns the factory registered with the name.

#### Parameters

##### name

`string`

#### Returns

[`EngineFactory`](../type-aliases/EngineFactory.md)

***

### has()

> **has**(`name`): `boolean`

Defined in: [src/random/EngineRegistry.ts:67](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L67)

Whether a factory is registered with the name.

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### register()

> **register**(`name`, `factory`): `this`

Defined in: [src/random/EngineRegistry.ts:34](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L34)

Registers a factory, replacing any already registered with the same name.

#### Parameters

##### name

`string`

##### factory

[`EngineFactory`](../type-aliases/EngineFactory.md)

#### Returns

`this`

***

### remove()

> **remove**(`name`): `boolean`

Defined in: [src/random/EngineRegistry.ts:72](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L72)

Removes the factory registered with the name.

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### empty()

> `static` **empty**(): `EngineRegistry`

Defined in: [src/random/EngineRegistry.ts:20](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/random/EngineRegistry.ts#L20)

A registry with no factories, not even the built-ins.

#### Returns

`EngineRegistry`
