# Roll history

A `Roller` keeps the rolls it makes in a `RollHistory`, so you can access earlier results and their combined total. Use a standalone [`Roll`](index.md) if you don't need to keep a history.

## Creating a history

Create a `Roller` and call `roller.roll()`:

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

console.log(attack.total);
console.log(damage.total);
console.log(roller.history.length); // 2
```

Each successful call adds the resulting `Roll` to `roller.history`. A failed roll isn't added.

## Reading the history

`roller.history.rolls` is a copy of the rolls, ordered from oldest to newest. `roller.history.total` is the sum of their totals (or `0` for an empty history):

```javascript
const savedRolls = roller.history.rolls;

console.log(savedRolls[0].notation); // 'd20+5'
console.log(roller.history.total);

for (const roll of roller.history) {
  console.log(roll.present());
}
```

You can also present the entire history with `roller.present()`.

## Adding and clearing rolls

You can manually append a completed roll with `roller.history.add()`, or clear the whole history with `roller.history.clear()`:

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

roller.history.add(new Roll('d8'));
console.log(roller.history.length); // 3

roller.history.clear();
console.log(roller.history.length); // 0
```

::: tip Re-rolling and history
Calling `reroll()` on a `Roll` does **not** automatically add its new result to the original `Roller`'s history.

To roll the same notation using the roller's settings and record it, use:

```javascript
const nextAttack = roller.roll(attack.notation);
```
:::

## Asynchronous rolls

With an [asynchronous external dice source](../customisation/external-dice.md), `roller.roll()` returns a `Promise<Roll>` and adds the roll only after it completes. If you start several rolls concurrently, they enter the history in **completion order**, not necessarily the order in which they were started.

For saving or restoring a history, see [Importing and exporting](importing-and-exporting.md).
