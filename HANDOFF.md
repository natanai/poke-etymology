# Poké Etymology — authoritative project handoff

> **Required starting point for any new GPT, coding agent, or human contributor.** Read this document completely before proposing or making changes. Then read the linked standards. Do not rely on an old chat transcript as the source of truth.

**Snapshot:** 2026-07-30  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Generation I name audit:** #001–#126 complete; next normal batch is #127 Pinsir through #135 Jolteon  
**Naming credits:** all 453 Japanese/French/English Generation I language disclosures resolve documented attribution records  
**FireRed / LeafGreen guide:** 14 stages from Pallet Town through Route 5

---

## 1. Startup protocol

Before doing any work:

1. Read this file completely.
2. Read, in order:
   - [`PROJECT_GOALS.md`](PROJECT_GOALS.md)
   - [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md)
   - [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md)
   - [`NAMING_CREDITS.md`](NAMING_CREDITS.md)
   - [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md)
   - [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md)
   - [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md)
   - [`DECISION_LOG.md`](DECISION_LOG.md)
   - [`CONTRIBUTING.md`](CONTRIBUTING.md)
3. Inspect current `main`; do not assume this snapshot is still current.
4. Check issue #5 for the live Generation I audit checklist.
5. Review the newest merged PRs and any relevant open branch or PR.
6. Reconcile discrepancies and update this handoff whenever status, architecture, scope, next work, known risks, research rules, tag schema, attribution conclusions, or UX behavior changes.
7. Make the smallest coherent change that satisfies the request.

A future conversation should be able to begin with:

> “Carefully read `HANDOFF.md`, follow its instructions, and let’s pick up where we left off.”

---

## 2. Owner intent and project identity

The project owner is **Nat**. The project began while Nat was playing the **French version of Pokémon FireRed** on Switch 2 and building a living dex.

The site has two linked purposes:

1. explain why Pokémon names work across languages; and
2. act as a clean route-by-route completion companion during a playthrough.

Nat values linguistic nuance, useful familiar-word examples, uncertainty stated honestly, citations close to claims, historical provenance, restrained mobile UX, and documentation that lets future contributors continue safely.

Nat dislikes generic mission copy, explanatory clutter, fake controls, long prose where compact structure works, polished claims without support, false sole-author credit, and background processing for static text.

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
- Preserve warm cream/paper, black, restrained red, Courier-like typography, hard borders/shadows, and light scanline texture.
- Do not return to a full green Game Boy simulation.
- Do not add fake controls or decorative readouts that look interactive.
- Every visible control must perform a clear action.
- Prefer hierarchy and spacing over extra instructions.

The site should feel like **instantaneously loaded raw text**.

Do not add frameworks, hydration, runtime content requests, polling, recurring timers, persistent/broad `MutationObserver`s, animation libraries, large images, webfonts, dependency bundles, or work that repeats after initial render without direct user action.

Acceptable JavaScript is small, deterministic, local, and event-driven.

---

## 4. Current product status

### 4.1 Names and etymology index

The Names page provides:

- all 151 Generation I species;
- official English, French, Japanese, and romanized Japanese names;
- current structured types and EV yields;
- in-place expandable Pokémon entries;
- independently expandable Japanese, French, and English analyses;
- Roots, meaning/effect, Notes, confidence, entry-owned word tags, Name credit, localization comparison, audit date, and collapsed sources;
- clearly labeled pending etymology for unaudited entries;
- naming credit even when the etymology is pending;
- shared language preference saved in local storage;
- direct hashes such as `/#25`.

**Audited at this snapshot:** #001 Bulbasaur through #126 Magmar.  
**Next normal batch:** #127 Pinsir through #135 Jolteon.  
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
- `verified-research-109-117.js`
- `verified-research-118-126.js`

Completed ranges have decision records in `research-batches/`.

Important unresolved decisions remain explicit in those records, including Gengar, Iwark, Kingler, Nassy, Sawamular/Ebiwalar endings, Beroringa, English Rhydon, Japanese Monjara/Garura, Starmie's Japanese second element, Rougela's final element, Eleboo's ending, and Boober's source cluster.

### 4.2 Entry-owned language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

The current supported type is `loanword`. Its visible treatment is a small white, black-bordered box containing plain lowercase `loanword`, centered directly above the exact tagged Roots token. It contains no literal brackets or donor language.

Tags are authored inside the same audited entry as the linguistic claim:

```js
tags: {
  japanese: [
    {type:"loanword",text:"ディグ",sourceLanguage:"English"}
  ]
}
```

Non-negotiable rules:

- tags belong to an exact Roots component, never the whole panel;
- use `japanese`, `french`, or `english` keys;
- `text` exactly matches displayed Roots;
- `sourceLanguage` is required and explained in Roots or Notes;
- optional `occurrence` selects repeated text;
- do not store tags in a fourth `x` item or separate global map;
- `app.js` renders authored tags only and performs no borrowing inference;
- defer uncertain lexical status, donor language, or token boundaries;
- do not automatically tag proper names, international scientific terms, learned roots, historical cognates, or English components in English analysis.

The #118–#126 batch adds ten tags across eight language analyses, including Japanese/French star-family components, Barrierd, Strike, Rougela/Lippoutou, and Eleboo. The donor-language validator now recognizes Occitan.

### 4.3 Naming credits and attribution

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) is authoritative.

Every Japanese, French, and English disclosure for #001–#151 resolves a static record from `naming-credits.js`:

- `specific` — exact name or family contribution;
- `creator` — securely credited language-set creator;
- `lead` — program responsibility without proof of exact coinage;
- `team` — group credit without individual mapping;
- `unknown` — responsible party not supportable.

Generation I baseline conclusions:

- **Japanese:** Game Freak original naming staff; the individual creator of most exact names is not publicly documented. Official Game Freak commentary confirms dedicated naming staff but does not map Generation I species to individuals.
- **French:** Nintendo France localization team. Contemporary reporting names Jean-Baptiste Fleury, Daniel Charbit, Nicolas Robert, Nicolas Gourio, and Pokémon specialist Julien Bardakoff. Later interviews often summarize Bardakoff as creator of the first 251 names. The site preserves the conflict and does not claim uncontested sole authorship per species.
- **English:** Hiro Nakamura is naming lead. Gail Tilden says he led the team and was responsible for the English names, but the default does not claim he personally coined every final word.

Documented English overrides currently include:

- Gail Tilden — Poliwag, Poliwhirl, Poliwrath;
- Nob Ogasawara — recommendation to retain Gyarados after *Skulkraken* failed legal review;
- Bill Giese — Articuno, Zapdos, Moltres naming pattern.

Credits are provenance, separate from Roots confidence. Do not infer a namer from design credit, direction, general translation, or later etymology commentary.

`namingCreditFor()` is scoped to #001–#151. Later-generation reference entries return `null` rather than inheriting false Generation I defaults.

### 4.4 Validation and workflows

Run:

```bash
node --check app.js
node --check naming-credits.js
node --check scripts/validate-language-tags.mjs
node --check scripts/validate-naming-credits.mjs
node scripts/validate-language-tags.mjs
node scripts/validate-naming-credits.mjs
```

`validate-language-tags.mjs` rejects malformed, inferred, overlapping, or unsupported tags and explicit standardized borrowings left untagged.

`validate-naming-credits.mjs` validates defaults, overrides, sources, supported scopes, all 453 Generation I disclosures, and the later-generation boundary.

Pull-request validation runs both. Pages repeats both before building and deploying.

### 4.5 Living Dex guide

The FireRed / LeafGreen guide includes 14 stages from Pallet Town through Route 5, with version switching, persistent completion state, exact living-dex quantities, decision-relevant encounter information, optional-task handling, starter-dependent roaming beasts, localized linked Pokémon names, compact task disclosures, and one collapsed source drawer.

**Known language limitation:** full explanatory prose remains primarily English. Interface text, stage copy, proper nouns, and important terminology have controlled English/French/Japanese localization.

### 4.6 Guide hotfix state

PR #13 introduced a self-triggering `MutationObserver` render loop. The emergency hotfix prevents it from attaching, restores the browser constructor, renders dynamic labels directly, and leaves no background observer, timer, polling loop, or repeated mutation process.

Issue #14 tracks a clean one-pass replacement. Do not remove the guard before the dead observer code and all language behavior are tested together.

---

## 5. Research standards

Each language analysis is a collection of separate claims. Do not give an entire Pokémon one blanket confidence score.

Allowed labels:

- **confirmed** — explicitly stated by an official creator, publication, game, localizer, or other primary source;
- **strong** — linguistically transparent and supported by reliable references;
- **plausible** — fits spelling, sound, design, and context, but alternatives remain reasonable;
- **speculative** — normally omit.

Distinguish visible components, literal meanings, native-speaker associations, register, borrowed vocabulary, localization choices, unresolved alternatives, and naming attribution.

Notes must add real context rather than padding. A tag or credit is a structured claim aid, not evidence by itself.

Prefer sources in this order:

1. official games, publications, credits, localizer statements, creator interviews, and contemporary reporting;
2. official/archival Game Freak, Nintendo, Creatures, or Pokémon Company material;
3. structured data checked against another reference;
4. reputable dictionaries, corpora, institutions, scientific databases, biographies, and cultural references;
5. specialist Pokémon references as leads;
6. general fan discussion only as a lead.

A dictionary establishes meaning/register, not naming intent. A team lead establishes program responsibility, not necessarily exact personal coinage.

Use `RESEARCH_METHOD.md`, `LANGUAGE_TAGS.md`, and `NAMING_CREDITS.md`.

---

## 6. Name-audit workflow

For each batch:

1. Work in evolutionary families or another coherent group.
2. Verify official names and romanization.
3. Verify factual records while remembering current data is not FireRed-specific.
4. Use specialist summaries as leads, not proof.
5. Seek stronger sources for people, mythology, science, sound symbolism, borrowing, localization intent, and attribution.
6. Write each language's Roots, meaning/effect, Notes, and confidence independently.
7. Author supported borrowed-component tags inside the entry.
8. Review whether exact naming-credit overrides are supported; do not invent them.
9. Preserve competing readings where evidence does not choose.
10. Add visible, descriptively labeled sources.
11. Record the actual review date.
12. Add `research-batches/<range>-notes.md`.
13. Load new files in numerical order.
14. Run syntax, structure, tag, and naming-credit validation.
15. Update issue #5 and this handoff in the same work cycle.

Reliability matters more than reaching a round number.

---

## 7. Technical architecture and load order

`generated-data.js` mutates the existing `DATA` array. `data.js` **must load first**.

Names-page order:

1. `data.js`
2. `generated-data.js`
3. `associations.js`
4. `naming-credits.js`
5. `verified-research.js`
6. audited `verified-research-*.js` files in numerical order
7. `reference-data.js`
8. `app.js`

Do not hand-edit `generated-data.js` as research storage.

Every research overlay with tags must copy `tags: research.tags` into `pokemon.audit`.

`app.js` renders exact entry-provided tag ranges and resolved static attribution. It must not scan prose, fetch credit data, or mutate the DOM after render to discover linguistic or historical features.

Current PokeAPI types/EV yields are not guaranteed to match Generation III. The guide requires game/version-specific research.

---

## 8. UX rules

Preserve:

- in-place entry expansion and scroll position;
- independent language disclosures;
- one collapsed source drawer;
- structural Roots, Notes, and Name credit labels;
- small noninteractive word tags over exact components;
- plain `loanword` box with white background and black border;
- compact credit inset with person/organization, role, scope detail, and one source link;
- safe mobile wrapping;
- shared `+` / `−` disclosure grammar;
- touch correction while retaining keyboard focus;
- one deterministic render followed only by direct events.

Do not reintroduce Roots-wide banners, runtime tag inference, universal `Created by`, false sole authorship, Generation I credits on later species, fake controls, separate detail pages, all-languages-open behavior, fixed overlapping columns, source-button walls, or broad DOM observation.

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

Research batches must verify exact IDs, language order, required fields, targeted sources, explicit uncertainty, tag completeness, attribution scope, numerical script order, syntax, issue #5, and handoff status.

Be precise about branch, PR, merge, workflow, Pages deployment, and live visual verification as separate facts.

---

## 10. Known technical and research traps

- **Only 25 entries appeared live:** complete generated data once existed only in a deployment artifact.
- **`0 / 0` guide:** `generated-data.js` ran before `data.js`.
- **Infinite render loop:** a broad observer modified the subtree it observed.
- **Current data mistaken for FireRed data:** current canonical values can differ from Generation III.
- **Mobile overlap:** fixed columns collided with long names/romanization.
- **Sticky touch state:** use touch-specific overrides without removing keyboard focus.
- **Roots-wide loanword label:** obscures the exact borrowed word.
- **Runtime language inference:** misses valid cases and misreads alternatives/negation.
- **Positional tag metadata:** retired fourth array item fails validation.
- **Universal `Created by`:** falsely collapses exact contributor, lead, team, and unknown evidence.
- **Famous-person substitution:** designer/director/translator credit is not exact name coinage.
- **French sole-author simplification:** later Bardakoff profiles must be reconciled with contemporary five-person team reporting.
- **Generation leakage:** do not apply Generation I naming defaults to later reference entries.
- **Documentation drift:** update authoritative schemas and related standards together.
- **Deployment claims:** never equate merge with Pages deployment.

---

## 11. Current next work

Unless Nat requests another priority:

1. Audit **#127–#135: Pinsir through Jolteon**, authoring entry-owned tags and reviewing exact naming-credit overrides during research.
2. Continue the FireRed / LeafGreen route beyond Route 5 when requested.
3. Replace the disabled guide observer code only as one fully tested cleanup.
4. Improve full guide-language coverage only through controlled, reviewed translation.

Scope order remains excellent Generation I names, a complete FireRed / LeafGreen living-dex route, Red/Blue/Yellow guides, additional languages for polished Kanto data, then later regions.

---

## 12. Definition of done

A PR is not handoff-safe until:

- the change is merged or clearly left as an open PR;
- relevant tests/workflows pass;
- reliability, attribution, and performance decisions are documented;
- unresolved questions are explicit;
- issue trackers are updated when applicable;
- authoritative schemas and standards are current;
- this handoff is current;
- a replacement contributor can determine what happened without reading the old chat.
