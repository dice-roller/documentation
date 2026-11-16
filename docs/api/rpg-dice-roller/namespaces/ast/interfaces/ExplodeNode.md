[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ExplodeNode

# Interface: ExplodeNode

Defined in: [src/ast/nodes.ts:225](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L225)

`!`, `!!` (compound), `!p` (penetrate), `!!p`.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:234](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L234)

Number of child dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:230](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L230)

***

### compound

> `readonly` **compound**: `boolean`

Defined in: [src/ast/nodes.ts:228](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L228)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:232](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L232)

Maximum additional explosions per initial die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"explode"`

Defined in: [src/ast/nodes.ts:227](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L227)

***

### penetrate

> `readonly` **penetrate**: `boolean`

Defined in: [src/ast/nodes.ts:229](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L229)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:226](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L226)
