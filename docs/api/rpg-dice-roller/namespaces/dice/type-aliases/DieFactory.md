[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / DieFactory

# Type Alias: DieFactory

> **DieFactory** = (...`args`) => [`DieLike`](../../../../type-aliases/DieLike.md)

Defined in: [src/dice/types.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/dice/types.ts#L77)

Creates a die from the evaluated arguments of a `DieNode`, e.g. `standard(6)` for `d6`.

Registered by name in the `DieRegistry`. A class can be registered by wrapping it:
`(sides) => new MyDie(sides)`.

## Parameters

### args

...`number`[]

## Returns

[`DieLike`](../../../../type-aliases/DieLike.md)
