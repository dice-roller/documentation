[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / FacesDieDefinition

# Interface: FacesDieDefinition

Defined in: [src/dice/types.ts:32](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L32)

A die with a non-empty list of finite faces, e.g. dF (`[-1, 0, 1]`). Repeats act as weights.

## Extends

- `DieLabels`

## Properties

### faces

> `readonly` **faces**: readonly `number`[]

Defined in: [src/dice/types.ts:33](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L33)

***

### notation?

> `readonly` `optional` **notation?**: `string`

Defined in: [src/dice/types.ts:22](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L22)

The display label used after the `d` by presenters, e.g. `6`, `%`, `F` or `F.1`.

#### Inherited from

`DieLabels.notation`
