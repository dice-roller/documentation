[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / DieResult

# Interface: DieResult

Defined in: [src/results/types.ts:53](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/results/types.ts#L53)

A single die roll in a pool.

## Extends

- [`ScoredItem`](ScoredItem.md)

## Properties

### calculationValue

> `readonly` **calculationValue**: `number`

Defined in: [src/results/types.ts:25](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/results/types.ts#L25)

The value used in totals (e.g. `1` / `-1` / `0` for target successes / failures).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`calculationValue`](ScoredItem.md#calculationvalue)

***

### flags

> `readonly` **flags**: readonly (`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

Defined in: [src/results/types.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/results/types.ts#L29)

Semantic markers for presenters; setting a flag alone does not change the total.

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`flags`](ScoredItem.md#flags)

***

### initialValue

> `readonly` **initialValue**: `number`

Defined in: [src/results/types.ts:56](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/results/types.ts#L56)

The value originally rolled, before any modifiers.

***

### type

> `readonly` **type**: `"die"`

Defined in: [src/results/types.ts:54](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/results/types.ts#L54)

***

### useInTotal

> `readonly` **useInTotal**: `boolean`

Defined in: [src/results/types.ts:27](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/results/types.ts#L27)

`false` when dropped (or otherwise excluded from the total).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`useInTotal`](ScoredItem.md#useintotal)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/results/types.ts#L23)

The value after modifiers (e.g. after re-rolls, or `max` / `min`).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`value`](ScoredItem.md#value)
