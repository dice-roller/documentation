[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ModifiableOptions

# Interface: ModifiableOptions

Defined in: [src/ast/builders.ts:86](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L86)

Options shared by pools and groups.

## Properties

### description?

> `optional` **description?**: `string` \| [`DescriptionNode`](DescriptionNode.md)

Defined in: [src/ast/builders.ts:90](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L90)

Text is trimmed and must be nonempty; a string is stored as an `inline` description.

***

### modifiers?

> `optional` **modifiers?**: readonly [`ModifierNode`](../type-aliases/ModifierNode.md)[]

Defined in: [src/ast/builders.ts:88](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L88)

Repeated names use the last node at the first position; keep and drop are keyed by end.
