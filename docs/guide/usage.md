# Usage

```js
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

## Retrieving totals

You can easily get the total value of a dice roll using the `total` property on the `DiceRoll` or `DiceRoller` objects:

```javascript
// using the DiceRoller
const roller = new DiceRoller();

roller.roll('4d8+1');
roller.roll('5d10');
console.log(roller.total); // e.g. 35 (Total of all rolls)

// using the DiceRoll
const roll = new DiceRoll('4d8+1');
console.log(roll.total); // e.g. 15 (Total of single roll)
```

### Min / max / average <Badge text="New" vertical="middle"/>

The `DiceRoll` object contains three properties for retrieving different, comparative totals:

* `minTotal`: The minimum possible total for the notation.
* `maxTotal`: The maximum possible total for the notation.
* `averageTotal`: The average total for the notation.

```javascript
const roll = new diceRoll('4d8+1');

console.log(roll.minTotal); // 5
console.log(roll.maxTotal); // 33
console.log(roll.averageTotal); // 19
```


## Try it yourself

::: roll :::

Check the [notation](./notation/readme.md) section for more examples.

Check the [API](../api/readme.md) section for more details on using the dice roller.
