---
outline: [2]
---

# Modifiers

Modifiers change how dice rolls behave, how their results contribute to the total, or how they are displayed.

Add modifiers after the dice notation. You can combine different modifiers to apply several rules to the same set of dice:

```javascript
5d10!k2 // Explode rolls of 10, then keep the highest two results
```

This example combines [Explode](#explode) with [Keep](#keep).

Some modifiers also work with [roll groups](roll-groups.md), where their behaviour can differ. This page describes how they work with individual sets of dice.

Throughout this page, `{n}` represents a number and `{cp}` represents a [compare point](#compare-point). Replace the placeholders without including the braces. Where shown in repeating modifier syntax, `{limit}`, `:{amount}` and `{cp}` are optional. Omit the colon when leaving out the amount.

::: warning Modifier order
Modifiers run in a specific execution order, regardless of where you place them in the notation.

Each modifier has an `order` value. Lower values run first, and the sections below follow the default execution order.

For example, [Explode](#explode) has an order of `4`, while [Drop](#drop) has an order of `8`. Both expressions below therefore apply Explode to matching results first, then Drop to exclude the lowest result:

```javascript
4d6!d1
4d6d1!
```

Changing their position in the notation does not change their execution order. You can [customise the modifier execution order](../customisation/modifiers.md#modifier-execution-order) if your game requires different behaviour.
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

The minimum can be negative or fractional. For example, `dFmin-0.5` raises a roll of `-1` to `-0.5`.

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

The maximum can be negative or fractional. For example, `dFmax-0.5` lowers rolls of `0` and `1` to `-0.5`.

This is the opposite of the [Min modifier](#min).

::: roller 4d6max3 :::

::: tip Result probabilities
With `d6max3`, an original roll of `3`, `4`, `5` or `6` produces a result of `3`, giving it a `4 in 6` chance. Results of `1` and `2` each retain a `1 in 6` chance.
:::

## Matching-batch explosions <Badge text="New in v6" vertical="middle"/>

**Notation:** `!m` / `!m{limit}{cp}f{failure-cp}`

**Order:** 3

Roll another batch of the same size when every die in the current batch has the same value. For example, `2d10!m` rolls another two d10s whenever a pair matches. A mixed batch ends the chain. Its dice are still included in the total.

The text output marks each die in a batch that triggered another roll with `!m`:

```javascript
2d10!m: [4!m, 4!m, 6, 2] = 16
```

`!m` applies to dice pools and runs before ordinary [Explode](#explode). The batch size comes from the number of results the modifier receives.

::: roller 2d10!m :::

### Compare points and batch limits

The limit and both compare points are optional. Write `f` only when supplying a failure compare point. The first [compare point](#compare-point) tests the shared value of a matching batch. A batch that fails this check stops the chain and keeps its score.

```javascript
// Roll another pair on matching values above 1. Double ones stop the chain.
2d10!m>1

// Apply the same condition, with a limit of four extra batches.
2d10!m4>1
```

The limit must be a positive safe integer without leading zeros. It counts extra batches after the initial roll and is capped by `maxIterations`. A new batch is rolled only when the shared `maxGeneratedRolls` allowance can cover every die in it. See [Repeating modifier limits](#repeating-modifier-limits).

### Batch failure

Add `f` followed by a compare point to set a failure condition, as in `2d10!mf=1`. The failure check runs on every matching batch, including the initial batch and the last allowed batch. It takes precedence over the explosion compare point.

A failed batch stops the chain and sets the scoring value of every die rolled by the pool so far to zero. The rolled values remain visible, with `mf` marking the dice in the failed batch. Later modifiers such as [Target Success](#target-success-dice-pool) can still score those dice using their rolled values.

With the same rolls, stopping on double ones and failing on double ones give different totals:

```javascript
// Stop on double ones and keep the score
2d10!m>1: [6!m, 6!m, 1, 1] = 14

// Fail on double ones and zero the score
2d10!m>1f=1: [6!m, 6!m, 1mf, 1mf] = 0
```

::: roller 2d10!m>1f=1 :::

## Explode

**Notation:** `!` / `!{limit}:{amount}{cp}`

**Order:** 4

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

### Limiting explosions <Badge text="New in v6" vertical="middle"/>

Put a number immediately after the modifier to limit how many times it can repeat for each original die. The initial roll does not count towards the limit:

```javascript
d6!1    // Explode at most once
d6!3>=5 // Explode on 5 or 6, at most three times per original die
```

Rolling stops earlier if a result no longer matches the condition. At the limit, the last result is kept even if it still matches:

```javascript
d6!2: [6!, 6!, 6] = 18
```

Here, the original `6` generates another `6`, which generates a final `6`. The limit prevents that final result from exploding again.

The same syntax works for all variants: `d6!!2`, `d6!p2` and `d6!!p2`. Each original die has its own limit, so `2d6!2` can produce up to six results when rolling one extra die per explosion.

Limits must be positive safe integers, written without leading zeros. [Safety limits](#repeating-modifier-limits) still apply, including when you omit a numeric limit.

::: roller 2d6!2 :::

### Multiple dice per explosion <Badge text="New in v6" vertical="middle"/>

Add `:amount` to roll several extra dice whenever a result explodes. The amount defaults to `1` and must be a positive safe integer, written without leading zeros.

| Notation | Behaviour |
| --- | --- |
| `d6!2` | Roll one extra die per explosion, for up to two generations. |
| `d6!:2` | Roll two extra dice per explosion, using the default generation limit. |
| `d6!2:3` | Roll three extra dice per explosion, for up to two generations. |
| `d6!2:3>=5` | The same, exploding on 5 or 6. |

The order is **modifier, limit, amount, compare point**. For example, a single generation of two extra dice could produce:

```javascript
d6!1:2: [6!, 2, 5] = 13
```

Each extra die can also explode, but inherits the remaining generation limit. With `d6!2:3`, the original die can generate three children, and each child can generate three more. This permits up to `13` results per original die, rather than only two extra rolls.

All initial dice are rolled first. The extra dice are then generated one branch at a time: each child's descendants are rolled before moving on to its next sibling, in original-die order.

Use the same amount syntax with `!!`, `!p` and `!!p`. Compounding combines the original die and all its descendants into one result. Penetrating subtracts `1` from every extra die and checks its raw value for further explosions.

::: roller 2d6!2:2 :::

### Compound

**Notation:** `!!` / `!!{limit}:{amount}{cp}`

**Order:** 4

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

**Notation:** `!p` / `!!p` / `!p{limit}:{amount}{cp}` / `!!p{limit}:{amount}{cp}`

**Order:** 4

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

**Notation:** `r` / `ro` / `r{limit}:{amount}{cp}` / `ro:{amount}{cp}`

**Order:** 5

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

### Limiting re-rolls <Badge text="New in v6" vertical="middle"/>

Put the limit after `r` and before any compare point:

```javascript
d6r3<=2 // Re-roll a 1 or 2, up to three times per original die
```

The initial roll does not count towards the limit. Re-rolling stops when the result no longer matches or the limit is reached. The final replacement is kept even if it still matches:

```javascript
d6r2: [1r] = 1
```

This could start with a `1`, replace it with another `1`, and then replace that with a final `1`.

`r1` behaves like `ro`, but keeps the `r` output marker rather than `ro`. Use either the once alias or a numeric limit, not both: `ro1` is invalid. Limits must be positive safe integers without leading zeros, and [safety limits](#repeating-modifier-limits) still apply.

::: roller 4d6r3<=2 :::

### Multiple replacements <Badge text="New in v6" vertical="middle"/>

Add `:amount` to replace a matching result with several new dice. Replaced results do not remain as active dice or contribute to the total:

```javascript
d8ro:2=8: [6ro, 3ro] = 9
```

Here, an initial `8` is replaced by `6` and `3`. The pool grows from one active result to two. Because `ro` allows only one replacement generation, neither replacement is re-rolled again.

The amount defaults to `1` and must be a positive safe integer without leading zeros. Combine it with a numeric limit using **modifier, limit, amount, compare point**:

```javascript
d6r2:3<=2 // Replace each 1 or 2 with three dice, for up to two generations
```

Each replacement inherits the remaining generation limit. All initial dice are rolled first, then replacements are generated one branch at a time, in the same order as [multiple dice per explosion](#multiple-dice-per-explosion).

::: roller 2d8ro:2=8 :::

## Unique

**Notation:** `u` / `uo` / `u{limit}{cp}` / `uo{cp}`

**Order:** 6

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

### Limiting unique retries <Badge text="New in v6" vertical="middle"/>

Put a limit after `u` and before any compare point:

```javascript
4d6u3   // Retry each duplicate up to three times
4d6u3=5 // Retry only duplicate 5s, up to three times each
```

The first result is kept. Each later result has its own retry limit, excluding its initial roll. Retrying stops earlier when the value is no longer a matching duplicate. At the limit, the last value is kept even if it is still a duplicate.

`u1` behaves like `uo`, but keeps the `u` output marker rather than `uo`. Use either the once alias or a numeric limit: `uo1` is invalid. Unlike Explode and Re-roll, Unique does not accept `:amount`.

Limits must be positive safe integers without leading zeros, and [safety limits](#repeating-modifier-limits) still apply.

::: roller 5d6u3 :::

::: tip Unique results are not guaranteed
Some expressions cannot produce entirely unique results. For example, `5d3u` requests five unique results from only three possible values. A retry limit or the shared generated-roll limit can also leave duplicates in the results.
:::

## Keep

**Notation:** `k{n}` / `kh{n}` / `kl{n}` or `k(expression)` / `kh(expression)` / `kl(expression)`

**Order:** 7

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

### Calculated keep count <Badge text="New in v6" vertical="middle"/>

Put an expression in parentheses after the Keep modifier to calculate how many results to keep. The expression can include [maths](maths.md), dice rolls, [roll groups](roll-groups.md) and [variables](variables.md).

```javascript
// Keep the highest four results
6d10kh(2+2)

// Roll a d4 to decide how many of the highest results to keep
6d10kh(d4)

// Keep the highest three results if $bonus is 3
6d10kh($bonus)
```

The count is evaluated once, when the modifier runs. Dice rolled to work out the count stay outside the selection and do not contribute directly to the total. The count must be a non-negative safe integer. A count of zero is valid, so `kh(0)` keeps no results.

::: roller 6d10kh(2+2) :::

## Drop

**Notation:** `d{n}` / `dh{n}` / `dl{n}` or `d(expression)` / `dh(expression)` / `dl(expression)`

**Order:** 8

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

### Calculated drop count <Badge text="New in v6" vertical="middle"/>

Put an expression in parentheses after the Drop modifier to calculate how many results to drop.

```javascript
// Roll a d3 to decide how many of the lowest results to drop
6d6dl(d3)

// Drop the highest two results
6d6dh(3-1)

// Drop the lowest one or two results, capping the d6 roll at two
6d6dl(min(d6,2))
```

If the d3 rolls `2`, the modifier drops the two lowest d6 results. The d3 only determines the count. The [same rules as Keep](#calculated-keep-count) apply to the expression, and `dl(0)` drops no results.

::: roller 6d6dl(d3) :::

## Target success / Dice pool

**Notation:** `{cp}` / `{cp}:{amount}`

**Order:** 9

Count results that meet a condition instead of adding their values together.

Add a [compare point](#compare-point) after the dice notation. Each matching result counts as `1` success; other results count as `0`.

To check the combined total of a pool, use an [expression comparison](comparisons-and-ternaries.md#comparing-dice-totals).

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

### Weighted successes <Badge text="New in v6" vertical="middle"/>

Add `:amount` after a condition to make each matching result worth more than one success. The amount must be a whole number from `1` to `10`; leaving it out means `1`.

For example, count `8` or higher as a success, with each `10` worth two successes:

```javascript
6d10>=8=10:2: [7, 10**, 8*, 3, 10**, 9*] = 6
```

| Result | Contribution |
| --- | --- |
| `7` or `3` | `0` |
| `8` or `9` | `1` |
| `10` | `2` |

Each `*` represents one success. The die still shows its rolled value: `10**` contributes `2`, rather than doubling the die's value to `20`.

You can weight every success, or add more conditions:

```javascript
5d6>=4:2     // Each result of 4 or higher contributes 2
6d10>=8>=9:2 // 8 contributes 1; 9 and 10 each contribute 2
4d6>=3>=5:3  // 3 and 4 each contribute 1; 5 and 6 each contribute 3
```

**The last matching condition in written order wins.** Contributions are not added together. In `6d10>=8=10:2`, a `10` matches both conditions but contributes `2`, not `3`. Reversing them to `6d10=10:2>=8` makes a `10` worth only `1`.

Results matching no condition contribute `0`. The same rules apply when combining successes with [failures](#target-failure-dice-pool).

::: roller 6d10>=8=10:2 :::

::: tip Keep target conditions together
Write all success and failure conditions together, without other modifiers between them:

```javascript
4d6<=5=3:2k1 // Valid: keep the highest die, then score it
4d6<=5k1=3:2 // Invalid: keep separates the target conditions
```

Other modifiers can appear before or after the complete target block, subject to the compare-point ambiguity below. Their execution order stays the same.
:::

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

**Notation:** `f{cp}` / `f{cp}:{amount}`

**Order:** 9

Subtract failures when counting successes.

Start with a [target success condition](#target-success-dice-pool), then add `f` followed by a [compare point](#compare-point). Keep all target conditions together:

```javascript
4d6>4f<3 // Results greater than 4 are successes; results less than 3 are failures
```

Each success contributes `1`, each failure contributes `-1`, and results matching neither condition contribute `0`.

Failures are marked with `_`:

```javascript
4d6>4f<3: [2_, 5*, 4, 5*] = 1
```

Here, two successes and one failure give a total of `1`.

The total can be negative if failures outweigh successes. If a result matches more than one condition, the last matching condition wins, including between successes and failures.

### Weighted failures <Badge text="New in v6" vertical="middle"/>

Add `:amount` to a failure condition to subtract more than one success. As with [weighted successes](#weighted-successes), the amount must be a whole number from `1` to `10`, and defaults to `1`.

```javascript
4d10>=8=10:2f=1:3: [10**, 8*, 1___, 4] = 0
```

Here, `10` contributes `2`, `8` contributes `1`, `1` contributes `-3`, and `4` contributes `0`. Each `_` represents one point subtracted from the total.

You can combine several success and failure conditions. Written order decides the outcome when they overlap:

```javascript
4d6>=4f=6:2     // 4 and 5 contribute 1; 6 contributes -2
4d6>=4f=6:2=6:3 // The final condition makes 6 contribute 3 instead
```

The `**` and `__` markers mean two target successes or failures. [Critical Success](#critical-success) and [Critical Failure](#critical-failure) are separate display flags, shown as `cs` and `cf`; they do not change the score.

::: roller 4d6>4f<3 :::

## Critical success

**Notation:** `cs` / `cs{cp}`

**Order:** 10

Mark results as critical successes. By default, this marks rolls equal to the die's highest possible value:

```javascript
2d20cs: [4, 20cs] = 24
```

Critical successes are marked with `cs`.

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

**Order:** 11

Mark results as critical failures. By default, this marks rolls equal to the die's lowest possible value:

```javascript
2d20cf: [4, 1cf] = 5
```

Critical failures are marked with `cf`.

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

**Order:** 12

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

## Repeating modifier limits

[Matching-batch explosions](#matching-batch-explosions), [Explode](#explode), [Re-roll](#re-roll) and [Unique](#unique) have safety limits as well as their optional notation limits:

| Setting | Default | Applies to |
| --- | --- | --- |
| `maxIterations` | `1,000` | Extra batches per pool for `!m`. Generations per original die and modifier for Explode and Re-roll. Retries per result for Unique. |
| `maxGeneratedRolls` | `1,000,000` | All additional dice rolled by repeating modifiers within one dice pool. |

An explicit notation limit cannot exceed `maxIterations`: the lower value is used. Without a notation limit, `maxIterations` applies. The initial rolls do not count towards either repeating limit.

With the default one-die amount, `d10!>0` produces one initial result and `1,000` extra results. An amount greater than one can generate many more dice within the same number of generations, so `maxGeneratedRolls` also caps the total work.

Repeating modifiers share the generated-roll allowance within the same pool, including discarded re-rolls. Each pool has a separate allowance. When it runs out, modifiers stop drawing dice and keep the results reached so far, even if a condition still matches or a duplicate remains. Explode and Re-roll with `:amount` can produce fewer dice than requested if the allowance runs out part-way through. Matching-batch explosions require enough allowance for a complete batch.

You can [configure these limits](../usage/index.md#roll-limits) when creating a roll or roller. For example:

```javascript
const result = new Roll('4d6!2:3', {
  limits: {
    maxIterations: 10,
    maxGeneratedRolls: 5000,
  },
});
```

The notation still limits each explosion branch to two generations; `maxIterations: 10` does not increase it.

## Compare point

A compare point defines a condition using a comparison operator followed by a number. The number can be negative or fractional.

For example, `>=5` means “greater than or equal to 5”. In `dF<=-0.5`, a Fudge result of `-1` counts as a success.

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
