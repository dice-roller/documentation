[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / TargetNode

# Interface: TargetNode

Defined in: [src/ast/nodes.ts:271](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L271)

Success / failure counting, e.g. `>=8:2f<=2`. The last matching rule in the block wins.

## Properties

### name

> `readonly` **name**: `"target"`

Defined in: [src/ast/nodes.ts:273](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L273)

***

### rules

> `readonly` **rules**: readonly [`TargetRule`](TargetRule.md)[]

Defined in: [src/ast/nodes.ts:274](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L274)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:272](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L272)
