[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / GroupNode

# Interface: GroupNode

Defined in: [src/ast/nodes.ts:75](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L75)

A roll group, e.g. `{4d6+2d8, 3d20}k1`.

## Properties

### description?

> `readonly` `optional` **description?**: [`DescriptionNode`](DescriptionNode.md)

Defined in: [src/ast/nodes.ts:79](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L79)

***

### expressions

> `readonly` **expressions**: readonly [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)[]

Defined in: [src/ast/nodes.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L77)

***

### modifiers

> `readonly` **modifiers**: readonly [`ModifierNode`](../type-aliases/ModifierNode.md)[]

Defined in: [src/ast/nodes.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L78)

***

### type

> `readonly` **type**: `"group"`

Defined in: [src/ast/nodes.ts:76](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L76)
