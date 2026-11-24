# Importing and exporting

You can save a completed dice roll or a whole roll history, then restore the same results later without rolling the dice again. Exports retain the notation, evaluated results and totals, including the effects of modifiers.

Use **exporting** to save rolls you've made with RPG Dice Roller. When **importing**, you can restore that full export or supply [concise results](#importing-concise-results) if you only have the finished dice values.

## Exporting

Call `export()` on a `Roll` to save an individual roll, or on a `Roller` to save its entire history.

### Exporting a roll

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const roll = new Roll('4d6kh3');
const savedRoll = roll.export();

console.log(typeof savedRoll); // 'object'
```

By default, `export()` returns a JSON-safe JavaScript object, which you can work with directly or convert to a JSON string using `JSON.stringify()`. It contains the results already rolled; calling `export()` doesn't roll the notation again.

### Exporting a history

Use `Roller.export()` to save all rolls in its history:

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller();
roller.roll('d20+5');
roller.roll('2d8');

const savedHistory = roller.export();
```

The saved history contains both rolls, in order, and the combined total. You can [import the history](#importing-a-saved-history) into another `Roller` later.

If you only want to save one roll from the history, export the individual `Roll` instead:

```javascript
const savedFirstRoll = roller.history.rolls[0].export();
```

### Export formats

Both `Roll.export()` and `Roller.export()` accept the same optional format:

| Format | Return value | When to use it |
| --- | --- | --- |
| `'object'` (default) | JSON-safe JavaScript object | Working with exported data directly in code. |
| `'json'` | JSON string | Saving to storage or sending to another application. |
| `'base64'` | UTF-8 Base64-encoded JSON string | When you need to pass the export as Base64 text. |

```javascript
const asObject = roll.export();         // Same as roll.export('object')
const asJson = roll.export('json');
const asBase64 = roll.export('base64');
```

All three formats contain the same information and can be passed directly to the corresponding [import method](#importing). Base64 is an encoding, **not encryption**, and should not be used to conceal sensitive data.

### What gets exported

A roll export includes its notation, the complete evaluated result tree (with the AST in `result.node`), and its `total`, `minTotal`, `maxTotal` and `averageTotal`. A history export contains the individual roll exports and the combined total.

The top-level `type` identifies the kind of export: `'roll'` for an individual roll, or `'history'` for a history. The `version` field identifies the export data format, currently `1`.

```javascript
const rollData = roll.export();

console.log(rollData.type); // 'roll'
console.log(rollData.version); // 1
console.log(rollData.notation); // '4d6kh3'

const historyData = roller.export();

console.log(historyData.type); // 'history'
console.log(historyData.rolls.length); // 2
```

The export preserves the original roll results, including nested dice, modifier effects and stored totals. It doesn't include the random engine, variable input data, custom dice or modifier implementations, or presenter settings. To format a restored roll, call `present()`; to roll it again, supply any [required options](#re-rolling-imported-rolls) when importing.

Exporting may calculate previously uncached minimum, maximum and average totals so they can be saved alongside the results.

#### Using toJSON()

`Roll.toJSON()` returns the same JSON-safe object as `roll.export()` (the default `'object'` format). `RollHistory.toJSON()` does the same for a history. JavaScript also calls these methods automatically when you use `JSON.stringify()`:

```javascript
console.log(JSON.stringify(roll) === roll.export('json')); // true
console.log(JSON.stringify(roller.history) === roller.export('json')); // true

const rollObject = roll.toJSON();
const historyObject = roller.history.toJSON();

console.log(rollObject.type); // 'roll'
console.log(historyObject.type); // 'history'
```

Use `JSON.stringify(roll.export())` if you need a JSON string, or call `roll.export('json')` to get one directly. The same applies to `Roller.export()`.

#### Non-finite numbers

JSON doesn't support `Infinity`, `-Infinity` or `NaN` as numbers. The exporter preserves them using tagged objects, rather than allowing `JSON.stringify()` to turn them into `null`:

```javascript
const result = new Roll('1/0');
const exported = result.export('object');

console.log(exported.total); // { $number: 'Infinity' }
```

These tags are handled automatically when you [import](#importing) the data, restoring the original numeric values.

## Importing

Use `Roll.import()` to restore a single roll, or `roller.import()` to add saved rolls to a `Roller`'s history. Neither method rolls dice again.

There are two ways to provide the results. **Full-format data** preserves the evaluated expression tree and totals, making it the best choice when restoring an existing export. **Concise results** are useful when you already know the dice outcomes, such as results recorded by another application, and don't have a full export.

Both methods accept a JavaScript object, a JSON string or a UTF-8 base64-encoded JSON string.

### Importing full-format data

Full-format imports use the same data structure described in [Exporting](#exporting). They contain the original notation, the evaluated expression (AST) and its results, and the roll's totals. This preserves details such as modifiers, nested expressions, and individual dice results without needing to reconstruct them from notation.

#### Importing a saved roll

Pass the result of `export()` directly to `Roll.import()`. The default export is a JavaScript object:

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const original = new Roll('4d6kh3');
const savedRoll = original.export();

// Later, restore the saved data without rolling again.
const restored = Roll.import(savedRoll);

console.log(restored.total === original.total); // true
```

You can also import the other [export formats](#exporting) without converting them first:

```javascript
const fromJson = Roll.import(original.export('json'));
const fromBase64 = Roll.import(original.export('base64'));
```

#### Importing a saved history

Exported histories are restored through `Roller.import()`, rather than `Roll.import()`:

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller();
roller.roll('d20+5');
roller.roll('2d8');

const savedHistory = roller.export();

const restoredRoller = new Roller();
const importedRolls = restoredRoller.import(savedHistory);

console.log(importedRolls.length); // 2
console.log(restoredRoller.history.length); // 2
```

`roller.import()` also accepts a single exported roll. It **appends** imported rolls to the existing history and returns an array of the rolls it added. A whole history cannot be passed to `Roll.import()`.

#### Building full-format data manually

You can construct the same data yourself, but you must provide the complete evaluated result structure, not just the notation and the dice values.

A full-format roll has these top-level properties:

| Field | Purpose |
| --- | --- |
| `type` | `'roll'` for an individual roll. |
| `version` | The export data version (currently `1`). |
| `notation` | The original notation string. |
| `result` | The evaluated result tree, including its AST in `result.node`. |
| `total` | The final roll total. |
| `minTotal`, `maxTotal`, `averageTotal` | The stored minimum, maximum and average totals. |

For example, this builds a complete result for a single d6 that rolled `5`:

```javascript
const qtyNode = { type: 'number', value: 1 };
const sidesNode = { type: 'number', value: 6 };
const poolNode = {
  type: 'pool',
  qty: qtyNode,
  die: { type: 'die', name: 'standard', args: [sidesNode] },
  modifiers: [],
};

const data = {
  type: 'roll',
  version: 1,
  notation: 'd6',
  result: {
    type: 'pool',
    node: poolNode,
    value: 5,
    qty: { type: 'number', node: qtyNode, value: 1 },
    dieArgs: [{ type: 'number', node: sidesNode, value: 6 }],
    die: { notation: '6', min: 1, max: 6, average: 3.5, faceCount: 6 },
    rolls: [
      {
        type: 'die',
        initialValue: 5,
        value: 5,
        calculationValue: 5,
        useInTotal: true,
        flags: [],
      },
    ],
  },
  total: 5,
  minTotal: 1,
  maxTotal: 6,
  averageTotal: 3.5,
};

const restored = Roll.import(data);
console.log(restored.total); // 5
```

In the result tree, each expression result has a `type`, a matching AST `node` and a computed `value`. A dice pool also needs its evaluated quantity (`qty`), die arguments (`dieArgs`), die snapshot (`die`) and finished `rolls`. More complex expressions require corresponding nested results. See the [AST API](../../api/rpg-dice-roller/namespaces/ast/index.md) for the node types.

To build a full-format history manually, use `type: 'history'`, `version: 1`, a `rolls` array containing complete full-format roll objects, and the history `total`. Import it with `roller.import()`.

::: warning Imported totals are trusted
Importing checks the structure and data version, but doesn't recalculate the stored results or totals, or run modifiers again. When building the data manually, make sure the AST, results and totals agree. If you only have finished dice outcomes, the [concise format](#importing-concise-results) is simpler.
:::

### Importing concise results

Use `Roll.import()` with your notation and the dice results you want to restore. Put each pool's results in its own array inside `rolls`. A pool is one set of dice from the notation, such as `3d6` or `d8`.

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const roll = Roll.import({
  notation: '3d6',
  rolls: [[6, 3, 5]],
});

console.log(roll.total); // 14
```

The results you supply already include any modifier effects. Importing uses those results to calculate the total without rolling dice or applying the modifiers again.

#### Recording modifier effects

Use a number for a die whose original value, final value and contribution to the total are all the same. Use an object when you need to record more detail.

| Field | Meaning | Default |
| --- | --- | --- |
| `value` | The die's final value | Required |
| `initialValue` | The face before any modifiers changed it | `value` |
| `calculationValue` | The value used when adding up the pool | `value` |
| `useInTotal` | Whether to include the die in the pool total | `true` |
| `flags` | Modifier effects to show when displaying the roll | `[]` |

For `3d6kh2 + d8min3 * 2`, the first array belongs to the three d6s and the second belongs to the d8. Set `useInTotal: false` on the dropped d6. For the d8, record both the original face of `1` and the final value of `3`. The notation supplies the addition and multiplication.

```javascript
const roll = Roll.import({
  notation: '3d6kh2 + d8min3 * 2',
  rolls: [
    [6, { value: 3, useInTotal: false, flags: ['drop'] }, 5],
    [{ initialValue: 1, value: 3, flags: ['min'] }],
  ],
});

console.log(roll.total); // 17
```

Include any dice already added by an explosion in the same pool array. Here the original d6 rolled `6` and the extra die rolled `3`.

```javascript
const roll = Roll.import({
  notation: 'd6!',
  rolls: [
    [
      { value: 6, flags: ['explode'] },
      3,
    ],
  ],
});

console.log(roll.total); // 9
```

For a [target success modifier](../notation/modifiers.md#target-success-dice-pool), use `calculationValue` to record how much each die counts towards the total. The die that rolled `5` counts as one success and the die that rolled `2` counts as zero.

```javascript
const roll = Roll.import({
  notation: '2d6>=4',
  rolls: [
    [
      { value: 5, calculationValue: 1, flags: ['target-success'] },
      { value: 2, calculationValue: 0 },
    ],
  ],
});

console.log(roll.total); // 1
```

#### Sorted groups

Keep the pool arrays in the order the dice appear in the notation. For `{d6,d8}sa`, `[[5], [2]]` means the **d6 rolled 5** and the **d8 rolled 2**.

Use `groups[0].order` to record the final order of the first group's members. Member indexes start at zero and refer to the members as written. Here `0` is the d6 and `1` is the d8, so `[1, 0]` displays the d8 first, followed by the d6. Each result stays attached to its original die.

```javascript
const roll = Roll.import({
  notation: '{d6,d8}sa',
  rolls: [[5], [2]],
  groups: { 0: { order: [1, 0] } },
});

console.log(roll.total); // 7
console.log(roll.present()); // {d6,d8}sa: {[2], [5]} = 7
```

#### Dice that determine another pool's quantity, sides or keep count

In `(d4)d(d8)kh(d2)`, the `d` between `(d4)` and `(d8)` describes the main pool, the dice you end up rolling and keeping. The three smaller rolls inside parentheses tell you how many of those dice to roll, how many sides they have and how many results to keep.

When filling in `rolls`, put the main pool's results first. List the smaller pools after it in the order shown below.

| Position in `rolls` | Which dice | What the supplied results mean |
| --- | --- | --- |
| First | The dice whose quantity and sides are calculated | They rolled `4` and `5`. Only the `5` was kept. |
| Second | `d4` for the quantity | It rolled `2`, so there are two dice. |
| Third | `d8` for the number of sides | It rolled `6`, so those dice are d6s. |
| Fourth | `d2` for the keep count | It rolled `1`, so one result was kept. |

This is the order of the arrays in the payload. If you roll this notation from scratch, you need the quantity and sides before you can roll the two d6s.

```javascript
const roll = Roll.import({
  notation: '(d4)d(d8)kh(d2)',
  rolls: [
    [{ value: 4, useInTotal: false, flags: ['drop'] }, 5],
    [2],
    [6],
    [1],
  ],
});

console.log(roll.total); // 5
```

#### Conditional rolls

Supply the pools in the condition, followed by the pools in the branch it selects. Here the d6 rolled `2`, so the comparison is true and the d8 branch supplies the total. The d10 branch has no entry in `rolls`.

```javascript
const roll = Roll.import({
  notation: '(d6 < 3) ? (d8) : (d10)',
  rolls: [[2], [5]],
});

console.log(roll.total); // 5
```

### Re-rolling imported rolls

Both full-format and concise imports restore the existing results without generating random numbers or applying modifiers again. Re-rolling is different: `reroll()` evaluates the stored AST using the settings supplied when importing.

If the notation uses [variables](../notation/variables.md), pass the required `data` when importing, or supply replacement data when re-rolling:

```javascript
const original = new Roll('d20 + $bonus', { data: { bonus: 3 } });
const savedRoll = original.export();

const restored = Roll.import(savedRoll, { data: { bonus: 3 } });
const nextRoll = restored.reroll({ data: { bonus: 5 } });
```

If the expression uses [custom dice](../customisation/dice.md) or [custom modifier handlers](../customisation/modifiers.md), provide the corresponding registries when importing. Exported results can be displayed without them, but re-rolling needs the relevant implementations. An imported roll uses its new settings and random engine for future re-rolls; the original engine and variable data aren't saved.

You can also import with an [asynchronous external dice source](../customisation/external-dice.md#re-rolling-and-importing). Importing itself stays synchronous and never calls the source; `reroll()` then returns a promise and requests fresh results. Exported data doesn't store the original external source.

Calling `reroll()` on a roll imported into a `Roller` doesn't automatically add the new roll to its history.

### Handling invalid data

Importing validates the data format and structure. Invalid JSON or Base64, unsupported export versions, incomplete result trees and incorrect concise results can cause an `ImportError`.

```javascript
import { Roll, errors } from '@dice-roller/rpg-dice-roller';

function restoreRoll(savedData) {
  try {
    return Roll.import(savedData);
  } catch (error) {
    if (error instanceof errors.ImportError) {
      console.error('Could not restore roll:', error.message);
      return null;
    }

    throw error;
  }
}
```

A history import is checked before any rolls are added. If it contains invalid data, `roller.import()` throws and leaves the existing history unchanged.

::: warning Older exports
The full-format structure described here is for v6, with export data version `1`. Data saved using v5 has a different structure and may need converting before importing into v6. If you have the notation and finished dice values, you can rebuild the roll using the [concise format](#importing-concise-results) instead.
:::
