---
title: StandardDice
---

# StandardDice

<a name="StandardDice"></a>

## StandardDice
Represents a standard numerical die.

**Kind**: global class  

* [StandardDice](#StandardDice)
    * [new StandardDice(sides, [qty], [modifiers], [min], [max])](#new_StandardDice_new)
    * [.average](#StandardDice+average) ⇒ <code>number</code>
    * [.modifiers](#StandardDice+modifiers) ⇒ <code>Map.&lt;string, Modifier&gt;</code> \| <code>null</code>
    * [.modifiers](#StandardDice+modifiers)
    * [.max](#StandardDice+max) ⇒ <code>number</code>
    * [.min](#StandardDice+min) ⇒ <code>number</code>
    * [.name](#StandardDice+name) ⇒ <code>string</code>
    * [.notation](#StandardDice+notation) ⇒ <code>string</code>
    * [.qty](#StandardDice+qty) ⇒ <code>number</code>
    * [.sides](#StandardDice+sides) ⇒ <code>number</code>
    * [.roll()](#StandardDice+roll) ⇒ <code>RollResults</code>
    * [.rollOnce()](#StandardDice+rollOnce) ⇒ <code>RollResult</code>
    * [.toJSON()](#StandardDice+toJSON) ⇒ <code>Object</code>
    * [.toString()](#StandardDice+toString) ⇒ <code>string</code>

<a name="new_StandardDice_new"></a>

### new StandardDice(sides, [qty], [modifiers], [min], [max])
Create a `StandardDice` instance.

**Throws**:

- <code>RequiredArgumentError</code> sides is required
- <code>TypeError</code> qty must be a positive integer, and modifiers must be valid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| sides | <code>number</code> |  | The number of sides the die has (.e.g `6`) |
| [qty] | <code>number</code> | <code>1</code> | The number of dice to roll (e.g. `4`) |
| [modifiers] | <code>Map.&lt;string, Modifier&gt;</code> \| <code>Array.&lt;Modifier&gt;</code> \| <code>Object</code> \| <code>null</code> | <code></code> | The modifiers that affect the die |
| [min] | <code>number</code> \| <code>null</code> | <code>1</code> | The minimum possible roll value |
| [max] | <code>number</code> \| <code>null</code> | <code></code> | The maximum possible roll value. Defaults to number of `sides` |

<a name="StandardDice+average"></a>

### standardDice.average ⇒ <code>number</code>
The average value that the die can roll (Excluding modifiers).

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
<a name="StandardDice+modifiers"></a>

### standardDice.modifiers ⇒ <code>Map.&lt;string, Modifier&gt;</code> \| <code>null</code>
The modifiers that affect this die roll.

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
<a name="StandardDice+modifiers"></a>

### standardDice.modifiers
Set the modifiers that affect this roll.

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
**Throws**:

- <code>TypeError</code> Modifiers should be a Map, array of Modifiers, or an Object


| Param | Type |
| --- | --- |
| value | <code>Map.&lt;string, Modifier&gt;</code> \| <code>Array.&lt;Modifier&gt;</code> \| <code>Object</code> \| <code>null</code> | 

<a name="StandardDice+max"></a>

### standardDice.max ⇒ <code>number</code>
The maximum value that can be rolled on the die, excluding modifiers.

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
<a name="StandardDice+min"></a>

### standardDice.min ⇒ <code>number</code>
The minimum value that can be rolled on the die, excluding modifiers.

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
<a name="StandardDice+name"></a>

### standardDice.name ⇒ <code>string</code>
The name of the die.

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
**Returns**: <code>string</code> - 'standard'  
<a name="StandardDice+notation"></a>

### standardDice.notation ⇒ <code>string</code>
The dice notation. e.g. `4d6!`

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
<a name="StandardDice+qty"></a>

### standardDice.qty ⇒ <code>number</code>
The number of dice that should be rolled.

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
<a name="StandardDice+sides"></a>

### standardDice.sides ⇒ <code>number</code>
The number of sides the die has.

**Kind**: instance property of [<code>StandardDice</code>](#StandardDice)  
<a name="StandardDice+roll"></a>

### standardDice.roll() ⇒ <code>RollResults</code>
Roll the dice for the specified quantity and apply any modifiers.

**Kind**: instance method of [<code>StandardDice</code>](#StandardDice)  
**Returns**: <code>RollResults</code> - The result of the roll  
<a name="StandardDice+rollOnce"></a>

### standardDice.rollOnce() ⇒ <code>RollResult</code>
Roll a single die and return the value.

**Kind**: instance method of [<code>StandardDice</code>](#StandardDice)  
**Returns**: <code>RollResult</code> - The value rolled  
<a name="StandardDice+toJSON"></a>

### standardDice.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>StandardDice</code>](#StandardDice)  
<a name="StandardDice+toString"></a>

### standardDice.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>StandardDice</code>](#StandardDice)  
**See**: [notation](#StandardDice+notation)  
