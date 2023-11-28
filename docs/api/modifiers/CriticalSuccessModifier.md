---
title: CriticalSuccessModifier
---

# CriticalSuccessModifier

<a name="CriticalSuccessModifier"></a>

## CriticalSuccessModifier ⇐ <code>ComparisonModifier</code>
A `CriticalSuccessModifier` modifier flags values that match a comparison.

Unlike most other modifiers, it doesn't affect the roll value, it simply "flags" matching rolls.

**Kind**: global class  
**Extends**: <code>ComparisonModifier</code>  
**See**: [CriticalFailureModifier](CriticalFailureModifier) for the opposite of this modifier  

* [CriticalSuccessModifier](#CriticalSuccessModifier) ⇐ <code>ComparisonModifier</code>
    * [new CriticalSuccessModifier(comparePoint)](#new_CriticalSuccessModifier_new)
    * [.order](#CriticalSuccessModifier+order) : <code>number</code>
    * [.name](#CriticalSuccessModifier+name) ⇒ <code>string</code>
    * [.notation](#CriticalSuccessModifier+notation) ⇒ <code>string</code>
    * [.defaultComparePoint(_context)](#CriticalSuccessModifier+defaultComparePoint) ⇒ <code>array</code>
    * [.run(results, _context)](#CriticalSuccessModifier+run) ⇒ <code>RollResults</code>

<a name="new_CriticalSuccessModifier_new"></a>

### new CriticalSuccessModifier(comparePoint)
Create a `CriticalSuccessModifier` instance.

**Throws**:

- <code>TypeError</code> comparePoint must be a `ComparePoint` object


| Param | Type | Description |
| --- | --- | --- |
| comparePoint | <code>ComparePoint</code> | The comparison object |

<a name="CriticalSuccessModifier+order"></a>

### criticalSuccessModifier.order : <code>number</code>
The default modifier execution order.

**Kind**: instance property of [<code>CriticalSuccessModifier</code>](#CriticalSuccessModifier)  
<a name="CriticalSuccessModifier+name"></a>

### criticalSuccessModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>CriticalSuccessModifier</code>](#CriticalSuccessModifier)  
**Returns**: <code>string</code> - 'critical-success'  
<a name="CriticalSuccessModifier+notation"></a>

### criticalSuccessModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>CriticalSuccessModifier</code>](#CriticalSuccessModifier)  
<a name="CriticalSuccessModifier+defaultComparePoint"></a>

### criticalSuccessModifier.defaultComparePoint(_context) ⇒ <code>array</code>
The default compare point definition

**Kind**: instance method of [<code>CriticalSuccessModifier</code>](#CriticalSuccessModifier)  

| Param | Type | Description |
| --- | --- | --- |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="CriticalSuccessModifier+run"></a>

### criticalSuccessModifier.run(results, _context) ⇒ <code>RollResults</code>
Runs the modifier on the rolls.

**Kind**: instance method of [<code>CriticalSuccessModifier</code>](#CriticalSuccessModifier)  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

