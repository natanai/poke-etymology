# Poké Etymology — authoritative project handoff

> **Required starting point for every new GPT, coding agent, and human contributor.** Read this document completely before proposing or making changes. Inspect current `main`, open PRs, and active branches; this snapshot may have been superseded.

**Snapshot:** 2026-07-31  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Published Names data:** #001–#178  
**Audited etymology:** Generation I #001–#151 plus Generation II #152–#178  
**Name-effect baseline:** 178 Pokémon × 3 languages = 534 reviewed rows  
**FireRed / LeafGreen guide:** 36 stages from Pallet Town through Fuchsia City’s pre-Safari fishing setup

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
4. Treat current `main` as authority whenever this snapshot and the repository disagree.
5. Make the smallest coherent change that satisfies the request.
6. Update authoritative standards and this handoff when status, architecture, validation, schema, attribution, or next work changes.

---

## 2. Project identity and owner intent

Poké Etymology is a mobile-first Pokémon language and living-dex companion. It should explain why names work across languages while remaining fast and comfortable during active play.

Nat values linguistic nuance, ordinary-word examples, explicit uncertainty, citations close to claims, scope-accurate naming provenance, restrained mobile UX, and handoff-safe documentation.

Do not add generic Pokédex scope, unsupported certainty, false sole-author credit, or convincing prose that converts character knowledge into etymology.

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

Do not import appearance, anatomy, behavior, type, powers, evolutionary stage, mechanics, Pokédex story, or design inspiration unless the Roots literally encode that content.

Use the blind-name test: hide the sprite, Pokédex, family, mechanics, and story. A reader must still be able to derive the gloss from the written analysis.

### Semantic lock

`scripts/validate-name-effects.mjs` assembles every published factual layer and research overlay, checks all audited language rows, rejects recurrent leakage patterns, computes a SHA-256 digest, compares it with `name-effect-scope-baseline.json`, and requires the exact checked PR attestation when data changes.

Current baseline:

- 178 audited Pokémon;
- 534 language rows;
- audited through #178;
- digest `3552bb17d00aaa25394c7915c87f44cfac4b137a8bddc1f81c87e8bb48c231b8`;
- reviewed on 2026-07-31.

Exact attestation:

> I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.

Never copy a digest merely to clear CI, weaken the validator, or exclude a generation from assembled coverage.

---

## 4. Current Names status

### Generation I

All #001–#151 have complete Japanese, French, and English analysis, Notes, confidence, localization comparison, sources, tags where applicable, and naming credits.

A complete 453-row semantic audit corrected 132 earlier glosses. Its record is `research-batches/english-name-effect-corrections-notes.md`; the historical filename now covers all three languages.

### Generation II batches

Completed and audited:

- **#152–#160:** Chikorita through Feraligatr — `research-batches/152-160-notes.md`;
- **#161–#169:** Sentret through Crobat — `research-batches/161-169-notes.md`;
- **#170–#178:** Chinchou through Xatu — `research-batches/170-178-notes.md`.

Each batch contains 27 manually reviewed language rows.

Important #170–#178 uncertainty boundaries:

- Chinchou: general *chōchin* “lantern” versus fuller *chōchin-ankō* “footballfish”;
- Lanturn: secure lantern respelling with only a possible secondary *turn on* pun;
- Pichu: secure Pikachu contraction with possible *puchi + chūchū* reinforcement;
- Cleffa: shortened Clefairy-family name with possible *clef + fa* reinforcement;
- Igglybuff: family remodeling plus possible *jiggly/wiggly + buff* segmentation;
- Natu: international *nature* versus inherited Japanese *Naty/native* relationship;
- Xatu Japanese: *Naty/native + indio* remains plausible, and the donor language for *indio* is unresolved;
- Xatu English: Jeff Kalles's stated *xat* derivation is confirmed; a Natu echo remains secondary.

Do not flatten these into cleaner unsupported answers. Cultural explanations must be no more specific than the cited naming source.

---

## 5. Generation-scoped data architecture

The Names page publishes #001–#178.

Load order:

1. `data.js`
2. `generated-data.js` — Generation I #001–#151
3. `generation-ii-data.js` — append-only Generation II facts, currently #152–#178
4. `associations.js`
5. `naming-credits.js`
6. `naming-credits-generation-ii.js`
7. `verified-research.js`
8. numbered `verified-research-*.js` files in Pokédex order, through `verified-research-170-178.js`
9. `verified-research-name-effect-fixes.js`
10. `reference-data.js`
11. `app.js`
12. `region-filter.js`

Do not hand-edit `generated-data.js` as research storage. Do not widen `scripts/build-data.mjs` in a way that can overwrite Johto work without a documented migration.

Every new Johto batch must:

- extend `generation-ii-data.js` only with individually checked factual records;
- add a numbered audited research overlay;
- enter every validator and the semantic baseline immediately;
- remove any promoted species from `reference-data.js`;
- preserve the guide's ability to resolve those species from `DATA`.

Cleffa and Igglybuff were promoted from compact guide references in the #170–#178 batch. The current compact reference layer contains Bellossom, Politoed, Espeon, Umbreon, Slowking, Steelix, Scizor, Kingdra, Porygon2, Raikou, Entei, and Suicune.

The region selector derives published Johto membership and type combinations from `DATA`. Never restore hard-coded batch endpoints for queries such as `johto water`.

---

## 6. Language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

The only supported type is `loanword`. Tags:

- belong to the audited entry and exact language;
- target an exact Roots substring;
- record `sourceLanguage` and name it in Roots or Notes;
- use optional `occurrence` only for repeated exact text;
- are never inferred by the renderer.

Current validated total: **139 tags across 111 language analyses**.

Do not tag a donor language when the source language itself is unresolved. Xatu's possible *indio* component is deliberately untagged because Spanish and Italian remain possible.

---

## 7. Naming credits

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) is authoritative. Generation I and Generation II have separate bounded registries.

Generation II defaults:

- Japanese: Game Freak naming staff, team-level;
- French: Nintendo France first-251 localization team;
- English: Pokémon Gold and Silver US localization coordination team.

Exact Generation II English overrides currently include:

- **Quilava — Jeff Kalles**;
- **Xatu — Jeff Kalles**, who says he suggested the X-initial name from *xat*.

No Japanese or French #170–#178 entry received a new individual override. A species etymology explanation alone does not prove authorship.

`scripts/validate-naming-credits.mjs` requires every published ID to be contiguous and every published language disclosure to resolve a complete generation-scoped credit. Later generations need separately researched registries.

---

## 8. Validation

Run before every name-research PR:

```bash
node --check app.js
node --check region-filter.js
node --check generation-ii-data.js
node --check naming-credits.js
node --check naming-credits-generation-ii.js
for file in verified-research*.js; do node --check "$file"; done
node --check scripts/report-name-effects.mjs
node --check scripts/validate-region-filter.mjs
node --check scripts/validate-language-tags.mjs
node --check scripts/validate-name-effects.mjs
node --check scripts/validate-naming-credits.mjs
node scripts/validate-region-filter.mjs
node scripts/validate-language-tags.mjs
node scripts/validate-name-effects.mjs
node scripts/validate-naming-credits.mjs
```

When factual or reference data changes, also run:

```bash
for file in guides/*.js guides/*.mjs; do node --check "$file"; done
node guides/validate-guide.mjs
```

`.github/workflows/validate-guide.yml` triggers when guide files or shared Pokémon factual/reference data changes. This prevents a Names-data promotion from silently breaking guide links.

The guide validator currently expects 36 stages and checks unique IDs, task groups, Pokémon tokens, factual-data loading, required scripts, script order, and reference records that duplicate published `DATA`.

---

## 9. Concurrent workflow rule

Name research and FireRed guide work may proceed in parallel, but they share `main`.

For every branch:

1. branch from current `main`;
2. keep unrelated subsystems isolated;
3. keep the PR draft while research and validation are incomplete;
4. immediately before merge, inspect current `main`, open PRs, and active branches;
5. reconcile shared documentation and `reference-data.js` deliberately;
6. rerun every affected validator;
7. merge only when GitHub reports the PR mergeable and checks pass.

Guide work should generally remain under `guides/`, plus necessary shared references and authoritative documentation. Name batches should not edit guide content files unless a true cross-feature architecture change is required.

---

## 10. Living Dex guide

The FireRed / LeafGreen guide contains 36 stages from Pallet Town through Fuchsia City’s pre-Safari fishing setup.

Current progression includes:

- Pallet Town through Route 5;
- Vermilion, S.S. Anne, Diglett's Cave, and Lt. Surge;
- Route 9, Rock Tunnel, Lavender, Celadon, and Route 16;
- Game Corner prizes, Rocket Hideout, Erika, Pokémon Tower catches, and the Poké Flute;
- the first Snorlax, Route 12 fishing, Routes 13–15, and Fuchsia City fishing setup.

Research records:

- `guides/research-vermilion.md`;
- `guides/research-rock-tunnel-celadon.md`;
- `guides/research-celadon-tower.md`;
- `guides/research-route12-fuchsia.md`.

Important current plans:

- Porygon is the only required Game Corner prize;
- Scyther/Pinsir prize alternatives are optional;
- the Ghost-family plan uses one Gastly and two wild Haunter, with one Haunter traded into Gengar;
- the Marowak spirit is uncatchable;
- the Route 12 Snorlax is saved before waking and captured before risking the Route 16 copy;
- extracted game data establishes FireRed Horsea and LeafGreen Krabby at 84% with the Route 12 Super Rod;
- Route 14 is the Ditto stop at 15%, rather than the 5% Route 13 or Route 15 encounters;
- Fuchsia uses the Good Rod for Poliwag and the Super Rod for direct Goldeen/Seaking;
- the 1% Route 12 Psyduck/Slowpoke encounter waits until Surf makes the version family guaranteed in Fuchsia.

Preserve version switching, stable task IDs, saved completion state, exact living-dex quantities, optional-task semantics, localized Pokémon links, deterministic rendering, and direct events.

A historical self-triggering `MutationObserver` remains disabled by a temporary guard. Remove the dead observer and guard together only after full English, French, and Japanese testing. Do not replace it with another observer, timer, polling loop, or background mutation pass.

---

## 11. UX and performance boundaries

Preserve:

- mobile-first raw-text speed;
- no frameworks, hydration, runtime content fetch, polling, recurring timers, or broad persistent observers;
- in-place expansion and scroll position;
- independent language disclosures;
- safe mobile wrapping;
- exact authored word tags;
- one compact naming-credit block;
- keyboard and touch usability;
- static local data.

Do not reintroduce inferred tags, inferred semantic claims, universal `Created by`, fake controls, or background annotation passes.

---

## 12. Next name batch

Continue from **#179 Mareep**. Choose the endpoint by coherent family boundaries and source quality, not by a fixed batch size. Review whether any species in the range is already a compact guide reference and promote it cleanly if necessary.

---

## 13. Next Living Dex chunk

The next coherent guide extension is the Safari Zone as one focused plan. It should resolve:

1. exact FireRed and LeafGreen family quantities by Safari area;
2. the 500-step limit and clean area-to-area navigation;
3. HM03 Surf and the Gold Teeth without avoidable wasted entries;
4. high-value finite pickups that fit the route;
5. whether one optimized session or several purpose-specific entries is clearest and most reliable;
6. which rare catches should be attempted now versus deferred to a better post-Surf or later-game source.

Keep Koga, post-Surf Fuchsia catches, Cycling Road, and the second Snorlax outside this chunk unless a brief reference is necessary to make the Safari instructions understandable.