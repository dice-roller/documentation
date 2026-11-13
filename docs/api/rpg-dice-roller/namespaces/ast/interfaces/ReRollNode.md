[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ReRollNode

# Interface: ReRollNode

Defined in: [src/ast/nodes.ts:251](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L251)

`r`, `ro` and numeric re-roll limits.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:255](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L255)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:257](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L257)

Maximum additional re-rolls per die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"re-roll"`

Defined in: [src/ast/nodes.ts:253](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L253)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:254](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L254)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:252](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L252)
