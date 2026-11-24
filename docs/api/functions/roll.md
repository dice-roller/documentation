[@dice-roller/rpg-dice-roller](../index.md) / roll

# Function: roll()

## Call Signature

> **roll**\<`T`\>(`input`, `options?`): [`Roll`](../classes/Roll.md)\<`T`, `"sync"`\>

Defined in: [src/index.ts:24](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/index.ts#L24)

Shorthand for `new Roll(input, options)`: rolls notation (or an AST) once, without a history.

### Type Parameters

#### T

`T` = `string`

### Parameters

#### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

#### options?

[`SyncRollOptions`](../type-aliases/SyncRollOptions.md)\<`T`\> \| [`RollSettings`](../classes/RollSettings.md)\<`T`, `"sync"`\>

### Returns

[`Roll`](../classes/Roll.md)\<`T`, `"sync"`\>

## Call Signature

> **roll**\<`T`\>(`input`, `options`): `Promise`\<[`Roll`](../classes/Roll.md)\<`T`, `"async"`\>\>

Defined in: [src/index.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/index.ts#L28)

Shorthand for `new Roll(input, options)`: rolls notation (or an AST) once, without a history.

### Type Parameters

#### T

`T` = `string`

### Parameters

#### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

#### options

[`AsyncRollOptions`](../type-aliases/AsyncRollOptions.md)\<`T`\> \| [`RollSettings`](../classes/RollSettings.md)\<`T`, `"async"`\>

### Returns

`Promise`\<[`Roll`](../classes/Roll.md)\<`T`, `"async"`\>\>

## Call Signature

> **roll**\<`T`\>(`input`, `options`): [`Roll`](../classes/Roll.md)\<`T`, `"sync"`\> \| `Promise`\<[`Roll`](../classes/Roll.md)\<`T`, `"async"`\>\>

Defined in: [src/index.ts:32](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/index.ts#L32)

Shorthand for `new Roll(input, options)`: rolls notation (or an AST) once, without a history.

### Type Parameters

#### T

`T` = `string`

### Parameters

#### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

#### options

[`RollOptions`](../interfaces/RollOptions.md)\<`T`, [`DrawMode`](../type-aliases/DrawMode.md)\> \| [`RollSettings`](../classes/RollSettings.md)\<`T`, [`DrawMode`](../type-aliases/DrawMode.md)\>

### Returns

[`Roll`](../classes/Roll.md)\<`T`, `"sync"`\> \| `Promise`\<[`Roll`](../classes/Roll.md)\<`T`, `"async"`\>\>

## Call Signature

> **roll**\<`T`\>(`input`): [`Roll`](../classes/Roll.md)\<`T`, `"sync"`\>

Defined in: [src/index.ts:36](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/index.ts#L36)

Shorthand for `new Roll(input, options)`: rolls notation (or an AST) once, without a history.

### Type Parameters

#### T

`T` = `string`

### Parameters

#### input

`string` \| [`ExpressionNode`](../type-aliases/ExpressionNode.md)

### Returns

[`Roll`](../classes/Roll.md)\<`T`, `"sync"`\>
