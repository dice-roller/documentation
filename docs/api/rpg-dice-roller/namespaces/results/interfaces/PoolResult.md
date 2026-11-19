[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / PoolResult

# Interface: PoolResult

Defined in: [src/results/types.ts:66](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L66)

A pool's evaluated quantity, die arguments, die snapshot and modified rolls.

## Properties

### die

> `readonly` **die**: [`DieSnapshot`](../../dice/interfaces/DieSnapshot.md)

Defined in: [src/results/types.ts:75](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L75)

The values of the die the factory created, for presenters.

***

### dieArgs

> `readonly` **dieArgs**: readonly [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)[]

Defined in: [src/results/types.ts:73](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L73)

The evaluated `node.die.args`, e.g. the `6` in `d6` or the `(2+3)` in `d(2+3)`.

***

### modifierArguments?

> `readonly` `optional` **modifierArguments?**: readonly [`ModifierArgumentResult`](ModifierArgumentResult.md)[]

Defined in: [src/results/types.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L78)

Evaluated Keep/Drop expressions, in modifier execution order; omitted for numeric modifiers.

***

### node

> `readonly` **node**: [`PoolNode`](../../ast/interfaces/PoolNode.md)

Defined in: [src/results/types.ts:68](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L68)

***

### qty

> `readonly` **qty**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:71](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L71)

***

### rolls

> `readonly` **rolls**: readonly [`DieResult`](DieResult.md)[]

Defined in: [src/results/types.ts:76](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L76)

***

### type

> `readonly` **type**: `"pool"`

Defined in: [src/results/types.ts:67](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L67)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:70](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L70)

The sum of `calculationValue` for the rolls that are `useInTotal`.
