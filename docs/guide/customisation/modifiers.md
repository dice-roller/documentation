# Modifiers

Modifiers change how dice results are handled. For example, you can [keep the highest dice](../notation/modifiers.md#keep), [re-roll](../notation/modifiers.md#re-roll) certain results or [explode](../notation/modifiers.md#explode) a die when it rolls its maximum value.

All of the built-in modifiers work automatically when you use them in [dice notation](../notation/modifiers.md):

```javascript
const roll = new Roll('4d6kh3');
```

**You only need to customise modifiers if you want to change how they behave.** For example, a game might apply modifiers in a different order, or have special rules for which dice can explode.

## Modifier execution order

Modifiers run in a defined order, **regardless of the order you write them in**. This matters because one modifier can affect the results another modifier receives.

Each modifier has a handler with an `order` property. Handlers run from the lowest order to the highest:

| Modifier | Default order |
| --- | ---: |
| [Min](../notation/modifiers.md#min) | 1 |
| [Max](../notation/modifiers.md#max) | 2 |
| [Explode](../notation/modifiers.md#explode) | 3 |
| [Re-roll](../notation/modifiers.md#re-roll) | 4 |
| [Unique](../notation/modifiers.md#unique) | 5 |
| [Keep](../notation/modifiers.md#keep) | 6 |
| [Drop](../notation/modifiers.md#drop) | 7 |
| [Target success / failure](../notation/modifiers.md#target-success-dice-pool) | 8 |
| [Critical success](../notation/modifiers.md#critical-success) | 9 |
| [Critical failure](../notation/modifiers.md#critical-failure) | 10 |
| [Sort](../notation/modifiers.md#sort) | 11 |

For example, `4d6kh3!` and `4d6!kh3` use the same execution order: Explode runs before Keep.

If two handlers have the same `order`, they run in the order their modifiers appear in the notation.

## Changing the execution order

You can change the order using a `ModifierRegistry`. The library provides a registry with all the built-in modifier handlers automatically, so you don't need to create one unless you want to customise something.

First, import the `modifiers` namespace along with the roll classes:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roll, Roller, modifiers, results } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Roll, Roller, modifiers, results } = require('@dice-roller/rpg-dice-roller');
```

== Browser

```javascript
const { Roll, Roller, modifiers, results } = rpgDiceRoller;
```

:::

To change a modifier's order, register a copy of its built-in handler with a different `order`. For example, to run Keep before Explode:

```javascript
const customModifiers = new modifiers.ModifierRegistry().register({
  ...modifiers.keepHandler,
  order: 2,
});

const roll = new Roll('8d4kh4!', {
  modifiers: customModifiers,
});
```

Keep normally has an order of `6`, while Explode has an order of `3`. Changing Keep to `2` makes it run first.

The spread (`...modifiers.keepHandler`) copies the existing handler's behaviour, so you only need to specify what you want to change.

::: warning Changing the order can change the results
The default order is intentional. Changing it can affect how other modifiers work together.

In the example above, Keep runs first, but **Explode can still roll additional dice for dropped results**. Changing execution order alone does not necessarily implement a game's full rules. See [Keep before Explode](#keep-before-explode) for an example that also changes this behaviour.
:::

### Reuse the order across rolls

To use the same changes for multiple rolls, pass the registry to a `Roller`:

```javascript
// Reuse the customModifiers registry from above.
const roller = new Roller({ modifiers: customModifiers });

roller.roll('8d4kh4!');
roller.roll('4d6kh3!');
```

The roller and all rolls it creates share the registry. You can also pass it to the [`roll()` shorthand](../usage/index.md#the-roll-shorthand).

These changes are **not global**. Rolls created without your registry still use the default modifier behaviour, so different games can use different rules.

## Changing modifier behaviour

A modifier handler does more than define execution order: it decides what happens to the dice or group members it receives.

You can replace an existing handler by registering another one with the same name. This lets you change how a modifier works while continuing to use its usual notation.

### Adapt an existing handler

Suppose you want the [Sort](../notation/modifiers.md#sort) modifier to put dropped dice at the end, rather than sorting them alongside the included dice.

You can reuse the built-in sorting behaviour and then move excluded results to the end:

```javascript
const customModifiers = new modifiers.ModifierRegistry().register({
  ...modifiers.sortHandler,

  apply(items, input) {
    const sorted = modifiers.sortHandler.apply(items, input);

    // Keep included dice before dropped dice.
    return sorted.sort(
      (a, b) => Number(b.useInTotal) - Number(a.useInTotal),
    );
  },
});

const roll = new Roll('4d6kh3s', {
  modifiers: customModifiers,
});
```

The original Sort handler still orders the values, but the replacement moves excluded dice after those included in the total.

### Keep before Explode

Some games require you to choose which dice to keep **before** checking for explosions, without allowing dropped dice to explode.

To do that, change Keep's execution order *and* replace the Explode handler so it skips dropped dice:

```javascript
const customModifiers = new modifiers.ModifierRegistry().register(
  {
    ...modifiers.keepHandler,
    order: 2,
  },
  {
    ...modifiers.explodeHandler,

    apply(items, input) {
      return items.flatMap((item) =>
        item.useInTotal
          ? modifiers.explodeHandler.apply([item], input)
          : [item],
      );
    },
  },
);

const roll = new Roll('8d4kh4!', {
  modifiers: customModifiers,
});
```

Keep runs first, marking the dice it drops as excluded from the total. The custom Explode handler then applies the built-in explosion logic only to the remaining dice.

This is different from changing the order alone: dropped dice cannot produce extra rolls.

## Writing your own handler

For more control, you can create a handler as a plain JavaScript object. It needs a `name`, `order`, `appliesTo` and `apply()` method.

For example, suppose your game treats **any even result as a critical success**, rather than only the die's maximum value:

```javascript
const customModifiers = new modifiers.ModifierRegistry().register({
  name: 'critical-success',
  order: 9,
  appliesTo: ['pool'],

  apply(items) {
    return items.map((item) =>
      item.value % 2 === 0
        ? results.withFlags(item, 'critical-success')
        : item,
    );
  },
});

const roll = new Roll('4d6cs', {
  modifiers: customModifiers,
});
```

The `cs` notation now marks even dice as critical successes. The `withFlags()` helper returns a copy of a result with the new flag; it doesn't change the die's value or total.

A handler supports these properties:

| Property | Purpose |
| --- | --- |
| `name` | The existing modifier that this handler replaces. |
| `order` | When it runs relative to other modifiers. |
| `appliesTo` | Whether it can be used with a dice `'pool'`, a roll `'group'`, or both. |
| `apply(items, input)` | Receives results and returns the updated array of results. |
| `groupHandling` | Optional setting for how to handle dice inside roll groups. |

The `input` argument includes the modifier's parsed options (`input.modifier`) and the roll context (`input.ctx`). When handling a dice pool, it can also include the die (`input.die`) and a function to roll another die (`input.rollDie`).

::: warning Custom handlers don't add new notation
You can replace the behaviour of existing modifiers, but registering a handler under a new name **doesn't extend the notation parser**.

If you need rules that can't be expressed through existing notation, you may need to build an expression programmatically or change the parser itself.
:::

### Working with results

Handlers must return an array; they should not modify the original items. You can reuse unchanged items and return copies of any items you update.

The `results` namespace includes helpers for common changes:

| Helper | What it does |
| --- | --- |
| `withFlags()` | Adds flags to a result, without duplicates. |
| `withValue()` | Changes a die's value and its calculation value. |
| `withCalculationValue()` | Changes how a result contributes to the total without changing the displayed value. |
| `excludeFromTotal()` | Excludes a result from the total, without adding a drop flag. |

These helpers preserve other properties of each result, including information used by presenters and other modifiers.

### Modifiers on roll groups

If a handler supports roll groups, the optional `groupHandling` property changes which items it receives:

| Value | Behaviour |
| --- | --- |
| Not set | Handles the group's members. |
| `'flatten'` | For a group with one expression, handles the dice from its pools together. With multiple expressions, handles the members. |
| `'each-pool'` | Handles group members and also processes the dice inside each pool separately. |

For example, the built-in Keep handler uses `'flatten'` and the built-in Sort handler uses `'each-pool'`.

Group-level calls do not provide `input.die` or `input.rollDie`, even when processing the dice within a group. If you customise group handling, take care to preserve the association between each die and its original pool.

## More information

See the [ModifierRegistry API](../../api/rpg-dice-roller/namespaces/modifiers/classes/ModifierRegistry.md) and [ModifierHandler API](../../api/rpg-dice-roller/namespaces/modifiers/interfaces/ModifierHandler.md) for more detail, or the [results API](../../api/rpg-dice-roller/namespaces/results/index.md) for the available result helpers and types.
