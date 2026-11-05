[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / withFlags

# Function: withFlags()

> **withFlags**\<`T`\>(`item`, ...`flags`): `T`

Defined in: [src/results/die-result.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/die-result.ts#L23)

Returns a copy with flags deduplicated in first-occurrence order; does not change scoring.

## Type Parameters

### T

`T` *extends* [`ScoredItem`](../interfaces/ScoredItem.md)

## Parameters

### item

`T`

### flags

...(`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

## Returns

`T`
