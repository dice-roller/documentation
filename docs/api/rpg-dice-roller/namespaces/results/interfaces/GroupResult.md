[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / GroupResult

# Interface: GroupResult

Defined in: [src/results/types.ts:96](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L96)

A group of evaluated members after its modifiers have been applied.

## Properties

### members

> `readonly` **members**: readonly [`GroupMemberResult`](GroupMemberResult.md)[]

Defined in: [src/results/types.ts:101](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L101)

***

### modifierArguments?

> `readonly` `optional` **modifierArguments?**: readonly [`ModifierArgumentResult`](ModifierArgumentResult.md)[]

Defined in: [src/results/types.ts:103](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L103)

Evaluated Keep/Drop expressions, in modifier execution order; omitted for numeric modifiers.

***

### node

> `readonly` **node**: [`GroupNode`](../../ast/interfaces/GroupNode.md)

Defined in: [src/results/types.ts:98](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L98)

***

### type

> `readonly` **type**: `"group"`

Defined in: [src/results/types.ts:97](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L97)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:100](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L100)

The sum of `calculationValue` for members included in the total.
