[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / TargetNode

# Interface: TargetNode

Defined in: [src/ast/nodes.ts:245](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L245)

Success / failure counting, e.g. `>=8:2f<=2`. The last matching rule in the block wins.

## Properties

### name

> `readonly` **name**: `"target"`

Defined in: [src/ast/nodes.ts:247](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L247)

***

### rules

> `readonly` **rules**: readonly [`TargetRule`](TargetRule.md)[]

Defined in: [src/ast/nodes.ts:248](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L248)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:246](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L246)
