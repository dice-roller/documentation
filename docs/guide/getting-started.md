# Get started

Install RPG Dice Roller and load it using the setup that matches your application.


## Install

Install the library using your preferred package manager:

:::tabs key:install-method variant:code

== npm

```bash
npm install @dice-roller/rpg-dice-roller
```

== Yarn

```bash
yarn add @dice-roller/rpg-dice-roller
```

:::

To use the library directly in a browser without a build tool, see [Browser setup](#browser-setup).


## Setup

Use ES modules in applications that support `import`, or CommonJS in applications that use `require`.

:::tabs key:module-type

=== ESM

Import the components you need:

```javascript
import { Roll, Roller } from '@dice-roller/rpg-dice-roller';
```

This works in Node.js projects configured for ES modules and browser applications using a build tool such as Vite.

You can also import the library as a namespace:

```javascript
import * as rpgDiceRoller from '@dice-roller/rpg-dice-roller';
```

=== CommonJS

Load the components using `require`:

```javascript
const { Roll, Roller } = require('@dice-roller/rpg-dice-roller');
```

You can also load the library as a namespace:

```javascript
const rpgDiceRoller = require('@dice-roller/rpg-dice-roller');
```

:::

TypeScript type definitions are included with the package. No additional types package is required.


## Browser setup

You can use RPG Dice Roller directly in a modern browser without an application build tool.

:::: tabs#browser-module-type

@tab ESM

Use a `<script type="module">` element to import the library.

An ESM-aware CDN such as [esm.sh](https://esm.sh/) can resolve the library’s dependencies for you. Replace `{VERSION}` with the library version you want to use.

```html
<script type="module">
  import { Roll, Roller } from 'https://esm.sh/@dice-roller/rpg-dice-roller@{VERSION}';

  // Use Roll and Roller here.
</script>
```

If you host the ESM build yourself, its runtime dependencies must also be resolvable by the browser, for example through an import map. The ESM bundle is not a standalone file.

@tab UMD

The UMD build includes its runtime dependencies and exposes the library through the global `rpgDiceRoller` variable.

Copy `dist/umd/bundle.min.js` from the package into your application, then load it before the code that uses it:

```html
<script src="./path/to/bundle.min.js"></script>

<script>
  const { Roll, Roller } = rpgDiceRoller;

  // Use Roll and Roller here.
</script>
```

You do not need to load the library’s dependencies separately.

::::


## Next steps

Continue to the [usage guide](usage/index.md) to roll dice and work with the results.

* Explore the [notation guide](notation/index.md) for dice types, modifiers and mathematical expressions.
* See [environment support](index.md#environment-support) for supported browsers and Node.js versions.
