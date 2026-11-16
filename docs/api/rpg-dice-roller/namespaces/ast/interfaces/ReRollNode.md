[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ReRollNode

# Interface: ReRollNode

Defined in: [src/ast/nodes.ts:277](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L277)

`r`, `ro` and numeric re-roll limits.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:285](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L285)

Number of replacement dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:281](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L281)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:283](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L283)

Maximum additional re-rolls per die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"re-roll"`

Defined in: [src/ast/nodes.ts:279](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L279)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:280](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L280)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:278](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L278)
