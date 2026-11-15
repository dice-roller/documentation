[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ReRollNode

# Interface: ReRollNode

Defined in: [src/ast/nodes.ts:253](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L253)

`r`, `ro` and numeric re-roll limits.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:261](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L261)

Number of replacement dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:257](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L257)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:259](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L259)

Maximum additional re-rolls per die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"re-roll"`

Defined in: [src/ast/nodes.ts:255](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L255)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:256](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L256)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:254](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L254)
