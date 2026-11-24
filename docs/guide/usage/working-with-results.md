# Working with results

A completed [`Roll`](index.md) contains more than a total. You can inspect the individual dice, see how modifiers affected them and access the evaluated parts of the notation.

## Roll properties

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const roll = new Roll('2d6+3');

console.log(roll.notation); // '2d6+3'
console.log(roll.total);    // e.g. 11
```

| Property | Description |
| --- | --- |
| `notation` | The original notation, or the generated notation if rolling a programmatically built expression. |
| `total` | The final numeric total, rounded to two decimal places. |
| `result` | The evaluated expression tree, including individual dice results. |
| `expression` | The abstract syntax tree (AST) describing the expression that was evaluated. |
| `description` | The first [description](../notation/roll-descriptions.md) in the expression, if there is one. |
| `minTotal`, `maxTotal`, `averageTotal` | [Calculated totals](#calculated-totals) based on the expression and dice. |

For example, you can retrieve a description without extracting it from the notation or the formatted output:

```javascript
const damage = new Roll('2d6 [Fire damage]');

console.log(damage.description?.text); // 'Fire damage'
```

## Displaying results

Call `present()` to format a completed roll:

```javascript
const roll = new Roll('4d6kh3');

console.log(roll.present());
// e.g. 4d6kh3: [3d, 5, 6, 3] = 14
```

The default presenter returns a string containing the notation, rolled values, modifier symbols and total. You can also use `String(roll)` or `roll.toString()`, which always use the built-in text presenter, even if you've configured a different presenter.

Formatting a result doesn't roll the dice again. For different output formats, including graphical results, see [Presenters](../customisation/presenters.md).

If you need the numeric values or modifier information in your application, use the result tree rather than parsing the formatted string.

## The result tree

`roll.result` describes how the expression was evaluated. Each expression result has a `type` identifying the kind of expression, a `node` containing its source AST node, and a numeric `value`.

For a simple pool such as `2d6`, the top-level result is a `pool`. For `2d6+3`, it is a `binary` result containing a pool on the left and a number on the right.

```javascript
const roll = new Roll('2d6+3');
const result = roll.result;

console.log(result.type); // 'binary'

if (result.type === 'binary') {
  console.log(result.left.type);  // 'pool'
  console.log(result.right.type); // 'number'
  console.log(result.right.value); // 3
}
```

For example, if the dice roll `3` and `5`, the result tree has this structure (omitting the AST nodes and other properties for clarity):

```text
binary (value: 11)
├── left: pool (value: 8)
│   └── rolls: [3, 5]
└── right: number (value: 3)
```

The tree follows the structure of the expression rather than storing all dice in a single array. Check the `type` before accessing properties specific to a result. TypeScript also uses this check to narrow the result's type.

The top-level `result.value` is the evaluated numeric value before the two-decimal-place rounding applied to `roll.total`.

### Dice pools

A pool result contains the evaluated quantity (`qty`), evaluated die arguments (`dieArgs`), information about the resolved die (`die`), and its individual dice results (`rolls`).

```javascript
const roll = new Roll('4d6kh3');

if (roll.result.type === 'pool') {
  const pool = roll.result;

  console.log(pool.qty.value); // 4
  console.log(pool.die.max);    // 6
  console.log(pool.rolls.map(die => die.value)); // e.g. [3, 5, 6, 3]
  console.log(pool.value); // e.g. 14
}
```

The `die` property is a snapshot of the resolved die, including its notation, minimum, maximum, average and face count. It isn't the die factory or a live die instance.

### Individual dice

Each item in `pool.rolls` is a `DieResult`, with the following properties:

| Property | Description |
| --- | --- |
| `type` | Always `'die'`. |
| `initialValue` | The original value of this result, before modifications. |
| `value` | The value after modifiers have been applied. |
| `calculationValue` | The numeric contribution used when calculating the pool total. |
| `useInTotal` | Whether the contribution is included in the pool total. |
| `flags` | Semantic markers describing modifier effects on the result. |

These values are normally the same for a die without modifiers, apart from `useInTotal` (which is `true`) and `flags` (which is an empty array).

#### Modified values

A modifier can change the value of a die without losing its original value. For example, with `d6min3`, a roll of `1` is raised to `3` by the [Min modifier](../notation/modifiers.md#min):

| Property | Example value |
| --- | --- |
| `initialValue` | `1` |
| `value` | `3` |
| `calculationValue` | `3` |
| `useInTotal` | `true` |
| `flags` | `['min']` |

A normal single-die re-roll similarly preserves the original value while replacing the current value. However, `initialValue` isn't a complete record of every random draw. For example, branching re-rolls can replace one result with several new results, and compounded explosions combine values. The result tree contains the finished results, not a log of all draws.

#### Scoring and excluded dice

Some modifiers change the contribution to a total without changing the die's displayed value. With `3d6>=5`, for example, each matching die contributes one success instead of its face value.

Suppose the dice roll `2`, `5` and `6`:

| `value` | `calculationValue` | `useInTotal` | `flags` |
| --- | --- | --- | --- |
| `2` | `0` | `true` | `[]` |
| `5` | `1` | `true` | `['target-success']` |
| `6` | `1` | `true` | `['target-success']` |

The total is `2`, not `13`. Weighted targets and failures can also produce contributions greater than one or less than zero.

[Keep](../notation/modifiers.md#keep) and [Drop](../notation/modifiers.md#drop) exclude dice using `useInTotal`. Dropped dice remain in the pool's results; their `calculationValue` needn't be zero.

To retrieve the dice that are included in a pool total:

```javascript
const roll = new Roll('4d6kh3');

if (roll.result.type === 'pool') {
  const kept = roll.result.rolls.filter(die => die.useInTotal);
  console.log(kept.map(die => die.value));
}
```

The pool's `value` is the sum of `calculationValue` for the results whose `useInTotal` is `true`. Don't simply sum every die's `value`, or you may ignore the effects of modifiers.

#### Modifier flags

Flags are descriptive names rather than the symbols you see in the text output. For example, the `'explode'` flag is displayed as `!` by the default text presenter, and `'drop'` as `d`.

```javascript
const roll = new Roll('4d6kh3');

if (roll.result.type === 'pool') {
  const dropped = roll.result.rolls.filter(die => die.flags.includes('drop'));
  console.log(dropped.map(die => die.value));
}
```

A result can have several flags. Flags alone don't determine its contribution: use `calculationValue` and `useInTotal` for scoring. For a list of built-in modifiers and their behaviour, see [Modifiers](../notation/modifiers.md).

### Roll groups

A [roll group](../notation/roll-groups.md) contains `members` rather than a direct array of dice. Each member has its own evaluated expression under `result`, together with `value`, `calculationValue`, `useInTotal` and `flags`.

```javascript
const roll = new Roll('{2d6+3, d20}kh1');

if (roll.result.type === 'group') {
  for (const member of roll.result.members) {
    console.log(member.result.type); // 'binary', then 'pool'
    console.log(member.value);
    console.log(member.useInTotal);
  }
}
```

Group modifiers may score or exclude an entire member, without changing its nested dice results. As with a pool, the group's `value` is the sum of the included members' `calculationValue` values.

Some group modifiers operate on the dice within a member instead (see [Roll groups](../notation/roll-groups.md)). When examining nested dice, remember that an enclosing member can be excluded even when the individual dice have `useInTotal` set to `true`.

### Calculated dice quantities, sides and modifiers

Expressions used to calculate dice quantities or sides are themselves evaluated results.

```javascript
const roll = new Roll('(d4)d6');

if (roll.result.type === 'pool') {
  console.log(roll.result.qty.value); // e.g. 3
  console.log(roll.result.rolls.length); // 3, if the d4 rolled 3
}
```

The d4 result is nested inside `qty`; it isn't one of the d6 results in `rolls`. Similarly, calculated sides are found in `dieArgs`.

Calculated Keep and Drop counts are recorded in the optional `modifierArguments` array on a pool or group. Each entry contains a `modifierIndex` (the index in the owning AST node's modifier array) and the evaluated `result`.

These nested results determine how the enclosing expression is evaluated; their values aren't automatically added to its total.

### Finding dice in any expression

For arbitrary notation, traverse the result tree according to the type of each expression. The following function collects every pool in the evaluated tree, including pools used to calculate quantities, sides and modifier arguments:

```javascript
function* findPools(result) {
  switch (result.type) {
    case 'pool':
      yield result;
      yield* findPools(result.qty);

      for (const arg of result.dieArgs) {
        yield* findPools(arg);
      }
      break;

    case 'group':
      for (const member of result.members) {
        yield* findPools(member.result);
      }
      break;

    case 'binary':
    case 'comparison':
      yield* findPools(result.left);
      yield* findPools(result.right);
      break;

    case 'unary':
      yield* findPools(result.operand);
      break;

    case 'paren':
      yield* findPools(result.inner);
      break;

    case 'function':
      for (const arg of result.args) {
        yield* findPools(arg);
      }
      break;

    case 'conditional':
      yield* findPools(result.condition);
      yield* findPools(result.selectedResult);
      break;
  }

  for (const arg of result.modifierArguments ?? []) {
    yield* findPools(arg.result);
  }
}

const roll = new Roll('2d6+d8+3');

for (const pool of findPools(roll.result)) {
  console.log(pool.rolls.map(die => die.value));
}
```

Number literals and variable references have no nested results. A conditional has only its evaluated condition and selected branch; the unselected branch wasn't evaluated.

This example is useful for inspecting all evaluated pools, not for reconstructing the order of random draws or calculating the final total by adding their values together. A nested pool may be used as a parameter, excluded by a group modifier or involved in a mathematical operation.

Result objects are intended to be treated as readonly data. Changing the tree directly won't recalculate the stored total. Use a new roll or [re-roll](index.md#re-rolling) to obtain fresh results.

## Calculated totals

In addition to the actual `total`, a roll has `minTotal`, `maxTotal` and `averageTotal`.

```javascript
const roll = new Roll('2d6+3');

console.log(roll.total);        // e.g. 11
console.log(roll.minTotal);     // 5
console.log(roll.maxTotal);     // 15
console.log(roll.averageTotal); // 10
```

These properties are calculated on first access and cached for subsequent accesses. They don't change the original roll or its results.

### Minimum and maximum totals

`minTotal` evaluates the expression with each die producing its minimum value. `maxTotal` does the same using each die's maximum value. Modifiers and arithmetic are still applied, and the resulting totals are rounded to two decimal places.

::: warning These aren't guaranteed mathematical bounds
For expressions such as `10-d6`, a minimum die value actually gives the larger expression total:

```javascript
const roll = new Roll('10-d6');

console.log(roll.minTotal); // 9 (10 - 1)
console.log(roll.maxTotal); // 4 (10 - 6)
```

Modifiers, comparisons and conditionals can also make these values differ from the true lowest and highest possible outcomes.
:::

Each of these evaluations uses the configured dice and modifiers, with fresh [roll limits](roll-options.md#roll-limits). Repeating modifiers can stop at those limits, just as they can during an ordinary roll. For large or complex expressions, calculating these totals may involve substantial additional evaluation. They use the dice's extrema rather than requesting random faces from an external dice source.

### Average total

For expressions without applicable modifier or conditional fallbacks, `averageTotal` evaluates the expression using the resolved average of each die multiplied by the pool's evaluated quantity.

For example:

```javascript
const standard = new Roll('2d6+3');
console.log(standard.averageTotal); // 10 (2 × 3.5 + 3)

const weighted = new Roll('d{1,1,4}');
console.log(weighted.averageTotal); // 2 ((1 + 1 + 4) / 3)
```

The calculation uses the stored die snapshots and evaluated quantities, without drawing dice again. Repeated faces are included in the average of a face die.

When averaging the expression this way isn't supported, such as for a modified pool or group or a conditional expression, the library falls back to the midpoint of `minTotal` and `maxTotal`:

```javascript
const roll = new Roll('2d6kh1');

console.log(roll.minTotal);     // 1
console.log(roll.maxTotal);     // 6
console.log(roll.averageTotal); // 3.5
```

::: warning Not a probability calculation
`averageTotal` isn't always the statistical expected value of the notation. Keeping the higher of two d6s, for example, favours larger values, but the midpoint calculation above still gives `3.5`.

Non-linear maths, comparisons, random quantities or sides, and conditionals can also produce averages that differ from the true expected value.
:::

## Next steps

* [Roll history](roll-history.md) — work with a collection of rolls and their combined total.
* [Presenters](../customisation/presenters.md) — customise how results are displayed.
* [Importing and exporting](importing-and-exporting.md) — save and restore completed results.
