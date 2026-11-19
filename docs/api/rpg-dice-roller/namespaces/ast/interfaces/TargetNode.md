[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / TargetNode

# Interface: TargetNode

Defined in: [src/ast/nodes.ts:273](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L273)

Success / failure counting, e.g. `>=8:2f<=2`. The last matching rule in the block wins.

## Properties

### name

> `readonly` **name**: `"target"`

Defined in: [src/ast/nodes.ts:275](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L275)

***

### rules

> `readonly` **rules**: readonly [`TargetRule`](TargetRule.md)[]

Defined in: [src/ast/nodes.ts:276](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L276)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:274](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L274)
