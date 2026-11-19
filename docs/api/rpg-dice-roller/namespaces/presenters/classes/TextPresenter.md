[@dice-roller/rpg-dice-roller](../../../../index.md) / [presenters](../index.md) / TextPresenter

# Class: TextPresenter

Defined in: [src/presenters/TextPresenter.ts:96](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L96)

Plain text output, matching v5: e.g. `4d6: [3, 5, 2, 6] = 16`, with flag symbols after each die
value and history rolls joined with `"; "`. It prints the supplied roll's total as-is: newly
evaluated rolls round their total to 2 decimal places, but restored totals need not be rounded.

Maths is written without spaces (`[4, 2]+3`), function arguments are joined with `,`
(`max([5],[2])`), and group members are joined with `, ` (`{[4, 5], [3]-1}`). A member with flags
(e.g. dropped, or a target success) is wrapped in parentheses: `([6, 3])d`.
An expression result is presented without notation or a total; an empty history produces `""`.
Conditionals show the evaluated condition and selected result, e.g.
`(condition: [2, 5*] = 1, true: [3, 10, 2, 3]+$$condition)`. Caller-data references use `$` and
system references use `$$`; their numeric value is shown once beside the conditional's check.

## Extends

- [`TreePresenter`](TreePresenter.md)\<`string`\>

## Constructors

### Constructor

> **new TextPresenter**(`options?`): `TextPresenter`

Defined in: [src/presenters/TextPresenter.ts:101](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L101)

#### Parameters

##### options?

[`TextPresenterOptions`](../interfaces/TextPresenterOptions.md) = `{}`

#### Returns

`TextPresenter`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`constructor`](TreePresenter.md#constructor)

## Properties

### expandInlineRolls

> `readonly` **expandInlineRolls**: `boolean`

Defined in: [src/presenters/TextPresenter.ts:99](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L99)

***

### flagSymbols

> `readonly` **flagSymbols**: `Readonly`\<`Record`\<[`ResultFlag`](../../results/type-aliases/ResultFlag.md), `string`\>\>

Defined in: [src/presenters/TextPresenter.ts:97](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L97)

***

### separator

> `readonly` **separator**: `string`

Defined in: [src/presenters/TextPresenter.ts:98](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L98)

## Methods

### binary()

> `protected` **binary**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:194](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L194)

`[4, 2]+3`

#### Parameters

##### result

[`BinaryResult`](../../results/interfaces/BinaryResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`binary`](TreePresenter.md#binary)

***

### comparison()

> `protected` **comparison**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:209](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L209)

`[4, 2]>3`

#### Parameters

##### result

[`ComparisonResult`](../../../../interfaces/ComparisonResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`comparison`](TreePresenter.md#comparison)

***

### conditional()

> `protected` **conditional**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:238](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L238)

#### Parameters

##### result

[`ConditionalResult`](../../results/interfaces/ConditionalResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`conditional`](TreePresenter.md#conditional)

***

### die()

> `protected` **die**(`result`, `_pool`): `string`

Defined in: [src/presenters/TextPresenter.ts:175](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L175)

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

Defined in: [src/presenters/TextPresenter.ts:112](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L112)

The symbols for the flags, e.g. `["explode", "drop"]` -> `!d`.

#### Parameters

##### flags

readonly (`"max"` \| `"min"` \| `"explode-matching-batch"` \| `"explode"` \| `"drop"` \| `"re-roll"` \| `"unique"` \| `"critical-success"` \| `"critical-failure"` \| `"compound"` \| `"penetrate"` \| `"explode-matching-batch-failure"` \| `"re-roll-once"` \| `"target-success"` \| `"target-failure"` \| `"unique-once"`)[]

##### calculationValue

`number`

#### Returns

`string`

***

### fn()

> `protected` **fn**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:234](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L234)

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

Defined in: [src/presenters/TextPresenter.ts:127](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L127)

Formats a number with `String(value)`, including non-finite values.

#### Parameters

##### value

`number`

#### Returns

`string`

***

### group()

> `protected` **group**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:180](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L180)

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

Defined in: [src/presenters/TextPresenter.ts:132](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L132)

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

Defined in: [src/presenters/TextPresenter.ts:185](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L185)

A group member: `[3, 5]+2`, or `([3, 5]+2)*` with flags.

#### Parameters

##### member

[`GroupMemberResult`](../../results/interfaces/GroupMemberResult.md)

#### Returns

`string`

***

### number()

> `protected` **number**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:141](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L141)

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

Defined in: [src/presenters/TextPresenter.ts:222](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L222)

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

Defined in: [src/presenters/TextPresenter.ts:229](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L229)

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

Defined in: [src/presenters/TextPresenter.ts:146](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L146)

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

Defined in: [src/presenters/TreePresenter.ts:38](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L38)

Dispatches a history, roll, or expression result to the corresponding hook.

#### Parameters

##### target

[`Presentable`](../../../../type-aliases/Presentable.md)

#### Returns

`string`

#### Inherited from

[`TreePresenter`](TreePresenter.md).[`present`](TreePresenter.md#present)

***

### reference()

> `protected` **reference**(`result`): `string`

Defined in: [src/presenters/TextPresenter.ts:242](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L242)

Presents a resolved reference as its numeric value unless a presenter overrides it.

#### Parameters

##### result

[`ReferenceResult`](../../results/interfaces/ReferenceResult.md)

#### Returns

`string`

#### Overrides

[`TreePresenter`](TreePresenter.md).[`reference`](TreePresenter.md#reference)

***

### roll()

> `protected` **roll**(`roll`): `string`

Defined in: [src/presenters/TextPresenter.ts:137](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L137)

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

Defined in: [src/presenters/TextPresenter.ts:218](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TextPresenter.ts#L218)

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

Defined in: [src/presenters/TreePresenter.ts:51](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/presenters/TreePresenter.ts#L51)

Presents a result node with the hook for its type.

#### Parameters

##### result

[`ExpressionResult`](../../../../type-aliases/ExpressionResult.md)

#### Returns

`string`

#### Inherited from

[`TreePresenter`](TreePresenter.md).[`visit`](TreePresenter.md#visit)
