[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / comparison

# Function: comparison()

> **comparison**(`op`, `left`, `right`): [`ComparisonNode`](../../../../interfaces/ComparisonNode.md)

Defined in: [src/ast/builders.ts:174](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L174)

A numeric comparison, e.g. `comparison(">=", pool(2, 6), 8)`.

## Parameters

### op

`"="` \| `"!="` \| `"<>"` \| `"<"` \| `">"` \| `"<="` \| `">="`

### left

[`ExpressionInput`](../type-aliases/ExpressionInput.md)

### right

[`ExpressionInput`](../type-aliases/ExpressionInput.md)

## Returns

[`ComparisonNode`](../../../../interfaces/ComparisonNode.md)
