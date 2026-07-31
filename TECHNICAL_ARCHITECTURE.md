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

The Names and etymology index currently publishes #001–#160: complete Generation I plus the first Generation II starter-family batch.

Responsibilities:

- load generation-scoped factual records;
- overlay audited research files;
- load generation-scoped naming attribution;
- search all supported name fields;
- save the selected primary language;
- expand Pokémon entries and languages in place;
- display Roots, meaning/effect, Notes, entry-owned word tags, naming credit, confidence, comparison, audit metadata, EV yield, and collapsed sources;
- open direct hashes such as `#156`.

### `/guides/index.html`

The compact Living Dex guide selector.

### `/guides/firered-leafgreen.html`

The FireRed / LeafGreen play companion. Guide development proceeds independently from name-research batches. Name batches should avoid `guides/` unless a cross-feature change is genuinely required.

## Names-page data flow

### `data.js`

The historical seed array named `DATA`. It must exist before any generated or appended data script runs.

### `generated-data.js`

A committed generated snapshot of all 151 Generation I records. It replaces the historical seed contents:

```js
DATA.splice(0, DATA.length, ...records);
```

It contains official names, romanization, current PokeAPI types and EV yields, and legacy seed fields. Do not manually store audited etymology, language tags, or naming credits here.

### `generation-ii-data.js`

The append-only static Generation II factual layer. It currently contains #152–#160 and runs after `generated-data.js`:

```js
for (const record of GENERATION_II_DATA) {
  if (!DATA.some(item => item.d === record.d)) DATA.push(record);
}
DATA.sort((a, b) => a.d - b.d);
```

This pilot architecture deliberately avoids widening the Generation I network-backed build script. Future Johto batches extend this file with researched factual records. Do not add unreviewed etymology to it.

### `scripts/build-data.mjs`

Builds only the Generation I snapshot in `generated-data.js` from PokeAPI CSV data. These current canonical values are not guaranteed to match Generation III.

A future unified builder may replace the split, but only through a documented migration that cannot overwrite audited Generation II work.

### `associations.js`

Legacy/fallback native-association text. Audited batch `a` arrays take priority.

## Naming credits

### `naming-credits.js`

Generation I attribution defaults and exact overrides. Its resolver owns #001–#151.

### `naming-credits-generation-ii.js`

Generation II attribution defaults and exact overrides. It wraps the Generation I resolver and owns #152–#251.

Current Generation II defaults are separately researched for:

- Japanese Game Freak naming staff;
- the Nintendo France first-251 localization context;
- the credited Pokémon Gold and Silver US localization coordinators.

English Quilava has a specific Jeff Kalles override. Later generations must receive their own bounded registry rather than widening an earlier default.

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

## Audited research overlays

### `verified-research*.js`

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
      {type: "loanword", text: "ディグ", sourceLanguage: "English"}
    ]
  },
  c: "Localization comparison",
  a: [japaneseNotes, frenchNotes, englishNotes],
  sources: [{label, url}, ...]
}
```

Language order in `x` and `a` is Japanese, French, English. Tags use named language keys.

- `verified-research.js` defines `sourceSet()`.
- `verified-research-037-045.js` defines `expandedSourceSet()`.
- numbered files load in Pokédex order.
- `verified-research-name-effect-fixes.js` remains the final Generation I semantic-correction overlay.

Every research overlay mutates the matching `DATA` object and copies tags into `pokemon.audit`.

### Meaning/effect invariant

[`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md) is authoritative.

Meaning/effect explains what the name says or does linguistically. Notes explain why it fits the Pokémon. `scripts/validate-name-effects.mjs` assembles all published generations, checks recurrent leakage patterns, and verifies a SHA-256 baseline over every audited `(ID, language, Roots, meaning/effect)` row.

The current baseline covers 160 Pokémon and 480 language rows.

### Language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

- tags are authored inside the audited entry;
- the renderer never infers them from prose;
- `text` is an exact Roots substring;
- `sourceLanguage` is required for `loanword`;
- optional `occurrence` selects repeated text;
- supported keys are `japanese`, `french`, and `english`.

## Validators

### `scripts/validate-language-tags.mjs`

Loads Generation I, Generation II, and every research overlay in a Node VM. It rejects malformed containers, unsupported keys/types, missing targets, overlaps, donor-language mismatches, and standardized borrowing claims without authored tags.

### `scripts/validate-name-effects.mjs`

Loads the final assembled runtime research and enforces:

- three complete language rows for every audited entry;
- the Roots-only semantic rule;
- recurrent leakage-pattern checks;
- the reviewed row count and maximum ID;
- the SHA-256 baseline;
- the exact pull-request attestation when research data changes.

### `scripts/validate-naming-credits.mjs`

Loads both generation registries and validates:

- defaults and overrides for each generation;
- supported languages and credit kinds;
- required people, organization, role, detail, and HTTPS source fields;
- every published disclosure through #160;
- Generation II default coverage through #251;
- null resolution outside supported generations.

### `scripts/report-name-effects.mjs`

Prints stable tab-separated final Roots and meaning/effect rows across the assembled dataset. It is a review aid, not a substitute for semantic review.

## Reference data

`reference-data.js` contains later-generation Pokémon needed by guide links before they are published in the main Names dataset. `ALL_POKEMON` searches `DATA` first, so a newly published record supersedes its earlier reference-only copy automatically.

## Names renderer

`app.js` performs one deterministic render and direct-event updates.

Relevant functions:

- `languageAnalysis()` normalizes research rows;
- `rootsMarkup()` renders authored tags;
- `namingCreditMarkup()` renders the generation-scoped attribution;
- `renderDetails()` combines research, Notes, tags, credits, facts, and sources.

No background observer, timer, fetch, semantic inference, tag inference, or attribution inference belongs in the renderer.

## Names-page script order

The order in `index.html` is an architectural contract:

1. `data.js`
2. `generated-data.js`
3. `generation-ii-data.js`
4. `associations.js`
5. `naming-credits.js`
6. `naming-credits-generation-ii.js`
7. `verified-research.js`
8. numbered `verified-research-*.js` files in numerical order
9. `verified-research-name-effect-fixes.js`
10. `reference-data.js`
11. `app.js`

Do not reorder these casually. Research helpers must load before dependent batches, factual records before overlays, and attribution registries before rendering.

## Living Dex architecture

The guide uses local stage files, one-time localization preparation, deterministic rendering, persistent local progress, and direct events.

The historical self-triggering `MutationObserver` is still disabled by a temporary guard. Remove the dead observer and guard together only after full language testing; removing the guard alone reintroduces the render loop.

Guide changes should preserve stable task IDs and migrate saved state when schema or ordering changes.

## Local storage

Names language key:

```text
poke-etymology-language
```

FireRed / LeafGreen guide key:

```text
poke-etymology-frlg-guide-v2
```

Language tags, meaning-effect baselines, and naming credits are static repository data and create no browser storage.

## Workflows and deployment

### `.github/workflows/validate.yml`

Pull-request validation checks syntax for generation-specific data and attribution files, then runs language-tag, name-effect, and naming-credit validation.

### `.github/workflows/pages.yml`

Before publishing from `main`, Pages repeats the same validation, rebuilds the Generation I factual snapshot, and uploads the complete static repository—including the separate Generation II layer.

### `.github/workflows/refresh-data.yml`

Refreshes the committed Generation I generated snapshot. It must not overwrite `generation-ii-data.js`.

## Validation commands

```bash
node --check app.js
node --check generation-ii-data.js
node --check naming-credits.js
node --check naming-credits-generation-ii.js
for file in verified-research*.js; do node --check "$file"; done
node --check scripts/validate-language-tags.mjs
node --check scripts/validate-name-effects.mjs
node --check scripts/validate-naming-credits.mjs
node scripts/validate-language-tags.mjs
node scripts/validate-name-effects.mjs
node scripts/validate-naming-credits.mjs
```

Smoke testing must confirm:

- all published records populate and search across languages;
- entries and language rows expand correctly;
- direct hashes work for Generation I, published Generation II, and reference-only guide links;
- authored tags sit over the exact intended tokens;
- every published disclosure shows a scope-accurate Name credit;
- the semantic baseline covers every audited row;
- CPU use settles after rendering;
- guide state and links still work.

## Architectural decision rule

Prefer the smallest static change that can be inspected in plain source. Keep linguistic semantics in audited entry data, factual generations in bounded local layers, and historical attribution in generation-scoped registries. Do not introduce renderer heuristics or a build framework to solve a problem that static data and deterministic validation already handle.
