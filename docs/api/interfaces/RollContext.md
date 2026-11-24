[@dice-roller/rpg-dice-roller](../index.md) / RollContext

# Interface: RollContext

Defined in: [src/evaluator/RollContext.ts:57](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L57)

Everything that changes per roll but isn't part of the notation.

## Properties

### data

> `readonly` **data**: [`RollInputData`](RollInputData.md)

Defined in: [src/evaluator/RollContext.ts:65](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L65)

A validated snapshot of caller-provided values.

***

### drawDie?

> `readonly` `optional` **drawDie?**: [`DrawDieOptions`](../type-aliases/DrawDieOptions.md)

Defined in: [src/evaluator/RollContext.ts:61](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L61)

***

### generator

> `readonly` **generator**: [`NumberGenerator`](NumberGenerator.md)

Defined in: [src/evaluator/RollContext.ts:58](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L58)

***

### limits

> `readonly` **limits**: [`RollLimits`](RollLimits.md)

Defined in: [src/evaluator/RollContext.ts:60](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L60)

***

### mode

> `readonly` **mode**: [`RollMode`](../type-aliases/RollMode.md)

Defined in: [src/evaluator/RollContext.ts:59](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L59)

***

### system

> `readonly` **system**: `Readonly`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/evaluator/RollContext.ts:63](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/RollContext.ts#L63)

Bindings reserved for built-ins and evaluator-defined values.
