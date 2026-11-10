[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / TextPresenter

# Class: TextPresenter

Defined in: [src/presenters/TextPresenter.ts:60](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L60)

Plain text output, matching v5: e.g. `4d6: [3, 5, 2, 6] = 16`, with flag symbols after each die
value and history rolls joined with `"; "`. It prints the supplied roll's total as-is: newly
evaluated rolls round their total to 2 decimal places, but restored totals need not be rounded.

Maths is written without spaces (`[4, 2]+3`), function arguments are joined with `,`
(`max([5],[2])`), and group members are joined with `, ` (`{[4, 5], [3]-1}`). A member with flags
(e.g. dropped, or a target success) is wrapped in parentheses: `([6, 3])d`.
An expression result is presented without notation or a total; an empty history produces `""`.

## Extends

- [`TreePresenter`](TreePresenter.md)\<`string`\>

## Constructors

### Constructor

> **new TextPresenter**(`options?`): `TextPresenter`

Defined in: [src/presenters/TextPresenter.ts:64](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L64)

#### Parameters

##### options?

[`TextPresenterOptions`](../interfaces/TextPresenterOptions.md) = `{}`

#### Returns

`TextPresenter`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`constructor`](TreePresenter.md#constructor)

## Properties

### flagSymbols

> `readonly` **flagSymbols**: `Readonly`\<`Record`\<[`ResultFlag`](../../results/type-aliases/ResultFlag.md), `string`\>\>

Defined in: [src/presenters/TextPresenter.ts:61](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L61)

***

### separator

> `readonly` **separator**: `string`

Defined in: [src/presenters/TextPresenter.ts:62](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L62)

## Methods

### binary()

> `protected` **binary**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:132](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L132)

`[4, 2]+3`

#### Parameters

##### result

[`BinaryResult`](../../results/interfaces/BinaryResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`binary`](TreePresenter.md#binary)

***

### die()

> `protected` **die**(`result`, `_pool`): `string`

Defined in: [src/presenters/TextPresenter.ts:113](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L113)

`6!`, `1d`

#### Parameters

##### result

[`DieResult`](../../results/interfaces/DieResult.md)

##### \_pool

[`PoolResult`](../../results/interfaces/PoolResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`die`](TreePresenter.md#die)

***

### flags()

> `protected` **flags**(`flags`, `calculationValue`): `string`

Defined in: [src/presenters/TextPresenter.ts:74](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L74)

The symbols for the flags, e.g. `["explode", "drop"]` -> `!d`.

#### Parameters

##### flags

readonly (`"max"` \| `"min"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

##### calculationValue

`number`

#### Returns

`string`

***

### fn()

> `protected` **fn**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:163](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L163)

`floor([4, 5]/2)`, `max([5],[2])`

#### Parameters

##### result

[`FunctionResult`](../../results/interfaces/FunctionResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`fn`](TreePresenter.md#fn)

***

### formatNumber()

> `protected` **formatNumber**(`value`): `string`

Defined in: [src/presenters/TextPresenter.ts:89](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L89)

Formats a number with `String(value)`, including non-finite values.

#### Parameters

##### value

`number`

#### Returns

`string`

***

### group()

> `protected` **group**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:118](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L118)

`{[3, 5]+2, ([4])d}`

#### Parameters

##### result

[`GroupResult`](../../results/interfaces/GroupResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`group`](TreePresenter.md#group)

***

### history()

> `protected` **history**(`history`): `string`

Defined in: [src/presenters/TextPresenter.ts:94](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L94)

The rolls joined with `separator`; an empty history is an empty string.

#### Parameters

##### history

[`RollHistory`](../../../../classes/RollHistory.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`history`](TreePresenter.md#history)

***

### member()

> `protected` **member**(`member`): `string`

Defined in: [src/presenters/TextPresenter.ts:123](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L123)

A group member: `[3, 5]+2`, or `([3, 5]+2)*` with flags.

#### Parameters

##### member

[`GroupMemberResult`](../../results/interfaces/GroupMemberResult.md)

#### Returns

`string`

***

### number()

> `protected` **number**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:103](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L103)

#### Parameters

##### result

[`NumberResult`](../../results/interfaces/NumberResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`number`](TreePresenter.md#number)

***

### operand()

> `protected` **operand**(`result`, `minPrecedence`): `string`

Defined in: [src/presenters/TextPresenter.ts:151](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L151)

#### Parameters

##### result

[`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

##### minPrecedence

`number`

#### Returns

`string`

***

### paren()

> `protected` **paren**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:158](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L158)

`([4, 2]*2)`

#### Parameters

##### result

[`ParenResult`](../../results/interfaces/ParenResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`paren`](TreePresenter.md#paren)

***

### pool()

> `protected` **pool**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:108](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L108)

`[3, 5, 2, 6]`

#### Parameters

##### result

[`PoolResult`](../../results/interfaces/PoolResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`pool`](TreePresenter.md#pool)

***

### present()

> **present**(`target`): `string`

Defined in: [src/presenters/TreePresenter.ts:30](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L30)

Dispatches a history, roll, or expression result to the corresponding hook.

#### Parameters

##### target

[`Presentable`](../../../../type-aliases/Presentable.md)

#### Returns

`string`

#### Inherited from

[`TreePresenter`](TreePresenter.md).[`present`](TreePresenter.md#present)

***

### roll()

> `protected` **roll**(`roll`): `string`

Defined in: [src/presenters/TextPresenter.ts:99](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L99)

`notation: <result> = total`.

#### Parameters

##### roll

[`Roll`](../../../../classes/Roll.md)\<`unknown`\>

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`roll`](TreePresenter.md#roll)

***

### unary()

> `protected` **unary**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:147](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TextPresenter.ts#L147)

`-5`

#### Parameters

##### result

[`UnaryResult`](../../results/interfaces/UnaryResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`unary`](TreePresenter.md#unary)

***

### visit()

> `protected` **visit**(`result`): `string`

Defined in: [src/presenters/TreePresenter.ts:43](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/presenters/TreePresenter.ts#L43)

Presents a result node with the hook for its type.

#### Parameters

##### result

[`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

#### Returns

`string`

#### Inherited from

[`TreePresenter`](TreePresenter.md).[`visit`](TreePresenter.md#visit)
