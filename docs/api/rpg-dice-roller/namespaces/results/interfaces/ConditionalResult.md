[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / ConditionalResult

# Interface: ConditionalResult

Defined in: [src/results/types.ts:138](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L138)

A check and its one evaluated branch.

## Properties

### condition

> `readonly` **condition**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:142](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L142)

***

### node

> `readonly` **node**: [`ConditionalNode`](../../ast/interfaces/ConditionalNode.md)

Defined in: [src/results/types.ts:140](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L140)

***

### selectedBranch

> `readonly` **selectedBranch**: `"true"` \| `"false"`

Defined in: [src/results/types.ts:143](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L143)

***

### selectedResult

> `readonly` **selectedResult**: [`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

Defined in: [src/results/types.ts:144](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L144)

***

### type

> `readonly` **type**: `"conditional"`

Defined in: [src/results/types.ts:139](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L139)

***

### value

> `readonly` **value**: `number`

Defined in: [src/results/types.ts:141](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/types.ts#L141)
