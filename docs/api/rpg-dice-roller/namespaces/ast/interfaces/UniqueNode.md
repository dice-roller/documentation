[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / UniqueNode

# Interface: UniqueNode

Defined in: [src/ast/nodes.ts:261](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L261)

`u`, `uo` and numeric uniqueness limits.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:265](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L265)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:267](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L267)

Maximum additional re-rolls per duplicate die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"unique"`

Defined in: [src/ast/nodes.ts:263](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L263)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:264](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L264)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:262](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L262)
