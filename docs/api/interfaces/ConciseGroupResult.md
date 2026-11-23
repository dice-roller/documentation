[@dice-roller/rpg-dice-roller](../index.md) / ConciseGroupResult

# Interface: ConciseGroupResult

Defined in: [src/serialization/formats.ts:51](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L51)

Overrides for a group's finished members, indexed by their position in the notation.

## Properties

### members?

> `readonly` `optional` **members?**: `Readonly`\<`Record`\<`number`, `Partial`\<[`ScoredItem`](../rpg-dice-roller/namespaces/results/interfaces/ScoredItem.md)\>\>\>

Defined in: [src/serialization/formats.ts:55](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L55)

Scoring fields keyed by the member's original index.

***

### order?

> `readonly` `optional` **order?**: readonly `number`[]

Defined in: [src/serialization/formats.ts:53](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L53)

A permutation of member indexes in the order they should appear in the result.
