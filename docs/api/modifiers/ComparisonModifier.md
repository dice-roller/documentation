---
title: ComparisonModifier
---

# ComparisonModifier

<a name="ComparisonModifier"></a>

## *ComparisonModifier ⇐ <code>Modifier</code>*
::: warning Abstract class
This is an abstract class and should not be used directly.
You should use one of the extended classes, or extend the class yourself.
:::

A `ComparisonModifier` is the base modifier class for comparing values.

**Kind**: global abstract class  
**Extends**: <code>Modifier</code>  
**See**

- [CriticalFailureModifier](CriticalFailureModifier)
- [CriticalSuccessModifier](CriticalSuccessModifier)
- [ExplodeModifier](ExplodeModifier)
- [ReRollModifier](ReRollModifier)
- [TargetModifier](TargetModifier)


* *[ComparisonModifier](#ComparisonModifier) ⇐ <code>Modifier</code>*
    * *[new ComparisonModifier([comparePoint])](#new_ComparisonModifier_new)*
    * *[.comparePoint](#ComparisonModifier+comparePoint) ⇒ <code>ComparePoint</code> \| <code>undefined</code>*
    * *[.comparePoint](#ComparisonModifier+comparePoint)*
    * *[.name](#ComparisonModifier+name) ⇒ <code>string</code>*
    * *[.notation](#ComparisonModifier+notation) ⇒ <code>string</code>*
    * *[.defaultComparePoint(_context)](#ComparisonModifier+defaultComparePoint) ⇒ <code>null</code>*
    * *[.defaults(_context)](#ComparisonModifier+defaults) ⇒ <code>object</code>*
    * *[.isComparePoint(value)](#ComparisonModifier+isComparePoint) ⇒ <code>boolean</code>*
    * *[.toJSON()](#ComparisonModifier+toJSON) ⇒ <code>Object</code>*

<a name="new_ComparisonModifier_new"></a>

### *new ComparisonModifier([comparePoint])*
Create a `ComparisonModifier` instance.

**Throws**:

- <code>TypeError</code> `comparePoint` must be an instance of `ComparePoint` or `undefined`


| Param | Type | Description |
| --- | --- | --- |
| [comparePoint] | <code>ComparePoint</code> | The comparison object |

<a name="ComparisonModifier+comparePoint"></a>

### *comparisonModifier.comparePoint ⇒ <code>ComparePoint</code> \| <code>undefined</code>*
The compare point.

**Kind**: instance property of [<code>ComparisonModifier</code>](#ComparisonModifier)  
<a name="ComparisonModifier+comparePoint"></a>

### *comparisonModifier.comparePoint*
Set the compare point.

**Kind**: instance property of [<code>ComparisonModifier</code>](#ComparisonModifier)  
**Throws**:

- <code>TypeError</code> value must be an instance of `ComparePoint`


| Param | Type |
| --- | --- |
| comparePoint | <code>ComparePoint</code> | 

<a name="ComparisonModifier+name"></a>

### *comparisonModifier.name ⇒ <code>string</code>*
The name of the modifier.

**Kind**: instance property of [<code>ComparisonModifier</code>](#ComparisonModifier)  
**Returns**: <code>string</code> - 'comparison'  
<a name="ComparisonModifier+notation"></a>

### *comparisonModifier.notation ⇒ <code>string</code>*
The modifier's notation.

**Kind**: instance property of [<code>ComparisonModifier</code>](#ComparisonModifier)  
<a name="ComparisonModifier+defaultComparePoint"></a>

### *comparisonModifier.defaultComparePoint(_context) ⇒ <code>null</code>*
Empty default compare point definition

**Kind**: instance method of [<code>ComparisonModifier</code>](#ComparisonModifier)  

| Param | Type | Description |
| --- | --- | --- |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="ComparisonModifier+defaults"></a>

### *comparisonModifier.defaults(_context) ⇒ <code>object</code>*
Eases processing of simple "compare point only" defaults

**Kind**: instance method of [<code>ComparisonModifier</code>](#ComparisonModifier)  

| Param | Type | Description |
| --- | --- | --- |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="ComparisonModifier+isComparePoint"></a>

### *comparisonModifier.isComparePoint(value) ⇒ <code>boolean</code>*
Check whether value matches the compare point or not.

**Kind**: instance method of [<code>ComparisonModifier</code>](#ComparisonModifier)  
**Returns**: <code>boolean</code> - `true` if the value matches, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value to compare with |

<a name="ComparisonModifier+toJSON"></a>

### *comparisonModifier.toJSON() ⇒ <code>Object</code>*
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>ComparisonModifier</code>](#ComparisonModifier)  
