[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ReRollNode

# Interface: ReRollNode

Defined in: [src/ast/nodes.ts:294](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L294)

`r`, `ro` and numeric re-roll limits.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:302](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L302)

Number of replacement dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:298](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L298)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:300](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L300)

Maximum additional re-rolls per die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"re-roll"`

Defined in: [src/ast/nodes.ts:296](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L296)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:297](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L297)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:295](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L295)
