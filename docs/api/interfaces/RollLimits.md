[@dice-roller/rpg-dice-roller](../index.md) / RollLimits

# Interface: RollLimits

Defined in: [src/evaluator/RollContext.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/evaluator/RollContext.ts#L13)

Safety limits for a single roll.

## Properties

### maxIterations

> `readonly` **maxIterations**: `number`

Defined in: [src/evaluator/RollContext.ts:17](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/evaluator/RollContext.ts#L17)

The maximum number of iterations for repeating modifiers (explode, re-roll, unique).

***

### maxQty

> `readonly` **maxQty**: `number`

Defined in: [src/evaluator/RollContext.ts:15](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/evaluator/RollContext.ts#L15)

The maximum number of dice in a pool.
