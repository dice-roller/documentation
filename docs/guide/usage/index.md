---
sidebarDepth: 1
---

# Rolling dice

Use `Roll` to roll a dice notation and work with its results.

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const roll = new Roll('4d6kh3');

console.log(roll.total);
// e.g. 14

console.log(roll.present());
// e.g. 4d6kh3: [3d, 5, 6, 3] = 14
```

== CommonJS

```javascript
const { Roll } = require('@dice-roller/rpg-dice-roller');

const roll = new Roll('4d6kh3');

console.log(roll.total);
// e.g. 14

console.log(roll.present());
// e.g. 4d6kh3: [3d, 5, 6, 3] = 14
```

== Browser

```javascript
const { Roll } = rpgDiceRoller;

const roll = new Roll('4d6kh3');

console.log(roll.total);
// e.g. 14

console.log(roll.present());
// e.g. 4d6kh3: [3d, 5, 6, 3] = 14
```

:::

Creating a `Roll` parses the notation, rolls the dice and applies any modifiers immediately.

The resulting object contains the total and individual results. Calling [`present()`](../customisation/presenters.md) formats the roll for display; it does not roll the dice again.

See [Getting started](../getting-started.md) for installation and browser setup. The Browser (UMD) examples assume the bundle has already been loaded. Browser applications using ES modules can follow the ESM examples with the appropriate import path.

## Using dice notation

Pass a [dice notation](../notation/index.md) string to describe what you want to roll:

```javascript
const attack = new Roll('d20+5');
const damage = new Roll('2d6+3');
const ability = new Roll('4d6kh3');
```

Each `Roll` is independent. Creating another object makes another roll.

Notation can include different [dice types](../notation/dice.md), [modifiers](../notation/modifiers.md), [roll groups](../notation/roll-groups.md), [descriptions](../notation/roll-descriptions.md) and [maths](../notation/maths.md).

### The roll() shorthand

If you prefer a function call, use `roll()`:

:::tabs key:module-type variant:code

== ESM

```javascript
import { roll } from '@dice-roller/rpg-dice-roller';

const attack = roll('d20+5');

console.log(attack.total);
```

== CommonJS

```javascript
const { roll } = require('@dice-roller/rpg-dice-roller');

const attack = roll('d20+5');

console.log(attack.total);
```

== Browser

```javascript
const { roll } = rpgDiceRoller;

const attack = roll('d20+5');

console.log(attack.total);
```

:::

This creates and returns a `Roll` object, just like `new Roll()`.

## Re-rolling

Call `reroll()` to roll the same notation again:

```javascript
const first = new Roll('2d6+3');
const second = first.reroll();

console.log(first.total);
console.log(second.total);
```

This returns a new `Roll` using the same settings. The original roll and its results are unchanged.

Re-rolling generates fresh results, although the values may happen to be the same.

## Rolling with a history

Use `Roller` when you want to keep a history of rolls:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Roller } = require('@dice-roller/rpg-dice-roller');
```

== Browser

```javascript
const { Roller } = rpgDiceRoller;
```

:::

Create a roller and use its `roll()` method:

```javascript
const roller = new Roller();

const attack = roller.roll('d20+5');
const damage = roller.roll('2d6+3');

console.log(attack.total);
console.log(damage.total);

console.log(roller.history.length);
// 2
```

Each call to `roller.roll()` returns a `Roll` and adds it to that roller's history.

Use `Roll` or the `roll()` shorthand for independent rolls, and `Roller` when your application needs to collect rolls and share settings between them.

See [Roll history](index.md) for retrieving, displaying and managing previous rolls.

::: tip Re-rolling and history
Calling `reroll()` on a `Roll` does not automatically add the new roll to a history, even if the original came from a `Roller`.

To roll the same notation and record it in the roller's history, use:

```javascript
const nextAttack = roller.roll(attack.notation);
```
:::

## Roll options

Pass an options object as the second argument to `Roll` or the `roll()` shorthand. For `Roller`, pass options to its constructor; they apply to every roll made through that roller:

:::tabs key:roll-options variant:code

== Roll

```javascript
const result = new Roll('4d6', {
  limits: {
    maxQty: 100,
  },
});
```

== roll()

```javascript
const result = roll('4d6', {
  limits: {
    maxQty: 100,
  },
});
```

== Roller

```javascript
const roller = new Roller({
  limits: {
    maxQty: 100,
  },
});

const result = roller.roll('4d6');
```

:::

All options are optional:

| Option | Purpose |
| --- | --- |
| `engine` | [Choose the source of randomness](../customisation/random-number-generator.md). |
| `dice` | [Supply a registry of dice definitions](../customisation/dice.md). |
| `modifiers` | [Supply a registry of modifier handlers](../customisation/modifiers.md). |
| `presenter` | [Choose how `present()` formats results](../customisation/presenters.md). |
| `limits` | [Set limits](#roll-limits) on dice quantities and repeating modifiers. |

The built-in dice, modifiers and text presenter are used unless you supply alternatives. Follow the links above to learn how to customise each option.

### Roll limits

The default limits are:

| Setting | Default | Purpose |
| --- | --- | --- |
| `maxQty` | `999` | Maximum number of dice in each set. |
| `maxIterations` | `1000` | Maximum repetitions per die for repeating modifiers. |

You can override either limit when creating a roll or roller:

:::tabs key:roll-options variant:code

== Roll

```javascript
const result = new Roll('4d6', {
  limits: {
    maxQty: 100,
    maxIterations: 200,
  },
});
```

== roll()

```javascript
const result = roll('4d6', {
  limits: {
    maxQty: 100,
    maxIterations: 200,
  },
});
```

== Roller

```javascript
const roller = new Roller({
  limits: {
    maxQty: 100,
    maxIterations: 200,
  },
});

const result = roller.roll('4d6');
```

:::

Both values must be positive safe integers.

`maxQty` applies separately to each set of dice, rather than to the entire expression. For example, a limit of `100` permits `100d6+100d8`.

`maxIterations` limits [Explode](../notation/modifiers.md#explode), [Re-roll](../notation/modifiers.md#re-roll) and [Unique](../notation/modifiers.md#unique). It also applies to [Compound](../notation/modifiers.md#compound) and [Penetrate](../notation/modifiers.md#penetrate).

## Handling errors

Invalid notation, invalid options or expressions that cannot be evaluated throw an error.

If your application accepts notation from users, handle these errors so you can explain the problem.

Load `Roll` and the `errors` namespace:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roll, errors } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Roll, errors } = require('@dice-roller/rpg-dice-roller');
```

== Browser

```javascript
const { Roll, errors } = rpgDiceRoller;
```

:::

Then catch errors when rolling:

```javascript
try {
  const roll = new Roll('2d6 +');

  console.log(roll.present());
} catch (error) {
  if (error instanceof errors.DiceRollerError) {
    console.error(error.message);
  } else {
    throw error;
  }
}
```

Errors raised by the library inherit from `DiceRollerError`. For rolling, the main error types are:

| Error | Meaning |
| --- | --- |
| `ValidationError` | An input or option is invalid, such as an empty notation or an invalid limit. |
| `NotationError` | The notation cannot be parsed. |
| `EvaluationError` | The parsed expression cannot be evaluated. |

If `roller.roll()` fails, no roll is added to its history.

## Next steps

* [Working with results](index.md) — inspect dice results, read totals and format output.
* [Roll history](index.md) — collect and manage rolls.
* [Importing and exporting](index.md) — save rolls and restore them later.
