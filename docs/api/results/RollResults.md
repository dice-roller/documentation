---
title: RollResults
---

# RollResults

<a name="RollResults"></a>

## RollResults
A collection of roll results

::: tip
You will probably not need to create your own `RollResults` instances, unless you're importing
rolls, but RollResults objects will be returned when rolling dice.
:::

**Kind**: global class  

* [RollResults](#RollResults)
    * [new RollResults([rolls])](#new_RollResults_new)
    * [.length](#RollResults+length) ⇒ <code>number</code>
    * [.rolls](#RollResults+rolls) ⇒ <code>Array.&lt;RollResult&gt;</code>
    * [.rolls](#RollResults+rolls)
    * [.value](#RollResults+value) ⇒ <code>number</code>
    * [.addRoll(value)](#RollResults+addRoll)
    * [.toJSON()](#RollResults+toJSON) ⇒ <code>Object</code>
    * [.toString()](#RollResults+toString) ⇒ <code>string</code>

<a name="new_RollResults_new"></a>

### new RollResults([rolls])
Create a `RollResults` instance.

**Throws**:

- <code>TypeError</code> Rolls must be an array


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [rolls] | <code>Array.&lt;RollResult&gt;</code> \| <code>Array.&lt;number&gt;</code> | <code>[]</code> | The roll results |

**Example** *(&#x60;RollResult&#x60; objects)*  
```js
const results = new RollResults([
 new RollResult(4),
 new RollResult(3),
 new RollResult(5),
]);
```
**Example** *(Numerical results)*  
```js
const results = new RollResults([4, 3, 5]);
```
**Example** *(A mix)*  
```js
const results = new RollResults([
 new RollResult(4),
 3,
 new RollResult(5),
]);
```
<a name="RollResults+length"></a>

### rollResults.length ⇒ <code>number</code>
The number of rolls.

**Kind**: instance property of [<code>RollResults</code>](#RollResults)  
<a name="RollResults+rolls"></a>

### rollResults.rolls ⇒ <code>Array.&lt;RollResult&gt;</code>
List of rolls.

**Kind**: instance property of [<code>RollResults</code>](#RollResults)  
<a name="RollResults+rolls"></a>

### rollResults.rolls
Set the rolls.

**Kind**: instance property of [<code>RollResults</code>](#RollResults)  
**Throws**:

- <code>TypeError</code> Rolls must be an array


| Param | Type |
| --- | --- |
| rolls | <code>Array.&lt;RollResult&gt;</code> \| <code>Array.&lt;number&gt;</code> | 

<a name="RollResults+value"></a>

### rollResults.value ⇒ <code>number</code>
The total value of all the rolls after modifiers have been applied.

**Kind**: instance property of [<code>RollResults</code>](#RollResults)  
<a name="RollResults+addRoll"></a>

### rollResults.addRoll(value)
Add a single roll to the list.

**Kind**: instance method of [<code>RollResults</code>](#RollResults)  

| Param | Type |
| --- | --- |
| value | <code>RollResult</code> \| <code>number</code> | 

<a name="RollResults+toJSON"></a>

### rollResults.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>RollResults</code>](#RollResults)  
<a name="RollResults+toString"></a>

### rollResults.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>RollResults</code>](#RollResults)  
