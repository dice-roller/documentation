# Migrating from v5 to v6

Version 6 is a rewrite of RPG Dice Roller. Most familiar dice notation still works, but the JavaScript API and saved data format have changed.

This guide focuses on the changes you need to make to an existing application. For an overview of the new functionality, see [What's new in v6](whats-new.md).

## Before upgrading

* Check that your environment supports v6. The package requires Node.js 22 or later, or a modern browser. See [Environment support](index.md#environment-support).
* Check the compatibility of any Dice Roller integrations you use, including the Vue components, Markdown plugins and CLI. Use versions that explicitly support v6.
* Update the `@dice-roller/rpg-dice-roller` dependency to v6. The package name is unchanged, and ES modules, CommonJS and UMD are still supported.
* If you load a bundle directly, update paths from `lib/` to `dist/`. See [Get started](getting-started.md) for the supported imports and browser setup. TypeScript definitions are included.

::: danger Saved v5 rolls are incompatible with v6
Version 6 cannot directly import rolls or histories exported by v5.

If your application saves rolls in a database, local storage or files, plan how to migrate or retain that data **before upgrading**. Simply changing the library version is not enough.

See [Migrating saved data](#migrating-saved-data) below.
:::

## What's changed?

The main changes affecting existing applications are:

* **Breaking changes:** renamed classes and namespaces, a new result tree and history API, separate presenters, new configuration and incompatible saved data.
* **New features:** programmatic expressions, custom dice, weighted targets, nested dice calculations, variables, conditionals, repeating modifier enhancements and external dice sources.
* **Fixes and behaviour changes:** improved validation and syntax errors, more accurate unmodified-die averages and configurable safety limits.

See [What's new in v6](whats-new.md) for the full overview.

## Quick reference

The following table maps common v5 API entry points to their v6 equivalents. Some are replacements rather than direct renames.

| v5 | v6 |
| --- | --- |
| `DiceRoll` | `Roll` |
| `DiceRoller` | `Roller` |
| `new DiceRoll(notation)` | `new Roll(notation)` or `roll(notation)` |
| `diceRoll.roll()` | `roll.reroll()` (returns a new roll) |
| `diceRoller.roll(...notations)` | `roller.roll(notation)`, once per expression |
| `diceRoller.log` | `roller.history.rolls` |
| `diceRoller.total` | `roller.history.total` |
| `diceRoller.clearLog()` | `roller.history.clear()` |
| `diceRoll.rolls` | `roll.result` (a tree, not an array) |
| `diceRoll.hasExpressions()` / `hasRolls()` | No direct equivalent; inspect the expression or result tree |
| `diceRoll.output` / `diceRoller.output` | `roll.present()` / `roller.present()` |
| `notation`, `total`, `minTotal`, `maxTotal`, `averageTotal` on a roll | Same property names, with some calculation changes |
| `DiceRoll.import(data)` | `Roll.import(data)` (v6 data only) |
| `DiceRoller.import(data)` / `new DiceRoller(data)` | `new Roller()` followed by `roller.import(data)` |
| `diceRoller.import(data)` | `roller.import(data)` (returns the newly imported rolls) |
| `exportFormats.JSON` / `BASE_64` / `OBJECT` | `'json'` / `'base64'` / `'object'` |
| `Parser.parse(notation)` | `new Parser().parse(notation)` or `roller.parse(notation)` |
| `ComparePoint` | `ast.compare()` |
| `RollGroup` | `ast.group()` and group results |
| `Dice` | `dice` (die definitions and registries) |
| `Modifiers` | `modifiers` (handlers and registries), with builders in `ast` |
| `Results` | `results` (result types and helpers) |
| `Exceptions` | `errors` (different error classes) |
| `NumberGenerator.generator` | `roller.generator` |
| `NumberGenerator.engines` | `engine` option, `EngineRegistry` and `engines` namespace |

The [API reference](../api/index.md) contains the complete v6 API.

## Updating your code

### Imports and roll creation

The two main classes have been renamed. Their basic usage is similar.

:::tabs key:migration-version variant:code

== v5

```javascript
import { DiceRoll, DiceRoller } from '@dice-roller/rpg-dice-roller';

const result = new DiceRoll('2d6+3');

const roller = new DiceRoller();
const attack = roller.roll('d20+5');
```

== v6

```javascript
import { Roll, Roller } from '@dice-roller/rpg-dice-roller';

const result = new Roll('2d6+3');

const roller = new Roller();
const attack = roller.roll('d20+5');
```

:::

Update the names in your imports regardless of whether you use ES modules, CommonJS or the browser global.

Unlike v5, `roller.roll()` accepts only one notation string or expression node. Its optional second argument is an options object, not another notation.

If you currently roll several notations in one call, call the method separately for each one:

:::tabs key:migration-version variant:code

== v5

```javascript
const rolls = roller.roll('d20', '2d6+3');
```

== v6

```javascript
const rolls = ['d20', '2d6+3'].map(notation => roller.roll(notation));
```

:::

Ordinary rolls are still synchronous. You don't need to introduce `await` throughout your application. It is only needed if you choose to use an [asynchronous external dice source](customisation/external-dice.md).

### Re-rolling

In v5, calling `roll()` on a `DiceRoll` replaces its existing results and returns the new results array. In v6, `reroll()` creates a new `Roll`, leaving the original unchanged.

:::tabs key:migration-version variant:code

== v5

```javascript
const result = new DiceRoll('2d6');

result.roll();
console.log(result.total);
```

== v6

```javascript
const original = new Roll('2d6');
const result = original.reroll();

console.log(result.total);
```

:::

Make sure your application uses the returned roll. Calling `original.reroll()` without retaining its return value doesn't update `original`.

If the original roll belongs to a history, re-rolling it doesn't replace the original entry or automatically append a new one. Use `roller.history.add(result)` to record the new roll, or `roller.roll(notation)` to make and record a new roll directly.

See [Rolling dice](usage/index.md) for more about re-rolling and roll creation.

### Roll history

The history is now a separate `RollHistory` object.

:::tabs key:migration-version variant:code

== v5

```javascript
const roller = new DiceRoller();

roller.roll('d20', '2d6');

console.log(roller.log.length);
console.log(roller.total);

for (const result of roller.log) {
  console.log(result.total);
}

roller.clearLog();
```

== v6

```javascript
const roller = new Roller();

roller.roll('d20');
roller.roll('2d6');

console.log(roller.history.length);
console.log(roller.history.total);

for (const result of roller.history) {
  console.log(result.total);
}

roller.history.clear();
```

:::

In v5, you could manipulate the array returned by `log` directly. In v6, `history.rolls` returns a shallow copy of the list. Use `history.add()` and `history.clear()` to modify the history, rather than mutating that array.

A standalone `RollHistory` is also available if you want to manage results without using a `Roller`.

See [Roll history](usage/roll-history.md).

### Accessing dice results

The old `RollResult`, `RollResults` and `ResultGroup` classes have been replaced by plain, readonly result nodes. The result tree follows the structure of the evaluated expression.

For a simple notation containing a single dice pool:

:::tabs key:migration-version variant:code

== v5

```javascript
const result = new DiceRoll('4d6kh3');
const pool = result.rolls[0];

console.log(pool.rolls.map(die => die.value));
```

== v6

```javascript
const result = new Roll('4d6kh3');

if (result.result.type === 'pool') {
  const pool = result.result;

  console.log(pool.rolls.map(die => die.value));
  console.log(pool.die.notation);
}
```

:::

For more complex expressions, the root may instead represent a mathematical operation, group, comparison or another expression type. Don't assume that `result.result` always has a `rolls` property. Follow the child nodes to find the pools.

The individual dice still expose these familiar properties:

| Property | Meaning in v6 |
| --- | --- |
| `initialValue` | Original value of the result before modification. |
| `value` | Value after modifiers. |
| `calculationValue` | Value used for scoring. |
| `useInTotal` | Whether the score contributes to the total. |
| `flags` | Array of semantic modifier flags, replacing the old `modifiers` and `modifierFlags` accessors. |

For example, replace a check of `die.modifiers.has('drop')` with `die.flags.includes('drop')`. To determine whether a die contributes to the total, use `useInTotal` rather than checking its flags or summing its face value.

If your application displays individual dice, each pool now provides a snapshot of its resolved die type and properties through `pool.die`.

See [Working with results](usage/working-with-results.md), including an example of traversing an arbitrary expression to find all of its dice pools.

### Displaying rolls

Replace the `output` property with `present()`:

:::tabs key:migration-version variant:code

== v5

```javascript
console.log(result.output);
console.log(roller.output);
```

== v6

```javascript
console.log(result.present());
console.log(roller.present());
```

:::

`toString()` and string interpolation continue to produce text, using the default text presenter. If you configure a different presenter, use `present()` to obtain its output; that output needn't be a string.

If your application parses formatted output to identify dice, modifier effects or totals, migrate it to the result tree instead. The default formatting is not identical to v5, and presentations can be customised.

See [Presenters](customisation/presenters.md).

### Importing and exporting

The same three formats are supported, but format identifiers are now strings instead of the numeric `exportFormats` constants.

:::tabs key:migration-version variant:code

== v5

```javascript
import { DiceRoll, DiceRoller, exportFormats } from '@dice-roller/rpg-dice-roller';

const result = new DiceRoll('2d6');
const saved = result.export(exportFormats.JSON);
const restored = DiceRoll.import(saved);
```

== v6

```javascript
import { Roll, Roller } from '@dice-roller/rpg-dice-roller';

const result = new Roll('2d6');
const saved = result.export('json');
const restored = Roll.import(saved);
```

:::

::: warning Default export format
In v5, `export()` returns a JSON string by default. In v6, it returns a JSON-safe object.

Use `export('json')` wherever your existing code expects a string, or update the surrounding storage and transport code to accept an object.
:::

History imports no longer use a static method or constructor argument:

:::tabs key:migration-version variant:code

== v5

```javascript
const restored = DiceRoller.import(savedHistory);
```

== v6

```javascript
const restored = new Roller();
const imported = restored.import(savedHistory);
```

:::

Each example assumes `savedHistory` was created by the matching major version. In v6, the import method returns an array of the newly imported rolls and adds them to the existing history. An invalid history import leaves the history unchanged.

The versioned v6 data has `type: 'roll'` or `type: 'history'` and `version: 1`. History entries are in `rolls` instead of `log`; an individual roll has a `result` tree instead of its old `rolls` array. Formatted `output` isn't stored.

See [Importing and exporting](usage/importing-and-exporting.md) for the formats and structure.

#### Migrating saved data

Decide whether historical results must be preserved:

* If they aren't needed, retain the notation and generate new rolls in v6 when appropriate. These are new outcomes, not the original results.
* If you only need to display historical records, retain them separately in their old format, or store the notation, total and display text independently.
* If historical rolls need to become v6 `Roll` objects, write a conversion for the data your application stores. Read the v5 exports before removing your v5 integration, and convert the finished results to the v6 full or concise format.

For example, suppose a saved v5 roll of `2d6+3` contains the finished die values 4 and 5. You can reconstruct that simple roll using the v6 concise format:

```javascript
const restored = Roll.import({
  notation: '2d6+3',
  rolls: [[4, 5]],
});

console.log(restored.total); // 12
```

For modified rolls, also map the original and modified values, scoring, inclusion flags and modifier effects. Concise import does not apply modifiers again. Roll groups and nested expressions need additional care to preserve their structure and order.

There is no built-in general-purpose v5 converter. Don't pass the old result arrays directly to `Roll.import()`, and don't assume that matching totals alone proves a successful conversion. Back up the original data and test representative saved rolls, including modified and grouped results.

When migrating a history, import the converted rolls in their original order. Save the resulting v6 history using `roller.export()`.

See [Importing concise results](usage/importing-and-exporting.md#importing-concise-results) for the required structure.

### Parsing and expressions

The v5 parser returns an array of dice and other parsed values. The v6 parser returns an abstract syntax tree (AST), describing the expression without rolling it.

:::tabs key:migration-version variant:code

== v5

```javascript
const expression = Parser.parse('2d6+3');
```

== v6

```javascript
const parser = new Parser();
const expression = parser.parse('2d6+3');
const result = new Roll(expression);
```

:::

If you use a `Roller`, you can instead call `roller.parse()` to use its configured parser.

If you previously constructed dice, modifiers or groups as class instances, use the AST builders to compose expressions. For example, `new ComparePoint('>=', 5)` becomes `ast.compare('>=', 5)` when specifying a modifier's comparison.

See [Parsing and building expressions](usage/parsing-and-building-expressions.md).

### Random number generation

The v5 global number generator has been replaced by configuration on individual rolls and rollers. The library uses pure-rand instead of random-js.

:::tabs key:migration-version variant:code

== v5

```javascript
import { DiceRoller, NumberGenerator } from '@dice-roller/rpg-dice-roller';

NumberGenerator.generator.engine =
  NumberGenerator.engines.MersenneTwister19937.seed(1234);

const roller = new DiceRoller();
```

== v6

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller({
  engine: { name: 'mersenne', seed: 1234 },
});
```

:::

| v5 engine | v6 engine option |
| --- | --- |
| `nativeMath` | `'nativeMath'` |
| `MersenneTwister19937` | `'mersenne'` |
| `browserCrypto` or `nodeCrypto` | `'crypto'` |
| `min` and `max` | No equivalent engine option; use calculated totals or external die draws as appropriate |

V6 also supports the seedable `xoroshiro128plus` engine. Engine names and seeding behaviour have changed; **don't rely on v6 reproducing v5 seeded sequences**. Update deterministic tests accordingly.

Custom engines still implement `next()`, but must supply uniformly distributed signed 32-bit integers. Revisit any engine that relies on the v5 generator setting its `range` property, such as fixed-result engines. For exact die faces, use the new `drawDie` option instead.

To generate random numbers directly, use `roller.generator.integer()` or `roller.generator.real()`. These share the roller's random sequence.

See [Random number generator](customisation/random-number-generator.md).

### Custom dice and modifiers

The `Dice` and `Modifiers` class hierarchies have been replaced by definitions and handlers. For ordinary notation, you don't need to register anything: the built-in dice and modifiers are available automatically.

If you customised dice in v5, use the `dice` namespace:

| v5 class | v6 definition |
| --- | --- |
| `Dice.StandardDice` | `dice.standardDie(sides)` |
| `Dice.PercentileDice` | `dice.percentileDie` |
| `Dice.FudgeDice` | `dice.fudgeDie(nonBlanks)` |

These are definitions, not rollable dice instances. Quantities and modifiers belong to expression nodes, and custom definitions are made available through a `dice.DieRegistry`.

If you changed modifier order globally, move that configuration to a registry:

:::tabs key:migration-version variant:code

== v5

```javascript
import { DiceRoller, Modifiers } from '@dice-roller/rpg-dice-roller';

Modifiers.KeepModifier.order = 2;

const roller = new DiceRoller();
```

== v6

```javascript
import { Roller, modifiers } from '@dice-roller/rpg-dice-roller';

const customModifiers = new modifiers.ModifierRegistry().register({
  ...modifiers.keepHandler,
  order: 2,
});

const roller = new Roller({ modifiers: customModifiers });
```

:::

The v6 configuration only applies to rolls using that registry.
Recheck custom order values: the new Matching-batch explode handler has been inserted before Explode, shifting the default numeric order of later handlers.

To migrate a custom modifier implementation, write a handler rather than extending the v5 `Modifier` or `ComparisonModifier` classes. Built-in modifier AST nodes can be created with builders such as `ast.explode()`, `ast.keep()` and `ast.target()`.

See [Custom dice](customisation/dice.md), [Modifiers](customisation/modifiers.md) and [Configuring rolls](usage/roll-options.md).

### Handling errors

The `Exceptions` namespace is now `errors`, and the old exception classes don't all have one-to-one replacements.

| v5 error | What to catch in v6 |
| --- | --- |
| Parser syntax errors / `Exceptions.NotationError` | `errors.NotationError` for invalid syntax |
| `Exceptions.RequiredArgumentError` | `errors.ValidationError` for missing or invalid arguments |
| `Exceptions.CompareOperatorError` / `DieActionValueError` | `errors.ValidationError` or `errors.EvaluationError`, depending on the failure |
| `Exceptions.DataFormatError` | `errors.ImportError` for malformed imported data |

Instead of relying on old error messages or exact exception names, handle errors according to the operation being performed. All library-defined errors extend `errors.DiceRollerError`, although other exceptions can still propagate from your own code or dependencies.

```javascript
import { Roll, errors } from '@dice-roller/rpg-dice-roller';

try {
  const result = new Roll('2d6+');
} catch (error) {
  if (error instanceof errors.NotationError) {
    console.error(error.format());
  } else {
    throw error;
  }
}
```

See [Handling errors](usage/handling-errors.md) for syntax locations, validation and asynchronous failures.

## Notation and behaviour changes

Most existing notation continues to work, but review expressions that depend on the following behaviour.

### Dice quantities and validation

V5 truncates fractional computed dice quantities. For example, `(3/2)d6` rolls one die. V6 rejects the fractional quantity.

Make your intended rounding explicit:

| v5 | v6 replacement |
| --- | --- |
| `(3/2)d6` | `(floor(3/2))d6` |

Computed quantities can now evaluate to zero, in which case no dice are rolled for that pool. Literal `0d6` remains invalid.

The default maximum initial quantity is 999, configurable through `limits.maxQty`. Literal quantities are checked during parsing, and calculated quantities during evaluation.

### Target success and failure

V5 checks the success condition before the failure condition. V6 allows multiple success and failure rules and uses the **last matching rule** in written order. Overlapping conditions can therefore produce different totals.

For example, with `4d6>=4f=6`, a six counts as a success in v5 but a failure in v6. If you intended the original success to take precedence, use `4d6>=4f=6>=4` instead, or simplify the overlapping conditions.

Success and failure rules can also be weighted with `:amount`, where the amount must be a whole number from 1 to 10 and defaults to 1.

Write all target rules together. For example, `4d6>=4f=1kh3` is valid, but `4d6>=4kh3f=1` is not.

See [Target success](notation/modifiers.md#target-success-dice-pool) and [Target failure](notation/modifiers.md#target-failure-dice-pool).

### Critical success and failure

The default text presenter uses `cs` and `cf` for critical success and failure, replacing v5's `**` and `__`.

Repeated `*` and `_` markers now represent weighted target successes and failures. Update any tests or integrations that rely on the old text symbols. If you need to retain a particular appearance, configure the [Text presenter](customisation/presenters/text.md).

### Repeating modifiers

Explode, Re-roll and Unique now accept explicit iteration limits, such as `d6!3`, `d6r2` and `4d6u3`. The existing `ro` and `uo` aliases still work, corresponding to one replacement generation or retry.

The configurable `maxIterations` limit caps repeating modifiers, and `maxGeneratedRolls` caps additional draws across repeating modifiers in each pool. Exhausting these limits stops additional draws rather than throwing just for reaching the limit.

If you've customised repeating behaviour or rely on exact sequences of random draws, test those expressions with the new evaluator.

See [Repeating modifier limits](notation/modifiers.md#repeating-modifier-limits) and [Roll limits](usage/roll-options.md#roll-limits).

### Custom faces and ranges

V6 introduces `d{1,1,4}` for explicit faces, `d{-2...3}` for a range and `d{0:0.5:2}` for a stepped range. These are new forms, not required replacements for standard dice.

Review any code that generates or validates notation independently of the library, especially code that assumes every use of braces denotes a roll group or that all die faces are positive integers.

See [Dice notation](notation/dice.md) for the syntax and limits.

### Totals and calculations

The familiar `total`, `minTotal`, `maxTotal` and `averageTotal` properties remain, but check your assumptions:

* `minTotal` and `maxTotal` evaluate each die at its minimum or maximum face, respectively. They are not necessarily the mathematical bounds of the entire expression (for example, `10-d6`).
* V5 calculates `averageTotal` as the midpoint of the minimum and maximum totals. V6 uses the resolved averages of unmodified dice where possible, with the midpoint fallback for modifiers and conditionals. It is not a general statistical expectation.
* Some expressions can fail when calculating an extreme even if the original roll succeeded. These calculations are lazy, and exporting a roll can trigger them.
* Modifier execution still follows the configured order rather than the written notation order. Review custom handlers and overlapping target conditions.

See [Calculated totals](usage/working-with-results.md#calculated-totals) for the precise behaviour and limitations.

## Taking advantage of v6

You don't need to adopt every new feature just to upgrade. Once your application is working, you can:

* Build reusable expressions without assembling notation strings using the [AST builders](usage/parsing-and-building-expressions.md).
* Configure game-specific [dice](customisation/dice.md) and [modifiers](customisation/modifiers.md) without changing the rules for every roll in your application.
* Use [presenters](customisation/presenters.md) for graphical or customised output.
* Supply application data through [variables](notation/variables.md), or integrate a physical or graphical roller using [external dice sources](customisation/external-dice.md).

## Migration checklist

- [ ] Upgrade the library and check environment and integration compatibility.
- [ ] Update imports, constructors, roll calls and re-roll handling.
- [ ] Move history access and modification to `RollHistory`.
- [ ] Adapt result inspection and output formatting.
- [ ] Back up and migrate or retain v5 saved data, and specify the desired export format.
- [ ] Update RNG configuration, custom dice, modifiers and error handling.
- [ ] Review notation and tests that rely on changed validation, scoring, output or deterministic random sequences.
- [ ] Test the upgraded application, including restoring saved rolls and evaluating representative game mechanics.

For further information, see the [usage guide](usage/index.md) and [API reference](../api/index.md).
