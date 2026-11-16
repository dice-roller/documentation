# Dice

Dice notation tells the library how many dice to roll and which type to use. The results are added together to produce a total, unless you apply [modifiers](modifiers.md) that change how they are counted.

To change how existing dice behave or create your own dice, see [Custom dice](../customisation/dice.md).

## Number of dice

Put a number before the dice notation to specify how many dice to roll. If you leave it out, the quantity defaults to one.

```javascript
d6    // Roll one six-sided die
1d6   // Equivalent to d6
4d6   // Roll four six-sided dice and add their results together
```

::: warning Quantity limits
Each set of dice must have a quantity between `1` and `999`.

For example, `999d6` is valid, but `0d6` and `1000d6` are not. The limit applies separately to each set, so `20d4 + 999d10` is also valid.
:::

## Standard

**Notation:** `d{n}`

Standard dice produce a whole number between `1` and the number of sides, inclusive. Replace `{n}` with the number of sides you want.

You can use familiar dice such as `d6` and `d20`, or choose other numbers of sides to suit your game.

```javascript
d6    // Roll one six-sided die: a value from 1 to 6
d20   // Roll one twenty-sided die: a value from 1 to 20
4d10  // Roll four ten-sided dice and add their results together
```

::: roller 4d10 :::

## Percentile dice

**Notation:** `d%`

Percentile dice produce a whole number between `1` and `100`, inclusive. The notation `d%` is shorthand for `d100`, so these expressions are equivalent:

```javascript
4d%    // Roll four percentile dice
4d100  // Roll four hundred-sided dice
```

Both roll four values from `1` to `100` and add them together.

::: roller 4d% :::

## Fudge / Fate dice

**Notation:** `dF` / `dF.2` / `dF.1`

Fudge dice, also used in Fate, are six-sided dice marked with plus (`+`), minus (`−`) and blank faces. These represent the values `+1`, `−1` and `0`.

Two variants are available:

| Notation | Plus faces | Minus faces | Blank faces |
| --- | --- | --- | --- |
| `dF` or `dF.2` | 2 | 2 | 2 |
| `dF.1` | 1 | 1 | 4 |

The default, `dF`, gives each value an equal chance. The `dF.1` variant makes a blank result more likely.

As with other dice, add a quantity to roll several dice and total their values:

```javascript
dF    // Roll one standard Fudge die
dF.2  // Equivalent to dF
dF.1  // Roll one Fudge die with four blank faces
4dF   // Roll four standard Fudge dice and add their results together
```

::: roller 4dF :::

## Range dice <Badge text="New in v6" vertical="middle"/>

**Notation:** `d{start...end}` / `d{start:end}` / `d{start:step:end}`

Range dice let you choose the lowest and highest values, instead of starting at `1`. Put the range inside curly braces after `d`:

```javascript
d{0...2}    // Roll 0, 1 or 2
d{0:2}      // Equivalent to d{0...2}
4d{-2...2}  // Roll four dice, each with values -2, -1, 0, 1 or 2
```

Each possible value has an equal chance. The start is included, and the end is included if the step reaches it.

::: roller 4d{-2...2} :::

### Choosing a step

Both `...` and the two-number `:` form increase by `1`. To choose a different step, use three numbers in the order **start, step, end**:

| Notation | Possible values |
| --- | --- |
| `d{4:2:8}` | `4`, `6`, `8` |
| `d{8:-2:4}` | `8`, `6`, `4` |
| `d{4:3:8}` | `4`, `7` |
| `d{0:0.25:1}` | `0`, `0.25`, `0.5`, `0.75`, `1` |
| `d{1.5...3.5}` | `1.5`, `2.5`, `3.5` |

A negative step creates a descending range. The step must move towards the end and cannot be zero: `d{8:4}`, `d{4:-2:8}` and `d{4:0:8}` are invalid.

The end is a boundary, not an extra face. For example, `d{4:3:8}` stops at `7` because the next step would be `10`.

Signed numbers, decimal values and spaces inside the braces are allowed:

```javascript
2d{ -1 : 0.5 : 1 } // Each die can roll -1, -0.5, 0, 0.5 or 1
```

::: roller 2d{0:0.25:1} :::

::: warning Range limits
Range bounds and steps allow up to four decimal places, ignoring trailing zeros. Write ordinary decimal numbers, such as `0.0001`, rather than exponent notation such as `1e-4`. Each number can contain at most 1,024 characters.

Ranges with an explicit step or fractional bounds can contain at most 1,000 possible values. Their start, step and end must each be between `-450359962737.0495` and `450359962737.0495`.

Ascending ranges with whole-number bounds within JavaScript's safe integer range and an omitted step are exempt from those face-count and magnitude limits. For example, `d{0:1000}` is valid, while `d{0:1:1000}` exceeds the 1,000-value limit.
:::

## Face dice <Badge text="New in v6" vertical="middle"/>

**Notation:** `d{value,value,...}`

Face dice let you list the exact numeric values a die can roll. Separate the faces with commas inside curly braces:

```javascript
d{1,2,5,8}     // Roll 1, 2, 5 or 8
3d{-1,0,1}     // Roll three dice, each with values -1, 0 or 1
d{0,0.5,2.5}   // Decimal values are allowed
d{5}           // A single face always rolls 5
```

Each listed face has an equal chance of being selected. Faces do not need to be consecutive or written in ascending order. Values must be finite numbers, rather than text labels or expressions.

::: roller 3d{1,2,5,8} :::

### Repeated faces

Repeat a value to make it more likely. For example, `d{1,1,2}` has three equally likely faces:

| Value | Listed faces | Chance |
| --- | --- | --- |
| `1` | 2 | 2 in 3 |
| `2` | 1 | 1 in 3 |

This changes the chance of rolling a value, rather than how much it contributes to the total. To make a result count as more than one success, use [weighted targets](modifiers.md#weighted-successes).

::: roller 4d{1,1,2} :::

::: warning Face limits
A face list must contain between `1` and `1,000` faces, including repeated values. This is separate from the [number of dice](#number-of-dice) you roll.

Signed numbers, decimals and spaces inside the braces are allowed. Use ordinary decimal numbers rather than exponent notation. Explicit face lists do not have the four-decimal-place or magnitude limits of stepped ranges.
:::

### Using modifiers and maths

Range and face dice work with [modifiers](modifiers.md) and [maths](maths.md) just like other dice:

```javascript
4d{0...2}kh3    // Keep the highest three results
4d{1,1,2}>=2    // Count results of 2 as successes
2d{4:2:8}+3     // Roll two dice with values 4, 6 or 8, then add 3
```

::: roller 4d{1,1,2}>=2 :::
