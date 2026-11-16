# Text presenter

The text presenter is included with the library and used automatically. You do not need to import or create a `TextPresenter` unless you want to customise it.

It displays the notation, individual dice values, modifier markers and total:

```text
4d6kh3: [1d, 4, 5, 6] = 15
```

## Options

When creating your own instance, you can change these options:

| Option | Default | What it changes |
| --- | --- | --- |
| `flagSymbols` | Built-in modifier markers, such as `d` for dropped dice. | Replace individual markers, or use `''` to hide one. |
| `separator` | `'; '` | The text between rolls when displaying a history. |
| `expandInlineRolls` | `false` | Show stored dice results used to calculate quantities or sides. |

Markers you do not override keep their defaults. The full set is available as `presenters.DEFAULT_FLAG_SYMBOLS`.

Success and failure markers repeat to show the number of successes or failures a result is worth. For example, a result worth two successes shows `**` with the default symbols. Custom success and failure symbols repeat in the same way.

## Expanding inline rolls

Set `expandInlineRolls: true` to show the intermediate rolls and calculated values for quantity or sides expressions that contain dice. It also finds dice inside functions, groups and nested expressions; numeric-only expressions keep their usual output.

```javascript
import { Roll, presenters } from '@dice-roller/rpg-dice-roller';

const presenter = new presenters.TextPresenter({
  expandInlineRolls: true,
});

const roll = new Roll('(d4)d(d6)');
console.log(roll.present(presenter));
// e.g. (d4)d(d6): (qty: ([2]) = 2, sides: ([4]) = 4) -> [3, 1] = 4
```

The `qty:` and `sides:` labels distinguish the two parameters. Nested pools keep their own boundaries, for example:

```text
((d4)d6)d10: (qty: ((qty: ([2]) = 2) -> [3, 4]) = 7) -> [1, 1, 1, 1, 1, 1, 1] = 7
```

Expansion only formats the stored result tree: it does not evaluate expressions, roll again or add intermediate dice separately to the total. The displayed total is unchanged.

See [Changing the output](../presenters.md#changing-the-output) for examples, or the [TextPresenter API](../../../api/rpg-dice-roller/namespaces/presenters/classes/TextPresenter.md) for more detail.
