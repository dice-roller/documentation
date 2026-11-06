---
sidebarDepth: 1
---

# Introduction

RPG Dice Roller is a JavaScript and TypeScript library for rolling dice using familiar tabletop notation. From a simple `d20` to dice pools, exploding dice and mathematical expressions, it handles the rolls and gives you access to the results.

Built with tabletop role-playing games in mind, it can power character builders, virtual tabletops, game tools and other applications that need more than a basic random number.


## How it works

Describe a roll using **dice notation**: a string that specifies the dice to roll, any modifiers to apply, and how to calculate the total.

For example:

* `d20` — roll one twenty-sided die.
* `2d6+3` — roll two six-sided dice and add three.
* `4d6kh3` — roll four six-sided dice and keep the highest three.
* `d6!` — roll a six-sided die, rolling again whenever it lands on six and adding the extra rolls.

The library interprets the notation, rolls the dice and applies the modifiers. You can inspect the individual results, use the calculated total, or format the roll for display.

Start with [Getting started](getting-started.md) to install the library, or explore the [notation guide](notation/readme.md) to see what you can roll.


## Features

### Dice types

Roll the dice your game needs:

* [Standard dice](notation/dice.md#standard), including familiar dice such as d6 and d20.
* [Percentile dice](notation/dice.md#percentile).
* [Fudge and Fate dice](notation/dice.md#fudge-fate-dice).
* [Range dice](notation/dice.md#range-dice), with custom minimum and maximum values, including negative numbers. <Badge text="New in v6" vertical="middle"/>
* [Face dice](notation/dice.md#face-dice), with individually defined face values. <Badge text="New in v6" vertical="middle"/>
* Custom dice definitions for your own game mechanics. <Badge text="New in v6" vertical="middle"/>

### Roll modifiers

Apply modifiers individually or combine them to build more complex rolls:

* [Exploding](notation/modifiers.md#explode), [compounding](notation/modifiers.md#compound) and [penetrating](notation/modifiers.md#penetrate) dice.
* [Keep](notation/modifiers.md#keep) or [drop](notation/modifiers.md#drop) results.
* [Re-roll](notation/modifiers.md#re-roll) dice or require [unique results](notation/modifiers.md#unique).
* Count [successes](notation/modifiers.md#target-success-dice-pool) and [failures](notation/modifiers.md#target-failure-dice-pool).
* Set [minimum](notation/modifiers.md#min) and [maximum](notation/modifiers.md#max) die results.
* [Sort results](notation/modifiers.md#sort).

### Groups and calculations

Build expressions that bring several rolls together:

* [Roll groups](notation/roll-groups.md) and apply modifiers to their results.
* Combine dice with [mathematical operators](notation/maths.md#operators) and [functions](notation/maths.md#functions).
* Use parentheses to control the order of calculations.

### Results and roll history

Work with the results beyond their final totals:

* Inspect individual dice and evaluated expressions.
* Keep a history of rolls.
* [Export](usage.md#export-rolls) and [import](usage.md#import-rolls) rolls.
* Format results for display using presenters.

### Customisation

Adapt the library to your game or application:

* Customise the behaviour of built-in modifiers. <Badge text="New in v6" vertical="middle"/>
* Choose a different random number generator.
* Use seeded engines for repeatable rolls.
* Create presenters that format results as text, HTML or other output. <Badge text="New in v6" vertical="middle"/>

See the [API reference](../api/) for the available extension points.


## Random number generation

By default, rolls use JavaScript’s `Math.random()` through the library’s random engine.

You can [supply a different engine](customisation.md#random-number-generator) when you need another source of randomness, or use a seeded engine to reproduce the same sequence of rolls. This can be useful for testing, debugging and repeatable game scenarios.


## Environment support

The library supports modern browsers and includes TypeScript type definitions. ES module and UMD builds are available for different environments.

We actively support the latest Node.js LTS release. Older versions may work, but aren’t officially supported or tested.

![Supported Node.js version](https://img.shields.io/node/v/%40dice-roller/rpg-dice-roller)

See [Getting started](getting-started.md) for installation and import options.


## Related projects

Other projects in the Dice Roller ecosystem include:

* [Vue components](https://github.com/dice-roller/vue) for adding dice rolling to Vue applications.
* The [VuePress plugin](https://github.com/dice-roller/vuepress-plugin) used for interactive rolls in this documentation.
* A [command-line interface](https://github.com/dice-roller/cli) for rolling dice in your terminal.
