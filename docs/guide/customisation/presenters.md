---
outline: 2
---

# Presenters

Presenters control how rolls are displayed. They turn an existing roll, roll history or evaluated expression into output such as plain text, SVG or a format of your own.

The default is the built-in text presenter:

```javascript
const roll = new Roll('2d6+3');

console.log(roll.present());
// e.g. 2d6+3: [4, 2]+3 = 9
```

Presenting a roll reads its existing results. You can display the same roll in several ways without rolling the dice again or changing its total.

## Using a presenter

Import the `presenters` namespace alongside the classes you need:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roll, Roller, presenters } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Roll, Roller, presenters } = require('@dice-roller/rpg-dice-roller');
```

== Browser

```javascript
const { Roll, Roller, presenters } = rpgDiceRoller;
```

:::

Optional presenters supplied by separate packages have their own imports. See [First-party presenters](#first-party-presenters) below.

### For a single call

Pass a presenter to `present()`:

```javascript
const roll = new Roll('4d6kh3');
const presenter = new presenters.TextPresenter({
  flagSymbols: {
    drop: ' (dropped)',
  },
});

console.log(roll.present(presenter));
// e.g. 4d6kh3: [1 (dropped), 4, 5, 6] = 15

console.log(roll.present());
// e.g. 4d6kh3: [1d, 4, 5, 6] = 15
```

This uses the supplied presenter for that call only. Later calls without an argument use the roll's configured presenter.

### As the configured presenter

Set the `presenter` option when creating a `Roll`:

```javascript
const presenter = new presenters.TextPresenter({
  flagSymbols: {
    drop: ' (dropped)',
  },
});

const roll = new Roll('4d6kh3', { presenter });

console.log(roll.present());
// e.g. 4d6kh3: [1 (dropped), 4, 5, 6] = 15
```

The same option works with the [`roll()` shorthand](../usage/index.md#the-roll-shorthand).

For a `Roller`, the configured presenter is used by both the roller and the rolls it creates:

```javascript
const presenter = new presenters.TextPresenter({
  separator: '\n',
});

const roller = new Roller({ presenter });

const attack = roller.roll('d20+5');
roller.roll('2d6+3');

console.log(attack.present());
// e.g. d20+5: [12]+5 = 17

console.log(roller.present());
// e.g. d20+5: [12]+5 = 17
//      2d6+3: [4, 2]+3 = 9
```

`roller.present()` displays the entire history. Pass a presenter to override it for one call, just as with a single roll.

::: tip String conversion
`toString()`, `String(roll)` and template literals always use the default text presenter, even when you configure another presenter.

Use `present()` to get your chosen output.
:::

### Presenting results directly

A presenter's own `present()` method accepts a roll, a `RollHistory`, or an evaluated expression result:

```javascript
const presenter = new presenters.TextPresenter();
const roll = new Roll('2d6+3');

console.log(presenter.present(roll));
// e.g. 2d6+3: [4, 2]+3 = 9

console.log(presenter.present(roll.result));
// e.g. [4, 2]+3
```

For the text presenter, an expression result is displayed without the notation prefix or total.

You can also use `roller.history.present(presenter)`. Calling `roller.history.present()` without an argument uses the default text presenter; use `roller.present()` to use the roller's configured presenter.

## Writing your own presenter

A presenter can be a plain object or a class instance. It needs one method:

```typescript
interface Presenter<T = string> {
  present(target: Presentable): T;
}
```

`Presentable` is a roll, a roll history or an evaluated expression result. An individual die result is not a `Presentable`.

Your output can be any type: a string, a DOM element, an object, or whatever your application needs. TypeScript's `Presenter<T>` interface describes that output type.

### A simple presenter

This presenter displays only the total. It handles all three kinds of input:

```typescript
import { Roll, Roller, presenters } from '@dice-roller/rpg-dice-roller';
import type { Presentable, Presenter } from '@dice-roller/rpg-dice-roller';

const totalPresenter: Presenter<string> = {
  present(target: Presentable): string {
    if (presenters.isRollHistory(target)) {
      return `Combined total: ${target.total}`;
    }

    if (presenters.isRoll(target)) {
      return `Total: ${target.total}`;
    }

    return `Value: ${target.value}`;
  },
};

const roll = new Roll('2d6+3', { presenter: totalPresenter });

console.log(roll.present());
// e.g. Total: 9

const roller = new Roller({ presenter: totalPresenter });
roller.roll('d6');
roller.roll('d8');

console.log(roller.present());
// e.g. Combined total: 10
```

For JavaScript, omit the type-only import and type annotations.

The `isRoll()`, `isRollHistory()` and `isExpressionResult()` helpers distinguish presenter inputs. They are intended for these library objects, rather than validating arbitrary external data.

Treat the supplied results as read-only. A presenter should format the values already calculated by the roller.

### Adapting the text presenter

For changes to plain text output, first check the [text presenter options](#text-presenter). You can also extend `TextPresenter` to change a particular part of its output while retaining the rest.

For example, this adds the die notation before each value:

```typescript
import { Roll, presenters } from '@dice-roller/rpg-dice-roller';
import type { results } from '@dice-roller/rpg-dice-roller';

class LabelledTextPresenter extends presenters.TextPresenter {
  protected die(
    result: results.DieResult,
    pool: results.PoolResult,
  ): string {
    return `d${pool.die.notation}: ${super.die(result, pool)}`;
  }
}

const roll = new Roll('2d6+3');

console.log(roll.present(new LabelledTextPresenter()));
// e.g. 2d6+3: [d6: 4, d6: 2]+3 = 9
```

### Formatting the result tree

For a presenter that needs to display individual dice, groups and maths in a different format, extend `presenters.TreePresenter<T>`.

It dispatches each input to a method that you implement:

| Method | Handles |
| --- | --- |
| `history(history)` | A roll history. |
| `roll(roll)` | A complete roll. |
| `number(result)` | A numeric literal. |
| `pool(result)` | A pool of dice, such as `2d6`. |
| `die(result, pool)` | An individual die and its containing pool. |
| `group(result)` | A roll group. |
| `binary(result)` | An operation such as addition or multiplication. |
| `unary(result)` | A unary operation such as negation. |
| `paren(result)` | A parenthesised expression. |
| `fn(result)` | A maths function. |

Your methods control how the tree is traversed. Call `this.visit(childResult)` to format a nested expression. In `pool()`, call `this.die(dieResult, poolResult)` for each die you want to display; individual dice are not dispatched automatically.

For example, a `roll()` implementation would usually combine `roll.notation`, `this.visit(roll.result)` and `roll.total`.

When displaying modifier effects, use the result data:

* `value` is the value after modifiers.
* `initialValue` on an individual die is its original rolled value.
* `calculationValue` is its score before exclusion, which can differ from the displayed value for target successes or failures.
* `useInTotal` indicates whether the die or group member contributes to its containing total.
* `flags` identify effects such as exploding, dropping or a target success.

Group members have their own scoring and inclusion state. If a whole group member is dropped, its nested dice may still have `useInTotal: true`; account for the enclosing member when showing whether those dice contribute to the final total.

Use the calculated totals rather than adding displayed dice values yourself.

See the [TreePresenter API](../../api/rpg-dice-roller/namespaces/presenters/classes/TreePresenter.md) and [result types](../../api/rpg-dice-roller/namespaces/results/index.md) for the available methods and properties.

## First-party presenters

### Text presenter

`presenters.TextPresenter` is included in `@dice-roller/rpg-dice-roller` and used by default. It displays the notation, dice values, modifier symbols and total as plain text.

You can customise its modifier symbols and the separator between rolls in a history:

```javascript
const presenter = new presenters.TextPresenter({
  flagSymbols: {
    drop: ' (dropped)',
    explode: ' (exploded)',
  },
  separator: '\n',
});
```

| Option | Default | Purpose |
| --- | --- | --- |
| `flagSymbols` | Built-in modifier symbols. | Override individual symbols. Set a symbol to `''` to hide it. |
| `separator` | `'; '` | Separate rolls when presenting a history. |

Unspecified symbols retain their defaults. The defaults are also available as `presenters.DEFAULT_FLAG_SYMBOLS`.

See the [TextPresenter API](../../api/rpg-dice-roller/namespaces/presenters/classes/TextPresenter.md) for more detail.

### SVG presenter

An SVG presenter is being developed to display rolls as scalable dice graphics.

It lives in the separate [Dice Roller Presenters](https://github.com/dice-roller/presenters) project and reads the same evaluated results as the text presenter.

::: info In development
The SVG presenter is not yet published. Installation instructions and usage examples will be added here when it is available.
:::
