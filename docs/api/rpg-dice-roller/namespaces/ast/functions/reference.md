[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / reference

# Function: reference()

> **reference**(`namespace`, ...`path`): [`ReferenceNode`](../interfaces/ReferenceNode.md)

Defined in: [src/ast/builders.ts:224](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L224)

A caller-data or system reference, e.g. `reference("data", "character", "level")`.

## Parameters

### namespace

[`ReferenceNamespace`](../type-aliases/ReferenceNamespace.md)

### path

...`string`[]

## Returns

[`ReferenceNode`](../interfaces/ReferenceNode.md)
