---
title: MinModifier
---

# MinModifier

<a name="MinModifier"></a>

## MinModifier ⇐ <code>Modifier</code>
A `MinModifier` causes die rolls under a minimum value to be treated as the minimum value.

**Kind**: global class  
**Extends**: <code>Modifier</code>  
**See**: [MaxModifier](MaxModifier) for the opposite of this modifier  
**Since**: 4.3.0  

* [MinModifier](#MinModifier) ⇐ <code>Modifier</code>
    * [new MinModifier(min)](#new_MinModifier_new)
    * [.min](#MinModifier+min) ⇒ <code>Number</code>
    * [.min](#MinModifier+min)
    * [.name](#MinModifier+name) ⇒ <code>string</code>
    * [.notation](#MinModifier+notation) ⇒ <code>string</code>
    * [.run(results, _context)](#MinModifier+run) ⇒ <code>RollResults</code>
    * [.toJSON()](#MinModifier+toJSON) ⇒ <code>Object</code>

<a name="new_MinModifier_new"></a>

### new MinModifier(min)
Create a `MinModifier` instance.

**Throws**:

- <code>TypeError</code> min must be a number


| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The minimum value |

<a name="MinModifier+min"></a>

### minModifier.min ⇒ <code>Number</code>
The minimum value.

**Kind**: instance property of [<code>MinModifier</code>](#MinModifier)  
<a name="MinModifier+min"></a>

### minModifier.min
Set the minimum value.

**Kind**: instance property of [<code>MinModifier</code>](#MinModifier)  
**Throws**:

- <code>TypeError</code> min must be a number


| Param | Type |
| --- | --- |
| value | <code>number</code> | 

<a name="MinModifier+name"></a>

### minModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>MinModifier</code>](#MinModifier)  
**Returns**: <code>string</code> - 'min'  
<a name="MinModifier+notation"></a>

### minModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>MinModifier</code>](#MinModifier)  
<a name="MinModifier+run"></a>

### minModifier.run(results, _context) ⇒ <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>MinModifier</code>](#MinModifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="MinModifier+toJSON"></a>

### minModifier.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>MinModifier</code>](#MinModifier)  
