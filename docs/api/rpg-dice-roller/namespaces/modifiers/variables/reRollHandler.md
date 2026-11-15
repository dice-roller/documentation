[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / reRollHandler

# Variable: reRollHandler

> `const` **reRollHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`ReRollNode`](../../ast/interfaces/ReRollNode.md)\>

Defined in: [src/modifiers/handlers/re-roll.ts:26](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/handlers/re-roll.ts#L26)

`r`, `ro` and numeric limits: re-roll rolls that match the compare point (the die's min by
default). `:amount` replaces each match with that many children, visited depth-first.
A single replacement retains the original initial value; branching children retain their own.

`r` repeats until the roll no longer matches (up to its optional limit or
`ctx.limits.maxIterations` per roll, default 1000, flag `re-roll`); the final value can still match
at the per-die limit. `ro` re-rolls once (flag `re-roll-once`). When the per-pool generated-roll
budget is spent, a match with no replacement remains terminal; partially generated branches keep
their terminal descendants and omit unrolled siblings.

## Throws

the pool die or `rollDie` is missing, or the die can only roll one value,
  even if no roll matches
