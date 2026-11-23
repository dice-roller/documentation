[@dice-roller/rpg-dice-roller](../index.md) / ConciseRollData

# Interface: ConciseRollData

Defined in: [src/serialization/formats.ts:59](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L59)

Hand-written, evaluated results that can be expanded into a roll snapshot.

## Properties

### groups?

> `readonly` `optional` **groups?**: `Readonly`\<`Record`\<`number`, [`ConciseGroupResult`](ConciseGroupResult.md)\>\>

Defined in: [src/serialization/formats.ts:65](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L65)

Overrides keyed by the group's zero-based encounter index.

***

### notation

> `readonly` **notation**: `string`

Defined in: [src/serialization/formats.ts:61](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L61)

***

### rolls

> `readonly` **rolls**: readonly (readonly [`ConciseDieResult`](../type-aliases/ConciseDieResult.md)[])[]

Defined in: [src/serialization/formats.ts:63](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L63)

One array per visited pool, with the parent before any pools in its parameters.

***

### type?

> `readonly` `optional` **type?**: `undefined`

Defined in: [src/serialization/formats.ts:60](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L60)
