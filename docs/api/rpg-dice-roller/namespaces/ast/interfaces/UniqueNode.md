[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / UniqueNode

# Interface: UniqueNode

Defined in: [src/ast/nodes.ts:265](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L265)

`u`, `uo` and numeric uniqueness limits.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:269](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L269)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:271](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L271)

Maximum additional re-rolls per duplicate die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"unique"`

Defined in: [src/ast/nodes.ts:267](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L267)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:268](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L268)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:266](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L266)
