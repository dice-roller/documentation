---
sidebarDepth: 0
---

[@dice-roller/rpg-dice-roller](../../../index.md) / ast

# ast

Expression tree nodes and notation helpers for inspecting or constructing rolls.

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BinaryNode](interfaces/BinaryNode.md) | A binary maths operation, e.g. `2d6 + 3`. |
| [ComparePoint](interfaces/ComparePoint.md) | A comparison against a value, e.g. the `>=8` in `8d10>=8`. |
| [CriticalFailureNode](interfaces/CriticalFailureNode.md) | `cf`. |
| [CriticalSuccessNode](interfaces/CriticalSuccessNode.md) | `cs`. |
| [DescriptionNode](interfaces/DescriptionNode.md) | A roll description. |
| [DieNode](interfaces/DieNode.md) | The die of a pool: a reference to a die factory in the `DieRegistry`, and its arguments. |
| [DropNode](interfaces/DropNode.md) | `d`, `dh`, `dl`. |
| [ExplodeNode](interfaces/ExplodeNode.md) | `!`, `!!` (compound), `!p` (penetrate), `!!p`. |
| [FunctionNode](interfaces/FunctionNode.md) | A maths function call, e.g. `floor(2d6 / 2)`. |
| [GroupNode](interfaces/GroupNode.md) | A roll group, e.g. `{4d6+2d8, 3d20}k1`. |
| [KeepNode](interfaces/KeepNode.md) | `k`, `kh`, `kl`. |
| [MaxNode](interfaces/MaxNode.md) | `max5`. |
| [MinNode](interfaces/MinNode.md) | `min2`. |
| [ModifiableOptions](interfaces/ModifiableOptions.md) | Options shared by pools and groups. |
| [NumberNode](interfaces/NumberNode.md) | A literal number, e.g. `4` or `-2.5`. |
| [ParenNode](interfaces/ParenNode.md) | A parenthesised expression, e.g. `(2+3)`. Kept so the notation round-trips. |
| [PoolNode](interfaces/PoolNode.md) | A pool of dice, e.g. `4d6kh3`. |
| [ReRollNode](interfaces/ReRollNode.md) | `r`, `ro` and numeric re-roll limits. |
| [SortNode](interfaces/SortNode.md) | `s`, `sa`, `sd`. |
| [TargetNode](interfaces/TargetNode.md) | Success / failure counting, e.g. `>=8:2f<=2`. The last matching rule in the block wins. |
| [TargetRule](interfaces/TargetRule.md) | A target comparison; amount is a whole number from 1 to 10 and defaults to 1. |
| [UnaryNode](interfaces/UnaryNode.md) | A unary minus, e.g. `-2`. |
| [UniqueNode](interfaces/UniqueNode.md) | `u`, `uo` and numeric uniqueness limits. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BinaryOperator](type-aliases/BinaryOperator.md) | A supported binary operator. |
| [BuiltInDieName](type-aliases/BuiltInDieName.md) | A built-in die factory name; registries can also contain custom names. |
| [CompareOperator](type-aliases/CompareOperator.md) | An operator accepted by a compare point. |
| [DescriptionStyle](type-aliases/DescriptionStyle.md) | - `inline`: `// text` or `# text` - `block`: `/* text */` or `[text]` |
| [DieInput](type-aliases/DieInput.md) | The die of a pool: a number of sides or an expression (a `standard` die, e.g. `6` or `paren(binary("+", 2, 3))`), or a `DieNode` from `die()`. |
| [ExpressionInput](type-aliases/ExpressionInput.md) | A number or an expression node. |
| [ExpressionNodeType](type-aliases/ExpressionNodeType.md) | The `type` of every expression node. |
| [MathFunctionName](type-aliases/MathFunctionName.md) | A supported maths function name. |
| [ModifierName](type-aliases/ModifierName.md) | The `name` of every modifier node. |
| [ModifierNode](type-aliases/ModifierNode.md) | A modifier selected by `name`; an omitted compare point uses the registered handler's default. |
| [ModifierNodeOf](type-aliases/ModifierNodeOf.md) | The modifier node with the given name. |
| [PoolEnd](type-aliases/PoolEnd.md) | Which end of the sorted rolls to keep / drop: `h`ighest or `l`owest. |
| [SortDirection](type-aliases/SortDirection.md) | `a`scending or `d`escending. |

## Variables

| Variable | Description |
| ------ | ------ |
| [BINARY\_OPERATORS](variables/BINARY_OPERATORS.md) | The binary maths operators. `**` is parsed as `^`. |
| [BUILT\_IN\_DIE\_NAMES](variables/BUILT_IN_DIE_NAMES.md) | The names of the built-in die factories in the `DieRegistry`. |
| [COMPARE\_OPERATORS](variables/COMPARE_OPERATORS.md) | Operators accepted by compare points; `!=` and `<>` both mean not equal. |
| [MATH\_FUNCTION\_NAMES](variables/MATH_FUNCTION_NAMES.md) | The supported maths functions. |

## Functions

| Function | Description |
| ------ | ------ |
| [binary](functions/binary.md) | A binary operation, e.g. `binary("+", pool(2, 6), 3)` for `2d6+3`. |
| [compare](functions/compare.md) | A compare point, e.g. `compare(">=", 8)`. |
| [criticalFailure](functions/criticalFailure.md) | Flag critical failures using the supplied compare point or the handler default. |
| [criticalSuccess](functions/criticalSuccess.md) | Flag critical successes using the supplied compare point or the handler default. |
| [die](functions/die.md) | A reference to a die factory, e.g. `die("percentile")` for `d%`, or `die("range", -2, 3)`. Register custom names in the die registry used by the evaluator before rolling. Registration is not checked here; valid literal `range` and `face` dice use brace notation, while custom names and unsupported arguments have display-only notation. |
| [drop](functions/drop.md) | Drop `qty` highest (`h`) or lowest (`l`) items; quantity defaults to 1. |
| [explode](functions/explode.md) | Explode matching rolls. An optional positive safe-integer `limit` bounds additional rolls per initial die and is capped by the roll context's `maxIterations`. |
| [fn](functions/fn.md) | A maths function call, e.g. `fn("floor", binary("/", pool(2, 6), 2))`. Arity is checked at evaluation. |
| [group](functions/group.md) | A roll group, e.g. `group([pool(4, 6), pool(2, 8)])` for `{4d6, 2d8}`. |
| [keep](functions/keep.md) | Keep `qty` highest (`h`) or lowest (`l`) items; quantity defaults to 1. |
| [max](functions/max.md) | Cap die values at `value` with the built-in handler. |
| [min](functions/min.md) | Raise die values to at least `value` with the built-in handler. |
| [negate](functions/negate.md) | A unary minus. |
| [nodeToNotation](functions/nodeToNotation.md) | Converts an expression to canonical notation, e.g. a pool to `4d6kh3`. |
| [num](functions/num.md) | A literal number. |
| [paren](functions/paren.md) | A parenthesised expression. |
| [pool](functions/pool.md) | A pool of dice, e.g. `pool(4, 6)` for `4d6`, or `pool(2, die("fib"))`. |
| [reRoll](functions/reRoll.md) | Re-roll matching dice. `once` is the `ro` alias; numeric `limit: 1` has the same budget but retains `r1` notation. Limits count additional rolls per die and cannot exceed the context cap. |
| [sort](functions/sort.md) | Sort ascending (`a`, the default) or descending (`d`). |
| [target](functions/target.md) | A target block starts with a success and can contain further success or failure rules. Amounts are 1–10 and default to 1; the last matching rule wins. |
| [unique](functions/unique.md) | Re-roll duplicate dice. `once` is the `uo` alias; numeric `limit: 1` has the same budget but retains `u1` notation. Limits count additional rolls per die and cannot exceed the context cap. |

## References

### ExpressionNode

Re-exports [ExpressionNode](../../../type-aliases/ExpressionNode.md)
