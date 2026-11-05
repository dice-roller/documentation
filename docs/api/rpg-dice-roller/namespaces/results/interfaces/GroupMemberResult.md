[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / GroupMemberResult

# Interface: GroupMemberResult

Defined in: [src/results/types.ts:74](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L74)

One expression of a roll group, with scoring separate from its nested expression result.

## Extends

- [`ScoredItem`](ScoredItem.md)

## Properties

### calculationValue

> `readonly` **calculationValue**: `number`

Defined in: [src/results/types.ts:25](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L25)

The value used in totals (e.g. `1` / `-1` / `0` for target successes / failures).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`calculationValue`](ScoredItem.md#calculationvalue)

***

### flags

> `readonly` **flags**: readonly (`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

Defined in: [src/results/types.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L29)

Semantic markers for presenters; setting a flag alone does not change the total.

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`flags`](ScoredItem.md#flags)

***

### result

> `readonly` **result**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L77)

The evaluated expression; scoring changes to the member need not change this result.

***

### type

> `readonly` **type**: `"group-member"`

Defined in: [src/results/types.ts:75](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L75)

***

### useInTotal

> `readonly` **useInTotal**: `boolean`

Defined in: [src/results/types.ts:27](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L27)

`false` when dropped (or otherwise excluded from the total).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`useInTotal`](ScoredItem.md#useintotal)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L23)

The value after modifiers (e.g. after re-rolls, or `max` / `min`).

#### Inherited from

[`ScoredItem`](ScoredItem.md).[`value`](ScoredItem.md#value)
