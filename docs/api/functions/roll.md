[@dice-roller/rpg-dice-roller](../index.md) / roll

# Function: roll()

> **roll**\<`T`\>(`input`, `options?`): [`Roll`](../classes/Roll.md)\<`T`\>

Defined in: [src/index.ts:22](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/index.ts#L22)

Shorthand for `new Roll(input, options)`: rolls notation (or an AST) once, without a history.

## Type Parameters

### T

`T` = `string`

## Parameters

### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

### options?

[`RollOptions`](../interfaces/RollOptions.md)\<`T`\> \| [`RollSettings`](../classes/RollSettings.md)\<`T`\>

## Returns

[`Roll`](../classes/Roll.md)\<`T`\>
