[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / DieResult

# Interface: DieResult

Defined in: [src/results/types.ts:59](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L59)

A single die roll in a pool.

## Extends

- [`ScoredItem`](ScoredItem.md)

## Properties

### calculationValue

> `readonly` **calculationValue**: `number`

Defined in: [src/results/types.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L28)

The value used in totals (e.g. `1` / `-1` / `0` for target successes / failures).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`calculationValue`](ScoredItem.md#calculationvalue)

***

### flags

> `readonly` **flags**: readonly (`"max"` \| `"min"` \| `"explode-matching-batch"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"explode-matching-batch-failure"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

Defined in: [src/results/types.ts:32](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L32)

Semantic markers for presenters; setting a flag alone does not change the total.

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`flags`](ScoredItem.md#flags)

***

### initialValue

> `readonly` **initialValue**: `number`

Defined in: [src/results/types.ts:62](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L62)

The value originally rolled, before any modifiers.

***

### type

> `readonly` **type**: `"die"`

Defined in: [src/results/types.ts:60](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L60)

***

### useInTotal

> `readonly` **useInTotal**: `boolean`

Defined in: [src/results/types.ts:30](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L30)

`false` when dropped (or otherwise excluded from the total).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`useInTotal`](ScoredItem.md#useintotal)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:26](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L26)

The value after modifiers (e.g. after re-rolls, or `max` / `min`).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`value`](ScoredItem.md#value)
