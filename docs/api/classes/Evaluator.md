[@dice-roller/rpg-dice-roller](../index.md) / Evaluator

# Class: Evaluator

Defined in: [src/evaluator/Evaluator.ts:90](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L90)

Walks the AST and builds the result tree.

Evaluation uses the supplied context's roll mode, generator and limits. The same AST can be
evaluated in `random` mode for a roll and in `min` / `max` mode for its corresponding totals.

## Constructors

### Constructor

> **new Evaluator**(`registries`): `Evaluator`

Defined in: [src/evaluator/Evaluator.ts:92](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L92)

Creates an evaluator using the given die and modifier registries.

#### Parameters

##### registries

[`EvaluatorRegistries`](../interfaces/EvaluatorRegistries.md)

#### Returns

`Evaluator`

## Properties

### registries

> `readonly` **registries**: [`EvaluatorRegistries`](../interfaces/EvaluatorRegistries.md)

Defined in: [src/evaluator/Evaluator.ts:92](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L92)

## Methods

### applyModifiers()

> `protected` **applyModifiers**\<`T`\>(`items`, `modifiers`, `target`, `input`): `T`[]

Defined in: [src/evaluator/Evaluator.ts:436](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L436)

Applies the modifiers in execution order (`ModifierRegistry.inExecutionOrder()`).

#### Type Parameters

##### T

`T` *extends* [`ScoredItem`](../rpg-dice-roller/namespaces/results/interfaces/ScoredItem.md)

#### Parameters

##### items

readonly `T`[]

##### modifiers

readonly [`ModifierNode`](../rpg-dice-roller/namespaces/ast/type-aliases/ModifierNode.md)[]

##### target

[`ModifierTarget`](../rpg-dice-roller/namespaces/modifiers/type-aliases/ModifierTarget.md)

##### input

`Omit`\<[`ModifierInput`](../rpg-dice-roller/namespaces/modifiers/interfaces/ModifierInput.md), `"modifier"`\>

#### Returns

`T`[]

#### Throws

a handler doesn't apply to the target (e.g. `explode` on a group)

***

### applyToFlattenedDice()

> `protected` **applyToFlattenedDice**(`result`, `apply`): [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/evaluator/Evaluator.ts:265](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L265)

Applies `apply` to the flattened dice of every pool in the result, then writes the dice back
into their own pools, in the order `apply` returned them, and recalculates the result.

Each die is tagged with its pool, so the handler may copy, reorder or remove dice.

#### Parameters

##### result

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

##### apply

(`dice`) => [`TaggedDieResult`](../type-aliases/TaggedDieResult.md)[]

#### Returns

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

#### Throws

the handler returned a die that didn't come from a pool

***

### createDie()

> `protected` **createDie**(`node`, `args`): [`ResolvedDie`](../rpg-dice-roller/namespaces/dice/interfaces/ResolvedDie.md)

Defined in: [src/evaluator/Evaluator.ts:180](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L180)

Creates and resolves the die of a pool node, with already evaluated arguments.

#### Parameters

##### node

[`PoolNode`](../rpg-dice-roller/namespaces/ast/interfaces/PoolNode.md)

##### args

readonly `number`[]

#### Returns

[`ResolvedDie`](../rpg-dice-roller/namespaces/dice/interfaces/ResolvedDie.md)

***

### evaluate()

> **evaluate**(`node`, `ctx`): [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/evaluator/Evaluator.ts:99](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L99)

Evaluates an expression tree into a result tree, rolling dice according to the context.

#### Parameters

##### node

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

#### Throws

if a node, quantity, operation or modifier result is invalid

***

### evaluateBinary()

> `protected` **evaluateBinary**(`node`, `ctx`): [`BinaryResult`](../rpg-dice-roller/namespaces/results/interfaces/BinaryResult.md)

Defined in: [src/evaluator/Evaluator.ts:376](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L376)

Uses `operators` from `math.ts`.

#### Parameters

##### node

[`BinaryNode`](../rpg-dice-roller/namespaces/ast/interfaces/BinaryNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`BinaryResult`](../rpg-dice-roller/namespaces/results/interfaces/BinaryResult.md)

***

### evaluateFunction()

> `protected` **evaluateFunction**(`node`, `ctx`): [`FunctionResult`](../rpg-dice-roller/namespaces/results/interfaces/FunctionResult.md)

Defined in: [src/evaluator/Evaluator.ts:407](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L407)

Uses `functions` from `math.ts`.

#### Parameters

##### node

[`FunctionNode`](../rpg-dice-roller/namespaces/ast/interfaces/FunctionNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`FunctionResult`](../rpg-dice-roller/namespaces/results/interfaces/FunctionResult.md)

***

### evaluateGroup()

> `protected` **evaluateGroup**(`node`, `ctx`): [`GroupResult`](../rpg-dice-roller/namespaces/results/interfaces/GroupResult.md)

Defined in: [src/evaluator/Evaluator.ts:194](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L194)

Evaluates each expression, then applies the modifiers in execution order.

Each handler gets the members, unless its `groupHandling` says otherwise:

- `flatten`: as in v5, a group with a single expression (`{4d6+2d8}k2`) gives the handler the
  dice of every pool inside it. The die results are flattened, then the result tree is walked
  again to write them back into their pools and recalculate everything above them.
- `each-pool`: the handler gets each nested group's members and each pool's dice.

#### Parameters

##### node

[`GroupNode`](../rpg-dice-roller/namespaces/ast/interfaces/GroupNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`GroupResult`](../rpg-dice-roller/namespaces/results/interfaces/GroupResult.md)

***

### evaluateNumber()

> `protected` **evaluateNumber**(`node`, `_ctx`): [`NumberResult`](../rpg-dice-roller/namespaces/results/interfaces/NumberResult.md)

Defined in: [src/evaluator/Evaluator.ts:123](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L123)

#### Parameters

##### node

[`NumberNode`](../rpg-dice-roller/namespaces/ast/interfaces/NumberNode.md)

##### \_ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`NumberResult`](../rpg-dice-roller/namespaces/results/interfaces/NumberResult.md)

***

### evaluateParen()

> `protected` **evaluateParen**(`node`, `ctx`): [`ParenResult`](../rpg-dice-roller/namespaces/results/interfaces/ParenResult.md)

Defined in: [src/evaluator/Evaluator.ts:400](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L400)

#### Parameters

##### node

[`ParenNode`](../rpg-dice-roller/namespaces/ast/interfaces/ParenNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`ParenResult`](../rpg-dice-roller/namespaces/results/interfaces/ParenResult.md)

***

### evaluatePool()

> `protected` **evaluatePool**(`node`, `ctx`): [`PoolResult`](../rpg-dice-roller/namespaces/results/interfaces/PoolResult.md)

Defined in: [src/evaluator/Evaluator.ts:138](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L138)

Evaluates `qty` and the die's `args`, validates qty against `ctx.limits.maxQty`, creates the
die with `registries.dice.create(node.die.name, ...args)`, resolves it with `resolveDie()`,
rolls it `qty` times with `rollDie()`, then applies the modifiers.

#### Parameters

##### node

[`PoolNode`](../rpg-dice-roller/namespaces/ast/interfaces/PoolNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`PoolResult`](../rpg-dice-roller/namespaces/results/interfaces/PoolResult.md)

***

### evaluateUnary()

> `protected` **evaluateUnary**(`node`, `ctx`): [`UnaryResult`](../rpg-dice-roller/namespaces/results/interfaces/UnaryResult.md)

Defined in: [src/evaluator/Evaluator.ts:394](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L394)

Uses `negate` from `math.ts`.

#### Parameters

##### node

[`UnaryNode`](../rpg-dice-roller/namespaces/ast/interfaces/UnaryNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`UnaryResult`](../rpg-dice-roller/namespaces/results/interfaces/UnaryResult.md)

***

### handlerFor()

> `protected` **handlerFor**(`modifier`, `target`): [`ModifierHandler`](../rpg-dice-roller/namespaces/modifiers/interfaces/ModifierHandler.md)

Defined in: [src/evaluator/Evaluator.ts:482](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L482)

The handler of the modifier.

#### Parameters

##### modifier

[`ModifierNode`](../rpg-dice-roller/namespaces/ast/type-aliases/ModifierNode.md)

##### target

[`ModifierTarget`](../rpg-dice-roller/namespaces/modifiers/type-aliases/ModifierTarget.md)

#### Returns

[`ModifierHandler`](../rpg-dice-roller/namespaces/modifiers/interfaces/ModifierHandler.md)

#### Throws

no handler is registered, or it doesn't apply to the target

***

### rebuildPools()

> `protected` **rebuildPools**(`result`, `replace`, `transformMembers?`): [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/evaluator/Evaluator.ts:311](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L311)

Walks the result tree, replacing each pool with `replace(pool, index)` and recalculating the
values above it. Pools are visited in notation order.

Pools in a pool's quantity or die arguments aren't visited (they've already been used), nor
are pools in nested groups unless `transformMembers` is supplied.

#### Parameters

##### result

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

##### replace

(`pool`, `index`) => [`PoolResult`](../rpg-dice-roller/namespaces/results/interfaces/PoolResult.md)

##### transformMembers?

(`members`) => [`GroupMemberResult`](../rpg-dice-roller/namespaces/results/interfaces/GroupMemberResult.md)[]

#### Returns

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

***

### runHandler()

> `protected` **runHandler**\<`T`\>(`handler`, `items`, `input`): `T`[]

Defined in: [src/evaluator/Evaluator.ts:502](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L502)

#### Type Parameters

##### T

`T` *extends* [`ScoredItem`](../rpg-dice-roller/namespaces/results/interfaces/ScoredItem.md)

#### Parameters

##### handler

[`ModifierHandler`](../rpg-dice-roller/namespaces/modifiers/interfaces/ModifierHandler.md)

##### items

readonly `T`[]

##### input

[`ModifierInput`](../rpg-dice-roller/namespaces/modifiers/interfaces/ModifierInput.md)

#### Returns

`T`[]

#### Throws

the handler doesn't return an array
