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

## Range dice

To be completed

## Face dice

To be completed
