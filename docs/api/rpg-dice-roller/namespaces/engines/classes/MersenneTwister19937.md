[@dice-roller/rpg-dice-roller](../../../../index.md) / [engines](../index.md) / MersenneTwister19937

# Class: MersenneTwister19937

Defined in: node\_modules/random-js/dist/engine/MersenneTwister19937.d.ts:8

An Engine that is a pseudorandom number generator using the Mersenne
Twister algorithm based on the prime 2**19937 − 1

See http://en.wikipedia.org/wiki/Mersenne_twister

## Implements

- `Engine`

## Methods

### discard()

> **discard**(`count`): `this`

Defined in: node\_modules/random-js/dist/engine/MersenneTwister19937.d.ts:47

Discards one or more items from the engine

#### Parameters

##### count

`number`

The count of items to discard

#### Returns

`this`

***

### getUseCount()

> **getUseCount**(): `number`

Defined in: node\_modules/random-js/dist/engine/MersenneTwister19937.d.ts:42

Returns the number of times that the Engine has been used.

This can be provided to an unused MersenneTwister19937 with the same
seed, bringing it to the exact point that was left off.

#### Returns

`number`

***

### next()

> **next**(): `number`

Defined in: node\_modules/random-js/dist/engine/MersenneTwister19937.d.ts:35

Returns the next int32 value of the sequence

#### Returns

`number`

#### Implementation of

`Engine.next`

***

### autoSeed()

> `static` **autoSeed**(): `MersenneTwister19937`

Defined in: node\_modules/random-js/dist/engine/MersenneTwister19937.d.ts:23

Returns a MersenneTwister19937 seeded with the current time and
a series of natively-generated random values

#### Returns

`MersenneTwister19937`

***

### seed()

> `static` **seed**(`initial`): `MersenneTwister19937`

Defined in: node\_modules/random-js/dist/engine/MersenneTwister19937.d.ts:13

Returns a MersenneTwister19937 seeded with an initial int32 value

#### Parameters

##### initial

`number`

the initial seed value

#### Returns

`MersenneTwister19937`

***

### seedWithArray()

> `static` **seedWithArray**(`source`): `MersenneTwister19937`

Defined in: node\_modules/random-js/dist/engine/MersenneTwister19937.d.ts:18

Returns a MersenneTwister19937 seeded with zero or more int32 values

#### Parameters

##### source

`ArrayLike`\<`number`\>

A series of int32 values

#### Returns

`MersenneTwister19937`
