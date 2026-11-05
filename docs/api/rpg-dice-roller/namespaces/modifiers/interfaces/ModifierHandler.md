[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / ModifierHandler

# Interface: ModifierHandler\<N\>

Defined in: [src/modifiers/types.ts:29](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/types.ts#L29)

The behaviour of a modifier.

Handlers are registered by `name` in the `ModifierRegistry`, and run in ascending `order`
regardless of notation order; equal orders retain notation order. Implementations should not
mutate their input: return a new array, copying changed items with the result helpers. Unchanged
items may be reused.

## Type Parameters

### N

`N` *extends* [`ModifierNode`](../../ast/type-aliases/ModifierNode.md) = [`ModifierNode`](../../ast/type-aliases/ModifierNode.md)

## Properties

### appliesTo

> `readonly` **appliesTo**: readonly [`ModifierTarget`](../type-aliases/ModifierTarget.md)[]

Defined in: [src/modifiers/types.ts:35](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/types.ts#L35)

Targets on which the evaluator permits this handler.

***

### groupHandling?

> `readonly` `optional` **groupHandling?**: `"flatten"` \| `"each-pool"`

Defined in: [src/modifiers/types.ts:49](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/types.ts#L49)

How the handler treats the dice inside a roll group. By default it only gets the members.

- `flatten`: a group with a single expression gets the dice of every pool in it, flattened,
  instead of its member (keep, drop: `{4d6+2d8}k2` keeps the 2 highest dice)
- `each-pool`: gets the members of each group, then the dice of each pool, separately
  (sort: nested members are sorted by total, and the dice within each pool)

Pools in a pool's quantity or die arguments aren't included. Flattening stops at nested groups;
with multiple expressions it operates on members instead. Flattened dice are written back to
their original pools, so returned dice must retain their pool association (e.g. by copying an
input item with object spread). New, unassociated dice cause an `EvaluationError`.

***

### name

> `readonly` **name**: `N`\[`"name"`\]

Defined in: [src/modifiers/types.ts:31](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/types.ts#L31)

The existing AST modifier name this handler implements.

***

### order

> `readonly` **order**: `number`

Defined in: [src/modifiers/types.ts:33](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/types.ts#L33)

Execution order; lower runs first.

## Methods

### apply()

> **apply**\<`T`\>(`items`, `input`): `T`[]

Defined in: [src/modifiers/types.ts:58](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/types.ts#L58)

Applies the modifier.

`items` are die results for a pool, or group members for a group (or die results, as set by
`groupHandling`). Group calls, including calls for their pool dice, do not supply `die` or
`rollDie`. The evaluator requires an array result.

#### Type Parameters

##### T

`T` *extends* [`ScoredItem`](../../results/interfaces/ScoredItem.md)

#### Parameters

##### items

readonly `T`[]

##### input

[`ModifierInput`](ModifierInput.md)\<`N`\>

#### Returns

`T`[]
