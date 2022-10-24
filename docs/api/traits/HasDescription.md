---
title: HasDescription
---

# HasDescription

<a name="HasDescription"></a>

## *HasDescription*
A base class for description functionality.

**Kind**: global abstract class  

* *[HasDescription](#HasDescription)*
    * *[.description](#HasDescription+description) ⇒ <code>Description</code> \| <code>null</code>*
    * *[.description](#HasDescription+description)*
    * *[.toJSON()](#HasDescription+toJSON) ⇒ <code>Object</code>*
    * *[.toString()](#HasDescription+toString) ⇒ <code>string</code>*

<a name="HasDescription+description"></a>

### *hasDescription.description ⇒ <code>Description</code> \| <code>null</code>*
The description for the group.

**Kind**: instance property of [<code>HasDescription</code>](#HasDescription)  
<a name="HasDescription+description"></a>

### *hasDescription.description*
Set the description on the group.

**Kind**: instance property of [<code>HasDescription</code>](#HasDescription)  

| Param | Type |
| --- | --- |
| description | <code>Description</code> \| <code>string</code> \| <code>null</code> | 

<a name="HasDescription+toJSON"></a>

### *hasDescription.toJSON() ⇒ <code>Object</code>*
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>HasDescription</code>](#HasDescription)  
<a name="HasDescription+toString"></a>

### *hasDescription.toString() ⇒ <code>string</code>*
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>HasDescription</code>](#HasDescription)  
**See**: [RollGroup#notation](RollGroup#notation)  
