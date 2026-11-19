[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ReRollNode

# Interface: ReRollNode

Defined in: [src/ast/nodes.ts:312](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L312)

`r`, `ro` and numeric re-roll limits.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:320](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L320)

Number of replacement dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:316](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L316)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:318](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L318)

Maximum additional re-rolls per die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"re-roll"`

Defined in: [src/ast/nodes.ts:314](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L314)

***

### once

> `readonly` **once**: `boolean`

Defined in: [src/ast/nodes.ts:315](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L315)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:313](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L313)
