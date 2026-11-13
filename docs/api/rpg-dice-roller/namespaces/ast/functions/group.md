[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / group

# Function: group()

> **group**(`expressions`, `options?`): [`GroupNode`](../interfaces/GroupNode.md)

Defined in: [src/ast/builders.ts:136](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L136)

A roll group, e.g. `group([pool(4, 6), pool(2, 8)])` for `{4d6, 2d8}`.

## Parameters

### expressions

readonly [`ExpressionInput`](../type-aliases/ExpressionInput.md)[]

### options?

[`ModifiableOptions`](../interfaces/ModifiableOptions.md) = `{}`

## Returns

[`GroupNode`](../interfaces/GroupNode.md)
