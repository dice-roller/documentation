[@dice-roller/rpg-dice-roller](../../../../index.md) / [dice](../index.md) / faceDie

# Function: faceDie()

> **faceDie**(`faces`, `options?`): [`FacesDieDefinition`](../interfaces/FacesDieDefinition.md)

Defined in: [src/dice/presets.ts:47](https://github.com/dice-roller/rpg-dice-roller/blob/4b6c846f31da769d86e89e9b9109f7e33185c28e/src/dice/presets.ts#L47)

A die with a list of faces, e.g. `faceDie([1, 1, 2, 3, 5, 8])`.

Repeated faces act as weights. The faces are copied and frozen, so changing the array afterwards
doesn't change the die. Registered in the `DieRegistry` as `face`, with the faces as arguments.
Notation such as `d{1,1,2}` materializes at most 1,000 faces; this limit does not apply here.

## Parameters

### faces

readonly `number`[]

### options?

[`DieOptions`](../interfaces/DieOptions.md) = `{}`

## Returns

[`FacesDieDefinition`](../interfaces/FacesDieDefinition.md)

## Throws

there are no faces, or a face isn't a finite number
