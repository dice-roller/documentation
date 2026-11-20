# Variables <Badge text="New in v6" vertical="middle"/>

Variables let you reuse the same notation with different values, such as each character's attack bonus, strength, or fire resistance.

You can [supply your own values](#variables-you-supply) when you make a roll, or use the [built-in variables](#built-in-variables).

## Variables you supply

**Notation:** `${name}`

If you have [supplied your own data](../usage/index.md#variable-data), then you can use it in notation when you roll.

Using this example data:

```javascript
{
  bonus: 3,
  character: { attackBonus: 2, isPoisoned: false }
}
```

This adds the value of `bonus` to a d20 roll:

```javascript
d20+$bonus: [18] + 3 = 21
```

Use a dot to refer to a value inside a nested object:

```javascript
d20+$character.attackBonus: [18] + 2 = 20
```

See [Variable data](../usage/index.md#variable-data) for how to pass these values to a roll.

## Using variables in expressions

You can use variables in arithmetic, functions, comparisons and ternaries, as well as in [calculated quantities and sides](maths.md#calculating-quantities-and-sides).

```javascript
(max($bonus+$character.attackBonus, 4))d10
```

Using the data example above, `bonus` set to `3` and `character.attackBonus` set to `2`, it produces `(max(3 + 2, 4))d10`.

## Built-in variables

**Notation:** `$${name}`

The dice roller sets built-in variables as it evaluates the notation. These are differentiated from variables you supply by using `$${name}`.

### Ternary branches

**Notation:** `$$condition`

Inside the selected branch of a ternary, `$$condition` holds the numeric result of the condition.

You can use it in either branch.

```javascript
(d6>=4) ? ($$condition + 2) : (4 - $$condition)
```

::: roller (d6>=4) ? ($$condition + 2) : (4 - $$condition) :::

See [Built-in variables in the usage guide](../usage/index.md#built-in-variables) for a worked example.
