---
sidebarDepth: 2
---

# Get Started

## Install

* NPM:
    ```bash
    npm install rpg-dice-roller
    ```
* Yarn:
    ```bash
    yarn add rpg-dice-roller
    ```
* CDN:
    [![JSDelivr](https://data.jsdelivr.com/v1/package/npm/rpg-dice-roller/badge)](https://www.jsdelivr.com/package/npm/rpg-dice-roller)
    * ESM:
      ```html
      <script src="https://cdn.jsdelivr.net/npm/rpg-dice-roller@VERSION/lib/esm/bundle.min.js"></script>
      ```
    * UMD:
      ```html
      <script src="https://cdn.jsdelivr.net/npm/rpg-dice-roller@VERSION/lib/umd/bundle.min.js"></script>
      ```


## Setup

### ES modules

You can import the dice roller and use it in your application, using ES standard modules like so:

```javascript
// In Node.js
import * as rpgDiceRoller from 'rpg-dice-roller';

// Using relative path (e.g. in browser)
import * as rpgDiceRoller from './path/to/lib/esm/bundle.js';

// Using CDN (e.g. in browser)
import * as rpgDiceRoller from 'https://cdn.jsdelivr.net/npm/rpg-dice-roller@VERSION/lib/esm/bundle.min.js';
```

If you only want to import specific components, you can do so like:

```javascript
// In Node.js
import { DiceRoller } from 'rpg-dice-roller';

// Using relative path (e.g. in browser)
import { DiceRoller } from './path/to/lib/esm/bundle.js';

// Using CDN (e.g. in browser)
import { DiceRoller } from 'https://cdn.jsdelivr.net/npm/rpg-dice-roller@VERSION/lib/esm/bundle.min.js';
```


### CommonJS

::: tip
If you're using Node.js >= 12 and are using [ES modules](https://nodejs.org/api/esm.html) (`import`) instead of CommonJS (`require`) follow the [ES modules](#es-modules) examples above.
:::

You can also load the library using CommonJS, AMD, etc. with the UMD build:

```javascript
// In Node.js 12+
const rpgDiceRoller = require('rpg-dice-roller');

// In Node.js < 12 you need the path to the UMD script
const rpgDiceRoller = require('rpg-dice-roller/lib/umd/bundle.js');
```

If you only want to import specific components, you can do so like:
```javascript
// In Node.js 12+
const { DiceRoller } = require('rpg-dice-roller');

// In Node.js < 12 you need the path to the UMD script
const { DiceRoller } = require('rpg-dice-roller/lib/umd/bundle.js');
```


### Browsers

#### Modern browsers

Modern browsers [support ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Browser_compatibility).
If you're only supporting compatible browsers, you can use the [ESM bundle](#es-modules).

You can either download the file locally, or use the [CDN](#install) (_Note `esm` in the path, instead of `umd`_):

```html
<script type="module">
// relative path
import * as rpgDiceRoller from './path/to/lib/esm/bundle.js';

// Using CDN
import * as rpgDiceRoller from 'https://cdn.jsdelivr.net/npm/rpg-dice-roller@VERSION/lib/esm/bundle.min.js';
</script>
```


#### Older browsers

::: warning Browser support
We don't guarantee that the library works with all older browsers.
We advise you to check the [browser support](readme.md#browser-support).
:::

For browsers that don't [support ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Browser_compatibility), you can use the UMD bundle.

You can either download the file locally, or use the [CDN](#install) (_Note `umd` in the path, instead of `esm`_):

```html
<!-- download the file locally -->
<script src="./path/to/lib/umd/bundle.min.js"></script>

<!-- or use the CDN -->
<script src="https://cdn.jsdelivr.net/npm/rpg-dice-roller@VERSION/lib/umd/bundle.min.js"></script>
```

The UMD bundle provides the global variable, `rpgDiceRoller`, that is used to access the library.

```html
<script>
  // create a new instance of the DiceRoller
  var diceRoller = new rpgDiceRoller.DiceRoller();
</script>
```
