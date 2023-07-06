---
title: MaxModifier
---

# MaxModifier

<a name="MaxModifier"></a>

## MaxModifier ⇐ <code>Modifier</code>
A `MaxModifier` causes die rolls over a maximum value to be treated as the maximum value.

**Kind**: global class  
**Extends**: <code>Modifier</code>  
**See**: [MinModifier](MinModifier) for the opposite of this modifier  
**Since**: 4.3.0  

* [MaxModifier](#MaxModifier) ⇐ <code>Modifier</code>
    * [new MaxModifier(max)](#new_MaxModifier_new)
    * [.order](#MaxModifier+order) : <code>number</code>
    * [.max](#MaxModifier+max) ⇒ <code>Number</code>
    * [.max](#MaxModifier+max)
    * [.name](#MaxModifier+name) ⇒ <code>string</code>
    * [.notation](#MaxModifier+notation) ⇒ <code>string</code>
    * [.run(results, _context)](#MaxModifier+run) ⇒ <code>RollResults</code>
    * [.toJSON()](#MaxModifier+toJSON) ⇒ <code>Object</code>

<a name="new_MaxModifier_new"></a>

### new MaxModifier(max)
Create a `MaxModifier` instance.

**Throws**:

- <code>TypeError</code> max must be a number


| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | The maximum value |

<a name="MaxModifier+order"></a>

### maxModifier.order : <code>number</code>
The default modifier execution order.

**Kind**: instance property of [<code>MaxModifier</code>](#MaxModifier)  
<a name="MaxModifier+max"></a>

### maxModifier.max ⇒ <code>Number</code>
The maximum value.

**Kind**: instance property of [<code>MaxModifier</code>](#MaxModifier)  
<a name="MaxModifier+max"></a>

### maxModifier.max
Set the maximum value.

**Kind**: instance property of [<code>MaxModifier</code>](#MaxModifier)  
**Throws**:

- <code>TypeError</code> max must be a number


| Param | Type |
| --- | --- |
| value | <code>number</code> | 

<a name="MaxModifier+name"></a>

### maxModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>MaxModifier</code>](#MaxModifier)  
**Returns**: <code>string</code> - 'max'  
<a name="MaxModifier+notation"></a>

### maxModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>MaxModifier</code>](#MaxModifier)  
<a name="MaxModifier+run"></a>

### maxModifier.run(results, _context) ⇒ <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>MaxModifier</code>](#MaxModifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="MaxModifier+toJSON"></a>

### maxModifier.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>MaxModifier</code>](#MaxModifier)  
