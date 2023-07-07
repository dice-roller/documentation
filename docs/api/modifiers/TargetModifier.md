---
title: TargetModifier
---

# TargetModifier

<a name="TargetModifier"></a>

## TargetModifier ⇐ <code>ComparisonModifier</code>
A `TargetModifier` determines whether rolls are classed as a success, failure, or neutral.

This modifies the roll values, depending on the state;

success = `1`, failure = `-1`, neutral = `0`.

**Kind**: global class  
**Extends**: <code>ComparisonModifier</code>  

* [TargetModifier](#TargetModifier) ⇐ <code>ComparisonModifier</code>
    * [new TargetModifier(successCP, [failureCP])](#new_TargetModifier_new)
    * [.order](#TargetModifier+order) : <code>number</code>
    * [.failureComparePoint](#TargetModifier+failureComparePoint) ⇒ <code>ComparePoint</code> \| <code>null</code>
    * [.failureComparePoint](#TargetModifier+failureComparePoint)
    * [.name](#TargetModifier+name) ⇒ <code>string</code>
    * [.notation](#TargetModifier+notation) ⇒ <code>string</code>
    * [.successComparePoint](#TargetModifier+successComparePoint) ⇒ <code>ComparePoint</code>
    * [.successComparePoint](#TargetModifier+successComparePoint)
    * [.getStateValue(value)](#TargetModifier+getStateValue) ⇒ <code>number</code>
    * [.isFailure(value)](#TargetModifier+isFailure) ⇒ <code>boolean</code>
    * [.isNeutral(value)](#TargetModifier+isNeutral) ⇒ <code>boolean</code>
    * [.isSuccess(value)](#TargetModifier+isSuccess) ⇒ <code>boolean</code>
    * [.run(results, _context)](#TargetModifier+run) ⇒ <code>RollResults</code>
    * [.toJSON()](#TargetModifier+toJSON) ⇒ <code>Object</code>

<a name="new_TargetModifier_new"></a>

### new TargetModifier(successCP, [failureCP])
Create a `TargetModifier` instance.

**Throws**:

- <code>TypeError</code> failure comparePoint must be instance of ComparePoint or null


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| successCP | <code>ComparePoint</code> |  | The success comparison object |
| [failureCP] | <code>ComparePoint</code> | <code></code> | The failure comparison object |

<a name="TargetModifier+order"></a>

### targetModifier.order : <code>number</code>
The default modifier execution order.

**Kind**: instance property of [<code>TargetModifier</code>](#TargetModifier)  
<a name="TargetModifier+failureComparePoint"></a>

### targetModifier.failureComparePoint ⇒ <code>ComparePoint</code> \| <code>null</code>
The failure compare point for the modifier

**Kind**: instance property of [<code>TargetModifier</code>](#TargetModifier)  
<a name="TargetModifier+failureComparePoint"></a>

### targetModifier.failureComparePoint
Set the failure compare point

**Kind**: instance property of [<code>TargetModifier</code>](#TargetModifier)  
**Throws**:

- <code>TypeError</code> failure comparePoint must be instance of ComparePoint or null


| Param | Type |
| --- | --- |
| comparePoint | <code>ComparePoint</code> \| <code>null</code> | 

<a name="TargetModifier+name"></a>

### targetModifier.name ⇒ <code>string</code>
The name of the modifier.

**Kind**: instance property of [<code>TargetModifier</code>](#TargetModifier)  
**Returns**: <code>string</code> - 'target'  
<a name="TargetModifier+notation"></a>

### targetModifier.notation ⇒ <code>string</code>
The modifier's notation.

**Kind**: instance property of [<code>TargetModifier</code>](#TargetModifier)  
<a name="TargetModifier+successComparePoint"></a>

### targetModifier.successComparePoint ⇒ <code>ComparePoint</code>
The success compare point for the modifier

**Kind**: instance property of [<code>TargetModifier</code>](#TargetModifier)  
<a name="TargetModifier+successComparePoint"></a>

### targetModifier.successComparePoint
Set the success compare point for the modifier

**Kind**: instance property of [<code>TargetModifier</code>](#TargetModifier)  

| Param | Type |
| --- | --- |
| value | <code>ComparePoint</code> | 

<a name="TargetModifier+getStateValue"></a>

### targetModifier.getStateValue(value) ⇒ <code>number</code>
Check if the value is a success/failure/neither and return the corresponding state value.

**Kind**: instance method of [<code>TargetModifier</code>](#TargetModifier)  
**Returns**: <code>number</code> - success = `1`, failure = `-1`, neutral = `0`  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to compare against |

<a name="TargetModifier+isFailure"></a>

### targetModifier.isFailure(value) ⇒ <code>boolean</code>
Check if the `value` matches the failure compare point.

A response of `false` does _NOT_ indicate a success.
A value is a success _ONLY_ if it passes the success compare point.
A value could be neither a failure nor a success.

**Kind**: instance method of [<code>TargetModifier</code>](#TargetModifier)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to compare against |

<a name="TargetModifier+isNeutral"></a>

### targetModifier.isNeutral(value) ⇒ <code>boolean</code>
Check if the `value` is neither a success nor a failure.

**Kind**: instance method of [<code>TargetModifier</code>](#TargetModifier)  
**Returns**: <code>boolean</code> - `true` if the value doesn't match the success and failure compare points  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to compare against |

<a name="TargetModifier+isSuccess"></a>

### targetModifier.isSuccess(value) ⇒ <code>boolean</code>
Check if the `value` matches the success compare point.

A response of `false` does _NOT_ indicate a failure.
A value is a failure _ONLY_ if it passes the failure compare point.
A value could be neither a failure nor a success.

**Kind**: instance method of [<code>TargetModifier</code>](#TargetModifier)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to compare against |

<a name="TargetModifier+run"></a>

### targetModifier.run(results, _context) ⇒ <code>RollResults</code>
Run the modifier on the results.

**Kind**: instance method of [<code>TargetModifier</code>](#TargetModifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="TargetModifier+toJSON"></a>

### targetModifier.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>TargetModifier</code>](#TargetModifier)  
