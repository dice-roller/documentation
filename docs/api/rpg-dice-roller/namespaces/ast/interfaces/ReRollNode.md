[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ReRollNode

# Interface: ReRollNode

Defined in: [src/ast/nodes.ts:283](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L283)

`r`, `ro` and numeric re-roll limits.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:291](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L291)

Number of replacement dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:287](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L287)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:289](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L289)

Maximum additional re-rolls per die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"re-roll"`

Defined in: [src/ast/nodes.ts:285](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L285)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:286](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L286)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:284](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L284)
