[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / binary

# Function: binary()

> **binary**(`op`, `left`, `right`): [`BinaryNode`](../interfaces/BinaryNode.md)

Defined in: [src/ast/builders.ts:150](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L150)

A binary operation, e.g. `binary("+", pool(2, 6), 3)` for `2d6+3`.

## Parameters

### op

`"+"` \| `"-"` \| `"*"` \| `"/"` \| `"%"` \| `"^"`

### left

[`ExpressionInput`](../type-aliases/ExpressionInput.md)

### right

[`ExpressionInput`](../type-aliases/ExpressionInput.md)

## Returns

[`BinaryNode`](../interfaces/BinaryNode.md)
