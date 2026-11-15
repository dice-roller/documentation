[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / TextPresenterOptions

# Interface: TextPresenterOptions

Defined in: [src/presenters/TextPresenter.ts:62](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L62)

Options for formatting flags and roll histories.

## Properties

### expandInlineRolls?

> `optional` **expandInlineRolls?**: `boolean`

Defined in: [src/presenters/TextPresenter.ts:68](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L68)

Shows stored dice results used to calculate pool quantities or sides (default `false`).

***

### flagSymbols?

> `optional` **flagSymbols?**: `Partial`\<`Record`\<`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`, `string`\>\>

Defined in: [src/presenters/TextPresenter.ts:64](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L64)

Overrides individual default flag symbols; an empty string suppresses a symbol.

***

### separator?

> `optional` **separator?**: `string`

Defined in: [src/presenters/TextPresenter.ts:66](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L66)

Joins the rolls of a history (default `"; "`; an empty string is allowed).
