# Poké Etymology — authoritative project handoff

> **Required starting point for any new GPT, coding agent, or human contributor.** Read this document completely before proposing or making changes. Then read the linked standards. Do not rely on an old chat transcript as the source of truth.

**Snapshot:** 2026-07-30  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Generation I name audit:** #001–#144 complete; final batch is #145 Zapdos through #151 Mew  
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
5. Review the newest merged PRs and relevant open branches or PRs.
6. Update this handoff when status, scope, architecture, research rules, tag schema, attribution, UX, or next work changes.
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

Nat dislikes generic mission copy, explanatory clutter, fake controls, polished claims without support, false sole-author credit, and background processing for static text.

When showing multiple names in prose, use:

**French (English; Japanese kana — romanization)**

---

## 3. Product and performance boundaries

Poké Etymology is a **Pokémon language and completion companion**, not a general-purpose Pokédex.

Preserve these boundaries:

- Word and localization research comes first.
- Completion-guide data belongs only where it helps a living-dex playthrough.
- Do not add sprites or encyclopedic move/stat/item coverage merely because other Pokémon sites do.
- Keep the site mobile-first and comfortable during active play.
- Preserve warm cream/paper, black, restrained red, Courier-like typography, hard borders/shadows, and light scanline texture.
- Every visible control must perform a clear action.
- Prefer hierarchy and spacing over extra instructions.
- The site should feel like **instantaneously loaded raw text**.

Do not add frameworks, hydration, runtime content requests, polling, recurring timers, persistent/broad `MutationObserver`s, animation libraries, large images, webfonts, dependency bundles, or work that repeats after initial render without direct user action.

Acceptable JavaScript is small, deterministic, local, and event-driven.

---

## 4. Current product status

### 4.1 Names and etymology index

The Names page provides all 151 Generation I species with official English, French, Japanese, and romanized Japanese names; types and EV yields; in-place Pokémon and language disclosures; Roots, meaning/effect, Notes, confidence, entry-owned word tags, Name credit, localization comparison, audit date, and collapsed sources; pending-state copy; saved language preference; and direct hashes such as `/#25`.

**Audited:** #001 Bulbasaur through #144 Articuno.  
**Final batch:** #145 Zapdos through #151 Mew.  
**Tracker:** issue #5.

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
- `verified-research-127-135.js`
- `verified-research-136-144.js`

Completed ranges have decision records in `research-batches/`.

Recent deliberately non-neat decisions:

- Kabutops securely contains Kabuto, but `-ops`, *Triops*, and overlapping *tops* analyses remain unresolved.
- Snorlax securely evokes snoring and relaxation, while historical recollections differ about the exact second component and creative path.
- Kōji Nishino inspired Kabigon/Snorlax and was nicknamed Kirby internally, but this does not establish him as the Japanese name's coiner.
- Learned scientific roots in Omanyte, Kabutops, and Aerodactyl are not automatically treated as ordinary loanwords.
- Earlier unresolved cases remain documented in their batch notes, including Gengar, Iwark, Kingler, Nassy, Sawamular/Ebiwalar endings, Beroringa, English Rhydon, Japanese Monjara/Garura, Starmie's Japanese second element, Rougela's final element, Eleboo's ending, Boober, Kailios/Kentauros seams, Gyarados's deliberately non-lexical Japanese form, and Laplace's unexplained person reference.

### 4.2 Entry-owned language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

The current supported type is `loanword`. Its visible treatment is a small white, black-bordered box containing plain lowercase `loanword`, centered directly above the exact tagged Roots token. It contains no brackets or donor language.

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
- do not automatically tag proper names, international scientific terms, learned roots, historical cognates, letter-name wordplay, or native-language components.

The #136–#144 batch adds six tags across six analyses:

- Booster `ブースター` — Japanese, from English;
- Porygon `ポリゴン` — Japanese, from English;
- Omstar `スター` — Japanese, from English;
- Amonistar `star` — French, from English;
- Freezer `フリーザー` — Japanese, from English;
- Articuno `uno` — English, from Spanish.

The Articuno tag demonstrates the rule correctly: English material is not tagged merely for appearing in English analysis, but a securely imported Spanish numeral is a genuine cross-language component.

### 4.3 Naming credits and attribution

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) is authoritative.

Every Japanese, French, and English disclosure for #001–#151 resolves a static record from `naming-credits.js` using one of: `specific`, `creator`, `lead`, `team`, or `unknown`.

Generation I baselines:

- **Japanese:** Game Freak original naming staff; most exact individual coiners are not publicly mapped.
- **French:** Nintendo France localization team. Contemporary reporting names Jean-Baptiste Fleury, Daniel Charbit, Nicolas Robert, Nicolas Gourio, and Pokémon specialist Julien Bardakoff. Later first-person Bardakoff explanations justify exact overrides only where tied to a specific decision.
- **English:** Hiro Nakamura is naming lead; the default does not claim he personally coined every final word.

Documented exact overrides include:

- Gail Tilden — English Poliwag, Poliwhirl, Poliwrath;
- Nob Ogasawara — English recommendation to retain Gyarados after *Skulkraken* failed legal review;
- Bill Giese — English Snorlax suggestion, recorded as a published attribution rather than direct testimony;
- Bill Giese — English Articuno, Zapdos, Moltres naming pattern;
- Julien Bardakoff — French Léviator;
- Julien Bardakoff — French Évoli, Aquali, Voltali, Pyroli system;
- Julien Bardakoff — French Artikodin and its Odin/*Saint Seiya* association.

Credits are provenance, separate from Roots confidence. Do not infer a namer from design credit, direction, general translation work, or later etymology commentary. When evidence is secondary rather than first-person, the displayed detail and source label must say so.

`namingCreditFor()` is scoped to #001–#151. Later-generation reference entries return `null` rather than inheriting false Generation I defaults.

### 4.4 Validation and workflows

Run:

```bash
node --check app.js
node --check naming-credits.js
for file in verified-research*.js; do node --check "$file"; done
node --check scripts/validate-language-tags.mjs
node --check scripts/validate-naming-credits.mjs
node scripts/validate-language-tags.mjs
node scripts/validate-naming-credits.mjs
```

`validate-language-tags.mjs` rejects malformed, inferred, overlapping, unsupported, or incomplete tags. `validate-naming-credits.mjs` validates defaults, overrides, sources, all 453 Generation I disclosures, and the later-generation boundary. Pull requests run both; Pages repeats them before deployment.

### 4.5 Living Dex guide

The FireRed / LeafGreen guide includes 14 stages from Pallet Town through Route 5, with version switching, persistent completion state, exact living-dex quantities, decision-relevant encounter information, optional-task handling, starter-dependent roaming beasts, localized linked names, compact task disclosures, and one collapsed source drawer.

Full explanatory prose remains primarily English. Interface text, stage copy, proper nouns, and important terminology have controlled English/French/Japanese localization.

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

Distinguish visible components, literal meanings, native-speaker associations, register, borrowed vocabulary, localization choices, unresolved alternatives, and naming attribution. Notes must add real context rather than padding. A tag or credit is a structured claim aid, not evidence by itself.

Prefer sources in this order:

1. official games, publications, credits, localizer statements, creator interviews, and contemporary reporting;
2. official or archival Game Freak, Nintendo, Creatures, or Pokémon Company material;
3. structured data checked against another reference;
4. reputable dictionaries, corpora, institutions, scientific databases, biographies, and cultural references;
5. specialist Pokémon references as leads;
6. general fan discussion only as a lead.

A dictionary establishes meaning/register, not naming intent. A team lead establishes program responsibility, not necessarily exact personal coinage. Use `RESEARCH_METHOD.md`, `LANGUAGE_TAGS.md`, and `NAMING_CREDITS.md`.

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
8. Review exact naming-credit overrides without inventing them.
9. Preserve competing readings where evidence does not choose.
10. Add visible, descriptively labeled sources and the actual review date.
11. Add `research-batches/<range>-notes.md`.
12. Load files in numerical order.
13. Run syntax, structure, tag, and naming-credit validation.
14. Update issue #5 and this handoff in the same work cycle.

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

Do not hand-edit `generated-data.js` as research storage. Every research overlay with tags must copy `tags: research.tags` into `pokemon.audit`.

`app.js` renders exact entry-provided tag ranges and resolved static attribution. It must not scan prose, fetch credit data, or mutate the DOM after render to discover linguistic or historical features.

Current PokeAPI types/EV yields are not guaranteed to match Generation III. The guide requires game/version-specific research.

---

## 8. UX rules

Preserve in-place entry expansion and scroll position; independent language disclosures; one collapsed source drawer; structural Roots, Notes, and Name credit labels; small noninteractive word tags; safe mobile wrapping; shared `+` / `−` disclosure grammar; keyboard focus plus touch correction; and one deterministic render followed only by direct events.

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

## 10. Known traps

- `data.js` must load before `generated-data.js` or the guide can show `0 / 0`.
- Do not repeat the historical failure where complete generated data existed only in a deployment artifact.
- Do not re-enable the disabled self-triggering guide observer.
- Current canonical data can differ from FireRed/LeafGreen.
- Avoid fixed columns that overlap long names.
- Use touch-specific overrides without removing keyboard focus.
- Never infer loanwords from prose or store positional fourth-array metadata.
- Never collapse specific contributor, lead, team, and unknown into universal `Created by`.
- Do not substitute a famous designer, director, or translator for a name coiner.
- Reconcile later Bardakoff recollections with contemporary French team evidence.
- Do not apply Generation I naming defaults to later reference entries.
- Never equate merge with Pages deployment.

---

## 11. Current next work

Unless Nat requests another priority:

1. Audit the **final Generation I batch #145–#151: Zapdos through Mew**, including entry-owned tags and exact-credit review.
2. After completing #151, perform a full Gen I consistency audit before declaring the project phase complete.
3. Continue the FireRed / LeafGreen route beyond Route 5 when requested.
4. Replace the disabled guide observer code only as one fully tested cleanup.
5. Improve guide-language coverage only through controlled, reviewed translation.

Long-term scope remains: excellent Generation I names; complete FireRed/LeafGreen living-dex route; Red/Blue/Yellow guides; additional languages for polished Kanto data; then later regions.

---

## 12. Definition of done

A PR is not handoff-safe until the change is merged or clearly left open; relevant tests pass; reliability, attribution, and performance decisions are documented; unresolved questions are explicit; issue trackers are updated; authoritative schemas remain current; this handoff is current; and a replacement contributor can determine what happened without reading the old chat.
