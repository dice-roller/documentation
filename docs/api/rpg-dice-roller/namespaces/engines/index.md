---
sidebarDepth: 0
---

[@dice-roller/rpg-dice-roller](../../../index.md) / engines

# engines

Random engines for controlling how dice are rolled.

## Classes

| Class | Description |
| ------ | ------ |
| [MersenneTwister19937](classes/MersenneTwister19937.md) | An Engine that is a pseudorandom number generator using the Mersenne Twister algorithm based on the prime 2**19937 − 1 |

## Variables

| Variable | Description |
| ------ | ------ |
| [browserCrypto](variables/browserCrypto.md) | An Engine that relies on the globally-available `crypto.getRandomValues`, which is typically available in modern browsers. |
| [nativeMath](variables/nativeMath.md) | An int32-producing Engine that uses `Math.random()` |
| [nodeCrypto](variables/nodeCrypto.md) | An Engine that relies on the node-available `require('crypto').randomBytes`, which has been available since 0.58. |
