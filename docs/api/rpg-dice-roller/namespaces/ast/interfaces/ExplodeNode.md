[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ExplodeNode

# Interface: ExplodeNode

Defined in: [src/ast/nodes.ts:234](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L234)

`!`, `!!` (compound), `!p` (penetrate), `!!p`.

## Properties

### amount?

> `readonly` `optional` **amount?**: `number`

Defined in: [src/ast/nodes.ts:243](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L243)

Number of child dice generated for each matching roll; omitted amounts use 1.

***

### comparePoint?

> `readonly` `optional` **comparePoint?**: [`ComparePoint`](ComparePoint.md)

Defined in: [src/ast/nodes.ts:239](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L239)

***

### compound

> `readonly` **compound**: `boolean`

Defined in: [src/ast/nodes.ts:237](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L237)

***

### limit?

> `readonly` `optional` **limit?**: `number`

Defined in: [src/ast/nodes.ts:241](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L241)

Maximum additional explosions per initial die; omitted limits use the context cap.

***

### name

> `readonly` **name**: `"explode"`

Defined in: [src/ast/nodes.ts:236](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L236)

***

### penetrate

> `readonly` **penetrate**: `boolean`

Defined in: [src/ast/nodes.ts:238](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L238)

***

### type

> `readonly` **type**: `"modifier"`

Defined in: [src/ast/nodes.ts:235](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L235)
