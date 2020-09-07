---
title: ResultGroup
---

# ResultGroup

<a name="ResultGroup"></a>

## ResultGroup
A collection of results and expressions.
Usually used to represent the results of a `RollGroup` instance.

This can contain `ResultGroup`, `RollResults`, operators, and plain numbers.

::: tip
You will probably not need to create your own `ResultGroup` instances, unless you're importing
rolls, but `ResultGroup` objects will be returned when rolling group rolls.
:::

**Kind**: global class  
**Since**: 4.5.0  

* [ResultGroup](#ResultGroup)
    * [new ResultGroup([results], [modifiers], [isRollGroup], [useInTotal])](#new_ResultGroup_new)
    * [.calculationValue](#ResultGroup+calculationValue) ⇒ <code>number</code>
    * [.calculationValue](#ResultGroup+calculationValue)
    * [.isRollGroup](#ResultGroup+isRollGroup) ⇒ <code>boolean</code>
    * [.isRollGroup](#ResultGroup+isRollGroup)
    * [.length](#ResultGroup+length) ⇒ <code>number</code>
    * [.modifierFlags](#ResultGroup+modifierFlags) ⇒ <code>string</code>
    * [.modifiers](#ResultGroup+modifiers) ⇒ <code>Set.&lt;string&gt;</code>
    * [.modifiers](#ResultGroup+modifiers)
    * [.results](#ResultGroup+results) ⇒ <code>Array.&lt;(ResultGroup\|RollResults\|number\|string)&gt;</code>
    * [.results](#ResultGroup+results)
    * [.useInTotal](#ResultGroup+useInTotal) ⇒ <code>boolean</code>
    * [.useInTotal](#ResultGroup+useInTotal)
    * [.value](#ResultGroup+value) ⇒ <code>number</code>
    * [.addResult(value)](#ResultGroup+addResult)
    * [.toJSON()](#ResultGroup+toJSON) ⇒ <code>Object</code>
    * [.toString()](#ResultGroup+toString) ⇒ <code>string</code>

<a name="new_ResultGroup_new"></a>

### new ResultGroup([results], [modifiers], [isRollGroup], [useInTotal])
Create a `ResultGroup` instance.

**Throws**:

- <code>TypeError</code> Rolls must be an array


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [results] | <code>Array.&lt;(ResultGroup\|RollResults\|number\|string)&gt;</code> | <code>[]</code> | The results and expressions |
| [modifiers] | <code>Array.&lt;string&gt;</code> \| <code>Set.&lt;string&gt;</code> | <code>[]</code> | List of modifier names that affect the group |
| [isRollGroup] | <code>boolean</code> | <code>false</code> | Whether the result group represents a roll group or not |
| [useInTotal] | <code>boolean</code> | <code>true</code> | Whether to include the group's value when calculating totals |

**Example** *(Normal roll: &#x60;4d6+2d10&#x60;)*  
```js
const results = new ResultGroup([
 new RollResults([3, 5, 4, 2]),
 '+',
 new RollResults([4, 8]),
]);
```
**Example** *(Roll group: &#x60;{4d6+2d10/2, 5d6/2d%}&#x60;)*  
```js
const results = new ResultGroup([
 new ResultGroup([
   new RollResults([3, 5, 4, 2]),
   '+',
   new RollResults([4, 8]),
   '/',
   2,
 ]),
 new ResultGroup([
   new RollResults([3, 3, 5, 2, 4]),
   '/',
   new RollResults([87, 46]),
 ]),
]);
```
<a name="ResultGroup+calculationValue"></a>

### resultGroup.calculationValue ⇒ <code>number</code>
The value to use in calculations.
This may be changed by modifiers.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
<a name="ResultGroup+calculationValue"></a>

### resultGroup.calculationValue
Set the value to use in calculations.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
**Throws**:

- <code>TypeError</code> value is invalid


| Param | Type |
| --- | --- |
| value | <code>number</code> | 

<a name="ResultGroup+isRollGroup"></a>

### resultGroup.isRollGroup ⇒ <code>boolean</code>
Whether the result group represents a roll group or not.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
**Returns**: <code>boolean</code> - `true` if it is a roll group, `false` otherwise  
<a name="ResultGroup+isRollGroup"></a>

### resultGroup.isRollGroup
Set whether the result group represents a roll group or not.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  

| Param | Type |
| --- | --- |
| value | <code>boolean</code> | 

<a name="ResultGroup+length"></a>

### resultGroup.length ⇒ <code>number</code>
The number of results.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
<a name="ResultGroup+modifierFlags"></a>

### resultGroup.modifierFlags ⇒ <code>string</code>
The visual flags for the modifiers that affect the group.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
**See**: [modifiers](#ResultGroup+modifiers)  
<a name="ResultGroup+modifiers"></a>

### resultGroup.modifiers ⇒ <code>Set.&lt;string&gt;</code>
The modifier names that affect the group.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
<a name="ResultGroup+modifiers"></a>

### resultGroup.modifiers
Set the modifier names that affect the group.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
**Throws**:

- <code>TypeError</code> modifiers must be a Set or array of modifier names


| Param | Type |
| --- | --- |
| value | <code>Array.&lt;string&gt;</code> \| <code>Set.&lt;string&gt;</code> | 

**Example**  
```js
resultGroup.modifiers = ['drop', 'target-success'];
```
<a name="ResultGroup+results"></a>

### resultGroup.results ⇒ <code>Array.&lt;(ResultGroup\|RollResults\|number\|string)&gt;</code>
List of results.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
<a name="ResultGroup+results"></a>

### resultGroup.results
Set the results.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
**Throws**:

- <code>TypeError</code> Results must be an array


| Param | Type |
| --- | --- |
| results | <code>Array.&lt;(ResultGroup\|RollResults\|number\|string)&gt;</code> | 

<a name="ResultGroup+useInTotal"></a>

### resultGroup.useInTotal ⇒ <code>boolean</code>
Whether to use the value in total calculations or not.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
<a name="ResultGroup+useInTotal"></a>

### resultGroup.useInTotal
Set whether to use the value in total calculations or not.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  

| Param | Type |
| --- | --- |
| value | <code>boolean</code> | 

<a name="ResultGroup+value"></a>

### resultGroup.value ⇒ <code>number</code>
The total value of all the results after modifiers have been applied.

**Kind**: instance property of [<code>ResultGroup</code>](#ResultGroup)  
<a name="ResultGroup+addResult"></a>

### resultGroup.addResult(value)
Add a single result to the list.

**Kind**: instance method of [<code>ResultGroup</code>](#ResultGroup)  
**Throws**:

- <code>TypeError</code> Value type is invalid


| Param | Type |
| --- | --- |
| value | [<code>ResultGroup</code>](#ResultGroup) \| <code>RollResults</code> \| <code>number</code> \| <code>string</code> | 

<a name="ResultGroup+toJSON"></a>

### resultGroup.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>ResultGroup</code>](#ResultGroup)  
<a name="ResultGroup+toString"></a>

### resultGroup.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>ResultGroup</code>](#ResultGroup)  
