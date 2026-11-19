[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ExplodeNode

# Interface: ExplodeNode

Defined in: [src/ast/nodes.ts:241](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L241)

`!`, `!!` (compound), `!p` (penetrate), `!!p`.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:250](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L250)

Number of child dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:246](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L246)

***

### compound

> `readonly` **compound**: `boolean`

Defined in: [src/ast/nodes.ts:244](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L244)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:248](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L248)

Maximum additional explosions per initial die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"explode"`

Defined in: [src/ast/nodes.ts:243](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L243)

***

### penetrate

> `readonly` **penetrate**: `boolean`

Defined in: [src/ast/nodes.ts:245](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L245)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:242](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L242)
