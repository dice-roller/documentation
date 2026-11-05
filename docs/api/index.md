---
sidebarDepth: 0
---

# Introduction

::: tip API
The technical API is for people wanting to delve a bit deeper into the parts that make up the library.

* Get set up quickly with the [setup guide](../guide/readme.md).
* Roll some dice with [notations](../guide/notation/readme.md).
:::

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [ast](rpg-dice-roller/namespaces/ast/index.md) | Expression tree nodes and notation helpers for inspecting or constructing rolls. |
| [dice](rpg-dice-roller/namespaces/dice/index.md) | Die definitions, presets, and registries for extending dice notation. |
| [engines](rpg-dice-roller/namespaces/engines/index.md) | Random engines for controlling how dice are rolled. |
| [errors](rpg-dice-roller/namespaces/errors/index.md) | Error classes raised while parsing, evaluating, and importing rolls. |
| [modifiers](rpg-dice-roller/namespaces/modifiers/index.md) | Modifier definitions, handlers, and registries for extending roll behavior. |
| [presenters](rpg-dice-roller/namespaces/presenters/index.md) | Presenters that format evaluated rolls and their results. |
| [results](rpg-dice-roller/namespaces/results/index.md) | Result types and helpers for inspecting evaluated expressions. |

## Classes

| Class | Description |
| ------ | ------ |
| [Evaluator](classes/Evaluator.md) | Walks the AST and builds the result tree. |
| [Parser](classes/Parser.md) | Parses dice notation into the AST. |
| [Roll](classes/Roll.md) | One evaluated notation: the result tree and its totals. |
| [Roller](classes/Roller.md) | Rolls notation and keeps a history of the rolls. |
| [RollHistory](classes/RollHistory.md) | A log of rolls. |
| [RollSettings](classes/RollSettings.md) | Resolved `RollOptions`, with the services built from them. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [EvaluatorRegistries](interfaces/EvaluatorRegistries.md) | Registries used to resolve dice and modifier handlers during evaluation. |
| [HistoryData](interfaces/HistoryData.md) | A roll history. |
| [NumberGenerator](interfaces/NumberGenerator.md) | Generates numbers in a range from a `RandomEngine`. |
| [ParserOptions](interfaces/ParserOptions.md) | Options for parsing notation. |
| [Presenter](interfaces/Presenter.md) | Turns a roll, a roll history, or a result node into any output, e.g. text, HTML or Markdown. |
| [RandomEngine](interfaces/RandomEngine.md) | A source of randomness. |
| [RollContext](interfaces/RollContext.md) | Everything that changes per roll but isn't part of the notation. |
| [RollData](interfaces/RollData.md) | A roll, with its result tree and totals. |
| [RollLimits](interfaces/RollLimits.md) | Safety limits for a single roll. |
| [RollOptions](interfaces/RollOptions.md) | How notation is parsed, rolled and presented. Every option is optional. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [DieLike](type-aliases/DieLike.md) | A range or faces definition with optional behaviour overrides. |
| [Encoded](type-aliases/Encoded.md) | The data with every number (except literal ones, like `version`) as an `EncodedNumber`. |
| [EncodedExportData](type-aliases/EncodedExportData.md) | Anything that has been exported. |
| [EncodedHistoryData](type-aliases/EncodedHistoryData.md) | An exported roll history: JSON-safe, with non-finite numbers tagged. |
| [EncodedNumber](type-aliases/EncodedNumber.md) | A number in exported data: a finite number as it is, otherwise a tag, e.g. `{ "$number": "Infinity" }`, so it survives JSON (which would turn it into `null`). |
| [EncodedRollData](type-aliases/EncodedRollData.md) | An exported roll: JSON-safe, with non-finite numbers tagged. |
| [ExportFormat](type-aliases/ExportFormat.md) | A supported export format. |
| [ExpressionNode](type-aliases/ExpressionNode.md) | Any node that evaluates to a number. |
| [ExpressionResult](type-aliases/ExpressionResult.md) | A result for an expression node; individual dice and group members are nested within it. |
| [NonFiniteNumber](type-aliases/NonFiniteNumber.md) | The tag names used for non-finite numbers. |
| [Presentable](type-aliases/Presentable.md) | A roll, history, or evaluated expression result; an individual die result is not presentable. |
| [RollerOptions](type-aliases/RollerOptions.md) | Options shared by all rolls made or imported by a roller. |
| [RollMode](type-aliases/RollMode.md) | How dice are rolled. |
| [TaggedDieResult](type-aliases/TaggedDieResult.md) | A die result carrying an internal pool tag during flattened group modifier handling. |

## Variables

| Variable | Description |
| ------ | ------ |
| [EXPORT\_FORMATS](variables/EXPORT_FORMATS.md) | - `object`: plain JSON-safe data (`EncodedRollData` / `EncodedHistoryData`) - `json`: that data as a JSON string - `base64`: that JSON string, base64-encoded (UTF-8) |
| [NON\_FINITE\_NUMBERS](variables/NON_FINITE_NUMBERS.md) | The numbers JSON can't represent, by their tag. |

## Functions

| Function | Description |
| ------ | ------ |
| [roll](functions/roll.md) | Shorthand for `new Roll(input, options)`: rolls notation (or an AST) once, without a history. |
