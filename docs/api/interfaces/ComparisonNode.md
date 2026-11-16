[@dice-roller/rpg-dice-roller](../index.md) / ComparisonNode

# Interface: ComparisonNode

Defined in: [src/ast/nodes.ts:101](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L101)

A numeric comparison, e.g. `2d6 >= 8`; its result is `1` or `0`.

## Properties

### left

> `readonly` **left**: [`ExpressionNode`](../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:104](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L104)

***

### op

> `readonly` **op**: `"="` \| `"!="` \| `"<>"` \| `"<"` \| `">"` \| `"<="` \| `">="`

Defined in: [src/ast/nodes.ts:103](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L103)

***

### right

> `readonly` **right**: [`ExpressionNode`](../type-aliases/ExpressionNode.md)

Defined in: [src/ast/nodes.ts:105](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L105)

***

### type

> `readonly` **type**: `"comparison"`

Defined in: [src/ast/nodes.ts:102](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L102)
