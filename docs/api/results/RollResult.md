---
title: RollResult
---

# RollResult

<a name="RollResult"></a>

## RollResult
A `RollResult` represents the value and applicable modifiers for a single die roll

::: tip
You will probably not need to create your own `RollResult` instances, unless you're importing
rolls, but `RollResult` objects will be returned when rolling dice.
:::

**Kind**: global class  

* [RollResult](#RollResult)
    * [new RollResult(value, [modifiers], [useInTotal])](#new_RollResult_new)
    * [.calculationValue](#RollResult+calculationValue) ⇒ <code>number</code>
    * [.calculationValue](#RollResult+calculationValue)
    * [.initialValue](#RollResult+initialValue) ⇒ <code>number</code>
    * [.modifierFlags](#RollResult+modifierFlags) ⇒ <code>string</code>
    * [.modifiers](#RollResult+modifiers) ⇒ <code>Set.&lt;string&gt;</code>
    * [.modifiers](#RollResult+modifiers)
    * [.useInTotal](#RollResult+useInTotal) ⇒ <code>boolean</code>
    * [.useInTotal](#RollResult+useInTotal)
    * [.value](#RollResult+value) ⇒ <code>number</code>
    * [.value](#RollResult+value)
    * [.toJSON()](#RollResult+toJSON) ⇒ <code>Object</code>
    * [.toString()](#RollResult+toString) ⇒ <code>string</code>

<a name="new_RollResult_new"></a>

### new RollResult(value, [modifiers], [useInTotal])
Create a `RollResult` instance.

`value` can be a number, or an object containing a list of different values.
This allows you to specify the `initialValue`, `value` and `calculationValue` with different
values.

**Throws**:

- <code>TypeError</code> Result value, calculation value, or modifiers are invalid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> \| <code>Object</code> |  | The value rolled |
| [value.value] | <code>number</code> |  | The value with modifiers applied |
| [value.initialValue] | <code>number</code> |  | The initial, unmodified value rolled |
| [value.calculationValue] | <code>number</code> |  | The value used in calculations |
| [modifiers] | <code>Array.&lt;string&gt;</code> \| <code>Set.&lt;string&gt;</code> | <code>[]</code> | List of modifier names that affect this roll |
| [useInTotal] | <code>boolean</code> | <code>true</code> | Whether to include the roll value when calculating totals |

**Example** *(Numerical value)*  
```js
const result = new RollResult(4);
```
**Example** *(Object value)*  
```js
// must provide either `value` or `initialValue`
// `calculationValue` is optional.
const result = new RollResult({
  value: 6,
  initialValue: 4,
  calculationValue: 8,
});
```
**Example** *(With modifiers)*  
```js
const result = new RollResult(4, ['explode', 'critical-success']);
```
<a name="RollResult+calculationValue"></a>

### rollResult.calculationValue ⇒ <code>number</code>
The value to use in calculations.
This may be changed by modifiers.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
<a name="RollResult+calculationValue"></a>

### rollResult.calculationValue
Set the value to use in calculations.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
**Throws**:

- <code>TypeError</code> value is invalid


| Param | Type |
| --- | --- |
| value | <code>number</code> | 

<a name="RollResult+initialValue"></a>

### rollResult.initialValue ⇒ <code>number</code>
The initial roll value before any modifiers.

Not used for calculations and is just for reference.
You probably want `value` instead.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
**See**: [value](#RollResult+value)  
<a name="RollResult+modifierFlags"></a>

### rollResult.modifierFlags ⇒ <code>string</code>
The visual flags for the modifiers that affect the roll.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
**See**: [modifiers](#RollResult+modifiers)  
<a name="RollResult+modifiers"></a>

### rollResult.modifiers ⇒ <code>Set.&lt;string&gt;</code>
The names of modifiers that affect the roll.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
<a name="RollResult+modifiers"></a>

### rollResult.modifiers
Set the modifier names that affect the roll.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
**Throws**:

- <code>TypeError</code> modifiers must be a Set or array of modifier names


| Param | Type |
| --- | --- |
| value | <code>Array.&lt;string&gt;</code> \| <code>Set.&lt;string&gt;</code> | 

**Example**  
```js
rollResult.modifiers = ['explode', 're-roll'];
```
<a name="RollResult+useInTotal"></a>

### rollResult.useInTotal ⇒ <code>boolean</code>
Whether to use the value in total calculations or not.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
<a name="RollResult+useInTotal"></a>

### rollResult.useInTotal
Set whether to use the value in total calculations or not.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  

| Param | Type |
| --- | --- |
| value | <code>boolean</code> | 

<a name="RollResult+value"></a>

### rollResult.value ⇒ <code>number</code>
Value of the roll after modifiers have been applied.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
<a name="RollResult+value"></a>

### rollResult.value
Set the roll value.

**Kind**: instance property of [<code>RollResult</code>](#RollResult)  
**Throws**:

- <code>RangeError</code> value must be finite
- <code>TypeError</code> value is invalid


| Param | Type |
| --- | --- |
| value | <code>number</code> | 

<a name="RollResult+toJSON"></a>

### rollResult.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>RollResult</code>](#RollResult)  
<a name="RollResult+toString"></a>

### rollResult.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>RollResult</code>](#RollResult)  
