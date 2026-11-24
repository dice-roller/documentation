# Working with results

A completed `Roll` contains both the calculated total and the evaluated expression, including individual dice results.

## Basic properties

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const roll = new Roll('4d6kh3');

console.log(roll.notation); // '4d6kh3'
console.log(roll.total);    // e.g. 14
```

The `notation` property contains the original expression, while `total` is its final numeric value after modifiers and arithmetic have been applied. The total is rounded to two decimal places.

The `result` property contains the evaluated result tree; `expression` provides the corresponding parsed expression (AST). This is where you can inspect individual dice and groups rather than only their total.

## Displaying the result

```javascript
console.log(roll.present());
// e.g. 4d6kh3: [3d, 5, 6, 3] = 14

console.log(String(roll));
```

`present()` formats the *existing* results using the configured presenter. It doesn't roll again. `String(roll)` always uses the built-in text presenter.

For different output formats or your own presentation logic, see [Presenters](../customisation/presenters.md).

