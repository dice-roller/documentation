# Data converter <Badge text="New in v6" vertical="middle"/>

The [RPG Dice Roller Convertor](https://github.com/dice-roller/convertor) converts exported rolls and histories between data schema versions without rolling the dice again.

Use it to migrate saved v5 exports to v6, change the encoding of an export, or convert an individual roll between the full and concise formats.

The converter is a separate package from RPG Dice Roller. You don't need to install it if you're only working with rolls exported by the current version of the library.


## Convert data online

Use the [online data converter](https://dice-roller.github.io/tools-website/converter/) to convert data without writing any code.

* Paste a JSON or Base64 export, or upload a file.
* Leave the source version and input encoding on automatic detection, or choose them explicitly.
* Select the target version, output format and encoding, then select **Convert data**.
* Copy or download the converted data.

The available target versions and output formats depend on the source data. Conversion takes place entirely in your browser; your roll data isn't uploaded.


## Install

To convert data in your own JavaScript or TypeScript application, install the package using npm:

```bash
npm install @dice-roller/convertor
```

The package uses ES modules and includes TypeScript definitions.


## Convert an export

Pass the exported data and the destination schema version to `convert()`. It accepts a JavaScript object, a JSON string or a Base64-encoded export, and detects the source version and encoding automatically.

```javascript
import { convert } from '@dice-roller/convertor';

const converted = convert(savedData, 1);
```

Here, `savedData` is an existing export and `1` is the data schema version introduced in RPG Dice Roller v6.

By default, the converted data is a full-format JavaScript object. You can import it into RPG Dice Roller without rolling again.

### Import the converted data

An individual roll can be restored using `Roll.import()`, while a history can be imported into a `Roller`:

```javascript
import { Roll, Roller } from '@dice-roller/rpg-dice-roller';

if (converted.type === 'roll') {
  const restored = Roll.import(converted);
  console.log(restored.total);
} else {
  const roller = new Roller();
  roller.import(converted);
  console.log(roller.history.rolls.length);
}
```

See [Importing and exporting](../usage/importing-and-exporting.md) for more about the resulting data and import methods.

### Detect the source version

If you need to identify the schema before converting, use `detectVersion()`:

```javascript
import { detectVersion } from '@dice-roller/convertor';

const version = detectVersion(savedData);
```

This identifies the version from the export structure, not the dice notation. It can detect a future numbered schema even if the converter doesn't support converting it yet. Detection alone doesn't validate all of the roll data.

When you already know that the data is a v5 export, use `fromLegacy()`:

```javascript
import { fromLegacy } from '@dice-roller/convertor';

const converted = fromLegacy(savedData, 1);
```

This is equivalent to `convert(savedData, 1, { from: 'legacy' })`.


## Data versions

Data versions describe the structure of an export, rather than the package version of RPG Dice Roller.

| Version | Description |
| --- | --- |
| `'legacy'` | Unversioned exports from v5. |
| `1` | The export schema introduced in v6. |
| `'latest'` | The highest numbered schema supported by the installed converter. Destination only. |

You can convert legacy data to schema `1`, or convert data within its existing schema, for example to change its encoding. Converting schema `1` back to legacy isn't supported.

Use an explicit destination version when migrating stored data so that upgrading the converter doesn't unexpectedly change the destination schema. Use `'latest'` when you want to opt in to the latest supported version.


## Conversion options

Both `convert()` and `fromLegacy()` accept an optional third argument:

```javascript
const converted = convert(savedData, 1, {
  from: 'legacy',
  format: 'full',
  encoding: 'json',
  strict: true,
});
```

| Option | Default | Description |
| --- | --- | --- |
| `from` | Automatic | Expected source schema. Must match the detected version. Only available on `convert()`. |
| `format` | `'full'` | Structure of the converted results: `'full'` or `'concise'`. |
| `encoding` | `'object'` | Representation of the output: `'object'`, `'json'` or `'base64'`. |
| `strict` | `true` | Reject ambiguous or inconsistent data rather than accepting a best-effort result. |
| `onWarning` | | Callback for recoverable issues in best-effort mode. |

### Output formats

Full output retains the finished results, including modifier effects, order and historical statistics. It's the default and is supported for individual rolls and histories.

Concise output stores the notation and finished dice results in a more compact form. It retains scoring, modifier flags and group order, but not the historical minimum, maximum or average totals. These statistics are calculated on import.

```javascript
import { convert } from '@dice-roller/convertor';
import { Roll } from '@dice-roller/rpg-dice-roller';

const concise = convert(savedRoll, 1, { format: 'concise' });
const restored = Roll.import(concise);
```

You can use this with either a legacy or a v6 individual roll.

::: warning Concise output
Concise output is only supported for individual rolls in schema `1`, not entire histories. Some rolls that depend on unavailable application data or custom dice factories cannot be represented in this format.
:::

See [Importing concise results](../usage/importing-and-exporting.md#importing-concise-results) for the structure of concise data.

### Output encodings

The encoding is independent of the output format and the source encoding.

```javascript
const asObject = convert(savedData, 1);
const asJson = convert(savedData, 1, { encoding: 'json' });
const asBase64 = convert(savedData, 1, { encoding: 'base64' });
```

Use an object to work with the data directly, or JSON or Base64 when you need a string to store or transport it.

Versioned Base64 exports use UTF-8. When producing legacy Base64 output, the converter escapes non-ASCII characters in the JSON to remain compatible with v5's decoding.


## Best-effort conversion

Some v5 exports don't contain enough information to determine a unique result tree. For example, sorting the results of `{d6,d8}sa` may lose the relationship between the stored results and their original positions in the notation.

By default, the converter throws an error for ambiguous or inconsistent data.

Set `strict: false` to accept recoverable issues and use `onWarning` to inspect them:

```javascript
const converted = convert(savedData, 1, {
  strict: false,
  onWarning(warning) {
    console.warn(warning.code, warning.path, warning.message);
  },
});
```

A warning includes a code, a description of the issue and a path identifying the affected data.

Best-effort conversion can select a deterministic compatible assignment for ambiguous group members, or replace inconsistent stored totals with reconstructed totals. It cannot recover missing dice or unknown flags, or repair data whose structure cannot be matched to the notation.

::: warning Migrating saved data
Keep a backup of the original exports, and review any warnings before replacing your stored data. Use strict conversion where possible.
:::

### Handling errors

Conversion can still fail in best-effort mode. The package exports a base `ConversionError` class, along with more specific errors for invalid input, version detection, unsupported versions and formats, conversion paths and output encoding.

```javascript
import { convert, ConversionError } from '@dice-roller/convertor';

try {
  const converted = convert(savedData, 1);
  // Store or import the converted data.
} catch (error) {
  if (error instanceof ConversionError) {
    console.error(error.message);
  } else {
    throw error;
  }
}
```


## Discover supported conversions

If you're building your own conversion interface, use the package's runtime metadata instead of hard-coding the supported versions, formats and encodings:

```javascript
import {
  getSupportedVersions,
  getSupportedTargetVersions,
  getSupportedFormats,
  supportedEncodings,
} from '@dice-roller/convertor';

getSupportedVersions();                      // ['legacy', 1]
getSupportedTargetVersions('legacy');        // ['legacy', 1]
getSupportedTargetVersions(1);               // [1]
getSupportedFormats('latest');               // ['full', 'concise']
supportedEncodings;                          // ['object', 'json', 'base64']
```

Calling `getSupportedTargetVersions()` without a source returns all registered schemas. Providing a source restricts the list to reachable destinations, including the source itself. The `'latest'` alias can be offered separately.

The supported formats describe the destination schema, not the validity of a particular export. For example, schema `1` supports concise results, but a history cannot be converted to concise output.


## Compatibility and limitations

The converter supports the built-in v5 dice, modifiers, mathematical expressions, roll groups and histories.

There are some limitations when migrating legacy exports:

* Full output preserves the finished die values, initial and calculation values, inclusion flags, semantic modifier flags, ordering and historical statistics. Legacy formatted output text isn't stored in v6; use [presenters](../customisation/presenters.md) to display the converted results.
* Intermediate draws from compound explosions or re-rolls cannot be recovered if they weren't recorded in the original export.
* Legacy parameter expressions that v5 coerced to different values, such as fractional quantities, may be rejected rather than changing the original notation.
* Non-finite totals stored as `null` can only be recovered when the expression determines their value. Unrecoverable statistics and non-finite group member score overrides are rejected.

See [Migrating from v5 to v6](../migration.md) for the other changes involved in upgrading an application.
