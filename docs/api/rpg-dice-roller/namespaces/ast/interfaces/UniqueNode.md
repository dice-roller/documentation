[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / UniqueNode

# Interface: UniqueNode

Defined in: [src/ast/nodes.ts:295](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L295)

`u`, `uo` and numeric uniqueness limits.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:299](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L299)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:301](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L301)

Maximum additional re-rolls per duplicate die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"unique"`

Defined in: [src/ast/nodes.ts:297](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L297)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:298](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L298)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:296](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L296)
