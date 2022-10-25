---
sidebarDepth: 1
---

# Usage

Read the sections below for details usage instructions.

**TLDR;** just [show me some examples](#examples).


## Rolling dice

Dice are rolled with a string [notation](./notation/readme.md). The quickest method is using the `DiceRoll` class:

```javascript
import { DiceRoll } from '@dice-roller/rpg-dice-roller';

const roll = new DiceRoll('4d6');
```

The above will parse the [notation](./notation/readme.md), roll the dice, and store the result.

If you want to roll another [notation](./notation/readme.md), you can create another `DiceRoll` instance:

```javascript
const roll1 = new DiceRoll('2d10 + 1d4');
const roll2 = new DiceRoll('8dF.2 - 3');
```


## Roll totals

You can get the total value of a dice roll using the `total` property on the `DiceRoll` object:

```javascript
const roll = new DiceRoll('4d8+1');
console.log(roll.total); // e.g. 26
```

### Min / max / average

The `DiceRoll` object has the following properties for comparative totals:

* `minTotal`: The minimum possible total for the notation.
* `maxTotal`: The maximum possible total for the notation.
* `averageTotal`: The average total for the notation.

```javascript
const roll = new diceRoll('4d8+1');

console.log(roll.minTotal); // 5
console.log(roll.maxTotal); // 33
console.log(roll.averageTotal); // 19
```


## Output

You can get a formatted output of the dice rolled, and the total result from the `output` property:

```javascript
const roll = new diceRoll('3d10 + 1d8');
console.log(roll.output);
// 3d10 + 1d8: [4, 9, 3]+[2] = 18
```

This is automatically called when casting the object to a string:

```javascript
console.log(`You rolled: ${roll}`);
// You rolled: 3d10 + 1d8: [4, 9, 3]+[2] = 18
```


## Roll log

If you want to keep a log of previous rolls, you can use the `DiceRoller` class instead:

```javascript
import { DiceRoller } from '@dice-roller/rpg-dice-roller';

const roller = new DiceRoller();
```

Any [notations](./notation/readme.md) rolled on a `DiceRoller` instance get stored in it's log.

### Store

The `DiceRoller` has a `roll()` method, that takes a string [notation](./notation/readme.md), and returns a single `DiceRoll` object:

```javascript
const roller = new DiceRoller();
const roll1 = roller.roll('4d6');
const roll2 = roller.roll('2d10 * 3');
const roll3 = roller.roll('4d20k1');
```

It also accepts multiple notations at once, and will return an array of `DiceRoll` instances.

This is equivalent to the above:

```javascript
const roller = new DiceRoller();
const rolls = roller.roll('4d6', '2d10 * 3', '4d20k1');
```

### Retrieve

Every time you roll on a `DiceRoller` instance, it gets stored in the `DiceRoller`'s log, and can accessed like so:

```javascript
const roller = new DiceRoller();
roller.roll('4d6', '2d10 * 3', '4d20k1');

console.log(roller.log); // list of rolls
```

### Empty

To empty a roll log, call the `clearLog()` method:

```javascript
const roller = new DiceRoller();
roller.roll('4d6', '2d10 * 3', '4d20k1');

console.log(roller.log); // list of rolls

roller.clearLog();

console.log(roller.log); // an empty array
```

### Output

To return a formatted output of the entire log, use the `output` property.
It contains a semi-colon separated list of the individual [`DiceRoll` outputs](#output).

```javascript
const roller = new DiceRoller();
roller.roll('4d6', '2d10 * 3', '4d20k1');

console.log(roller.output);
// 4d6: [4, 1, 4, 3] = 12; 2d10 * 3: [8, 2]*3 = 30; 4d20k1: [2d, 20, 15d, 19d] = 20
```

This is automatically called when casting the object to a string:

```javascript
console.log(`You rolled: ${roller}`);
// You rolled: 4d6: [4, 1, 4, 3] = 12; 2d10 * 3: [8, 2]*3 = 30; 4d20k1: [2d, 20, 15d, 19d] = 20
```

### Total

To retrieve the sum total of all the rolls in the log use the `total` property:

```javascript
const roller = new DiceRoller();
roller.roll('4d6', '2d10 * 3', '4d20k1');

console.log(roller.total); // 62
```


## Export rolls

The `DiceRoll` class has an `export()` method, which can export the rolls in several formats, as defined in the [`ExportFormats` utility object](../api/utilities/ExportFormats.md).

```javascript
// we need to import the exportFormats object
import { DiceRoll, exportFormats } from '@dice-roller/rpg-dice-roller';

const roll = new DiceRoll('4d6');
```

### Plain object

```javascript
// export as a plain object
const jsonString = roll.export(exportFormats.OBJECT);
```
Returns something like:
```javascript
{
  averageTotal: 14,
  maxTotal: 24,
  minTotal: 4,
  notation: '4d6',
  output: '4d6: [2, 4, 2, 2] = 10',
  rolls: [...],
  total: 10,
  type: 'dice-roll',
}
```

### JSON string _(Default)_

```javascript
// default export as a JSON string
const jsonString = roll.export();
// equivalent to:
const jsonString = roll.export(exportFormats.JSON);
```
Returns stringified version of the plain object:
```javascript
'{"averageTotal":14,"maxTotal":24,"minTotal":4,"notation":"4d6","output":"4d6: [2, 4, 2, 2] = 10","rolls":[...],"total":10,"type":"dice-roll"}'
```

::: tip
Calling `JSON.stringify()` on a `DiceRoll` instance returns the same as a JSON `export()`:

```javascript
JSON.stringify(roll) === roll.export();
```
:::

### Base64 string

```javascript
// export as base64 encoded string
const jsonString = roll.export(exportFormats.BASE_64);
```
Returns base64 encoded version of the JSON string:
```javascript
'eyJtYXhUb3RhbCI6MjQsIm1pblRvdGFsIjo0LCJub3RhdGlvbiI6IjRkNiIsIm91dHB1dCI6IjRkNjogWzIsIDQsIDIsIDJdID0gMTAiLCJyb2xscyI6W3sicm9sbHMiOlt7ImNhbGN1bGF0aW9uVmFsdWUiOjIsImluaXRpYWxWYWx1ZSI6MiwibW9kaWZpZXJGbGFncyI6IiIsIm1vZGlmaWVycyI6W10sInR5cGUiOiJyZXN1bHQiLCJ1c2VJblRvdGFsIjp0cnVlLCJ2YWx1ZSI6Mn0seyJjYWxjdWxhdGlvblZhbHVlIjo0LCJpbml0aWFsVmFsdWUiOjQsIm1vZGlmaWVyRmxhZ3MiOiIiLCJtb2RpZmllcnMiOltdLCJ0eXBlIjoicmVzdWx0IiwidXNlSW5Ub3RhbCI6dHJ1ZSwidmFsdWUiOjR9LHsiY2FsY3VsYXRpb25WYWx1ZSI6MiwiaW5pdGlhbFZhbHVlIjoyLCJtb2RpZmllckZsYWdzIjoiIiwibW9kaWZpZXJzIjpbXSwidHlwZSI6InJlc3VsdCIsInVzZUluVG90YWwiOnRydWUsInZhbHVlIjoyfSx7ImNhbGN1bGF0aW9uVmFsdWUiOjIsImluaXRpYWxWYWx1ZSI6MiwibW9kaWZpZXJGbGFncyI6IiIsIm1vZGlmaWVycyI6W10sInR5cGUiOiJyZXN1bHQiLCJ1c2VJblRvdGFsIjp0cnVlLCJ2YWx1ZSI6Mn1dLCJ2YWx1ZSI6MTB9XSwidG90YWwiOjEwLCJ0eXBlIjoiZGljZS1yb2xsIn0='
```

### Exporting logs

You can also export the data from a `DiceRoller` instance, in exactly the same way. It too has an `export()` method, that accepts the same [export formats](../api/utilities/ExportFormats.md).

```javascript
import { DiceRoller, exportFormats } from '@dice-roller/rpg-dice-roller';

const roller = new DiceRoller();
roller.roll('4d6');
roller.roll('2d10');
```

The plain object export returns something like this:
```javascript
{
  log: [
    {
      averageTotal: 14,
      maxTotal: 24,
      minTotal: 4,
      notation: '4d6',
      output: '4d6: [2, 4, 2, 2] = 10',
      rolls: [...],
      total: 10,
      type: 'dice-roll'
    },
    {
      averageTotal: 11,
      maxTotal: 20,
      minTotal: 2,
      notation: '2d10',
      output: '2d10: [8, 7] = 15',
      rolls: [...],
      total: 15,
      type: 'dice-roll'
    }
  ],
  output: '4d6: [2, 4, 2, 2] = 10',
  total: 10,
  type: 'dice-roller'
}
```


## Import rolls

Impotring rolls is handy if you need to be able to retrieve rolls from a database, share them across enviroments etc.

Both `DiceRoll` and `DiceRoller` classes have a static `import()` method that can import form any of the exported formats [listed above](#export-rolls):

### From exported rolls

#### DiceRoll

```javascript
// create a `DiceRoll`
const roll1 = new DiceRoll('4d6');

// export as JSON
let exportedRolls = roll.export();
// import the data into a new DiceRoll instance
const roll2 = DiceRoll.import(exportedRolls);

// export the rolls as Base64
let exportedRolls = roll.export(exportFormats.BASE_64);
// import the data into a new DiceRoll instance
const roll3 = DiceRoll.import(exportedRolls);
```

#### DiceRoller

```javascript
// create a `DiceRoller` and roll some dice
const roller1 = new DiceRoller();
roller1.roll('4d6');

// export as JSON
let exportedRolls = roll.export();
// import the data into a new `DiceRoller` instance
const roller2 = DiceRoller.import(exportedRolls);

// export as Base64
let exportedRolls = roll.export();
// import the data into a new `DiceRoller` instance
const roller3 = DiceRoller.import(exportedRolls);
```

### Manually build import data

You can also build your own data to import, provided that it's formatted correctly.

At it's simplest, the `DiceRoll` import expects an object that contains a string notation, and an array of roll value results:

```javascript
const data = {
  notation: '4d6',
  // the values rolled
  rolls: [
    3, 6, 2, 4,
  ],
};

const roll = DiceRoll.import(data);
```

The `DiceRoller` expects an object that contains a `log` property. The `log` property must be an array of data that is correctly formatted to be imported into a `DiceRoll` object, as in the example above:

```javascript
const data = {
  log: [
    {
      notation: '4d6',
      rolls: [
        3, 6, 2, 4,
      ],
    },
  ],
};
```

```javascript
// create a `DiceRoll` and export as JSON
const roll = new DiceRoll('4d6');
const exportedRolls = roll.export();

// import the data into a new `DiceRoller` instance
const roller = DiceRoller.import({ log: [ exportedRolls ] });
```

### Import to existing roll log

You can also import rolls into an existing `DiceRoller` instance, to  append rolls to an existing log:

```javascript
// create a `DiceRoller` and roll some dice
const roller = new DiceRoller();
roller.roll('4d6');

// create a `DiceRoll` and export as JSON
const roll = new DiceRoll('2d10');
const exportedRolls = roll.export();

// append the rolls to the existing roll log
const roller = roller.import({ log: [ exportedRolls ] });
```


## Examples

```javascript
// create a `DiceRoller` instance that keeps a log of previous rolls
const roller = new DiceRoller();

// roll a notation
let roll = roller.roll('4d20');

// output the roll
console.log(`You rolled: ${roll}`);
// You rolled: 4d20: [4, 18, 15, 11] = 48

// roll several notations all at once, and append them to the log
const rolls = roller.roll('1d6', '2d4dh1', '5d10!!');

// output all of the rolls from the log
console.log(`You rolled: ${roller}`);
// You rolled: 4d20: [4, 18, 15, 11] = 48; 1d6: [3] = 3; 2d4dh1: [3d, 1] = 1; 5d10!! = [3, 2, 16!!, 3, 9] = 33

// get the sum of all the rolls in the log:
console.log(`Log total: ${roller.total}`);
// Log total: 85

// empty the roll log
roller.clearLog();

// output the empty log
console.log(`Looks empty: ${roller}`);
// Looks empty: 


// If you don't need to keep a roll log, you can use a `DiceRoll, instead of `DiceRoller`
roll = new DiceRoll('4d10*3');

// output the roll
console.log(`You rolled: ${roll}`);
// You rolled: 4d10*3: [8, 3, 4, 6]*3 = 63

// get the roll total:
console.log(`Roll total: ${roll.total}`);
// Roll total: 63

// get the minimum possible total:
console.log(`Min total: ${roll.minTotal}`);
// Min total: 12

// get the maximum possible total:
console.log(`Max total: ${roll.minTotal}`);
// Max total: 120

// get the average total:
console.log(`Average total: ${roll.averageTotal}`);
// Average total: 66
```


## Try it yourself

::: roll :::

Check the [notation](./notation/readme.md) section for more examples.

Check the [API](../api/readme.md) section for more details on using the dice roller.
