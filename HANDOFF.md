# Poké Etymology — authoritative project handoff

> **Required starting point for any new GPT, coding agent, or human contributor.** Read this document completely before proposing or making changes. Then read the linked standards. Do not rely on an old chat transcript as the source of truth.

**Snapshot:** 2026-07-30  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Generation I name audit:** #001–#090 complete; next normal batch is #091 Cloyster through #099 Kingler  
**FireRed / LeafGreen guide:** 14 stages from Pallet Town through Route 5

---

## 1. Startup protocol

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
6. Reconcile discrepancies. Update this handoff in the same PR whenever status, architecture, scope, next work, or a meaningful reliability decision changes.
7. Make the smallest coherent change that satisfies the current request.

A future conversation should be able to begin with:

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
- continuity and documentation that prevents future contributors from repeating mistakes.

Nat dislikes:

- generic mission statements;
- explanatory UI clutter;
- fake controls or decorative labels that appear interactive;
- long prose where compact structure communicates the same thing;
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
- polling or recurring timers;
- persistent or broad `MutationObserver`s;
- animation libraries;
- large images, webfonts, or dependency bundles;
- work that repeats after the initial render without a direct user action.

Acceptable JavaScript is small, deterministic, and event-driven: render local static data once, then respond only to taps, search input, disclosures, language/version selection, and saved checklist changes.

---

## 4. Current product status

### 4.1 Names and etymology index

The Names page currently provides:

- all 151 Generation I species;
- official English, French, Japanese, and romanized Japanese names;
- current structured types and EV yields;
- in-place expandable Pokémon entries;
- independently expandable Japanese, French, and English analyses;
- Roots, meaning/effect, native-language Notes, local confidence, localization comparison, audit date, and collapsed source links for audited entries;
- clearly labeled pending research for unaudited entries;
- shared language preference saved in local storage;
- direct hashes such as `/#25`, which expand and scroll to the requested entry.

**Audited at this snapshot:** #001 Bulbasaur through #090 Shellder.  
**Next normal batch:** #091 Cloyster through #099 Kingler.  
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
- `verified-research-082-090.js`

Completed ranges have corresponding decision records in `research-batches/`.

The #082–#090 notes preserve these important decisions:

- Rarecoil securely contains *rare + coil*, while the narrower rare-earth-magnet reading remains secondary.
- Kamonegi invokes the full duck-carrying-a-scallion proverb, not merely two food nouns.
- Canarticho’s artichoke substitution is documented as deliberately absurd by French localizer Julien Bardakoff.
- Dodorio permits overlapping Japanese readings through `鳥` (*tori*, bird) and `トリオ` (*torio*, trio).
- Betbeter is grounded in ordinary sticky mimetic vocabulary; the unrelated yōkai theory is omitted.
- Betbeton’s final `-ton` remains unresolved instead of being presented as a definite Japanese suffix.
- French Otaria, Lamantine, Tadmorv, Grotadmorv, and Kokiyas use documented localizer explanations where available.

### 4.2 Living Dex guide

The FireRed / LeafGreen guide includes 14 stages:

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
- Pokémon names linked back to expanded Names entries;
- primary language inherited from the Names page;
- route tabs, headings, proper names, important item/move terminology, navigation labels, and accessibility labels localized for English, French, and Japanese;
- explanations behind compact `+` controls;
- sources in one collapsed drawer.

**Known language limitation:** full explanatory prose is still primarily English. The localization layer handles interface text, stage copy, proper nouns, and important game terminology; it is not a fully reviewed translation of every sentence.

### 4.3 Guide hotfix state

PR #13 introduced a `MutationObserver` that watched the guide panel and modified text inside the same panel. Its own changes retriggered it repeatedly, causing a render loop, `0 / 0`, repeated text, a frozen-looking page, and severe performance problems.

The emergency hotfix on `main`:

- prevents that observer from attaching while the existing localization file performs one-time static transformations;
- immediately restores the browser’s native `MutationObserver` afterward;
- renders dynamic translated labels directly in `guide.js`;
- leaves no observer, timer, polling loop, or background process running.

**Technical debt:** `guide-i18n.js` still contains disabled observer code. Issue #14 tracks a clean one-pass replacement. Do not remove the temporary guard before the observer code itself is removed and all language behavior is tested.

### 4.4 Deployment honesty

The connector may not expose every push-triggered Pages workflow. Always distinguish:

- written on a branch;
- PR opened;
- merged into `main`;
- workflow completed;
- live site visibly updated.

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

The inset labeled **Notes** is not filler. It should add familiar examples, register, sound symbolism, ordinary native usage, cultural recognition, or an explanation of why one proposed root is more or less likely. Do not force a Notes paragraph when there is no meaningful additional observation.

### Source hierarchy

Prefer:

1. official games, Pokédexes, websites, publications, localizer statements, and creator interviews;
2. official or archival Game Freak material;
3. structured game data such as PokéAPI, checked against another reference where practical;
4. reputable dictionaries, corpora, language institutions, scientific databases, biographies, and cultural reference works;
5. specialist Pokémon references as research leads and secondary summaries;
6. general fan discussion only as a lead requiring stronger verification.

A dictionary establishes meaning and register; it does not by itself prove naming intent. A primary statement may confirm intent but still need a dictionary or cultural reference to explain what the component means.

Use [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md).

---

## 6. Name-audit workflow

For each batch:

1. Work in evolutionary families or another linguistically coherent group.
2. Verify official English, French, and Japanese names and romanization.
3. Verify types and EV yields, remembering the current structured data is not FireRed-version-specific.
4. Use specialist-origin summaries as research leads, not automatic proof.
5. Search for primary or stronger secondary sources for creator statements, vocabulary, history, mythology, science, sound symbolism, and cultural figures.
6. Write each language’s Roots, meaning/effect, Notes, and confidence independently.
7. Preserve competing readings locally where the evidence does not choose between them.
8. Add visible source links with descriptive labels.
9. Record `reviewedOn` using the actual review date.
10. Add `research-batches/<range>-notes.md` documenting important reliability decisions.
11. Load the new batch file in `index.html` after the preceding batch and before `reference-data.js` and `app.js`.
12. Run syntax and completeness checks.
13. Update issue #5 and this handoff in the same work cycle.

Do not mark a range complete merely because polished text exists.

---

## 7. Living Dex guide standards

The guide is an **active play companion**, not a conventional prose walkthrough.

Each stage should contain only information that affects the player’s next decision:

- what to catch now and how many copies are needed;
- what can safely wait;
- useful encounter rates and level ranges;
- version differences;
- irreversible, one-way, or one-per-save choices;
- evolution, trade, breeding, fossil, stone, and postgame planning;
- useful items or story actions;
- EV consequences when they matter.

Use one current location at a time. Keep explanations collapsed. Avoid percentages without a decision attached to them.

Guide data must be FireRed / LeafGreen specific. Do **not** copy the Names page’s current PokeAPI types or EV values into a historical guide without checking the generation and version.

Preserve task IDs whenever possible so saved progress does not break. Every Pokémon reference in guide text should use `[[Pokédex ID]]` so the renderer supplies the localized linked name.

Use [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md).

---

## 8. Technical architecture and load-order warnings

Read [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md) before changing scripts.

The most important historical data failure was broken load order. `generated-data.js` mutates the existing `DATA` array, so `data.js` **must load first**.

Names-page order:

1. `data.js`
2. `generated-data.js`
3. `associations.js`
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

The base `verified-research.js` defines `sourceSet()`. `verified-research-037-045.js` defines `expandedSourceSet()`. Later files may rely on both and must remain after them.

The Names index’s structured data reflects current canonical PokeAPI types and EV yields, not necessarily exact FireRed / LeafGreen values. The guide requires version-specific research.

---

## 9. UX rules learned through iteration

Rejected or corrected patterns:

- a dominant green Game Boy simulation;
- fake POWER, A/B, movement, or status controls;
- generic red/white restaurant-like styling;
- long mission or identity copy on the homepage;
- replacing the list with a separate detail screen;
- scrolling the user to the top after opening an entry;
- opening all language analyses at once;
- a full visible source list by default;
- visible English-only collapse copy;
- fixed language columns that overlap on narrow screens;
- sentence-like inline `Roots:` and `May evoke:` labels;
- sticky iOS hover/focus states;
- broad DOM observation for localization.

Current preferred patterns:

- entries expand in place and preserve scroll position;
- languages expand independently;
- sources remain in one collapsed drawer;
- Roots and Notes use small structural labels;
- collapse actions use the shared `+` / `−` grammar and accessible labels;
- touch-specific CSS neutralizes ghost hover while keyboard `:focus-visible` remains;
- names and guide proper nouns follow the saved primary language;
- one deterministic render followed only by direct event-driven updates.

Use [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md).

---

## 10. Repository workflow

For substantial work:

1. Inspect current files and branch state.
2. Create `agent/<clear-purpose>` from current `main`.
3. Make small coherent commits.
4. Compare the branch against `main` and inspect changed files.
5. Run syntax and structural validation.
6. Open a descriptive PR explaining scope, reliability decisions, performance impact, data safety, and unresolved issues.
7. Merge only after GitHub reports the PR mergeable.
8. Update issue trackers and handoff status.
9. Verify `main` contains the expected files.
10. Verify Pages separately when possible.

Direct edits to `main` are reserved for genuinely small emergency hotfixes.

---

## 11. Validation checklist

Research batches must verify:

- every intended ID exists exactly once;
- no unintended ID is overwritten;
- language order remains Japanese, French, English;
- every entry has `status`, `reviewedOn`, three-language `x`, comparison `c`, three-language Notes `a`, and `sources`;
- source labels and URLs are meaningful;
- the file is loaded in `index.html` in numeric order;
- pending entries stay pending;
- issue #5 and this handoff are updated;
- `node --check` passes for the new JavaScript.

Names-page smoke checks:

- 151 visible Generation I records remain available;
- search works across languages;
- audited and pending states remain distinct;
- entries expand in place;
- languages expand independently;
- direct hashes work;
- no mobile text overlap;
- sources remain collapsed.

Guide changes additionally require testing progress, task uniqueness, CPU settling, version switching, stage navigation, saved state, links, languages, touch behavior, and absence of observers or timers.

---

## 12. Known technical traps

### Only 25 entries appeared live

The repository once had a placeholder `generated-data.js` while the complete generated file existed only as a deployment artifact. Verify files on `main`, not merely a build step.

### Empty Living Dex shell and `0 / 0`

`generated-data.js` ran before `data.js`, causing `DATA is not defined`. Preserve load order.

### Infinite Living Dex render loop

A broad `MutationObserver` modified the subtree it observed and retriggered itself indefinitely. Do not use observers for ordinary localization or rendering.

### Current data mistaken for FireRed data

Current PokeAPI types and effort yields can differ from Generation III. Guide facts require game- and version-specific sources.

### Mobile text overlap

Fixed-width columns caused long names and romanization to collide. Use flexible or stacked layouts with safe wrapping.

### Sticky iOS hover/focus

Use touch-specific overrides and clear touch focus where appropriate without removing keyboard focus indicators.

### Documentation drift

Every substantive PR must update this handoff and affected standards when project state or decisions change.

### Deployment claims

State exactly what was verified: branch, PR, merge, workflow, or live page.

---

## 13. Current next work

Unless Nat requests another priority:

1. Verify the Living Dex hotfix on the live site when practical.
2. Replace the disabled observer code with a clean one-pass localization module only when it can be tested safely; then remove the temporary guard.
3. Audit **#091–#099: Cloyster through Kingler**.
4. Continue the FireRed / LeafGreen route beyond Route 5 when requested.
5. Improve full guide-language coverage only through controlled, reviewed translation.

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
- a replacement contributor can determine what happened without reading the old chat.

Treat this document as a living operational record, not optional cleanup.
