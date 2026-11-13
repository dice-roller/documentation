[@dice-roller/rpg-dice-roller](../../../../index.md) / [results](../index.md) / RESULT\_FLAGS

# Type Alias: RESULT\_FLAGS

> **RESULT\_FLAGS** = readonly \[`"explode"`, `"compound"`, `"penetrate"`, `"re-roll"`, `"re-roll-once"`, `"drop"`, `"max"`, `"min"`, `"target-success"`, `"target-failure"`, `"critical-success"`, `"critical-failure"`, `"unique"`, `"unique-once"`\]

Defined in: [src/results/flags.ts:6](https://github.com/dice-roller/rpg-dice-roller/blob/next/src/results/flags.ts#L6)

Semantic flags recording what happened to a die or group member.

Presenters decide how to show them (e.g. `TextPresenter` maps `explode` to `!`).
