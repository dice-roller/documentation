---
title: DropModifier
---

# DropModifier

<a name="DropModifier"></a>

## DropModifier ⇐ <code>KeepModifier</code>
A `DropModifier` will "drop" (Remove from total calculations) dice from a roll.

**Kind**: global class  
**Extends**: <code>KeepModifier</code>  
**See**: [KeepModifier](KeepModifier) for the opposite of this modifier  

* [DropModifier](#DropModifier) ⇐ <code>KeepModifier</code>
    * [new DropModifier(end, [qty])](#new_DropModifier_new)
    * [.name](#DropModifier+name) ⇒ <code>string</code>
    * [.notation](#DropModifier+notation) ⇒ <code>string</code>
    * [.rangeToDrop(_results)](#DropModifier+rangeToDrop) ⇒ <code>Array.&lt;number&gt;</code>

<a name="new_DropModifier_new"></a>

### new DropModifier(end, [qty])
Create a `DropModifier` instance.

**Throws**:

- <code>RangeError</code> End must be one of 'h' or 'l'
- <code>TypeError</code> qty must be a positive integer


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| end | <code>string</code> |  | Either `h|l` to drop highest or lowest |
| [qty] | <code>number</code> | <code>1</code> | The amount of dice to drop |

<a name="DropModifier+name"></a>

### dropModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>DropModifier</code>](#DropModifier)  
**Returns**: <code>string</code> - 'drop-l' or 'drop-h'  
<a name="DropModifier+notation"></a>

### dropModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>DropModifier</code>](#DropModifier)  
<a name="DropModifier+rangeToDrop"></a>

### dropModifier.rangeToDrop(_results) ⇒ <code>Array.&lt;number&gt;</code>
Determine the start and end (end exclusive) range of rolls to drop.

**Kind**: instance method of [<code>DropModifier</code>](#DropModifier)  
**Returns**: <code>Array.&lt;number&gt;</code> - The min / max range to drop  

| Param | Type | Description |
| --- | --- | --- |
| _results | <code>RollResults</code> | The results to drop from |

