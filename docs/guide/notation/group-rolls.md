# Group Rolls <Badge text="New" vertical="middle"/>

You can perform rolls in a group using comma separated sub-roll expressions. The sub-roll results will be [summed together](#basic) and [modifiers](#modifiers) can be run on entire expressions, rather than individual die rolls.

A roll group is differentiated from normal roll expressions by surrounding the expression in curly braces; `{4d10+5d6}` or `{2d6, 5*d20}`


## Basic

Group rolls can have one or more sub-roll expressions, separated by a comma.
Each sub-roll is parsed separately and the totals are then added together:

```javascript {1,3}
{4d6, 2d10, d4}: {[2, 6, 4, 2], [7, 4], [1]} = 26

{3d8*2, 20/2d10, 2d10-d4}: {[3, 1 6]*2, 20/[7, 4], [8, 5]-[1]} = 33.82
```

::: tip Single sub-roll
Without modifiers, single sub-rolls are functionally the same as a standard expressions:

```javascript {2,5,8}
// Equivalent to `4d10`
{4d10}: {[3, 5, 1, 8]} = 17

// Equivalent to `4d10*3`
{4d10*3}: {[3, 5, 1, 8]*3} = 51

// Equivalent to `4d10+5d6`, or `{4d10, 5d6}`
{4d10+5d6}: {[3, 5, 1, 8]+[4, 5, 3, 4, 2]} = 35
```
:::

::: roll {4d6, 2d10, d4} :::


## Modifiers

Group rolls can be used with a sub-set of the [standard modifiers](./modifiers.md), by appending the modifier notation after the closing curley brace; `{4d6}k1`

The functionality of them differs slightly when used with roll groups.

::: tip
If you haven't already, we suggest you read [how modifiers work](./modifiers.md) with standard expressions.
:::

::: roll {4d10+5d6}k2 :::


### Keep (`k{n}` / `kh{n}` / `kl{n}`)

This works in much the same way as the standard [Keep modifier](./modifiers.md#keep-kn-khn-kln); it allows you to roll a collection of dice, disregarding all except for the highest or lowest result(s).

It is the opposite of the [Drop modifier](#drop-dn-dhn-dln).


#### Single sub-roll

For a single sub-roll, it will keep the specified number of individual _die rolls_ from of all the rolls in the expression:

```javascript {2}
// Keep the highest 2 out of all 9 rolls (8, 6)
{4d10*(2+5d6)}k2: {[8, 1d, 4d, 1d]*(2+[1d, 6, 1d, 5d, 3d])} = 64
```

::: roll {4d10*(2+5d6)}k2 :::


#### Multiple sub-rolls

For multiple sub-rolls, it will keep the specified number of _sub-rolls_ based on their total value:

```javascript {2,5}
// Total the sub-rolls and keep the 2 with the highest values
{4d10, 5d6, 2d10}k2: {[8, 1, 4, 1], [1, 5, 1, 5, 3], ([6, 3])d} = 29

// It works with formulas as well
{5+d10, 3d4*2}k1: {(5+[8])d, [3, 2, 2]*2} = 14
```

::: roll {4d10, 5d6, 2d10}k2 :::


### Drop (`d{n}` / `dh{n}` / `dl{n}`)

This works in much the same way as the standard [Drop modifier](./modifiers.md#drop-dn-dhn-dln); it allows you roll a collection of dice, but disregard the highest or lowest results.

It is the opposite of the [Keep modifier](#keep-kn-khn-kln).


#### Single sub-roll

For a single sub-roll, it will keep the specified number of individual _die rolls_ from of all the rolls in the expression:

```javascript {2}
// Drop the lowest 3 out of all 9 rolls
{4d6+2d8-3d30}d3: {[3d, 5, 3, 2d]+[7, 4]-[2d, 14, 7]} = −2
```

::: roll {4d6+2d8-3d30}d3 :::


#### Multiple sub-rolls

For multiple sub-rolls, it will keep the specified number of _sub-rolls_ based on their total value:

```javascript {2,5}
// Total the sub-rolls and drop the 2 with the lowest values
{4d10, 5d6, 2d10}d2: {([8, 1, 4, 1])d, [1, 5, 1, 5, 3], ([6, 3])d} = 15

// It works with formulas as well
{5+d10, 3d4*2}d1: {(5+[8])d, [3, 2, 2]*2} = 14
```

::: roll {4d10, 5d6, 2d10}d2 :::


### Target Success / Dice pool (`{cp}`)

This is similar to the standard [Target success modifier](./modifiers.md#target-success-dice-pool-cp); It allows you to count the number of successes in a collection of dice.

It looks at the total value of each sub-roll and compares it to the success value. Returning a `1` for each sub-roll that matches the compare point, and `0` for those that don't.


#### Single sub-roll

Single sub-rolls, will only ever return a result of `1` or `0`:

```javascript {2}
// total of rolls + 5 (42) is greater than 40
{3d20+5}>40: {([11, 7, 19]+5)*} = 1
```

::: roll {3d20+5}>21 :::


#### Multiple sub-rolls

With mutliple sub-rolls, the number of sucesses are added together

```javascript
{4d6+2d8, 3d20+3, 5d10+1}>40: {[4, 3, 3, 2]+[2, 6], ([17, 5, 20]+3)*, ([7, 9, 6, 10, 8]+1)*} = 2
```

The above has `2` successes because;
* The first sub-roll, `4d6+2d8`, rolled `[4, 3, 3, 2]+[2, 6] = 20` <Badge type="warning" text="Not success" vertical="middle"/>
* The second sub-roll, `3d20+3`, rolled `[17, 5, 20]+3 = 45` <Badge text="Success" vertical="middle"/>
* The third sub-roll, `5d10+1`, rolled `[7, 9, 6, 10, 8]+1 = 41` <Badge text="Success" vertical="middle"/>

::: roll {4d6+2d8, 3d20+3, 5d10+1}>40 :::


### Target Failure / Dice Pool (`f{cp}`)

::: warning Remember
A failure modifier _must_ directly preceed a [Success modifier](#target-success-dice-pool-cp).
:::

This is similar to the standard [Target failure modifier](./modifiers.md#target-failure-dice-pool-f-cp); It allows you to count the number of failures in a collection of dice.

It looks at the total value of each sub-roll and compares it to the failure value. Returning a `-1` for each sub-roll that matches the compare point.
Those that don't match will either return `1` if they match the success compare point, or `0` if they don't match either.


#### Single sub-roll

Single sub-rolls, will only ever return a result of `1`, `-1`, or `0`:

```javascript {2}
// total of rolls + 5 (14) is less than 15
{3d10+5}>30f<15: {[5, 3, 1]+5} = -1
```

::: roll {3d10+5}>30f<15 :::


#### Multiple sub-rolls

With mutliple sub-rolls, the number of sucesses are added together, and the number of failures are subtracted from the value:

```javascript
{4d6+2d8, 3d20+3, 5d10+1}>40f<30: {([4, 3, 3, 2]+[2, 6])_, ([17, 5, 20]+3)*, ([7, 9, 6, 10, 8]+1)*} = 1
```

The above has `1` success because;
* The first sub-roll, `4d6+2d8`, rolled `[4, 3, 3, 2]+[2, 6] = 20` <Badge type="danger" text="Failure" vertical="middle"/>
* The second sub-roll, `3d20+3`, rolled `[17, 5, 20]+3 = 45` <Badge text="Success" vertical="middle"/>
* The third sub-roll, `5d10+1`, rolled `[7, 9, 6, 10, 8]+1 = 41` <Badge text="Success" vertical="middle"/>

::: roll {4d6+2d8, 3d20+3, 5d10+1}>40f<30 :::


### Sorting (`s` / `sa` / `sd`)

This is equivalent to the standard [Sorting modifier](./modifiers.md#sorting-s-sa-sd); It allows you to sort the dice rolls, and the sub-rolls by total value.


#### Single sub-roll

For a single sub-roll, it will sort the individual rolls:

```javascript {2,5,8}
// no sorting
{4d6+4}: {[4, 3, 5, 1]+4} = 17

// default sort ascending
{4d6+4}s: {[1, 3, 4, 5]+4} = 17

// sort descending
{4d6+4}sd: {[5, 4, 3, 1]+4} = 17
```

::: roll {4d6 + 4}s :::


#### Multiple sub-rolls

For multiple sub-rolls, it sorts both the individual rolls, and then the sub-rolls, by their total value:

```javascript {2,5,8}
// no sorting (6.5, 14, 12)
{4d6/2, 3d4+3, 2d10}: {[4, 3, 5, 1]/2, [3, 2, 4]+5, [8, 4]} = 32.5

// default sort ascending (6.5, 12, 14)
{4d6/2, 3d4+3, 2d10}s: {[4, 3, 5, 1]/2, [8, 4], [3, 2, 4]+5} = 32.5

// sort descending (14, 12, 6.5)
{4d6/2, 3d4+3, 2d10}sd: {[3, 2, 4]+5, [8, 4], [4, 3, 5, 1]/2} = 32.5
```

::: roll {4d6/2, 3d4+3, 2d10}s :::
