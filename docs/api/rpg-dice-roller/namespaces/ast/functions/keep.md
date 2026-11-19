[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / keep

# Function: keep()

## Call Signature

> **keep**(`end`, `qty?`): [`KeepNode`](../interfaces/KeepNode.md)

Defined in: [src/ast/builders.ts:377](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L377)

Keep `qty` highest (`h`) or lowest (`l`) items; quantity defaults to 1.

### Parameters

#### end

[`PoolEnd`](../type-aliases/PoolEnd.md)

#### qty?

`number`

### Returns

[`KeepNode`](../interfaces/KeepNode.md)

## Call Signature

> **keep**(`end`, `qty`): [`ComputedKeepNode`](../interfaces/ComputedKeepNode.md)

Defined in: [src/ast/builders.ts:378](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L378)

Keep `qty` highest (`h`) or lowest (`l`) items; quantity defaults to 1.

### Parameters

#### end

[`PoolEnd`](../type-aliases/PoolEnd.md)

#### qty

[`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)

### Returns

[`ComputedKeepNode`](../interfaces/ComputedKeepNode.md)
