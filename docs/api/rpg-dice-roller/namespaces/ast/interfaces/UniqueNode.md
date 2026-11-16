[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / UniqueNode

# Interface: UniqueNode

Defined in: [src/ast/nodes.ts:289](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L289)

`u`, `uo` and numeric uniqueness limits.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:293](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L293)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:295](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L295)

Maximum additional re-rolls per duplicate die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"unique"`

Defined in: [src/ast/nodes.ts:291](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L291)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:292](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L292)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:290](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L290)
