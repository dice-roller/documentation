[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / pool

# Function: pool()

> **pool**(`qty`, `die`, `options?`): [`PoolNode`](../interfaces/PoolNode.md)

Defined in: [src/ast/builders.ts:116](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/builders.ts#L116)

A pool of dice, e.g. `pool(4, 6)` for `4d6`, or `pool(2, die("fib"))`.

## Parameters

### qty

[`ExpressionInput`](../type-aliases/ExpressionInput.md)

### die

[`DieInput`](../type-aliases/DieInput.md)

### options?

[`ModifiableOptions`](../interfaces/ModifiableOptions.md) = `{}`

## Returns

[`PoolNode`](../interfaces/PoolNode.md)
