# What's new in v6?

Version 6 is a substantial rewrite of RPG Dice Roller. It's written in TypeScript, with a new expression-based architecture that makes it easier to build complex rolls, inspect results and customise the library to suit your application.

Many familiar dice notations still work as before, but there are breaking changes to the JavaScript API and some notation and evaluation behaviour.

::: warning Upgrading from v5?
Version 6 is not a drop-in replacement for v5. In particular, saved rolls and histories exported by v5 cannot be imported directly into v6. Review the breaking changes below before upgrading.
:::

## Breaking changes

### Rolling dice and working with results

* `DiceRoll` and `DiceRoller` have been replaced by `Roll` and `Roller`. The new `roll()` function provides a shorthand for standalone rolls.
* Re-rolling with `Roll.reroll()` returns a new roll rather than changing the existing result.
* Roll history is now managed through `Roller.history`, a `RollHistory` instance.
* The old result classes have been replaced by an evaluated result tree, accessible through `roll.result`. Modifier flags are semantic names rather than formatted symbols.
* Output formatting is handled by presenters. Use `present()` instead of the old `output` property.

See [Rolling dice](usage/index.md), [Working with results](usage/working-with-results.md) and [Roll history](usage/roll-history.md).

### Importing and exporting

The import and export data structure has changed to support the expression and result trees. Version 5 exports are not compatible with v6.

Export formats are now specified using `'object'`, `'json'` or `'base64'`, and `export()` returns an object by default rather than a JSON string.

See [Importing and exporting](usage/importing-and-exporting.md).

### Configuration and customisation

* The random-number implementation now uses [pure-rand](https://github.com/dubzzz/pure-rand) instead of random-js. The engine API and available built-in engines have changed. Seeded sequences are not guaranteed to match those from v5.
* Dice definitions, modifier handlers and random engines use registries. Configuration can be shared across rolls or isolated from other parts of your application, rather than relying on global settings.
* Error classes are exposed through the `errors` namespace, with new validation, notation, evaluation and import errors.
* The bundle paths have changed from `lib/` to `dist/`. Check any imports that refer directly to a bundle file rather than the package name.

See [Configuring rolls](usage/roll-options.md), [Customisation](customisation/index.md), [Handling errors](usage/handling-errors.md) and [Get started](getting-started.md).

### Notation and output changes

* Fractional computed dice quantities are rejected instead of truncated. For example, `(3/2)d6` is invalid; use an explicit rounding function if you intend to roll an integer quantity.
* Target success and failure conditions must be written together, and the last matching condition determines the score.
* Critical success and failure markers in the default text output have changed from `**` and `__` to `cs` and `cf`. Target success and failure markers can now repeat to indicate a weighted score.

## New features

### More expressive notation

Expressions can be used to calculate the quantity of dice, the number of sides and the number of results to keep or drop. These calculations can include other dice rolls, functions and roll groups.

Comparisons and ternary conditionals allow notation to make decisions based on evaluated values, while variables allow you to supply data from your application without constructing new notation strings.

| Example | What it does |
| --- | --- |
| `(d4)d6` | Roll a d4 to determine how many d6s to roll. |
| `d(2d4)` | Roll two d4s to determine the number of sides of another die. |
| `4d6kh(d4)` | Keep a number of the highest results determined by a d4. |
| `(max(4,2))d10` | Use the larger of two values as the dice quantity. |
| `(d20+5>=15)` | Evaluate a comparison to 1 or 0. |
| `((d20)>=15)?(2d6):(0)` | Conditionally roll damage based on an expression comparison. |
| `d20+$character.attackBonus` | Add a value supplied by your application. |

::: roller (d4)d6 :::

See [Maths](notation/maths.md), [Comparisons and ternaries](notation/comparisons-and-ternaries.md) and [Variables](notation/variables.md).

### Custom dice

You can define dice with arbitrary numeric faces, including repeated faces to give some values a greater probability of being rolled. Ranges support custom minimums, maximums and step sizes.

| Example | What it does |
| --- | --- |
| `d{1,1,2,5}` | Roll a die with four faces, two of which are 1. |
| `d{-3...3}` | Roll a value from -3 to 3. |
| `d{0:0.5:2}` | Roll one of 0, 0.5, 1, 1.5 or 2. |

::: roller 4d{1,1,2,5} :::

For more specialised game mechanics, you can also register your own die factories and provide custom rolling behaviour.

See [Dice notation](notation/dice.md) and [Custom dice](customisation/dice.md).

### New modifier capabilities

* **Weighted targets:** count some successes or failures more heavily than others. For example, `4d10>=8>=10:2f=1:2` counts a roll of 10 as two successes and a roll of 1 as two failures.
* **Repeating modifier limits:** limit explosions, re-rolls or unique retries, for example `d6!3`.
* **Multiple dice per trigger:** generate several dice on an explosion or re-roll, for example `d6!2:3` or `d6ro:3`.
* **Matching-batch explosions:** use `2d6!m` to roll another batch whenever all the dice in a batch match.
* **Calculated keep/drop counts:** use an expression instead of a fixed number when choosing how many results to keep or drop.

::: roller 4d10>=8>=10:2f=1:2 :::

See [Modifiers](notation/modifiers.md). You can also configure modifier execution order and replace built-in modifier behaviour using the [modifier registry](customisation/modifiers.md).

### Parsing and building expressions

The new abstract syntax tree (AST) separates parsing from evaluation. Parse notation without rolling dice, inspect the resulting expression, or construct rolls programmatically using the AST builders.

```javascript
import { Roll, ast } from '@dice-roller/rpg-dice-roller';

const expression = ast.binary('+', ast.pool(2, 6), 3);
const roll = new Roll(expression);

console.log(roll.total);
```

This is particularly useful for graphical notation builders, reusable game mechanics and custom dice that cannot be expressed using the built-in notation syntax.

See [Parsing and building expressions](usage/parsing-and-building-expressions.md).

### Richer roll results

The evaluated result tree follows the structure of the original expression. Each pool includes information about the resolved die, the original and modified values of its results, and how each result contributes to the total.

This makes it easier to build interfaces that distinguish die types, display modifier effects or inspect calculations within complex expressions.

See [Working with results](usage/working-with-results.md).

### Presenters

Result formatting is now separate from rolling. The built-in text presenter supports configurable modifier symbols and other formatting options, and you can implement your own presenter for any output format.

First-party SVG and terminal presenters are also available for displaying results graphically or in a terminal.

See [Presenters](customisation/presenters.md).

### Random engines and external dice sources

Choose a random engine by name, supply a seed or register your own engine. You can configure engines for a roller or override them for individual rolls.

The new `drawDie` option also lets an external source supply individual die values as they're needed, while the library continues to apply modifiers and calculate totals.

This allows integrations with 3D dice rollers, remote dice services or prompts for physical dice results. External sources can be synchronous or asynchronous; ordinary rolls remain synchronous.

See [Random number generator](customisation/random-number-generator.md) and [External dice sources](customisation/external-dice.md).

### Restoring finished results

In addition to importing complete, versioned roll snapshots, v6 supports concise imports that specify notation and finished dice results. The library reconstructs the result tree and calculates totals without rolling again.

For concise imports, modifier effects must already be included in the supplied results. Use an external dice source instead if you want the library to apply modifiers to supplied die draws.

See [Importing and exporting](usage/importing-and-exporting.md).

## Fixes and behaviour changes

### More useful errors

Invalid notation produces clearer diagnostics, including source locations for syntax errors. `NotationError.format()` can display the offending source line with a caret pointing to the problem.

For example, invalid quantities such as `0d6` now produce a more useful error. Computed quantities that evaluate to zero are supported, allowing expressions to determine whether a pool rolls any dice.

See [Handling errors](usage/handling-errors.md).

### Improved average calculations

Unmodified pools use the resolved die average rather than the midpoint of its minimum and maximum. This matters for dice with non-uniform face values: `3d{1,1,6}` has an average total of 8, not 10.5.

The library still uses the midpoint fallback for modified rolls and conditionals. This change does not make `averageTotal` a general probability calculation, and the result may not be the true statistical mean.

See [Calculated totals](usage/working-with-results.md#calculated-totals).

### Limits on additional rolls

Repeating modifiers share a configurable per-pool budget for additional dice draws, as well as their iteration limits. When the budget is exhausted, they stop generating new dice and retain the results reached so far.

This helps control potentially large branching explosions and re-rolls, without imposing a single budget on the whole expression.

See [Roll limits](usage/roll-options.md#roll-limits).

## Further reading

* [Get started](getting-started.md) — install and load v6.
* [Usage](usage/index.md) — learn the new API.
* [Notation](notation/index.md) — explore dice types, modifiers and expressions.
* [Customisation](customisation/index.md) — adapt the library to your application.
* [v6 release discussion](https://github.com/dice-roller/rpg-dice-roller/discussions/304) — development discussion and release tracking.
