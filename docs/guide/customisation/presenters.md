---
outline: 2
---

# Presenters

A presenter formats your rolls for display. The library uses the text presenter automatically, so you can call `present()` without any extra setup:

```javascript
const roll = new Roll('2d6+3');

console.log(roll.present());
// e.g. 2d6+3: [4, 2]+3 = 9
```

This is the same text output used by the dice rollers throughout this documentation:

::: roller 2d6+3 :::

**You only need to choose a presenter if you want to change the output.** For example, you might want different labels for dropped dice, a graphical display, or a format designed for your application.

Presenters use the results you have already rolled. Changing how a roll is displayed does not roll the dice again or change its total.

## Changing the output

To customise the text output, load `presenters` alongside the classes you use:

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

### Change one display

Create a presenter with the options you want, then pass it to `present()`. This example replaces the `d` marker on dropped dice with a label:

```javascript
const presenter = new presenters.TextPresenter({
  flagSymbols: {
    drop: ' (dropped)',
  },
});

const roll = new Roll('4d6kh3');

console.log(roll.present(presenter));
// e.g. 4d6kh3: [1 (dropped), 4, 5, 6] = 15

console.log(roll.present());
// e.g. 4d6kh3: [1d, 4, 5, 6] = 15
```

Passing a presenter changes that call only. Here, calling `present()` again without an argument gives the usual text output.

### Reuse your choice

If you want a roll to use your presenter whenever you call `present()`, pass it in the roll options:

```javascript
// Use the presenter created above.
const roll = new Roll('4d6kh3', { presenter });

console.log(roll.present());
// e.g. 4d6kh3: [1 (dropped), 4, 5, 6] = 15
```

The same option works with the [`roll()` shorthand](../usage/index.md#the-roll-shorthand).

For a history of rolls, pass your presenter to `Roller`. This example puts each roll on a separate line:

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

The roller and the rolls it creates share your choice of presenter. You can still pass a different presenter to any `present()` call.

::: tip String conversion
Use `present()` for your chosen output. `toString()`, `String(roll)` and template literals always use the default text presenter.
:::

## First-party presenters

### Text presenter

The text presenter is included with the library and used automatically. You do not need to import or create a `TextPresenter` unless you want to customise it.

It displays the notation, individual dice values, modifier markers and total:

```text
4d6kh3: [1d, 4, 5, 6] = 15
```

When creating your own instance, you can change these options:

| Option | Default | What it changes |
| --- | --- | --- |
| `flagSymbols` | Built-in modifier markers, such as `d` for dropped dice. | Replace individual markers, or use `''` to hide one. |
| `separator` | `'; '` | The text between rolls when displaying a history. |

Markers you do not override keep their defaults. The full set is available as `presenters.DEFAULT_FLAG_SYMBOLS`.

See [Changing the output](#changing-the-output) for examples, or the [TextPresenter API](../../api/rpg-dice-roller/namespaces/presenters/classes/TextPresenter.md) for more detail.

### SVG presenter

The SVG presenter will display rolls as scalable dice graphics. It is being developed in the separate [Dice Roller Presenters](https://github.com/dice-roller/presenters) project.

It uses the same roll results as the text presenter, so you can show a roll as text or graphics without rolling again.

::: info In development
The SVG presenter is not yet published. Installation instructions and usage examples will be added here when it is available.
:::

## Writing your own presenter

If the available presenters do not give you the output you need, you can write your own.

A presenter can be a plain object or a class. It just needs a `present(target)` method that returns the output you want.

### Start with a simple format

This presenter displays only the total:

```javascript
const totalPresenter = {
  present(target) {
    if (presenters.isRollHistory(target)) {
      return `Combined total: ${target.total}`;
    }

    if (presenters.isRoll(target)) {
      return `Total: ${target.total}`;
    }

    return `Value: ${target.value}`;
  },
};

const roll = new Roll('2d6+3');

console.log(roll.present(totalPresenter));
// e.g. Total: 9
```

The method can receive three kinds of input:

| Input | When it is used |
| --- | --- |
| A `Roll` | When you call `roll.present(presenter)`. |
| A `RollHistory` | When you call `roller.present(presenter)`. |
| An evaluated expression result | When you pass a result directly to `presenter.present(result)`. |

The `isRollHistory()` and `isRoll()` helpers let the example handle each kind. After those checks, the remaining input is an expression result, whose calculated value is `value`.

You can use your presenter in the [roll options](#reuse-your-choice) too. Its output can be a string, a DOM element or another type that suits your application.

For TypeScript, the library exports `Presenter<T>` and `Presentable` types. Use `Presenter<string>` for a presenter that returns text; `Presentable` covers the three inputs above.

### Change part of the text output

For small changes, check the [text presenter options](#text-presenter) first. To change more of the format, extend `TextPresenter` and replace the method for the part you want to display differently.

This TypeScript example adds the die notation before each value:

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

Calling `super.die()` keeps the usual value and modifier markers, then the new method adds a label.

### Build a different format

For a format that lays out individual dice, groups and maths differently, use `presenters.TreePresenter<T>` as a starting point.

It provides `present()` and selects the method for each kind of result. Your subclass implements these methods:

| Method | What to display |
| --- | --- |
| `history(history)` | The rolls in a history. |
| `roll(roll)` | A complete roll, including its notation and total. |
| `number(result)` | A number in the notation. |
| `pool(result)` | A set of dice, such as `2d6`. |
| `die(result, pool)` | One die in that set. |
| `group(result)` | A roll group. |
| `binary(result)` | An operation such as addition or multiplication. |
| `unary(result)` | An operation such as negation. |
| `paren(result)` | A parenthesised expression. |
| `fn(result)` | A maths function. |

Call `this.visit(childResult)` to format a nested expression. For example, `roll()` would usually include `this.visit(roll.result)` alongside the notation and total. In `pool()`, call `this.die(dieResult, poolResult)` for each die; this step is not automatic.

Use the stored results and totals when formatting output. Modifier flags describe effects such as exploding or dropping, and scoring can differ from the value shown on a die. A dropped group member also excludes its nested dice from the final total.

See the [TreePresenter API](../../api/rpg-dice-roller/namespaces/presenters/classes/TreePresenter.md) and [result types](../../api/rpg-dice-roller/namespaces/results/index.md) when building a presenter that needs this detail.

For example, this presenter returns a list of the dice rolled, leaving out the maths and numeric literals:

```javascript
import { Roll, presenters } from '@dice-roller/rpg-dice-roller';

class DiceListPresenter extends presenters.TreePresenter {
  history(history) {
    // Call roll() directly for each roll in the history.
    return history.rolls.flatMap((roll) => this.roll(roll));
  }

  roll(roll) {
    // Visit the top-level expression: binary() for the multiplication in '(2d6+3)*2'.
    return this.visit(roll.result);
  }

  pool(result) {
    // Call die() directly for each die; visit() does not dispatch individual dice.
    return result.rolls.flatMap((die) => this.die(die, result));
  }

  die(result, pool) {
    return [`d${pool.die.notation}: ${result.value}`];
  }

  binary(result) {
    // Visit both operands, selecting a method from each operand's result type.
    // For '(2d6+3)*2': paren() on the left, number() on the right.
    // For '2d6+3': pool() on the left, number() on the right.
    return [...this.visit(result.left), ...this.visit(result.right)];
  }

  group(result) {
    // Visit each member's expression: e.g. pool() for a member containing '2d6'.
    return result.members.flatMap((member) => this.visit(member.result));
  }

  unary(result) {
    // Visit the operand: e.g. pool() for the dice in '-2d6'.
    return this.visit(result.operand);
  }

  paren(result) {
    // Visit the expression inside parentheses: binary() for '2d6+3' in this example.
    return this.visit(result.inner);
  }

  fn(result) {
    // Visit each function argument: e.g. pool() then number() for 'max(2d6, 3)'.
    return result.args.flatMap((arg) => this.visit(arg));
  }

  number() { return []; }
}

const roll = new Roll('(2d6+3)*2');

console.log(roll.present(new DiceListPresenter()));
// e.g. ['d6: 4', 'd6: 2']
```

Here, `roll()` starts with `visit(roll.result)`. Each call to `visit()` selects the method for that result: `binary()` visits both sides of an operation, and `paren()` visits the expression inside the parentheses. When it reaches a pool, `pool()` formats its dice using `die()`.

Every method returns an array of labels. `number()` returns an empty array because this presenter only lists dice. It includes all dice, including any dropped by modifiers; it does not calculate a new total.
