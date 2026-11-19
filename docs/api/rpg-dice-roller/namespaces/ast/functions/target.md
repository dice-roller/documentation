[@dice-roller/rpg-dice-roller](../../../../index.md) / [ast](../index.md) / target

# Function: target()

## Call Signature

> **target**(`rules`): [`TargetNode`](../interfaces/TargetNode.md)

Defined in: [src/ast/builders.ts:306](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L306)

A target block starts with a success and can contain further success or failure rules. Amounts are 1–10 and default to 1; the last matching rule wins.

### Parameters

#### rules

readonly [`TargetRule`](../interfaces/TargetRule.md)[]

### Returns

[`TargetNode`](../interfaces/TargetNode.md)

## Call Signature

> **target**(`success`, `failure?`): [`TargetNode`](../interfaces/TargetNode.md)

Defined in: [src/ast/builders.ts:308](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/ast/builders.ts#L308)

Count successes and optional failures using unweighted compare points.

### Parameters

#### success

[`ComparePoint`](../interfaces/ComparePoint.md)

#### failure?

[`ComparePoint`](../interfaces/ComparePoint.md)

### Returns

[`TargetNode`](../interfaces/TargetNode.md)
