---
sidebarDepth: 0
---

[@dice-roller/rpg-dice-roller](../../../index.md) / dice

# dice

Die definitions, presets, and registries for extending dice notation.

## Classes

| Class | Description |
| ------ | ------ |
| [DieRegistry](classes/DieRegistry.md) | Die factories by name. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [DieBehaviour](interfaces/DieBehaviour.md) | Optional behaviour a die can provide, instead of the default helpers. |
| [DieOptions](interfaces/DieOptions.md) | Optional settings for a preset die. |
| [DieSnapshot](interfaces/DieSnapshot.md) | The JSON-safe values of a die, stored in results. |
| [FacesDieDefinition](interfaces/FacesDieDefinition.md) | A die with a non-empty list of finite faces, e.g. dF (`[-1, 0, 1]`). Repeats act as weights. |
| [RangeDieDefinition](interfaces/RangeDieDefinition.md) | A die defined by its inclusive bounds, e.g. d6 or d%. |
| [ResolvedDie](interfaces/ResolvedDie.md) | A die with every value resolved to a plain number, and a `roll()` that always exists. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [DieDefinition](type-aliases/DieDefinition.md) | The minimum data that defines a die. |
| [DieFactory](type-aliases/DieFactory.md) | Creates a die from the evaluated arguments of a `DieNode`, e.g. `standard(6)` for `d6`. |
| [FudgeNonBlanks](type-aliases/FudgeNonBlanks.md) | The conventional number of faces each non-blank symbol (`-`, `+`) covers on a fudge die. |
| [NumberOrGetter](type-aliases/NumberOrGetter.md) | A number, or a function that returns one. |

## Variables

| Variable | Description |
| ------ | ------ |
| [percentileDie](variables/percentileDie.md) | `d%`: a 100-sided die, displayed as `d%`. Registered in the `DieRegistry` as `percentile`. |

## Functions

| Function | Description |
| ------ | ------ |
| [faceDie](functions/faceDie.md) | A die with a list of faces, e.g. `faceDie([1, 1, 2, 3, 5, 8])`. |
| [fudgeDie](functions/fudgeDie.md) | A fudge / fate die. Registered in the `DieRegistry` as `fudge`. |
| [rangeDie](functions/rangeDie.md) | A die with every integer from `min` to `max`, e.g. `rangeDie(-2, 3)`. |
| [standardDie](functions/standardDie.md) | A die numbered from 1 to `sides`, e.g. `standardDie(6)` for `d6`. |

## References

### DieLike

Re-exports [DieLike](../../../type-aliases/DieLike.md)
