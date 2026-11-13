[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / TextPresenterOptions

# Interface: TextPresenterOptions

Defined in: [src/presenters/TextPresenter.ts:43](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L43)

Options for formatting flags and roll histories.

## Properties

### flagSymbols?

> `optional` **flagSymbols?**: `Partial`\<`Record`\<`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`, `string`\>\>

Defined in: [src/presenters/TextPresenter.ts:45](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L45)

Overrides individual default flag symbols; an empty string suppresses a symbol.

***

### separator?

> `optional` **separator?**: `string`

Defined in: [src/presenters/TextPresenter.ts:47](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L47)

Joins the rolls of a history (default `"; "`; an empty string is allowed).
