[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ReferenceNode

# Interface: ReferenceNode

Defined in: [src/ast/nodes.ts:161](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L161)

A reference to a caller data path or an externally supplied system binding.

## Properties

### namespace

> `readonly` **namespace**: [`ReferenceNamespace`](../type-aliases/ReferenceNamespace.md)

Defined in: [src/ast/nodes.ts:163](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L163)

***

### path

> `readonly` **path**: readonly `string`[]

Defined in: [src/ast/nodes.ts:165](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L165)

Path segments are resolved within the selected namespace.

***

### type

> `readonly` **type**: `"reference"`

Defined in: [src/ast/nodes.ts:162](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L162)
