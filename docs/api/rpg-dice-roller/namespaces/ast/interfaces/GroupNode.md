[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / GroupNode

# Interface: GroupNode

Defined in: [src/ast/nodes.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L77)

A roll group, e.g. `{4d6+2d8, 3d20}k1`.

## Properties

### description?

> `readonly` `optional` **description?**: [`DescriptionNode`](DescriptionNode.md)

Defined in: [src/ast/nodes.ts:81](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L81)

***

### expressions

> `readonly` **expressions**: readonly [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)[]

Defined in: [src/ast/nodes.ts:79](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L79)

***

### modifiers

> `readonly` **modifiers**: readonly [`ModifierNode`](../type-aliases/ModifierNode.md)[]

Defined in: [src/ast/nodes.ts:80](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L80)

***

### type

> `readonly` **type**: `"group"`

Defined in: [src/ast/nodes.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L78)
