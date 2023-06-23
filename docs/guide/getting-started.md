# Get Started

## Install

::: code-tabs#install-method

@tab NPM

```bash
npm install @dice-roller/rpg-dice-roller
```

@tab Yarn

```bash
yarn add @dice-roller/rpg-dice-roller
```

@tab CDN

```html
<!-- Replace {VERSION} with the version you want to use -->
<script src="https://cdn.jsdelivr.net/npm/@dice-roller/rpg-dice-roller@{VERSION}/lib/umd/bundle.min.js"></script>
```

:::

## Setup

::: warning Node.js
We only support Node.js 12+. Please check the [browser support](readme.md#browser-support).
:::

:::: tabs#module-type

@tab ESM

You can import the dice roller and use it in your application, using [ES standard modules](https://nodejs.org/api/esm.html) like so:

```javascript
import * as rpgDiceRoller from '@dice-roller/rpg-dice-roller';
```

If you only want to import specific components, you can do so like:

```javascript
import { DiceRoller } from '@dice-roller/rpg-dice-roller';
```

@tab CommonJS

::: tip
If you're using Node.js with [ES modules](https://nodejs.org/api/esm.html) (`import`), instead of CommonJS (`require`), follow the ESM section instead.
:::

You can also load the library using CommonJS, AMD, etc. with the UMD build:

```javascript
const rpgDiceRoller = require('@dice-roller/rpg-dice-roller');
```

If you only want to import specific components, you can do so like:
```javascript
const { DiceRoller } = require('@dice-roller/rpg-dice-roller');
```

@tab Browser

::: warning Browser support
The dice roller may not work with older browsers.
Please check the [browser support](readme.md#browser-support).
:::


#### Dependencies

First, you'll need to include some third party dependencies:

* [Math.js](https://mathjs.org/download.html#download)
* [Random.js](https://github.com/ckknight/random-js#browser-using-script-tag)

```html
<script src="https://unpkg.com/mathjs@11.8.2/lib/browser/math.js"></script>
<script src="https://cdn.jsdelivr.net/npm/random-js@2.1.0/dist/random-js.umd.min.js"></script>
```


#### Dice Roller

You can either download the file locally, or use the [CDN](#install) (_Note `umd` in the path, instead of `esm`_):

```html
<!-- local file -->
<script src="./path/to/lib/umd/bundle.min.js"></script>

<!-- or CDN - Replace {VERSION} with the version you want to use -->
<script src="https://cdn.jsdelivr.net/npm/@dice-roller/rpg-dice-roller@{VERSION}/lib/umd/bundle.min.js"></script>
```

The UMD bundle provides the global variable, `rpgDiceRoller`, that is used to access the library.

```html
<script>
  // create a new instance of the DiceRoller
  var diceRoller = new rpgDiceRoller.DiceRoller();
</script>
```

::::
