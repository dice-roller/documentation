[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / TextPresenterOptions

# Interface: TextPresenterOptions

Defined in: [src/presenters/TextPresenter.ts:80](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L80)

Options for formatting flags and roll histories.

## Properties

### expandInlineRolls?

> `optional` **expandInlineRolls?**: `boolean`

Defined in: [src/presenters/TextPresenter.ts:86](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L86)

Shows stored dice results used to calculate pool quantities or sides (default `false`).

***

### flagSymbols?

> `optional` **flagSymbols?**: `Partial`\<`Record`\<`"max"` \| `"min"` \| `"explode-matching-batch"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"explode-matching-batch-failure"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`, `string`\>\>

Defined in: [src/presenters/TextPresenter.ts:82](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L82)

Overrides individual default flag symbols; an empty string suppresses a symbol.

***

### separator?

> `optional` **separator?**: `string`

Defined in: [src/presenters/TextPresenter.ts:84](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L84)

Joins the rolls of a history (default `"; "`; an empty string is allowed).
