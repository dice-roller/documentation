[@dice-roller/rpg-dice-roller](../index.md) / RollLimits

# Interface: RollLimits

Defined in: [src/evaluator/RollContext.ts:13](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L13)

Safety limits for a single roll.

## Properties

### maxGeneratedRolls

> `readonly` **maxGeneratedRolls**: `number`

Defined in: [src/evaluator/RollContext.ts:19](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L19)

Additional rolls allowed per pool/evaluation across modifiers, including discarded rolls (default 1,000,000); initial dice are excluded and exhaustion truncates repeating results.

***

### maxIterations

> `readonly` **maxIterations**: `number`

Defined in: [src/evaluator/RollContext.ts:17](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L17)

The maximum number of generations for explode and re-roll, or retries for unique, per die.

***

### maxQty

> `readonly` **maxQty**: `number`

Defined in: [src/evaluator/RollContext.ts:15](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L15)

The maximum number of dice in a pool.
