[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / UniqueNode

# Interface: UniqueNode

Defined in: [src/ast/nodes.ts:306](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L306)

`u`, `uo` and numeric uniqueness limits.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:310](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L310)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:312](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L312)

Maximum additional re-rolls per duplicate die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"unique"`

Defined in: [src/ast/nodes.ts:308](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L308)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:309](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L309)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:307](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L307)
