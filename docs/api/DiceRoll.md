---
title: DiceRoll
---

# DiceRoll

<a name="DiceRoll"></a>

## DiceRoll
A `DiceRoll` handles rolling of a single dice notation and storing it's result.

**Kind**: global class  
**See**: [DiceRoller](DiceRoller) if you need to keep a history of rolls  

* [DiceRoll](#DiceRoll)
    * [new DiceRoll(notation)](#new_DiceRoll_new)
    * _instance_
        * [.averageTotal](#DiceRoll+averageTotal) ⇒ <code>number</code>
        * [.maxTotal](#DiceRoll+maxTotal) ⇒ <code>number</code>
        * [.minTotal](#DiceRoll+minTotal) ⇒ <code>number</code>
        * [.notation](#DiceRoll+notation) ⇒ <code>string</code>
        * [.output](#DiceRoll+output) ⇒ <code>string</code>
        * [.rolls](#DiceRoll+rolls) ⇒ <code>Array.&lt;RollResults&gt;</code>
        * [.total](#DiceRoll+total) ⇒ <code>number</code>
        * [.export([format])](#DiceRoll+export) ⇒ <code>string</code> \| <code>null</code>
        * [.hasRolls()](#DiceRoll+hasRolls) ⇒ <code>boolean</code>
        * [.roll()](#DiceRoll+roll) ⇒ <code>Array.&lt;RollResults&gt;</code>
        * [.toJSON()](#DiceRoll+toJSON) ⇒ <code>Object</code>
        * [.toString()](#DiceRoll+toString) ⇒ <code>string</code>
    * _static_
        * [.import(data)](#DiceRoll.import) ⇒ [<code>DiceRoll</code>](#DiceRoll)

<a name="new_DiceRoll_new"></a>

### new DiceRoll(notation)
Create a DiceRoll, parse the notation and roll the dice.

If `notation` is an object, it must contain a `notation` property that defines the notation.
It can also have an optional array of `RollResults`, in the `rolls` property.

**Throws**:

- <code>NotationError</code> notation is invalid
- <code>RequiredArgumentError</code> notation is required
- <code>TypeError</code> Rolls must be an array


| Param | Type | Description |
| --- | --- | --- |
| notation | <code>string</code> \| <code>Object</code> | The notation to roll |
| notation.notation | <code>string</code> | If `notation is an object; the notation to roll |
| [notation.rolls] | <code>Array.&lt;RollResults&gt;</code> | If `notation is an object; the rolls to import |

**Example** *(String notation)*  
```js
const roll = new DiceRoll('4d6');
```
**Example** *(Object)*  
```js
const roll = new DiceRoll({
  notation: '4d6',
  rolls: ..., // RollResults object or array of roll results
});
```
<a name="DiceRoll+averageTotal"></a>

### diceRoll.averageTotal ⇒ <code>number</code>
The average possible total for the notation.

**Kind**: instance property of [<code>DiceRoll</code>](#DiceRoll)  
**Since**: 4.3.0  
<a name="DiceRoll+maxTotal"></a>

### diceRoll.maxTotal ⇒ <code>number</code>
The maximum possible total for the notation.

**Kind**: instance property of [<code>DiceRoll</code>](#DiceRoll)  
**Since**: 4.3.0  
<a name="DiceRoll+minTotal"></a>

### diceRoll.minTotal ⇒ <code>number</code>
The minimum possible total for the notation.

**Kind**: instance property of [<code>DiceRoll</code>](#DiceRoll)  
**Since**: 4.3.0  
<a name="DiceRoll+notation"></a>

### diceRoll.notation ⇒ <code>string</code>
The dice notation.

**Kind**: instance property of [<code>DiceRoll</code>](#DiceRoll)  
<a name="DiceRoll+output"></a>

### diceRoll.output ⇒ <code>string</code>
String representation of the rolls

**Kind**: instance property of [<code>DiceRoll</code>](#DiceRoll)  
**Example**  
```js
2d20+1d6: [20,2]+[2] = 24
```
<a name="DiceRoll+rolls"></a>

### diceRoll.rolls ⇒ <code>Array.&lt;RollResults&gt;</code>
The dice rolled for the notation

**Kind**: instance property of [<code>DiceRoll</code>](#DiceRoll)  
<a name="DiceRoll+total"></a>

### diceRoll.total ⇒ <code>number</code>
The roll total

**Kind**: instance property of [<code>DiceRoll</code>](#DiceRoll)  
<a name="DiceRoll+export"></a>

### diceRoll.export([format]) ⇒ <code>string</code> \| <code>null</code>
Export the object in the given format.
If no format is specified, JSON is returned.

**Kind**: instance method of [<code>DiceRoll</code>](#DiceRoll)  
**Returns**: <code>string</code> \| <code>null</code> - The exported data, in the specified format  
**Throws**:

- <code>TypeError</code> Invalid export format

**See**: [toJSON](#DiceRoll+toJSON)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>exportFormats</code> | <code>exportFormats.JSON</code> | The format to export the data as |

<a name="DiceRoll+hasRolls"></a>

### diceRoll.hasRolls() ⇒ <code>boolean</code>
Check whether the object has rolled dice or not

**Kind**: instance method of [<code>DiceRoll</code>](#DiceRoll)  
**Returns**: <code>boolean</code> - `True` if the object has rolls, `false` otherwise  
<a name="DiceRoll+roll"></a>

### diceRoll.roll() ⇒ <code>Array.&lt;RollResults&gt;</code>
Rolls the dice for the stored notation.

This is called in the constructor, so you'll only need this if you want to re-roll the
notation. However, it's usually better to create a new `DiceRoll` instance instead.

**Kind**: instance method of [<code>DiceRoll</code>](#DiceRoll)  
**Returns**: <code>Array.&lt;RollResults&gt;</code> - The results of the rolls  
<a name="DiceRoll+toJSON"></a>

### diceRoll.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>DiceRoll</code>](#DiceRoll)  
<a name="DiceRoll+toString"></a>

### diceRoll.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>DiceRoll</code>](#DiceRoll)  
**See**: [output](#DiceRoll+output)  
<a name="DiceRoll.import"></a>

### DiceRoll.import(data) ⇒ [<code>DiceRoll</code>](#DiceRoll)
Create a new `DiceRoll` instance with the given data.

`data` can be an object of data, a JSON / base64 encoded string of such data.

The object must contain a `notation` property that defines the notation and, optionally, an
array of RollResults, in the `rolls` property.

**Kind**: static method of [<code>DiceRoll</code>](#DiceRoll)  
**Returns**: [<code>DiceRoll</code>](#DiceRoll) - The new `DiceRoll` instance  
**Throws**:

- <code>DataFormatError</code> data format is invalid


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> \| <code>string</code> | The data to import |
| data.notation | <code>string</code> | If `notation` is an object; the notation to import |
| [data.rolls] | <code>Array.&lt;RollResults&gt;</code> | If `notation` is an object; the rolls to import |

**Example** *(Object)*  
```js
DiceRoll.import({
  notation: '4d6',
  rolls: ..., // RollResults object or array of roll results
});
```
**Example** *(JSON)*  
```js
DiceRoll.import('{"notation":"4d6","rolls":[...]}');
```
**Example** *(Base64)*  
```js
DiceRoll.import('eyJub3RhdGlvbiI6IjRkNiIsInJvbGxzIjpbXX0=');
```
