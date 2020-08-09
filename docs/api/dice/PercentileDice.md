---
title: PercentileDice
---

# PercentileDice

<a name="PercentileDice"></a>

## PercentileDice ⇐ <code>StandardDice</code>
Represents a percentile die.

**Kind**: global class  
**Extends**: <code>StandardDice</code>  

* [PercentileDice](#PercentileDice) ⇐ <code>StandardDice</code>
    * [new PercentileDice([qty], [modifiers], [sidesAsNumber])](#new_PercentileDice_new)
    * [.name](#PercentileDice+name) ⇒ <code>string</code>
    * [.sides](#PercentileDice+sides) ⇒ <code>number</code> \| <code>string</code>

<a name="new_PercentileDice_new"></a>

### new PercentileDice([qty], [modifiers], [sidesAsNumber])
Create a `PercentileDice` instance.

**Throws**:

- <code>TypeError</code> qty must be a positive integer, and modifiers must be valid


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [qty] | <code>number</code> | <code>1</code> | The number of dice to roll (e.g. `4`) |
| [modifiers] | <code>Map.&lt;string, Modifier&gt;</code> \| <code>Array.&lt;Modifier&gt;</code> \| <code>Object</code> \| <code>null</code> | <code></code> | The modifiers that affect the die |
| [sidesAsNumber] | <code>boolean</code> | <code>false</code> | Whether to show the sides as `%` (default) or `100` |

<a name="PercentileDice+name"></a>

### percentileDice.name ⇒ <code>string</code>
The name of the die.

**Kind**: instance property of [<code>PercentileDice</code>](#PercentileDice)  
**Returns**: <code>string</code> - 'percentile'  
<a name="PercentileDice+sides"></a>

### percentileDice.sides ⇒ <code>number</code> \| <code>string</code>
The number of sides the die has

**Kind**: instance property of [<code>PercentileDice</code>](#PercentileDice)  
**Returns**: <code>number</code> \| <code>string</code> - `%` if `sidesAsNumber == false`, or `100` otherwise  
