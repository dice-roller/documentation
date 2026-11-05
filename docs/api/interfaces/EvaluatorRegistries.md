[@dice-roller/rpg-dice-roller](../index.md) / EvaluatorRegistries

# Interface: EvaluatorRegistries

Defined in: [src/evaluator/Evaluator.ts:74](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/evaluator/Evaluator.ts#L74)

Registries used to resolve dice and modifier handlers during evaluation.

## Properties

### dice

> `readonly` **dice**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/evaluator/Evaluator.ts:76](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/evaluator/Evaluator.ts#L76)

Factories for dice referenced by pool nodes.

***

### modifiers

> `readonly` **modifiers**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/evaluator/Evaluator.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/evaluator/Evaluator.ts#L78)

Handlers for modifiers referenced by pool and group nodes.
