[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / ScoredItem

# Interface: ScoredItem

Defined in: [src/results/types.ts:24](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L24)

A die roll or group member that modifier handlers can transform using the result helpers.

## Extended by

- [`DieResult`](DieResult.md)
- [`GroupMemberResult`](GroupMemberResult.md)

## Properties

### calculationValue

> `readonly` **calculationValue**: `number`

Defined in: [src/results/types.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L28)

The value used in totals (e.g. `1` / `-1` / `0` for target successes / failures).

***

### flags

> `readonly` **flags**: readonly (`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

Defined in: [src/results/types.ts:32](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L32)

Semantic markers for presenters; setting a flag alone does not change the total.

***

### useInTotal

> `readonly` **useInTotal**: `boolean`

Defined in: [src/results/types.ts:30](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L30)

`false` when dropped (or otherwise excluded from the total).

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:26](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L26)

The value after modifiers (e.g. after re-rolls, or `max` / `min`).
