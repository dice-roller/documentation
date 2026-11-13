[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / fudgeDie

# Function: fudgeDie()

> **fudgeDie**(`nonBlanks?`): [`FacesDieDefinition`](../interfaces/FacesDieDefinition.md)

Defined in: [src/dice/presets.ts:109](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/dice/presets.ts#L109)

A fudge / fate die. Registered in the `DieRegistry` as `fudge`.

- `fudgeDie(2)` (the default, `dF`): `[-1, 0, 1]`, equally likely; equivalent in
  probability to two physical faces of each value, but its face count is 3
- `fudgeDie(1)` (`dF.1`): `[-1, 0, 0, 0, 0, 1]`, with face count 6

Each variant is a shared, frozen definition.

## Parameters

### nonBlanks?

[`FudgeNonBlanks`](../type-aliases/FudgeNonBlanks.md) = `2`

## Returns

[`FacesDieDefinition`](../interfaces/FacesDieDefinition.md)

## Throws

`nonBlanks` isn't 1 or 2
