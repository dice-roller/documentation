[@dice-roller/rpg-dice-roller](../index.md) / RollContext

# Interface: RollContext

Defined in: [src/evaluator/RollContext.ts:54](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L54)

Everything that changes per roll but isn't part of the notation.

## Properties

### condition?

> `readonly` `optional` **condition?**: `number`

Defined in: [src/evaluator/RollContext.ts:59](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L59)

The current branch's check, absent outside a conditional.

***

### generator

> `readonly` **generator**: [`NumberGenerator`](NumberGenerator.md)

Defined in: [src/evaluator/RollContext.ts:55](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L55)

***

### limits

> `readonly` **limits**: [`RollLimits`](RollLimits.md)

Defined in: [src/evaluator/RollContext.ts:57](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L57)

***

### mode

> `readonly` **mode**: [`RollMode`](../type-aliases/RollMode.md)

Defined in: [src/evaluator/RollContext.ts:56](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L56)
