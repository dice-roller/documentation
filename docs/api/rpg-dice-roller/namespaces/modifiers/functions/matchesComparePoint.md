[@dice-roller/rpg-dice-roller](../../../../index.md) / [modifiers](../index.md) / matchesComparePoint

# Function: matchesComparePoint()

> **matchesComparePoint**(`comparePoint`, `value`): `boolean`

Defined in: [src/modifiers/compare-point.ts:11](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/modifiers/compare-point.ts#L11)

Whether the value matches the compare point, e.g. `matchesComparePoint({ operator: ">=", value: 8 }, 9)`.

`!=` and `<>` both mean "not equal".

## Parameters

### comparePoint

[`ComparePoint`](../../ast/interfaces/ComparePoint.md)

### value

`number`

## Returns

`boolean`

## Throws

the operator is unknown (e.g. from untyped or imported data)
