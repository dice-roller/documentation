[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / PoolResult

# Interface: PoolResult

Defined in: [src/results/types.ts:60](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L60)

A pool's evaluated quantity, die arguments, die snapshot and modified rolls.

## Properties

### die

> `readonly` **die**: [`DieSnapshot`](../../dice/interfaces/DieSnapshot.md)

Defined in: [src/results/types.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L69)

The values of the die the factory created, for presenters.

***

### dieArgs

> `readonly` **dieArgs**: readonly [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)[]

Defined in: [src/results/types.ts:67](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L67)

The evaluated `node.die.args`, e.g. the `6` in `d6` or the `(2+3)` in `d(2+3)`.

***

### node

> `readonly` **node**: [`PoolNode`](../../ast/interfaces/PoolNode.md)

Defined in: [src/results/types.ts:62](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L62)

***

### qty

> `readonly` **qty**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:65](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L65)

***

### rolls

> `readonly` **rolls**: readonly [`DieResult`](DieResult.md)[]

Defined in: [src/results/types.ts:70](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L70)

***

### type

> `readonly` **type**: `"pool"`

Defined in: [src/results/types.ts:61](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L61)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:64](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/results/types.ts#L64)

The sum of `calculationValue` for the rolls that are `useInTotal`.
