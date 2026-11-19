[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / ConditionalResult

# Interface: ConditionalResult

Defined in: [src/results/types.ts:149](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L149)

A check and its one evaluated branch.

## Properties

### condition

> `readonly` **condition**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:153](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L153)

***

### node

> `readonly` **node**: [`ConditionalNode`](../../ast/interfaces/ConditionalNode.md)

Defined in: [src/results/types.ts:151](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L151)

***

### selectedBranch

> `readonly` **selectedBranch**: `"true"` \| `"false"`

Defined in: [src/results/types.ts:154](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L154)

***

### selectedResult

> `readonly` **selectedResult**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:155](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L155)

***

### type

> `readonly` **type**: `"conditional"`

Defined in: [src/results/types.ts:150](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L150)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:152](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L152)
