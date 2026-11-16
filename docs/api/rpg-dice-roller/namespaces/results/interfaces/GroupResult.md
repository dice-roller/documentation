[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / GroupResult

# Interface: GroupResult

Defined in: [src/results/types.ts:87](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L87)

A group of evaluated members after its modifiers have been applied.

## Properties

### members

> `readonly` **members**: readonly [`GroupMemberResult`](GroupMemberResult.md)[]

Defined in: [src/results/types.ts:92](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L92)

***

### node

> `readonly` **node**: [`GroupNode`](../../ast/interfaces/GroupNode.md)

Defined in: [src/results/types.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L89)

***

### type

> `readonly` **type**: `"group"`

Defined in: [src/results/types.ts:88](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L88)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:91](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L91)

The sum of `calculationValue` for members included in the total.
