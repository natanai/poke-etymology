# Technical architecture

This is a deliberately small static site. The architecture should remain understandable by opening the repository and reading plain HTML, CSS, and JavaScript.

## Performance model

The desired experience is effectively **instant raw text**:

- no framework;
- no dependency bundle;
- no runtime fetch for normal page content;
- no hydration;
- no persistent observer;
- no polling or interval;
- no animation library;
- no image payload required for core use;
- no webfont download;
- no repeated computation after the initial render unless the user acts.

A small number of static script files is acceptable. They should parse local data, render once, and then respond to direct events.

## Top-level pages

### `/index.html`

The Generation I Names and etymology index.

Responsibilities:

- load the 151-record species dataset;
- overlay audited research files;
- search in all supported name fields;
- save the selected primary language;
- expand Pokémon entries in place;
- expand each language independently;
- display audit metadata, EV yield, localization comparison, and collapsed sources;
- open a direct hash such as `#25` and scroll to that entry.

### `/guides/index.html`

The Living Dex guide selector.

Responsibilities:

- inherit the saved primary language;
- link to the FireRed / LeafGreen guide;
- remain compact and static.

### `/guides/firered-leafgreen.html`

The FireRed / LeafGreen play companion.

Responsibilities:

- load all local stage data;
- perform one-time localization preparation;
- render one stage at a time;
- save version, stage, starter, and checklist state in local storage;
- handle only direct user events after rendering.

## Names-page data flow

### `data.js`

The historical seed array named `DATA`.

Important:

- It must exist before `generated-data.js` runs.
- It is not the authoritative place for the continuing audited batches.
- Do not delete it unless the generated-data architecture is deliberately redesigned.

### `generated-data.js`

A committed generated snapshot of all 151 Generation I records.

It begins by mutating the already-created `DATA` array:

```js
DATA.splice(0, DATA.length, ...records);
```

Therefore, loading it before `data.js` causes a fatal `DATA is not defined` error.

It contains:

- National Pokédex ID;
- English name;
- French name;
- Japanese name;
- romanization;
- current PokeAPI types;
- current PokeAPI EV yield;
- legacy seed etymology fields when present.

Do not manually store new audited research here.

### `scripts/build-data.mjs`

Builds `generated-data.js` from PokeAPI CSV sources.

Current source tables:

- `pokemon_species_names.csv`
- `pokemon_stats.csv`
- `pokemon_types.csv`
- `type_names.csv`

Important limitation: these are current canonical values, not guaranteed Generation III values.

### `associations.js`

Legacy/fallback native-association text. New audited batches normally provide their own `a` arrays, which take priority.

Do not expand this file as the primary research store unless the data architecture is intentionally normalized.

### `verified-research*.js`

Audited research overlays.

Each entry generally contains:

```js
{
  status: "audited",
  reviewedOn: "YYYY-MM-DD",
  x: [
    [japaneseRoots, japaneseMeaning, japaneseConfidence],
    [frenchRoots, frenchMeaning, frenchConfidence],
    [englishRoots, englishMeaning, englishConfidence]
  ],
  c: "Localization comparison",
  a: [japaneseNotes, frenchNotes, englishNotes],
  sources: [{label, url}, ...]
}
```

Language order is always:

1. Japanese
2. French
3. English

The base `verified-research.js` also defines `sourceSet()`. Later batch files assume it already exists.

Each batch file mutates the matching object in `DATA`, setting `pokemon.x`, `pokemon.c`, `pokemon.reviewed`, and `pokemon.audit`.

### `reference-data.js`

Contains later-generation reference Pokémon required by the FireRed / LeafGreen completion guide, such as baby forms, later evolutions, and roaming beasts.

These records are not included in the visible 151-entry Generation I list unless a direct guide link opens one.

### `app.js`

Names-page interaction code.

Performance expectations:

- one list render at startup;
- rerender only for search, language selection, and direct state changes;
- no background observer or timer;
- delegated click handling rather than one listener per row where practical.

## Names-page script order

The order in `index.html` is a contract:

1. `data.js`
2. `generated-data.js`
3. `associations.js`
4. `verified-research.js`
5. remaining `verified-research-*.js` files in numerical order
6. `reference-data.js`
7. `app.js`

Do not reorder these casually.

## Living Dex data flow

### Stage data files

- `guides/guide-stages-opening.js`
- `guides/guide-stages-moon.js`
- `guides/guide-stages-cerulean.js`

They define arrays of stage objects. A stage has:

```js
{
  id,
  tab,
  title,
  subtitle,
  warning?,
  starterPicker?,
  tasks: [...],
  drawer?
}
```

A task has:

```js
{
  id,
  group: "Catch" | "Story" | "Items",
  title,
  meta,
  detail?,
  optional?,
  variants?: {
    fr: {...},
    lg: {...}
  }
}
```

Pokémon references inside text use `[[number]]`. `guide.js` converts them into localized links to the Names page.

### `guides/guide-i18n.js`

Performs one-time static localization of stage headings, proper nouns, major items, moves, and page-level UI.

Current emergency state:

- the file still contains a broken broad `MutationObserver` block;
- `firered-leafgreen.html` temporarily replaces `window.MutationObserver` with a no-op only while this script executes;
- the native browser constructor is restored immediately afterward;
- therefore the observer never attaches and there is no ongoing process.

Future cleanup goal:

1. remove the observer and `translateRenderedControls()` block from `guide-i18n.js`;
2. retain the one-time stage/static-copy work;
3. confirm `guide.js` still renders all dynamic labels directly;
4. remove the temporary guard from the HTML;
5. test all three languages and mobile behavior.

Do not remove only the guard. That would reintroduce the infinite render loop.

### `guides/guide-copy-overrides.js`

Small one-time corrections that need grammar or number-aware wording beyond the generic terminology replacement, such as plural Moon Stones and one-use tutor wording.

Prefer folding durable copy into the stage data or future normalized translation data rather than allowing this file to grow indefinitely.

### `guides/guide.js`

The deterministic renderer and event handler.

Responsibilities:

- load and migrate saved state;
- render version buttons, stage tabs, current stage, tasks, and progress;
- render dynamic language labels directly;
- translate Pokémon ID tokens into links;
- update local storage after direct user actions;
- expand/collapse task details;
- move between stages.

It must not install observers, timers, or polling loops.

### `guides/guide-touch.js`

Clears touch or pen focus after activation to prevent iOS sticky focus/hover appearance. It is event-driven and does no background work.

### Guide script order

Current order:

1. `../data.js`
2. `../generated-data.js`
3. `../reference-data.js`
4. stage data files
5. temporary observer guard
6. `guide-i18n.js`
7. restore native observer
8. `guide-copy-overrides.js`
9. `guide.js`
10. `guide-touch.js`

## Local storage

### Names language

Key:

```text
poke-etymology-language
```

Values:

- `e`
- `f`
- `j`

Both Names and Living Dex pages use this key.

### FireRed / LeafGreen guide

Current key:

```text
poke-etymology-frlg-guide-v2
```

Legacy key:

```text
poke-etymology-frlg-guide-v1
```

Saved fields:

- `version`
- `stage`
- `starter`
- `checks.fr`
- `checks.lg`

Preserve task IDs and stage meaning. If the schema or ordering changes, increment the storage version and write a migration.

## CSS structure

- `styles.css` — shared site and Names-page base
- `audit-styles.css` — audited entry and language/source drawer behavior
- `label-fixes.css` — small Roots/Notes structural labels
- `guides/guide.css` — Living Dex layout
- `guides/guide-links.css` — Pokémon links and starter picker
- `guides/guide-ux-fixes.css` — mobile/touch corrections

Avoid piling on many tiny override files indefinitely. When a section stabilizes, consolidate related rules carefully while preserving cache busting and load order.

## Deployment

### `.github/workflows/pages.yml`

Builds data, checks JavaScript syntax, uploads the repository as a static Pages artifact, and deploys it.

The workflow currently fetches PokeAPI data during deployment. A network failure there can fail the build even though the committed static snapshot exists. Any future reliability improvement should preserve the ability to deploy a known-good committed dataset when upstream data is unavailable.

### `.github/workflows/refresh-data.yml`

Refreshes the committed `generated-data.js` snapshot so the repository—not only a temporary Pages artifact—contains all 151 records.

The original 25-entry failure happened because the generated file was only temporary. Never assume a generated artifact exists in `main` without checking.

## Validation

The Pages workflow runs syntax checks. Contributors should still validate before PR merge:

```bash
node --check app.js
node --check scripts/build-data.mjs
node --check guides/guide.js
node --check guides/guide-i18n.js
node --check guides/guide-copy-overrides.js
node --check guides/guide-touch.js
node --check guides/index-i18n.js
```

Syntax checks do not catch DOM feedback loops. Manual or automated smoke testing must also confirm:

- guide progress is populated;
- tasks appear once;
- CPU use settles after initial render;
- no text duplicates continuously;
- no observer or timer remains active;
- stage and version actions work;
- saved progress persists.

## Architectural decision rule

Prefer the simplest change that can be explained in a few sentences and inspected in plain source. Do not introduce a build framework to solve a problem that can be handled by static data and a deterministic render.