[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / GroupMemberResult

# Interface: GroupMemberResult

Defined in: [src/results/types.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L78)

One expression of a roll group, with scoring separate from its nested expression result.

## Extends

- [`ScoredItem`](ScoredItem.md)

## Properties

### calculationValue

> `readonly` **calculationValue**: `number`

Defined in: [src/results/types.ts:27](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L27)

The value used in totals (e.g. `1` / `-1` / `0` for target successes / failures).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`calculationValue`](ScoredItem.md#calculationvalue)

***

### flags

> `readonly` **flags**: readonly (`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

Defined in: [src/results/types.ts:31](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L31)

Semantic markers for presenters; setting a flag alone does not change the total.

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`flags`](ScoredItem.md#flags)

***

### result

> `readonly` **result**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:81](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L81)

The evaluated expression; scoring changes to the member need not change this result.

***

### type

> `readonly` **type**: `"group-member"`

Defined in: [src/results/types.ts:79](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L79)

***

### useInTotal

> `readonly` **useInTotal**: `boolean`

Defined in: [src/results/types.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L29)

`false` when dropped (or otherwise excluded from the total).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`useInTotal`](ScoredItem.md#useintotal)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:25](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L25)

The value after modifiers (e.g. after re-rolls, or `max` / `min`).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`value`](ScoredItem.md#value)
