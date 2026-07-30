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
- load generation-scoped naming attribution;
- search supported name fields;
- save the selected primary language;
- expand Pokémon entries and languages in place;
- display Roots, meaning/effect, Notes, entry-owned word tags, naming credit, confidence, comparison, audit metadata, EV yield, and collapsed sources;
- open direct hashes such as `#25`.

### `/guides/index.html`

The compact static Living Dex guide selector.

### `/guides/firered-leafgreen.html`

The FireRed / LeafGreen play companion. It loads local stage data, performs one-time localization preparation, renders one stage at a time, saves state, and responds only to direct user events.

## Names-page data flow

### `data.js`

The historical seed array named `DATA`. It must exist before `generated-data.js` runs and is not the authoritative place for continuing audited batches.

### `generated-data.js`

A committed generated snapshot of all 151 Generation I records. It mutates the existing `DATA` array:

```js
DATA.splice(0, DATA.length, ...records);
```

Loading it before `data.js` causes `DATA is not defined`.

It contains official names, romanization, current PokeAPI types and EV yield, and legacy seed fields. Do not manually store audited etymology, language tags, or naming credits here.

### `scripts/build-data.mjs`

Builds `generated-data.js` from committed PokeAPI CSV sources. These are current canonical values and are not guaranteed to match Generation III.

### `associations.js`

Legacy/fallback native-association text. Audited batch `a` arrays take priority.

### `naming-credits.js`

Generation-scoped historical attribution registry.

It defines:

- `NAMING_CREDIT_DEFAULTS` for Japanese, French, and English Generation I naming workflows;
- `NAMING_CREDIT_OVERRIDES` for exact species or family contributions supported by stronger evidence;
- `namingCreditFor(id, languageKey)` to resolve a disclosure record.

The resolver returns `null` outside National Pokédex #001–#151. Later-generation reference entries must not inherit Generation I defaults.

Credit records contain:

```js
{
  kind: "specific" | "creator" | "lead" | "team" | "unknown",
  people: ["Person Name"],
  organization: "Organization",
  role: "Scope-accurate role",
  detail: "What is and is not documented.",
  source: {label, url}
}
```

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) is authoritative. Attribution is separate from etymology confidence and from the entry-owned language-tag system.

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

Each batch mutates the matching `DATA` object and copies tags:

```js
pokemon.audit = {
  status: research.status,
  reviewedOn: research.reviewedOn,
  associations: research.a,
  sources: research.sources,
  tags: research.tags
};
```

Naming credits are not duplicated into every audit entry. They resolve from `naming-credits.js` at render time.

### Language-tag architecture

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

Core contract:

- tags are authored and reviewed inside the same audited entry as the linguistic claim;
- the renderer never scans Roots or Notes to infer tags;
- `type` selects a renderer definition from `ROOT_TAG_DEFINITIONS`;
- `text` is an exact Roots substring;
- `sourceLanguage` is required for `loanword`;
- optional `occurrence` selects a repeated exact substring;
- language keys currently are `japanese`, `french`, and `english`;
- unsupported types and keys fail validation.

The first type is:

```js
loanword: {label: "loanword"}
```

The visible donor language stays in Roots or Notes rather than the tiny annotation.

### `scripts/validate-language-tags.mjs`

Loads the committed dataset and every audited research overlay in a Node VM. It rejects positional metadata, malformed containers, unsupported keys/types, missing exact targets, invalid occurrences, overlaps, missing donor languages, donor-language prose mismatches, and standardized explicit borrowing claims without authored tags.

### `scripts/validate-naming-credits.mjs`

Loads the dataset and naming registry in a Node VM. It validates:

- all three Generation I defaults;
- supported languages and `kind` values;
- required people, organization, role, detail, and HTTPS source fields;
- override IDs and language keys;
- all 453 Japanese/French/English disclosures across 151 Pokémon;
- the rule that IDs outside Generation I resolve to `null`.

The validator checks data integrity. It does not decide historical truth; source review remains a research responsibility.

### `reference-data.js`

Contains later-generation reference Pokémon required by the guide. They are not included in the visible 151 list unless a direct guide link opens one. Their dropdowns do not show Generation I naming credits.

### `app.js`

Names-page interaction code.

Relevant functions:

- `languageAnalysis()` normalizes historical three-item arrays and possible future named objects;
- `rootsMarkup()` renders authored tags over exact Roots substrings;
- `occurrenceIndex()` locates a requested repeated target;
- `namingCreditMarkup()` renders the resolved static attribution record;
- `renderDetails()` combines audited analysis, tags, and credit within each language disclosure.

Performance expectations:

- one list render at startup;
- rerender only for search, language selection, and direct state changes;
- no background observer, timer, fetch, or post-render annotation/attribution pass;
- delegated click handling where practical.

### CSS

- `styles.css` — shared site and Names-page base
- `research.css` — audited entry and language/source drawer behavior
- `label-fixes.css` — Roots/Notes labels, root tags, and compact naming-credit presentation
- `guides/guide.css` — Living Dex layout
- `guides/guide-links.css` — Pokémon links and starter picker
- `guides/guide-ux-fixes.css` — mobile/touch corrections

The loanword box displays plain `loanword`, without literal brackets, on white with a black border. Naming credit uses a small static inset and one source link; it is not another disclosure or source wall.

## Names-page script order

The order in `index.html` is an architectural contract:

1. `data.js`
2. `generated-data.js`
3. `associations.js`
4. `naming-credits.js`
5. `verified-research.js`
6. remaining `verified-research-*.js` files in numerical order
7. `reference-data.js`
8. `app.js`

`naming-credits.js` must load before `app.js`. Research helper functions must load before batches that call them. Do not reorder these casually.

## Living Dex data flow

### Stage data

- `guides/guide-stages-opening.js`
- `guides/guide-stages-moon.js`
- `guides/guide-stages-cerulean.js`

Stage objects contain stable IDs, labels, headings, optional warnings/pickers, tasks, and optional drawers. Pokémon references inside text use `[[number]]`; `guide.js` turns them into localized Names-page links.

### `guides/guide-i18n.js`

Performs one-time static localization. It still contains dead broken broad-observer code, but the HTML temporarily replaces `window.MutationObserver` with a no-op only while the file executes, then restores the native constructor. The observer therefore never attaches.

Future cleanup must remove the dead observer block and guard together after testing all languages. Removing only the guard would reintroduce the infinite render loop.

### `guides/guide.js`

The deterministic renderer and event handler. It loads/migrates state, renders version/stage/task/progress UI, localizes dynamic labels directly, creates Pokémon links, updates storage after user action, and handles navigation/disclosures. It must not install observers, timers, or polling loops.

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

Language tags and naming credits are static data and create no local-storage state.

## Workflows and deployment

### `.github/workflows/validate.yml`

Runs on pull requests and manual dispatch. It checks the relevant JavaScript files and executes both data validators.

### `.github/workflows/pages.yml`

On `main`, it checks syntax, validates language tags and naming credits, builds Generation I data, uploads the static artifact, and deploys Pages. Validation occurs before publishing.

### `.github/workflows/refresh-data.yml`

Refreshes the committed generated snapshot. The historical 25-entry failure occurred because a complete generated file existed only in a temporary deployment artifact.

## Validation

Before a Names or research PR:

```bash
node --check app.js
node --check naming-credits.js
node --check scripts/build-data.mjs
node --check scripts/validate-language-tags.mjs
node --check scripts/validate-naming-credits.mjs
node scripts/validate-language-tags.mjs
node scripts/validate-naming-credits.mjs
```

Smoke testing must also confirm:

- the list and guide populate;
- entries and language rows expand correctly;
- authored tags sit over the exact token on narrow screens;
- the tag box contains no brackets and does not show donor-language text;
- each Generation I dropdown shows a scope-accurate Name credit;
- pending entries show credit without pretending their etymology is audited;
- later-generation reference entries do not inherit Generation I credit;
- CPU use settles after rendering;
- no observer, timer, runtime fetch, or repeated mutation loop is active;
- state and links still work.

## Architectural decision rule

Prefer the simplest change that can be explained in a few sentences and inspected in plain source. Keep linguistic semantics in audited entry data and historical attribution in its documented static registry, not in renderer heuristics. Do not introduce a build framework to solve a problem that static data and deterministic rendering already handle.
