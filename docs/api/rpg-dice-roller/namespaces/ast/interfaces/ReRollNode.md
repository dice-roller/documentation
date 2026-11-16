[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ReRollNode

# Interface: ReRollNode

Defined in: [src/ast/nodes.ts:268](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L268)

`r`, `ro` and numeric re-roll limits.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:276](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L276)

Number of replacement dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:272](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L272)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:274](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L274)

Maximum additional re-rolls per die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"re-roll"`

Defined in: [src/ast/nodes.ts:270](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L270)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:271](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L271)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:269](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L269)
