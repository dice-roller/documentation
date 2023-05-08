# Introduction

This library is a JS based dice roller that can roll various types of dice and modifiers, along with mathematical equations.

It's main purpose is for use in pen and paper / tabletop RPGs, like Dungeons & Dragons, Pathfinder, Cyberpunk, Warhammer etc., where players have to roll complicated combinations of dice.


## How it works

Dice can be rolled through the use of "notations", which are strings of characters that tell the parser which dice and modifiers to roll.

You can read more about it in the [Notation section](notation/readme.md).


## How random is it?

This library uses [psudeo random number generation](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) (PRNG) to determine die rolls. It is not _true_ random but it is suitable for most purposes. PRNGs are used globally for computer-based random number generation.

It is more than sufficient for the vast majority of uses. However, if your needs require, you can [modify the RNG engine](customisation.md#random-number-generation).


## Features

**Different dice types**

* [Standard dice](notation/dice.md#standard-dn)
* [Percentile dice](notation/dice.md#percentile-dice-d)
* [Fudge / fate dice](notation/dice.md#fudge-fate-dice-df-df-2-df-1)

**Roll modifiers**

* [Exploding](notation/modifiers.md#exploding-cp)
* [Compounding](notation/modifiers.md#compounding-cp)
* [Penetrating](notation/modifiers.md#penetrating-p-p-p-cp-p-cp)
* [Keep rolls](notation/modifiers.md#keep-k-n-kh-n-kl-n)
* [Drop rolls](notation/modifiers.md#drop-d-n-dh-n-dl-n)
* [Re-roll](notation/modifiers.md#re-roll-r-ro-r-cp-ro-cp)
* [Unique](notation/modifiers.md#unique-u-uo-u-cp-uo-cp) <Badge text="New" vertical="middle"/>
* [Target success](notation/modifiers.md#target-success-dice-pool-cp)
* [Target failure](notation/modifiers.md#target-failures-dice-pool-f-cp)
* [Max](notation/modifiers.md#max-max-n)
* [Min](notation/modifiers.md#min-min-n)
* [Sort dice](notation/modifiers.md#sorting-s-sa-sd)

**Advanced**

* [Group rolls](notation/group-rolls.md) <Badge text="New" vertical="middle"/>

**Mathematical equations**

* [Operators](notation/maths.md#operators)
* [Functions](notation/maths.md#functions)
* [Easy min / max / average total calculations](usage.md#roll-totals)

**Customisation**

* [Random number generator](customisation.md#random-number-generator)
* [Exporting](usage.md#export-rolls) / [importing rolls](usage.md#import-rolls)


## Usage in the wild

### Official

* [Vue components](https://github.com/dice-roller/vue) - For Tailwind, Bootstrap, basic HTML, and renderless
* [Vuepress plugin](https://github.com/dice-roller/vuepress-plugin) - Dice roller plugin used in this documentation
* [CLI](https://github.com/dice-roller/cli) <Badge text="New" vertical="middle"/> - Command Line Interface for rolling dice


## Browser support

This library uses ES6+ and native JS modules, which work in all the latest browsers, and Node.js.

We also provide a bundled UMD version that can be used in environments that don't support ES modules.

We actively support the latest versions of Firefox, Chrome, Opera, Safari, Microsoft Edge, and Node.js.

::: warning Node.js
We only support Node.js >= 12.
There's no guarantee that it will work on older versions.
:::

::: danger Internet Explorer
We do **not** support IE, and the library will **not** work in IE (Check out Microsoft Edge instead!).

It _may_ be possible to make it work by creating polyfills for functionality that is missing in IE, but we cannot guarantee it.
:::
