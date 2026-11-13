# Custom dice

RPG Dice Roller includes [standard](../notation/dice.md#standard), [percentile](../notation/dice.md#percentile-dice), [Fudge / Fate](../notation/dice.md#fudge-fate-dice), [range](../notation/dice.md#range-dice) and [face](../notation/dice.md#face-dice) dice, so you can roll them without any extra setup.

You can also change how existing dice behave or create your own dice. **You only need to do this if the built-in dice and notation don't already cover what you want.**

## Custom faces and ranges

For dice with particular faces or a range of values, you can usually define them directly in the [dice notation](../notation/dice.md), without writing any code to customise the library:

```javascript
// A die with values from 0 to 5
const range = new Roll('2d{0...5}');

// A die with custom faces
const faces = new Roll('3d{1,1,2,3}');
```

Each face in a face die has an equal chance of being selected, so repeating a value makes it more likely. In the second example, `1` is twice as likely as `2` or `3`.

For dice that need different rolling behaviour, use a [die registry](#changing-existing-dice) instead.

## Changing existing dice

A `DieRegistry` holds the definitions used to create dice. The library sets one up with the built-in dice automatically, so you don't need to create a registry unless you want to change something.

To customise dice, import the `dice` namespace alongside `Roll` or `Roller`:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roll, Roller, ast, dice } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Roll, Roller, ast, dice } = require('@dice-roller/rpg-dice-roller');
```

== Browser

```javascript
const { Roll, Roller, ast, dice } = rpgDiceRoller;
```

:::

### Replace a built-in die

Create a registry, then use `register()` to replace a built-in definition. For example, you can make six-sided dice more likely to roll a `6`:

```javascript
const customDice = new dice.DieRegistry();

customDice.register('standard', (sides) => {
  if (sides === 6) {
    // Two faces show 6, making it more likely.
    return dice.faceDie([1, 2, 3, 4, 5, 6, 6], { notation: '6' });
  }

  // Other standard dice work as usual.
  return dice.standardDie(sides);
});

const roll = new Roll('4d6', { dice: customDice });
```

`4d6` now uses the weighted die. Other standard dice, such as `d20`, behave as before because the factory falls back to `standardDie()`.

The registry recognises these built-in factory names:

| Name | Used by |
| --- | --- |
| `standard` | `d6`, `d20` and other numbered dice |
| `percentile` | `d%` |
| `fudge` | `dF`, `dF.1` and `dF.2` |
| `range` | Range notation such as `d{0...5}` |
| `face` | Face notation such as `d{1,1,2}` |

### Share the registry between rolls

Pass the registry as the `dice` option when creating a `Roll` or `Roller`. A roller shares that registry with all the rolls it creates:

```javascript
// Reuse the customDice registry from the example above.
const roller = new Roller({ dice: customDice });

const first = roller.roll('4d6');
const second = roller.roll('2d6+3');
```

Only rolls using this registry are affected. Other rolls still use the built-in dice, and you can use different registries for different games.

## Writing your own dice

You can also define a die as a plain JavaScript object or a class. A die needs either a `min` and `max`, or an array of `faces`. The library can then roll it using its normal random number generator.

::: warning Custom dice don't add new notation
The notation parser only recognises the built-in dice syntax. Registering a die under a new name, such as `advantage`, **doesn't make `dadvantage` valid notation**.

**If you want to roll using notation strings**, register your die under an [existing factory name](#replace-a-built-in-die), such as `standard` for `d6`. To use a new factory name, you must construct the roll using the [AST builders](../../api/rpg-dice-roller/namespaces/ast/index.md) instead.

The die's `notation` property changes its display label; it doesn't add syntax to the parser.
:::

For more control, provide your own `roll(generator)` method. For example, this die rolls two six-sided dice and uses the higher value:

```javascript
const advantageDie = {
  min: 1,
  max: 6,
  average: 161 / 36,
  notation: 'adv',

  roll(generator) {
    return Math.max(
      generator.integer(1, 6),
      generator.integer(1, 6),
    );
  },
};
```

The `generator` is the same number generator configured for the roll. Using it rather than `Math.random()` directly means your die also works with [custom and seeded random engines](random-number-generator.md).

The optional `average` gives the expected value of the die. Here it differs from the midpoint of `1` and `6` because taking the higher of two rolls favours larger values. You can also provide `faceCount` and `notation` when needed.

### Register and roll your die

How you register your die depends on whether you want to use a notation string or an AST.

#### Use your die with notation

Register it under a built-in name to keep using ordinary notation. For example, this replaces `d6` with the advantage die defined above:

```javascript
const customDice = new dice.DieRegistry();

customDice.register('standard', (sides) =>
  sides === 6 ? advantageDie : dice.standardDie(sides)
);

const roll = new Roll('2d6', { dice: customDice });
```

Only six-sided dice are replaced. Other numbered dice continue to work as normal.

#### Use a custom name with an AST

If you want a separate die type rather than replacing an existing one, register it with your own name and use the AST builders:

```javascript
const customDice = new dice.DieRegistry();

customDice.register('advantage', () => advantageDie);

// Roll two advantage dice.
const expression = ast.pool(2, ast.die('advantage'));
const roll = new Roll(expression, { dice: customDice });

console.log(roll.total);
```

The `pool()` builder sets the quantity, and `die()` refers to the factory registered as `advantage`. You can also pass the expression to `roller.roll()` if your `Roller` uses the same registry.

### Die properties

These are the main properties you can provide:

| Property | Purpose |
| --- | --- |
| `min` and `max` | The lowest and highest values the die can roll. |
| `faces` | A list of possible values, including repeated values for weighting. |
| `roll(generator)` | Optional method for generating a result yourself. |
| `average` | Optional expected value, useful for a custom distribution. |
| `faceCount` | Optional number of faces. |
| `notation` | Optional display label for the die (not new parser syntax). |

Without a custom `roll()` method, the library rolls a whole number within the minimum and maximum bounds, or picks a value from `faces`. A custom method must return a finite number. See the [dice API](../../api/rpg-dice-roller/namespaces/dice/index.md) for the full definitions.

::: warning Re-rolling imported custom dice
Imported rolls keep their original results, but re-rolling creates the dice again. Roll data stores a factory's name and arguments, **not its implementation**.

When importing a roll that uses custom dice, provide the same die registry (or equivalent definitions) if you intend to re-roll it. Otherwise, a custom factory name may not be found, or a replaced built-in die may silently revert to its default behaviour.
:::

## More information

See the [DieRegistry API](../../api/rpg-dice-roller/namespaces/dice/classes/DieRegistry.md) for registering and managing dice, or the [dice namespace](../../api/rpg-dice-roller/namespaces/dice/index.md) for the built-in factories and types.
