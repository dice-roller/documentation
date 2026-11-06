# Modifiers

Modifiers change how dice rolls behave, how their results contribute to the total, or how they are displayed.

Add modifiers after the dice notation. You can combine different modifiers to apply several rules to the same set of dice:

```javascript
5d10!k2 // Explode rolls of 10, then keep the highest two results
```

This example combines [Explode](#explode) with [Keep](#keep).

Some modifiers also work with [roll groups](roll-groups.md), where their behaviour can differ. This page describes how they work with individual sets of dice.

Throughout this page, `{n}` represents a number and `{cp}` represents a [compare point](#compare-point). These are placeholders; do not include the braces in your notation.

::: warning Modifier order
Modifiers run in a specific execution order, regardless of where you place them in the notation.

Each modifier has an `order` value. Lower values run first, and the sections below follow the default execution order.

For example, [Explode](#explode) has an order of `3`, while [Drop](#drop) has an order of `7`. Both expressions below therefore apply Explode to matching results first, then Drop to exclude the lowest result:

```javascript
4d6!d1
4d6d1!
```

Changing their position in the notation does not change their execution order. You can [customise the modifier execution order](../customisation.md#modifier-execution-order) if your game requires different behaviour.
:::

::: tip Missing a modifier?
If your game uses a modifier that is not supported, [let us know](https://github.com/dice-roller/rpg-dice-roller/issues).
:::

## Min

**Notation:** `min{n}`

**Order:** 1

Set a minimum value for each die result. Any result below the specified value is raised to that value; other results are unchanged.

For example, `4d6min3` treats any rolls of `1` or `2` as `3`:

```javascript
// Without the modifier
4d6: [1, 4, 3, 2] = 10

// The same rolls with a minimum value of 3
4d6min3: [3^, 4, 3, 3^] = 13
```

Changed results are marked with `^`.

This is the opposite of the [Max modifier](#max).

::: roller 4d6min3 :::

::: tip Result probabilities
This changes the distribution of results rather than changing the die itself.

With `d6min3`, an original roll of `1`, `2` or `3` produces a result of `3`, giving it a `3 in 6` chance. Results of `4`, `5` and `6` each retain a `1 in 6` chance.
:::

## Max

**Notation:** `max{n}`

**Order:** 2

Set a maximum value for each die result. Any result above the specified value is lowered to that value; other results are unchanged.

For example, `4d6max3` treats any rolls of `4`, `5` or `6` as `3`:

```javascript
// Without the modifier
4d6: [5, 4, 3, 2] = 14

// The same rolls with a maximum value of 3
4d6max3: [3v, 3v, 3, 2] = 11
```

Changed results are marked with `v`.

This is the opposite of the [Min modifier](#min).

::: roller 4d6max3 :::

::: tip Result probabilities
With `d6max3`, an original roll of `3`, `4`, `5` or `6` produces a result of `3`, giving it a `4 in 6` chance. Results of `1` and `2` each retain a `1 in 6` chance.
:::

## Explode

**Notation:** `!` / `!{cp}`

**Order:** 3

Exploding dice generate an extra roll whenever a result matches a condition. By default, a die explodes when it rolls its highest possible value.

Add `!` after the dice notation:

```javascript
4d10! // Roll four ten-sided dice, exploding any rolls of 10
```

Each extra roll is added to the results. If it also matches the condition, it explodes again:

```javascript
2d6!: [4, 6!, 6!, 2] = 18
```

Here, the original dice rolled `4` and `6`. The `6` exploded, producing another `6`, which exploded again and produced a `2`.

Results that trigger an extra roll are marked with `!`.

Use a [compare point](#compare-point) to change which values explode:

```javascript
2d6!=5   // Explode on rolls equal to 5
2d6!>4   // Explode on rolls greater than 4
4d10!<=3 // Explode on rolls less than or equal to 3
```

::: roller 4d10!<=3 :::

::: warning Exploding with “not equal to”
To explode on values that are not equal to a number, use `<>` rather than `!=`.

Following `!` with `!=` produces `!!=`, which is interpreted as [Compound](#compound) with an equality condition:

```javascript
2d6!!=4 // Compound on rolls equal to 4
2d6!<>4 // Explode on rolls not equal to 4
```

See [Not equal to](#not-equal-to) for more examples.
:::

::: tip Iteration limit
By default, each original die can generate up to `1,000` extra rolls. This prevents conditions such as `d10!>0` from continuing indefinitely.

* `1d10!>0` produces `1,001` results: one original roll and `1,000` extra rolls.
* `2d10!>0` produces `2,002` results: two original rolls and `1,000` extra rolls for each.

The last result is retained even if it still matches the explosion condition.

The same limit applies to [Compound](#compound) and [Penetrate](#penetrate).
:::

### Compound

**Notation:** `!!` / `!!{cp}`

**Order:** 3

Compounding works like [Explode](#explode), but combines each original roll and its extra rolls into a single result.

Use `!!` instead of `!`:

```javascript
// Exploding lists the extra rolls separately
2d6!: [4, 6!, 6!, 2] = 18

// Compounding combines each chain into one result
2d6!!: [4, 14!!] = 18
```

The total is the same, but later modifiers act on the combined results. For example, [Keep](#keep) treats `14` as one result rather than considering `6`, `6` and `2` separately.

Compounded results are marked with `!!`.

Use a [compare point](#compare-point) to change which values trigger another roll:

```javascript
2d6!!=5   // Compound on rolls equal to 5
2d6!!>4   // Compound on rolls greater than 4
4d10!!<=3 // Compound on rolls less than or equal to 3
```

::: roller 4d10!!<=3 :::

### Penetrate

**Notation:** `!p` / `!!p` / `!p{cp}` / `!!p{cp}`

**Order:** 3

Penetrating works like [Explode](#explode), but subtracts `1` from each extra roll. The original rolls are unchanged.

Use `!p` after the dice notation:

```javascript
2d6!p
```

Whether an extra roll triggers another explosion is checked **before** subtracting `1`.

For example, suppose the original dice roll `6` and `1`. The `6` generates extra rolls of `6`, `6` and `4`:

```javascript
2d6!p: [6!p, 5!p, 5!p, 3, 1] = 20
```

The extra rolls contribute `5`, `5` and `3` after subtracting `1`. Both extra rolls of `6` still trigger another explosion.

Use `!!p` to combine Penetrate with [Compound](#compound):

```javascript
// The same rolls, combined into one result per original die
2d6!!p: [19!!p, 1] = 20
```

Use a [compare point](#compare-point) to change which values trigger another roll:

```javascript
2d6!p=5   // Penetrate on rolls equal to 5
2d6!!p>4  // Penetrate and compound on rolls greater than 4
4d10!p<=3 // Penetrate on rolls less than or equal to 3
```

::: roller 4d10!p<=3 :::

## Re-roll

**Notation:** `r` / `ro` / `r{cp}` / `ro{cp}`

**Order:** 4

Replace results that match a condition by rolling those dice again.

By default, a die is re-rolled when it rolls its lowest possible value. Use `r` to keep re-rolling until the result no longer matches:

```javascript
d6r // Re-roll any 1s, repeating if another 1 is rolled
```

Unlike [Explode](#explode), re-rolling replaces the previous result rather than adding another result to the total.

Use `ro` to re-roll each matching die only once:

```javascript
d6ro // Re-roll a 1 once, keeping the replacement even if it is also 1
```

Use a [compare point](#compare-point) to change which values are re-rolled:

```javascript
2d6r=5   // Re-roll results equal to 5 until they no longer match
2d6ro>4  // Re-roll results greater than 4 once
4d10r<=3 // Re-roll results less than or equal to 3 until they no longer match
```

::: roller 4d10r<=3 :::

::: tip Iteration limit
By default, each die can be re-rolled up to `1,000` times.

If the limit is reached, the final result is kept even if it still matches the condition.

For example, `2d10r>0` reaches this limit for both dice because every possible result is greater than `0`.
:::

## Unique

**Notation:** `u` / `uo` / `u{cp}` / `uo{cp}`

**Order:** 5

Re-roll duplicate results within a set of dice.

Results are checked in order. The first result is kept, and each later result is compared with those already kept. A duplicate is re-rolled until it has a different value:

```javascript
2d10u // Re-roll duplicates until the results are unique
```

Use `uo` to re-roll each duplicate only once:

```javascript
2d10uo // Re-roll duplicates once, even if the replacement is still a duplicate
```

Use a [compare point](#compare-point) to restrict which duplicates are re-rolled:

```javascript
4d6u=5   // Re-roll duplicates equal to 5
3d8uo>6  // Re-roll duplicates greater than 6 once
10d4u<=2 // Re-roll duplicates less than or equal to 2
```

Only duplicates matching the condition are re-rolled. Other duplicates can remain, including when a replacement result falls outside the condition.

::: roller 5d6u :::

::: tip Iteration limit
By default, each die after the first can be re-rolled up to `1,000` times. If the limit is reached, the final result is kept even if it is still a duplicate.

Some expressions cannot produce entirely unique results. For example, `5d3u` requests five unique results from only three possible values.

For five dice, the maximum is `4,000` re-rolls: up to `1,000` for each die after the first.
:::

## Keep

**Notation:** `k{n}` / `kh{n}` / `kl{n}`

**Order:** 6

Keep only the specified number of highest or lowest results. All other results are excluded from the total.

Use `kh` to keep the highest results or `kl` to keep the lowest. The shorthand `k` defaults to highest:

```javascript
4d10kh2 // Keep the highest two results
4d10k2  // Equivalent to 4d10kh2
4d10kl1 // Keep the lowest result
```

Excluded results remain visible and are marked with `d`:

```javascript
6d8k3: [3d, 6, 7, 2d, 5, 4d] = 18
```

This is the opposite of the [Drop modifier](#drop).

::: roller 6d8k3 :::

::: warning Using Keep and Drop together
Keep and [Drop](#drop) both select from the entire set of results, including results already excluded by another modifier. Drop does not select only from the results left by Keep.

For example, this excludes every result:

```javascript
3d10k1dh1: [7d, 1d, 2d] = 0
```

Keep excludes `1` and `2`, leaving `7`. Drop then excludes the highest result, `7`.

In this example, both modifiers exclude the lowest result, so only the highest remains:

```javascript
3d10k1d1: [6d, 1d, 9] = 9
```

Keep excludes `6` and `1`. Drop selects `1`, which is already excluded.
:::

## Drop

**Notation:** `d{n}` / `dh{n}` / `dl{n}`

**Order:** 7

Exclude the specified number of highest or lowest results from the total.

Use `dh` to drop the highest results or `dl` to drop the lowest. The shorthand `d` defaults to lowest:

```javascript
4d10dl2 // Drop the lowest two results
4d10d2  // Equivalent to 4d10dl2
4d10dh1 // Drop the highest result
```

Dropped results remain visible and are marked with `d`:

```javascript
6d8dh3: [3, 6d, 7d, 2, 5d, 4] = 9
```

You can combine Drop Highest and Drop Lowest:

```javascript
// Drop the highest and lowest results
4d10dh1dl1: [5, 3d, 7, 8d] = 12
```

This is the opposite of the [Keep modifier](#keep).

::: roller 4d10dh1dl1 :::

::: tip Using Keep and Drop together
Both modifiers consider the entire set of results, including results already dropped. See the [Keep section](#keep) for examples.
:::

## Target success / Dice pool

**Notation:** `{cp}`

**Order:** 8

Count results that meet a condition instead of adding their values together.

Add a [compare point](#compare-point) after the dice notation. Each matching result counts as `1` success; other results count as `0`.

For example, this rolls five ten-sided dice and counts results of `8` or higher:

```javascript
5d10>=8
```

Successful results are marked with `*`:

```javascript
2d6=6: [4, 6*] = 1
4d3>1: [1, 3*, 2*, 1] = 2
4d3<2: [1*, 3, 2, 1*] = 2
5d8>=5: [2, 4, 6*, 3, 8*] = 2
6d10<=4: [7, 2*, 10, 3*, 3*, 4*] = 4
```

Results excluded by [Keep](#keep) or [Drop](#drop) do not contribute to the success count.

::: roller 6d10<=4 :::

::: warning Counting “not equal to”
Use `<>` to count results that are not equal to a number.

Immediately after dice notation, `!=` is interpreted as [Explode](#explode) with an equality condition:

```javascript
2d6!=4 // Explode on rolls equal to 4
2d6<>4 // Count rolls not equal to 4 as successes
```

See [Not equal to](#not-equal-to).
:::

::: warning Combining target conditions with other modifiers
A target condition placed directly after a modifier with an optional compare point can become that modifier's condition instead.

For example, this sets the condition for [Explode](#explode) rather than counting successes:

```javascript
2d6!>3 // Explode on results greater than 3; does not count successes
```

Place the target condition first to avoid this ambiguity:

```javascript
2d6>3!   // Explode on 6; count results greater than 3 as successes
2d6>3!<4 // Explode on results less than 4; count results greater than 3 as successes
```

This changes how the notation is interpreted, not the execution order. Explode still runs before Target Success.
:::

## Target failure / Dice pool

**Notation:** `f{cp}`

**Order:** 8

Subtract failures when counting successes.

A failure condition must appear immediately after a [target success condition](#target-success-dice-pool). Use `f` followed by a [compare point](#compare-point):

```javascript
4d6>4f<3 // Results greater than 4 are successes; results less than 3 are failures
```

Each success contributes `1`, each failure contributes `-1`, and results matching neither condition contribute `0`.

Failures are marked with `_`:

```javascript
4d6>4f<3: [2_, 5*, 4, 5*] = 1
```

Here, two successes and one failure give a total of `1`.

The total can be negative if failures outnumber successes. If a result matches both conditions, it counts as a success.

::: roller 4d6>4f<3 :::

## Critical success

**Notation:** `cs` / `cs{cp}`

**Order:** 9

Mark results as critical successes. By default, this marks rolls equal to the die's highest possible value:

```javascript
2d20cs: [4, 20**] = 24
```

Critical successes are marked with `**`.

Use a [compare point](#compare-point) to choose a different value or range:

```javascript
4d10cs>7 // Mark results greater than 7 as critical successes
5d3cs=2  // Mark results equal to 2 as critical successes
```

::: tip Display only
Critical Success does not change result values or how they contribute to the total. To count successful results, use [Target Success](#target-success-dice-pool).
:::

::: roller 5d20cs>=16 :::

## Critical failure

**Notation:** `cf` / `cf{cp}`

**Order:** 10

Mark results as critical failures. By default, this marks rolls equal to the die's lowest possible value:

```javascript
2d20cf: [4, 1__] = 5
```

Critical failures are marked with `__`.

Use a [compare point](#compare-point) to choose a different value or range:

```javascript
4d10cf<3 // Mark results less than 3 as critical failures
6d4cf=2  // Mark results equal to 2 as critical failures
```

::: tip Display only
Critical Failure does not change result values or how they contribute to the total. To subtract failures from a success count, use [Target Failure](#target-failure-dice-pool).
:::

::: roller 5d20cf<=6 :::

## Sort

**Notation:** `s` / `sa` / `sd`

**Order:** 11

Display results in numerical order.

Use `sa` for ascending order or `sd` for descending order. The shorthand `s` defaults to ascending:

```javascript
4d6: [4, 3, 5, 1]   // Original order
4d6s: [1, 3, 4, 5]  // Ascending
4d6sa: [1, 3, 4, 5] // Ascending
4d6sd: [5, 4, 3, 1] // Descending
```

Sorting does not change the total. It runs after the other modifiers by default, and includes results excluded by [Keep](#keep) or [Drop](#drop) in the sorted output.

::: roller 4d6sd :::

## Compare point

A compare point defines a condition using a comparison operator followed by a number.

For example, `>=5` means “greater than or equal to 5”.

| Operator | Meaning |
| --- | --- |
| `=` | Equal to |
| `!=` or `<>` | Not equal to |
| `<` | Less than |
| `>` | Greater than |
| `<=` | Less than or equal to |
| `>=` | Greater than or equal to |

Compare points let you change the conditions used by modifiers:

```javascript
d6!=3   // Explode on results equal to 3
d10!>=5 // Explode on results greater than or equal to 5
d6!!>4  // Compound on results greater than 4
d6!<>4  // Explode on results not equal to 4
d4r<3   // Re-roll results less than 3
```

These examples use [Explode](#explode), [Compound](#compound) and [Re-roll](#re-roll).

Compare points are also used directly for [target success](#target-success-dice-pool) and [target failure](#target-failure-dice-pool) conditions.

::: roller d4r<3 :::

### Not equal to

**Notation:** `!=` / `<>`

Both operators express “not equal to”, but `!=` can be ambiguous because `!` is also the notation for [Explode](#explode).

Immediately after dice notation, `!=` is interpreted as Explode followed by an equality condition:

```javascript
2d6!=4 // Explode on results equal to 4
2d6<>4 // Count results not equal to 4 as successes
```

The second expression uses [Target Success](#target-success-dice-pool).

Similarly, adding `!=` after Explode produces `!!=`, which is interpreted as [Compound](#compound) followed by an equality condition:

```javascript
2d6!!=4 // Compound on results equal to 4
2d6!<>4 // Explode on results not equal to 4
```

Use `<>` in these situations to make the intended condition unambiguous.

With modifiers such as [Re-roll](#re-roll), either form can be used:

```javascript
d6r!=3 // Re-roll results not equal to 3
d6r<>3 // Equivalent to d6r!=3
```
