---
sidebarDepth: 0
---

[@dice-roller/rpg-dice-roller](../../../index.md) / presenters

# presenters

Presenters that format evaluated rolls and their results.

## Classes

| Class | Description |
| ------ | ------ |
| [TextPresenter](classes/TextPresenter.md) | Plain text output, matching v5: e.g. `4d6: [3, 5, 2, 6] = 16`, with flag symbols after each die value and history rolls joined with `"; "`. It prints the supplied roll's total as-is: newly evaluated rolls round their total to 2 decimal places, but restored totals need not be rounded. |
| [TreePresenter](classes/TreePresenter.md) | A presenter with a hook per result type. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TextPresenterOptions](interfaces/TextPresenterOptions.md) | Options for formatting flags and roll histories. |

## Variables

| Variable | Description |
| ------ | ------ |
| [DEFAULT\_FLAG\_SYMBOLS](variables/DEFAULT_FLAG_SYMBOLS.md) | Default flag symbols, e.g. `[6!, 2, 1d]. |
| [defaultTextPresenter](variables/defaultTextPresenter.md) | The frozen shared instance used by roll, history, and roller `toString()` methods. |

## Functions

| Function | Description |
| ------ | ------ |
| [isExpressionResult](functions/isExpressionResult.md) | Narrows a presentable to an expression result by the presence of `type`. This is a shallow shape check, not validation of the result or its type. |
| [isRoll](functions/isRoll.md) | Narrows a presentable to a roll by its shape: no `type` property and a `result` property. This is not validation of arbitrary input; lookalike objects can match. |
| [isRollHistory](functions/isRollHistory.md) | Narrows a presentable to a history by its shape: no `type` property and a `rolls` property. This is not validation of arbitrary input; lookalike objects can match. |

## References

### Presentable

Re-exports [Presentable](../../../type-aliases/Presentable.md)

***

### Presenter

Re-exports [Presenter](../../../interfaces/Presenter.md)
