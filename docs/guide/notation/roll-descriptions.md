# Describing rolls

Add descriptions to your [dice](dice.md) and [roll groups](roll-groups.md) to identify what they represent, such as an attack, a damage type or a skill check.

Descriptions are labels only. They do not affect the results, and any dice notation inside them is treated as text.

You can use either inline or block descriptions.

## Inline descriptions

Start an inline description with `#` or `//`, after the dice notation and any modifiers, or after a roll group:

```javascript
4d6 # Fire damage

4d6 // Fire damage

4d6dl2 // Drop the lowest two

{4d6, 2d10, d4} // Combined damage
```

Everything after the marker, up to the end of the line, becomes part of the description.

For example, this rolls only `2d10`. The `2d10! / 3` inside the description is text, so it is not evaluated:

```javascript
2d10 // Ice damage 2d10! / 3
```

::: roller 4d6 // Fire damage :::

## Block descriptions

Enclose a block description in `[ ... ]` or `/* ... */`, after the dice notation and any modifiers, or after a roll group:

```javascript
4d6 [Fire damage]

4d6 /* Fire damage */

{5d6 + 5} [Fire damage]
```

Unlike inline descriptions, block descriptions have a closing marker. You can continue the notation afterwards, making them useful for labelling different parts of an expression:

```javascript
2d6 [Slashing damage] + 1d4 [Fire damage]
```

Block descriptions can also span multiple lines:

```javascript
{4d6, 2d10, d4} /* Fire damage,
frost damage and falling damage */
```

Any notation inside the description is treated as text:

```javascript
4d6 /* Ice damage 5d10 + 7 */
```

::: roller 4d6 /* Ice damage */ :::
