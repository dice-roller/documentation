[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / dropHandler

# Variable: dropHandler

> `const` **dropHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`DropNode`](../../ast/interfaces/DropNode.md)\>

Defined in: [src/modifiers/handlers/drop.ts:15](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/handlers/drop.ts#L15)

`d`, `dl`, `dh`: drops the lowest / highest `qty` items (flag `drop`).
`d` defaults to lowest.

Like keep, it looks at every item, including those already dropped. Of two equal items, the
earlier counts as the lower one. Dropping more items than there are drops them all.

On a group with a single expression it drops dice from every pool in it; otherwise it drops
members by their totals.
