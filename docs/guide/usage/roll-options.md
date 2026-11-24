# Configuring rolls

RPG Dice Roller provides built-in dice and modifiers, a default random-number engine and a text presenter. You can customise how rolls are evaluated and displayed by supplying options when you create a roll or roller.

## Passing options

Pass an options object as the second argument to `new Roll()`, `Roll.create()` or the `roll()` shorthand. For a `Roller`, pass it to the constructor to configure all the rolls it makes:

:::tabs key:roll-options variant:code

== Roll

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const result = new Roll('4d6', {
  engine: 'mersenne',
  limits: { maxQty: 100 },
});
```

== roll()

```javascript
import { roll } from '@dice-roller/rpg-dice-roller';

const result = roll('4d6', {
  engine: 'mersenne',
  limits: { maxQty: 100 },
});
```

== Roller

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller({
  engine: 'mersenne',
  limits: { maxQty: 100 },
});

const result = roller.roll('4d6');
```

:::

These examples choose the Mersenne Twister random engine and limit the initial quantity of each dice pool to 100.

### Available options

All options are optional. The library uses the default for any option you don't supply.

| Option | Default | Purpose |
| --- | --- | --- |
| `engine` | `'nativeMath'` | [Choose the random-number engine](../customisation/random-number-generator.md). |
| `engines` | Built-in engine registry | [Register custom random engines](../customisation/random-number-generator.md#register-a-custom-engine). |
| `drawDie` | Not configured | [Supply finished die values](../customisation/external-dice.md) instead of using the random engine. |
| `dice` | Built-in dice registry | [Supply a registry of dice definitions](../customisation/dice.md). |
| `modifiers` | Built-in modifier registry | [Supply a registry of modifier handlers](../customisation/modifiers.md). |
| `presenter` | Default text presenter | [Choose how `present()` formats results](../customisation/presenters.md). |
| `limits` | [Default limits](#roll-limits) | Set safety limits on dice quantities and repeating modifiers. |
| `data` | Empty object | [Supply variable values](#variable-data) for use in notation. |

The options are described by the exported TypeScript `RollOptions` type. Follow the customisation guides above for details of each extension point.

::: tip External dice sources
If your `drawDie` callback is asynchronous, use `Roll.create()`, `roll()` or `roller.roll()` and await the result. See [Synchronous and asynchronous rolls](index.md#synchronous-and-asynchronous-rolls).
:::

## Sharing settings

A `Roller` resolves its constructor options once and shares the resulting settings across the rolls it makes. For example, when using a seeded engine, each roll continues the same random sequence instead of starting again from the seed.

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller({
  engine: { name: 'mersenne', seed: 42 },
});

const first = roller.roll('2d6');
const second = roller.roll('2d6');
```

You can access the resolved configuration through `roller.settings`. For convenience, `roller.generator`, `roller.dice`, `roller.modifiers`, `roller.presenter` and `roller.limits` also expose the corresponding services and limits.

### Reusing settings without a history

If you want independent rolls to share configuration without maintaining a [roll history](roll-history.md), create a `RollSettings` instance and pass it to each roll:

```javascript
import { Roll, RollSettings, roll } from '@dice-roller/rpg-dice-roller';

const settings = new RollSettings({
  engine: { name: 'mersenne', seed: 42 },
  limits: { maxQty: 100 },
});

const attack = new Roll('d20+5', settings);
const damage = roll('2d6+3', settings);
```

These rolls reuse the same generator, registries, parser and evaluator. You can also pass a `RollSettings` instance to `Roll.create()`.

Passing the same plain options object to two standalone rolls isn't the same as sharing a `RollSettings` instance: each roll resolves the options separately. For example, if the options specify an engine name and seed, each roll creates a new engine starting from that seed.

Explicitly supplied engine instances, registries and presenters are shared by reference rather than cloned. In particular, modifying a shared registry can affect subsequent rolls that use it. Variable data is handled differently: it is copied, as described [below](#data-snapshots).

## Overriding settings

Not every constructor option can be overridden for an individual roll. The supported overrides depend on how you make the roll:

| Option | `roller.roll()` | `roll.reroll()` |
| --- | --- | --- |
| `engine` | Yes | Yes |
| `drawDie` | Yes | No |
| `data` | Yes | Yes |

### Overrides for individual rolls

Pass an options object as the second argument to `roller.roll()` to override its random engine, external dice source or variable data for that roll:

```javascript
const roller = new Roller({
  engine: 'mersenne',
  data: { bonus: 3 },
});

const attack = roller.roll('d20+$bonus');

const otherAttack = roller.roll('d20+$bonus', {
  engine: 'crypto',
  data: { bonus: 5 },
});
```

The second roll uses the crypto engine and a bonus of 5. Subsequent calls without overrides still use the roller's original configuration.

Overriding the engine doesn't disable an external dice source if one is configured. See [External dice sources](../customisation/external-dice.md#reusing-and-overriding-a-source) for how to change the source used by an individual roll.

Other options, such as limits and registries, must be configured when constructing the roller. To use a different presenter for a single display, pass it to `present()` rather than to `roller.roll()`.

### Overrides when re-rolling

A [re-roll](index.md#re-rolling) uses the settings of the original `Roll`, including any overrides supplied when it was created.

You can replace its engine or variable data:

```javascript
const first = new Roll('d20+$bonus', {
  data: { bonus: 3 },
});

const second = first.reroll({
  data: { bonus: 5 },
});
```

This creates a new roll without changing the original roll's settings or results. A subsequent re-roll of `second` will use its replacement data unless you override it again.

The external dice source is carried forward from the original roll and cannot be overridden through `reroll()`.

## Roll limits

Limits control how many dice can be rolled in a pool and how many additional dice repeating modifiers can generate. They help prevent expressions from generating excessive numbers of dice.

| Setting | Default | Purpose |
| --- | --- | --- |
| `maxQty` | `999` | Maximum initial quantity of dice in a pool. |
| `maxIterations` | `1000` | Maximum generations per original die and modifier for explosions and re-rolls, retries per result for Unique, or extra batches for Matching-batch explode. |
| `maxGeneratedRolls` | `1000000` | Maximum additional dice generated by repeating modifiers in each pool. |

Supply any of these settings through the `limits` option. Unspecified limits retain their defaults:

```javascript
const roller = new Roller({
  limits: {
    maxQty: 100,
    maxIterations: 200,
    maxGeneratedRolls: 5000,
  },
});

console.log(roller.limits.maxQty); // 100
```

Each limit must be a positive safe integer. Invalid limit settings throw a `ValidationError`.

### Dice quantities

`maxQty` applies to each pool separately, not the whole expression. With a limit of 100, `100d6+100d8` is allowed, but `101d6` isn't.

```javascript
const roller = new Roller({
  limits: { maxQty: 100 },
});

roller.roll('100d6'); // Allowed
roller.roll('101d6'); // Throws an error
```

Literal quantities are checked when notation is parsed. Calculated quantities are checked during evaluation, once their value is known. For example, `(50+51)d6` can be parsed but will fail when rolled with this limit.

This limit only controls a pool's initial quantity. Additional dice generated by modifiers are subject to the repeating modifier limits instead.

### Repeating modifiers

`maxIterations` applies to [Explode](../notation/modifiers.md#explode) (including compound and penetrating explosions), [Matching-batch explode](../notation/modifiers.md#matching-batch-explode), [Re-roll](../notation/modifiers.md#re-roll) and [Unique](../notation/modifiers.md#unique).

A limit specified in the notation is capped by the configured maximum. For example, `d6!3` can generate up to three additional generations, but only two if `maxIterations` is set to 2.

`maxGeneratedRolls` provides a separate budget shared by all repeating modifiers in a pool. It counts additional dice, including discarded re-rolls, but excludes the initial dice. Each pool has its own budget.

This is particularly useful when generating several dice per explosion or re-roll, where the number of results can grow rapidly even with a small generation limit.

```javascript
const roll = new Roll('d6!2:3', {
  limits: {
    maxGeneratedRolls: 4,
  },
});
```

Although the notation allows three new dice per explosion for up to two generations, the pool can generate no more than four additional dice with this configuration.

When the generation, retry or additional-roll limit is reached, repeating modifiers stop generating dice and retain the results reached so far. Exhausting these limits isn't itself an error. Later modifiers can still process the available results.

The detailed behaviour of each modifier is described in [Repeating modifier limits](../notation/modifiers.md#repeating-modifier-limits).

::: warning Limits are not a whole-expression budget
An expression can contain multiple pools, including pools used to calculate quantities, sides and modifier arguments. Each has its own limits. These settings do not impose a single cap on the total amount of work required to evaluate arbitrary notation.
:::

Each evaluation receives a fresh additional-roll budget, including re-rolls and evaluations for [calculated totals](working-with-results.md#calculated-totals).

## Variable data

Use the `data` option to supply values for [variables](../notation/variables.md) in notation. This lets you reuse an expression with different inputs, rather than constructing a new notation string for every character or situation.

### Supplying values

Provide a plain JavaScript object whose values are finite numbers, booleans or other plain objects:

```javascript
const data = {
  bonus: 3,
  character: {
    attackBonus: 2,
    isPoisoned: false,
  },
};

const attack = new Roll('d20+$bonus', { data });
const otherAttack = new Roll('d20+$character.attackBonus', { data });
```

The first roll adds 3 to a d20 roll, while the second adds 2. Booleans evaluate to `1` for `true` and `0` for `false`.

You can also use `data` with `roll()` and `Roll.create()`.

Strings, arrays, functions, class instances, non-finite numbers and circular objects are not supported as data values. Use ordinary enumerable data properties, rather than getters or inherited properties. Variable paths are case-sensitive; see the [notation guide](../notation/variables.md#variables-you-supply) for variable syntax.

If evaluation attempts to read a variable that hasn't been supplied, the roll fails with a `ValidationError`. A reference must resolve to a finite number or boolean, not an object.

### Default and per-roll data

Provide data when constructing a `Roller` to make those values available to every roll:

```javascript
const roller = new Roller({
  data: {
    bonus: 3,
    character: { attackBonus: 2 },
  },
});

roller.roll('d20+$bonus'); // Adds 3
roller.roll('d20+$bonus', { data: { bonus: 5 } }); // Adds 5
roller.roll('d20+$bonus'); // Adds 3 again
```

Per-roll data **replaces the entire default data object**. It isn't merged, even at the top level. The overridden roll above has no `$character.attackBonus` value.

If you want to change one value whilst retaining the other defaults, combine the data yourself:

```javascript
const result = roller.roll('d20+$bonus+$character.attackBonus', {
  data: {
    ...roller.settings.data,
    bonus: 5,
  },
});
```

This adds 7 to the d20 roll. To change a nested value while retaining other nested properties, copy that nested object too.

### Data snapshots

Variable data is validated and deeply copied when the settings are created, and each roll retains a snapshot of its input data.

Changing your original object afterwards doesn't change a roller's defaults or the data used by an existing roll:

```javascript
const data = { bonus: 3 };
const roller = new Roller({ data });

const first = roller.roll('d20+$bonus');

data.bonus = 5;

const second = roller.roll('d20+$bonus'); // Still adds 3
const third = roller.roll('d20+$bonus', { data }); // Adds 5
```

You can keep your application data mutable and supply it again for each roll. The library doesn't modify the original object.

### Variable data when re-rolling

Calling `reroll()` without options reuses the original roll's data. To roll again with updated values, pass a replacement object:

```javascript
const first = new Roll('d20+$bonus', {
  data: { bonus: 3 },
});

const second = first.reroll(); // Adds 3
const third = first.reroll({ data: { bonus: 5 } }); // Adds 5
```

As with a roller's per-roll data, replacement data isn't merged with the original data.

Variable input data is not included when exporting a roll. If you intend to re-roll saved results, supply the required data when restoring them. See [Re-rolling imported rolls](importing-and-exporting.md#re-rolling-imported-rolls).

## Next steps

* [Handling errors](handling-errors.md) — deal with invalid options, notation and evaluation failures.
* [Customisation](../customisation/index.md) — extend the built-in dice, modifiers, engines and presenters.
* [Variables](../notation/variables.md) — use supplied and built-in values in notation.
