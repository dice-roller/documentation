# Get Started

## Install

* NPM:
    ```bash
    npm install @dice-roller/rpg-dice-roller
    ```
* Yarn:
    ```bash
    yarn add @dice-roller/rpg-dice-roller
    ```
* CDN:
    [![JSDelivr](https://data.jsdelivr.com/v1/package/npm/@dice-roller/rpg-dice-roller/badge)](https://www.jsdelivr.com/package/npm/@dice-roller/rpg-dice-roller)
    
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@dice-roller/rpg-dice-roller@VERSION/lib/umd/bundle.min.js"></script>
    ```
    <small>_Replace `VERSION` with the version you want to use._</small>


## Setup

### ES modules

You can import the dice roller and use it in your application, using ES standard modules like so:

```javascript
import * as rpgDiceRoller from '@dice-roller/rpg-dice-roller';
```

If you only want to import specific components, you can do so like:

```javascript
import { DiceRoller } from '@dice-roller/rpg-dice-roller';
```


### CommonJS 

::: warning Node.js
We only support Node.js 12+. Please check the [browser support](readme.md#browser-support).
:::

::: tip
If you're using Node.js, with [ES modules](https://nodejs.org/api/esm.html) (`import`) instead of CommonJS (`require`) follow the [ES modules](#es-modules) examples above.
:::

You can also load the library using CommonJS, AMD, etc. with the UMD build:

```javascript
const rpgDiceRoller = require('@dice-roller/rpg-dice-roller');
```

If you only want to import specific components, you can do so like:
```javascript
const { DiceRoller } = require('@dice-roller/rpg-dice-roller');
```


### Browsers

::: warning Browser support
We don't guarantee that the library works with all older browsers.
We advise you to check the [browser support](readme.md#browser-support).
:::


#### Dependencies

First, you'll need to include some third party dependencies:

* [Math.js](https://mathjs.org/download.html#download)
* [Random.js](https://github.com/ckknight/random-js#browser-using-script-tag)

```html
<script src="https://unpkg.com/mathjs@9.3.2/lib/browser/math.js"></script>
<script src="https://cdn.jsdelivr.net/npm/random-js@2.1.0/dist/random-js.umd.min.js"></script>
```


#### Dice Roller

You can either download the file locally, or use the [CDN](#install) (_Note `umd` in the path, instead of `esm`_):

```html
<!-- local file -->
<script src="./path/to/lib/umd/bundle.min.js"></script>

<!-- or CDN -->
<script src="https://cdn.jsdelivr.net/npm/@dice-roller/rpg-dice-roller@VERSION/lib/umd/bundle.min.js"></script>
```

The UMD bundle provides the global variable, `rpgDiceRoller`, that is used to access the library.

```html
<script>
  // create a new instance of the DiceRoller
  var diceRoller = new rpgDiceRoller.DiceRoller();
</script>
```
