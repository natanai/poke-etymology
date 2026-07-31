# Poké Etymology — authoritative project handoff

> **Required starting point for every new GPT, coding agent, and human contributor.** Read this document completely before proposing or making changes. Do not rely on an old chat transcript or model memory as the source of truth.

**Snapshot:** 2026-07-31  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Generation I name audit:** #001 Bulbasaur through #151 Mew complete  
**Name-effect scope audit:** all 453 Japanese/French/English rows manually reviewed; 132 corrected  
**Naming credits:** all 453 Generation I language disclosures resolve documented attribution records  
**FireRed / LeafGreen guide:** 14 stages from Pallet Town through Route 5

---

## 1. Startup protocol

Before doing any work:

1. Read this file completely.
2. Read, in order:
   - [`PROJECT_GOALS.md`](PROJECT_GOALS.md)
   - **[`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md)**
   - [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md)
   - [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md)
   - [`NAMING_CREDITS.md`](NAMING_CREDITS.md)
   - [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md)
   - [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md)
   - [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md)
   - [`DECISION_LOG.md`](DECISION_LOG.md)
   - [`CONTRIBUTING.md`](CONTRIBUTING.md)
   - [`AGENTS.md`](AGENTS.md) when operating as an AI agent.
3. Inspect current `main`; this snapshot may have been superseded.
4. Review the newest merged PRs and relevant open issues or branches.
5. Update this handoff whenever status, architecture, research rules, validation, schema, attribution conclusions, UX behavior, or next work changes.
6. Make the smallest coherent change that satisfies the request.

A future conversation should be able to begin with:

> “Carefully read `HANDOFF.md`, follow its instructions, and let’s pick up where we left off.”

---

## 2. Project identity and owner intent

The project owner is **Nat**. Poké Etymology began while Nat was playing the French version of Pokémon FireRed on Switch 2 and building a living dex.

The site has two linked purposes:

1. explain why Pokémon names work across languages; and
2. act as a clean route-by-route completion companion during a playthrough.

Nat values linguistic nuance, familiar-word examples, uncertainty stated honestly, citations close to claims, historical naming provenance, restrained mobile UX, and documentation that lets future contributors continue safely.

Nat dislikes generic mission copy, explanatory clutter, fake controls, polished claims without support, false sole-author credit, background processing for static text, and plausible-sounding AI prose that converts character knowledge into false etymology.

When showing multiple names in prose, use:

**French (English; Japanese kana — romanization)**

---

## 3. Non-negotiable name-effect rule

[`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md) is authoritative for every language, Pokémon, generation, contributor, GPT, and import.

**Meaning/effect explains what the name says or does linguistically. Notes explain why that name fits the Pokémon.**

Every substantive word in meaning/effect must follow from:

- the displayed Roots;
- the ordinary definition of the whole name;
- explicitly stated clipping, borrowing, reversal, grammar, pun, register, or sound association.

Do not import information from:

- appearance, anatomy, body shape, carried objects, or visual judgment;
- behavior, powers, type, moves, or abilities;
- evolutionary stage or family role;
- game mechanics;
- Pokédex story, cloning, genetic engineering, fossil revival, discovery, or design inspiration.

Use the blind-name test: hide the sprite, Pokédex, evolution family, mechanics, and story. If a reader could not still derive every substantive word of the gloss from Roots, move that material to Notes or comparison.

Canonical failures:

- *far-fetched* does not mean an unbelievable duck-and-vegetable creature; it means something implausible or difficult to believe.
- 白竜 does not mean “sacred-looking white dragon”; it means “white dragon.”
- Mew + two does not mean genetically engineered counterpart; it means “the second Mew.”
- dodo + duo means a duo of dodos, not specifically a two-headed dodo.

### 3.1 Completed multilingual scope audit

On 2026-07-31, all 151 Generation I entries across Japanese, French, and English—453 Roots→meaning/effect pairs—were assembled from the same overlay order used by the site and manually reviewed.

Result:

- **132 glosses corrected**;
- **321 glosses retained** after individual review;
- Roots, confidence, Notes, comparisons, sources, tags, naming credits, and factual records preserved.

The decision record is [`research-batches/english-name-effect-corrections-notes.md`](research-batches/english-name-effect-corrections-notes.md). The historical filename remains, but the document now covers the complete multilingual audit.

### 3.2 Permanent semantic lock

`scripts/validate-name-effects.mjs`:

1. assembles final runtime research after every overlay;
2. checks all audited Japanese/French/English rows are present and non-empty;
3. rejects recurrent design/lore/anatomy/evolution leakage patterns;
4. computes a SHA-256 digest over every audited `(ID, language, Roots, meaning/effect)` row;
5. compares it with `name-effect-scope-baseline.json`;
6. requires an exact checked PR attestation whenever name-analysis data changes.

Any changed Roots or meaning/effect pair, newly audited Pokémon, new generation, or new language must change the baseline and therefore requires manual review.

The exact attestation is:

> I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.

Renew the baseline only through the command documented in `NAME_EFFECT_STANDARD.md`. Never copy a digest from CI, hand-edit around the review, weaken the validator, or exclude new data from coverage.

---

## 4. Product and performance boundaries

Poké Etymology is a **Pokémon language and completion companion**, not a general-purpose Pokédex.

Preserve these boundaries:

- Word and localization research comes first.
- Completion-guide data belongs only where it helps a living-dex playthrough.
- Do not add sprites or encyclopedic move/stat/item coverage merely because other Pokémon sites do.
- Keep the site mobile-first and comfortable during active play.
- Preserve warm cream/paper, black, restrained red, Courier-like typography, hard borders/shadows, and light scanline texture.
- Every visible control must perform a clear action.
- Prefer hierarchy and spacing over extra instructions.
- The site should feel like instantaneously loaded raw text.

Do not add frameworks, hydration, runtime content requests, polling, recurring timers, persistent broad `MutationObserver`s, animation libraries, large images, webfonts, dependency bundles, or work that repeats after initial render without direct user action.

Acceptable JavaScript is small, deterministic, local, and event-driven.

---

## 5. Names and etymology index

The Names page provides all 151 Generation I species with:

- official English, French, Japanese, and romanized Japanese names;
- current structured types and EV yields;
- in-place Pokémon and independent language disclosures;
- Roots, meaning/effect, Notes, confidence, entry-owned word tags, Name credit, localization comparison, audit date, and collapsed sources;
- saved language preference;
- direct hashes such as `/#25`.

All #001–#151 are source-reviewed. Every completed range has a decision record under `research-batches/`.

Research overlay files:

- `verified-research.js` — #001–#009 and `sourceSet()`;
- `verified-research-010-018.js`;
- `verified-research-019-027.js`;
- `verified-research-028-036.js`;
- `verified-research-037-045.js` — also defines `expandedSourceSet()`;
- `verified-research-046-054.js`;
- `verified-research-055-063.js`;
- `verified-research-064-072.js`;
- `verified-research-073-081.js`;
- `verified-research-082-090.js`;
- `verified-research-091-099.js`;
- `verified-research-100-108.js`;
- `verified-research-109-117.js`;
- `verified-research-118-126.js`;
- `verified-research-127-135.js`;
- `verified-research-136-144.js`;
- `verified-research-145-151.js`;
- `verified-research-name-effect-fixes.js` — final multilingual semantic-scope corrections, loaded after numbered research overlays.

Recent deliberately unresolved conclusions include:

- Dragonair most clearly suggests `dragon + air`, but *debonair* and *lair* remain credible overlapping associations.
- Dragonite may involve *knight*, `-ite`, or *draconite*; no source securely selects one exclusive ending.
- Mew is reported from `ミュータント` (mutant), while the English cat cry *mew* was explicitly rejected as the intended source by the development-side explanation relayed to Julien Bardakoff.
- Shigeki Morimoto designed and programmed Mew, but that does not establish that he personally coined the name.
- Other unresolved cases remain recorded in their batch notes rather than flattened into false certainty.

---

## 6. Entry-owned language tags

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
- use named `japanese`, `french`, or `english` keys;
- `text` exactly matches displayed Roots;
- `sourceLanguage` is required and explained in Roots or Notes;
- optional `occurrence` selects repeated text;
- do not store tags in a fourth `x` item or separate inferred map;
- `app.js` renders authored tags only;
- defer uncertain lexical status, donor language, or token boundaries;
- do not automatically tag proper names, international scientific terms, learned roots, historical cognates, letter-name wordplay, or native-language components.

---

## 7. Naming credits and attribution

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) is authoritative.

Every Japanese, French, and English disclosure for #001–#151 resolves a static record from `naming-credits.js` using one of: `specific`, `creator`, `lead`, `team`, or `unknown`.

Generation I baselines:

- **Japanese:** Game Freak original naming staff; most exact individual coiners are not publicly mapped.
- **French:** Nintendo France localization team; exact overrides only where tied to a documented decision.
- **English:** Hiro Nakamura is naming lead; the default does not claim he personally coined every final word.

Credits are provenance, separate from Roots confidence. Do not infer a namer from design credit, programming, direction, general translation work, or later etymology commentary.

`namingCreditFor()` is scoped to Generation I. Later-generation reference entries return `null` rather than inheriting false defaults until their own attribution system is researched.

---

## 8. Validation and workflows

Run before any research PR:

```bash
node --check app.js
node --check naming-credits.js
node --check scripts/report-name-effects.mjs
node --check scripts/validate-language-tags.mjs
node --check scripts/validate-name-effects.mjs
node --check scripts/validate-naming-credits.mjs
for file in verified-research*.js; do node --check "$file"; done
node scripts/validate-language-tags.mjs
node scripts/validate-name-effects.mjs
node scripts/validate-naming-credits.mjs
```

- `validate-language-tags.mjs` rejects malformed, inferred, overlapping, unsupported, or incomplete tags.
- `validate-name-effects.mjs` enforces semantic scope, assembled-data coverage, the reviewed digest, and PR attestation.
- `validate-naming-credits.mjs` validates defaults, overrides, sources, all 453 Generation I disclosures, and the later-generation boundary.

`.github/workflows/validate.yml` runs all three validators on pull requests and manual dispatch. `.github/workflows/pages.yml` repeats them before publishing from `main`.

`scripts/report-name-effects.mjs` is a review aid that prints the final assembled rows in a stable tab-separated format. It is not a substitute for semantic review.

---

## 9. Technical architecture and load order

`generated-data.js` mutates the existing `DATA` array. `data.js` must load first.

Names-page order:

1. `data.js`
2. `generated-data.js`
3. `associations.js`
4. `naming-credits.js`
5. `verified-research.js`
6. numbered audited `verified-research-*.js` files in numerical order
7. `verified-research-name-effect-fixes.js`
8. `reference-data.js`
9. `app.js`

Do not hand-edit `generated-data.js` as research storage. Every research overlay with tags must copy `tags: research.tags` into `pokemon.audit`.

`app.js` renders exact entry-provided tag ranges and resolved static attribution. It must not scan prose, fetch credit data, infer semantic scope, or mutate the DOM after render to discover linguistic or historical features.

Current PokeAPI types and EV yields are not guaranteed to match Generation III. The guide requires game/version-specific research.

---

## 10. Living Dex guide

The FireRed / LeafGreen guide includes 14 stages from Pallet Town through Route 5, with version switching, persistent completion state, exact living-dex quantities, decision-relevant encounter information, optional-task handling, starter-dependent roaming beasts, localized linked names, compact task disclosures, and one collapsed source drawer.

Full explanatory prose remains primarily English. Interface text, stage copy, proper nouns, and important terminology have controlled English/French/Japanese localization.

A historical self-triggering `MutationObserver` render loop was disabled by an emergency hotfix. Issue #14 tracks a clean one-pass replacement. Do not remove the guard before the dead observer code and all language behavior are tested together.

---

## 11. UX rules

Preserve in-place entry expansion and scroll position; independent language disclosures; one collapsed source drawer; structural Roots, Notes, and Name credit labels; small noninteractive word tags; safe mobile wrapping; shared `+` / `−` disclosure grammar; keyboard focus plus touch correction; and one deterministic render followed only by direct events.

Do not reintroduce Roots-wide banners, runtime tag inference, universal `Created by`, false sole authorship, Generation I credits on later species, fake controls, separate detail pages, all-languages-open behavior, fixed overlapping columns, source-button walls, or broad DOM observation.

---

## 12. Repository workflow

Normal workflow:

1. inspect current `main`;
2. create `agent/<purpose>`;
3. make coherent commits;
4. compare against `main`;
5. validate;
6. open a descriptive PR;
7. merge only after GitHub reports it mergeable and required checks pass;
8. update trackers, standards, and this handoff;
9. verify `main`;
10. verify Pages separately when possible.

Be precise about branch, PR, merge, workflow, Pages deployment, and live visual verification as separate facts.

---

## 13. Known traps

- Never let meaning/effect explain the Pokémon instead of the name.
- Never bypass, weaken, or narrow name-effect validation to accommodate a bad gloss.
- Never copy a failed-run digest into the baseline without performing the exact manual review attested.
- Every future generation and language must enter the assembled name-effect snapshot.
- `data.js` must load before `generated-data.js` or the guide can show `0 / 0`.
- Do not repeat the failure where complete generated data existed only in a deployment artifact.
- Do not re-enable the disabled self-triggering guide observer.
- Current canonical data can differ from FireRed/LeafGreen.
- Avoid fixed columns that overlap long names.
- Use touch-specific overrides without removing keyboard focus.
- Never infer loanwords from prose or store positional fourth-array metadata.
- Never collapse specific contributor, lead, team, and unknown into universal `Created by`.
- Do not infer naming authorship from Pokémon design or programming credit.
- Do not apply Generation I naming defaults to later-generation reference entries.
- Never equate a merge with completed Pages deployment.

---

## 14. Current next work

Unless Nat chooses another priority:

1. Continue the FireRed / LeafGreen living-dex route beyond Route 5 using `LIVING_DEX_METHOD.md`.
2. Address issue #14 only as a fully tested one-pass guide cleanup; do not simply remove the observer guard.
3. Improve full guide-language coverage only through controlled, reviewed translation.
4. Revisit audited name entries only when stronger sources or corrections appear.
5. When expanding to later generations, add every new audited row to the same Roots-only standard, validator, and baseline from the first batch onward.

Long-term scope remains: complete FireRed/LeafGreen, add Red/Blue/Yellow guides, expand polished Kanto language coverage, then consider later regions.

---

## 15. Definition of done

A change is not handoff-safe until:

- it is merged or clearly left as an open PR;
- relevant workflows pass;
- every changed Roots→meaning/effect pair has received manual semantic review;
- the exact PR attestation is checked when name-analysis data changed;
- the name-effect baseline covers all audited rows and matches assembled runtime data;
- language tags and naming credits validate;
- reliability, attribution, performance, and uncertainty decisions are documented;
- relevant trackers and standards are updated;
- this handoff reflects the resulting state;
- a replacement contributor can determine what happened without reading the old chat.
