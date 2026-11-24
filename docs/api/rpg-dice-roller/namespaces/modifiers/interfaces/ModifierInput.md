[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / ModifierInput

# Interface: ModifierInput\<N\>

Defined in: [src/modifiers/types.ts:16](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L16)

Context and modifier node supplied to a handler alongside its items.

## Type Parameters

### N

`N` *extends* [`ModifierNode`](../../ast/type-aliases/ModifierNode.md) = [`ModifierNode`](../../ast/type-aliases/ModifierNode.md)

## Properties

### ctx

> `readonly` **ctx**: [`RollContext`](../../../../interfaces/RollContext.md)

Defined in: [src/modifiers/types.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L23)

Roll mode, random generator, and safety limits for this evaluation.

***

### die?

> `readonly` `optional` **die?**: [`ResolvedDie`](../../dice/interfaces/ResolvedDie.md)

Defined in: [src/modifiers/types.ts:25](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L25)

The pool's die (pools only).

***

### modifier

> `readonly` **modifier**: `N`

Defined in: [src/modifiers/types.ts:21](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L21)

The modifier node from the AST for numeric quantities; computed Keep/Drop quantities arrive as
a temporary numeric view while their original expressions remain on the source AST and result.

***

### rollBatch?

> `readonly` `optional` **rollBatch?**: (`count`) => `Generator`\<`EvaluationDrawRequest`, readonly [`DieResult`](../../results/interfaces/DieResult.md)[] \| `undefined`, `number`\>

Defined in: [src/modifiers/types.ts:33](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L33)

Rolls a complete batch atomically, or returns `undefined` without drawing if the remaining per-pool budget is insufficient.

#### Parameters

##### count

`number`

#### Returns

`Generator`\<`EvaluationDrawRequest`, readonly [`DieResult`](../../results/interfaces/DieResult.md)[] \| `undefined`, `number`\>

***

### rollDie?

> `readonly` `optional` **rollDie?**: () => `Generator`\<`EvaluationDrawRequest`, [`DieResult`](../../results/interfaces/DieResult.md) \| `undefined`, `number`\>

Defined in: [src/modifiers/types.ts:27](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L27)

Rolls one more die of the pool, or returns `undefined` when its per-pool budget is spent. Initial dice are excluded; repeating handlers must handle exhaustion and keep the results rolled so far.

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`DieResult`](../../results/interfaces/DieResult.md) \| `undefined`, `number`\>
