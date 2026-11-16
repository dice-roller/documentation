[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / TextPresenterOptions

# Interface: TextPresenterOptions

Defined in: [src/presenters/TextPresenter.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L69)

Options for formatting flags and roll histories.

## Properties

### expandInlineRolls?

> `optional` **expandInlineRolls?**: `boolean`

Defined in: [src/presenters/TextPresenter.ts:75](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L75)

Shows stored dice results used to calculate pool quantities or sides (default `false`).

***

### flagSymbols?

> `optional` **flagSymbols?**: `Partial`\<`Record`\<`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`, `string`\>\>

Defined in: [src/presenters/TextPresenter.ts:71](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L71)

Overrides individual default flag symbols; an empty string suppresses a symbol.

***

### separator?

> `optional` **separator?**: `string`

Defined in: [src/presenters/TextPresenter.ts:73](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L73)

Joins the rolls of a history (default `"; "`; an empty string is allowed).
