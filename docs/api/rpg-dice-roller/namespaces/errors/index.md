---
sidebarDepth: 0
---

[@dice-roller/rpg-dice-roller](../../../index.md) / errors

# errors

Error classes raised while parsing, evaluating, and importing rolls.

## Classes

| Class | Description |
| ------ | ------ |
| [DiceRollerError](classes/DiceRollerError.md) | Base class for the library's custom errors. Native errors and errors from user-supplied code may also propagate. The name is set from the concrete constructor; `options.cause` is passed to Error. |
| [EvaluationError](classes/EvaluationError.md) | Thrown when an expression cannot be evaluated (e.g. a maths operation without a real result). For example, `sqrt(-1)` fails, while `1/0` produces `Infinity` rather than this error. |
| [ImportError](classes/ImportError.md) | Thrown when imported data is malformed, or in an unknown format or version. |
| [NotationError](classes/NotationError.md) | Thrown when the notation is syntactically invalid. Empty or non-string notation instead raises a `ValidationError`. Parser syntax errors retain the original notation, the start location, and the underlying syntax error as `cause`; a manually constructed error may omit location and cause. |
| [ValidationError](classes/ValidationError.md) | Thrown when an argument or value is invalid (e.g. an empty notation, or a qty out of range). |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [NotationErrorLocation](interfaces/NotationErrorLocation.md) | Location of a syntax error within the notation. |
