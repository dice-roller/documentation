# CLI

Roll dice directly in your terminal with the [RPG Dice Roller CLI](https://github.com/dice-roller/cli). Use it to make individual rolls, roll several expressions at once, or play an interactive dice game.


## Install

Install the CLI globally using npm:

```bash
npm install -g @dice-roller/cli
```

This makes the `roller` command available in your terminal.


## Roll dice

Pass a [dice notation](./notation/readme.md) to `roller`:

```bash
roller 4d6
```

You can also roll several expressions in one command, separated by spaces:

```bash
roller 2d10 7d% 5dF
```

Surround expressions containing spaces with quotes:

```bash
roller "4d6 # roll description"
```

All supported dice notation is available in the CLI.

Rolling dice is the default command, so `roller 4d6` and `roller roll 4d6` are equivalent.

### Options

```text:no-line-numbers
roller <notation..> [options]
```

| Option | Description | Default |
| --- | --- | --- |
| `-s`, `--separator` | Text used to separate the output of multiple rolls. | `"; "` |
| `-e`, `--engine` | The random number generator engine to use. | |
| `--seed` | A numeric seed for the random number generator. | |
| `-f`, `--format` | The output format. | `"string"` |
| `--result-only` | Return only the roll results, without the notation or individual dice. | `false` |

### Examples

Use the Mersenne Twister engine with a seed. The seed is optional:

```bash
roller 4d6 -e=MersenneTwister19937 --seed=415
```

Return only the result:

```bash
roller 2d20 --result-only
```

Export the roll as Base64:

```bash
roller "6d8*4" -f=BASE_64
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
