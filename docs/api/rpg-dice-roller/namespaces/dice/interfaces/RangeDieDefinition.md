[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / RangeDieDefinition

# Interface: RangeDieDefinition

Defined in: [src/dice/types.ts:26](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L26)

A die defined by its inclusive bounds, e.g. d6 or d%.

## Extends

- `DieLabels`

## Properties

### max

> `readonly` **max**: [`NumberOrGetter`](../type-aliases/NumberOrGetter.md)

Defined in: [src/dice/types.ts:28](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L28)

***

### min

> `readonly` **min**: [`NumberOrGetter`](../type-aliases/NumberOrGetter.md)

Defined in: [src/dice/types.ts:27](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L27)

***

### notation?

> `readonly` `optional` **notation?**: `string`

Defined in: [src/dice/types.ts:22](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L22)

The display label used after the `d` by presenters, e.g. `6`, `%`, `F` or `F.1`.

#### Inherited from

`DieLabels.notation`
