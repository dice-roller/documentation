[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / TargetNode

# Interface: TargetNode

Defined in: [src/ast/nodes.ts:230](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L230)

Success / failure counting, e.g. `>=8:2f<=2`. The last matching rule in the block wins.

## Properties

### name

> `readonly` **name**: `"target"`

Defined in: [src/ast/nodes.ts:232](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L232)

***

### rules

> `readonly` **rules**: readonly [`TargetRule`](TargetRule.md)[]

Defined in: [src/ast/nodes.ts:233](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L233)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:231](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L231)
