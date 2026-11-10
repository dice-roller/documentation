[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / sortHandler

# Variable: sortHandler

> `const` **sortHandler**: [`ModifierHandler`](../interfaces/ModifierHandler.md)\<[`SortNode`](../../ast/interfaces/SortNode.md)\>

Defined in: [src/modifiers/handlers/sort.ts:11](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/modifiers/handlers/sort.ts#L11)

`s`, `sa`, `sd`: sorts the items by value, ascending or descending. `s` defaults to ascending.

The sort is stable, so items with the same value keep their order. On a group, the members are
sorted by their totals, and the dice within each pool are sorted too.
