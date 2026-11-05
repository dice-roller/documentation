---
sidebarDepth: 0
---

[@dice-roller/rpg-dice-roller](../../../index.md) / results

# results

Result types and helpers for inspecting evaluated expressions.

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BinaryResult](interfaces/BinaryResult.md) | A binary operation and its evaluated operands. |
| [DieResult](interfaces/DieResult.md) | A single die roll in a pool. |
| [FunctionResult](interfaces/FunctionResult.md) | A maths function and its evaluated arguments. |
| [GroupMemberResult](interfaces/GroupMemberResult.md) | One expression of a roll group, with scoring separate from its nested expression result. |
| [GroupResult](interfaces/GroupResult.md) | A group of evaluated members after its modifiers have been applied. |
| [NumberResult](interfaces/NumberResult.md) | The result of a numeric literal. |
| [ParenResult](interfaces/ParenResult.md) | A parenthesised expression and its evaluated inner result. |
| [PoolResult](interfaces/PoolResult.md) | A pool's evaluated quantity, die arguments, die snapshot and modified rolls. |
| [ScoredItem](interfaces/ScoredItem.md) | A die roll or group member that modifier handlers can transform using the result helpers. |
| [UnaryResult](interfaces/UnaryResult.md) | A unary operation and its evaluated operand. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ExpressionResultType](type-aliases/ExpressionResultType.md) | The `type` of every expression result. |
| [RESULT\_FLAGS](type-aliases/RESULT_FLAGS.md) | Semantic flags recording what happened to a die or group member. |
| [ResultFlag](type-aliases/ResultFlag.md) | A semantic marker on a scored die or group member, interpreted by presenters. |

## Functions

| Function | Description |
| ------ | ------ |
| [createDieResult](functions/createDieResult.md) | A fresh included die result with no flags: `value`, `initialValue` and `calculationValue` all equal `value`. |
| [excludeFromTotal](functions/excludeFromTotal.md) | Returns a copy excluded from the total (`useInTotal: false`); does not add a `drop` flag. |
| [withCalculationValue](functions/withCalculationValue.md) | Returns a copy with a new `calculationValue`, keeping `value`. |
| [withFlags](functions/withFlags.md) | Returns a copy with flags deduplicated in first-occurrence order; does not change scoring. |
| [withValue](functions/withValue.md) | Returns a copy with a new `value` and `calculationValue`; preserves a die's `initialValue`. |

## References

### ExpressionResult

Re-exports [ExpressionResult](../../../type-aliases/ExpressionResult.md)
