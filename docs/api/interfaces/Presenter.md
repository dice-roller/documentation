[@dice-roller/rpg-dice-roller](../index.md) / Presenter

# Interface: Presenter\<T\>

Defined in: [src/presenters/Presenter.ts:8](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/Presenter.ts#L8)

Turns a roll, a roll history, or a result node into any output, e.g. text, HTML or Markdown.

## Type Parameters

### T

`T` = `string`

the output type

## Methods

### present()

> **present**(`target`): `T`

Defined in: [src/presenters/Presenter.ts:10](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/Presenter.ts#L10)

Presents a roll, history, or expression result in this presenter's output type.

#### Parameters

##### target

[`Presentable`](../type-aliases/Presentable.md)

#### Returns

`T`
