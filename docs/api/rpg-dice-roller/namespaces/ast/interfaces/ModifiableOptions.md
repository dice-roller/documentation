[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ModifiableOptions

# Interface: ModifiableOptions

Defined in: [src/ast/builders.ts:94](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L94)

Options shared by pools and groups.

## Properties

### description?

> `optional` **description?**: `string` \| [`DescriptionNode`](DescriptionNode.md)

Defined in: [src/ast/builders.ts:98](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L98)

Text is trimmed and must be nonempty; a string is stored as an `inline` description.

***

### modifiers?

> `optional` **modifiers?**: readonly [`ModifierNode`](../type-aliases/ModifierNode.md)[]

Defined in: [src/ast/builders.ts:96](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L96)

Repeated names use the last node at the first position; keep and drop are keyed by end.
