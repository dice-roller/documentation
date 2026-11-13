---
outline: 2
---

# Customisation

RPG Dice Roller works out of the box without any additional configuration. The built-in dice, modifiers, random number generator and text presenter are ready to use.

If your game or application needs something different, you can customise how dice are rolled, how results are handled and how they're displayed. **Everything here is optional.**

## What can you customise?

- [Random number generator](random-number-generator.md) — choose a different source of randomness, including seeded or custom engines.
- [Presenters](presenters.md) — change how rolls are displayed, or create your own output format.
- [Custom dice](dice.md) — change existing dice or define dice with their own faces and rolling behaviour.
- [Modifiers](modifiers.md) — change the order in which modifiers run or customise how they handle results.

## Applying customisation

You can pass configuration to an individual `Roll`, or to a `Roller` to share it across multiple rolls. For example:

```javascript
const roller = new Roller({
  limits: {
    maxQty: 100,
  },
});

roller.roll('4d6kh3');
```

You can configure one option without changing any of the others. Custom dice and modifiers use registries, allowing different rollers to follow different rules without affecting each other.

For all available options, including limits on dice quantities and repeating modifiers, see [Roll options](../usage/index.md#roll-options).
