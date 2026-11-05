[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / reRollHandler

# Variable: reRollHandler

> `const` **reRollHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`ReRollNode`](../../ast/interfaces/ReRollNode.md)\>

Defined in: [src/modifiers/handlers/re-roll.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/handlers/re-roll.ts#L18)

`r`, `ro`: re-rolls rolls that match the compare point (the die's min by default), replacing the
value (the initial value is kept).

`r` repeats until the roll no longer matches (up to `ctx.limits.maxIterations` per roll, default
1000, flag `re-roll`); the final value can still match at the limit. `ro` re-rolls once (flag
`re-roll-once`).

## Throws

the pool die or `rollDie` is missing, or the die can only roll one value,
  even if no roll matches
