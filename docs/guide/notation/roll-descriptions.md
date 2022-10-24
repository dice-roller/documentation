# Describing Roles  <Badge text="New" vertical="middle"/>

You can add a textual description or label to both [Dice](dice.md) and [Roll Group](group-rolls.md), to help identify them.

Both inline and block description are supported.


## Inline

Inline descriptions are marked with `#` or `//`, and can appear after any [Dice](dice.md) or [Roll Group](group-rolls.md):

```javascript
4d6 # Fire damage

4d6 // Fire damage

{4d6, 2d10, d4} // Fire damage, Frost damage, and Falling damage (A bad day)

{5d6 + 5} // Fire

4d6dl2 // Drop the lowest two
```

Any notation inside a description will not be parsed:

```javascript
2d10 // Ice damage 2d10! / 3
```

::: roll 4d6 // Fire damage :::


## Block

Block descriptions are enclosed between either `[ ... ]` or `/* ... */`, and can appear after any [Dice](dice.md) or [Roll Group](group-rolls.md):

```javascript
4d6 /* Ice damage */

2d10 [ Fire damage ]

{5d6 + 5} [ Fire damage ]

{4d6, 2d10, d4} /* You can even
write them on multiple lines
*/
```

Any notation inside a description block will not be parsed:

```javascript
4d6 /* Ice damage 5d10 + 7 */
```

::: roll 4d6 /* Ice damage */ :::
