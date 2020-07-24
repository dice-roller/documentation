# `NumberGenerator`

The `NumberGenerator` handles the generating of random numbers. It is used for die rolls.

::: tip
We use [random-js](https://github.com/ckknight/random-js). For a list of built-in engines, check the [documentation](https://github.com/ckknight/random-js#engines).
:::


## Constructor

```js
/**
 * @param {Engine|{}=} engine
 */ 
NumberGenerator({Engine|{}=} engine = nativeMath)
```

A `NumberGenerator` instance takes an optional `engine` passed to the constructor:

```js
// create a NumberGenerator that uses the nodeCrypto engine
const generator = new NumberGenerator(engines.nodeCrypto);
```


## Prototype methods

Prototype methods can be called on an instance of the object, like so:

```js
const generator = new NumberGenerator();
generator.integer(1, 4);
```

| Method                                                       | Description                                                  | Return   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| `integer({Number} min, {Number} max)`                        | Generates a random integer between the min and max, inclusive | `number` |
| `real({Number} min, {Number} max, {boolean=} inclusive = false)` | Generates a random integer between the min and max, inclusive | `Number` |


## Properties

| Property | Type        | Description                             |
| -------- | ----------- | --------------------------------------- |
| `engine` | `Engine|{}` | The number generation engine to be used |
