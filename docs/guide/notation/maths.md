---
sidebarDepth: 1
---

# Maths

Combine dice rolls with mathematical operators and functions to calculate damage, apply bonuses or build more complex expressions.

When a dice roll appears in a calculation, its total is used.

## Operators

The following operators are supported:

| Operator | Operation | Example |
| --- | --- | --- |
| `+` | Addition | `2d6+3` |
| `-` | Subtraction | `2d6-2` |
| `*` | Multiplication | `d6*5` |
| `/` | Division | `2d10/d20` |
| `%` | Modulo | `d15%2` |
| `^` or `**` | Exponentiation | `3d20^4` |

For example:

```javascript
d6*5     // Multiply the result of one six-sided die by 5
2d10/d20 // Divide the total of two ten-sided dice by the result of one twenty-sided die
3d20^4   // Raise the total of three twenty-sided dice to the fourth power
3d20**4  // Equivalent to 3d20^4
d15%2    // Calculate the result modulo 2
```

::: roller d6*5 :::

::: tip Modulo and percentile dice
The `%` after `d` specifies percentile dice, while `%` between expressions is the modulo operator.

For example, `d%` rolls a percentile die, whereas `d20%3` calculates the result of a twenty-sided die modulo 3.
:::

## Order of operations

Expressions follow the usual mathematical order: powers are evaluated before multiplication, division and modulo, which are evaluated before addition and subtraction.

Multiplication, division and modulo have equal precedence and are evaluated from left to right. The same applies to addition and subtraction.

Use parentheses to control which parts of an expression are calculated first:

```javascript
d6+2*3    // Multiply 2 by 3, then add the die result
(d6+2)*3  // Add 2 to the die result, then multiply by 3
```

If the die rolls a `4`, the first expression gives `10`, while the second gives `18`.

Powers are evaluated from right to left: `2^3^2` means `2^(3^2)`, giving `512`.

::: roller (d6+2)*3 :::

## Calculating quantities and sides

You can use an expression to determine how many dice to roll or how many sides they have. Enclose the expression in parentheses:

```javascript
(4-2)d10 // Roll two ten-sided dice
3d(2*6)  // Roll three twelve-sided dice
```

Expressions can also include dice rolls and mathematical functions. <Badge text="New in v6" vertical="middle"/>

```javascript
(d4+1)d6       // Roll a d4, add 1, then roll that many six-sided dice
2d(d6+4)      // Roll a d6, add 4, then use that number of sides for two dice
(max(d4,2))d6 // Roll a d4 and use its result as the quantity, with a minimum of two
```

::: roller 3d(2*6) :::

## Functions

Functions perform calculations on numbers, dice totals or other expressions. Use the function name followed by its arguments in parentheses.

### Rounding

| Function | Behaviour |
| --- | --- |
| `round(x)` | Round to the nearest integer; halfway values round away from zero. |
| `floor(x)` | Round down to the nearest integer. |
| `ceil(x)` | Round up to the nearest integer. |
| `trunc(x)` | Remove the fractional part, rounding towards zero. |

For example:

```javascript
round(3.7)  // 4
floor(3.7)  // 3
ceil(3.7)   // 4
trunc(3.7)  // 3

round(3.5)  // 4
floor(3.5)  // 3
ceil(3.5)   // 4
trunc(3.5)  // 3

round(-3.7) // -4
floor(-3.7) // -4
ceil(-3.7)  // -3
trunc(-3.7) // -3

round(-3.5) // -4
floor(-3.5) // -4
ceil(-3.5)  // -3
trunc(-3.5) // -3
```

Use these functions around a dice expression when you need a whole-number result:

```javascript
floor(4d6/3) // Divide the dice total by 3, then round down
ceil(d20/2)  // Divide the die result by 2, then round up
trunc(d6/2)  // Divide the die result by 2, then discard the fractional part
```

::: roller floor(4d6/3) :::

::: warning Rounding halfway values
Unlike JavaScript's `Math.round()`, `round()` rounds [halfway values _away_ from zero](https://en.wikipedia.org/wiki/Rounding#Rounding_half_away_from_zero).

Both return `4` for `3.5`, but `round(-3.5)` returns `-4`, whereas JavaScript's `Math.round(-3.5)` returns `-3`.
:::

### Other functions

| Function | Behaviour |
| --- | --- |
| `abs(x)` | Return the absolute value. |
| `sign(x)` | Return `-1`, `0` or `1` for a negative, zero or positive value. |
| `min(x, y)` | Return the smaller of two values. |
| `max(x, y)` | Return the larger of two values. |
| `pow(x, y)` | Raise `x` to the power of `y`, equivalent to `x^y`. |
| `sqrt(x)` | Return the square root. |
| `exp(x)` | Return e raised to the power of `x`. |
| `log(x)` | Return the natural logarithm. |
| `sin(x)` | Return the sine of an angle in radians. |
| `cos(x)` | Return the cosine of an angle in radians. |
| `tan(x)` | Return the tangent of an angle in radians. |

For example:

```javascript
abs(4d10-25) // Return the absolute difference between the dice total and 25
min(4d6, 20) // Use the dice total or 20, whichever is smaller
max(2d6, 5)  // Use the dice total or 5, whichever is larger
pow(d6, 2)  // Square the die result
sqrt(4d6)   // Calculate the square root of the dice total
```

Each dice expression is rolled separately. For example, `min(4d6, 2d10)` rolls both sets of dice and returns the smaller total.

You can also nest functions:

```javascript
floor(sqrt(4d6)) // Calculate the square root of the dice total, then round down
```

::: roller min(4d6, 2d10) :::

::: tip Missing a function?
If there's a mathematical function you'd like to use that isn't supported, [let us know](https://github.com/dice-roller/rpg-dice-roller/issues).
:::
