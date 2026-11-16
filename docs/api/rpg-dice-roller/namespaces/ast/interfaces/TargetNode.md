[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / TargetNode

# Interface: TargetNode

Defined in: [src/ast/nodes.ts:254](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L254)

Success / failure counting, e.g. `>=8:2f<=2`. The last matching rule in the block wins.

## Properties

### name

> `readonly` **name**: `"target"`

Defined in: [src/ast/nodes.ts:256](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L256)

***

### rules

> `readonly` **rules**: readonly [`TargetRule`](TargetRule.md)[]

Defined in: [src/ast/nodes.ts:257](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L257)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:255](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L255)
