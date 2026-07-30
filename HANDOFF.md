# Poké Etymology — authoritative project handoff

> **Required starting point for any new GPT, coding agent, or human contributor.** Read this document completely before proposing or making changes. Then read the linked standards. Do not rely on an old chat transcript as the source of truth.

**Snapshot:** 2026-07-30  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Generation I name audit:** #001–#108 complete; next normal batch is #109 Koffing through #117 Seadra  
**FireRed / LeafGreen guide:** 14 stages from Pallet Town through Route 5

---

## 1. Startup protocol

Before doing any work:

1. Read this file completely.
2. Read, in order:
   - [`PROJECT_GOALS.md`](PROJECT_GOALS.md)
   - [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md)
   - [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md)
   - [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md)
   - [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md)
   - [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md)
   - [`DECISION_LOG.md`](DECISION_LOG.md)
   - [`CONTRIBUTING.md`](CONTRIBUTING.md)
3. Inspect current `main`; do not assume this snapshot is still current.
4. Check issue #5 for the live Generation I audit checklist.
5. Review the newest merged PRs and any relevant open branch or PR.
6. Reconcile discrepancies and update this handoff whenever status, architecture, scope, next work, known risks, research rules, tag schema, or established UX behavior changes.
7. Make the smallest coherent change that satisfies the request.

A future conversation should be able to begin with:

> “Carefully read `HANDOFF.md`, follow its instructions, and let’s pick up where we left off.”

---

## 2. Owner intent and project identity

The project owner is **Nat**. The project began while Nat was playing the **French version of Pokémon FireRed** on Switch 2 and building a living dex.

The site has two linked purposes:

1. explain why Pokémon names work across languages; and
2. act as a clean route-by-route completion companion during a playthrough.

Nat values linguistic nuance, useful familiar-word examples, uncertainty stated honestly, citations close to claims, restrained mobile UX, and documentation that lets future contributors continue safely.

Nat dislikes generic mission copy, explanatory clutter, fake controls, long prose where compact structure works, polished claims without support, and background processing for static text.

When showing multiple names in prose, use:

**French (English; Japanese kana — romanization)**

---

## 3. Product and performance boundaries

Poké Etymology is a **Pokémon language and completion companion**, not a general-purpose Pokédex.

Preserve these boundaries:

- Word and localization research comes first.
- Completion-guide data belongs only where it helps a living-dex playthrough.
- Do not add sprites merely because other Pokémon sites use them.
- Do not reproduce every move, stat, item, ability, or mechanic.
- Keep the site mobile-first and comfortable during active play.
- Preserve the Generation I visual language: warm cream/paper, black, restrained red, Courier-like typography, hard borders and shadows, and light scanline texture.
- Do not return to a full green Game Boy simulation.
- Do not add fake A/B buttons, movement pads, POWER labels, decorative status readouts, or anything that looks interactive but is not.
- Every visible control must perform a clear action.
- Prefer hierarchy and spacing over extra instructions.

The site should feel like **instantaneously loaded raw text**.

Do not add frameworks, hydration, runtime content requests, polling, recurring timers, persistent or broad `MutationObserver`s, animation libraries, large images, webfonts, dependency bundles, or work that repeats after initial render without direct user action.

Acceptable JavaScript is small, deterministic, and event-driven.

---

## 4. Current product status

### 4.1 Names and etymology index

The Names page provides:

- all 151 Generation I species;
- official English, French, Japanese, and romanized Japanese names;
- current structured types and EV yields;
- in-place expandable Pokémon entries;
- independently expandable Japanese, French, and English analyses;
- Roots, meaning/effect, native-language Notes, confidence, entry-owned word tags, localization comparison, audit date, and collapsed source links;
- clearly labeled pending research for unaudited entries;
- shared language preference saved in local storage;
- direct hashes such as `/#25`.

**Audited at this snapshot:** #001 Bulbasaur through #108 Lickitung.  
**Next normal batch:** #109 Koffing through #117 Seadra.  
**Live tracker:** issue #5.

Research files:

- `verified-research.js` — #001–#009 and `sourceSet()`
- `verified-research-010-018.js`
- `verified-research-019-027.js`
- `verified-research-028-036.js`
- `verified-research-037-045.js` — also defines `expandedSourceSet()`
- `verified-research-046-054.js`
- `verified-research-055-063.js`
- `verified-research-064-072.js`
- `verified-research-073-081.js`
- `verified-research-082-090.js`
- `verified-research-091-099.js`
- `verified-research-100-108.js`

Completed ranges have decision records in `research-batches/`.

Important #091–#108 decisions remain documented in `research-batches/091-108-notes.md`, including unresolved readings for Gengar, Iwark, Kingler, Nassy, Sawamular, Ebiwalar, and Beroringa.

### 4.2 Entry-owned language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

The current supported type is `loanword`. Its visible treatment is a small white, black-bordered box containing plain lowercase `loanword`, centered directly above the exact tagged Roots token.

The box does not contain literal brackets and does not display the donor language. The donor language and explanation stay in Roots or Notes.

Tags are authored inside the same audited entry as the linguistic claim:

```js
tags: {
  japanese: [
    {type:"loanword",text:"ディグ",sourceLanguage:"English"}
  ]
}
```

Non-negotiable rules:

- tags belong to an exact Roots component, never to the Roots panel as a whole;
- use named receiving-language keys: `japanese`, `french`, `english`;
- `text` must exactly match the displayed Roots substring;
- `sourceLanguage` is required for `loanword` and must be explained in Roots or Notes;
- optional `occurrence` selects a repeated exact substring;
- multiple components may each receive their own tag;
- do not store tags in a fourth `x` array item;
- do not maintain a separate global tag map;
- `app.js` renders authored tags only and performs no borrowing inference;
- if lexical status, donor language, or exact boundary is uncertain, defer the tag rather than guess;
- do not automatically tag proper names, international scientific terms, learned roots, historical cognates, or English components in the English analysis;
- a new tag type or language requires schema, renderer, validator, UX, architecture, and documentation updates together.

All audited entries through #108 were reviewed during the migration. Secure lexical borrowings were moved into the entry-owned schema, including the previously missing Japanese Diglett component `ディグ`.

### 4.3 Tag validation and workflows

`scripts/validate-language-tags.mjs` loads the committed dataset and all audited overlays, then rejects:

- the retired `loanwords` shortcut;
- fourth-item language-row metadata;
- malformed tag containers;
- unsupported language keys or tag types;
- absent target text or invalid occurrence values;
- duplicates and overlaps;
- missing donor language;
- donor language not named in Roots or Notes;
- standardized explicit borrowing claims with no authored loanword tag.

Run:

```bash
node --check app.js
node --check scripts/validate-language-tags.mjs
node scripts/validate-language-tags.mjs
```

`.github/workflows/validate.yml` runs this on pull requests. `.github/workflows/pages.yml` runs it again before Pages deployment.

The validator may identify missing entry data from standardized explicit wording, but the runtime renderer never infers or adds a tag.

### 4.4 Living Dex guide

The FireRed / LeafGreen guide includes 14 stages from Pallet Town through Route 5, with version switching, persistent completion state, exact living-dex quantities, decision-relevant encounter information, optional-task handling, starter-dependent roaming beasts, localized linked Pokémon names, compact task disclosures, and one collapsed source drawer.

**Known language limitation:** full explanatory prose remains primarily English. Interface text, stage copy, proper nouns, and important terminology have controlled English/French/Japanese localization.

### 4.5 Guide hotfix state

PR #13 introduced a self-triggering `MutationObserver` render loop. The emergency hotfix prevents the observer from attaching, restores the browser constructor, renders dynamic labels directly, and leaves no background observer, timer, polling loop, or repeated mutation process.

Issue #14 tracks a clean one-pass replacement. Do not remove the temporary guard before the dead observer code is removed and all language behavior is tested.

---

## 5. Research standards

Each language analysis is a collection of separate claims. Do not give an entire Pokémon one blanket confidence score.

Allowed labels:

- **confirmed** — explicitly stated by an official creator, publication, game, localizer, or other primary source;
- **strong** — linguistically transparent and supported by reliable references;
- **plausible** — fits spelling, sound, design, and context, but alternatives remain reasonable;
- **speculative** — normally omit.

Distinguish what the name visibly contains, literal component meanings, native-speaker associations, register, borrowed vocabulary, localization choices, and unresolved alternatives.

Notes must add real native-language context, register, sound symbolism, familiar examples, cultural recognition, borrowing explanation, or relative-likelihood reasoning. Do not pad them.

A tag is a scan aid and structured claim reference, not evidence by itself. Prose, confidence, and sources must still support it.

Prefer sources in this order:

1. official games, Pokédexes, websites, publications, localizer statements, and creator interviews;
2. official or archival Game Freak material;
3. structured game data checked against another reference;
4. reputable dictionaries, corpora, institutions, scientific databases, biographies, and cultural references;
5. specialist Pokémon references as research leads;
6. general fan discussion only as a lead requiring stronger verification.

A dictionary establishes meaning and register; it does not prove naming intent.

Use [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md) and [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md).

---

## 6. Name-audit workflow

For each batch:

1. Work in evolutionary families or another linguistically coherent group.
2. Verify official English, French, and Japanese names and romanization.
3. Verify factual records while remembering current structured data is not FireRed-specific.
4. Use specialist summaries as leads, not proof.
5. Seek stronger sources for people, mythology, science, sound symbolism, borrowing, and localization intent.
6. Write each language’s Roots, meaning/effect, Notes, and confidence independently.
7. Identify supported borrowed components and author their tags inside the entry.
8. Preserve competing readings where evidence does not choose.
9. Add visible, descriptively labeled sources.
10. Record the actual review date.
11. Add `research-batches/<range>-notes.md`.
12. Load new files in numerical order before `reference-data.js` and `app.js`.
13. Run syntax, structure, and language-tag validation.
14. Update issue #5 and this handoff in the same work cycle.

Reliability matters more than reaching a round number.

---

## 7. Technical architecture and load order

`generated-data.js` mutates the existing `DATA` array. Therefore `data.js` **must load first**.

Names-page order:

1. `data.js`
2. `generated-data.js`
3. `associations.js`
4. `verified-research.js`
5. audited `verified-research-*.js` files in numerical order
6. `reference-data.js`
7. `app.js`

Do not hand-edit `generated-data.js` as research storage. Later research files may rely on `sourceSet()` and `expandedSourceSet()`.

Every research overlay that has tags must copy `tags: research.tags` into `pokemon.audit`.

`app.js` defines controlled tag labels in `ROOT_TAG_DEFINITIONS` and renders only the exact entry-provided ranges. It must not scan prose or mutate the DOM after render to discover linguistic features.

Current PokeAPI types and EV yields are not guaranteed to match Generation III. The guide requires game- and version-specific research.

Use [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md).

---

## 8. UX rules

Preserve:

- in-place entry expansion and scroll position;
- independent language disclosures;
- one collapsed source drawer;
- structural Roots and Notes labels;
- small noninteractive word tags centered over exact Roots components;
- plain `loanword` label with a white background and black border;
- no literal brackets or donor language inside the tiny box;
- shared `+` / `−` disclosure grammar;
- safe mobile wrapping;
- touch-specific ghost-hover correction while retaining keyboard focus;
- one deterministic render followed only by direct events.

Do not reintroduce Roots-wide loanword banners, runtime tag inference, fake controls, separate detail pages, all-languages-open behavior, fixed overlapping columns, visible source-button walls, or broad DOM observation.

Use [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md).

---

## 9. Repository workflow and validation

Normal workflow:

1. inspect current `main`;
2. create `agent/<purpose>`;
3. make coherent commits;
4. compare against `main`;
5. validate;
6. open a descriptive PR;
7. merge only after GitHub reports it mergeable and required checks pass;
8. update trackers and handoff;
9. verify `main`;
10. verify Pages separately when possible.

Research batches must verify exact intended IDs, language order, required fields, targeted sources, explicit uncertainty, numerical script order, syntax, issue #5, and handoff status.

For language-tag work additionally verify:

- each tag is stored inside the correct audited entry;
- each named language key matches the analyzed row;
- each exact target occurs in Roots at the requested occurrence;
- tags do not overlap;
- loanword donor language is named in Roots or Notes;
- explicit standardized borrowing claims are not left untagged;
- uncertain foreign material remains untagged;
- the visible box contains plain `loanword`, no brackets, and no donor language;
- source and Notes text remain escaped;
- no observer, timer, storage key, extra render pass, or repeated background work is introduced;
- `node scripts/validate-language-tags.mjs` and the PR workflow pass.

Be precise about branch, PR, merge, workflow, Pages deployment, and live visual verification as separate facts.

---

## 10. Known technical traps

- **Only 25 entries appeared live:** the complete generated file once existed only as a deployment artifact.
- **`0 / 0` guide:** `generated-data.js` ran before `data.js`.
- **Infinite render loop:** a broad observer modified the subtree it observed.
- **Current data mistaken for FireRed data:** current canonical values can differ from Generation III.
- **Mobile overlap:** fixed-width columns collided with long names and romanization.
- **Sticky touch state:** use touch-specific overrides without removing keyboard focus.
- **Roots-wide loanword label:** a section label obscures which exact word is borrowed.
- **Runtime language inference:** prose parsing misses valid cases and can misread examples, alternatives, and negation; tags belong in entry data.
- **Positional tag metadata:** the retired fourth language-row item hides meaning and fails validation.
- **Documentation drift:** update the schema and every relevant standard together.
- **Deployment claims:** never equate merge with Pages deployment.

---

## 11. Current next work

Unless Nat requests another priority:

1. Audit **#109–#117: Koffing through Seadra**, authoring entry-owned language tags during research.
2. Continue the FireRed / LeafGreen route beyond Route 5 when requested.
3. Replace the disabled guide observer code only as one fully tested cleanup.
4. Improve full guide-language coverage only through controlled, reviewed translation.

Scope order remains excellent Generation I names, a complete FireRed / LeafGreen living-dex route, Red/Blue/Yellow guides, additional languages for polished Kanto data, then later regions.

---

## 12. Definition of done

A PR is not handoff-safe until:

- the change is merged or clearly left as an open PR;
- relevant tests and workflows pass;
- reliability and performance decisions are documented;
- unresolved questions are explicit;
- issue trackers are updated when applicable;
- authoritative schemas and standards are current;
- this handoff is current;
- a replacement contributor can determine what happened without reading the old chat.
