# Comparisons and ternaries <Badge text="New in v6" vertical="middle"/>

Compare roll totals to check whether a roll meets a target or beats another roll. Use a ternary to choose what to roll based on the result.

## Comparing expressions

Compare two expressions with an operator between them. The dice roller evaluates each side once and returns `1` if the comparison is true or `0` if it is false.

| Operator | Meaning |
| --- | --- |
| `=` | Equal to |
| `!=` or `<>` | Not equal to |
| `<` | Less than |
| `>` | Greater than |
| `<=` | Less than or equal to |
| `>=` | Greater than or equal to |

Both sides can contain numbers, dice rolls or calculations:

```javascript
// Check if (2d6 + 4) is greater than (d8 + 6)
(2d6 + 4) > (d8 + 6)
```

If the two d6s roll `4` and `5` and the d8 rolls `6`, the comparison is `13 > 12`, which gives `1`.

::: roller (2d6 + 4) > (d8 + 6) :::

Arithmetic takes precedence over comparisons, so `1+2>2` means `(1+2)>2`.

Each comparison has two operands. A chain such as `1<2<3` is invalid.

To use the result of a comparison in a calculation, group the whole comparison in parentheses. For example, `((2d6+4)>10)*5` gives `5` if the total with the bonus exceeds `10`, or `0` otherwise.

### Comparing dice totals

Put parentheses around the dice on the left of the operator to compare their total. A [target success modifier](modifiers.md#target-success-dice-pool) after a dice pool counts matching results.

| Notation | What it checks | Result if both dice roll `3` |
| --- | --- | --- |
| `2d6>=5` | Whether each die rolls at least `5` | `0` successes |
| `(2d6)>=5` | Whether the two dice add up to at least `5` | `1`, because `6 >= 5` |

The parentheses also matter with `!=`. For example, `(d6)!=3` checks whether the roll differs from `3`, while `d6!=3` [explodes](modifiers.md#explode) on a roll of `3`.

## Ternary operators

**Notation:** `(condition) ? (ifNonZero) : (ifZero)`

The dice roller evaluates the condition once. If it gives a non-zero value, the roller evaluates the branch after `?`. If it gives zero, the roller evaluates the branch after `:`.

Only the selected branch is evaluated, including any dice it contains. Put parentheses around the condition and each branch.

For example, roll two eight-sided dice for damage if `2d6 + 4` beats `10`. Otherwise the damage is `0`.

```javascript
((2d6 + 4) > 10) ? (2d8) : (0)
```

::: roller ((2d6 + 4) > 10) ? (2d8) : (0) :::

Use the [built-in variable `$$condition`](variables.md#ternary-branches) to reuse the numeric value of the condition inside either branch. If `2d6` totals `7` in this example, the condition is `3` and the selected branch doubles it to `6`.

```javascript
(2d6 - 4) ? (2 * $$condition) : (0)
```

### Shorthand ternary

**Notation:** `(condition) ?: (fallback)`

Use `?:` to keep the condition's value when it is non-zero and use a fallback when it is zero. Write `?` and `:` together.

```javascript
(d6 - 3) ?: (1)
```

If the d6 rolls `5`, the result is `2`. If it rolls `3`, the condition gives zero and the result is `1`. A roll of `2` gives `-1`, which is also non-zero.

This is equivalent to:

```javascript
(d6 - 3) ? ($$condition) : (1)
```

::: roller (d6 - 3) ?: (1) :::
