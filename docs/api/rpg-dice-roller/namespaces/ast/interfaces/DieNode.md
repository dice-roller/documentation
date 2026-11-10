[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / DieNode

# Interface: DieNode

Defined in: [src/ast/nodes.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L69)

The die of a pool: a reference to a die factory in the `DieRegistry`, and its arguments.

The evaluator evaluates the argument expressions, then calls `registry.create(name, ...args)`.
Registering a replacement for `standard` changes what `d6` rolls in that registry. Computed
sides (`d(2+3)`) are expressions too. Custom factory names can be constructed with `die()`;
their displayed notation is not necessarily parseable.

- `d6`: `{ name: "standard", args: [6] }`
- `d(2+3)`: `{ name: "standard", args: [(2+3)] }`
- `d%`: `{ name: "percentile", args: [] }`
- `dF` / `dF.1` / `dF.2`: `{ name: "fudge", args: [] }` / `[1]` / `[2]`
- `d{0...2}`: `{ name: "range", args: [0, 2] }`
- `d{1,1,2}`: `{ name: "face", args: [1, 1, 2] }`

## Properties

### args

> `readonly` **args**: readonly [`ExpressionNode`](../../../../type-aliases/ExpressionNode.md)[]

Defined in: [src/ast/nodes.ts:73](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L73)

***

### name

> `readonly` **name**: `string`

Defined in: [src/ast/nodes.ts:72](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L72)

The registered name: a `BuiltInDieName`, or the name of a user-registered die.

***

### type

> `readonly` **type**: `"die"`

Defined in: [src/ast/nodes.ts:70](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/ast/nodes.ts#L70)
