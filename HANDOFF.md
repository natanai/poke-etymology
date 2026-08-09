# Poké Etymology — authoritative project handoff

> **Required starting point for every new GPT, coding agent, and human contributor.** Read this document completely before proposing or making changes. Inspect current `main`, open PRs, and active branches; this snapshot may have been superseded.

**Snapshot:** 2026-08-08  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Published Names data:** #001–#186  
**Audited etymology:** Generation I #001–#151 plus Generation II #152–#186  
**Name-effect baseline:** 186 Pokémon × 3 languages = 558 reviewed rows  
**FireRed / LeafGreen guide:** 41 stages from Pallet Town through the Safari Zone and return of the Gold Teeth for HM04 Strength

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

- 186 audited Pokémon;
- 558 language rows;
- audited through #186;
- digest `7a935aa45c9fb9d76526dc1261c541229b4bb60748225ab1e9f319fa4b0d127c`;
- reviewed on 2026-08-08.

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
- **#170–#178:** Chinchou through Xatu — `research-batches/170-178-notes.md`;
- **#179–#186:** Mareep through Politoed — `research-batches/179-186-notes.md`.

The first three Johto batches contain 27 reviewed language rows each; #179–#186 contains 24.

Important #179–#186 uncertainty boundaries:

- Merriep: English *merry*, Mary, sheep-baa, and *sheep* overlap without one uniquely documented segmentation;
- Flaaffy: *fluffy + baa* is the core, while `AA` remains only a secondary spelling echo;
- Ampharos: *amp/ampere + pharos* is the core; *amparo* remains secondary;
- Bellossom: *bell + blossom* is the core, with possible French *belle* reinforcement;
- Marill: Japanese *mari + ruri* and international *marine + rill* are reconstructions, and the adaptation relationship is unresolved;
- Azumarill: *azur/azure + Marill* is stronger internationally, while Japanese inherits the uncertain Maril material;
- Nyorotono: *nyoronyoro + tono* is the core, with *tonosama-gaeru* possible reinforcement;
- Politoed: *polliwog + toad* is the core, with *poly- + toed* only secondary.

Do not flatten these into cleaner unsupported answers. Family resemblance, design, typing, and behavior must not be used to upgrade lexical confidence.

---

## 5. Generation-scoped data architecture

The Names page publishes #001–#186.

Load order:

1. `data.js`
2. `generated-data.js` — Generation I #001–#151
3. `generation-ii-data.js` — append-only Generation II facts, currently #152–#186
4. `associations.js`
5. `naming-credits.js`
6. `naming-credits-generation-ii.js`
7. `verified-research.js`
8. numbered `verified-research-*.js` files in Pokédex order, through `verified-research-179-186.js`
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

Promotion history includes Crobat, Cleffa, Igglybuff, Bellossom, and Politoed. The current compact reference layer contains Espeon, Umbreon, Slowking, Steelix, Scizor, Kingdra, Porygon2, Blissey, Raikou, Entei, and Suicune.

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

Current validated total: **144 tags across 115 language analyses**.

Do not tag a donor language when the source language itself is unresolved. A plausible secondary root may be tagged only when the displayed Roots actually present it as borrowed material and the donor language is supportable.

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

No #179–#186 entry receives a new exact-person override. Several French constructions are explained in sources associated with Julien Bardakoff, but an etymology explanation alone does not prove sole species-level coinage.

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

The guide validator currently expects 41 stages and checks unique IDs, task groups, Pokémon tokens, factual-data loading, required scripts, script order, compact references that duplicate published `DATA`, and the obsolete `500 steps` Safari wording. FireRed / LeafGreen uses **600 field steps** per Safari entry.

### Hosted CI readiness lifecycle

Hosted CI is confirmation of completed work, not a mechanism for intentionally producing an expected red run.

- every `agent/*` pull request must begin as a draft;
- a newly opened `agent/*` PR that is incorrectly opened ready is automatically converted back to draft by `.github/workflows/validate.yml`;
- the static and guide validators skip their normal validation job for that initial opened-ready agent event;
- draft synchronizations remain quiet;
- `ready_for_review` is the normal first hosted validation point after local/agent validation, semantic review, baseline renewal, and reconciliation are complete;
- once ready, later commits continue to trigger validation normally.

Do not mark a PR ready merely to obtain the new semantic digest or to confirm a known baseline mismatch. A known expected failure must be resolved before the ready state. PR #44 exposed this failure mode when a deliberately stale #178 baseline was submitted as a ready PR for #179–#186; the data was sound, but the expected red run generated an unnecessary failure notification.

---

## 9. Concurrent workflow rule

Name research and FireRed guide work may proceed in parallel, but they share `main`.

For every branch:

1. branch from current `main`;
2. keep unrelated subsystems isolated;
3. open the PR as draft and keep it draft while research, reconciliation, baseline renewal, or validation is incomplete;
4. clear every known failure and renew any intentional semantic baseline change before marking ready;
5. immediately before ready/merge, inspect current `main`, open PRs, and active branches;
6. reconcile shared documentation and `reference-data.js` deliberately;
7. rerun every affected validator;
8. mark ready only when the PR is expected to pass hosted CI;
9. merge only when GitHub reports the PR mergeable and checks pass.

Guide work should generally remain under `guides/`, plus necessary shared references and authoritative documentation. Name batches should not edit guide content files unless a true cross-feature architecture change is required.

---

## 10. Living Dex guide

The FireRed / LeafGreen guide contains 41 stages from Pallet Town through the Safari Zone reward/catch loop and return of the Gold Teeth for HM04 Strength.

Current progression includes:

- Pallet Town through Route 5;
- Vermilion, S.S. Anne, Diglett's Cave, and Lt. Surge;
- Route 9, Rock Tunnel, Lavender, Celadon, and Route 16;
- Game Corner prizes, Rocket Hideout, Erika, Pokémon Tower catches, and the Poké Flute;
- the first Snorlax, Route 12 fishing, Routes 13–15, and Fuchsia City fishing setup;
- Safari prize route, Center catches, area-specific rare catches, Dratini fishing, and the Warden / HM04 Strength cleanup.

Research records:

- `guides/research-vermilion.md`;
- `guides/research-rock-tunnel-celadon.md`;
- `guides/research-celadon-tower.md`;
- `guides/research-route12-fuchsia.md`;
- `guides/research-safari.md`.

Important current plans:

- Porygon is the only required Game Corner prize;
- Scyther/Pinsir Game Corner prizes are optional guaranteed alternatives to the Safari Zone;
- the Ghost-family plan uses one Gastly and two wild Haunter, with one Haunter traded into Gengar;
- the Marowak spirit is uncatchable;
- the Route 12 Snorlax is saved before waking and captured before risking the Route 16 copy;
- extracted game data establishes FireRed Horsea and LeafGreen Krabby at 84% with the Route 12 Super Rod;
- Route 14 is the Ditto stop at 15%, rather than the 5% Route 13 or Route 15 encounters;
- Fuchsia uses the Good Rod for Poliwag and the Super Rod for direct Goldeen/Seaking;
- the 1% Route 12 Psyduck/Slowpoke encounter waits until Surf makes the version family guaranteed in Fuchsia;
- Safari entries are **600 field steps**, ₽500, and 30 Safari Balls — not 500 steps;
- the first Safari run goes Center → East → North → West to secure Gold Teeth and HM03 Surf before deliberate rare hunting;
- Safari rare hunts use their best 4% tables: Scyther/Pinsir in Center, Kangaskhan in East, Chansey in North, Tauros in West;
- catch three Dratini at the 15% Super Rod slot rather than requiring the 1% Dragonair slot;
- Chansey’s later Blissey branch uses a postgame bred copy; Blissey is currently a compact guide reference.

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

Continue from **#187 Hoppip**. Choose the endpoint by coherent family boundaries and source quality, not by a fixed batch size. Review whether any species in the range is already a compact guide reference and promote it cleanly if necessary.

---

## 13. Next Living Dex chunk

The next coherent guide extension should begin with the **Fuchsia Gym / Koga** and then use the newly available field HMs rather than leaving them idle:

1. verify Koga’s team, Soul Badge effects, and any completion-relevant Gym reward;
2. use Surf in Fuchsia immediately after the badge to close the version water family — FireRed Psyduck/Golduck or LeafGreen Slowpoke/Slowbro/Slowking planning;
3. review any concise Strength cleanup that is now worth doing without turning the guide into an item walkthrough;
4. return to Route 16 for the second unique Snorlax, including its second hidden Leftovers;
5. cover Cycling Road / Routes 17–18 as one connected western-route cleanup with exact catches, items, and one-way constraints.

Keep the same earliest-practical-catch rule. If a Route 17–18 species is substantially easier somewhere later, say so rather than forcing a low-rate catch now. The chunk should end at a natural decision point before the next major story/catch region, likely Saffron or the next Surf-dependent route after the encounter tables are reviewed.
