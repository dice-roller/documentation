[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / explodeHandler

# Variable: explodeHandler

> `const` **explodeHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`ExplodeNode`](../../ast/interfaces/ExplodeNode.md)\>

Defined in: [src/modifiers/handlers/explode.ts:26](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/handlers/explode.ts#L26)

`!`, `!!`, `!p`, `!!p`: rolls another die whenever a roll matches the compare point (the die's max
by default), up to the modifier limit or `ctx.limits.maxIterations` times per initial die (default
1000). At the limit the last extra roll is retained even if it matches.

- compound (`!!`): adds the extra rolls to the original roll (flags `explode` and `compound`)
- penetrate (`p`): subtracts 1 from each extra roll (flag `penetrate`); whether it explodes
  again is checked before subtracting
- otherwise each extra roll is a new die result, after the roll that exploded (flag `explode`)

## Throws

the pool die or `rollDie` is missing, or the die can only roll one value,
  even if no roll matches
