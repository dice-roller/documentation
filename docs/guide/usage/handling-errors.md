# Handling errors

Invalid notation, invalid options and expressions that cannot be evaluated can cause a roll to fail. When your application accepts user-supplied notation, catch these errors to give useful feedback.

## Catching roll errors

Import the `errors` namespace alongside `Roll`:

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

```javascript
try {
  const result = new Roll('2d6 +');

  console.log(result.present());
} catch (error) {
  if (error instanceof errors.DiceRollerError) {
    console.error(error.message);
  } else {
    throw error;
  }
}
```

Library errors inherit from `DiceRollerError`. The main error types involved in rolling are:

| Error | Meaning |
| --- | --- |
| `ValidationError` | Invalid input or options, such as an empty notation or an invalid safety limit. |
| `NotationError` | The notation can't be parsed. |
| `EvaluationError` | A parsed expression can't be evaluated, for example because a required variable is missing. |

An expression can parse successfully and still fail during evaluation. See [Variables](../notation/variables.md) for supplying data used in notation.

## Failed rolls and history

If `roller.roll()` fails, no roll is added to the roller's [history](roll-history.md).

An [asynchronous dice source](../customisation/external-dice.md) can reject its promise. Use `await` and `try`/`catch` to handle that:

```javascript
try {
  const result = await roller.roll('d6');
  console.log(result.total);
} catch (error) {
  console.error('Unable to roll dice:', error);
}
```

See [External dice sources](../customisation/external-dice.md#validating-values) for errors caused by invalid faces returned from a callback.
