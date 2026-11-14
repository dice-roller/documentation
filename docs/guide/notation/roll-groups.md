---
outline: [2,3]
---
# Roll groups

Roll groups combine one or more expressions inside curly braces, with commas separating the expressions:

```javascript
{4d6, 2d10, d4}
```

Each expression is a **sub-roll**. Its total contributes to the group total, unless a group modifier changes how it is counted.

Groups let you apply [modifiers](#modifiers) across several sets of dice or select between complete roll expressions.

## Creating a group

Enclose your expressions in `{ ... }`:

```javascript
{4d6, 2d10, d4}: {[2, 6, 4, 2], [7, 4], [1]} = 26
```

Here, the three sub-rolls have totals of `14`, `11` and `1`, giving a group total of `26`.

Sub-rolls can include [mathematical expressions](maths.md) and [dice modifiers](modifiers.md):

```javascript
{2d6+3, d20*2, 4d6kh3}
```

You can also use a group as part of a larger calculation:

```javascript
{2d6, d8}+5
```

::: roller {4d6, 2d10, d4} :::

::: tip Groups with one sub-roll
A group does not need to contain commas. Without group modifiers, a group containing one expression produces the same total as the expression on its own:

```javascript
{4d10}      // Same total as 4d10
{4d10*3}    // Same total as 4d10*3
{4d10+5d6}  // Same total as 4d10+5d6
```

However, adding a comma creates separate sub-rolls. This matters when applying group modifiers:

```javascript
{4d10+5d6} // One sub-roll containing two sets of dice
{4d10,5d6} // Two separate sub-rolls
```
:::

## Modifiers

Add a group modifier after the closing brace:

```javascript
{4d6, 2d10}k1 // Keep the sub-roll with the highest total
```

Groups support [Keep](#keep), [Drop](#drop), [Target Success](#target-success-dice-pool), [Target Failure](#target-failure-dice-pool) and [Sort](#sort).

Their notation matches the corresponding [dice modifiers](modifiers.md), but their behaviour depends on whether they are applied to individual dice or a group.

Modifiers inside the braces apply to the dice or groups they follow. Modifiers after the closing brace apply to the outer group:

```javascript
{4d6kh3, 2d10}k1
```

Here, [Keep](modifiers.md#keep) first selects the highest three results from `4d6`. The group-level [Keep](#keep) then compares that sub-roll's total with the total of `2d10`, keeping whichever is higher.

::: warning Modifier order
Each sub-roll is evaluated, including its own modifiers, before the group modifiers are applied.

Group modifiers follow the same [execution-order rules](../customisation/modifiers.md#modifier-execution-order) as dice modifiers. By default, [Keep](#keep) runs before [Drop](#drop), followed by [Target Success and Target Failure](#target-success-dice-pool), then [Sort](#sort).

Their position in the notation does not change this order.
:::

### Keep

**Notation:** `k{n}` / `kh{n}` / `kl{n}`

**Order:** 6

Keep the specified number of highest or lowest results, excluding the rest from the total.

As with the [dice-level Keep modifier](modifiers.md#keep), `kh` keeps the highest values, `kl` keeps the lowest, and `k` defaults to highest.

The results being compared depend on the number of sub-rolls.

#### Single sub-roll

For a group containing one expression, Keep selects individual die results across the sets of dice in that expression.

```javascript
// Keep the highest two results across all nine dice: 8 and 6
{4d10*(2+5d6)}k2: {[8, 1d, 4d, 1d]*(2+[1d, 6, 1d, 5d, 3d])} = 64
```

The selected results remain in their original sets of dice, and the expression is recalculated. Other numbers and operators are unchanged.

In this example, the calculation becomes `8*(2+6)`, giving `64`.

::: roller {4d10*(2+5d6)}k2 :::

#### Multiple sub-rolls

For a group containing several expressions, Keep selects whole sub-rolls by their totals.

```javascript
// Keep the two sub-rolls with the highest totals
{4d10, 5d6, 2d10}k2: {[8, 1, 4, 1], [1, 5, 1, 5, 3], ([6, 3])d} = 29
```

The sub-roll totals are `14`, `15` and `9`. Keep excludes the sub-roll totalling `9`, leaving `14+15 = 29`.

The calculation includes any maths within each sub-roll:

```javascript
{5+d10, 3d4*2}k1: {(5+[8])d, [3, 2, 2]*2} = 14
```

Here, the sub-roll totals are `13` and `14`, so the second is kept.

::: roller {4d10, 5d6, 2d10}k2 :::

::: warning Combining Keep and Drop
Keep and [Drop](#drop) both consider all eligible results, including those already excluded.

For a single sub-roll, they both select from the individual dice. For multiple sub-rolls, they both select from the whole sub-rolls.

See the [Keep and Drop explanation](modifiers.md#keep) for examples of how this can affect the total.
:::

### Drop

**Notation:** `d{n}` / `dh{n}` / `dl{n}`

**Order:** 7

Exclude the specified number of highest or lowest results from the total.

As with the [dice-level Drop modifier](modifiers.md#drop), `dh` drops the highest values, `dl` drops the lowest, and `d` defaults to lowest.

This is the opposite of [Keep](#keep).

#### Single sub-roll

For a group containing one expression, Drop selects individual die results across the sets of dice in that expression.

```javascript
// Drop the lowest three results across all nine dice
{4d6+2d8-3d30}d3: {[3d, 5, 3, 2d]+[7, 4]-[2d, 14, 7]} = -2
```

The selected results are excluded from their original sets of dice, and the expression is recalculated.

Here, the calculation becomes `(5+3)+(7+4)-(14+7)`, giving `-2`.

::: roller {4d6+2d8-3d30}d3 :::

#### Multiple sub-rolls

For a group containing several expressions, Drop selects whole sub-rolls by their totals.

```javascript
// Drop the two sub-rolls with the lowest totals
{4d10, 5d6, 2d10}d2: {([8, 1, 4, 1])d, [1, 5, 1, 5, 3], ([6, 3])d} = 15
```

The sub-roll totals are `14`, `15` and `9`. Drop excludes the sub-rolls totalling `9` and `14`, leaving `15`.

The calculation includes any maths within each sub-roll:

```javascript
{5+d10, 3d4*2}d1: {(5+[8])d, [3, 2, 2]*2} = 14
```

::: roller {4d10, 5d6, 2d10}d2 :::

### Target success / Dice pool

**Notation:** `{cp}`

**Order:** 8

Count sub-rolls whose totals meet a condition, rather than adding their totals together.

Add a [compare point](modifiers.md#compare-point) after the group. Each matching sub-roll contributes `1` success; other sub-rolls contribute `0`.

Unlike [Keep](#keep) and [Drop](#drop), Target Success always checks complete sub-roll totals, even when the group contains only one sub-roll.

#### Single sub-roll

A group containing one sub-roll returns either `1` or `0`:

```javascript
// The sub-roll total is 42, which is greater than 40
{3d20+5}>40: {([11, 7, 19]+5)*} = 1
```

The condition checks the total of `3d20+5`, not each individual die result.

::: roller {3d20+5}>40 :::

#### Multiple sub-rolls

Each sub-roll is checked separately, and the successes are counted:

```javascript
{4d6+2d8, 3d20+3, 5d10+1}>40: {[4, 3, 3, 2]+[2, 6], ([17, 5, 20]+3)*, ([7, 9, 6, 10, 8]+1)*} = 2
```

| Sub-roll | Total | Outcome |
| --- | --- | --- |
| `4d6+2d8` | `20` | Not a success |
| `3d20+3` | `45` | Success |
| `5d10+1` | `41` | Success |

Two sub-rolls have totals greater than `40`, giving `2` successes.

Sub-rolls excluded by [Keep](#keep) or [Drop](#drop) do not contribute to the success count.

::: roller {4d6+2d8, 3d20+3, 5d10+1}>40 :::

### Target failure / Dice pool

**Notation:** `f{cp}`

**Order:** 8

Subtract failures when counting successful sub-rolls.

A failure condition must appear immediately after a [target success condition](#target-success-dice-pool). Use `f` followed by a [compare point](modifiers.md#compare-point):

```javascript
{3d10+5}>30f<15
```

Each sub-roll contributes:

* `1` if its total matches the success condition.
* `-1` if its total matches the failure condition.
* `0` if its total matches neither condition.

If a total matches both conditions, it counts as a success. The final count can be negative.

#### Single sub-roll

A group containing one sub-roll returns `1`, `-1` or `0`:

```javascript
// The sub-roll total is 14, which is less than 15
{3d10+5}>30f<15: {([5, 3, 1]+5)_} = -1
```

::: roller {3d10+5}>30f<15 :::

#### Multiple sub-rolls

Successes and failures are counted across the group:

```javascript
{4d6+2d8, 3d20+3, 5d10+1}>40f<30: {([4, 3, 3, 2]+[2, 6])_, ([17, 5, 20]+3)*, ([7, 9, 6, 10, 8]+1)*} = 1
```

| Sub-roll | Total | Outcome | Contribution |
| --- | --- | --- | --- |
| `4d6+2d8` | `20` | Failure | `-1` |
| `3d20+3` | `45` | Success | `1` |
| `5d10+1` | `41` | Success | `1` |

Two successes minus one failure give a final count of `1`.

As with [Target Success](#target-success-dice-pool), sub-rolls excluded by [Keep](#keep) or [Drop](#drop) do not contribute to the count.

::: roller {4d6+2d8, 3d20+3, 5d10+1}>40f<30 :::

### Sort

**Notation:** `s` / `sa` / `sd`

**Order:** 11

Sort sub-rolls by their totals and sort the individual results within each set of dice.

As with the [dice-level Sort modifier](modifiers.md#sort), `sa` sorts in ascending order, `sd` sorts in descending order, and `s` defaults to ascending.

Sorting changes the display order without changing the total.

#### Single sub-roll

For a group containing one expression, the results within each set of dice are sorted:

```javascript
// Original order
{4d6+4}: {[4, 3, 5, 1]+4} = 17

// Ascending order
{4d6+4}s: {[1, 3, 4, 5]+4} = 17

// Descending order
{4d6+4}sd: {[5, 4, 3, 1]+4} = 17
```

If the expression contains several sets of dice, each set is sorted separately. Results stay with the dice they came from.

::: roller {4d6+4}s :::

#### Multiple sub-rolls

For a group containing several expressions, the sub-rolls are sorted by their totals. The results within each set of dice are also sorted:

```javascript
// Original order: sub-roll totals are 6.5, 14 and 12
{4d6/2, 3d4+5, 2d10}: {[4, 3, 5, 1]/2, [3, 2, 4]+5, [8, 4]} = 32.5

// Ascending order: 6.5, 12, 14
{4d6/2, 3d4+5, 2d10}s: {[1, 3, 4, 5]/2, [4, 8], [2, 3, 4]+5} = 32.5

// Descending order: 14, 12, 6.5
{4d6/2, 3d4+5, 2d10}sd: {[4, 3, 2]+5, [8, 4], [5, 4, 3, 1]/2} = 32.5
```

::: roller {4d6/2, 3d4+5, 2d10}s :::
