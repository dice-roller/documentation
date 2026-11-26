# CLI

Roll dice directly in your terminal with the [RPG Dice Roller CLI](https://github.com/dice-roller/cli). Use it to make individual rolls, roll several expressions at once, or play an interactive dice game.


## Install

Install the CLI globally using npm:

```bash
npm install -g @dice-roller/cli
```

This makes the `roller` command available in your terminal.


## Roll dice

Pass a [dice notation](../notation/index.md) to `roller`:

```bash
roller '4d6'
```

You can also roll several expressions in one command, separated by spaces:

```bash
roller '2d10' '7d%' '5dF'
```

In Bash, put each notation argument in single quotes to pass spaces and shell characters such as `!` and `>` through to the CLI.

```bash
roller '4d6 # roll description'
roller '4d6d1!>=3'
```

All supported dice notation is available in the CLI.

Rolling dice is the default command, so `roller '4d6'` and `roller roll '4d6'` are equivalent.

### Options

```text:no-line-numbers
roller <notation..> [options]
```

| Option | Description | Default |
| --- | --- | --- |
| `-s`, `--separator` | Text used to separate the output of multiple rolls. | `"; "` |
| `-e`, `--engine` | Choose `crypto`, `mersenne`, `nativeMath` or `xoroshiro128plus`. | `nativeMath` |
| `--seed` | A signed 32-bit integer seed for `mersenne` or `xoroshiro128plus`. Supply the engine with `--engine`. | |
| `-f`, `--format` | Choose `string`, `json`, `base64` or `object`. The `object` format displays a JavaScript object for inspection. | `"string"` |
| `--result-only` | With `string` output, print only the combined total. | `false` |
| `--color`, `--no-color` | Force or disable ANSI styling for text rolls. | Automatic |

Text rolls use colour when the output terminal supports it. Piped or redirected output is plain text by default. Set `NO_COLOR` or use `--no-color` to turn off styling. Exports and `--result-only` totals are always plain.

### Examples

Use the Mersenne Twister engine with a seed for repeatable rolls. See [random number generators](../customisation/random-number-generator.md#use-a-seed-for-repeatable-rolls) for details.

```bash
roller '4d6' --engine=mersenne --seed=415
```

Print just the total.

```bash
roller '2d20' --result-only
```

Export the roll history as JSON or Base64-encoded JSON.

```bash
roller '6d8*4' --format=json
roller '6d8*4' --format=base64
```


## Play an interactive game

Start an interactive dice game:

```bash
roller play
```

### Options

| Option | Description |
| --- | --- |
| `--players` | Player names, separated by spaces. |
| `--count` | The number of players. |
| `--color`, `--no-color` | Force or disable ANSI styling for displayed rolls. |

### Examples

Start a game with four players:

```bash
roller play --count=4
```

Start a game with two players named Barbara and Ian:

```bash
roller play --players=Barbara Ian
```

Set the number of players and name only the first:

```bash
roller play --count=2 --players=Susan
```


## Help and version

Show the available commands and options:

```bash
roller --help
```

Show help for the interactive game:

```bash
roller play --help
```

Display the installed CLI version:

```bash
roller --version
```

You can also use `-V` instead of `--version`.


## Upgrade from CLI v1

- **Exports use the RPG Dice Roller v6 schema.** JSON exports now have `type: "history"` and a top-level `rolls` array in place of `log`. Each roll contains a `result` tree. The same schema applies to Base64 and object output. Update scripts that read the old structure. The format names `JSON`, `BASE_64` and `OBJECT` are still accepted.
- **Engine names and seeded sequences have changed.** Use `mersenne` in place of `MersenneTwister19937` and `crypto` in place of `nodeCrypto` or `browserCrypto`. A v1 seed can produce different rolls in v2.
- **Check your Node.js version** against the [installation requirements](#install) before upgrading.
