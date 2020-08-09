---
title: ComparePoint
---

# ComparePoint

<a name="ComparePoint"></a>

## ComparePoint
A `ComparePoint` object compares numbers against each other.
For example, _is 6 greater than 3_, or _is 8 equal to 10_.

**Kind**: global class  

* [ComparePoint](#ComparePoint)
    * [new ComparePoint(operator, value)](#new_ComparePoint_new)
    * _instance_
        * [.operator](#ComparePoint+operator)
        * [.operator](#ComparePoint+operator) ⇒ <code>string</code>
        * [.value](#ComparePoint+value)
        * [.value](#ComparePoint+value) ⇒ <code>number</code>
        * [.isMatch(value)](#ComparePoint+isMatch) ⇒ <code>boolean</code>
        * [.toJSON()](#ComparePoint+toJSON) ⇒ <code>Object</code>
        * [.toString()](#ComparePoint+toString) ⇒ <code>string</code>
    * _static_
        * [.isValidOperator(operator)](#ComparePoint.isValidOperator) ⇒ <code>boolean</code>

<a name="new_ComparePoint_new"></a>

### new ComparePoint(operator, value)
Create a `ComparePoint` instance.

**Throws**:

- <code>CompareOperatorError</code> operator is invalid
- <code>RequiredArgumentError</code> operator and value are required
- <code>TypeError</code> value must be numeric


| Param | Type | Description |
| --- | --- | --- |
| operator | <code>string</code> | The comparison operator (One of `=`, `!=`, `<`, `>`, `<=`, `>=`) |
| value | <code>number</code> | The value to compare to |

<a name="ComparePoint+operator"></a>

### comparePoint.operator
Set the comparison operator.

**Kind**: instance property of [<code>ComparePoint</code>](#ComparePoint)  
**Throws**:

- CompareOperatorError operator is invalid


| Param | Type | Description |
| --- | --- | --- |
| operator | <code>string</code> | One of `=`, `!=`, `<`, `>`, `<=`, `>=` |

<a name="ComparePoint+operator"></a>

### comparePoint.operator ⇒ <code>string</code>
The comparison operator.

**Kind**: instance property of [<code>ComparePoint</code>](#ComparePoint)  
<a name="ComparePoint+value"></a>

### comparePoint.value
Set the value.

**Kind**: instance property of [<code>ComparePoint</code>](#ComparePoint)  
**Throws**:

- <code>TypeError</code> value must be numeric


| Param | Type |
| --- | --- |
| value | <code>number</code> | 

<a name="ComparePoint+value"></a>

### comparePoint.value ⇒ <code>number</code>
The comparison value

**Kind**: instance property of [<code>ComparePoint</code>](#ComparePoint)  
<a name="ComparePoint+isMatch"></a>

### comparePoint.isMatch(value) ⇒ <code>boolean</code>
Check whether value matches the compare point

**Kind**: instance method of [<code>ComparePoint</code>](#ComparePoint)  
**Returns**: <code>boolean</code> - `true` if it is a match, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The number to compare |

<a name="ComparePoint+toJSON"></a>

### comparePoint.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>ComparePoint</code>](#ComparePoint)  
<a name="ComparePoint+toString"></a>

### comparePoint.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>ComparePoint</code>](#ComparePoint)  
<a name="ComparePoint.isValidOperator"></a>

### ComparePoint.isValidOperator(operator) ⇒ <code>boolean</code>
Check if the operator is valid.

**Kind**: static method of [<code>ComparePoint</code>](#ComparePoint)  
**Returns**: <code>boolean</code> - `true` if the operator is valid, `false` otherwise  

| Param | Type |
| --- | --- |
| operator | <code>string</code> | 

