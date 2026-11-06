---
sidebar: heading
---

# Contributing

Thanks for helping improve RPG Dice Roller! Bug reports, ideas, documentation fixes and code contributions are all welcome.

Please follow our [Code of Conduct](./code-of-conduct.md) when participating.

## Questions, bugs and ideas

Use [GitHub Discussions](https://github.com/dice-roller/rpg-dice-roller/discussions) for questions and general discussion.

For bugs and feature suggestions, [open an issue](https://github.com/dice-roller/rpg-dice-roller/issues/new/choose). Please search existing issues first and add to an existing discussion where appropriate.

For a bug report, include:

* The library version and environment you’re using.
* A small code example or dice notation that reproduces the problem.
* What you expected to happen and what actually happened.
* Any relevant error messages.

For a feature suggestion, explain the use case and give an example of how you’d like it to work.

## Choosing something to work on

Browse the [open issues](https://github.com/dice-roller/rpg-dice-roller/issues), particularly those labelled [good first issue or help wanted](https://github.com/dice-roller/rpg-dice-roller/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22,%22good+first+issue%22).

If you’d like to work on an issue, leave a comment so others know. For larger changes or new features, discuss the approach before spending too much time on the implementation.

Small fixes, including typo corrections and clearer examples, are welcome too.

## Development

### Getting started

You’ll need Node.js and npm. Use the latest Node.js LTS release, which is also used by the project’s CI checks.

Fork the [library repository](https://github.com/dice-roller/rpg-dice-roller) and create a branch for your changes.

Choose the base branch that matches your contribution:

* `develop` — fixes and improvements for the current released major version.
* `next` — development of the next major version.

Open your pull request against the branch you started from. If you’re unsure which branch to use, ask in the related issue or discussion.

Install dependencies:

```bash
npm ci
```

Then run the checks:

```bash
npm test
```

This generates the parser, checks TypeScript types, runs linting and formatting checks, and then runs the Jest tests. You do not need to build the library bundles first.

### Finding your way around

| Path | Purpose |
| --- | --- |
| `src/` | TypeScript source code and the public entry point, `src/index.ts`. |
| `src/ast/` | The parsed notation structure and helpers for working with it. |
| `src/parser/` | The notation parser and Peggy grammar. |
| `src/dice/` | Dice definitions and their registry. |
| `src/modifiers/` | Modifier implementations and their registry. |
| `src/evaluator/` | Evaluates parsed notation and applies dice and modifiers. |
| `src/results/` | Result types, flags and helpers. |
| `src/presenters/` | Formats evaluated results for display. |
| `src/random/` | Random number generation. |
| `src/serialization/` | Roll import and export. |
| `tests/` | Automated tests. |
| `dist/` | Generated ESM and UMD bundles and TypeScript declarations. |
| `docs/api/` | Generated API documentation. |

Make changes in the source files rather than editing generated bundles, parser files or API documentation.

### Code style

The project uses ESLint for code checks and Prettier for formatting. Follow the existing code and let these tools handle the formatting details.

Check your changes:

```bash
npm run lint
```

Apply automatic fixes:

```bash
npm run lint:fix
```

You can also run formatting separately:

```bash
npm run format
```

TypeScript type checking is available independently:

```bash
npm run typecheck
```

On a fresh checkout, generate the parser before running type checking directly:

```bash
npm run build:grammars
```

### Tests

Tests use Jest and are written in TypeScript under `tests/`.

Add or update tests when changing behaviour. For a bug fix, include a test that reproduces the problem and verifies the fix.

```bash
# Run all checks and tests
npm test

# Run a particular test file
npm test -- tests/parser/dice.test.ts

# Run tests in watch mode
npm run test:watch

# Generate a coverage report
npm run test:coverage
```

Use descriptive test names and examples that make the expected behaviour clear.

The files under `tests/v5/` are retained as reference material and are excluded from the active test suite.

### Changing the notation grammar

The notation parser is generated using [Peggy](https://github.com/peggyjs/peggy). Its grammar lives in `src/parser/grammar.pegjs`.

If you’re unfamiliar with the syntax, start with the [Peggy documentation](https://peggyjs.org/documentation.html). The [editor extensions wiki](https://github.com/peggyjs/peggy/wiki/Editor-Extensions) lists syntax-highlighting plugins for various editors and IDEs.

After editing the grammar, regenerate the parser:

```bash
npm run build:grammars
```

This writes the generated parser and its declarations into `src/parser/generated/`. Do not edit those generated files directly.

Add parser tests for new or changed syntax, along with evaluation tests where the change affects how rolls behave.

The normal test and build commands regenerate the parser automatically. If you edit the grammar during a watch session, run the grammar command again.

### Building the library

Rollup builds the library into ESM and UMD bundles.

```bash
# Build development and minified production bundles, plus type declarations
npm run build

# Build unminified ESM and UMD bundles
npm run build:dev

# Build minified ESM and UMD bundles
npm run build:prod

# Build TypeScript declarations
npm run build:definitions

# Watch for source changes and rebuild development bundles
npm run watch
```

Generated files are written to `dist/`.

### Documentation

The website guides are maintained in the separate [documentation repository](https://github.com/dice-roller/documentation).

The library’s API reference is generated from its TypeScript source and documentation comments:

```bash
# Generate the API reference
npm run docs:build

# Regenerate it as source files change
npm run docs:watch
```

The generated reference is written to `docs/api/`. Update the source comments rather than editing the generated Markdown.

## Pull requests

Keep each pull request focused on one change where practical.

Include a short explanation of:

* What changed and why.
* Any related issues.
* How you checked the change.

Before submitting, run `npm test`. If your changes affect the build, public types or API documentation, also run the relevant build commands.

Use short, descriptive commit messages such as “Fix exploding dice comparison”.

After opening the pull request, check the CI results. If a check fails and you believe it is unrelated to your changes, explain that in the pull request.

## Use of AI

You’re welcome to use AI tools to help write code, improve documentation, or draft issues and comments. The same contribution guidelines apply whether or not you use AI.

Please review and verify anything you submit. If you’re reporting a bug, check that you can reproduce it. If you’re opening a pull request, make sure you understand the changes, can explain why they’re needed, and have run the relevant tests. Be prepared to answer questions about your contribution.

Maintainers may close or remove spam, irrelevant submissions, or bulk-generated content posted without meaningful review. Accounts that repeatedly post this material or engage in deliberate abuse may be blocked from participating in the project.
