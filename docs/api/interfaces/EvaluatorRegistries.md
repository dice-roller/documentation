[@dice-roller/rpg-dice-roller](../index.md) / EvaluatorRegistries

# Interface: EvaluatorRegistries

Defined in: [src/evaluator/Evaluator.ts:78](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L78)

Registries used to resolve dice and modifier handlers during evaluation.

## Properties

### dice

> `readonly` **dice**: [`DieRegistry`](../rpg-dice-roller/namespaces/dice/classes/DieRegistry.md)

Defined in: [src/evaluator/Evaluator.ts:80](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L80)

Factories for dice referenced by pool nodes.

***

### modifiers

> `readonly` **modifiers**: [`ModifierRegistry`](../rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md)

Defined in: [src/evaluator/Evaluator.ts:82](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L82)

Handlers for modifiers referenced by pool and group nodes.
