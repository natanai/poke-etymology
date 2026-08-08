# Technical architecture

Poké Etymology is a deliberately small static site. Its architecture must remain understandable by reading plain HTML, CSS, JavaScript, and local data files.

## Performance model

The intended experience is effectively **instant raw text**:

- no framework or dependency bundle;
- no runtime fetch for normal page content;
- no hydration;
- no persistent observer, polling, or interval;
- no animation library;
- no image or webfont payload required for core use;
- no repeated computation after initial render unless the user acts.

Static scripts may assemble local records, render deterministically, and respond to direct events.

## Top-level pages

### `/index.html`

The Names and etymology index currently publishes #001–#186: complete Generation I plus the first 35 Generation II species.

Responsibilities:

- load generation-scoped factual records and attribution;
- overlay audited research files;
- search names, numbers, types, regions, and generation aliases;
- filter to published Kanto or Johto records;
- persist the selected primary language;
- expand Pokémon entries and languages in place;
- display Roots, meaning/effect, Notes, word tags, naming credit, confidence, comparison, audit metadata, EV yield, and sources;
- open direct hashes such as `#186`.

### `/guides/firered-leafgreen.html`

The Living Dex play companion currently contains 36 stages through Fuchsia City's pre-Safari fishing setup.

It loads factual data in this order:

1. `data.js`;
2. `generated-data.js`;
3. `generation-ii-data.js`;
4. `reference-data.js`;
5. route and localization files;
6. `guide.js` and touch corrections.

Published Johto species resolve from the same `DATA` used by the Names page. Compact references exist only for later-generation family links that are not yet published.

## Factual data layers

### `data.js`

Defines the historical seed array `DATA`. It must exist before generated or appended layers run.

### `generated-data.js`

Committed generated snapshot of Generation I #001–#151. It replaces the seed contents and contains official names, romanization, current types, EV yields, and legacy fields. Do not store audited etymology, tags, or attribution here.

### `generation-ii-data.js`

Append-only static factual layer for Generation II, currently #152–#186:

```js
for (const record of GENERATION_II_DATA) {
  if (!DATA.some(item => item.d === record.d)) DATA.push(record);
}
DATA.sort((a, b) => a.d - b.d);
```

Each record is individually verified. The repository convention is current official types and current EV yields, not emulation of Generation II mechanics.

Do not widen `scripts/build-data.mjs` in a way that can overwrite this layer without a documented migration.

### `reference-data.js`

Contains compact later-generation records needed by the guide before they are published in the Names dataset. When a species becomes published, remove its compact duplicate.

Promotion examples:

- Crobat moved into `DATA` in #161–#169;
- Cleffa and Igglybuff moved into `DATA` in #170–#178;
- Bellossom and Politoed moved into `DATA` in #179–#186.

Current compact references: Espeon, Umbreon, Slowking, Steelix, Scizor, Kingdra, Porygon2, Raikou, Entei, and Suicune.

## Audited research overlays

`verified-research.js` defines shared helpers. Numbered `verified-research-*.js` files load in Pokédex order and currently extend through `verified-research-179-186.js`. `verified-research-name-effect-fixes.js` remains the final Generation I semantic-correction overlay.

Each audited entry generally contains:

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
      {type: "loanword", text: "...", sourceLanguage: "English"}
    ]
  },
  c: "Localization comparison",
  a: [japaneseNotes, frenchNotes, englishNotes],
  sources: [{label, url}, ...]
}
```

Language order is Japanese, French, English. Every overlay mutates the matching `DATA` object and copies audit metadata and tags into `pokemon.audit`.

## Meaning/effect invariant

[`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md) is authoritative.

Meaning/effect explains what the name says or does linguistically. Notes explain why it fits the Pokémon. `scripts/validate-name-effects.mjs` assembles the final runtime data, checks recurrent leakage patterns, and verifies a SHA-256 digest across every `(ID, language, Roots, meaning/effect)` row.

Current baseline:

- 186 Pokémon;
- 558 language rows;
- audited through #186;
- digest `7a935aa45c9fb9d76526dc1261c541229b4bb60748225ab1e9f319fa4b0d127c`.

## Language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

- tags are authored inside each audited entry;
- the renderer never infers them;
- `text` must be an exact Roots substring;
- `sourceLanguage` is required for `loanword`;
- optional `occurrence` selects repeated exact text;
- supported language keys are `japanese`, `french`, and `english`.

Current dataset: **144 tags across 115 language analyses**.

An unresolved donor language must not receive a falsely precise tag. Secondary roots may be tagged only when the displayed Roots actually present borrowed material and the donor language is supportable.

## Naming credits

### `naming-credits.js`

Generation I defaults and exact overrides for #001–#151.

### `naming-credits-generation-ii.js`

Generation II defaults and overrides for #152–#251. It wraps the Generation I resolver rather than widening Generation I scope.

Generation II defaults cover:

- Game Freak Japanese naming staff;
- Nintendo France's first-251 localization context;
- the credited Gold/Silver US localization coordinators.

Exact Generation II English overrides currently include Jeff Kalles for **Quilava** and **Xatu**. The #179–#186 batch adds no exact-person override; etymology explanations are not treated as automatic authorship evidence.

Every resolved record contains:

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

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) is authoritative.

## Region search and filtering

`region-filter.js` defines National Pokédex ranges and aliases:

- Kanto #001–#151;
- Johto #152–#251.

Only regions represented in `DATA` appear in the selector. Search documents add region and generation aliases such as `johto`, `generation ii`, and `gen 2`.

The selector and text query are cumulative. Only genuinely reference-only direct links may bypass a filtered published list.

`scripts/validate-region-filter.mjs` derives:

- the published Johto ID list;
- combined Johto/type expectations from assembled `DATA`;
- selector/search compatibility.

Do not restore fixed arrays tied to one batch endpoint.

## Validators

### `scripts/validate-language-tags.mjs`

Rejects malformed tag containers, unsupported languages/types, missing targets, overlaps, donor-language mismatches, and explicit borrowing claims without authored tags.

### `scripts/validate-name-effects.mjs`

Enforces three complete rows per audited entry, recurrent leakage checks, reviewed counts, maximum ID, SHA-256 baseline, and the exact PR attestation.

### `scripts/validate-naming-credits.mjs`

Validates generation defaults/overrides, complete record fields, every published disclosure, contiguous IDs through the assembled maximum, Generation II coverage through #251, and null resolution outside supported generations.

### `scripts/report-name-effects.mjs`

Prints stable final Roots and meaning/effect rows for manual review. It is not a semantic substitute.

### `guides/validate-guide.mjs`

Loads Generation I facts, published Generation II facts, compact references, and all route-stage files. It currently enforces:

- exactly 36 stages;
- unique stage and task IDs;
- supported task groups;
- valid Pokémon tokens;
- required factual, route, localization, renderer, and touch scripts;
- architectural script order;
- no compact reference that duplicates a published `DATA` record.

The guide validator must pass when shared factual/reference layers change, even when no guide content file changes.

## Renderer and script order

`app.js` performs deterministic rendering and direct-event updates. `region-filter.js` adds direct search/select handlers after `app.js` loads. Neither script uses observers, polling, runtime fetching, or semantic inference.

Names-page order:

1. `data.js`
2. `generated-data.js`
3. `generation-ii-data.js`
4. `associations.js`
5. `naming-credits.js`
6. `naming-credits-generation-ii.js`
7. `verified-research.js`
8. numbered research overlays
9. `verified-research-name-effect-fixes.js`
10. `reference-data.js`
11. `app.js`
12. `region-filter.js`

Do not reorder these casually.

## Living Dex architecture

The guide uses local stage files, one-time localization preparation, deterministic rendering, persistent local progress, and direct events.

Current route composition:

- opening, Mt. Moon, and Cerulean;
- Vermilion and Lt. Surge;
- Route 9 through Route 16;
- Game Corner through Pokémon Tower;
- Route 12 through Fuchsia City's pre-Safari fishing setup.

New stages append while preserving previous stage indices and task IDs. Published Pokémon links resolve from `DATA`; unpublished family links resolve from `REFERENCE_POKEMON`.

The historical self-triggering `MutationObserver` remains disabled by a temporary guard. Remove the dead observer and guard together only after full language testing. Do not replace it with polling, timers, or another observer.

## Local storage

Names language key:

```text
poke-etymology-language
```

FireRed / LeafGreen guide key:

```text
poke-etymology-frlg-guide-v2
```

Research, tags, region metadata, baselines, attribution, and guide content are static repository data and add no browser storage.

## Workflows

### `.github/workflows/validate.yml`

Runs syntax plus region-filter, language-tag, name-effect, and naming-credit validation on ready pull requests.

### `.github/workflows/validate-guide.yml`

Runs guide syntax and structure checks for:

- `guides/**` changes;
- `data.js`;
- `generated-data.js`;
- `generation-ii-data.js`;
- `reference-data.js`;
- its own workflow file.

This cross-feature trigger prevents published-data promotion from silently breaking guide links.

### `.github/workflows/pages.yml`

Before publishing from `main`, repeats validation, rebuilds only the Generation I snapshot, and uploads the complete static repository.

### `.github/workflows/refresh-data.yml`

Refreshes Generation I only. It must not overwrite `generation-ii-data.js`.

## Validation commands

```bash
node --check app.js
node --check region-filter.js
node --check generation-ii-data.js
node --check naming-credits.js
node --check naming-credits-generation-ii.js
for file in verified-research*.js; do node --check "$file"; done
node scripts/validate-region-filter.mjs
node scripts/validate-language-tags.mjs
node scripts/validate-name-effects.mjs
node scripts/validate-naming-credits.mjs
for file in guides/*.js guides/*.mjs; do node --check "$file"; done
node guides/validate-guide.mjs
```

Smoke testing must confirm:

- all published records populate and search across languages;
- region and type combinations return assembled data;
- entries, language rows, direct hashes, and reference-only guide links work;
- tags target exact tokens;
- every published disclosure resolves a credit;
- the semantic baseline covers every audited row;
- the guide loads Generation II before references and renders 36 stages;
- CPU use settles after rendering;
- saved guide state and links still work.

## Architectural decision rule

Prefer the smallest static change inspectable in plain source. Keep linguistic semantics in audited entry data, factual generations in bounded layers, and historical attribution in generation-scoped registries. Do not introduce renderer heuristics or a build framework where static data and deterministic validation are sufficient.
