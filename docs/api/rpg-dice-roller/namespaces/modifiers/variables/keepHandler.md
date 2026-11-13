[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / keepHandler

# Variable: keepHandler

> `const` **keepHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`KeepNode`](../../ast/interfaces/KeepNode.md)\>

Defined in: [src/modifiers/handlers/keep.ts:16](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/handlers/keep.ts#L16)

`k`, `kh`, `kl`: keeps the highest / lowest `qty` items, and drops the rest (flag `drop`).
`k` defaults to highest.

Like drop, it looks at every item, including those already dropped, so keep and drop can
override each other (`3d10k1dh1` drops every roll). Of two equal items, the earlier counts as
the lower one. Keeping more items than there are keeps them all.

On a group with a single expression it keeps dice from every pool in it; otherwise it keeps
members by their totals.
