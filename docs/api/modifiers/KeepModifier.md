---
title: KeepModifier
---

# KeepModifier

<a name="KeepModifier"></a>

## KeepModifier ⇐ <code>Modifier</code>
A `KeepModifier` will "keep" dice from a roll, dropping (Remove from total calculations) all
others.

**Kind**: global class  
**Extends**: <code>Modifier</code>  
**See**: [DropModifier](DropModifier) for the opposite of this modifier  

* [KeepModifier](#KeepModifier) ⇐ <code>Modifier</code>
    * [new KeepModifier([end], [qty])](#new_KeepModifier_new)
    * [.end](#KeepModifier+end) ⇒ <code>string</code>
    * [.end](#KeepModifier+end)
    * [.name](#KeepModifier+name) ⇒ <code>string</code>
    * [.notation](#KeepModifier+notation) ⇒ <code>string</code>
    * [.qty](#KeepModifier+qty) ⇒ <code>number</code>
    * [.qty](#KeepModifier+qty)
    * [.rangeToDrop(_results)](#KeepModifier+rangeToDrop) ⇒ <code>Array.&lt;number&gt;</code>
    * [.run(results, _context)](#KeepModifier+run) ⇒ <code>ResultGroup</code> \| <code>RollResults</code>
    * [.toJSON()](#KeepModifier+toJSON) ⇒ <code>Object</code>

<a name="new_KeepModifier_new"></a>

### new KeepModifier([end], [qty])
Create a `KeepModifier` instance

**Throws**:

- <code>RangeError</code> End must be one of 'h' or 'l'
- <code>TypeError</code> qty must be a positive integer


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [end] | <code>string</code> | <code>&quot;h&quot;</code> | Either `h|l` to keep highest or lowest |
| [qty] | <code>number</code> | <code>1</code> | The amount dice to keep |

<a name="KeepModifier+end"></a>

### keepModifier.end ⇒ <code>string</code>
Which end the rolls should be kept ("h" = High, "l" = Low).

**Kind**: instance property of [<code>KeepModifier</code>](#KeepModifier)  
**Returns**: <code>string</code> - 'h' or 'l'  
<a name="KeepModifier+end"></a>

### keepModifier.end
Set which end the rolls should be kept ("h" = High, "l" = Low).

**Kind**: instance property of [<code>KeepModifier</code>](#KeepModifier)  
**Throws**:

- <code>RangeError</code> End must be one of 'h' or 'l'


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Either 'h' or 'l' |

<a name="KeepModifier+name"></a>

### keepModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>KeepModifier</code>](#KeepModifier)  
**Returns**: <code>string</code> - 'keep-l' or 'keep-h'  
<a name="KeepModifier+notation"></a>

### keepModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>KeepModifier</code>](#KeepModifier)  
<a name="KeepModifier+qty"></a>

### keepModifier.qty ⇒ <code>number</code>
The quantity of dice that should be kept.

**Kind**: instance property of [<code>KeepModifier</code>](#KeepModifier)  
<a name="KeepModifier+qty"></a>

### keepModifier.qty
Set the quantity of dice that should be kept.

**Kind**: instance property of [<code>KeepModifier</code>](#KeepModifier)  
**Throws**:

- <code>TypeError</code> qty must be a positive finite integer


| Param | Type |
| --- | --- |
| value | <code>number</code> | 

<a name="KeepModifier+rangeToDrop"></a>

### keepModifier.rangeToDrop(_results) ⇒ <code>Array.&lt;number&gt;</code>
Determine the start and end (end exclusive) range of rolls to drop.

**Kind**: instance method of [<code>KeepModifier</code>](#KeepModifier)  
**Returns**: <code>Array.&lt;number&gt;</code> - The min / max range to drop  

| Param | Type | Description |
| --- | --- | --- |
| _results | <code>RollResults</code> | The results to drop from |

<a name="KeepModifier+run"></a>

### keepModifier.run(results, _context) ⇒ <code>ResultGroup</code> \| <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>KeepModifier</code>](#KeepModifier)  
**Returns**: <code>ResultGroup</code> \| <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>ResultGroup</code> \| <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="KeepModifier+toJSON"></a>

### keepModifier.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>KeepModifier</code>](#KeepModifier)  
