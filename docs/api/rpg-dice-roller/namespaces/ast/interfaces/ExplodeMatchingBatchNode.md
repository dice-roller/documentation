[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ExplodeMatchingBatchNode

# Interface: ExplodeMatchingBatchNode

Defined in: [src/ast/nodes.ts:256](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L256)

`!m[limit][comparePoint][f failureComparePoint]`

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:259](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L259)

***

### failureComparePoint?

> `readonly` `optional` **failureComparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:260](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L260)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:262](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L262)

Maximum additional explosions per initial batch; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"explode-matching-batch"`

Defined in: [src/ast/nodes.ts:258](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L258)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:257](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L257)
