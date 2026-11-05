[@dice-roller/rpg-dice-roller](../index.md) / Parser

# Class: Parser

Defined in: [src/parser/Parser.ts:18](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/parser/Parser.ts#L18)

Parses dice notation into the AST.

## See

https://dice-roller.github.io/documentation/guide/notation/

## Constructors

### Constructor

> **new Parser**(`options?`): `Parser`

Defined in: [src/parser/Parser.ts:23](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/parser/Parser.ts#L23)

Creates a parser with the supplied literal quantity limit.

#### Parameters

##### options?

[`ParserOptions`](../interfaces/ParserOptions.md) = `{}`

#### Returns

`Parser`

## Properties

### maxQty

> `readonly` **maxQty**: `number`

Defined in: [src/parser/Parser.ts:20](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/parser/Parser.ts#L20)

Maximum literal pool quantity accepted by the grammar.

## Methods

### parse()

> **parse**(`notation`): [`ExpressionNode`](../type-aliases/ExpressionNode.md)

Defined in: [src/parser/Parser.ts:36](https://github.com/dice-roller/rpg-dice-roller/blob/e5fc57b800027d5376a4b67c69ac191796693323/src/parser/Parser.ts#L36)

Parses a notation string into an expression tree without rolling any dice.

Literal pool quantities are checked against `maxQty`; evaluated quantities are checked
separately by the evaluator's roll limits.

#### Parameters

##### notation

`string`

#### Returns

[`ExpressionNode`](../type-aliases/ExpressionNode.md)

#### Throws

the notation is empty or not a string

#### Throws

the notation is invalid, with its source location and syntax error cause
