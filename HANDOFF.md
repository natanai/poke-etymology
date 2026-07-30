# Poké Etymology — authoritative project handoff

> **Required starting point for any new GPT, coding agent, or human contributor.** Read this document completely before proposing or making changes. Then read the linked standards. Do not rely on an old chat transcript as the source of truth.

**Snapshot:** 2026-07-30  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Generation I name audit:** #001 Bulbasaur through #151 Mew complete  
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
3. Inspect current `main`; this snapshot may have been superseded.
4. Review the newest merged PRs and relevant open issues/branches.
5. Update this handoff whenever status, architecture, research rules, tag schema, attribution conclusions, UX behavior, or next work changes.
6. Make the smallest coherent change that satisfies the request.

A future conversation should be able to begin with:

> “Carefully read `HANDOFF.md`, follow its instructions, and let’s pick up where we left off.”

---

## 2. Project identity and owner intent

The project owner is **Nat**. Poké Etymology began while Nat was playing the **French version of Pokémon FireRed** on Switch 2 and building a living dex.

The site has two linked purposes:

1. explain why Pokémon names work across languages; and
2. act as a clean route-by-route completion companion during a playthrough.

Nat values linguistic nuance, familiar-word examples, uncertainty stated honestly, citations close to claims, historical naming provenance, restrained mobile UX, and documentation that lets future contributors continue safely.

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

The Names page provides all 151 Generation I species with:

- official English, French, Japanese, and romanized Japanese names;
- current structured types and EV yields;
- in-place Pokémon and language disclosures;
- Roots, meaning/effect, Notes, confidence, entry-owned word tags, Name credit, localization comparison, audit date, and collapsed sources;
- saved language preference;
- direct hashes such as `/#25`.

**Audit status:** all #001–#151 are reviewed. Issue #5 is the historical tracker and should be closed only after the final batch is merged and `main` verified.

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
- `verified-research-145-151.js`

Every completed range has a decision record under `research-batches/`.

Recent deliberately non-neat conclusions:

- Dragonair most clearly suggests `dragon + air`, but *debonair* and *lair* remain credible overlapping associations.
- Dragonite may involve *knight*, `-ite`, or *draconite*; no source securely selects one exclusive ending.
- Mew is reported from `ミュータント` (mutant), while the English cat cry *mew* was explicitly rejected as the intended source by the development-side explanation relayed to Julien Bardakoff.
- Shigeki Morimoto designed and programmed Mew, but that does not establish that he personally coined the name.
- Earlier unresolved cases remain documented in their batch notes, including Gengar, Iwark, Kingler, Nassy, Sawamular/Ebiwalar endings, Beroringa, English Rhydon, Japanese Monjara/Garura, Starmie's Japanese second element, Rougela's final element, Eleboo's ending, Boober, Kailios/Kentauros seams, Gyarados's deliberately non-lexical Japanese form, Laplace's unexplained person reference, Kabutops's ending, and Snorlax's second component.

### 4.2 Entry-owned language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

The supported type is `loanword`. Its visible treatment is a small white, black-bordered box containing plain lowercase `loanword`, centered directly above the exact tagged Roots token. It contains no brackets or donor language.

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

The final #145–#151 batch adds six tags across six analyses:

- Zapdos Japanese `サンダー` — English;
- Zapdos English `dos` — Spanish;
- Moltres Japanese `ファイヤー` — English;
- Moltres English `tres` — Spanish;
- Dratini Japanese `ミニ` — English;
- Mewtwo Japanese `ツー` — English.

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
- Bill Giese — English Snorlax suggestion, recorded as published attribution rather than direct testimony;
- Bill Giese — English Articuno, Zapdos, Moltres naming pattern;
- Julien Bardakoff — French Léviator;
- Julien Bardakoff — French Évoli, Aquali, Voltali, Pyroli system;
- Julien Bardakoff — French Artikodin, Électhor, Sulfura element-plus-deity pattern.

Credits are provenance, separate from Roots confidence. Do not infer a namer from design credit, programming, direction, general translation work, or later etymology commentary. Mew is the explicit current example: Morimoto's creation role is documented, but no personal name-credit override is justified without direct naming evidence.

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

A dictionary establishes meaning/register, not naming intent. A team lead establishes program responsibility, not necessarily exact personal coinage.

---

## 6. Technical architecture and load order

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

## 7. UX rules

Preserve in-place entry expansion and scroll position; independent language disclosures; one collapsed source drawer; structural Roots, Notes, and Name credit labels; small noninteractive word tags; safe mobile wrapping; shared `+` / `−` disclosure grammar; keyboard focus plus touch correction; and one deterministic render followed only by direct events.

Do not reintroduce Roots-wide banners, runtime tag inference, universal `Created by`, false sole authorship, Generation I credits on later species, fake controls, separate detail pages, all-languages-open behavior, fixed overlapping columns, source-button walls, or broad DOM observation.

---

## 8. Repository workflow

Normal workflow:

1. inspect current `main`;
2. create `agent/<purpose>`;
3. make coherent commits;
4. compare against `main`;
5. validate;
6. open a descriptive PR;
7. merge only after GitHub reports it mergeable and required checks pass;
8. update trackers and this handoff;
9. verify `main`;
10. verify Pages separately when possible.

Be precise about branch, PR, merge, workflow, Pages deployment, and live visual verification as separate facts.

---

## 9. Known traps

- `data.js` must load before `generated-data.js` or the guide can show `0 / 0`.
- Do not repeat the historical failure where complete generated data existed only in a deployment artifact.
- Do not re-enable the disabled self-triggering guide observer.
- Current canonical data can differ from FireRed/LeafGreen.
- Avoid fixed columns that overlap long names.
- Use touch-specific overrides without removing keyboard focus.
- Never infer loanwords from prose or store positional fourth-array metadata.
- Never collapse specific contributor, lead, team, and unknown into universal `Created by`.
- Do not infer naming authorship from Pokémon design or programming credit.
- Do not apply Generation I naming defaults to later-generation reference entries.
- Never equate a merge with a completed Pages deployment.

---

## 10. Current next work

Unless Nat chooses another priority:

1. Continue the **FireRed / LeafGreen living-dex route beyond Route 5** using `LIVING_DEX_METHOD.md`.
2. Close issue #5 after the final audit PR is merged and `main` is verified.
3. Address issue #14 only as a fully tested one-pass guide cleanup; do not simply remove the observer guard.
4. Improve full guide-language coverage only through controlled, reviewed translation.
5. Revisit audited name entries only when stronger sources, corrections, or useful additional language features are identified.

Longer-term scope remains: complete FireRed/LeafGreen, add Red/Blue/Yellow guides, expand polished Kanto language coverage, then consider later regions.

---

## 11. Definition of done

A change is not handoff-safe until:

- it is merged or clearly left as an open PR;
- relevant tests/workflows pass;
- reliability, attribution, performance, and uncertainty decisions are documented;
- relevant trackers are updated;
- authoritative schemas and standards remain current;
- this handoff reflects the resulting state;
- a replacement contributor can determine what happened without reading the old chat.
