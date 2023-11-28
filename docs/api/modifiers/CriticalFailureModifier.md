---
title: CriticalFailureModifier
---

# CriticalFailureModifier

<a name="CriticalFailureModifier"></a>

## CriticalFailureModifier ⇐ <code>ComparisonModifier</code>
A `CriticalFailureModifier` modifier flags values that match a comparison.

Unlike most other modifiers, it doesn't affect the roll value, it simply "flags" matching rolls.

**Kind**: global class  
**Extends**: <code>ComparisonModifier</code>  
**See**: [CriticalSuccessModifier](CriticalSuccessModifier) for the opposite of this modifier  

* [CriticalFailureModifier](#CriticalFailureModifier) ⇐ <code>ComparisonModifier</code>
    * [new CriticalFailureModifier([comparePoint])](#new_CriticalFailureModifier_new)
    * [.order](#CriticalFailureModifier+order) : <code>number</code>
    * [.name](#CriticalFailureModifier+name) ⇒ <code>string</code>
    * [.notation](#CriticalFailureModifier+notation) ⇒ <code>string</code>
    * [.defaultComparePoint(_context)](#CriticalFailureModifier+defaultComparePoint) ⇒ <code>array</code>
    * [.run(results, _context)](#CriticalFailureModifier+run) ⇒ <code>RollResults</code>

<a name="new_CriticalFailureModifier_new"></a>

### new CriticalFailureModifier([comparePoint])
Create a `CriticalFailureModifier` instance.

**Throws**:

- <code>TypeError</code> comparePoint must be a `ComparePoint` object


| Param | Type | Description |
| --- | --- | --- |
| [comparePoint] | <code>ComparePoint</code> | The comparison object |

<a name="CriticalFailureModifier+order"></a>

### criticalFailureModifier.order : <code>number</code>
The default modifier execution order.

**Kind**: instance property of [<code>CriticalFailureModifier</code>](#CriticalFailureModifier)  
<a name="CriticalFailureModifier+name"></a>

### criticalFailureModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>CriticalFailureModifier</code>](#CriticalFailureModifier)  
**Returns**: <code>string</code> - 'critical-failure'  
<a name="CriticalFailureModifier+notation"></a>

### criticalFailureModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>CriticalFailureModifier</code>](#CriticalFailureModifier)  
<a name="CriticalFailureModifier+defaultComparePoint"></a>

### criticalFailureModifier.defaultComparePoint(_context) ⇒ <code>array</code>
The default compare point definition

**Kind**: instance method of [<code>CriticalFailureModifier</code>](#CriticalFailureModifier)  

| Param | Type | Description |
| --- | --- | --- |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="CriticalFailureModifier+run"></a>

### criticalFailureModifier.run(results, _context) ⇒ <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>CriticalFailureModifier</code>](#CriticalFailureModifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

