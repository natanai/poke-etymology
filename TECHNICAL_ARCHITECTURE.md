# Technical architecture

This is a deliberately small static site. The architecture should remain understandable by opening the repository and reading plain HTML, CSS, JavaScript, and local data files.

## Performance model

The desired experience is effectively **instant raw text**:

- no framework or dependency bundle;
- no runtime fetch for normal page content;
- no hydration;
- no persistent observer;
- no polling or interval;
- no animation library;
- no image or webfont payload required for core use;
- no repeated computation after the initial render unless the user acts.

A small number of static scripts is acceptable. They parse local data, render deterministically, and respond to direct events.

## Top-level pages

### `/index.html`

The Generation I Names and etymology index.

Responsibilities:

- load the 151-record species dataset;
- overlay audited research files;
- search supported name fields;
- save the selected primary language;
- expand Pokémon entries and languages in place;
- display Roots, meaning/effect, Notes, entry-owned word tags, confidence, comparison, audit metadata, EV yield, and collapsed sources;
- open direct hashes such as `#25`.

### `/guides/index.html`

The compact static Living Dex guide selector.

### `/guides/firered-leafgreen.html`

The FireRed / LeafGreen play companion. It loads local stage data, performs one-time localization preparation, renders one stage at a time, saves state, and responds only to direct user events.

## Names-page data flow

### `data.js`

The historical seed array named `DATA`.

- It must exist before `generated-data.js` runs.
- It is not the authoritative place for continuing audited batches.
- Do not delete it unless the generated-data architecture is deliberately redesigned.

### `generated-data.js`

A committed generated snapshot of all 151 Generation I records. It mutates the existing `DATA` array:

```js
DATA.splice(0, DATA.length, ...records);
```

Loading it before `data.js` causes `DATA is not defined`.

It contains official names, romanization, current PokeAPI types and EV yield, and legacy seed fields. Do not manually store audited etymology or language tags here.

### `scripts/build-data.mjs`

Builds `generated-data.js` from the committed PokeAPI CSV sources. These are current canonical values and are not guaranteed to match Generation III.

### `associations.js`

Legacy/fallback native-association text. Audited batch `a` arrays take priority. Do not expand this as the primary research store unless the architecture is intentionally normalized.

### `verified-research*.js`

Audited research overlays. Each entry generally contains:

```js
{
  status: "audited",
  reviewedOn: "YYYY-MM-DD",
  x: [
    [japaneseRoots, japaneseMeaning, japaneseConfidence],
    [frenchRoots, frenchMeaning, frenchConfidence],
    [englishRoots, englishMeaning, englishConfidence]
  ],
  tags: {
    japanese: [
      {type: "loanword", text: "ディグ", sourceLanguage: "English"}
    ]
  },
  c: "Localization comparison",
  a: [japaneseNotes, frenchNotes, englishNotes],
  sources: [{label, url}, ...]
}
```

Language order in `x` and `a` is always Japanese, French, English. `tags` uses named keys instead of positional indexes.

The base `verified-research.js` defines `sourceSet()`. `verified-research-037-045.js` defines `expandedSourceSet()`. Later files may rely on both.

Each batch mutates the matching `DATA` object and must copy its tag data:

```js
pokemon.audit = {
  status: research.status,
  reviewedOn: research.reviewedOn,
  associations: research.a,
  sources: research.sources,
  tags: research.tags
};
```

Do not store tags in a fourth `x` row item. Do not create a separate global tag map.

### Language-tag architecture

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is the authoritative schema.

Core contract:

- tags are authored and reviewed inside the same audited entry as the linguistic claim;
- the renderer never scans Roots or Notes to infer tags;
- `type` selects a renderer definition from `ROOT_TAG_DEFINITIONS`;
- `text` is an exact Roots substring;
- `sourceLanguage` is research metadata required for `loanword`;
- optional `occurrence` selects a repeated exact substring;
- language keys currently are `japanese`, `french`, and `english`;
- unsupported types and keys fail validation;
- adding another tag type or language requires coordinated schema, renderer, validator, UX, and documentation changes.

The first type is:

```js
loanword: {label: "loanword"}
```

The visible donor language stays in Roots or Notes rather than the tiny annotation.

### `scripts/validate-language-tags.mjs`

Loads the committed dataset and every audited research overlay in a Node VM, then validates the rendered data contract.

It rejects:

- the retired `loanwords` shortcut;
- fourth-item language-row metadata;
- malformed tag containers;
- unsupported language keys and tag types;
- empty or absent target text;
- invalid occurrences;
- duplicate or overlapping tags;
- loanword tags without `sourceLanguage`;
- donor languages not named in Roots or Notes;
- standardized explicit borrowing claims with no authored loanword tag.

It is intentionally validation, not runtime inference. It prevents incomplete entries from merging while leaving the interface entirely data-driven.

### `reference-data.js`

Contains later-generation reference Pokémon required by the guide. They are not included in the visible 151 list unless a direct guide link opens one.

### `app.js`

Names-page interaction code.

Relevant functions:

- `languageAnalysis()` normalizes historical three-item arrays and possible future named objects;
- `rootsMarkup()` renders authored tags over exact Roots substrings;
- `occurrenceIndex()` locates a requested repeated target;
- `renderDetails()` selects the tags stored under the current language key.

Performance expectations:

- one list render at startup;
- rerender only for search, language selection, and direct state changes;
- no background observer, timer, fetch, or post-render annotation pass;
- delegated click handling where practical.

### `label-fixes.css`

Contains the small Roots/Notes labels and generic root-tag layout:

- `.root-tagged-term`
- `.root-tag`
- `.root-tag-token`

The current loanword box displays plain `loanword`, without literal brackets, on white with a black border. Styling is generic enough for a future approved tag type but should remain restrained.

## Names-page script order

The order in `index.html` is an architectural contract:

1. `data.js`
2. `generated-data.js`
3. `associations.js`
4. `verified-research.js`
5. remaining `verified-research-*.js` files in numerical order
6. `reference-data.js`
7. `app.js`

Do not reorder these casually.

## Living Dex data flow

### Stage data

- `guides/guide-stages-opening.js`
- `guides/guide-stages-moon.js`
- `guides/guide-stages-cerulean.js`

Stage objects contain IDs, labels, headings, optional warnings/pickers, tasks, and optional drawers. Task objects contain stable IDs, groups, title/meta/detail content, optional state, and version variants.

Pokémon references inside text use `[[number]]`; `guide.js` turns them into localized Names-page links.

### `guides/guide-i18n.js`

Performs one-time static localization. It still contains dead broken broad-observer code, but the HTML temporarily replaces `window.MutationObserver` with a no-op only while the file executes, then restores the native constructor. The observer therefore never attaches.

Future cleanup must remove the dead observer block and guard together after testing all languages. Removing only the guard would reintroduce the infinite render loop.

### `guides/guide-copy-overrides.js`

Small one-time grammar or number-aware corrections. Prefer durable stage or normalized translation data rather than indefinite growth.

### `guides/guide.js`

The deterministic renderer and event handler. It loads/migrates state, renders version/stage/task/progress UI, localizes dynamic labels directly, creates Pokémon links, updates storage after user action, and handles navigation/disclosures. It must not install observers, timers, or polling loops.

### `guides/guide-touch.js`

Clears touch/pen focus after activation to avoid sticky iOS states. It is event-driven.

### Guide script order

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

Names language key:

```text
poke-etymology-language
```

Values: `e`, `f`, `j`.

FireRed / LeafGreen current guide key:

```text
poke-etymology-frlg-guide-v2
```

Legacy key: `poke-etymology-frlg-guide-v1`.

Saved fields include version, stage, starter, and per-version checks. Preserve task IDs and stage meaning; increment the storage version and write a migration when schema or ordering changes.

Language tags are static research data and create no local-storage state.

## CSS structure

- `styles.css` — shared site and Names-page base
- `audit-styles.css` — audited entry and language/source drawer behavior
- `label-fixes.css` — Roots/Notes labels and root tags
- `guides/guide.css` — Living Dex layout
- `guides/guide-links.css` — Pokémon links and starter picker
- `guides/guide-ux-fixes.css` — mobile/touch corrections

Avoid piling on tiny override files indefinitely. Consolidate stable related rules carefully.

## Workflows and deployment

### `.github/workflows/validate.yml`

Runs on pull requests and manual dispatch. It checks `app.js`, checks the validator’s syntax, and executes `node scripts/validate-language-tags.mjs`.

### `.github/workflows/pages.yml`

On `main`, it checks syntax, validates language tags, builds Generation I data, uploads the static artifact, and deploys Pages. Validation occurs before publishing.

The build currently uses PokeAPI source data. A future resilience improvement should preserve deployment from a known-good committed snapshot when upstream data is unavailable.

### `.github/workflows/refresh-data.yml`

Refreshes the committed generated snapshot. The historical 25-entry failure occurred because a complete generated file existed only in a temporary deployment artifact.

## Validation

Before a Names or research PR:

```bash
node --check app.js
node --check scripts/build-data.mjs
node --check scripts/validate-language-tags.mjs
node scripts/validate-language-tags.mjs
```

Run relevant guide syntax checks for guide changes.

Syntax and schema checks do not catch every visual or runtime issue. Smoke testing must also confirm:

- the list and guide populate;
- entries and language rows expand correctly;
- authored tags sit over the exact token on narrow screens;
- the tag box contains no brackets and does not show donor-language text;
- CPU use settles after rendering;
- no observer, timer, fetch, or repeated mutation loop is active;
- state and links still work.

## Architectural decision rule

Prefer the simplest change that can be explained in a few sentences and inspected in plain source. Keep linguistic semantics in audited entry data, not in renderer heuristics. Do not introduce a build framework to solve a problem that static data and deterministic rendering already handle.
