[@dice-roller/rpg-dice-roller](../../../../index.md) / [engines](../index.md) / browserCrypto

# Variable: browserCrypto

> `const` **browserCrypto**: `Engine`

Defined in: node\_modules/random-js/dist/engine/browserCrypto.d.ts:11

An Engine that relies on the globally-available `crypto.getRandomValues`,
which is typically available in modern browsers.

See https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues

If unavailable or otherwise non-functioning, then `browserCrypto` will
likely `throw` on the first call to `next()`.
