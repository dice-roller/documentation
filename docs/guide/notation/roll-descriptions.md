# Describing Roles  <Badge text="New" vertical="middle"/>

You can add a textual description or label to both [Dice](dice.md) and [Roll Group](group-rolls.md), to help identify them.

Both inline and block description are supported.


## Inline

Inline descriptions are marked with `#` or `//`, and can appear after any [Dice](dice.md) or [Roll Group](group-rolls.md):

```javascript {1,3,5,7}
4d6 # Fire damage

4d6 // Fire damage

{4d6, 2d10, d4} // Fire damage, Frost damage, and Falling damage (A bad day)

4d6dl2 // Drop the lowest two
```

Anything after the start mark will not get parsed by the dice parser, so you can even make note of Dice:

```javascript
2d10 // Ice damage 2d10
```

::: roll 4d6 // Fire damage :::


## Block

Block descriptions are enclosed between either `[ ... ]` or `/* ... */`, and can appear after any [Dice](dice.md) or [Roll Group](group-rolls.md):

```javascript {1,3,5-7}
4d6 /* Ice damage */

2d10 [ Fire damage ]

{4d6, 2d10, d4} /* You can even
write them on multiple lines
*/
```

::: roll 4d6 /* Ice damage */ :::
