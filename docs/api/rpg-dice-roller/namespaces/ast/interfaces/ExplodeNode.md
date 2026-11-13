[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ExplodeNode

# Interface: ExplodeNode

Defined in: [src/ast/nodes.ts:210](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L210)

`!`, `!!` (compound), `!p` (penetrate), `!!p`.

## Properties

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:215](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L215)

***

### compound

> `readonly` **compound**: `boolean`

Defined in: [src/ast/nodes.ts:213](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L213)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:217](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L217)

Maximum additional explosions per initial die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"explode"`

Defined in: [src/ast/nodes.ts:212](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L212)

***

### penetrate

> `readonly` **penetrate**: `boolean`

Defined in: [src/ast/nodes.ts:214](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L214)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:211](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L211)
