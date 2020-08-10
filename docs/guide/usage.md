# Usage

A quick example:

```javascript
const roll = new DiceRoll('2d20');

console.log(roll.output); // 2d20: [14, 7] = 21
console.log(roll.total); // 21
```


## Rolling dice

Dice are rolled with a string [notation](./notation/readme.md). The quickest method is using the `DiceRoll` class:

```javascript
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

### Min / max / average <Badge text="New" vertical="middle"/>

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


## Examples

```javascript
// create a DiceRoller instance - this keeps a log of previous rolls
const roller = new DiceRoller();

// to roll a dice, you need to pass a formatted "notation" to the `roll()` method.
// This would roll a 20 sided dice 4 times and store the result in a log.
// It returns a DiceRoll object
let roll = roller.roll('4d20');

// output the latest roll - it outputs formatted text when cast to a string
console.log(`You rolled: ${roll}`);
// You rolled: 4d20: [4, 18, 15, 11] = 48

// roll several notations all at once, and store their DiceRoll objects
const rolls = roller.roll('1d6', '2d4dh1', '5d10!!');

// output all of the rolls from the DiceRoller log
console.log(`You rolled: ${roller}`);
// You rolled: 4d20: [4, 18, 15, 11] = 48; 1d6: [3] = 3; 2d4dh1: [3d, 1] = 1; 5d10!! = [3, 2, 16!!, 3, 9] = 33

// getting the total of all the rolls in the log:
console.log(`Log total: ${roller.total}`);
// Log total: 33

// empty the roll log
roller.clearLog();

// output an empty log
console.log(`Looks empty: ${roller}`);
// Looks empty: 


// If you don't need to keep a roll log, you can pass the notation to an instance of `DiceRoll` (Instead of `DiceRoller`)
roll = new DiceRoll('4d10*3');

// output the roll
console.log(`You rolled: ${roll}`);
// You rolled: 4d10*3: [8, 3, 4, 6]*3 = 63

// get the roll total:
console.log(`Roll total: ${roll.total}`);
// Roll total: 63
```


## Try it yourself

::: roll :::

Check the [notation](./notation/readme.md) section for more examples.

Check the [API](../api/readme.md) section for more details on using the dice roller.
