[@dice-roller/rpg-dice-roller](../index.md) / ConciseDieResult

# Type Alias: ConciseDieResult

> **ConciseDieResult** = `number` \| `Pick`\<[`DieResult`](../rpg-dice-roller/namespaces/results/interfaces/DieResult.md), `"value"`\> & `Partial`\<`Omit`\<[`DieResult`](../rpg-dice-roller/namespaces/results/interfaces/DieResult.md), `"type"` \| `"value"`\>\>

Defined in: [src/serialization/formats.ts:46](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/serialization/formats.ts#L46)

A finished die result. A number sets all three values and includes the die in the total.
