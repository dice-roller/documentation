---
sidebarDepth: 1
next: /guide/notation/
---

# Customisation

## Random number generator

By default, the dice rolls use Javascript's built-in [`Math.random()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to generate the roll values. This is a form of [pseudo random number generation](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (PRNG).

For most purposes, `Math.random()` should be suitable, however, if you want something more random, or would rather something more powerful, or even cryptographically secure, you can change the "[engine](#engines)" used for the number generation.


### Engines

A random number generation (RNG) engine is a class, or object, that determines the next random number that will be generated. There are several built-in engines that you can use:

* `nativeMath`: Utilises `Math.random()`
* `browserCrypto`: Utilises `crypto.getRandomValues()`
* `nodeCrypto`: Utilises `require('crypto').randomBytes()`
* `MersenneTwister19937`: Produces a new Mersenne Twister. Must be seeded before use.

#### Custom engine

You can also create your own engines. This can be any class or object that has a `next()`  method which returns a 32-bit integer. e.g:

```javascript
// a simple object
const engineA = {
  next () {
    // logic to generate and return random integer...
  },
};

// or a class
class myEngine {
  next() {
    // logic to generate and return random integer...
  }
}

const engineB = new myEngine();
```

::: tip
We use [random-js](https://github.com/ckknight/random-js) behind the scenes, and the built-in engines are taken from that library. You can read more about how they work in the [random-js documentation](https://github.com/ckknight/random-js#engines)
:::


### Usage

You can access the number generator by importing the `NumberGenerator` namespace:

::: code-tabs#module-type

@tab ESM

```javascript
import { DiceRoller, NumberGenerator } from '@dice-roller/rpg-dice-roller';
```

@tab CommonJS

```javascript
const { DiceRoller, NumberGenerator } = require('@dice-roller/rpg-dice-roller');
```

@tab Browser

```javascript
// `NumberGenerator` is available on the global `rpgDiceRoller` variable
rpgDiceRoller.NumberGenerator
```

:::

`NumberGenerator` has two properties:
* `engines`: a list of the built-in engines (See [list above](#engines)).
* `generator`: an instance of the `NumberGenerator` class, that generates the random numbers.


#### Setting the engine

You can change the engine that `generator` uses by setting the `numberGenerator.engine` property:

```javascript
const roller = new DiceRoller();

const engines = NumberGenerator.engines;
const generator = NumberGenerator.generator;

// use the nodeCypto engine
generator.engine = engines.nodeCrypto;

// roll the notation using nodeCrypto
roller.roll('d6');


// change the engine to Mersenne Twister (This requires a seed)
generator.engine = engines.MersenneTwister19937.seed(521);

// roll the notation using Mersenne Twiste
roller.roll('d6');


// use a custom engine
generator.engine = {
  next() {
    // logic to generate and return random integer...
  }
};

// roll the notation using the custom engine
roller.roll('d6');
```

If you want to revert back to using the default `Math.random()`, you can either set the engine to `nativeMath`, or to a falsy value (e.g. `null`):

```javascript
generator.engine = engines.nativeMath;
generator.engine = null;
```


#### Generating a random number

::: tip
It's unlikely that you'll need to generate your own random numbers, as the dice rolls handle this for you, but the functionality is there if you need to work with it.
:::

If you need to generate random numbers outside of rolling dice, the `generator` has two methods, `integer` and `real`, which produce a random integer or float number respectively.

```javascript
// generate an integer between 1 and 4
generator.integer(1, 4);

// generate a float between 1 and 4 exclusive - [min, max)
generator.real(1, 4);

// generate an float between 1 and 4 inclusive - [min, max]
generator.real(1, 4, true);
```


### More information

For more information on the engines, and how the generator works, check out:
* [random-js documentation](https://github.com/ckknight/random-js); this is used behind the scenes. You can find more info on the engines and how to use the Mersenne Twister engine.
* [API docs](../api/utilities/NumberGenerator.md) for more detail on the `NumberGenerator` class.


## Modifier execution order

::: warning
Be careful when changing the modifier execution order.
The default order is purposefully defined and changing it may lead to unexpected behaviour.

If you change the order of a modifier to the same order as another modifier, there is no guarantee of which one will run first.
:::

Modifiers always run in a specific order, regardless of the order you specify them in the notation.
This is determined by the modifier's `order` property, and works in ascending order.

However, sometimes the default order is not desired, because certain games require a slightly different order.

For example, Open Legend requires the [keep modifier to be run **before** the explode modifier](https://openlegendrpg.com/core-rules/actions-attributes#advantage--disadvantage-are-only-applied-before-explosions).
However, by default, the [explode modifier](./notation/modifiers.md#exploding) runs first.

This is because the [explode modifier](./notation/modifiers.md#exploding) has an order of `3`, and the [keep modifier](./notation/modifiers.md#keep) has an order of `6`.

Fortunately, you can modify the execution order for any modifier either [globally](#change-default-order), or on a [per-instance basis](#change-individual-instance-order).

### Change default order

To change the execution order when rolling string notations (e.g. `DiceRoll('4d6!kh1')`), you can set the default order for a modifier.

Each [`Modifier`](../api/modifiers/Modifier.md) class has a static [`order`](../api/modifiers/Modifier.md#modifier-order-number) property, which is used to set the order when a new Modifier is created.

You can change it like:

```javascript
// set the explode modifier order to 7
ExplodeModifier.order = 7;

// set the keep modifier order to 2
KeepModifier.order = 2;
```

Any new `ExplodeModifier`, and `KeepModifier` objects will now have the new orders. Other modifiers will retain their original order.

This also works with manually created [`Modifier`](../api/modifiers/Modifier.md) objects:

```javascript
const mod = new ExplodeModifier();

mode.order === 7;
```

::: warning Conflicting order values
When changing a modifier order, any modifiers with the same order value should be changed to a unique value.
:::

#### Example

Using the [Open Legend example]((https://openlegendrpg.com/core-rules/actions-attributes#advantage--disadvantage-are-only-applied-before-explosions)), we would need the [keep modifier](./notation/modifiers.md#keep) to run before the [explode modifier](./notation/modifiers.md#exploding).

```javascript
// With the default order;
// roll the dice, explode any that roll a 4, then keep only the highest 4 rolls
const roll = new DiceRoll('8d4kh4!');

// Set the keep modifier order to `3` (The current order for the explode modifier)
KeepModifier.order = 3;

// The drop modifier should always run after the keep modifier, so set that to `4`
DropModifier.order = 4;

// Set the explode modifier to run after keep and drop modifiers
ExplodeModifier.order = 5;

// Order 4 and 5 are alreday used for the re-roll and unique modifiers.
// We need to change them as well, otherwise the order is ambiguous
ReRollModifier.order = 6;
UniqueModifier.order = 7;

// With the new order;
// roll the dice, keep only the highest 4 rolls, then explode any that roll a 4
const roll = new DiceRoll('8d4kh4!');
```

### Change individual instance order

::: tip Limitations
This will **not** affect modifiers created from rolling string notation, and is only useful if you are manually creating modifier instances.

To affect roll notations, change the [default order](#change-default-order) instead.
:::

You can change the order on an individual modifier object, by setting the non-static `order` property:

```javascript
const mod1 = new ExplodeModifier();
mod1.order = 7;
```

This only affects the object you have modified. Creating another `ExplodeModifier` will still use the [default order](#change-default-order).
