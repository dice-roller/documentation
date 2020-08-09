---
title: NumberGenerator
---

# NumberGenerator

## Classes

<dl>
<dt><a href="#NumberGenerator">NumberGenerator</a></dt>
<dd><p>The <code>NumberGenerator</code> is capable of generating random numbers.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#maxEngine">maxEngine</a> : <code>Object</code></dt>
<dd><p>Engine that always returns the maximum value.
Used internally for calculating max roll values.</p>
</dd>
<dt><a href="#minEngine">minEngine</a> : <code>Object</code></dt>
<dd><p>Engine that always returns the minimum value.
Used internally for calculating min roll values.</p>
</dd>
<dt><a href="#engines">engines</a> : <code>Object</code></dt>
<dd><p>List of built-in number generator engines.</p>
</dd>
</dl>

<a name="NumberGenerator"></a>

## NumberGenerator
The `NumberGenerator` is capable of generating random numbers.

**Kind**: global class  
**See**: This uses [random-js](https://github.com/ckknight/random-js).
For details of the engines, check the [documentation](https://github.com/ckknight/random-js#engines).  
**Since**: 4.2.0  

* [NumberGenerator](#NumberGenerator)
    * [new NumberGenerator([engine])](#new_NumberGenerator_new)
    * [.engine](#NumberGenerator+engine) ⇒ <code>Engine</code> \| <code>Object</code>
    * [.engine](#NumberGenerator+engine)
    * [.integer(min, max)](#NumberGenerator+integer) ⇒ <code>number</code>
    * [.real(min, max, [inclusive])](#NumberGenerator+real) ⇒ <code>number</code>

<a name="new_NumberGenerator_new"></a>

### new NumberGenerator([engine])
Create a `NumberGenerator` instance.

The `engine` can be any object that has a `next()` method, which returns a number.

**Throws**:

- <code>TypeError</code> engine must have function `next()`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [engine] | <code>Engine</code> \| <code>Object</code> | <code>nativeMath</code> | The RNG engine to use |

**Example** *(Built-in engine)*  
```js
new NumberGenerator(engines.nodeCrypto);
```
**Example** *(Custom engine)*  
```js
new NumberGenerator({
  next() {
    // return a random number
  },
});
```
<a name="NumberGenerator+engine"></a>

### numberGenerator.engine ⇒ <code>Engine</code> \| <code>Object</code>
The current engine.

**Kind**: instance property of [<code>NumberGenerator</code>](#NumberGenerator)  
<a name="NumberGenerator+engine"></a>

### numberGenerator.engine
Set the engine.

The `engine` can be any object that has a `next()` method, which returns a number.

**Kind**: instance property of [<code>NumberGenerator</code>](#NumberGenerator)  
**Throws**:

- <code>TypeError</code> engine must have function `next()`

**See**: [engines](#engines)  

| Param | Type |
| --- | --- |
| engine | <code>Engine</code> \| <code>Object</code> | 

**Example** *(Built-in engine)*  
```js
numberGenerator.engine = engines.nodeCrypto;
```
**Example** *(Custom engine)*  
```js
numberGenerator.engine = {
  next() {
    // return a random number
  },
});
```
<a name="NumberGenerator+integer"></a>

### numberGenerator.integer(min, max) ⇒ <code>number</code>
Generate a random integer within the inclusive range `[min, max]`.

**Kind**: instance method of [<code>NumberGenerator</code>](#NumberGenerator)  
**Returns**: <code>number</code> - The random integer  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The minimum integer value, inclusive. |
| max | <code>number</code> | The maximum integer value, inclusive. |

<a name="NumberGenerator+real"></a>

### numberGenerator.real(min, max, [inclusive]) ⇒ <code>number</code>
Returns a floating-point value within `[min, max)` or `[min, max]`.

**Kind**: instance method of [<code>NumberGenerator</code>](#NumberGenerator)  
**Returns**: <code>number</code> - The random floating-point value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| min | <code>number</code> |  | The minimum floating-point value, inclusive. |
| max | <code>number</code> |  | The maximum floating-point value. |
| [inclusive] | <code>boolean</code> | <code>false</code> | If `true`, `max` will be inclusive. |

<a name="maxEngine"></a>

## maxEngine : <code>Object</code>
Engine that always returns the maximum value.
Used internally for calculating max roll values.

**Kind**: global constant  
**Since**: 4.2.0  

* [maxEngine](#maxEngine) : <code>Object</code>
    * [.range](#maxEngine.range) : <code>Array.&lt;number&gt;</code>
    * [.next()](#maxEngine.next) ⇒ <code>number</code>

<a name="maxEngine.range"></a>

### maxEngine.range : <code>Array.&lt;number&gt;</code>
The min / max number range (e.g. `[1, 10]`).

This _must_ be set for the `next()` method to return the correct last index.

**Kind**: static property of [<code>maxEngine</code>](#maxEngine)  
**Example**  
```js
maxEngine.range = [1, 10];
```
<a name="maxEngine.next"></a>

### maxEngine.next() ⇒ <code>number</code>
Returns the maximum number index for the range

**Kind**: static method of [<code>maxEngine</code>](#maxEngine)  
<a name="minEngine"></a>

## minEngine : <code>Object</code>
Engine that always returns the minimum value.
Used internally for calculating min roll values.

**Kind**: global constant  
**Since**: 4.2.0  
<a name="minEngine.next"></a>

### minEngine.next() ⇒ <code>number</code>
Returns the minimum number index, `0`

**Kind**: static method of [<code>minEngine</code>](#minEngine)  
<a name="engines"></a>

## engines : <code>Object</code>
List of built-in number generator engines.

**Kind**: global constant  
**See**: This uses [random-js](https://github.com/ckknight/random-js).
For details of the engines, check the [documentation](https://github.com/ckknight/random-js#engines).  
**Since**: 4.2.0  
