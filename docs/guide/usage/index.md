# Rolling dice

RPG Dice Roller turns a [dice notation](../notation/index.md) string into a completed `Roll` object, containing the rolled results and their total.

## Make a roll

Create a `Roll` with the notation you want to roll:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const result = new Roll('4d6kh3');

console.log(result.total);     // e.g. 14
console.log(result.present()); // e.g. 4d6kh3: [3d, 5, 6, 3] = 14
```

== CommonJS

```javascript
const { Roll } = require('@dice-roller/rpg-dice-roller');

const result = new Roll('4d6kh3');

console.log(result.total);     // e.g. 14
console.log(result.present()); // e.g. 4d6kh3: [3d, 5, 6, 3] = 14
```

== Browser (UMD)

```javascript
const { Roll } = rpgDiceRoller;

const result = new Roll('4d6kh3');

console.log(result.total);     // e.g. 14
console.log(result.present()); // e.g. 4d6kh3: [3d, 5, 6, 3] = 14
```

:::

`new Roll()` parses the notation, rolls the dice and applies modifiers **immediately**. `result.total` is the final numeric total, while `result.present()` formats the result for display without rolling again.

The examples assume you've [installed and loaded the library](../getting-started.md). In a browser, the UMD example assumes the bundle has already been loaded; browser projects using ES modules can use the ESM form.

## Using dice notation

Pass different notation strings for different kinds of rolls:

```javascript
const attack = new Roll('d20+5');
const damage = new Roll('2d6+3');
const ability = new Roll('4d6kh3');
```

Each constructor call creates an independent roll with new results, even if the notation is the same.

Notation supports [dice types](../notation/dice.md), [modifiers](../notation/modifiers.md), [roll groups](../notation/roll-groups.md), [maths](../notation/maths.md), [variables](../notation/variables.md) and more. See the [notation guide](../notation/index.md) to learn what you can roll.

Use the [dice playground](tools:playground) to try different notation strings and inspect their roll results without changing your application code.

### The roll() shorthand

Use the exported `roll()` function if you prefer a function call:

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

== Browser (UMD)

```javascript
const { roll } = rpgDiceRoller;

const attack = roll('d20+5');
console.log(attack.total);
```

:::

With the default random-number generator, `roll()` returns a completed `Roll` just like `new Roll()`. The difference matters when using an [asynchronous external dice source](#synchronous-and-asynchronous-rolls).

## Re-rolling

Call `reroll()` on a `Roll` to roll its original notation again:

```javascript
const first = new Roll('2d6+3');
const second = first.reroll();

console.log(first.total);
console.log(second.total);
```

`reroll()` returns a **new** `Roll`; it doesn't replace or change the original. The dice are rolled again, although they may coincidentally produce the same values.

The new roll reuses the original roll's settings and variable data by default. You can override the [random engine](../customisation/random-number-generator.md#changing-engines-for-individual-rolls) or [variable data](roll-options.md#variable-data) for that re-roll. With an asynchronous dice source, `reroll()` returns a promise instead.

## Keeping a roll history

Use a `Roller` when you want to collect rolls and reuse configuration between them:

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller();

const attack = roller.roll('d20+5');
const damage = roller.roll('2d6+3');

console.log(attack.total);
console.log(damage.total);
console.log(roller.history.length); // 2
```

`roller.roll()` returns a `Roll` and adds it to the roller's history when it succeeds. A standalone `Roll` or `roll()` call doesn't keep a history.

See [Roll history](roll-history.md) for reading, iterating, adding and clearing previous rolls. Calling `reroll()` on a roll from a history doesn't automatically add the new roll to that history.

## Synchronous and asynchronous rolls

Ordinary rolls are synchronous, so there's no need to use `await`:

```javascript
const result = new Roll('d6');
console.log(result.total);
```

You can also supply finished die values from an [external dice source](../customisation/external-dice.md). If that source is asynchronous, use `Roll.create()`, `roll()` or `roller.roll()` instead of `new Roll()`:

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const result = await Roll.create('d6', {
  drawDie: {
    drawMode: 'async',
    callback: async ({ max }) => max,
  },
});

console.log(result.total); // 6
```

The callback above simply returns the die's highest face to demonstrate the API; a real callback might wait for an external service or a 3D dice roller.

`Roll.create()`, `roll()` and `roller.roll()` return a `Roll` for synchronous sources and a `Promise<Roll>` for asynchronous ones. Even an immediately resolved asynchronous callback still produces a promise. `new Roll()` only supports synchronous sources and throws a `ValidationError` if configured with an asynchronous one.

For callback arguments, validation and overrides, see [External dice sources](../customisation/external-dice.md).

## Working with the result

Every completed `Roll` provides the original `notation`, the numeric `total`, and an evaluated `result` tree containing the underlying dice results:

```javascript
const result = new Roll('2d6+3');

console.log(result.notation); // '2d6+3'
console.log(result.total);    // e.g. 11
console.log(result.present()); // e.g. 2d6+3: [3, 5]+3 = 11
```

See [Working with results](working-with-results.md) to inspect the evaluated expression and its dice, or [Presenters](../customisation/presenters.md) to control the displayed format.

## Next steps

* [Parsing and building expressions](parsing-and-building-expressions.md) — parse notation without rolling or construct expressions programmatically.
* [Working with results](working-with-results.md) — inspect results and display rolls.
* [Roll history](roll-history.md) — keep and manage previous rolls.
* [Configuring rolls](roll-options.md) — choose engines, custom dice, modifiers, limits and variable data.
* [Handling errors](handling-errors.md) — catch invalid notation and evaluation failures.
* [Importing and exporting](importing-and-exporting.md) — save rolls and restore them later.
