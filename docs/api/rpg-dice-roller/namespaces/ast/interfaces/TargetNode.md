[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / TargetNode

# Interface: TargetNode

Defined in: [src/ast/nodes.ts:260](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L260)

Success / failure counting, e.g. `>=8:2f<=2`. The last matching rule in the block wins.

## Properties

### name

> `readonly` **name**: `"target"`

Defined in: [src/ast/nodes.ts:262](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L262)

***

### rules

> `readonly` **rules**: readonly [`TargetRule`](TargetRule.md)[]

Defined in: [src/ast/nodes.ts:263](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L263)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:261](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L261)
