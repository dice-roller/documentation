[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / ModifierHandlerOf

# Type Alias: ModifierHandlerOf\<K\>

> **ModifierHandlerOf**\<`K`\> = [`ModifierHandler`](../interfaces/ModifierHandler.md)\<`Extract`\<`Exclude`\<[`ModifierNode`](../../ast/type-aliases/ModifierNode.md), [`ComputedDropNode`](../../ast/interfaces/ComputedDropNode.md) \| [`ComputedKeepNode`](../../ast/interfaces/ComputedKeepNode.md)\>, \{ `name`: `K`; \}\>\>

Defined in: [src/modifiers/types.ts:77](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/modifiers/types.ts#L77)

The handler for the modifier with the given name.

## Type Parameters

### K

`K` *extends* [`ModifierName`](../../ast/type-aliases/ModifierName.md)
