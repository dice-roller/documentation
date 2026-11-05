[@dice-roller/rpg-dice-roller](../../../../index.md) / [engines](../index.md) / nodeCrypto

# Variable: nodeCrypto

> `const` **nodeCrypto**: `Engine`

Defined in: node\_modules/random-js/dist/engine/nodeCrypto.d.ts:11

An Engine that relies on the node-available
`require('crypto').randomBytes`, which has been available since 0.58.

See https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback

If unavailable or otherwise non-functioning, then `nodeCrypto` will
likely `throw` on the first call to `next()`.
