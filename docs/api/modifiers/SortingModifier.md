---
title: SortingModifier
---

# SortingModifier

<a name="SortingModifier"></a>

## SortingModifier ⇐ <code>ComparisonModifier</code>
A `SortingModifier` sorts roll results by their value, either ascending or descending.

**Kind**: global class  
**Extends**: <code>ComparisonModifier</code>  

* [SortingModifier](#SortingModifier) ⇐ <code>ComparisonModifier</code>
    * [new SortingModifier([direction])](#new_SortingModifier_new)
    * [.order](#SortingModifier+order) : <code>number</code>
    * [.direction](#SortingModifier+direction) ⇒ <code>string</code>
    * [.direction](#SortingModifier+direction)
    * [.name](#SortingModifier+name) ⇒ <code>string</code>
    * [.notation](#SortingModifier+notation) ⇒ <code>string</code>
    * [.run(results, _context)](#SortingModifier+run) ⇒ <code>RollResults</code>
    * [.toJSON()](#SortingModifier+toJSON) ⇒ <code>Object</code>

<a name="new_SortingModifier_new"></a>

### new SortingModifier([direction])
Create a `SortingModifier` instance.

**Throws**:

- <code>RangeError</code> Direction must be 'a' or 'd'


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [direction] | <code>string</code> | <code>&quot;a&quot;</code> | The direction to sort in; 'a' (Ascending) or 'd' (Descending) |

<a name="SortingModifier+order"></a>

### sortingModifier.order : <code>number</code>
The default modifier execution order.

**Kind**: instance property of [<code>SortingModifier</code>](#SortingModifier)  
<a name="SortingModifier+direction"></a>

### sortingModifier.direction ⇒ <code>string</code>
The sort direction.

**Kind**: instance property of [<code>SortingModifier</code>](#SortingModifier)  
**Returns**: <code>string</code> - Either 'a' or 'd'  
<a name="SortingModifier+direction"></a>

### sortingModifier.direction
Set the sort direction.

**Kind**: instance property of [<code>SortingModifier</code>](#SortingModifier)  
**Throws**:

- <code>RangeError</code> Direction must be 'a' or 'd'


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | Either 'a' (Ascending) or 'd' (Descending) |

<a name="SortingModifier+name"></a>

### sortingModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>SortingModifier</code>](#SortingModifier)  
**Returns**: <code>string</code> - 'sorting'  
<a name="SortingModifier+notation"></a>

### sortingModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>SortingModifier</code>](#SortingModifier)  
<a name="SortingModifier+run"></a>

### sortingModifier.run(results, _context) ⇒ <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>SortingModifier</code>](#SortingModifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="SortingModifier+toJSON"></a>

### sortingModifier.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>SortingModifier</code>](#SortingModifier)  
