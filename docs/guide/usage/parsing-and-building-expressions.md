# Parsing and building expressions

You don't have to supply a notation string every time you make a roll. You can parse notation without rolling any dice, or build an expression directly in code, and then roll that expression whenever you need to.

This is useful when validating user input, creating a graphical notation builder, or constructing rolls from values in your application.

## Parsing notation

Use the `Parser` class to turn a notation string into an expression without rolling it:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Parser } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Parser } = require('@dice-roller/rpg-dice-roller');
```

== Browser (UMD)

```javascript
const { Parser } = rpgDiceRoller;
```

:::

```javascript
const parser = new Parser();
const expression = parser.parse('2d6+3');
```

The returned expression is an abstract syntax tree (AST). It describes what to roll and how to calculate the total, but doesn't contain any rolled dice values.

If you're already using a `Roller`, you can parse notation using its `parse()` method instead:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roller } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Roller } = require('@dice-roller/rpg-dice-roller');
```

== Browser (UMD)

```javascript
const { Roller } = rpgDiceRoller;
```

:::

```javascript
const roller = new Roller();
const expression = roller.parse('2d6+3');
```

This uses the roller's configured parser and doesn't add anything to its [history](roll-history.md).

A standalone parser accepts a `maxQty` option to limit literal dice quantities. A roller's parser uses the `maxQty` from its configured [roll limits](roll-options.md#roll-limits).

### Inspecting the AST

Each expression node has a `type` identifying what it represents. The other properties depend on the type.

For `2d6+3`, the AST looks like this:

```javascript
{
  type: 'binary',
  op: '+',
  left: {
    type: 'pool',
    qty: { type: 'number', value: 2 },
    die: {
      type: 'die',
      name: 'standard',
      args: [{ type: 'number', value: 6 }],
    },
    modifiers: [],
  },
  right: { type: 'number', value: 3 },
}
```

The root is a binary operation, with a dice pool on the left and a number on the right. The pool describes the number of dice and the die factory to use, together with its arguments and modifiers.

You can inspect those nodes directly:

```javascript
const expression = parser.parse('2d6+3');

if (expression.type === 'binary') {
  console.log(expression.op); // '+'

  if (expression.left.type === 'pool') {
    console.log(expression.left.die.name); // 'standard'
    console.log(expression.left.qty.type); // 'number'
  }
}
```

The quantity and die arguments are expression nodes themselves, since notation can use calculations, variables or other dice rolls to determine those values.

Checking a node's `type` also lets TypeScript narrow its type before you access properties specific to that kind of node.

Unlike the [evaluated result tree](working-with-results.md#the-result-tree), an AST doesn't contain the results of rolling a pool or evaluating a mathematical expression.

## Rolling an expression

Pass an expression to `new Roll()` just as you would a notation string:

:::tabs key:module-type variant:code

== ESM

```javascript
import { Roll } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { Roll } = require('@dice-roller/rpg-dice-roller');
```

== Browser (UMD)

```javascript
const { Roll } = rpgDiceRoller;
```

:::

```javascript
const expression = parser.parse('2d6+3');
const result = new Roll(expression);

console.log(result.total);
console.log(result.present());
```

You can reuse the same expression to create several independent rolls:

```javascript
const first = new Roll(expression);
const second = new Roll(expression);
```

Each roll evaluates the expression again, generating new dice results. Parsing or constructing the expression once doesn't mean the dice are only rolled once.

`Roll.create()`, the `roll()` shorthand and `roller.roll()` also accept expression nodes. The usual [roll options](roll-options.md) and synchronous or asynchronous evaluation behaviour apply.

### Parsing doesn't guarantee a successful roll

The parser checks the notation, but it doesn't evaluate expressions or resolve variable values.

For example, you can parse an expression containing a variable before you know its value:

```javascript
const expression = parser.parse('d20+$bonus');

const attack = new Roll(expression, {
  data: { bonus: 3 },
});

const strongerAttack = new Roll(expression, {
  data: { bonus: 5 },
});
```

Both rolls use the same expression, with different input data. Attempting to roll it without supplying `$bonus` would raise a `ValidationError`.

Calculated quantities can also be syntactically valid but evaluate to invalid values, such as `(2.5)d6`.

See [Handling errors](handling-errors.md) for catching failures during parsing and evaluation.

## Building expressions

The `ast` namespace provides builder functions for constructing the same kinds of nodes that the parser produces.

:::tabs key:module-type variant:code

== ESM

```javascript
import { ast } from '@dice-roller/rpg-dice-roller';
```

== CommonJS

```javascript
const { ast } = require('@dice-roller/rpg-dice-roller');
```

== Browser (UMD)

```javascript
const { ast } = rpgDiceRoller;
```

:::

You could create the plain objects yourself, but the builders are easier to use and perform validation of their direct arguments.

### Dice and numbers

Use `ast.pool()` to create a dice pool. Its first argument is the quantity of dice and its second argument describes the die.

```javascript
const expression = ast.pool(2, 6);

const roll = new Roll(expression);

console.log(roll.notation); // '2d6'
```

Use `ast.num()` to explicitly create a number node. Most builders also accept plain numbers wherever an expression is expected, converting them to number nodes for you.

For other die types, use `ast.die()` with the name of a die factory and its arguments:

| Builder | Equivalent notation |
| --- | --- |
| `ast.pool(2, 6)` | `2d6` |
| `ast.pool(1, ast.die('percentile'))` | `d%` |
| `ast.pool(4, ast.die('fudge'))` | `4dF` |
| `ast.pool(1, ast.die('range', -2, 3))` | `d{-2...3}` |
| `ast.pool(1, ast.die('face', 1, 1, 4))` | `d{1,1,4}` |

The name passed to `ast.die()` identifies a registered factory, rather than a piece of dice notation. This also lets you construct expressions using [custom die factories](../customisation/dice.md#use-a-custom-name-with-an-ast) that aren't recognised by the notation parser.

### Adding modifiers

Pass an options object with a `modifiers` array as the third argument to `ast.pool()`:

```javascript
const expression = ast.pool(4, 6, {
  modifiers: [
    ast.keep('h', 3),
  ],
});

console.log(ast.nodeToNotation(expression)); // '4d6kh3'
```

Here `keep('h', 3)` keeps the highest three dice. Use `'l'` to keep the lowest instead.

Modifiers with a compare point use `ast.compare()` to specify their comparison. For example, explode on values of 5 or higher:

```javascript
const expression = ast.pool(2, 6, {
  modifiers: [
    ast.explode({
      comparePoint: ast.compare('>=', 5),
    }),
  ],
});

console.log(ast.nodeToNotation(expression)); // '2d6!>=5'
```

You can supply multiple modifiers in the array. As with notation strings, modifiers run in their configured execution order, which needn't be the order they appear in the array.

The [modifier notation guide](../notation/modifiers.md) explains each modifier's behaviour. See the [AST API reference](../../api/rpg-dice-roller/namespaces/ast/index.md) for the available modifier builders and their arguments.

### Maths and nested expressions

Use `ast.binary()` for arithmetic operations:

```javascript
const expression = ast.binary('+', ast.pool(2, 6), 3);

console.log(ast.nodeToNotation(expression)); // '2d6+3'
```

The arguments can themselves be expressions, allowing you to build more complex rolls from smaller parts:

```javascript
const damage = ast.binary('+', ast.pool(2, 6), 3);
const doubled = ast.binary('*', ast.paren(damage), 2);

console.log(ast.nodeToNotation(doubled)); // '(2d6+3)*2'
```

The structure of the tree determines which operations are evaluated together. You don't need to add a parenthesis node to establish the evaluation order, but `ast.paren()` lets you explicitly represent parentheses in the expression.

Use `ast.fn()` to call a supported [maths function](../notation/maths.md) and `ast.negate()` for unary minus.

### Roll groups

Use `ast.group()` to combine expressions into a [roll group](../notation/roll-groups.md).

Like a pool, a group accepts modifiers and a description in its options:

```javascript
const expression = ast.group([
  ast.binary('+', ast.pool(2, 6), 3),
  ast.pool(1, 20),
], {
  modifiers: [ast.keep('h', 1)],
});

console.log(ast.nodeToNotation(expression)); // '{2d6+3, d20}kh1'
```

This evaluates both expressions and keeps the highest-scoring group member.

### Calculated quantities and sides

A pool's quantity and number of sides can both be expression nodes, rather than literal numbers:

```javascript
const expression = ast.pool(
  ast.pool(1, 4),
  ast.binary('+', 4, 2),
);

console.log(ast.nodeToNotation(expression)); // '(d4)d(4+2)'
```

This rolls a d4 to determine the quantity, and calculates the number of sides as 6.

Keep and Drop counts can also be expressions:

```javascript
const expression = ast.pool(4, 6, {
  modifiers: [ast.keep('h', ast.pool(1, 4))],
});

console.log(ast.nodeToNotation(expression)); // '4d6kh(d4)'
```

### Variables, comparisons and conditionals

Use `ast.reference()` to refer to a variable supplied through `data`. The first argument selects the namespace and the remaining arguments identify the path.

```javascript
const expression = ast.binary(
  '+',
  ast.pool(1, 20),
  ast.reference('data', 'character', 'attackBonus'),
);

const roll = new Roll(expression, {
  data: {
    character: { attackBonus: 5 },
  },
});

console.log(roll.notation); // 'd20+$character.attackBonus'
```

Use `ast.comparison()` to compare two expressions, rather than to create a modifier compare point. Combine it with `ast.conditional()` to select which expression to evaluate:

```javascript
const condition = ast.comparison('>=', ast.pool(1, 20), 15);
const expression = ast.conditional(condition, ast.pool(2, 6), 0);

const roll = new Roll(expression);
```

This rolls a d20 and evaluates the damage expression only if the result is at least 15. Otherwise it returns 0.

See [Comparisons and ternaries](../notation/comparisons-and-ternaries.md) and [Variables](../notation/variables.md) for the corresponding notation and system variables.

### Describing rolls

Pools and groups accept a `description` option:

```javascript
const expression = ast.pool(2, 6, {
  description: 'Fire damage',
});

console.log(ast.nodeToNotation(expression)); // '2d6 // Fire damage'
```

A string creates an inline description. To create a block description instead, supply an object such as `{ text: 'Fire damage', style: 'block' }`.

See [Describing rolls](../notation/roll-descriptions.md) for the difference between description styles.

## Converting an expression to notation

Use `ast.nodeToNotation()` to convert an expression to its canonical notation string without rolling it:

```javascript
const expression = parser.parse('1d6 + 3');

console.log(ast.nodeToNotation(expression)); // 'd6+3'
```

The generated notation may differ from the original formatting, for example by removing unnecessary whitespace or using the canonical form of a modifier.

When rolling an AST directly, `Roll.notation` is generated from the expression.

::: warning Not every AST has parseable notation
An expression constructed with the builders can represent things that can't be written using the built-in notation syntax, such as dice registered under custom factory names.

For these expressions, the generated notation is useful for display but can't necessarily be parsed back into an expression. Pass the AST directly when rolling it again.
:::

## Reusing and combining expressions

Parsed and built expressions use the same node types, so you can combine them freely:

```javascript
const damage = parser.parse('2d6+3');
const criticalDamage = ast.binary('*', damage, 2);

const normal = new Roll(damage);
const critical = new Roll(criticalDamage);
```

The two expressions can be rolled independently. Treat AST nodes as readonly data, and build a new expression when you need to change one. Builders can reuse supplied nodes rather than copying them.

The builders validate their direct inputs, but some constraints are checked only when the complete expression is rolled, including calculated quantities and the availability of registered die factories.

If you want to save a completed roll rather than just its expression, see [Importing and exporting](importing-and-exporting.md).

## More information

* [AST API reference](../../api/rpg-dice-roller/namespaces/ast/index.md) — all available builders and node types.
* [Notation](../notation/index.md) — how dice expressions and modifiers behave.
* [Working with results](working-with-results.md) — inspect the evaluated expression and individual dice.
