[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / ModifierInput

# Interface: ModifierInput\<N\>

Defined in: [src/modifiers/types.ts:10](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L10)

Context and modifier node supplied to a handler alongside its items.

## Type Parameters

### N

`N` *extends* [`ModifierNode`](../../ast/type-aliases/ModifierNode.md) = [`ModifierNode`](../../ast/type-aliases/ModifierNode.md)

## Properties

### ctx

> `readonly` **ctx**: [`RollContext`](../../../../interfaces/RollContext.md)

Defined in: [src/modifiers/types.ts:14](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L14)

Roll mode, random generator, and safety limits for this evaluation.

***

### die?

> `readonly` `optional` **die?**: [`ResolvedDie`](../../dice/interfaces/ResolvedDie.md)

Defined in: [src/modifiers/types.ts:16](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L16)

The pool's die (pools only).

***

### modifier

> `readonly` **modifier**: `N`

Defined in: [src/modifiers/types.ts:12](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L12)

The modifier node from the AST.

***

### rollBatch?

> `readonly` `optional` **rollBatch?**: (`count`) => readonly [`DieResult`](../../results/interfaces/DieResult.md)[] \| `undefined`

Defined in: [src/modifiers/types.ts:20](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L20)

Rolls a complete batch atomically, or returns `undefined` without drawing if the remaining per-pool budget is insufficient.

#### Parameters

##### count

`number`

#### Returns

readonly [`DieResult`](../../results/interfaces/DieResult.md)[] \| `undefined`

***

### rollDie?

> `readonly` `optional` **rollDie?**: () => [`DieResult`](../../results/interfaces/DieResult.md) \| `undefined`

Defined in: [src/modifiers/types.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L18)

Rolls one more die of the pool, or returns `undefined` when its per-pool budget is spent. Initial dice are excluded; repeating handlers must handle exhaustion and keep the results rolled so far.

#### Returns

[`DieResult`](../../results/interfaces/DieResult.md) \| `undefined`
