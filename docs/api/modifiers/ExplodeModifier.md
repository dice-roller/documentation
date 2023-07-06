---
title: ExplodeModifier
---

# ExplodeModifier

<a name="ExplodeModifier"></a>

## ExplodeModifier ⇐ <code>ComparisonModifier</code>
An `ExplodeModifier` re-rolls dice that match a given test, and adds them to the results.

**Kind**: global class  
**Extends**: <code>ComparisonModifier</code>  
**See**: [ReRollModifier](ReRollModifier) if you want to replace the old value with the new, rather than adding  

* [ExplodeModifier](#ExplodeModifier) ⇐ <code>ComparisonModifier</code>
    * [new ExplodeModifier([comparePoint], [compound], [penetrate])](#new_ExplodeModifier_new)
    * [.order](#ExplodeModifier+order) : <code>number</code>
    * [.compound](#ExplodeModifier+compound) ⇒ <code>boolean</code>
    * [.name](#ExplodeModifier+name) ⇒ <code>string</code>
    * [.notation](#ExplodeModifier+notation) ⇒ <code>string</code>
    * [.penetrate](#ExplodeModifier+penetrate) ⇒ <code>boolean</code>
    * [.run(results, _context)](#ExplodeModifier+run) ⇒ <code>RollResults</code>
    * [.toJSON()](#ExplodeModifier+toJSON) ⇒ <code>Object</code>

<a name="new_ExplodeModifier_new"></a>

### new ExplodeModifier([comparePoint], [compound], [penetrate])
Create an `ExplodeModifier` instance

**Throws**:

- <code>TypeError</code> comparePoint must be a `ComparePoint` object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [comparePoint] | <code>ComparePoint</code> | <code></code> | The comparison object |
| [compound] | <code>boolean</code> | <code>false</code> | Whether to compound or not |
| [penetrate] | <code>boolean</code> | <code>false</code> | Whether to penetrate or not |

<a name="ExplodeModifier+order"></a>

### explodeModifier.order : <code>number</code>
The default modifier execution order.

**Kind**: instance property of [<code>ExplodeModifier</code>](#ExplodeModifier)  
<a name="ExplodeModifier+compound"></a>

### explodeModifier.compound ⇒ <code>boolean</code>
Whether the modifier should compound the results or not.

**Kind**: instance property of [<code>ExplodeModifier</code>](#ExplodeModifier)  
**Returns**: <code>boolean</code> - `true` if it should compound, `false` otherwise  
<a name="ExplodeModifier+name"></a>

### explodeModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>ExplodeModifier</code>](#ExplodeModifier)  
**Returns**: <code>string</code> - 'explode'  
<a name="ExplodeModifier+notation"></a>

### explodeModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>ExplodeModifier</code>](#ExplodeModifier)  
<a name="ExplodeModifier+penetrate"></a>

### explodeModifier.penetrate ⇒ <code>boolean</code>
Whether the modifier should penetrate the results or not.

**Kind**: instance property of [<code>ExplodeModifier</code>](#ExplodeModifier)  
**Returns**: <code>boolean</code> - `true` if it should penetrate, `false` otherwise  
<a name="ExplodeModifier+run"></a>

### explodeModifier.run(results, _context) ⇒ <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>ExplodeModifier</code>](#ExplodeModifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="ExplodeModifier+toJSON"></a>

### explodeModifier.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>ExplodeModifier</code>](#ExplodeModifier)  
