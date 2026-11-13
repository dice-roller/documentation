---
outline: 2
---

# Customisation

## Modifier execution order

::: warning
Be careful when changing the modifier execution order.
The default order is purposefully defined and changing it may lead to unexpected behaviour.

If you change the order of a modifier to the same order as another modifier, there is no guarantee of which one will run first.
:::

Modifiers always run in a specific order, regardless of the order you specify them in the notation.
This is determined by the modifier's `order` property, and works in ascending order.

However, sometimes the default order is not desired, because certain games require a slightly different order.

For example, Open Legend requires the [keep modifier to be run **before** the explode modifier](https://openlegendrpg.com/core-rules/actions-attributes#advantage--disadvantage-are-only-applied-before-explosions).
However, by default, the [explode modifier](../notation/modifiers.md#explode) runs first.

This is because the [explode modifier](../notation/modifiers.md#explode) has an order of `3`, and the [keep modifier](../notation/modifiers.md#keep) has an order of `6`.

Fortunately, you can modify the execution order for any modifier either [globally](#change-default-order), or on a [per-instance basis](#change-individual-instance-order).

### Change default order

To change the execution order when rolling string notations (e.g. `DiceRoll('4d6!kh1')`), you can set the default order for a modifier.

For modifier execution order in the current API, see [`ModifierHandler`](../../api/rpg-dice-roller/namespaces/modifiers/interfaces/ModifierHandler.md) and its [`order`](../../api/rpg-dice-roller/namespaces/modifiers/interfaces/ModifierHandler.md#order) property. The examples below still use the previous modifier classes and need updating.

You can change it like:

```javascript
// set the explode modifier order to 7
ExplodeModifier.order = 7;

// set the keep modifier order to 2
KeepModifier.order = 2;
```

Any new `ExplodeModifier`, and `KeepModifier` objects will now have the new orders. Other modifiers will retain their original order.

This also works with manually created `Modifier` objects:

```javascript
const mod = new ExplodeModifier();

mode.order === 7;
```

::: warning Conflicting order values
When changing a modifier order, any modifiers with the same order value should be changed to a unique value.
:::

#### Example

Using the [Open Legend example](https://openlegendrpg.com/core-rules/actions-attributes#advantage--disadvantage-are-only-applied-before-explosions), we would need the [keep modifier](../notation/modifiers.md#keep) to run before the [explode modifier](../notation/modifiers.md#explode).

```javascript
// With the default order;
// roll the dice, explode any that roll a 4, then keep only the highest 4 rolls
const roll = new DiceRoll('8d4kh4!');

// Set the keep modifier order to `3` (The current order for the explode modifier)
KeepModifier.order = 3;

// The drop modifier should always run after the keep modifier, so set that to `4`
DropModifier.order = 4;

// Set the explode modifier to run after keep and drop modifiers
ExplodeModifier.order = 5;

// Order 4 and 5 are alreday used for the re-roll and unique modifiers.
// We need to change them as well, otherwise the order is ambiguous
ReRollModifier.order = 6;
UniqueModifier.order = 7;

// With the new order;
// roll the dice, keep only the highest 4 rolls, then explode any that roll a 4
const roll = new DiceRoll('8d4kh4!');
```

### Change individual instance order

::: tip Limitations
This will **not** affect modifiers created from rolling string notation, and is only useful if you are manually creating modifier instances.

To affect roll notations, change the [default order](#change-default-order) instead.
:::

You can change the order on an individual modifier object, by setting the non-static `order` property:

```javascript
const mod1 = new ExplodeModifier();
mod1.order = 7;
```

This only affects the object you have modified. Creating another `ExplodeModifier` will still use the [default order](#change-default-order).
