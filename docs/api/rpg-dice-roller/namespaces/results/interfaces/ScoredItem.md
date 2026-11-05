[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / ScoredItem

# Interface: ScoredItem

Defined in: [src/results/types.ts:21](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L21)

A die roll or group member that modifier handlers can transform using the result helpers.

## Extended by

- [`DieResult`](DieResult.md)
- [`GroupMemberResult`](GroupMemberResult.md)

## Properties

### calculationValue

> `readonly` **calculationValue**: `number`

Defined in: [src/results/types.ts:25](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L25)

The value used in totals (e.g. `1` / `-1` / `0` for target successes / failures).

***

### flags

> `readonly` **flags**: readonly (`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

Defined in: [src/results/types.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L29)

Semantic markers for presenters; setting a flag alone does not change the total.

***

### useInTotal

> `readonly` **useInTotal**: `boolean`

Defined in: [src/results/types.ts:27](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L27)

`false` when dropped (or otherwise excluded from the total).

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L23)

The value after modifiers (e.g. after re-rolls, or `max` / `min`).
