---
sidebarDepth: 1
next: /guide/notation/
---

# Customisation

## Random number generator

By default, the dice rolls use Javascript's built-in [`Math.random()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to generate the roll values. This is a form of [psudeo random number generation](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (PRNG).

For most purposes, `Math.random()` should be suitable, but you may feel as though it's not random enough, or would rather something more powerful, or even cryptographically secure.

For this purposes, you can change "[engine](#engines)" used for the number generation.


### Engines

A random number generation (RNG) engine is a class, or object, that determines the next random number that will be generated. There are several built-in engines that you can use:

* `nativeMath`: Utilises `Math.random()`
* `browserCrypto`: Utilises `crypto.getRandomValues()`
* `nodeCrypto`: Utilises `require('crypto').randomBytes()`
* `MersenneTwister19937`: Produces a new Mersenne Twister. Must be seeded before use.

#### Custom engine

And you can also create your own engines, which can be any class or object that has a `next()`  method and returns a 32 bit integer. e.g:

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

```javascript
// ES modules
import { DiceRoller, NumberGenerator } from '@dice-roller/rpg-dice-roller';

// or CommonJS
const { DiceRoller, NumberGenerator } = require('@dice-roller/rpg-dice-roller');
```

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

If you want to revert back to using the default `Math.random()`, you can either set the engine to `nativeMath`, or to a falsey value (e.g. `null`):

```javascript
generator.engine = engines.nativeMath;
generator.engine = null;
```


#### Generating a random number

::: tip
You'll likely never need to generate your own random numbers, as the dice rolls handle this for you, but the functionality is there if you need to work with it.
:::

As you can see above, rolling dice will use whichever engine is currently set so, for most cases, you'll never need to generate a random number yourself.

However, if you need to, the `generator` has two methods, `integer` and `real`, which produce a random integer or float number respectively.

```javascript
// generate an integer between 1 and 4
generator.integer(1, 4);

// generate an float between 1 and 4 exclusive - [min, max)
generator.real(1, 4);

// generate an float between 1 and 4 inclusive - [min, max]
generator.real(1, 4, true);
```


### More information

For more information on the engines, and how the generator works, check out:
* [random-js documentation](https://github.com/ckknight/random-js); this is used behind the scenes. You can find more info on the engines and how to use the Mersenne Twister engine.
* [API docs](../api/utilities/NumberGenerator.md) for more detail on the `NumberGenerator` class.
