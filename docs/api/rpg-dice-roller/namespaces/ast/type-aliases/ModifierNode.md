[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / ModifierNode

# Type Alias: ModifierNode

> **ModifierNode** = [`ExplodeMatchingBatchNode`](../interfaces/ExplodeMatchingBatchNode.md) \| [`ExplodeNode`](../interfaces/ExplodeNode.md) \| [`TargetNode`](../interfaces/TargetNode.md) \| [`DropNode`](../interfaces/DropNode.md) \| [`ComputedDropNode`](../interfaces/ComputedDropNode.md) \| [`KeepNode`](../interfaces/KeepNode.md) \| [`ComputedKeepNode`](../interfaces/ComputedKeepNode.md) \| [`ReRollNode`](../interfaces/ReRollNode.md) \| [`UniqueNode`](../interfaces/UniqueNode.md) \| [`CriticalSuccessNode`](../interfaces/CriticalSuccessNode.md) \| [`CriticalFailureNode`](../interfaces/CriticalFailureNode.md) \| [`SortNode`](../interfaces/SortNode.md) \| [`MaxNode`](../interfaces/MaxNode.md) \| [`MinNode`](../interfaces/MinNode.md)

Defined in: [src/ast/nodes.ts:211](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/nodes.ts#L211)

A modifier selected by `name`; an omitted compare point uses the registered handler's default.
