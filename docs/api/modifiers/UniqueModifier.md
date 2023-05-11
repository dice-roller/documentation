---
title: UniqueModifier
---

# UniqueModifier

<a name="UniqueModifier"></a>

## UniqueModifier ⇐ <code>ComparisonModifier</code>
A `UniqueModifier` re-rolls any dice that roll non-unique values and, optionally that match a given test.

**Kind**: global class  
**Extends**: <code>ComparisonModifier</code>  

* [UniqueModifier](#UniqueModifier) ⇐ <code>ComparisonModifier</code>
    * [new UniqueModifier([once], [comparePoint])](#new_UniqueModifier_new)
    * [.name](#UniqueModifier+name) ⇒ <code>string</code>
    * [.notation](#UniqueModifier+notation) ⇒ <code>string</code>
    * [.once](#UniqueModifier+once) ⇒ <code>boolean</code>
    * [.once](#UniqueModifier+once)
    * [.run(results, _context)](#UniqueModifier+run) ⇒ <code>RollResults</code>
    * [.toJSON()](#UniqueModifier+toJSON) ⇒ <code>Object</code>

<a name="new_UniqueModifier_new"></a>

### new UniqueModifier([once], [comparePoint])
Create a `UniqueModifier` instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [once] | <code>boolean</code> | <code>false</code> | Whether to only re-roll once or not |
| [comparePoint] | <code>ComparePoint</code> | <code></code> | The comparison object |

<a name="UniqueModifier+name"></a>

### uniqueModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>UniqueModifier</code>](#UniqueModifier)  
**Returns**: <code>string</code> - 'unique'  
<a name="UniqueModifier+notation"></a>

### uniqueModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>UniqueModifier</code>](#UniqueModifier)  
<a name="UniqueModifier+once"></a>

### uniqueModifier.once ⇒ <code>boolean</code>
Whether the modifier should only re-roll once or not.

**Kind**: instance property of [<code>UniqueModifier</code>](#UniqueModifier)  
**Returns**: <code>boolean</code> - `true` if it should re-roll once, `false` otherwise  
<a name="UniqueModifier+once"></a>

### uniqueModifier.once
Set whether the modifier should only re-roll once or not.

**Kind**: instance property of [<code>UniqueModifier</code>](#UniqueModifier)  

| Param | Type |
| --- | --- |
| value | <code>boolean</code> | 

<a name="UniqueModifier+run"></a>

### uniqueModifier.run(results, _context) ⇒ <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>UniqueModifier</code>](#UniqueModifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="UniqueModifier+toJSON"></a>

### uniqueModifier.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>UniqueModifier</code>](#UniqueModifier)  
