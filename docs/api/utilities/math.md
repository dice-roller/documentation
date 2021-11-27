---
title: math
---

# math

## Functions

<dl>
<dt><a href="#compareNumbers">compareNumbers(a, b, operator)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if <code>a</code> is comparative to <code>b</code> with the given operator.</p>
</dd>
<dt><a href="#evaluate">evaluate(equation)</a> ⇒ <code>number</code></dt>
<dd><p>Evaluate mathematical strings.</p>
</dd>
<dt><a href="#isNumeric">isNumeric(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the given value is a valid finite number.</p>
</dd>
<dt><a href="#isSafeNumber">isSafeNumber(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the given value is a &quot;safe&quot; number.</p>
<p>A &quot;safe&quot; number falls within the <code>Number.MAX_SAFE_INTEGER</code> and <code>Number.MIN_SAFE_INTEGER</code> values
(Inclusive).</p>
</dd>
<dt><a href="#sumArray">sumArray(numbers)</a> ⇒ <code>number</code></dt>
<dd><p>Take an array of numbers and add the values together.</p>
</dd>
<dt><a href="#toFixed">toFixed(num, [precision])</a> ⇒ <code>number</code></dt>
<dd><p>Round a number to the given amount of digits after the decimal point, removing any trailing
zeros after the decimal point.</p>
</dd>
</dl>

<a name="compareNumbers"></a>

## compareNumbers(a, b, operator) ⇒ <code>boolean</code>
Check if `a` is comparative to `b` with the given operator.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the comparison matches, `false` otherwise  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | The number to compare with `b` |
| b | <code>number</code> | The number to compare with `a` |
| operator | <code>string</code> | A valid comparative operator: `=, <, >, <=, >=, !=, <>` |

**Example** *(Is &#x60;a&#x60; greater than &#x60;b&#x60;?)*  
```js
const a = 4;
const b = 2;

compareNumber(a, b, '>'); // true
```
**Example** *(Is &#x60;a&#x60; equal to &#x60;b&#x60;?)*  
```js
const a = 4;
const b = 2;

compareNumber(a, b, '='); // false
```
<a name="evaluate"></a>

## evaluate(equation) ⇒ <code>number</code>
Evaluate mathematical strings.

**Kind**: global function  
**Returns**: <code>number</code> - The result of the equation  

| Param | Type | Description |
| --- | --- | --- |
| equation | <code>string</code> | The mathematical equation to compute. |

**Example**  
```js
evaluate('5+6'); // 11
```
<a name="isNumeric"></a>

## isNumeric(val) ⇒ <code>boolean</code>
Check if the given value is a valid finite number.

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if it is a finite number, `false` otherwise  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

<a name="isSafeNumber"></a>

## isSafeNumber(val) ⇒ <code>boolean</code>
Check if the given value is a "safe" number.

A "safe" number falls within the `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER` values
(Inclusive).

**Kind**: global function  
**Returns**: <code>boolean</code> - `true` if the value is a "safe" number, `false` otherwise  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

<a name="sumArray"></a>

## sumArray(numbers) ⇒ <code>number</code>
Take an array of numbers and add the values together.

**Kind**: global function  
**Returns**: <code>number</code> - The summed value  

| Param | Type |
| --- | --- |
| numbers | <code>Array.&lt;number&gt;</code> | 

<a name="toFixed"></a>

## toFixed(num, [precision]) ⇒ <code>number</code>
Round a number to the given amount of digits after the decimal point, removing any trailing
zeros after the decimal point.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num | <code>number</code> |  | The number to round |
| [precision] | <code>number</code> | <code>0</code> | The number of digits after the decimal point |

**Example**  
```js
toFixed(1.236, 2); // 1.24
toFixed(30.1, 2); // 30.1
toFixed(4.0000000004, 3); // 4
```
