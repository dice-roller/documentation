[@dice-roller/rpg-dice-roller](../../../../index.md) / [errors](../index.md) / NotationErrorLocation

# Interface: NotationErrorLocation

Defined in: [src/errors/NotationError.ts:6](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/errors/NotationError.ts#L6)

Location of a syntax error within the notation.

## Properties

### column

> `readonly` **column**: `number`

Defined in: [src/errors/NotationError.ts:12](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/errors/NotationError.ts#L12)

Column in the notation (1-based).

***

### line

> `readonly` **line**: `number`

Defined in: [src/errors/NotationError.ts:10](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/errors/NotationError.ts#L10)

Line in the notation (1-based).

***

### offset

> `readonly` **offset**: `number`

Defined in: [src/errors/NotationError.ts:8](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/errors/NotationError.ts#L8)

Offset in the notation (0-based).
