[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / TargetNode

# Interface: TargetNode

Defined in: [src/ast/nodes.ts:228](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L228)

Success / failure counting, e.g. `>=8:2f<=2`. The last matching rule in the block wins.

## Properties

### name

> `readonly` **name**: `"target"`

Defined in: [src/ast/nodes.ts:230](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L230)

***

### rules

> `readonly` **rules**: readonly [`TargetRule`](TargetRule.md)[]

Defined in: [src/ast/nodes.ts:231](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L231)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:229](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L229)
