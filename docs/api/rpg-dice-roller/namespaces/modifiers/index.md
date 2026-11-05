---
sidebarDepth: 0
---

[@dice-roller/rpg-dice-roller](../../../index.md) / modifiers

# modifiers

Modifier definitions, handlers, and registries for extending roll behavior.

## Classes

| Class | Description |
| ------ | ------ |
| [ModifierRegistry](classes/ModifierRegistry.md) | Modifier handlers by name. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ModifierHandler](interfaces/ModifierHandler.md) | The behaviour of a modifier. |
| [ModifierInput](interfaces/ModifierInput.md) | Context and modifier node supplied to a handler alongside its items. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ModifierHandlerOf](type-aliases/ModifierHandlerOf.md) | The handler for the modifier with the given name. |
| [ModifierTarget](type-aliases/ModifierTarget.md) | What a modifier can be attached to. |

## Variables

| Variable | Description |
| ------ | ------ |
| [builtInModifierHandlers](variables/builtInModifierHandlers.md) | The built-in handlers, in execution order. The array, handlers, and their target arrays are frozen. |
| [criticalFailureHandler](variables/criticalFailureHandler.md) | `cf`, `cf<3`: flags rolls matching the compare point (the die's min by default) as `critical-failure`. |
| [criticalSuccessHandler](variables/criticalSuccessHandler.md) | `cs`, `cs>18`: flags rolls matching the compare point (the die's max by default) as `critical-success`. |
| [dropHandler](variables/dropHandler.md) | `d`, `dl`, `dh`: drops the lowest / highest `qty` items (flag `drop`). `d` defaults to lowest. |
| [explodeHandler](variables/explodeHandler.md) | `!`, `!!`, `!p`, `!!p`: rolls another die whenever a roll matches the compare point (the die's max by default), up to `ctx.limits.maxIterations` times per roll (default 1000). At the limit the last extra roll is retained even if it matches. |
| [keepHandler](variables/keepHandler.md) | `k`, `kh`, `kl`: keeps the highest / lowest `qty` items, and drops the rest (flag `drop`). `k` defaults to highest. |
| [maxHandler](variables/maxHandler.md) | `max5`: lowers rolls above the value to the value (flag `max`). |
| [minHandler](variables/minHandler.md) | `min2`: raises rolls below the value to the value (flag `min`). |
| [reRollHandler](variables/reRollHandler.md) | `r`, `ro`: re-rolls rolls that match the compare point (the die's min by default), replacing the value (the initial value is kept). |
| [sortHandler](variables/sortHandler.md) | `s`, `sa`, `sd`: sorts the items by value, ascending or descending. `s` defaults to ascending. |
| [targetHandler](variables/targetHandler.md) | `>=8`, `>=8f<=2`: counts successes and failures. |
| [uniqueHandler](variables/uniqueHandler.md) | `u`, `uo`: re-rolls rolls whose value an earlier roll already has (optionally only those matching the compare point), replacing the value (the initial value is kept). The first roll is never re-rolled. |

## Functions

| Function | Description |
| ------ | ------ |
| [matchesComparePoint](functions/matchesComparePoint.md) | Whether the value matches the compare point, e.g. `matchesComparePoint({ operator: ">=", value: 8 }, 9)`. |
