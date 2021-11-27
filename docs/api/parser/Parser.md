---
title: Parser
---

# Parser

<a name="Parser"></a>

## Parser
The `Parser` takes a notation string and parses it into objects.

It is used internally by the DiceRoll object when rolling notation, but can be used by itself if
necessary.

**Kind**: global class  
**See**

- [https://dice-roller.github.io/documentation/guide/notation/](https://dice-roller.github.io/documentation/guide/notation/)
- [https://en.m.wikipedia.org/wiki/Dice_notation](https://en.m.wikipedia.org/wiki/Dice_notation)

<a name="Parser.parse"></a>

### Parser.parse(notation) ⇒ <code>Array</code>
Parses the given dice notation and returns a list of dice and modifiers found

**Kind**: static method of [<code>Parser</code>](#Parser)  
**Throws**:

- <code>RequiredArgumentError</code> Notation is required
- <code>SyntaxError</code> The notation syntax is invalid
- <code>TypeError</code> Notation must be a string


| Param | Type | Description |
| --- | --- | --- |
| notation | <code>string</code> | The notation to parse |

