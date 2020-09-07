---
title: Modifier
---

# Modifier

<a name="Modifier"></a>

## *Modifier*
A `Modifier` is the base modifier class that all others extend from.

::: warning Abstract class
This is meant as an abstract class and should not be used directly.
:::

**Kind**: global abstract class  

* *[Modifier](#Modifier)*
    * *[new Modifier()](#new_Modifier_new)*
    * *[.name](#Modifier+name) ⇒ <code>string</code>*
    * *[.notation](#Modifier+notation) ⇒ <code>string</code>*
    * *[.maxIterations](#Modifier+maxIterations) ⇒ <code>number</code>*
    * *[.run(results, _context)](#Modifier+run) ⇒ <code>RollResults</code>*
    * *[.toJSON()](#Modifier+toJSON) ⇒ <code>Object</code>*
    * *[.toString()](#Modifier+toString) ⇒ <code>string</code>*

<a name="new_Modifier_new"></a>

### *new Modifier()*
Create a `Modifier` instance.

<a name="Modifier+name"></a>

### *modifier.name ⇒ <code>string</code>*
The name of the modifier.

**Kind**: instance property of [<code>Modifier</code>](#Modifier)  
**Returns**: <code>string</code> - 'modifier'  
<a name="Modifier+notation"></a>

### *modifier.notation ⇒ <code>string</code>*
The modifier's notation.

**Kind**: instance property of [<code>Modifier</code>](#Modifier)  
<a name="Modifier+maxIterations"></a>

### *modifier.maxIterations ⇒ <code>number</code>*
The maximum number of iterations that the modifier can apply to a single die roll

**Kind**: instance property of [<code>Modifier</code>](#Modifier)  
**Returns**: <code>number</code> - `1000`  
<a name="Modifier+run"></a>

### *modifier.run(results, _context) ⇒ <code>RollResults</code>*
Run the modifier on the results.

**Kind**: instance method of [<code>Modifier</code>](#Modifier)  
**Returns**: <code>RollResults</code> - The modified results  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>RollResults</code> | The results to run the modifier against |
| _context | <code>StandardDice</code> \| <code>RollGroup</code> | The object that the modifier is attached to |

<a name="Modifier+toJSON"></a>

### *modifier.toJSON() ⇒ <code>Object</code>*
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>Modifier</code>](#Modifier)  
<a name="Modifier+toString"></a>

### *modifier.toString() ⇒ <code>string</code>*
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>Modifier</code>](#Modifier)  
**See**: [notation](#Modifier+notation)  
