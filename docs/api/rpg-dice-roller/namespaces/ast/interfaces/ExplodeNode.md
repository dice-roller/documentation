[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ExplodeNode

# Interface: ExplodeNode

Defined in: [src/ast/nodes.ts:240](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L240)

`!`, `!!` (compound), `!p` (penetrate), `!!p`.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:249](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L249)

Number of child dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:245](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L245)

***

### compound

> `readonly` **compound**: `boolean`

Defined in: [src/ast/nodes.ts:243](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L243)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:247](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L247)

Maximum additional explosions per initial die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"explode"`

Defined in: [src/ast/nodes.ts:242](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L242)

***

### penetrate

> `readonly` **penetrate**: `boolean`

Defined in: [src/ast/nodes.ts:244](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L244)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:241](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L241)
