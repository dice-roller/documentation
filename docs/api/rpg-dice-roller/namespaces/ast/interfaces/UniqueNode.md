[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / UniqueNode

# Interface: UniqueNode

Defined in: [src/ast/nodes.ts:280](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L280)

`u`, `uo` and numeric uniqueness limits.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:284](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L284)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:286](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L286)

Maximum additional re-rolls per duplicate die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"unique"`

Defined in: [src/ast/nodes.ts:282](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L282)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:283](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L283)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:281](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L281)
