# What is dice notation?

Dice notation is a compact way to describe a dice roll. It tells the library which dice to roll, how to modify their results, and how to calculate the total.

For example, `2d6+3` means “roll two six-sided dice, add their results together, then add 3”.

RPG Dice Roller uses familiar [dice notation](https://en.wikipedia.org/wiki/Dice_notation), extended with modifiers, roll groups and mathematical expressions to support more complex game mechanics.

## Reading a notation

A basic dice notation consists of a quantity, the letter `d`, and the number of sides:

```javascript
2d6
```

Here, `2` is the number of dice to roll and `6` is the number of sides on each die. If you leave out the quantity, it defaults to one: `d6` is equivalent to `1d6`.

You can build on this by adding modifiers and maths. For example:

```javascript
4d6d1 + 5
```

This tells the library to:

1. Roll four six-sided dice.
2. Drop the lowest result.
3. Add the remaining results together, then add 5.

Try rolling it below. You can also edit the notation to experiment with different dice and values.

::: roller 4d6d1 + 5 :::

## Notation reference

The following pages explain the different parts of the notation and how to combine them:

* [Dice](dice.md) — Choose which dice to roll, such as standard, percentile or Fudge dice.
* [Modifiers](modifiers.md) — Change how rolls behave, with rules such as exploding, re-rolling, and keeping or dropping results.
* [Group rolls](group-rolls.md) — Combine roll expressions into a group and apply modifiers to the group.
* [Roll descriptions](roll-descriptions.md) — Add labels or descriptions to identify your rolls.
* [Maths](maths.md) — Combine dice rolls with arithmetic, parentheses and mathematical functions.
