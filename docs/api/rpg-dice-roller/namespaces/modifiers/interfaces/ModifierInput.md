[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / ModifierInput

# Interface: ModifierInput\<N\>

Defined in: [src/modifiers/types.ts:10](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/types.ts#L10)

Context and modifier node supplied to a handler alongside its items.

## Type Parameters

### N

`N` *extends* [`ModifierNode`](../../ast/type-aliases/ModifierNode.md) = [`ModifierNode`](../../ast/type-aliases/ModifierNode.md)

## Properties

### ctx

> `readonly` **ctx**: [`RollContext`](../../../../interfaces/RollContext.md)

Defined in: [src/modifiers/types.ts:14](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/types.ts#L14)

Roll mode, random generator, and safety limits for this evaluation.

***

### die?

> `readonly` `optional` **die?**: [`ResolvedDie`](../../dice/interfaces/ResolvedDie.md)

Defined in: [src/modifiers/types.ts:16](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/types.ts#L16)

The pool's die (pools only).

***

### modifier

> `readonly` **modifier**: `N`

Defined in: [src/modifiers/types.ts:12](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/types.ts#L12)

The modifier node from the AST.

***

### rollDie?

> `readonly` `optional` **rollDie?**: () => [`DieResult`](../../results/interfaces/DieResult.md)

Defined in: [src/modifiers/types.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/types.ts#L18)

Rolls one more die of the pool (pools only), e.g. for explode and re-roll.

#### Returns

[`DieResult`](../../results/interfaces/DieResult.md)
