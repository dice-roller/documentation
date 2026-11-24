---
outline: 2
---

# External dice sources

By default, RPG Dice Roller generates each die result using its configured [random number generator](random-number-generator.md). You can instead supply the result of each die through a `drawDie` callback. This is useful for physical dice, a 3D dice roller, or an external random-number service.

Unlike a custom random engine, which must return signed 32-bit integers, a `drawDie` callback supplies the **finished face value** for a particular die. It can work synchronously or wait for an asynchronous result.

All the normal notation rules still apply. The library handles [explosions](../notation/modifiers.md#explode), [re-rolls](../notation/modifiers.md#re-roll), [calculated dice](../notation/maths.md) and other modifiers, requesting additional faces whenever evaluation needs them. The callback only needs to supply valid values.

## Synchronous dice sources

Set `drawMode` to `'sync'` when the face is available immediately. You can continue using `new Roll()`:

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const faces = [6, 3, 2, 5];

const result = new Roll('4d6kh3', {
  drawDie: {
    drawMode: 'sync',
    callback: () => faces.shift(),
  },
});

console.log(result.total);   // 14
console.log(result.present()); // 4d6kh3: [6, 3, 2d, 5] = 14
```

The callback is called once for each of the four dice. Keep and Drop operate on the supplied values as usual. `new Roll()`, `Roll.create()`, the `roll()` shorthand and `roller.roll()` all return a completed `Roll` immediately when configured for synchronous draws.

## Asynchronous dice sources

Set `drawMode` to `'async'` when the face comes from a promise, such as a remote API or a graphical dice roller. Use `Roll.create()` instead of `new Roll()`:

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const pending = Roll.create('d6!', {
  drawDie: {
    drawMode: 'async',
    callback: async (request) => {
      // Ask your dice service to roll one die.
      const response = await fetch('/api/dice/roll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Dice service failed: ${response.status}`);
      }

      const { value } = await response.json();
      return value;
    },
  },
});

console.log(pending instanceof Promise); // true

const result = await pending;
console.log(result.total); // e.g. 9
```

The `/api/dice/roll` URL is an example endpoint on **your own server**, not an endpoint provided by RPG Dice Roller. It should accept the [die request](#the-draw-request) as JSON and return a response such as `{ "value": 6 }`. If it returns `6` for the first d6, the library requests another die for the explosion; if that returns `3`, the final total is `9`. Evaluation waits for each HTTP response, and the callback doesn't need to inspect or apply the Explode modifier.

::: warning Use the factory for asynchronous sources
`new Roll()` is always synchronous. It throws a `ValidationError` if you try to evaluate a new roll with an asynchronous `drawDie` source.

`Roll.create()`, the `roll()` shorthand and `Roller.roll()` preserve synchronous results for synchronous sources and return a `Promise<Roll>` for asynchronous sources. You only need `await` when using an asynchronous source (or when the driver's mode isn't known ahead of time).
:::

The `roll()` shorthand works the same way:

```javascript
import { roll } from '@dice-roller/rpg-dice-roller';

const result = await roll('2d6', {
  drawDie: {
    drawMode: 'async',
    callback: async ({ max }) => max,
  },
});

console.log(result.total); // 12
```

Even if the callback resolves immediately, an asynchronous driver still returns a promise.

### TypeScript

The library exports `DrawDieSyncOptions` and `DrawDieAsyncOptions` to type your driver. TypeScript can then infer whether `Roll.create()` returns a `Roll` or a `Promise<Roll>`:

```typescript
import { Roll, type DrawDieAsyncOptions } from '@dice-roller/rpg-dice-roller';

const externalDice: DrawDieAsyncOptions = {
  drawMode: 'async',
  callback: async ({ max }) => max,
};

const result = await Roll.create('d6', { drawDie: externalDice });
console.log(result.total); // 6
```

If you select the driver mode dynamically, the return type may be `Roll | Promise<Roll>`, so handle both possibilities.

## The draw request

The callback receives a `DrawDieRequest` for **each individual die** that needs a result. Its properties describe the resolved die, not the entire dice notation:

| Property | Description |
| --- | --- |
| `notation` | The die's display notation **without** the leading `d`, such as `6`, `%` or `{1,1,2,5}`. |
| `min` | The lowest value the die can produce. |
| `max` | The highest value the die can produce. |
| `faces` | The list of allowed values for a face-list die. Absent for a range-based die. |
| `factoryName` | The name of the registered die factory, such as `standard`, `face` or `range`. |

For a `d6`, the callback receives a minimum of `1` and maximum of `6`. For `d{1,1,2,5}`, it also receives `faces: [1, 1, 2, 5]`.

### Face lists and weighted dice

When `faces` is present, choose a value **from that list**, rather than a random number between `min` and `max`:

```javascript
const result = new Roll('4d{1,1,2,5}', {
  drawDie: {
    drawMode: 'sync',
    callback: ({ min, max, faces }) => {
      if (faces) {
        // Pick a position, preserving repeated faces and their weighting.
        return faces[Math.floor(Math.random() * faces.length)];
      }

      // For an ordinary whole-number range.
      return min + Math.floor(Math.random() * (max - min + 1));
    },
  },
});
```

This example uses `Math.random()` just to demonstrate face selection. You can replace it with a physical, graphical or remote source. Repeated entries in `faces` are intentional: in this example, `1` is twice as likely as `2` or `5`.

The callback is responsible for choosing values according to the die's intended distribution. In particular, a [custom die](dice.md) with its own `roll(generator)` method is **not** rolled through that method when an external source is configured; the external callback supplies its value instead.

### Validating values

The library validates every externally supplied value. It rejects:

- Non-numeric or non-finite values, such as `undefined` or `NaN`.
- Values outside the die's minimum and maximum.
- Values not included in a die's `faces` list.
- Fractional values for ordinary integer-range dice.

An invalid result raises an `EvaluationError`. A callback that throws or rejects also produces an `EvaluationError`, with the original error available as its `cause`. A synchronous callback must not return a promise; doing so raises an error rather than silently switching to asynchronous evaluation.

Reading `minTotal`, `maxTotal` or `averageTotal` does not request extra faces from the external source: minimum and maximum evaluations use the die's known extremes instead.

## Reusing and overriding a source

Configure `drawDie` on a `Roller` to use the same source across many rolls:

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';

const roller = new Roller({
  drawDie: {
    drawMode: 'sync',
    callback: ({ min }) => min,
  },
});

const first = roller.roll('2d6');
console.log(first.total); // 2

// Override the source for this roll only.
const second = await roller.roll('2d6', {
  drawDie: {
    drawMode: 'async',
    callback: async ({ max }) => max,
  },
});

console.log(second.total); // 12

// The original synchronous source is unchanged.
const third = roller.roll('d6');
console.log(third.total); // 1
```

Other per-roll options, such as `data` or `engine`, do not replace the configured `drawDie` source. An explicit `drawDie` override affects only that roll. Changing `engine` does not change how an external source supplies faces.

### History and pending rolls

A `Roller` adds a roll to its history **after** evaluation succeeds. An asynchronous roll is not added while its callback is still pending, and a failed roll is not added at all.

If several asynchronous rolls run concurrently, they enter history in **completion order**, which may differ from the order their calls started. For more about history, see [Roll history](../usage/index.md#rolling-with-a-history).

### Re-rolling and importing

A `Roll` retains the source used to create it. Calling `reroll()` uses that source again, so an asynchronous roll's `reroll()` also returns a promise:

```javascript
const again = await second.reroll(); // Uses the async override from above.
```

You can [import an existing roll](../usage/importing-and-exporting.md#re-rolling-imported-rolls) with an asynchronous source. Importing restores saved results **synchronously** and does not invoke the callback; only a subsequent re-roll does:

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';

const saved = new Roll('d6').export('object');

const restored = Roll.import(saved, {
  drawDie: {
    drawMode: 'async',
    callback: async ({ max }) => max,
  },
});

const rerolled = await restored.reroll();
console.log(rerolled.total); // 6
```

The original external source isn't saved in exported data. Provide the source you want to use when importing if you intend to re-roll.

## Custom modifier handlers

Modifiers that produce additional dice must allow evaluation to pause until an external callback provides each face. For a [custom modifier handler](modifiers.md), implement a generator (`*apply`) and use `yield*` with `input.rollDie()` or `input.rollBatch(count)`:

```javascript
import { Roll, modifiers } from '@dice-roller/rpg-dice-roller';

// Replace Explode with a demonstration handler that always adds two dice.
const customModifiers = new modifiers.ModifierRegistry().register({
  ...modifiers.explodeHandler,

  *apply(items, input) {
    if (!input.rollBatch) return [...items];

    const extra = yield* input.rollBatch(2);
    return extra ? [...items, ...extra] : [...items];
  },
});

const result = await Roll.create('d6!', {
  modifiers: customModifiers,
  drawDie: {
    drawMode: 'async',
    callback: async ({ min }) => min,
  },
});

console.log(result.total); // 3
```

Use `yield* input.rollDie()` to request one additional die. Both helpers return `undefined` when the remaining [generated-roll budget](../usage/index.md#roll-limits) cannot cover the request; `rollBatch(count)` reserves a complete batch or draws nothing. These helpers work with synchronous drivers too.

**Handlers that don't draw additional dice can continue returning an array directly.** Only handlers that need to request faces must use generators. See [Modifiers](modifiers.md#writing-your-own-handler) for the rest of the handler interface.

## More information

- [Random number generator](random-number-generator.md) — configure built-in or custom random engines instead of supplying complete die faces.
- [Custom dice](dice.md) — define ranges, faces and custom die behaviour.
- [Importing and exporting](../usage/importing-and-exporting.md) — save results and re-roll restored dice.
