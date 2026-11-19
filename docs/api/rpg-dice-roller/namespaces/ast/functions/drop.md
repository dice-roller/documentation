[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / drop

# Function: drop()

## Call Signature

> **drop**(`end`, `qty?`): [`DropNode`](../interfaces/DropNode.md)

Defined in: [src/ast/builders.ts:363](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L363)

Drop `qty` highest (`h`) or lowest (`l`) items; quantity defaults to 1.

### Parameters

#### end

[`PoolEnd`](../type-aliases/PoolEnd.md)

#### qty?

`number`

### Returns

[`DropNode`](../interfaces/DropNode.md)

## Call Signature

> **drop**(`end`, `qty`): [`ComputedDropNode`](../interfaces/ComputedDropNode.md)

Defined in: [src/ast/builders.ts:364](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L364)

Drop `qty` highest (`h`) or lowest (`l`) items; quantity defaults to 1.

### Parameters

#### end

[`PoolEnd`](../type-aliases/PoolEnd.md)

#### qty

[`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

### Returns

[`ComputedDropNode`](../interfaces/ComputedDropNode.md)
