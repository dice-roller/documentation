[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / GroupResult

# Interface: GroupResult

Defined in: [src/results/types.ts:81](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L81)

A group of evaluated members after its modifiers have been applied.

## Properties

### members

> `readonly` **members**: readonly [`GroupMemberResult`](GroupMemberResult.md)[]

Defined in: [src/results/types.ts:86](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L86)

***

### node

> `readonly` **node**: [`GroupNode`](../../ast/interfaces/GroupNode.md)

Defined in: [src/results/types.ts:83](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L83)

***

### type

> `readonly` **type**: `"group"`

Defined in: [src/results/types.ts:82](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L82)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:85](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L85)

The sum of `calculationValue` for members included in the total.
