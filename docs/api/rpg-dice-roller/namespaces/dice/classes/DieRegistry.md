[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / DieRegistry

# Class: DieRegistry

Defined in: [src/dice/DieRegistry.ts:36](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L36)

Die factories by name.

A pool's die is a `DieNode` (`{ name, args }`), and the evaluator creates the die with
`registry.create(name, ...args)`. The grammar uses the built-in names (`d6` -> `standard(6)`,
`d%` -> `percentile()`, `dF.1` -> `fudge(1)`), so registering a factory with a built-in name
changes what that notation rolls, for every roll using this registry.

Pass a registry as the `dice` option to a `Roll` or `Roller`. Registering a new name does not
extend the notation grammar: use an AST such as `ast.pool(1, ast.die("fib"))` for custom names.
The AST stores the name and arguments, not the factory; provide the same registration when
re-rolling an imported expression that uses a custom name.

## Constructors

### Constructor

> **new DieRegistry**(): `DieRegistry`

Defined in: [src/dice/DieRegistry.ts:40](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L40)

A registry with the built-in factories: `standard`, `percentile`, `fudge`, `range`, `face`.

#### Returns

`DieRegistry`

## Accessors

### names

#### Get Signature

> **get** **names**(): readonly `string`[]

Defined in: [src/dice/DieRegistry.ts:56](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L56)

The registered names, in alphabetical order.

##### Returns

readonly `string`[]

## Methods

### create()

> **create**(`name`, ...`args`): [`DieLike`](../../../../type-aliases/DieLike.md)

Defined in: [src/dice/DieRegistry.ts:120](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L120)

Creates a die with the named factory, e.g. `registry.create("standard", 6)`.

#### Parameters

##### name

`string`

##### args

...`number`[]

#### Returns

[`DieLike`](../../../../type-aliases/DieLike.md)

#### Throws

no factory is registered with the name

#### Throws

any error raised by the factory is propagated

***

### get()

> **get**(`name`): [`DieFactory`](../type-aliases/DieFactory.md) \| `undefined`

Defined in: [src/dice/DieRegistry.ts:80](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L80)

The factory registered with the name, e.g. `registry.get("standard")?.(6)`.

#### Parameters

##### name

`string`

#### Returns

[`DieFactory`](../type-aliases/DieFactory.md) \| `undefined`

***

### getOrThrow()

> **getOrThrow**(`name`): [`DieFactory`](../type-aliases/DieFactory.md)

Defined in: [src/dice/DieRegistry.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L89)

Returns the factory registered with the name.

#### Parameters

##### name

`string`

#### Returns

[`DieFactory`](../type-aliases/DieFactory.md)

#### Throws

no factory is registered with the name

***

### has()

> **has**(`name`): `boolean`

Defined in: [src/dice/DieRegistry.ts:100](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L100)

Whether a factory is registered with the name.

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### register()

> **register**(`name`, `factory`): `this`

Defined in: [src/dice/DieRegistry.ts:65](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L65)

Registers a factory, replacing any already registered with the same name.

#### Parameters

##### name

`string`

##### factory

[`DieFactory`](../type-aliases/DieFactory.md)

#### Returns

`this`

#### Throws

the name isn't a string or is empty, or the factory isn't a function

***

### remove()

> **remove**(`name`): `boolean`

Defined in: [src/dice/DieRegistry.ts:110](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L110)

Removes the factory registered with the name. Notation that uses a removed built-in (e.g. `d6`
after removing `standard`) then throws when it's rolled.

#### Parameters

##### name

`string`

#### Returns

`boolean`

whether a factory was registered with the name

***

### empty()

> `static` **empty**(): `DieRegistry`

Defined in: [src/dice/DieRegistry.ts:47](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/DieRegistry.ts#L47)

A registry with no factories, not even the built-ins.

#### Returns

`DieRegistry`
