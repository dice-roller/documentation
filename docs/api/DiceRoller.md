---
title: DiceRoller
---

# DiceRoller

<a name="DiceRoller"></a>

## DiceRoller
A `DiceRoller` handles dice rolling functionality, keeps a history of rolls and can output logs
etc.

**Kind**: global class  
**See**: [DiceRoll](DiceRoll) if you don't need to keep a log history of rolls  

* [DiceRoller](#DiceRoller)
    * [new DiceRoller([data])](#new_DiceRoller_new)
    * _instance_
        * [.log](#DiceRoller+log) ⇒ <code>Array.&lt;DiceRoll&gt;</code>
        * [.output](#DiceRoller+output) ⇒ <code>string</code>
        * [.total](#DiceRoller+total) ⇒ <code>number</code>
        * [.clearLog()](#DiceRoller+clearLog)
        * [.export([format])](#DiceRoller+export) ⇒ <code>string</code> \| <code>null</code>
        * [.import(data)](#DiceRoller+import) ⇒ <code>Array.&lt;DiceRoll&gt;</code>
        * [.roll(...notations)](#DiceRoller+roll) ⇒ <code>DiceRoll</code> \| <code>Array.&lt;DiceRoll&gt;</code>
        * [.toJSON()](#DiceRoller+toJSON) ⇒ <code>Object</code>
        * [.toString()](#DiceRoller+toString) ⇒ <code>string</code>
    * _static_
        * [.import(data)](#DiceRoller.import) ⇒ [<code>DiceRoller</code>](#DiceRoller)

<a name="new_DiceRoller_new"></a>

### new DiceRoller([data])
Create a DiceRoller.

The optional `data` property should be either an array of `DiceRoll` objects, or an object with
a `log` property that contains the `DiceRoll` objects.

**Throws**:

- <code>TypeError</code> if data is an object, it must have a `log[]` property


| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> \| <code>Array.&lt;DiceRoll&gt;</code> | The data to import |
| [data.log] | <code>Array.&lt;DiceRoll&gt;</code> | If `data` is an object, it must contain an array of `DiceRoll`s |

<a name="DiceRoller+log"></a>

### diceRoller.log ⇒ <code>Array.&lt;DiceRoll&gt;</code>
The list of roll logs.

**Kind**: instance property of [<code>DiceRoller</code>](#DiceRoller)  
<a name="DiceRoller+output"></a>

### diceRoller.output ⇒ <code>string</code>
String representation of the rolls in the log

**Kind**: instance property of [<code>DiceRoller</code>](#DiceRoller)  
**Example**  
```js
2d20+1d6: [20,2]+[2] = 24; 1d8: [6] = 6
```
<a name="DiceRoller+total"></a>

### diceRoller.total ⇒ <code>number</code>
The sum of all the rolls in the log

**Kind**: instance property of [<code>DiceRoller</code>](#DiceRoller)  
**See**: [log](#DiceRoller+log)  
<a name="DiceRoller+clearLog"></a>

### diceRoller.clearLog()
Clear the roll history log.

**Kind**: instance method of [<code>DiceRoller</code>](#DiceRoller)  
**See**: [log](#DiceRoller+log)  
<a name="DiceRoller+export"></a>

### diceRoller.export([format]) ⇒ <code>string</code> \| <code>null</code>
Export the object in the given format.
If no format is specified, JSON is returned.

**Kind**: instance method of [<code>DiceRoller</code>](#DiceRoller)  
**Returns**: <code>string</code> \| <code>null</code> - The exported data, in the specified format  
**Throws**:

- <code>TypeError</code> Invalid export format

**See**: [toJSON](#DiceRoller+toJSON)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [format] | <code>exportFormats</code> | <code>exportFormats#JSON</code> | The format to export the data as |

<a name="DiceRoller+import"></a>

### diceRoller.import(data) ⇒ <code>Array.&lt;DiceRoll&gt;</code>
Add the data to the existing [roll log](#DiceRoller+log).

`data` can be an array of `DiceRoll` objects, an object with a `log` property that contains
`DiceRoll` objects, or a JSON / base64 encoded representation of either.

**Kind**: instance method of [<code>DiceRoller</code>](#DiceRoller)  
**Returns**: <code>Array.&lt;DiceRoll&gt;</code> - The roll log  
**Throws**:

- <code>DataFormatError</code> data format invalid
- <code>RequiredArgumentError</code> data is required
- <code>TypeError</code> log must be an array

**See**: [log](#DiceRoller+log)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> \| <code>Object</code> \| <code>Array.&lt;DiceRoll&gt;</code> | The data to import |
| [data.log] | <code>Array.&lt;DiceRoll&gt;</code> | If `data` is an object, it must contain an array of `DiceRoll`s |

<a name="DiceRoller+roll"></a>

### diceRoller.roll(...notations) ⇒ <code>DiceRoll</code> \| <code>Array.&lt;DiceRoll&gt;</code>
Roll the given dice notation(s) and return the corresponding `DiceRoll` objects.

You can roll a single notation, or multiple at once.

**Kind**: instance method of [<code>DiceRoller</code>](#DiceRoller)  
**Returns**: <code>DiceRoll</code> \| <code>Array.&lt;DiceRoll&gt;</code> - If a single notation is passed, a single `DiceRoll` is returned,
otherwise an array of `DiceRoll` objects is returned  
**Throws**:

- <code>NotationError</code> notation is invalid
- <code>RequiredArgumentError</code> notation is required


| Param | Type | Description |
| --- | --- | --- |
| ...notations | <code>string</code> | The notations to roll |

**Example** *(Single notation)*  
```js
diceRoller.roll('2d6');
```
**Example** *(Multiple notations)*  
```js
roll('2d6', '4d10', 'd8+4d6');
```
<a name="DiceRoller+toJSON"></a>

### diceRoller.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>DiceRoller</code>](#DiceRoller)  
<a name="DiceRoller+toString"></a>

### diceRoller.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>DiceRoller</code>](#DiceRoller)  
**See**: [output](#DiceRoller+output)  
<a name="DiceRoller.import"></a>

### DiceRoller.import(data) ⇒ [<code>DiceRoller</code>](#DiceRoller)
Create a new `DiceRoller` instance with the given data.

`data` can be an array of `DiceRoll` objects, an object with a `log` property that contains the
`DiceRoll` objects, or a JSON / base64 encoded representation of either.

**Kind**: static method of [<code>DiceRoller</code>](#DiceRoller)  
**Returns**: [<code>DiceRoller</code>](#DiceRoller) - The new `DiceRoller` instance  
**Throws**:

- <code>DataFormatError</code> data format invalid
- <code>RequiredArgumentError</code> data is required
- <code>TypeError</code> log must be an array

**See**: instance method [import](#DiceRoller+import)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> \| <code>Object</code> \| <code>Array.&lt;DiceRoll&gt;</code> | The data to import |
| [data.log] | <code>Array.&lt;DiceRoll&gt;</code> | If `data` is an object, it must contain an array of `DiceRoll`s |

