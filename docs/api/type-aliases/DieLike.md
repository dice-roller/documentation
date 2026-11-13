[@dice-roller/rpg-dice-roller](../index.md) / DieLike

# Type Alias: DieLike

> **DieLike** = [`DieDefinition`](../rpg-dice-roller/namespaces/dice/type-aliases/DieDefinition.md) & `Partial`\<[`DieBehaviour`](../rpg-dice-roller/namespaces/dice/interfaces/DieBehaviour.md)\>

Defined in: [src/dice/types.ts:69](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/types.ts#L69)

A range or faces definition with optional behaviour overrides.

Without a custom `roll`, range bounds must be safe integers and are sampled inclusively;
face dice sample an array index uniformly. With a custom `roll`, range bounds may be fractional.
Resolved numeric values must be finite and `min` must not exceed `max`.
