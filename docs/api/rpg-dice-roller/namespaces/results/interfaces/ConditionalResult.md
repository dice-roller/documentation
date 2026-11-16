[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / ConditionalResult

# Interface: ConditionalResult

Defined in: [src/results/types.ts:127](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L127)

A check and its one evaluated branch.

## Properties

### condition

> `readonly` **condition**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:131](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L131)

***

### node

> `readonly` **node**: [`ConditionalNode`](../../ast/interfaces/ConditionalNode.md)

Defined in: [src/results/types.ts:129](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L129)

***

### selectedBranch

> `readonly` **selectedBranch**: `"true"` \| `"false"`

Defined in: [src/results/types.ts:132](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L132)

***

### selectedResult

> `readonly` **selectedResult**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:133](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L133)

***

### type

> `readonly` **type**: `"conditional"`

Defined in: [src/results/types.ts:128](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L128)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:130](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L130)
