[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / DieNode

# Interface: DieNode

Defined in: [src/ast/nodes.ts:67](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L67)

The die of a pool: a reference to a die factory in the `DieRegistry`, and its arguments.

The evaluator evaluates the argument expressions, then calls `registry.create(name, ...args)`.
Registering a replacement for `standard` changes what `d6` rolls in that registry. Computed
sides (`d(2+3)`) are expressions too. Custom factory names can be constructed with `die()`;
their displayed notation is not necessarily parseable.

- `d6`: `{ name: "standard", args: [6] }`
- `d(2+3)`: `{ name: "standard", args: [(2+3)] }`
- `d%`: `{ name: "percentile", args: [] }`
- `dF` / `dF.1` / `dF.2`: `{ name: "fudge", args: [] }` / `[1]` / `[2]`

## Properties

### args

> `readonly` **args**: readonly [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)[]

Defined in: [src/ast/nodes.ts:71](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L71)

***

### name

> `readonly` **name**: `string`

Defined in: [src/ast/nodes.ts:70](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L70)

The registered name: a `BuiltInDieName`, or the name of a user-registered die.

***

### type

> `readonly` **type**: `"die"`

Defined in: [src/ast/nodes.ts:68](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/ast/nodes.ts#L68)
