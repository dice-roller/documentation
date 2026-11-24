# Handling errors

A roll can fail for several reasons, from a mistake in the notation to invalid configuration or a mathematical operation that cannot be evaluated.

If your application accepts user-supplied notation or data, you can catch these errors and provide useful feedback rather than letting an exception interrupt your application.

## Catching errors

The library exports its error classes through the `errors` namespace:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roll, errors } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Roll, errors } = require('@dice-roller/rpg-dice-roller');
```

== Browser (UMD)

```javascript
const { Roll, errors } = rpgDiceRoller;
```

:::

Use a `try`/`catch` block around the operation that may fail:

```javascript
try {
  const roll = new Roll('2d6+');

  console.log(roll.total);
} catch (error) {
  if (error instanceof errors.DiceRollerError) {
    console.error(error.message);
  } else {
    throw error;
  }
}
```

All of the library's custom error classes extend `DiceRollerError`, which itself extends JavaScript's built-in `Error`. They provide the usual `name` and `message` properties, as well as `cause` when an underlying error is available.

Other errors, such as those thrown by your own custom dice or modifiers, may also propagate. Don't assume that every exception is a `DiceRollerError`. The example above handles library errors and rethrows unexpected ones.

## Error types

The library provides the following error classes:

| Error | Description |
| --- | --- |
| `DiceRollerError` | The base class for all library-specific errors. |
| `NotationError` | The notation contains a syntax error. |
| `ValidationError` | An argument, option or value is invalid, including missing variable bindings. |
| `EvaluationError` | An expression cannot be evaluated, or an operation fails during evaluation. |
| `ImportError` | Imported roll or history data is invalid or uses an unsupported format or version. |

You can use `instanceof` with an individual class if your application needs to handle different errors in different ways.

### Notation errors

A `NotationError` is thrown when the parser encounters invalid syntax:

```javascript
try {
  new Roll('2d6+');
} catch (error) {
  if (error instanceof errors.NotationError) {
    console.error('Check your dice notation:', error.message);
  } else {
    throw error;
  }
}
```

As well as its error message, a parser-generated `NotationError` provides information about where the problem occurred. See [Locating notation errors](#locating-notation-errors) below.

An empty notation string is treated as invalid input instead and raises a `ValidationError`.

### Validation errors

A `ValidationError` indicates that a supplied argument or value is invalid. This could be an invalid [roll limit](roll-options.md#roll-limits), for example:

```javascript
new Roll('2d6', {
  limits: { maxQty: -1 },
});
// Throws ValidationError
```

It can also occur when an expression refers to a variable that hasn't been supplied:

```javascript
new Roll('d20+$bonus');
// Throws ValidationError
```

In this case the notation is valid, but the evaluator can't resolve `$bonus`. Supply the required [variable data](roll-options.md#variable-data) to evaluate it:

```javascript
const roll = new Roll('d20+$bonus', {
  data: { bonus: 3 },
});
```

Validation isn't limited to the initial arguments passed to the library. Errors can occur during parsing or evaluation too.

### Evaluation errors

An `EvaluationError` indicates that the expression cannot be evaluated successfully, even if its notation is valid.

For example:

```javascript
new Roll('sqrt(-1)');
// Throws EvaluationError

new Roll('(2.5)d6');
// Throws EvaluationError
```

The square root has no real result, and the calculated dice quantity isn't an integer.

An expression can parse successfully but fail when rolled, because some values are only known during evaluation. Parsing alone isn't a guarantee that an expression can be rolled.

::: tip Infinite totals
Not every unusual mathematical result is an error. For example, `1/0` evaluates to `Infinity` rather than throwing an exception.

If your application requires a finite total, check it with `Number.isFinite(roll.total)`.
:::

### Import errors

An `ImportError` indicates a problem with saved roll data, rather than ordinary dice notation:

```javascript
try {
  const roll = Roll.import('{"invalid":true}');
} catch (error) {
  if (error instanceof errors.ImportError) {
    console.error('Unable to restore roll:', error.message);
  } else {
    throw error;
  }
}
```

This can happen when importing malformed JSON, an unsupported export version, an incomplete result tree or invalid concise results.

The library validates a history import before appending rolls, so an invalid import doesn't leave a partially imported history. See [Handling invalid data](importing-and-exporting.md#handling-invalid-data) for more about import validation.

## Locating notation errors

When a syntax error occurs during parsing, `NotationError` provides additional properties to help you identify the problem:

| Property | Description |
| --- | --- |
| `notation` | The original notation string. |
| `location.offset` | The position in the notation, starting from 0. |
| `location.line` | The line number, starting from 1. |
| `location.column` | The column number, starting from 1. |
| `cause` | The underlying parser error. |

For example, you could use these properties to highlight an error in a notation input field:

```javascript
try {
  new Roll('2d6+');
} catch (error) {
  if (error instanceof errors.NotationError) {
    console.log(error.notation); // '2d6+'
    console.log(error.location?.offset); // 4
    console.log(error.location?.line);   // 1
    console.log(error.location?.column); // 5
  } else {
    throw error;
  }
}
```

In this example the error is at the end of the notation, where another operand is expected.

The `location` property is optional, so check that it exists before using it. For example, a manually constructed `NotationError` may not have a location.

### Formatting syntax errors

Use `NotationError.format()` when displaying a syntax error in a command-line application or other text interface:

```javascript
try {
  new Roll('2d6+');
} catch (error) {
  if (error instanceof errors.NotationError) {
    console.error(error.format());
  } else {
    throw error;
  }
}
```

For parser-generated errors, this includes the relevant source line and a caret indicating the problem's location. It doesn't modify the original `message`. If an underlying parser error isn't available, it returns the error message instead.

## Asynchronous rolls

When you use an [asynchronous external dice source](../customisation/external-dice.md), a roll can fail by rejecting its promise. Invalid configuration can also throw synchronously before a promise is returned.

Put the call itself and its `await` inside the `try` block to handle both cases:

```javascript
import { Roller, errors } from '@dice-roller/rpg-dice-roller';

const roller = new Roller({
  drawDie: {
    drawMode: 'async',
    callback: async () => {
      throw new Error('Dice service unavailable');
    },
  },
});

try {
  const roll = await roller.roll('d6');

  console.log(roll.total);
} catch (error) {
  if (error instanceof errors.EvaluationError) {
    console.error(error.message);
    console.error(error.cause);
  } else {
    throw error;
  }
}
```

In this example the callback simulates an unavailable external dice service. The library wraps errors thrown or rejected by an external draw callback in an `EvaluationError`, with the original error available as its `cause`.

Invalid face values returned by a callback also cause an `EvaluationError`. See [Validating values](../customisation/external-dice.md#validating-values) for the requirements of an external source.

The same `try`/`catch` approach works with `await Roll.create()`, `await roll()` and asynchronous re-rolls.

## Failed rolls and history

A `Roller` only adds completed, successful rolls to its [history](roll-history.md). If a new roll fails, the existing history remains intact.

```javascript
const roller = new Roller();

roller.roll('d6');

try {
  roller.roll('2d6+');
} catch (error) {
  console.error(error.message);
}

console.log(roller.history.length); // 1
```

A failed roll isn't added to the history, even if some dice were already drawn before the error occurred. However, those draws aren't undone; the random engine or external dice source may already have been used.

Reaching a repeating modifier's [iteration or generated-roll limit](roll-options.md#roll-limits) isn't itself an error. In that case the roll completes with the results reached so far.

## Errors after a roll has completed

Some operations can fail even after a roll has been evaluated successfully.

For example, accessing `minTotal` or `maxTotal` for the first time evaluates the expression again using the dice's minimum or maximum values. An expression might succeed for the actual dice values but fail for one of those extremes.

Accessing `averageTotal` or exporting results may also trigger these additional calculations. Custom presenters can throw errors when formatting otherwise valid results.

If your application uses these operations, include them in the appropriate error-handling code rather than assuming that a successful roll guarantees every subsequent operation will succeed.

See [Calculated totals](working-with-results.md#calculated-totals) for how these values are calculated.
