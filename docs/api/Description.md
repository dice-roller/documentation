---
title: Description
---

# Description

<a name="Description"></a>

## Description
Represents a Roll / Roll group description.

**Kind**: global class  

* [Description](#Description)
    * [new Description(text, [type])](#new_Description_new)
    * [.text](#Description+text) ⇒ <code>string</code>
    * [.text](#Description+text)
    * [.type](#Description+type) ⇒ <code>string</code>
    * [.type](#Description+type)
    * [.toJSON()](#Description+toJSON) ⇒ <code>Object</code>
    * [.toString()](#Description+toString) ⇒ <code>string</code>

<a name="new_Description_new"></a>

### new Description(text, [type])
Create a `Description` instance.


| Param | Type | Default |
| --- | --- | --- |
| text | <code>string</code> |  | 
| [type] | <code>string</code> | <code>&quot;inline&quot;</code> | 

<a name="Description+text"></a>

### description.text ⇒ <code>string</code>
The description text.

**Kind**: instance property of [<code>Description</code>](#Description)  
<a name="Description+text"></a>

### description.text
Set the description text.

**Kind**: instance property of [<code>Description</code>](#Description)  

| Param | Type |
| --- | --- |
| text | <code>string</code> \| <code>number</code> | 

<a name="Description+type"></a>

### description.type ⇒ <code>string</code>
The description type.

**Kind**: instance property of [<code>Description</code>](#Description)  
**Returns**: <code>string</code> - "inline" or "multiline"  
<a name="Description+type"></a>

### description.type
Set the description type.

**Kind**: instance property of [<code>Description</code>](#Description)  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="Description+toJSON"></a>

### description.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>Description</code>](#Description)  
<a name="Description+toString"></a>

### description.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>Description</code>](#Description)  
**See**: [text](#Description+text)  
