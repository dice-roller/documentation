---
title: ReRollModifier
---

# ReRollModifier

<a name="ReRollModifier"></a>

## ReRollModifier ⇐ <code>ComparisonModifier</code>
A `ReRollModifier` re-rolls dice that match a given test, and replaces the new value with the old
one.

**Kind**: global class  
**Extends**: <code>ComparisonModifier</code>  
**See**: [ExplodeModifier](ExplodeModifier) if you want to keep the old value as well  

* [ReRollModifier](#ReRollModifier) ⇐ <code>ComparisonModifier</code>
    * [new ReRollModifier([once], [comparePoint])](#new_ReRollModifier_new)
    * [.name](#ReRollModifier+name) ⇒ <code>string</code>
    * [.notation](#ReRollModifier+notation) ⇒ <code>string</code>
    * [.once](#ReRollModifier+once) ⇒ <code>boolean</code>
    * [.once](#ReRollModifier+once)
    * [.run(results, _dice)](#ReRollModifier+run) ⇒ <code>RollResults</code>
    * [.toJSON()](#ReRollModifier+toJSON) ⇒ <code>Object</code>

<a name="new_ReRollModifier_new"></a>

### new ReRollModifier([once], [comparePoint])
Create a `ReRollModifier` instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [once] | <code>boolean</code> | <code>false</code> | Whether to only re-roll once or not |
| [comparePoint] | <code>ComparePoint</code> | <code></code> | The comparison object |

<a name="ReRollModifier+name"></a>

### reRollModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>ReRollModifier</code>](#ReRollModifier)  
**Returns**: <code>string</code> - 're-roll'  
<a name="ReRollModifier+notation"></a>

### reRollModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>ReRollModifier</code>](#ReRollModifier)  
<a name="ReRollModifier+once"></a>

### reRollModifier.once ⇒ <code>boolean</code>
Whether the modifier should only re-roll once or not.

**Kind**: instance property of [<code>ReRollModifier</code>](#ReRollModifier)  
**Returns**: <code>boolean</code> - `true` if it should re-roll once, `false` otherwise  
<a name="ReRollModifier+once"></a>

### reRollModifier.once
Set whether the modifier should only re-roll once or not.

**Kind**: instance property of [<code>ReRollModifier</code>](#ReRollModifier)  

| Param | Type |
| --- | --- |
| value | <code>boolean</code> | 

<a name="ReRollModifier+run"></a>

### reRollModifier.run(results, _dice) ⇒ <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>ReRollModifier</code>](#ReRollModifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _dice | <code>StandardDice</code> | The die that the modifier is attached to |

<a name="ReRollModifier+toJSON"></a>

### reRollModifier.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>ReRollModifier</code>](#ReRollModifier)  
