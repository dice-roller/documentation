# Variables <Badge text="New in v6" vertical="middle"/>

Variables let you reuse the same notation with different values, such as each character's attack bonus, strength, or fire resistance.

You can [supply your own values](#variables-you-supply) when you make a roll, or use the [built-in variables](#built-in-variables).

## Variables you supply

**Notation:** `$name`

If you have [supplied your own data](../usage/roll-options.md#variable-data), then you can use it in notation when you roll.

Using this example data:

```javascript
{
  bonus: 3,
  character: { attackBonus: 2, isPoisoned: true }
}
```

This adds the value of `bonus` to a d20 roll:

```javascript
d20+$bonus: [18]+$bonus = 21
```

::: roller d20+$bonus :::

Use a dot to refer to a value inside a nested object:

```javascript
d20+$character.attackBonus: [18]+$character.attackBonus = 20
```

::: roller d20+$character.attackBonus :::

Variables can hold finite numbers or booleans. The dice roller treats `true` as `1` and `false` as `0`, so `$character.isPoisoned` evaluates to `1` with the example data above. A reference such as `$character.defence` gives an error if the roll tries to read it and no value was supplied.

See [Variable data](../usage/roll-options.md#variable-data) for how to pass these values to a roll.

## Using variables in expressions

You can use variables in arithmetic, functions, [comparisons and ternaries](comparisons-and-ternaries.md), as well as in [calculated quantities and sides](maths.md#calculating-quantities-and-sides).

```javascript
(max($bonus+$character.attackBonus, 4))d10
```

With the example data above, `max(3 + 2, 4)` gives `5`, so the roller rolls five d10s.

::: roller (max($bonus+$character.attackBonus, 4))d10 :::

## Built-in variables

**Notation:** `$$name`

The dice roller sets built-in variables as it evaluates the notation. Use two dollar signs to refer to a built-in variable and one for a value you supply.

### Ternary branches

**Notation:** `$$condition`

Inside the selected branch of a [ternary](comparisons-and-ternaries.md#ternary-operators), `$$condition` holds the numeric result of the condition.

You can use it in either branch. If a branch contains another ternary, `$$condition` in the inner ternary’s selected branch refers to the inner condition. Reading `$$condition` outside a ternary branch gives an error.

```javascript
((d6) >= 4) ? ($$condition + 2) : (4 - $$condition)
```

The comparison gives `1` on a roll of `4` or higher, so the first branch gives `3`. On a lower roll it gives `0`, so the second branch gives `4`.

::: roller ((d6) >= 4) ? ($$condition + 2) : (4 - $$condition) :::

An arithmetic condition can also be reused without rolling its dice again:

```javascript
(d6 - 1) ? ($condition + 2) : (0)
```

If the die rolls `4`, the condition evaluates to `3` and the first branch gives `5`. If the die rolls `1`, the condition is `0` and the second branch gives `0`.
