[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / TreePresenter

# Abstract Class: TreePresenter\<T\>

Defined in: [src/presenters/TreePresenter.ts:35](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L35)

A presenter with a hook per result type.

`present()` dispatches a history to `history()`, a roll to `roll()`, and a result node to its
hook (via `visit()`). Subclasses implement the hooks and control traversal: call `visit()` for
child results and `die()` from `pool()` for individual dice as needed. `die()` is not dispatched
by `present()` or `visit()`; an individual die is not an `ExpressionResult`.
For conditionals, visit `condition` and `selectedResult`; the unselected branch has no result.
Direct subclasses must implement `comparison()`, `conditional()` and `conditionReference()` as
well as the other hooks. Subclasses of `TextPresenter` inherit implementations and can override
them.

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

Defined in: [src/presenters/TreePresenter.ts:82](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L82)

#### Parameters

##### result

[`BinaryResult`](../../results/interfaces/BinaryResult.md)

#### Returns

`T`

***

### comparison()

> `abstract` `protected` **comparison**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:84](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L84)

Presents a comparison; visit its `left` and `right` operands as needed.

#### Parameters

##### result

[`ComparisonResult`](../../../../interfaces/ComparisonResult.md)

#### Returns

`T`

***

### conditional()

> `abstract` `protected` **conditional**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:88](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L88)

#### Parameters

##### result

[`ConditionalResult`](../../results/interfaces/ConditionalResult.md)

#### Returns

`T`

***

### conditionReference()

> `abstract` `protected` **conditionReference**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L89)

#### Parameters

##### result

[`ConditionReferenceResult`](../../results/interfaces/ConditionReferenceResult.md)

#### Returns

`T`

***

### die()

> `abstract` `protected` **die**(`result`, `pool`): `T`

Defined in: [src/presenters/TreePresenter.ts:80](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L80)

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

Defined in: [src/presenters/TreePresenter.ts:87](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L87)

#### Parameters

##### result

[`FunctionResult`](../../results/interfaces/FunctionResult.md)

#### Returns

`T`

***

### group()

> `abstract` `protected` **group**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:81](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L81)

#### Parameters

##### result

[`GroupResult`](../../results/interfaces/GroupResult.md)

#### Returns

`T`

***

### history()

> `abstract` `protected` **history**(`history`): `T`

Defined in: [src/presenters/TreePresenter.ts:75](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L75)

#### Parameters

##### history

[`RollHistory`](../../../../classes/RollHistory.md)

#### Returns

`T`

***

### number()

> `abstract` `protected` **number**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L78)

#### Parameters

##### result

[`NumberResult`](../../results/interfaces/NumberResult.md)

#### Returns

`T`

***

### paren()

> `abstract` `protected` **paren**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:86](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L86)

#### Parameters

##### result

[`ParenResult`](../../results/interfaces/ParenResult.md)

#### Returns

`T`

***

### pool()

> `abstract` `protected` **pool**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:79](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L79)

#### Parameters

##### result

[`PoolResult`](../../results/interfaces/PoolResult.md)

#### Returns

`T`

***

### present()

> **present**(`target`): `T`

Defined in: [src/presenters/TreePresenter.ts:37](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L37)

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

Defined in: [src/presenters/TreePresenter.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L77)

Usually wraps `this.visit(roll.result)`.

#### Parameters

##### roll

[`Roll`](../../../../classes/Roll.md)\<`unknown`\>

#### Returns

`T`

***

### unary()

> `abstract` `protected` **unary**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:85](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L85)

#### Parameters

##### result

[`UnaryResult`](../../results/interfaces/UnaryResult.md)

#### Returns

`T`

***

### visit()

> `protected` **visit**(`result`): `T`

Defined in: [src/presenters/TreePresenter.ts:50](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L50)

Presents a result node with the hook for its type.

#### Parameters

##### result

[`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

#### Returns

`T`
