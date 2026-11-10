[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / TreePresenter

# Abstract Class: TreePresenter\<T\>

Defined in: [src/presenters/TreePresenter.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L28)

A presenter with a hook per result type.

`present()` dispatches a history to `history()`, a roll to `roll()`, and a result node to its
hook (via `visit()`). Subclasses implement the hooks and control traversal: call `visit()` for
child results and `die()` from `pool()` for individual dice as needed. `die()` is not dispatched
by `present()` or `visit()`; an individual die is not an `ExpressionResult`.

## Extended by

- [`TextPresenter`](TextPresenter.md)

## Type Parameters

### T

`T`

the output type

## Implements

- [`Presenter`](../../../../interfaces/Presenter.md)\<`T`\>

## Constructors

### Constructor

> **new TreePresenter**\<`T`\>(): `TreePresenter`\<`T`\>

#### Returns

`TreePresenter`\<`T`\>

## Methods

### binary()

> `abstract` `protected` **binary**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L69)

#### Parameters

##### result

[`BinaryResult`](../../results/interfaces/BinaryResult.md)

#### Returns

`T`

***

### die()

> `abstract` `protected` **die**(`result`, `pool`): `T`

Defined in: [src/presenters/TreePresenter.ts:67](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L67)

#### Parameters

##### result

[`DieResult`](../../results/interfaces/DieResult.md)

##### pool

[`PoolResult`](../../results/interfaces/PoolResult.md)

#### Returns

`T`

***

### fn()

> `abstract` `protected` **fn**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:72](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L72)

#### Parameters

##### result

[`FunctionResult`](../../results/interfaces/FunctionResult.md)

#### Returns

`T`

***

### group()

> `abstract` `protected` **group**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:68](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L68)

#### Parameters

##### result

[`GroupResult`](../../results/interfaces/GroupResult.md)

#### Returns

`T`

***

### history()

> `abstract` `protected` **history**(`history`): `T`

Defined in: [src/presenters/TreePresenter.ts:62](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L62)

#### Parameters

##### history

[`RollHistory`](../../../../classes/RollHistory.md)

#### Returns

`T`

***

### number()

> `abstract` `protected` **number**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:65](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L65)

#### Parameters

##### result

[`NumberResult`](../../results/interfaces/NumberResult.md)

#### Returns

`T`

***

### paren()

> `abstract` `protected` **paren**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:71](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L71)

#### Parameters

##### result

[`ParenResult`](../../results/interfaces/ParenResult.md)

#### Returns

`T`

***

### pool()

> `abstract` `protected` **pool**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:66](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L66)

#### Parameters

##### result

[`PoolResult`](../../results/interfaces/PoolResult.md)

#### Returns

`T`

***

### present()

> **present**(`target`): `T`

Defined in: [src/presenters/TreePresenter.ts:30](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L30)

Dispatches a history, roll, or expression result to the corresponding hook.

#### Parameters

##### target

[`Presentable`](../../../../type-aliases/Presentable.md)

#### Returns

`T`

#### Implementation of

[`Presenter`](../../../../interfaces/Presenter.md).[`present`](../../../../interfaces/Presenter.md#present)

***

### roll()

> `abstract` `protected` **roll**(`roll`): `T`

Defined in: [src/presenters/TreePresenter.ts:64](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L64)

Usually wraps `this.visit(roll.result)`.

#### Parameters

##### roll

[`Roll`](../../../../classes/Roll.md)\<`unknown`\>

#### Returns

`T`

***

### unary()

> `abstract` `protected` **unary**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:70](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L70)

#### Parameters

##### result

[`UnaryResult`](../../results/interfaces/UnaryResult.md)

#### Returns

`T`

***

### visit()

> `protected` **visit**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:43](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L43)

Presents a result node with the hook for its type.

#### Parameters

##### result

[`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

#### Returns

`T`
