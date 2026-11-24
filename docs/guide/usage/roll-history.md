# Roll history

Use a `Roller` to make a series of rolls and keep their results together. Each roller has its own `RollHistory`, which you can use to access previous rolls, calculate their combined total and display them together.

If you only need an individual roll, you can use [`Roll` or the `roll()` shorthand](index.md) instead.

## Creating a history

Create a `Roller` and call its `roll()` method whenever you want to make a roll:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller();
```

== CommonJS

```javascript
const { Roller } = require('@dice-roller/rpg-dice-roller');

const roller = new Roller();
```

== Browser (UMD)

```javascript
const { Roller } = rpgDiceRoller;

const roller = new Roller();
```

:::

```javascript
const attack = roller.roll('d20+5');
const damage = roller.roll('2d6+3');

console.log(attack.total); // e.g. 18
console.log(damage.total); // e.g. 11
```

Each successful call returns a `Roll` and automatically adds it to the roller's history. You can continue working with those individual rolls as described in [Working with results](working-with-results.md).

The roller's history is available through its `history` property:

```javascript
const history = roller.history;

console.log(history.length); // 2
```

You don't need to create or maintain the history yourself when using a `Roller`. Its [settings](roll-options.md) are also shared across the rolls it makes.

## Reading the history

The `RollHistory` object has three properties for accessing its contents:

| Property | Description |
| --- | --- |
| `rolls` | An array containing the completed `Roll` objects, in the order they were added. |
| `length` | The number of rolls in the history. |
| `total` | The sum of the individual roll totals. |

### Accessing previous rolls

Use `history.rolls` to access individual rolls by index or work with them as an array:

```javascript
const rolls = roller.history.rolls;

const first = rolls[0];
const latest = rolls[rolls.length - 1];

console.log(first.notation);  // 'd20+5'
console.log(latest.notation); // '2d6+3'
console.log(first === attack); // true
```

If the history is empty, the array is empty and there is no first or latest roll.

`history.rolls` returns a **shallow copy** of the array each time you access it. The entries are the original `Roll` objects, not copies of those objects.

Changing the array doesn't change the history. For example, removing an entry from the returned array won't remove it from the roller's history. Likewise, an array retrieved earlier won't contain rolls added afterwards.

### Iterating over rolls

`RollHistory` is iterable, so you can loop over it directly without accessing the `rolls` property:

```javascript
for (const roll of roller.history) {
  console.log(roll.notation, roll.total);
}
```

Iteration uses a snapshot of the history taken when the iterator is created. Any rolls added during that iteration won't appear until you iterate again.

Use the `rolls` array if you want to use array methods such as `map()`, `filter()` or `find()`:

```javascript
const totals = roller.history.rolls.map(roll => roll.total);
const highRolls = roller.history.rolls.filter(roll => roll.total >= 15);

console.log(totals); // e.g. [18, 11]
```

### Combined total

The `total` property adds the totals of every roll in the history:

```javascript
console.log(roller.history.total); // e.g. 29 (18 + 11)
```

This uses each `Roll`'s final total, including the effects of its modifiers and maths. It doesn't combine their notation into a single expression or roll the dice again. No additional rounding is applied to the sum.

An empty history has a total of `0`. If a roll has a non-finite total (such as `Infinity` or `NaN`), the combined total follows normal JavaScript addition rules.

## Displaying the history

Call `roller.present()` to format the entire history using the roller's configured [presenter](../customisation/presenters.md):

```javascript
console.log(roller.present());
// e.g. d20+5: [13]+5 = 18; 2d6+3: [3, 5]+3 = 11
```

The default text presenter separates each completed roll with a semicolon and a space. An empty history produces an empty string.

You can also call `roller.history.present()` directly. Unlike `roller.present()`, this uses the built-in text presenter by default, rather than the presenter configured on the roller. Both methods accept a presenter as an optional argument.

```javascript
console.log(roller.history.present());
console.log(String(roller));
console.log(String(roller.history));
```

Converting either the roller or its history to a string always uses the built-in text presenter. See [Presenters](../customisation/presenters.md) for changing the output.

## Adding rolls

You can add existing `Roll` objects to a history using `add()`. This is useful when you already have completed rolls from elsewhere in your application.

```javascript
import { Roll, Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller();

const attack = new Roll('d20+5');
const damage = new Roll('2d6+3');

roller.history.add(attack, damage);

console.log(roller.history.length); // 2
```

The method accepts one or more completed rolls and appends them in the order supplied. It doesn't accept notation strings as a way to make rolls, and it doesn't roll the dice again.

The rolls retain their original settings, and adding the same roll more than once creates multiple history entries. Each entry contributes to the combined total.

::: tip Rolls made by a Roller
You don't need to call `add()` for a roll returned by `roller.roll()`. The roller has already recorded it, so adding it manually would count it twice.
:::

### Adding re-rolls

Calling `reroll()` on a `Roll` returns a new roll but doesn't automatically record it, even when the original roll came from a `Roller`.

```javascript
const roller = new Roller();
const first = roller.roll('2d6+3');

const second = first.reroll();

console.log(roller.history.length); // 1

roller.history.add(second);

console.log(roller.history.length); // 2
```

This lets you re-roll using the original roll's settings and variable data, then decide whether to keep the new result in the history.

Alternatively, call `roller.roll(first.notation)` to make and record another roll using the roller's current defaults. Those defaults may differ from the settings of the original roll if it used per-roll overrides.

When re-rolling with an asynchronous dice source, await the new roll before adding it.

## Clearing the history

Call `clear()` to remove all entries:

```javascript
const roller = new Roller();
const attack = roller.roll('d20+5');

roller.history.clear();

console.log(roller.history.length); // 0
console.log(roller.history.total);  // 0

console.log(attack.total); // The original roll is still available
```

Clearing the history doesn't change the roller's settings, reset its random engine or alter the completed rolls themselves. You can continue using the same roller, and new rolls will be added to its now-empty history.

There is no method to remove or replace an individual history entry. If you want to retain only certain rolls, you can select them from `history.rolls`, clear the history and add them back:

```javascript
const retained = roller.history.rolls.filter(roll => roll.total >= 10);

roller.history.clear();
roller.history.add(...retained);
```

## Asynchronous rolls

When using an [asynchronous external dice source](../customisation/external-dice.md), `roller.roll()` returns a promise. The roll is added to the history only when it completes successfully.

```javascript
const roller = new Roller({
  drawDie: {
    drawMode: 'async',
    callback: async ({ max }) => max,
  },
});

const pending = roller.roll('d6');

console.log(roller.history.length); // 0

const result = await pending;

console.log(roller.history.length); // 1
console.log(roller.history.total);  // 6
```

The callback simply returns the die's highest face to demonstrate the behaviour.

If several asynchronous rolls are running concurrently, they are recorded in **completion order**, not the order in which you started them. To maintain a particular order, await each roll before starting the next:

```javascript
await roller.roll('d20+5');
await roller.roll('2d6+3');
```

A failed roll isn't added to the history, whether it throws synchronously or rejects asynchronously.

::: warning Clearing while rolls are pending
Clearing a history doesn't cancel any rolls that are still in progress. If a pending roll subsequently completes successfully, the roller adds it to the history as usual.
:::

## Using a history without a Roller

You can also create a `RollHistory` directly if you want to manage a collection of completed rolls independently of a `Roller`:

```javascript
import { Roll, RollHistory } from '@dice-roller/rpg-dice-roller';

const history = new RollHistory();

history.add(new Roll('d8'), new Roll('2d6'));

console.log(history.length); // 2
console.log(history.total);
```

A standalone history doesn't make rolls or configure how they are evaluated. It provides the same methods and properties for storing, reading, presenting and clearing completed rolls. Add each roll explicitly.

## Saving and restoring a history

Use `roller.export()` to save the history and `roller.import()` to restore saved results without rolling again. Importing appends the restored rolls to the existing history rather than replacing it.

For example:

```javascript
const original = new Roller();
original.roll('d20+5');
original.roll('2d6+3');

const saved = original.export();

const restored = new Roller();
restored.import(saved);

console.log(restored.history.length); // 2
console.log(restored.history.total === original.history.total); // true
```

A `RollHistory` also provides `toJSON()` to obtain its JSON-safe export object, including when used with `JSON.stringify()`.

See [Importing and exporting](importing-and-exporting.md) for supported formats, validation and restoring rolls with custom settings.
