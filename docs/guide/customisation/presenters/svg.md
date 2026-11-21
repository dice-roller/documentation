# SVG presenter

The SVG presenter displays your rolls as scalable dice graphics, including individual values, modifier icons and totals. It is an optional package for RPG Dice Roller v6.

Standard dice artwork is included automatically. Percentile dice use the d10 shape, Fudge dice use the d6 shape with `−`, a blank face and `+`, and other face counts use a generic shape unless you provide your own artwork.

<SvgExample name="shapes" />

## Install

Add the SVG presenter to your project using your preferred package manager:

:::tabs key:install-method variant:code

== npm

```bash
npm install @dice-roller/svg-presenter
```

== pnpm

```bash
pnpm add @dice-roller/svg-presenter
```

== Yarn

```bash
yarn add @dice-roller/svg-presenter
```

:::

The presenter is an ES module and includes TypeScript definitions. It works in Node.js and browser applications using a build tool, without fetching artwork or configuring SVG loaders.

## Display a roll

Load the presenter using the setup that matches your application, then pass it to `present()`:

:::tabs key:module-type

== ESM

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';
import { SvgPresenter } from '@dice-roller/svg-presenter';

const roll = new Roll('2d6 + 3');
const presenter = new SvgPresenter();
const svg = roll.present(presenter);
```

== CommonJS

The SVG presenter is an ES module. In a CommonJS application, load it with dynamic `import()` inside an async function:

```javascript
const { Roll } = require('@dice-roller/rpg-dice-roller');

async function displayRoll() {
  const { SvgPresenter } = await import('@dice-roller/svg-presenter');
  const roll = new Roll('2d6 + 3');
  const presenter = new SvgPresenter();
  const svg = roll.present(presenter);

  console.log(svg);
}

displayRoll();
```

== Browser

Without a build tool, use a module script and an ESM-aware CDN. Replace `{VERSION}` and `{PRESENTER_VERSION}` with the versions you want to use:

```html
<div id="dice-results"></div>

<script type="module">
  import { Roll } from 'https://esm.sh/@dice-roller/rpg-dice-roller@{VERSION}';
  import { SvgPresenter } from 'https://esm.sh/@dice-roller/svg-presenter@{PRESENTER_VERSION}';

  const roll = new Roll('2d6 + 3');
  const presenter = new SvgPresenter();
  const svg = roll.present(presenter);

  document.querySelector('#dice-results').innerHTML = svg;
</script>
```

:::

The return value is an SVG string. To display it in a browser, insert it into a container:

```html
<div id="dice-results"></div>
```

```javascript
document.querySelector('#dice-results').innerHTML = svg;
```

<SvgExample name="basic" />

Presenting an existing roll again uses its stored results, without rolling again or changing the total.

To use SVG output each time, [set the presenter in your roll options](../presenters.md#reuse-your-choice):

```javascript
const roll = new Roll('2d6 + 3', { presenter: new SvgPresenter() });
const svg = roll.present();
```

String conversion, such as `String(roll)`, still uses the default text presenter.

## Colours and dice size

Make the dice your own by choosing their colours and size when you create the presenter:

```javascript
const presenter = new SvgPresenter({
  size: 100,
  width: 600,
  stroke: '#236b57',
  fill: '#dff3e9',
  filled: true,
});

const svg = roll.present(presenter);
```

<SvgExample name="colours" />

`stroke` sets the base colour for dice outlines, values, labels and maths. Set `filled: true` to fill the dice outlines with `fill`. Both colours must be six-digit hex strings, such as `'#236b57'`.

`size` sets the dice size in SVG drawing units, from `20` to `400` inclusive. Labels and spacing adjust with it. The default is `140`.

### Style individual dice with CSS

When you insert the SVG inline, you can style individual dice using their classes and `data-*` attributes. For example, put your output inside a container with `class="dice-results"`, then apply:

```css
.dice-results [data-shape="d6"] .die-outline {
  fill: #fff0d6;
  stroke: #9b5d0a;
}

.dice-results [data-shape="d6"] .die-value {
  fill: #704200;
}
```

<SvgExample name="basic" styled />

The built-in artwork exposes `.die-outline`, `.die-facets` and `.die-value` for styling. Use `data-die-type="fudge"` to select a dice type, or `data-shape="d6"` to select its artwork. Fudge and standard six-sided dice share a shape but have different dice types.

Page CSS and DOM selectors can reach an inline SVG. They cannot reach inside an SVG displayed using an `<img>` element.

## Width and wrapping

`width` controls the drawing width, including 24 units of padding on each side. The default is `1040`; the value must be finite and greater than `48`. Results and notation wrap to fit.

```javascript
const roll = new Roll('6d6 + 3');
const presenter = new SvgPresenter({ size: 90, width: 420 });
const svg = roll.present(presenter);
```

<SvgExample name="wrapped" />

SVG drawing units are coordinates inside the image. CSS can scale the whole SVG to fit its container, but changing its CSS width does not recalculate where the results wrap. Set the presenter’s `width` to change the layout itself.

### Keep an expression on one line

Set `noWrap: true` to keep each roll expression on one line. The SVG sizes itself to its contents, and `width` no longer constrains the layout:

```javascript
const presenter = new SvgPresenter({ noWrap: true });
const svg = roll.present(presenter);
```

<SvgExample name="nowrap" scroll />

This shows the same roll as the wrapped example. On narrow screens, scroll horizontally to see the whole expression.

To give your own output the same scrolling behaviour:

```css
.dice-results {
  overflow-x: auto;
}

.dice-results > svg {
  display: block;
  max-width: none;
}
```

Histories still place each roll separately. Descriptions, labels and modifier icons retain their own layout around the dice.

## Labels, values and totals

You can hide parts of the output independently. For example, show just the dice and maths:

```javascript
const presenter = new SvgPresenter({
  size: 100,
  width: 600,
  showDiceLabels: false,
  showModifierLabels: false,
  showNotation: false,
  showTotals: false,
});
```

<SvgExample name="minimal" />

These visibility options all default to `true`:

| Option | What it shows |
| --- | --- |
| `showValues` | Values on the dice, including Fudge symbols. |
| `showDescriptions` | Pool and group descriptions alongside their results. |
| `showDiceLabels` | Die notation beneath each die. |
| `showVariableLabels` | Variable names such as `$bonus` and `$$condition` beneath their resolved values. |
| `showModifierLabels` | Modifier labels beneath dice and group members, and calculated keep/drop captions beneath pools and groups. |
| `showModifierIcons` | Symbols for modifier effects. |
| `showNotation` | The supplied notation above each roll. |
| `showTotals` | Individual roll totals and the history total. |

Hiding visible information does not remove the underlying results, metadata or tooltips. Dropped results remain faded and crossed out.

## Modifier icons

Modifier icons show effects such as exploding, rerolling, min/max, target successes and failures, and critical successes and failures. They represent flags on the results, rather than every modifier in the notation. Keep and sort do not add icons of their own.

<SvgExample legend />

By default, icons sit at the corners of the dice:

```javascript
const roll = new Roll('2d6!1 + 4d6kh3cs=6cf=2');
const presenter = new SvgPresenter();
const svg = roll.present(presenter);
```

<SvgExample name="modifiers-corner" />

Use `modifierIconPosition: 'below'` to move them underneath. This example shows the same stored roll:

```javascript
const presenter = new SvgPresenter({
  modifierIconPosition: 'below',
});
const svg = roll.present(presenter);
```

<SvgExample name="modifiers" />

`showModifierIcons` and `showModifierLabels` are independent. Once and limited variants share their modifier family's icon; labels and tooltips retain the details. Group member flags appear on the member rather than repeating on all its nested dice.

You can change individual icon colours using CSS variables on your output container:

```css
.dice-results {
  --modifier-explode-color: #9b5d0a;
  --modifier-critical-success-color: #96700b;
}

/* Use one colour for every modifier icon. */
.dice-results.monochrome {
  --modifier-icon-color: currentColor;
}
```

The icon families are `explode`, `explode-matching-batch`, `explode-matching-batch-failure`, `compound`, `penetrate`, `re-roll`, `unique`, `min`, `max`, `target-success`, `target-failure`, `critical-success` and `critical-failure`.

Each supports `--modifier-{name}-color`; compound's rear burst uses the explosion colour.

### Calculated keep and drop counts

When a keep or drop count comes from an expression, the presenter shows the evaluated count in a caption beneath the dice pool or roll group it applies to. For example, with `$keep` set to `2`, this roll shows **Keep highest 3**:

```javascript
const roll = new Roll('5d6kh($keep + 1)', { data: { keep: 2 } });
const svg = roll.present(new SvgPresenter());
```

<SvgExample name="calculated-keep" />

A roll group can use a dice roll for the count, as in `{2d6, 2d8, 2d10}dl(d2)`:

<SvgExample name="calculated-drop" />

Dropped dice or group members are still faded and crossed out. Set `showModifierLabels: false` to hide the caption. The pool or group tooltip still shows the calculation, such as `kh($keep+1) → 3`.

## Roll histories

Use the same presenter with `Roller` to display a history, with separate rows and a combined total:

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';
import { SvgPresenter } from '@dice-roller/svg-presenter';

const roller = new Roller({
  presenter: new SvgPresenter({ size: 80, width: 600 }),
});

roller.roll('d20 + 5');
roller.roll('2d6 + 3');

const svg = roller.present();
```

<SvgExample name="history" />

You can also present an evaluated expression directly with `presenter.present(roll.result)`.

## Comparisons and ternaries

Comparisons show the evaluated operands and a numeric outcome beneath them. For example, `(2d6 + 4) > 10` shows **true · 1** when the left-hand side exceeds 10, or **false · 0** otherwise.

Ternaries show the evaluated condition in an **IF** card and the selected branch in a **THEN** or **ELSE** card. The cards stack when the available width is too narrow. A [`$$condition` reference](../../notation/variables.md#built-in-variables) displays the stored numeric value of the condition.

```javascript
const roll = new Roll('((d20) >= 10) ? (2d8 + $$condition) : (d4)');
const svg = roll.present(new SvgPresenter());
```

<SvgExample name="ternary" />

Set `showVariableLabels: false` to hide the name beneath a variable’s resolved value. The value and its tooltip remain visible.

## Hover highlights

Hover over the inline examples to see dice and modifier tooltips. Pools, group members and roll groups highlight the most specific region beneath the pointer. Matching mathematical parentheses and function names highlight together in supporting browsers.

Try this example: hover the dice or the spaces between them for a pool highlight; hover the `+` between the first two pools for a group member highlight; hover the braces or comma for the whole roll group. Hover either parenthesis in `(d10 + 2)` or the `max` function name to highlight the matching mathematical delimiters.

<SvgExample name="hover" />

Customise the highlights with CSS variables:

```css
.dice-results {
  --result-hover-color: #7962b5;
  --result-hover-fill-opacity: 0.08;
  --result-hover-stroke-opacity: 0.5;
  --math-hover-color: #bda0ff;
}
```

Set both hover opacity variables to `0` to hide region highlights while retaining tooltips. Highlight effects use CSS `:hover` and `:has()` and need an interactive SVG.

## Metadata

Each die's enclosing `<g>` includes metadata you can use in CSS or JavaScript:

| Attribute | Meaning |
| --- | --- |
| `data-die-type` | Core factory name, such as `standard`, `percentile`, `fudge`, `range` or `face`. |
| `data-shape` | Artwork key, such as `d20`, `d6` or `generic`. |
| `data-faces` | Number of faces, including repeated faces. |
| `data-notation` | Die notation, such as `d20` or `dF`. |
| `data-min`, `data-max` | Lowest and highest possible values. |
| `data-value`, `data-initial-value` | Final and original rolled values. |
| `data-calculation-value` | Scoring value before exclusion. |
| `data-use-in-total` | The die's own inclusion state. |
| `data-excluded` | Effective exclusion, including a dropped enclosing group member. |
| `data-flags` | Space-separated modifier flags. |

For example, find the Fudge dice inside your container:

```javascript
const dice = document.querySelectorAll('.dice-results [data-die-type="fudge"]');
for (const die of dice) {
  console.log(Number(die.dataset.value));
}
```

Pools have `g[data-pool="true"]` wrappers with notation, quantity, result count, counted count and value. Groups use `g[data-group="true"]` with notation, member count, counted count and value. These counts describe the stored results, including generated and dropped dice, rather than discarded reroll attempts. A pool's own counted results can still be excluded by an enclosing group.

## Custom artwork

Override only the shapes you want to change using `artwork`. All other shapes keep their bundled defaults:

```javascript
const customD6 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle class="die-outline" cx="50" cy="50" r="44" />
  <text class="die-value" data-slot="value" x="50" y="50"
    text-anchor="middle" dominant-baseline="central"
    font-size="22" data-max-width="60" fill="currentColor" stroke="none"></text>
</svg>`;

const presenter = new SvgPresenter({
  artwork: { d6: customD6 },
});
```

Artwork keys are `d2`, `d4`, `d6`, `d8`, `d10`, `d12`, `d20` and `generic`. You can add a key such as `d13` for a dedicated shape, or override `generic` to change the fallback. Overriding `d6` also changes the shape used for Fudge dice; `d10` also covers percentile dice.

Use trusted SVG templates with a `0 0 100 100` viewBox and an empty `<text data-slot="value">` element for the presenter to fill. See the [artwork guide](https://github.com/dice-roller/presenters/blob/main/packages/svg/assets/dice/README.md) for the template format.

The package also exports `defaultArtwork`, `SvgPresenterOptions` for reusable TypeScript options, and raw icons at paths such as `@dice-roller/svg-presenter/icons/d20.svg`.

## Appearance defaults

| Option | Default |
| --- | --- |
| `size` | `140` |
| `width` | `1040` |
| `noWrap` | `false` |
| `stroke` | `'#7962b5'` |
| `fill` | `'#eee7fb'` |
| `filled` | `false` |
| `showValues` | `true` |
| `showDescriptions` | `true` |
| `showDiceLabels` | `true` |
| `showVariableLabels` | `true` |
| `showModifierLabels` | `true` |
| `showModifierIcons` | `true` |
| `showNotation` | `true` |
| `showTotals` | `true` |
| `modifierIconPosition` | `'corner'` |
| `artwork` | Bundled dice shapes. |

See the [SVG package README](https://github.com/dice-roller/presenters/blob/main/packages/svg/README.md) for further reference.
