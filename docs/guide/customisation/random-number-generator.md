---
outline: 2
---

# Random number generator

RPG Dice Roller uses JavaScript's `Math.random()` to generate dice rolls by default, so you don't need to configure anything to start rolling:

```javascript
const roll = new Roll('4d6');
```

**You only need to choose a different random engine if you want to change where the random numbers come from.** For example, you might want repeatable rolls for testing, or a cryptographically secure source of randomness.

An *engine* generates the random numbers used by the library. The same engine is used for the dice and any additional rolls triggered by modifiers, such as [Explode](../notation/modifiers.md#explode) and [Re-roll](../notation/modifiers.md#re-roll).

## Choosing an engine

There are four built-in engines:

| Engine | Description |
| --- | --- |
| `nativeMath` | Uses JavaScript's `Math.random()`. This is the default and is not cryptographically secure. |
| `xoroshiro128plus` | A seedable pseudo-random number generator (PRNG). |
| `mersenne` | A seedable Mersenne Twister PRNG. |
| `crypto` | Uses the platform's Web Crypto API for cryptographically secure random numbers. |

You can use the built-in engines without creating a registry or installing another package.

### Select an engine by name

Pass the name as the `engine` option when creating a `Roll` or `Roller`:

```javascript
// Use the xoroshiro128plus engine for one roll.
const roll = new Roll('4d6', {
  engine: 'xoroshiro128plus',
});

// Use the same engine for all rolls made by this roller.
const roller = new Roller({
  engine: 'mersenne',
});

roller.roll('d20');
roller.roll('2d6+3');
```

The roller creates the engine once and continues its random sequence across rolls. It doesn't start again each time you call `roller.roll()`.

### Use a seed for repeatable rolls

The `xoroshiro128plus` and `mersenne` engines accept a *seed*: a starting value that lets you reproduce a sequence of random numbers.

Pass an object with the engine's name and seed:

```javascript
const roller = new Roller({
  engine: {
    name: 'xoroshiro128plus',
    seed: 1234,
  },
});

const first = roller.roll('4d6');
const second = roller.roll('4d6');
```

Creating another roller with the same engine and seed produces the same sequence **if it makes the same draws in the same order**. The two rollers have independent sequences.

Seeds must be whole numbers from `-2147483648` to `2147483647` (signed 32-bit integers). If you omit the seed for either seedable engine, the library chooses one automatically.

::: tip Reproducing rolls
For repeatable results, set an explicit seed and use the same engine and roll sequence.

Results are only guaranteed to repeat with the same library and dependency versions. A future release may change the numbers produced from a particular seed.
:::

### Use cryptographically secure randomness

Choose `crypto` to use `globalThis.crypto.getRandomValues()`:

```javascript
const roller = new Roller({ engine: 'crypto' });

roller.roll('4d6');
```

This is available in modern browsers and in supported Node.js environments where Web Crypto is enabled.

The `crypto` engine is optional and **cannot be seeded**. If Web Crypto isn't available, choosing `crypto` throws an error.

## Using your own engine

You can supply a custom engine if the built-in options don't suit your application. An engine is an object with a `next()` method that returns a **uniformly distributed signed 32-bit integer** (from `-2147483648` to `2147483647`).

The library uses those integers to generate numbers in the ranges required by the dice.

### Register a custom engine

An `EngineRegistry` keeps track of engine *factories*. A factory creates a fresh engine, and may receive an optional seed.

The registry already contains the four built-in engines. You can add your own, or replace one by registering a factory with the same name.

Import `EngineRegistry` to create your own registry:

:::tabs key:module-type variant:code

== ESM

```javascript
import { EngineRegistry } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { EngineRegistry } = require('@dice-roller/rpg-dice-roller');
```

== Browser

```javascript
const { EngineRegistry } = rpgDiceRoller;
```

:::

This example registers a new engine by wrapping a built-in one, to show how the factory works:

```javascript
const registry = new EngineRegistry();

registry.register('custom', (seed) => {
  const underlying = registry.create('xoroshiro128plus', seed);

  return {
    next() {
      return ~underlying.next();
    },
  };
});

const roller = new Roller({
  engines: registry,
  engine: { name: 'custom', seed: 1234 },
});

roller.roll('4d6');
```

The example uses a bitwise inversion simply to demonstrate custom behaviour. In a real engine, your factory can return an instance of your own class or an object backed by another random number generator.

Pass the registry as `engines` (plural), and select the named engine using `engine` (singular).

::: tip Other registry methods
Use `registry.names` to list registered names, `registry.get(name)` to retrieve a factory, `registry.has(name)` to check for one and `registry.remove(name)` to remove it. Calling `registry.create(name, seed)` creates an engine from a registered factory.
:::

### Pass an engine instance directly

You don't have to register an engine if you already have an instance. Pass it as the `engine` option:

```javascript
const registry = new EngineRegistry();
const engine = registry.create('mersenne', 1234);

const roller = new Roller({ engine });
```

The same approach works with an instance of your own engine class or a plain object implementing `next()`. For example, here's a simple engine you can use directly, without a registry:

```javascript
const customEngine = {
  next() {
    return (Math.random() * 0x1_0000_0000) | 0;
  },
};

const roller = new Roller({ engine: customEngine });
const roll = roller.roll('4d6');
```

This example uses `Math.random()`, just like the default engine. It's only intended to show how to supply your own implementation.

**Engine instances are used by reference.** If you pass the same instance to two rollers, they share its random sequence. If you want independent sequences, create separate instances instead.

An engine with its own `name` or `seed` properties is still treated as an instance if it has a callable `next()` method.

## Changing engines for individual rolls

A roller normally uses the same engine for every roll, but you can override it for an individual call:

```javascript
const roller = new Roller({
  engine: { name: 'xoroshiro128plus', seed: 11 },
});

const first = roller.roll('4d6');

// Use a separate engine for this roll only.
const special = roller.roll('4d6', {
  engine: { name: 'mersenne', seed: 42 },
});

const next = roller.roll('4d6');
```

The override doesn't advance the roller's configured engine, so `next` continues the sequence from `first`.

The returned roll keeps the engine used for it. Calling `special.reroll()` continues the Mersenne Twister sequence, rather than switching back to the roller's engine.

You can also override the engine when re-rolling:

```javascript
const rerolled = special.reroll({
  engine: { name: 'xoroshiro128plus', seed: 1234 },
});
```

Passing the **same named engine and seed again** creates a new instance, restarting that sequence. An ordinary `reroll()` without an override continues its existing sequence.

## Generating random numbers directly

You normally won't need to generate random numbers yourself, but a roller exposes its number generator through `roller.generator`.

```javascript
const roller = new Roller({ engine: 'xoroshiro128plus' });

// A whole number from 1 to 6, inclusive.
roller.generator.integer(1, 6);

// A decimal from 0 (inclusive) to 1 (exclusive).
roller.generator.real(0, 1);

// Include the upper bound as well.
roller.generator.real(0, 1, true);
```

These calls use the same engine as the roller's dice rolls, so they also advance its random sequence.

## Things to bear in mind

- **No automatic reset.** There are no built-in engine reset, clone or state-snapshot methods. Create a new engine from the same name and seed when you want to restart.
- **Not every engine accepts a seed.** `nativeMath` and `crypto` reject seeds.
- **Invalid configurations throw errors.** Unknown engine names, invalid seeds and factories that don't return an object with a `next()` method are rejected. Custom `next()` implementations are responsible for returning valid, uniformly distributed signed 32-bit integers.
- **Not every operation consumes randomness.** Presenting results, importing or exporting data, and calculating minimum, maximum or average totals don't advance the random sequence.
- **Failed rolls can still consume randomness.** If a roll fails after drawing numbers, those draws aren't undone.

## More information

See the [EngineRegistry API](../../api/classes/EngineRegistry.md), [RandomEngine interface](../../api/interfaces/RandomEngine.md) and [NumberGenerator API](../../api/interfaces/NumberGenerator.md) for the available types and methods.
