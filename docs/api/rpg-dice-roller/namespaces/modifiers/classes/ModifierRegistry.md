[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / ModifierRegistry

# Class: ModifierRegistry

Defined in: [src/modifiers/ModifierRegistry.ts:20](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L20)

Modifier handlers by name.

Replace a built-in handler by registering another with the same name, then pass the registry
as the `modifiers` option to a `Roller` or `Roll`. Names are the existing `ModifierName` AST
names; registering a handler does not add notation to the parser.

## Example

```ts
const modifiers = new ModifierRegistry().register({
  ...keepHandler,
  apply: (items) => [...items],
});
const roller = new Roller({ modifiers });
```

## Constructors

### Constructor

> **new ModifierRegistry**(): `ModifierRegistry`

Defined in: [src/modifiers/ModifierRegistry.ts:24](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L24)

A registry with the 11 built-in handlers registered.

#### Returns

`ModifierRegistry`

## Accessors

### handlers

#### Get Signature

> **get** **handlers**(): readonly [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`ModifierNode`](../../ast/type-aliases/ModifierNode.md)\>[]

Defined in: [src/modifiers/ModifierRegistry.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L78)

The registered handlers, in execution order.

##### Returns

readonly [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`ModifierNode`](../../ast/type-aliases/ModifierNode.md)\>[]

## Methods

### get()

> **get**\<`K`\>(`name`): [`ModifierHandlerOf`](../type-aliases/ModifierHandlerOf.md)\<`K`\> \| `undefined`

Defined in: [src/modifiers/ModifierRegistry.ts:47](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L47)

Returns the handler for the name, or `undefined` if none is registered.

#### Type Parameters

##### K

`K` *extends* `"max"` \| `"min"` \| `"explode"` \| `"target"` \| `"drop"` \| `"keep"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"sort"`

#### Parameters

##### name

`K`

#### Returns

[`ModifierHandlerOf`](../type-aliases/ModifierHandlerOf.md)\<`K`\> \| `undefined`

***

### getOrThrow()

> **getOrThrow**\<`K`\>(`name`): [`ModifierHandlerOf`](../type-aliases/ModifierHandlerOf.md)\<`K`\>

Defined in: [src/modifiers/ModifierRegistry.ts:52](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L52)

#### Type Parameters

##### K

`K` *extends* `"max"` \| `"min"` \| `"explode"` \| `"target"` \| `"drop"` \| `"keep"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"sort"`

#### Parameters

##### name

`K`

#### Returns

[`ModifierHandlerOf`](../type-aliases/ModifierHandlerOf.md)\<`K`\>

#### Throws

no handler is registered with the name

***

### has()

> **has**(`name`): `boolean`

Defined in: [src/modifiers/ModifierRegistry.ts:63](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L63)

Whether a handler is registered under the name.

#### Parameters

##### name

`"max"` \| `"min"` \| `"explode"` \| `"target"` \| `"drop"` \| `"keep"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"sort"`

#### Returns

`boolean`

***

### inExecutionOrder()

> **inExecutionOrder**\<`N`\>(`modifiers`): `N`[]

Defined in: [src/modifiers/ModifierRegistry.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L89)

Returns a sorted copy of modifier nodes by their handler's `order`. Equal orders retain their
input order. This method does not validate every node: sorting zero or one node does not look
up its handler. Evaluation looks up each handler separately.

#### Type Parameters

##### N

`N` *extends* [`ModifierNode`](../../ast/type-aliases/ModifierNode.md)

#### Parameters

##### modifiers

readonly `N`[]

#### Returns

`N`[]

#### Throws

a node compared during sorting has no registered handler

***

### register()

> **register**(...`handlers`): `this`

Defined in: [src/modifiers/ModifierRegistry.ts:38](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L38)

Registers handlers, replacing any already registered with the same name.

#### Parameters

##### handlers

...[`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`ModifierNode`](../../ast/type-aliases/ModifierNode.md)\>[]

#### Returns

`this`

***

### remove()

> **remove**(`name`): `boolean`

Defined in: [src/modifiers/ModifierRegistry.ts:73](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L73)

Removes the handler registered with the name. Notation that uses the modifier then throws when
it's rolled.

#### Parameters

##### name

`"max"` \| `"min"` \| `"explode"` \| `"target"` \| `"drop"` \| `"keep"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"sort"`

#### Returns

`boolean`

whether a handler was registered with the name

***

### empty()

> `static` **empty**(): `ModifierRegistry`

Defined in: [src/modifiers/ModifierRegistry.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/ModifierRegistry.ts#L29)

A registry with no handlers, not even the built-ins.

#### Returns

`ModifierRegistry`
