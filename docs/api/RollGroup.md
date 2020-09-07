---
title: RollGroup
---

# RollGroup

<a name="RollGroup"></a>

## RollGroup
A `RollGroup` is a group of one or more "sub-rolls".

A sub-roll is just simple roll notation (e.g. `4d6`, `2d10*3`, `5/10d20`)

**Kind**: global class  
**Since**: 4.5.0  

* [RollGroup](#RollGroup)
    * [new RollGroup([expressions], [modifiers])](#new_RollGroup_new)
    * [.expressions](#RollGroup+expressions) ⇒ <code>Array.&lt;Array.&lt;(StandardDice\|string\|number)&gt;&gt;</code>
    * [.expressions](#RollGroup+expressions)
    * [.modifiers](#RollGroup+modifiers) ⇒ <code>Map.&lt;string, Modifier&gt;</code> \| <code>null</code>
    * [.modifiers](#RollGroup+modifiers)
    * [.notation](#RollGroup+notation) ⇒ <code>string</code>
    * [.roll()](#RollGroup+roll) ⇒ <code>ResultGroup</code>
    * [.toJSON()](#RollGroup+toJSON) ⇒ <code>Object</code>
    * [.toString()](#RollGroup+toString) ⇒ <code>string</code>

<a name="new_RollGroup_new"></a>

### new RollGroup([expressions], [modifiers])
Create a `RollGroup` instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [expressions] | <code>Array.&lt;Array.&lt;(StandardDice\|string\|number)&gt;&gt;</code> | <code>[]</code> | List of sub-rolls |
| [modifiers] | <code>Map.&lt;string, Modifier&gt;</code> \| <code>Array.&lt;Modifier&gt;</code> \| <code>Object</code> \| <code>null</code> | <code>[]</code> | The modifiers that affect the group |

**Example** *(&#x60;{4d6+4, 2d%/5}k1&#x60;)*  
```js
const expressions = [
  [
    new StandardDice(6, 4),
    '+',
    4,
  ],
  [
    new PercentileDice(2),
    '/',
    5,
  ],
];

const modifiers = [
  new KeepModifier(),
];

const group = new RollGroup(expressions, modifiers);
```
<a name="RollGroup+expressions"></a>

### rollGroup.expressions ⇒ <code>Array.&lt;Array.&lt;(StandardDice\|string\|number)&gt;&gt;</code>
The sub-roll expressions in the group.

**Kind**: instance property of [<code>RollGroup</code>](#RollGroup)  
<a name="RollGroup+expressions"></a>

### rollGroup.expressions
Set the sub-roll expressions in the group.

**Kind**: instance property of [<code>RollGroup</code>](#RollGroup)  
**Throws**:

- <code>TypeError</code> Expressions must be an array of arrays
- <code>TypeError</code> Sub expressions cannot be empty
- <code>TypeError</code> Sub expression items must be Dice, numbers, or strings


| Param | Type |
| --- | --- |
| expressions | <code>Array.&lt;Array.&lt;(StandardDice\|string\|number)&gt;&gt;</code> | 

<a name="RollGroup+modifiers"></a>

### rollGroup.modifiers ⇒ <code>Map.&lt;string, Modifier&gt;</code> \| <code>null</code>
The modifiers that affect the object.

**Kind**: instance property of [<code>RollGroup</code>](#RollGroup)  
<a name="RollGroup+modifiers"></a>

### rollGroup.modifiers
Set the modifiers that affect this group.

**Kind**: instance property of [<code>RollGroup</code>](#RollGroup)  
**Throws**:

- <code>TypeError</code> Modifiers should be a Map, array of Modifiers, or an Object


| Param | Type |
| --- | --- |
| value | <code>Map.&lt;string, Modifier&gt;</code> \| <code>Array.&lt;Modifier&gt;</code> \| <code>Object</code> \| <code>null</code> | 

<a name="RollGroup+notation"></a>

### rollGroup.notation ⇒ <code>string</code>
The group notation. e.g. `{4d6, 2d10+3}k1`.

**Kind**: instance property of [<code>RollGroup</code>](#RollGroup)  
<a name="RollGroup+roll"></a>

### rollGroup.roll() ⇒ <code>ResultGroup</code>
Run the sub-roll expressions for the group.

**Kind**: instance method of [<code>RollGroup</code>](#RollGroup)  
**Returns**: <code>ResultGroup</code> - The results of the sub-rolls  
**Example** *(&#x60;{4d6+4/1d6, 2d10/3}k1&#x60;)*  
```js
ResultGroup {
  results: [
    // sub-roll 1 - 4d6+4/1d6
    ResultGroup {
      results: [
        RollResults {
          rolls: [
            RollResult {
              value: 2
            },
            RollResult {
              value: 5
            },
            RollResult {
              value: 4
            },
            RollResult {
              value: 1
            }
          ]
        },
        '+',
        4,
        '/',
        RollResults {
          rolls: [
            RollResult {
              value: 4
            }
          ]
        }
      ]
    },
    // sub-roll 2 - 2d10/3
    ResultGroup {
      results: [
        RollResults {
          rolls: [
            RollResults {
              4
            },
            RollResults {
              9
            }
          ]
        },
        '/',
        3
      ]
    }
  ]
}
```
<a name="RollGroup+toJSON"></a>

### rollGroup.toJSON() ⇒ <code>Object</code>
Return an object for JSON serialising.

This is called automatically when JSON encoding the object.

**Kind**: instance method of [<code>RollGroup</code>](#RollGroup)  
<a name="RollGroup+toString"></a>

### rollGroup.toString() ⇒ <code>string</code>
Return the String representation of the object.

This is called automatically when casting the object to a string.

**Kind**: instance method of [<code>RollGroup</code>](#RollGroup)  
**See**: [notation](#RollGroup+notation)  
