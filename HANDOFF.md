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

## 2. Owner intent and project identity

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

When showing multiple Pokémon names in prose or walkthrough material, use:

**French (English; Japanese kana — romanization)**

---

## 3. Non-negotiable product and performance boundaries

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

The site should feel like **instantaneously loaded raw text**.

Do not add:

- frameworks or hydration;
- runtime content API requests;
- polling or recurring timers;
- persistent or broad `MutationObserver`s;
- animation libraries;
- large images, webfonts, or dependency bundles;
- work that repeats after the initial render without a direct user action.

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
- Roots, meaning/effect, native-language Notes, local confidence, localization comparison, audit date, and collapsed source links for audited entries;
- clearly labeled pending research for unaudited entries;
- shared language preference saved in local storage;
- direct hashes such as `/#25`, which expand and scroll to the requested entry.

**Audited at this snapshot:** #001 Bulbasaur through #108 Lickitung.  
**Next normal batch:** #109 Koffing through #117 Seadra.  
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
- `verified-research-091-099.js`
- `verified-research-100-108.js`

Completed ranges have decision records in `research-batches/`.

### 4.2 Important #091–#108 reliability decisions

- `Gangar / Gengar` remains **plausible**, not confirmed, within a doppelgänger or related returning-spirit root cluster.
- `Iwark` securely begins with `岩` (*iwa*, rock), but snake versus bulwark remains unresolved.
- `Kingler` remains **plausible** for king crab plus fiddler crab because the design fits but the clipping is compressed.
- `Tamatama` preserves both repeated round-object language and the ordinary Japanese word meaning “by chance.”
- `Noeunoeuf`, `Noadkoko`, `Osselait`, `Ossatueur`, `Kicklee`, `Tygnon`, and `Excelangue` use documented French-localizer explanations where available.
- `Nassy` remains **plausible** for a coconut/nuts plus `椰子` (*yashi*, palm) construction; the exact clipping is unresolved.
- `Sawamular` and `Ebiwalar` preserve likely athlete-name references without pretending the final ending is confirmed.
- English `Lickitung` is **confirmed** as `lick + tongue` from the in-game Pokémon Black 2 / White 2 PokéQuiz.
- A third block was deliberately not appended merely to increase volume; #109 begins a fresh linguistic set requiring its own source review.

See `research-batches/091-108-notes.md` for the complete decision record.

### 4.3 Living Dex guide

The FireRed / LeafGreen guide includes 14 stages from Pallet Town through Route 5, with:

- FireRed / LeafGreen version switching;
- persistent completion state;
- exact living-dex quantities;
- encounter rates and version differences where decision-relevant;
- optional tasks excluded from required progress;
- starter choice linked to the postgame roaming beast;
- localized linked Pokémon names;
- compact per-task disclosures and one collapsed source drawer.

**Known language limitation:** full explanatory prose remains primarily English. Interface text, stage copy, proper nouns, and important terminology have controlled English/French/Japanese localization.

### 4.4 Guide hotfix state

PR #13 introduced a self-triggering `MutationObserver` render loop. The emergency hotfix prevents the observer from attaching, restores the browser constructor, renders dynamic labels directly, and leaves no background observer, timer, polling loop, or repeated mutation process.

Issue #14 tracks a clean one-pass replacement. Do not remove the temporary guard before the dead observer code is removed and all language behavior is tested.

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
- what the components literally mean;
- what a native speaker may notice;
- everyday versus technical, archaic, literary, slang, regional, or borrowed vocabulary;
- what each localization preserved, replaced, or added;
- which readings remain uncertain.

Notes must add native-language context, register, sound symbolism, familiar examples, cultural recognition, or an explanation of relative likelihood. Do not pad Notes with generic prose.

Prefer sources in this order:

1. official games, Pokédexes, websites, publications, localizer statements, and creator interviews;
2. official or archival Game Freak material;
3. structured game data checked against another reference;
4. reputable dictionaries, corpora, institutions, scientific databases, biographies, and cultural references;
5. specialist Pokémon references as research leads;
6. general fan discussion only as a lead requiring stronger verification.

A dictionary establishes meaning and register; it does not prove naming intent.

Use [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md).

---

## 6. Name-audit workflow

For each batch:

1. Work in evolutionary families or another linguistically coherent group.
2. Verify official English, French, and Japanese names and romanization.
3. Verify factual records while remembering current structured data is not FireRed-specific.
4. Use specialist summaries as leads, not automatic proof.
5. Seek stronger sources for people, mythology, science, sound symbolism, and localization intent.
6. Write each language’s Roots, meaning/effect, Notes, and confidence independently.
7. Preserve competing readings where evidence does not choose.
8. Add visible, descriptively labeled sources.
9. Record the actual review date.
10. Add `research-batches/<range>-notes.md`.
11. Load new files in numerical order before `reference-data.js` and `app.js`.
12. Run syntax and completeness checks.
13. Update issue #5 and this handoff in the same work cycle.

Reliability matters more than reaching a round number.

---

## 7. Technical architecture and load order

`generated-data.js` mutates the existing `DATA` array. Therefore `data.js` **must load first**.

Names-page order:

1. `data.js`
2. `generated-data.js`
3. `associations.js`
4. `verified-research.js`
5. audited `verified-research-*.js` files in numeric order
6. `reference-data.js`
7. `app.js`

Do not hand-edit `generated-data.js` as research storage. The base research file defines `sourceSet()`; `verified-research-037-045.js` defines `expandedSourceSet()`; later files may rely on both.

Current PokeAPI types and EV yields are not guaranteed to match Generation III. The guide requires game- and version-specific research.

---

## 8. UX rules

Preserve:

- in-place entry expansion and scroll position;
- independent language disclosures;
- one collapsed source drawer;
- structural Roots and Notes labels;
- shared `+` / `−` disclosure grammar;
- safe mobile wrapping;
- touch-specific ghost-hover correction while retaining keyboard focus;
- one deterministic render followed only by direct events.

Do not reintroduce fake controls, separate detail pages, all-languages-open behavior, fixed overlapping columns, visible source-button walls, or broad DOM observation.

---

## 9. Repository workflow and validation

Normal workflow:

1. inspect current `main`;
2. create `agent/<purpose>`;
3. make coherent commits;
4. compare against `main`;
5. validate;
6. open a descriptive PR;
7. merge only after GitHub reports it mergeable;
8. update trackers and handoff;
9. verify `main`;
10. verify Pages separately when possible.

Research batches must verify:

- intended IDs appear exactly once;
- no unintended IDs are overwritten;
- Japanese / French / English order is preserved;
- every entry has `status`, `reviewedOn`, `x`, `c`, `a`, and `sources`;
- targeted claims have targeted support;
- weak theories remain omitted or explicitly uncertain;
- scripts load in numeric order;
- `node --check` passes;
- issue #5 and this handoff are updated.

Be precise about status: branch, PR, merge, workflow, and live deployment are separate facts.

---

## 10. Known technical traps

- **Only 25 entries appeared live:** the complete generated file once existed only as a deployment artifact. Verify repository files.
- **`0 / 0` guide:** `generated-data.js` ran before `data.js`.
- **Infinite render loop:** a broad observer modified the subtree it observed.
- **Current data mistaken for FireRed data:** current canonical values can differ from Generation III.
- **Mobile overlap:** fixed-width columns collided with long names and romanization.
- **Sticky touch state:** use touch-specific overrides without removing keyboard focus.
- **Documentation drift:** every substantive PR must update this handoff when state or decisions change.
- **Deployment claims:** never equate merge with Pages deployment.

---

## 11. Current next work

Unless Nat requests another priority:

1. Audit **#109–#117: Koffing through Seadra**.
2. Continue the FireRed / LeafGreen route beyond Route 5 when requested.
3. Replace the disabled guide observer code only as one fully tested cleanup.
4. Improve full guide-language coverage only through controlled, reviewed translation.

Scope order remains:

1. excellent Generation I names in Japanese, French, and English;
2. complete FireRed / LeafGreen living-dex route;
3. Red / Blue / Yellow guides;
4. additional languages for polished Kanto data;
5. later regions only after Kanto is trustworthy.

---

## 12. Definition of done for a handoff-safe PR

A PR is not handoff-safe until:

- the change is merged or clearly left as an open PR;
- relevant tests pass;
- reliability and performance decisions are documented;
- unresolved questions are explicit;
- issue trackers are updated;
- this handoff is current;
- a replacement contributor can determine what happened without reading the old chat.

Treat this document as a living operational record, not optional cleanup.
