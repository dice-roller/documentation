[@dice-roller/rpg-dice-roller](../index.md) / Evaluator

# Class: Evaluator

Defined in: [src/evaluator/Evaluator.ts:114](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L114)

Walks the AST and builds the result tree.

Evaluation uses the supplied context's roll mode, generator and limits. The same AST can be
evaluated in `random` mode for a roll and in `min` / `max` mode for its corresponding totals.

## Constructors

### Constructor

> **new Evaluator**(`registries`): `Evaluator`

Defined in: [src/evaluator/Evaluator.ts:116](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L116)

Creates an evaluator using the given die and modifier registries.

#### Parameters

##### registries

[`EvaluatorRegistries`](../interfaces/EvaluatorRegistries.md)

#### Returns

`Evaluator`

## Properties

### registries

> `readonly` **registries**: [`EvaluatorRegistries`](../interfaces/EvaluatorRegistries.md)

Defined in: [src/evaluator/Evaluator.ts:116](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L116)

## Methods

### applyModifiers()

> `protected` **applyModifiers**\<`T`\>(`items`, `modifiers`, `target`, `input`): `Generator`\<`EvaluationDrawRequest`, `ModifierApplication`\<`T`\>, `number`\>

Defined in: [src/evaluator/Evaluator.ts:701](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L701)

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

`Generator`\<`EvaluationDrawRequest`, `ModifierApplication`\<`T`\>, `number`\>

#### Throws

a handler doesn't apply to the target (e.g. `explode` on a group)

***

### applyToFlattenedDice()

> `protected` **applyToFlattenedDice**(`result`, `handler`, `input`): `Generator`\<`EvaluationDrawRequest`, [`ExpressionResult`](../type-aliases/ExpressionResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:462](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L462)

Applies `apply` to the flattened dice of every pool in the result, then writes the dice back
into their own pools, in the order `apply` returned them, and recalculates the result.

Each die is tagged with its pool, so the handler may copy, reorder or remove dice.

#### Parameters

##### result

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

##### handler

[`ModifierHandler`](../rpg-dice-roller/namespaces/modifiers/interfaces/ModifierHandler.md)

##### input

[`ModifierInput`](../rpg-dice-roller/namespaces/modifiers/interfaces/ModifierInput.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`ExpressionResult`](../type-aliases/ExpressionResult.md), `number`\>

#### Throws

the handler returned a die that didn't come from a pool

***

### createDie()

> `protected` **createDie**(`node`, `args`): [`ResolvedDie`](../rpg-dice-roller/namespaces/dice/interfaces/ResolvedDie.md)

Defined in: [src/evaluator/Evaluator.ts:306](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L306)

Creates and resolves the die of a pool node, with already evaluated arguments.

#### Parameters

##### node

[`PoolNode`](../rpg-dice-roller/namespaces/ast/interfaces/PoolNode.md)

##### args

readonly `number`[]

#### Returns

[`ResolvedDie`](../rpg-dice-roller/namespaces/dice/interfaces/ResolvedDie.md)

***

### drawPoolDie()

> `protected` **drawPoolDie**(`node`, `die`): `Generator`\<`EvaluationDrawRequest`, `number`, `number`\>

Defined in: [src/evaluator/Evaluator.ts:310](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L310)

#### Parameters

##### node

[`PoolNode`](../rpg-dice-roller/namespaces/ast/interfaces/PoolNode.md)

##### die

[`ResolvedDie`](../rpg-dice-roller/namespaces/dice/interfaces/ResolvedDie.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, `number`, `number`\>

***

### evaluate()

> **evaluate**(`node`, `ctx`): [`ExpressionResult`](../type-aliases/ExpressionResult.md)

Defined in: [src/evaluator/Evaluator.ts:123](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L123)

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

### evaluateAsync()

> **evaluateAsync**(`node`, `ctx`): `Promise`\<[`ExpressionResult`](../type-aliases/ExpressionResult.md)\>

Defined in: [src/evaluator/Evaluator.ts:131](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L131)

Evaluates an expression tree while awaiting externally supplied die faces.

#### Parameters

##### node

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Promise`\<[`ExpressionResult`](../type-aliases/ExpressionResult.md)\>

***

### evaluateBinary()

> `protected` **evaluateBinary**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`BinaryResult`](../rpg-dice-roller/namespaces/results/interfaces/BinaryResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:607](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L607)

Uses `operators` from `math.ts`.

#### Parameters

##### node

[`BinaryNode`](../rpg-dice-roller/namespaces/ast/interfaces/BinaryNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`BinaryResult`](../rpg-dice-roller/namespaces/results/interfaces/BinaryResult.md), `number`\>

***

### evaluateComparison()

> `protected` **evaluateComparison**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`ComparisonResult`](../interfaces/ComparisonResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:627](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L627)

#### Parameters

##### node

[`ComparisonNode`](../interfaces/ComparisonNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`ComparisonResult`](../interfaces/ComparisonResult.md), `number`\>

***

### evaluateConditional()

> `protected` **evaluateConditional**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`ConditionalResult`](../rpg-dice-roller/namespaces/results/interfaces/ConditionalResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:183](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L183)

#### Parameters

##### node

[`ConditionalNode`](../rpg-dice-roller/namespaces/ast/interfaces/ConditionalNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`ConditionalResult`](../rpg-dice-roller/namespaces/results/interfaces/ConditionalResult.md), `number`\>

***

### evaluateFunction()

> `protected` **evaluateFunction**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`FunctionResult`](../rpg-dice-roller/namespaces/results/interfaces/FunctionResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:668](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L668)

Uses `functions` from `math.ts`.

#### Parameters

##### node

[`FunctionNode`](../rpg-dice-roller/namespaces/ast/interfaces/FunctionNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`FunctionResult`](../rpg-dice-roller/namespaces/results/interfaces/FunctionResult.md), `number`\>

***

### evaluateGenerator()

> **evaluateGenerator**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`ExpressionResult`](../type-aliases/ExpressionResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:142](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L142)

Creates a resumable evaluation of an expression tree.

#### Parameters

##### node

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`ExpressionResult`](../type-aliases/ExpressionResult.md), `number`\>

***

### evaluateGroup()

> `protected` **evaluateGroup**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`GroupResult`](../rpg-dice-roller/namespaces/results/interfaces/GroupResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:369](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L369)

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

`Generator`\<`EvaluationDrawRequest`, [`GroupResult`](../rpg-dice-roller/namespaces/results/interfaces/GroupResult.md), `number`\>

***

### evaluateNode()

> `protected` **evaluateNode**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`ExpressionResult`](../type-aliases/ExpressionResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:150](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L150)

#### Parameters

##### node

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`ExpressionResult`](../type-aliases/ExpressionResult.md), `number`\>

***

### evaluateNumber()

> `protected` **evaluateNumber**(`node`, `_ctx`): [`NumberResult`](../rpg-dice-roller/namespaces/results/interfaces/NumberResult.md)

Defined in: [src/evaluator/Evaluator.ts:227](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L227)

#### Parameters

##### node

[`NumberNode`](../rpg-dice-roller/namespaces/ast/interfaces/NumberNode.md)

##### \_ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`NumberResult`](../rpg-dice-roller/namespaces/results/interfaces/NumberResult.md)

***

### evaluateParen()

> `protected` **evaluateParen**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`ParenResult`](../rpg-dice-roller/namespaces/results/interfaces/ParenResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:658](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L658)

#### Parameters

##### node

[`ParenNode`](../rpg-dice-roller/namespaces/ast/interfaces/ParenNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`ParenResult`](../rpg-dice-roller/namespaces/results/interfaces/ParenResult.md), `number`\>

***

### evaluatePool()

> `protected` **evaluatePool**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`PoolResult`](../rpg-dice-roller/namespaces/results/interfaces/PoolResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:242](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L242)

Evaluates `qty` and the die's `args`, validates qty against `ctx.limits.maxQty`, creates the
die with `registries.dice.create(node.die.name, ...args)`, resolves it with `resolveDie()`,
rolls it `qty` times with `rollDie()`, then applies the modifiers.

#### Parameters

##### node

[`PoolNode`](../rpg-dice-roller/namespaces/ast/interfaces/PoolNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`PoolResult`](../rpg-dice-roller/namespaces/results/interfaces/PoolResult.md), `number`\>

***

### evaluateReference()

> `protected` **evaluateReference**(`node`, `ctx`): [`ReferenceResult`](../rpg-dice-roller/namespaces/results/interfaces/ReferenceResult.md)

Defined in: [src/evaluator/Evaluator.ts:216](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L216)

#### Parameters

##### node

[`ReferenceNode`](../rpg-dice-roller/namespaces/ast/interfaces/ReferenceNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

[`ReferenceResult`](../rpg-dice-roller/namespaces/results/interfaces/ReferenceResult.md)

***

### evaluateUnary()

> `protected` **evaluateUnary**(`node`, `ctx`): `Generator`\<`EvaluationDrawRequest`, [`UnaryResult`](../rpg-dice-roller/namespaces/results/interfaces/UnaryResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:649](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L649)

Uses `negate` from `math.ts`.

#### Parameters

##### node

[`UnaryNode`](../rpg-dice-roller/namespaces/ast/interfaces/UnaryNode.md)

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`UnaryResult`](../rpg-dice-roller/namespaces/results/interfaces/UnaryResult.md), `number`\>

***

### handlerFor()

> `protected` **handlerFor**(`modifier`, `target`): [`ModifierHandler`](../rpg-dice-roller/namespaces/modifiers/interfaces/ModifierHandler.md)

Defined in: [src/evaluator/Evaluator.ts:803](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L803)

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

> `protected` **rebuildPools**(`result`, `replace`, `transformMembers?`): `Generator`\<`EvaluationDrawRequest`, [`ExpressionResult`](../type-aliases/ExpressionResult.md), `number`\>

Defined in: [src/evaluator/Evaluator.ts:511](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L511)

Walks the result tree, replacing each pool with `replace(pool, index)` and recalculating the
values above it. Pools are visited in notation order.

Pools in a pool's quantity or die arguments aren't visited (they've already been used), nor
are pools in nested groups unless `transformMembers` is supplied.

#### Parameters

##### result

[`ExpressionResult`](../type-aliases/ExpressionResult.md)

##### replace

(`pool`, `index`) => `GeneratorResult`\<[`PoolResult`](../rpg-dice-roller/namespaces/results/interfaces/PoolResult.md)\>

##### transformMembers?

(`members`) => `GeneratorResult`\<[`GroupMemberResult`](../rpg-dice-roller/namespaces/results/interfaces/GroupMemberResult.md)[]\>

#### Returns

`Generator`\<`EvaluationDrawRequest`, [`ExpressionResult`](../type-aliases/ExpressionResult.md), `number`\>

***

### resolveModifier()

> `protected` **resolveModifier**(`modifier`, `modifierIndex`, `ctx`): `Generator`\<`EvaluationDrawRequest`, \{ `argument?`: [`ModifierArgumentResult`](../rpg-dice-roller/namespaces/results/interfaces/ModifierArgumentResult.md); `modifier`: [`ModifierNode`](../rpg-dice-roller/namespaces/ast/type-aliases/ModifierNode.md); \}, `number`\>

Defined in: [src/evaluator/Evaluator.ts:733](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L733)

#### Parameters

##### modifier

[`ModifierNode`](../rpg-dice-roller/namespaces/ast/type-aliases/ModifierNode.md)

##### modifierIndex

`number`

##### ctx

[`RollContext`](../interfaces/RollContext.md)

#### Returns

`Generator`\<`EvaluationDrawRequest`, \{ `argument?`: [`ModifierArgumentResult`](../rpg-dice-roller/namespaces/results/interfaces/ModifierArgumentResult.md); `modifier`: [`ModifierNode`](../rpg-dice-roller/namespaces/ast/type-aliases/ModifierNode.md); \}, `number`\>

***

### runHandler()

> `protected` **runHandler**\<`T`\>(`handler`, `items`, `input`): `Generator`\<`EvaluationDrawRequest`, `T`[], `number`\>

Defined in: [src/evaluator/Evaluator.ts:823](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/evaluator/Evaluator.ts#L823)

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

`Generator`\<`EvaluationDrawRequest`, `T`[], `number`\>

#### Throws

the handler doesn't return an array
