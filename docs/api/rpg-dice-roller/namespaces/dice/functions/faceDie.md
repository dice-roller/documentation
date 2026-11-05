[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / faceDie

# Function: faceDie()

> **faceDie**(`faces`, `options?`): [`FacesDieDefinition`](../interfaces/FacesDieDefinition.md)

Defined in: [src/dice/presets.ts:45](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/dice/presets.ts#L45)

A die with a list of faces, e.g. `faceDie([1, 1, 2, 3, 5, 8])`.

Repeated faces act as weights. The faces are copied and frozen, so changing the array afterwards
doesn't change the die. Registered in the `DieRegistry` as `face`, with the faces as arguments.

## Parameters

### faces

readonly `number`[]

### options?

[`DieOptions`](../interfaces/DieOptions.md) = `{}`

## Returns

[`FacesDieDefinition`](../interfaces/FacesDieDefinition.md)

## Throws

there are no faces, or a face isn't a finite number
