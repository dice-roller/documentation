[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / UniqueNode

# Interface: UniqueNode

Defined in: [src/ast/nodes.ts:324](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L324)

`u`, `uo` and numeric uniqueness limits.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:328](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L328)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:330](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L330)

Maximum additional re-rolls per duplicate die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"unique"`

Defined in: [src/ast/nodes.ts:326](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L326)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:327](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L327)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:325](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L325)
