---
title: FudgeDice
---

# FudgeDice

<a name="FudgeDice"></a>

## FudgeDice ⇐ <code>StandardDice</code>
Represents a Fudge / Fate type die. FOO

**Kind**: global class  
**Extends**: <code>StandardDice</code>  

* [FudgeDice](#FudgeDice) ⇐ <code>StandardDice</code>
    * [new FudgeDice([nonBlanks], [qty], [modifiers], [description])](#new_FudgeDice_new)
    * [.name](#FudgeDice+name) ⇒ <code>string</code>
    * [.nonBlanks](#FudgeDice+nonBlanks) ⇒ <code>number</code>
    * [.sides](#FudgeDice+sides) ⇒ <code>string</code>
    * [.rollOnce()](#FudgeDice+rollOnce) ⇒ <code>RollResult</code>

<a name="new_FudgeDice_new"></a>

### new FudgeDice([nonBlanks], [qty], [modifiers], [description])
Create a `FudgeDice` instance.

**Throws**:

- <code>RangeError</code> nonBlanks must be 1 or 2
- <code>TypeError</code> modifiers must be valid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [nonBlanks] | <code>number</code> | <code>2</code> | The number of sides each symbol should cover (`1` or `2`) |
| [qty] | <code>number</code> | <code>1</code> | The number of dice to roll (e.g. `4`) |
| [modifiers] | <code>Map.&lt;string, Modifier&gt;</code> \| <code>Array.&lt;Modifier&gt;</code> \| <code>Object</code> \| <code>null</code> | <code></code> | The modifiers that affect the die |
| [description] | <code>Description</code> \| <code>string</code> \| <code>null</code> | <code></code> | The roll description. |

<a name="FudgeDice+name"></a>

### fudgeDice.name ⇒ <code>string</code>
The name of the die.

**Kind**: instance property of [<code>FudgeDice</code>](#FudgeDice)  
**Returns**: <code>string</code> - 'fudge'  
<a name="FudgeDice+nonBlanks"></a>

### fudgeDice.nonBlanks ⇒ <code>number</code>
The number of sides that each symbol (+, -) covers.

**Kind**: instance property of [<code>FudgeDice</code>](#FudgeDice)  
**Returns**: <code>number</code> - `1` or `2`  
<a name="FudgeDice+sides"></a>

### fudgeDice.sides ⇒ <code>string</code>
The number of sides the die has.

**Kind**: instance property of [<code>FudgeDice</code>](#FudgeDice)  
**Returns**: <code>string</code> - 'F.2' or 'F.1'  
<a name="FudgeDice+rollOnce"></a>

### fudgeDice.rollOnce() ⇒ <code>RollResult</code>
Roll a single die and return the value.

**Kind**: instance method of [<code>FudgeDice</code>](#FudgeDice)  
**Returns**: <code>RollResult</code> - The value rolled  
