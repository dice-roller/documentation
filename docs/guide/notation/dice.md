# Dice

The simplest form of notation is just a basic dice roll.

::: warning Die quantity
A single die has a minimum quantity of `1`, and a maximum quantity of `999`.

These are valid: `d8`, `1d10`, `999d6`, `20d4 + 999d10`

These are not: `0d10`, `1000d6`, `-1d20`
:::


## Standard (`d{n}`)

A standard die has a positive numerical number of sides, like typical 6 sided dice, or a d20.

You can roll dice with almost any number of sides.

```javascript
d6    // roll a single 6 sided dice
4d10  // roll a 10 sided dice 4 times and add the results together
```

::: roll 4d10 :::


## Percentile dice (`d%`)

Percentile dice roll a whole number between `1-100`, and are specified with the format `d%`.
This is a shorthand for a standard die with 100 sides, `d100`

```javascript
4d%  // roll a percentile die 4 times and add the results together
```
Is equivalent to:
```javascript
4d100  // roll a 100 sided die 4 times and add the results together
```

::: roll 4d% :::


## Fudge / Fate dice (`dF` / `dF.2` / `dF.1`)

Fudge dice are 6 sided dice marked with minus (`-`), plus (`+`), and blank sides, which correlate to `-1`, `+1`, and `0` respectively.

The default is one third of each, known as `dF.2`, or just `dF`. A variant is `dF.1` which has 4 blanks, 1 plus, and 1 minus.

```javascript
dF    // roll a standard Fudge die. Equivalent to `dF.2`
dF.2  // roll a standard Fudge dice. Equivalent to `dF`
dF.1  // roll the variant Fudge dice
4dF   // Roll a standard Fudge die 4 times and add the results together
```

::: roll 4dF :::
