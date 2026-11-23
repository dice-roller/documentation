# Importing and exporting

## Importing finished dice results

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

### Recording modifier effects

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
  rolls: [[{ value: 6, flags: ['explode'] }, 3]],
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

### Sorted groups

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

### Dice that determine another pool's quantity, sides or keep count

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

### Conditional rolls

Supply the pools in the condition, followed by the pools in the branch it selects. Here the d6 rolled `2`, so the comparison is true and the d8 branch supplies the total. The d10 branch has no entry in `rolls`.

```javascript
const roll = Roll.import({
  notation: '(d6 < 3) ? (d8) : (d10)',
  rolls: [[2], [5]],
});

console.log(roll.total); // 5
```
