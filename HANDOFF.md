# Poké Etymology — authoritative project handoff

> **Required starting point for every new GPT, coding agent, and human contributor.** Read this document completely before proposing or making changes. Inspect current `main`, open PRs, and active branches; this snapshot may have been superseded.

**Snapshot:** 2026-07-31  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Published Names data:** #001–#160  
**Audited etymology:** Generation I #001–#151 plus Generation II starter families #152–#160  
**Name-effect baseline:** 160 Pokémon × 3 languages = 480 reviewed rows  
**FireRed / LeafGreen guide:** 26 stages from Pallet Town through the northern Route 16 detour after reaching Celadon City

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
3. Inspect current `main`, newest merged PRs, open PRs, and relevant branches.
4. Treat current `main` as the authority whenever this snapshot and the repository disagree.
5. Make the smallest coherent change that satisfies the request.
6. Update authoritative standards and this handoff when status, architecture, validation, schema, attribution, or next work changes.

---

## 2. Project identity and owner intent

Poké Etymology is a mobile-first Pokémon language and living-dex companion. It should explain why names work across languages while remaining fast and comfortable during active play.

Nat values linguistic nuance, ordinary-word examples, explicit uncertainty, citations close to claims, scope-accurate naming provenance, restrained mobile UX, and handoff-safe documentation.

Do not add generic Pokédex scope, decorative controls, unsupported certainty, false sole-author credit, or convincing prose that converts character knowledge into etymology.

When showing multiple names in prose, use:

**French (English; Japanese kana — romanization)**

---

## 3. Non-negotiable meaning/effect rule

[`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md) controls every language, Pokémon, generation, contributor, GPT, and import.

**Meaning/effect explains what the name says or does linguistically. Notes explain why that name fits the Pokémon.**

Every substantive word in meaning/effect must follow from:

- displayed Roots;
- the ordinary definition of the whole name;
- explicitly stated clipping, borrowing, reversal, grammar, pun, register, or sound association.

Do not import appearance, anatomy, behavior, type, powers, evolutionary stage, game mechanics, Pokédex story, cloning, fossil revival, or design inspiration unless the Roots literally encode that content.

Use the blind-name test: hide the sprite, Pokédex, evolution family, mechanics, and story. A reader must still be able to derive the gloss from the written analysis.

Canonical failures include:

- *far-fetched* means implausible, not a duck-and-vegetable creature;
- 白竜 means white dragon, not “sacred-looking white dragon”;
- Mew + two means the second Mew, not a genetically engineered counterpart;
- dodo + duo means a duo of dodos, not necessarily a two-headed dodo.

### Semantic lock

`scripts/validate-name-effects.mjs` assembles every published factual layer and research overlay, checks all audited language rows, rejects recurrent leakage patterns, computes a SHA-256 digest, compares it with `name-effect-scope-baseline.json`, and requires the exact checked PR attestation when data changes.

Current baseline:

- 160 audited Pokémon;
- 480 language rows;
- audited through #160;
- reviewed on 2026-07-31.

The exact attestation is:

> I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.

Never copy a digest merely to clear CI, weaken the validator, or exclude a generation from assembled coverage.

---

## 4. Current Names status

### Generation I

All #001–#151 have complete Japanese, French, and English analysis, Notes, confidence, localization comparison, sources, tags where applicable, and naming credits.

A complete 453-row semantic audit corrected 132 earlier glosses. Its record remains in `research-batches/english-name-effect-corrections-notes.md`; the historical filename now covers all three languages.

### Generation II pilot

The first Johto batch is #152–#160:

- Chikorita, Bayleef, Meganium;
- Cyndaquil, Quilava, Typhlosion;
- Totodile, Croconaw, Feraligatr.

All 27 language analyses were written under the Roots-only standard and passed language-tag and semantic-pattern validation. The decision record is [`research-batches/152-160-notes.md`](research-batches/152-160-notes.md).

Important unresolved boundaries remain local and explicit:

- Magmarashi's final animal component;
- Typhlosion's possible secondary Typhon echo;
- Ordile's opening `ō`, which may evoke king, emperor, or large.

Do not flatten these into one certain reading.

---

## 5. Generation-scoped data architecture

The Names page currently publishes #001–#160.

Load order:

1. `data.js`
2. `generated-data.js` — generated Generation I #001–#151
3. `generation-ii-data.js` — append-only factual Generation II layer, currently #152–#160
4. `associations.js`
5. `naming-credits.js` — Generation I attribution
6. `naming-credits-generation-ii.js` — Generation II attribution
7. `verified-research.js`
8. numbered `verified-research-*.js` files in Pokédex order
9. `verified-research-name-effect-fixes.js`
10. `reference-data.js`
11. `app.js`

Do not hand-edit `generated-data.js` as research storage. Do not widen `scripts/build-data.mjs` in a way that can overwrite Johto work without a documented migration.

Future Generation II batches extend `generation-ii-data.js` and add a numbered research overlay. They must enter every validator and the semantic baseline immediately.

`reference-data.js` contains guide-linked later-generation species that should be directly linkable without entering the visible Generation I index. It currently includes Crobat, Cleffa, Igglybuff, Bellossom, Espeon, Umbreon, Steelix, Raikou, Entei, and Suicune. Do not treat these compact records as audited name entries.

---

## 6. Language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

The supported type is `loanword`. Tags:

- belong to the audited entry and exact language;
- target an exact Roots substring;
- record `sourceLanguage` in data and explain it in Roots or Notes;
- use optional `occurrence` only for repeated exact text;
- are never inferred by `app.js`.

`scripts/validate-language-tags.mjs` now assembles Generation I and the published Generation II layer. Current validated total after #152–#160 is 111 tags across 93 language analyses.

---

## 7. Naming credits

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) is authoritative.

Generation I and Generation II have separate bounded registries.

### Generation II defaults

- Japanese: Game Freak naming staff, team-level by default.
- French: Nintendo France first-251 localization context, team-level unless an exact species decision is documented.
- English: Pokémon Gold and Silver US localization coordination team, not one presumed universal coiner.

English Quilava has a specific Jeff Kalles override because he identifies it as his suggestion.

Never extend one generation by simply widening another generation's ID check. Later generations require their own researched registry and validator boundary.

---

## 8. Validation

Run before every name-research PR:

```bash
node --check app.js
node --check generation-ii-data.js
node --check naming-credits.js
node --check naming-credits-generation-ii.js
for file in verified-research*.js; do node --check "$file"; done
node --check scripts/report-name-effects.mjs
node --check scripts/validate-language-tags.mjs
node --check scripts/validate-name-effects.mjs
node --check scripts/validate-naming-credits.mjs
node scripts/validate-language-tags.mjs
node scripts/validate-name-effects.mjs
node scripts/validate-naming-credits.mjs
```

Run before every Living Dex PR:

```bash
for file in guides/*.js guides/*.mjs; do node --check "$file"; done
node guides/validate-guide.mjs
```

The guide validator currently expects 26 stages and checks unique stage/task IDs, supported task groups, Pokémon tokens in tasks and drawers, required scripts, and script order.

Pull requests and Pages run the appropriate validators. Pages repeats name validation before rebuilding Generation I data and publishing the complete static repository.

---

## 9. Concurrent workflow rule

Name research and FireRed guide work may proceed in parallel, but they share `main`.

For every branch:

1. branch from current `main`;
2. keep unrelated subsystems isolated whenever possible;
3. keep the PR draft while research and validation are incomplete;
4. immediately before ready/merge, inspect all open PRs and compare the branch against current `main`;
5. incorporate relevant merged work and rerun every affected validator;
6. inspect overlapping documentation changes rather than choosing one version blindly;
7. merge only when GitHub reports the PR mergeable and checks pass.

Guide extensions should generally remain under `guides/`, plus tightly necessary reference records and authoritative documentation. Name batches should avoid `guides/` unless a shared architecture change is genuinely required.

---

## 10. Living Dex guide

The FireRed / LeafGreen guide contains 26 stages from Pallet Town through the northern Route 16 detour after first reaching Celadon City.

Current guide progression:

- Pallet Town through Route 5;
- Routes 5–6, Vermilion City, S.S. Anne, Route 11, Diglett’s Cave / Route 2, and Lt. Surge;
- Route 9, Route 10 North, Rock Tunnel, Lavender / Route 8, Celadon setup, and Route 16 North.

Research records:

- `guides/research-vermilion.md`;
- `guides/research-rock-tunnel-celadon.md`.

Preserve:

- version switching;
- persistent completion state and stable task IDs;
- exact living-dex quantities;
- optional tasks excluded from required progress;
- localized Pokémon links;
- compact disclosures and source drawer;
- one deterministic render and direct events.

Later-generation family planning may use compact records in `reference-data.js`, but those species must not appear in the visible Generation I index merely because the guide links them.

A historical self-triggering `MutationObserver` remains disabled by a temporary guard. Remove the dead observer and guard together only after full English, French, and Japanese testing. Do not replace it with another observer, timer, polling loop, or background mutation pass.

---

## 11. UX and performance boundaries

Preserve:

- mobile-first raw-text speed;
- no frameworks, hydration, runtime content fetch, polling, recurring timers, or broad persistent observers;
- in-place entry expansion and scroll position;
- independent language disclosures;
- safe mobile wrapping;
- exact authored word tags;
- one compact naming-credit block;
- keyboard focus and touch corrections;
- static local data.

Do not reintroduce fake controls, source-button walls, universal `Created by`, inferred tags, inferred semantic claims, or background annotation passes.

---

## 12. Next name batches

Continue Generation II in coherent evolutionary or linguistic groups. A sensible next batch begins with #161 Sentret and proceeds only as far as source quality and review depth allow.

---

## 13. Next Living Dex chunk

The next coherent guide extension should cover:

1. the Celadon Game Corner prize plan and version-specific coin costs;
2. Rocket Hideout and the Silph Scope;
3. Celadon Gym and its completion-relevant rewards;
4. the return to Pokémon Tower for the Ghost families and Poké Flute.

Keep this as a separate, reviewable chunk. It should explicitly resolve prize-Pokémon quantities, whether buying coins is practical, any one-save or finite constraints, the earliest clean Gastly-family plan, and how the Poké Flute changes the next Snorlax / Cycling Road route choice.