# Poké Etymology — authoritative project handoff

> **Required starting point for any new GPT, coding agent, or human contributor.** Read this document completely before proposing or making changes. Then read the linked standards. Do not rely on an old chat transcript as the source of truth.

**Snapshot:** 2026-07-30  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Latest merged feature PR before this audit:** #13  
**Generation I name audit:** #001–#081 complete; next normal batch is #082 Magneton through #090 Shellder  
**FireRed / LeafGreen guide:** 14 stages from Pallet Town through Route 5

---

## 1. Startup protocol for a replacement GPT

Before doing any work:

1. Read this file completely.
2. Read, in order:
   - [`PROJECT_GOALS.md`](PROJECT_GOALS.md)
   - [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md)
   - [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md)
   - [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md)
   - [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md)
   - [`DECISION_LOG.md`](DECISION_LOG.md)
   - [`CONTRIBUTING.md`](CONTRIBUTING.md)
3. Inspect current `main`; do not assume this snapshot is still current.
4. Check [issue #5](https://github.com/natanai/poke-etymology/issues/5) for the live Generation I audit checklist.
5. Review the newest merged PRs and any open branch or PR relevant to Nat’s request.
6. Reconcile discrepancies. If this handoff is stale, update it in the same PR as the next substantive change.
7. Make the smallest coherent change that satisfies the current request.

A future chat should be able to begin with:

> “Carefully read `HANDOFF.md`, follow its instructions, and let’s pick up where we left off.”

That instruction is intended to be sufficient.

---

## 2. Owner intent and working context

The project owner is **Nat**. The project began while Nat was playing the **French version of Pokémon FireRed** on Switch 2 and building a living dex.

The site has two linked purposes:

1. explain why Pokémon names work across languages; and
2. act as a clean route-by-route completion companion during a playthrough.

Nat values:

- linguistic nuance;
- meaningful familiar-word examples;
- uncertainty stated honestly;
- citations close to the claims they support;
- a mobile interface that stays out of the way;
- minimal, functional visual structure;
- continuity and documentation that prevents future agents from repeating mistakes.

Nat dislikes:

- generic mission statements;
- explanatory UI clutter;
- fake controls or decorative labels that appear interactive;
- long prose where a compact structure communicates the same thing;
- polished-sounding claims that are not well supported;
- background processes, framework overhead, or visibly slow loading for static text.

When showing multiple Pokémon names in prose or walkthrough material, the established full format is:

**French (English; Japanese kana — romanization)**

The site uses the language selected on the Names page as the primary display language. Japanese display should include romanization where useful.

---

## 3. Non-negotiable product boundaries

Poké Etymology is a **Pokémon language and completion companion**, not a general-purpose Pokédex.

Preserve these boundaries:

- Word and localization research comes first.
- Completion-guide data belongs only where it helps a living-dex playthrough.
- Do not add sprites merely because other Pokémon sites use them.
- Do not reproduce every move, stat, item, ability, or mechanic.
- Keep the site mobile-first and comfortable to use while actively playing.
- Preserve the Generation I visual language: warm cream/paper, black, restrained red, Courier-like typography, hard borders and shadows, and light scanline texture.
- Do not return to a full green Game Boy simulation.
- Do not add fake A/B buttons, movement pads, POWER labels, decorative status readouts, or anything else that looks interactive but is not.
- Every visible control must perform a clear action.
- Prefer removing copy over adding instructions when hierarchy and structure can communicate the function.
- Do not add self-referential development copy such as “data seed,” “prototype,” or mission statements inside the user-facing site.

### Static-first performance requirement

The entire site should feel like **instantaneously loaded raw text**.

Do not add:

- frameworks or client-side hydration;
- runtime API requests for ordinary page content;
- service-worker complexity unless Nat explicitly requests it;
- polling;
- recurring timers;
- persistent or broad `MutationObserver`s;
- animation libraries;
- large images, webfonts, or dependency bundles;
- work that repeats after the initial render without a direct user action.

Acceptable JavaScript is small, deterministic, and event-driven: render local static data once, then respond only to taps, search input, disclosures, language/version selection, and saved checklist changes.

See [`PROJECT_GOALS.md`](PROJECT_GOALS.md), [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md), and [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md).

---

## 4. Current product status

### 4.1 Names and etymology index

The Names page currently provides:

- all 151 Generation I species;
- official English, French, Japanese, and romanized Japanese names;
- current structured types and EV yields;
- in-place expandable Pokémon entries;
- independently expandable Japanese, French, and English analyses;
- roots, meaning, native-language Notes, confidence, localization comparison, audit date, and collapsed source links for audited entries;
- clearly labeled pending research for unaudited entries;
- shared language preference saved in local storage;
- direct hashes such as `/#25`, which expand and scroll to the requested entry.

**Audited at this snapshot:** #001 Bulbasaur through #081 Magnemite.  
**Next normal batch:** #082 Magneton through #090 Shellder.  
**Live tracker:** issue #5.

Research files:

- `verified-research.js` — #001–#009 and shared `sourceSet()` helper
- `verified-research-010-018.js`
- `verified-research-019-027.js`
- `verified-research-028-036.js`
- `verified-research-037-045.js` — also defines `expandedSourceSet()`
- `verified-research-046-054.js`
- `verified-research-055-063.js`
- `verified-research-064-072.js`
- `verified-research-073-081.js`

Completed ranges have corresponding files in `research-batches/` recording important decisions and unresolved readings. The #073–#081 notes preserve unresolved alternatives for Graveler, the Japanese Geodude-family evolutions, Ponyta, Yadon, and Magnemite rather than promoting one convenient theory.

### 4.2 Living Dex guide

The FireRed / LeafGreen guide currently includes 14 stages:

1. Pallet Town and starter choice
2. Route 1 and Oak’s Parcel
3. Pokédex and Route 1 catches
4. Route 22
5. Route 2 and Viridian Forest
6. Pewter Gym
7. Route 3
8. Route 4 West / Mt. Moon entrance
9. Mt. Moon
10. Route 4 exit
11. Cerulean City
12. Routes 24–25
13. Bill and the return
14. Cerulean Gym through Route 5

Current guide behavior:

- FireRed / LeafGreen version switch;
- persistent completion state in local storage;
- exact living-dex catch quantities;
- version-exclusive and variant text;
- encounter rates and level ranges where decision-relevant;
- EV yields and EV-aware warnings where useful;
- optional tasks excluded from required progress;
- starter choice linked to the postgame roaming beast;
- Pokémon names linked back to expanded Names-page entries;
- primary language inherited from the Names page;
- route tabs, headings, proper names, important item/move terminology, navigation labels, and accessibility labels localized for English, French, and Japanese;
- explanations behind compact `+` controls;
- sources in one collapsed drawer.

**Known language limitation:** full explanatory prose is still primarily English. The localization layer handles interface text, stage copy, proper nouns, and important game terminology; it is not a fully reviewed translation of every sentence.

### 4.3 Current guide hotfix state

PR #13 introduced a `MutationObserver` that watched the guide panel and modified text inside the same panel. Its own changes triggered it repeatedly, causing a self-sustaining render loop, `0 / 0`, repeated text, a black/frozen-looking page, and severe performance problems.

The emergency hotfix on `main` now:

- prevents that observer from attaching while the existing localization file performs its one-time static transformations;
- immediately restores the browser’s native `MutationObserver` afterward;
- renders dynamic translated labels directly in `guide.js` during the ordinary render;
- leaves no observer, timer, polling loop, or background process running.

**Technical debt:** `guide-i18n.js` still contains now-disabled observer code. A future cleanup may remove that dead code and the temporary observer guard, but only after preserving all current language behavior and validating the guide. Do not remove the guard before the observer code itself is removed.

### 4.4 Deployment verification

The GitHub connector used in the originating work may not expose push-triggered Pages workflow runs. Future contributors must distinguish:

- **written on a branch**;
- **PR opened**;
- **merged into `main`**;
- **workflow completed**; and
- **live site visibly updated**.

Never claim all of them when only one has been verified.

---

## 5. Research standards that must not be weakened

Each language analysis is a collection of separate claims. Do not give an entire Pokémon one blanket confidence score.

Allowed evidence labels:

- **confirmed** — explicitly stated by an official creator, publication, game, localizer, or other primary source;
- **strong** — linguistically transparent and supported by reliable language references and multiple Pokémon references;
- **plausible** — fits sound, spelling, design, and context, but alternatives remain reasonable;
- **speculative** — normally omit from the published entry.

A good entry distinguishes:

- what the name visibly contains;
- what the proposed components literally mean;
- what a native speaker might readily notice, recognize, or associate with it;
- what is everyday language versus technical, archaic, literary, regional, slang, or borrowed vocabulary;
- what the localization preserved, replaced, or added;
- which readings remain uncertain.

The inset labeled **Notes** is not filler. It should add something the root split does not communicate: familiar examples, register, sound symbolism, ordinary native usage, cultural recognition, or why one proposed root is more or less likely.

Do not force a Notes paragraph when there is no meaningful additional observation. Improve the data model or omit weak content rather than padding the entry.

### Source hierarchy

Prefer:

1. official games, Pokédexes, websites, publications, localizer statements, and creator interviews;
2. official or archival Game Freak material;
3. structured game data such as PokéAPI, checked against another reference where practical;
4. reputable dictionaries, corpora, language institutions, scientific databases, biographies, and cultural reference works;
5. specialist Pokémon references as research leads and secondary summaries;
6. general fan discussion only as a lead requiring stronger verification.

A dictionary establishes meaning and register; it does not by itself prove naming intent. A primary statement may confirm intent but still need a dictionary or cultural reference to explain what the component means to a reader.

See [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md).

---

## 6. Name-audit workflow

For each batch:

1. Work in evolutionary families or another linguistically coherent group.
2. Verify official English, French, and Japanese names and romanization.
3. Verify types and EV yields, remembering the current structured data is not FireRed-version-specific.
4. Use specialist-origin summaries as research leads, not automatic proof.
5. Search for primary or stronger secondary sources for creator statements, vocabulary, history, mythology, science, sound symbolism, and cultural figures.
6. Write each language root, meaning, Notes text, and confidence independently.
7. Preserve competing readings locally where the evidence does not choose between them.
8. Add visible source links with descriptive labels.
9. Record `reviewedOn` using the actual review date.
10. Add `research-batches/<range>-notes.md` documenting important reliability decisions.
11. Load the new batch file in `index.html` after the preceding batch and before `reference-data.js` and `app.js`.
12. Run syntax and completeness checks.
13. Update issue #5 and this handoff’s status in the same work cycle.

Do not mark a range complete merely because polished text exists.

---

## 7. Living Dex guide standards

The guide is an **active play companion**, not a conventional prose walkthrough.

Each stage should contain only information that affects the player’s next decision:

- what to catch now;
- how many copies are needed;
- what can safely wait;
- useful encounter rates and level ranges;
- version differences;
- irreversible, one-way, or one-per-save choices;
- evolution planning;
- trade, breeding, fossil, stone, and postgame requirements;
- useful items or story actions;
- EV consequences when they matter.

Use one current location at a time. Keep explanations collapsed. Avoid throwing percentages into prose without a decision attached to them.

Guide data must be FireRed / LeafGreen specific. Do **not** copy the Names page’s current PokeAPI types or EV values into a historical guide without checking the generation and version.

Preserve task IDs whenever possible so saved progress does not break. If IDs or stage ordering must change, write an explicit local-storage migration.

Every Pokémon reference in task titles, metadata, details, trainer teams, evolution explanations, and choice rows should use `[[Pokédex ID]]` so the guide renders a localized clickable name.

See [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md).

---

## 8. Technical architecture and load-order warnings

Read [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md) before changing scripts.

The most important historical data failure was a broken load order. `generated-data.js` mutates the existing `DATA` array, so `data.js` **must load first**.

Names-page order:

1. `data.js`
2. `generated-data.js`
3. `associations.js` — legacy/fallback association text
4. `verified-research.js`
5. audited `verified-research-*.js` files in numeric order
6. `reference-data.js`
7. `app.js`

Guide order:

1. `data.js`
2. `generated-data.js`
3. `reference-data.js`
4. stage data files
5. temporary observer guard
6. one-time localization preparation
7. restore native observer
8. `guide-copy-overrides.js`
9. `guide.js`
10. `guide-touch.js`

Do not hand-edit `generated-data.js` as research storage. Audited etymology belongs in `verified-research*.js`.

The main structured data currently reflects **current canonical PokeAPI types and EV yields**, not necessarily the exact FireRed / LeafGreen state. The guide must use version-specific research.

The base `verified-research.js` defines `sourceSet()`. `verified-research-037-045.js` defines `expandedSourceSet()`. Later batch files may rely on both and therefore must remain after them in load order.

---

## 9. UX rules learned through iteration

Do not repeat rejected approaches without a specific request.

Rejected or corrected patterns:

- green Game Boy simulation dominating the page;
- fake POWER, A/B, movement, or status controls;
- a generic red/white restaurant-like design;
- long mission or identity copy on the homepage;
- replacing the list with a separate detail screen;
- clicking an entry and scrolling the user to the top;
- opening all language analyses at once;
- a full-screen list of source buttons by default;
- visible English-only “Collapse entry” copy;
- fixed two-column language rows that overlap on narrow screens;
- inline labels such as “Roots:” and “May evoke:” reading as sentence text;
- touch hover/focus states remaining stuck on iOS;
- broad DOM observation for text localization.

Current preferred patterns:

- Pokémon entries expand in place and collapse independently;
- each language expands independently;
- source links are in one collapsed drawer;
- Roots and Notes are small structural labels inside inset areas;
- bottom collapse action is icon-based with an accessibility label;
- touch-specific CSS neutralizes sticky hover while retaining keyboard `:focus-visible`;
- names and guide proper nouns follow the saved primary language;
- no extra copy when spacing, hierarchy, and icons can communicate the structure;
- one deterministic render, then only direct event-driven updates.

See [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md).

---

## 10. Repository and publishing workflow

For substantial work:

1. Inspect current files and branch state.
2. Create `agent/<clear-purpose>` from current `main`.
3. Make small coherent commits.
4. Compare the branch against `main` and inspect changed files.
5. Run syntax and structural validation.
6. Open a descriptive PR explaining scope, reliability decisions, performance impact, and unresolved issues.
7. Merge only after GitHub reports the PR mergeable.
8. Update issue trackers and handoff status.
9. Verify `main` contains the expected files.
10. Verify Pages separately when possible.

Direct edits to `main` are reserved for genuinely small emergency hotfixes. Normal workflow is branch → PR → merge.

---

## 11. Validation checklist

At minimum, relevant work should run:

```bash
node --check app.js
node --check scripts/build-data.mjs
node --check guides/guide.js
node --check guides/guide-i18n.js
node --check guides/guide-copy-overrides.js
node --check guides/guide-touch.js
node --check guides/index-i18n.js
```

Research batches must also verify:

- intended IDs exist exactly once;
- language order is Japanese, French, English;
- audited entries have `status`, `reviewedOn`, `x`, `c`, `a`, and `sources`;
- source labels and URLs are meaningful;
- the file is loaded in `index.html` in numeric order;
- pending entries stay pending;
- issue #5 and this handoff are updated.

Names-page smoke checks:

- 151 visible Generation I records remain available;
- search works across languages;
- audited and pending states remain distinct;
- entries expand in place;
- languages expand independently;
- direct hashes work;
- no mobile text overlap;
- sources remain collapsed.

Guide changes must additionally test:

- horizontal stage navigation;
- text overlap and ghost touch selection;
- saved progress and version variants;
- Pokémon links and language preservation;
- English/French/Japanese route display;
- optional-task counting;
- absence of observers, timers, repeated DOM mutation, or runaway CPU use;
- populated progress rather than `0 / 0`;
- one copy of each task rather than repeated text.

---

## 12. Known technical traps and prior failures

### Only 25 entries appeared live

The repository had a placeholder `generated-data.js`, while the deployment-generated file was temporary. Verify the actual file on `main`, not only a build step.

### Empty Living Dex shell and `0 / 0`

The guide loaded `generated-data.js` before `data.js`. Because the generated script calls `DATA.splice(...)`, JavaScript crashed before rendering. Preserve load order.

### Infinite Living Dex render loop

A broad `MutationObserver` changed text inside the subtree it observed, retriggering itself indefinitely. Do not use an observer for localization or ordinary rendering. Prefer data lookup during the existing render.

### Current data mistaken for FireRed data

PokeAPI’s current type and effort-yield tables may differ from Generation III. Version-specific guide facts require version-specific sources.

### Mobile text overlap

Fixed-width name columns caused “Romanization” and long values to overlap. Use flexible or stacked layouts and safe wrapping.

### Sticky iOS hover/focus

Touch browsers may preserve hover or focus styling. Use `(hover:none)` / `(pointer:coarse)` overrides and blur touch controls after activation without removing keyboard focus-visible behavior.

### Documentation drift

README and methodology became stale as the audit and UI changed. Every substantive PR must update this handoff and affected standards.

### Deployment claims

The connector may not expose push-triggered Pages runs. State exactly what was verified: branch, PR, merge, workflow, or live page.

---

## 13. Current next work

Unless Nat requests another priority:

1. Verify the Living Dex hotfix on the live site after Pages refreshes.
2. Replace the disabled observer code with a clean one-pass localization module only when it can be tested safely; then remove the temporary guard.
3. Audit **#082–#090: Magneton through Shellder**.
4. Continue the FireRed / LeafGreen route beyond Route 5 when requested.
5. Improve full guide-language coverage only with careful translation and review; do not bulk machine-translate it and call it finished.

Scope order remains:

1. excellent Generation I names in Japanese, French, and English;
2. complete FireRed / LeafGreen living-dex route;
3. Red / Blue / Yellow guides;
4. additional languages for polished Kanto data;
5. later regions only after Kanto is trustworthy.

---

## 14. Definition of done for a handoff-safe PR

A PR is not handoff-safe until:

- the change is merged or clearly left as an open PR;
- relevant tests pass;
- reliability and performance decisions are documented;
- unresolved questions are explicit;
- issue trackers are updated;
- this handoff is updated when status, architecture, scope, or next work changes;
- a replacement GPT can determine what happened without reading the old chat.

Treat this document as a living operational record, not optional cleanup.
