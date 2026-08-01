# Poké Etymology — authoritative project handoff

> **Required starting point for every new GPT, coding agent, and human contributor.** Read this document completely before proposing or making changes. Inspect current `main`, open PRs, and active branches; this snapshot may have been superseded.

**Snapshot:** 2026-07-31  
**Repository:** `natanai/poke-etymology`  
**Live site:** `https://natanai.github.io/poke-etymology/`  
**Published Names data:** #001–#169  
**Audited etymology:** Generation I #001–#151 plus Generation II #152–#169  
**Name-effect baseline:** 169 Pokémon × 3 languages = 507 reviewed rows  
**FireRed / LeafGreen guide:** 31 stages from Pallet Town through Pokémon Tower and receipt of the Poké Flute

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

- 169 audited Pokémon;
- 507 language rows;
- audited through #169;
- reviewed on 2026-07-31.

The exact attestation is:

> I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.

Never copy a digest merely to clear CI, weaken the validator, or exclude a generation from assembled coverage.

---

## 4. Current Names status

### Generation I

All #001–#151 have complete Japanese, French, and English analysis, Notes, confidence, localization comparison, sources, tags where applicable, and naming credits.

A complete 453-row semantic audit corrected 132 earlier glosses. Its record remains in `research-batches/english-name-effect-corrections-notes.md`; the historical filename now covers all three languages.

### Generation II batch #152–#160

The Johto starter-family batch contains:

- Chikorita, Bayleef, Meganium;
- Cyndaquil, Quilava, Typhlosion;
- Totodile, Croconaw, Feraligatr.

All 27 language analyses were written under the Roots-only standard. The decision record is [`research-batches/152-160-notes.md`](research-batches/152-160-notes.md).

Important unresolved boundaries remain local and explicit:

- Magmarashi's final animal component;
- Typhlosion's possible secondary Typhon echo;
- Ordile's opening `ō`, which may evoke king, emperor, or large.

### Generation II batch #161–#169

The second Johto batch contains:

- Sentret and Furret;
- Hoothoot and Noctowl;
- Ledyba and Ledian;
- Spinarak and Ariados;
- Crobat.

All 27 language analyses were individually reviewed, including uncertainty-heavy names. The decision record is [`research-batches/161-169-notes.md`](research-batches/161-169-notes.md).

Do not flatten these unresolved cases:

- Otachi's tail / standing / weasel overlap;
- Fouinar's possible *renard* versus *fouiner* ending;
- Rediba/Ledyba's *ladybug* versus *ladybird* clipping and probable *red* component;
- Redian/Ledian's possible *alien* or *guardian* ending;
- Ariados's Ariadne, arachnid, Japanese *odosu*, and Spanish *dos* possibilities;
- Crobat's *cross + bat*, *acrobat*, and Japanese *kuro* overlap.

The uncertainty is part of the audited result, not unfinished prose to be made neater later.

---

## 5. Generation-scoped data architecture

The Names page currently publishes #001–#169.

Load order:

1. `data.js`
2. `generated-data.js` — generated Generation I #001–#151
3. `generation-ii-data.js` — append-only factual Generation II layer, currently #152–#169
4. `associations.js`
5. `naming-credits.js` — Generation I attribution
6. `naming-credits-generation-ii.js` — Generation II attribution
7. `verified-research.js`
8. numbered `verified-research-*.js` files in Pokédex order, currently through `verified-research-161-169.js`
9. `verified-research-name-effect-fixes.js`
10. `reference-data.js`
11. `app.js`
12. `region-filter.js`

Do not hand-edit `generated-data.js` as research storage. Do not widen `scripts/build-data.mjs` in a way that can overwrite Johto work without a documented migration.

Future Generation II batches extend `generation-ii-data.js` and add a numbered research overlay. They must enter every validator and the semantic baseline immediately.

`reference-data.js` contains guide-linked later-generation species that should be directly linkable before entering the published Names list. Crobat was removed when #169 became a published audited record. The compact reference layer currently includes Cleffa, Igglybuff, Bellossom, Espeon, Umbreon, Steelix, Scizor, Porygon2, Raikou, Entei, and Suicune. Do not treat those compact records as audited name entries.

The region selector and text search derive published Johto membership from `DATA`. Region validation must remain data-driven; never restore a hard-coded last-published Johto list.

---

## 6. Language tags

[`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) is authoritative.

The supported type is `loanword`. Tags:

- belong to the audited entry and exact language;
- target an exact Roots substring;
- record `sourceLanguage` in data and explain it in Roots or Notes;
- use optional `occurrence` only for repeated exact text;
- are never inferred by `app.js`.

`scripts/validate-language-tags.mjs` assembles Generation I and the published Generation II layer. Current validated total after #161–#169 is 121 tags across 96 language analyses.

Alternative roots may be tagged only when they are genuinely presented as lexical borrowing possibilities in that language analysis. A tag does not upgrade an uncertain root to certainty.

---

## 7. Naming credits

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) is authoritative.

Generation I and Generation II have separate bounded registries.

### Generation II defaults

- Japanese: Game Freak naming staff, team-level by default.
- French: Nintendo France first-251 localization context, team-level unless an exact species decision is documented.
- English: Pokémon Gold and Silver US localization coordination team, not one presumed universal coiner.

English Quilava has a specific Jeff Kalles override because he identifies it as his suggestion.

No #161–#169 entry received a new individual override. Species-specific French etymology explanations support the constructions but do not, by themselves, prove sole species-by-species coinage beyond the documented team context.

`scripts/validate-naming-credits.mjs` requires every published ID to be contiguous and every published language disclosure to resolve a complete generation-scoped credit. It no longer hard-codes the current maximum ID.

Never extend one generation by simply widening another generation's ID check. Later generations require their own researched registry and validator boundary.

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

Run before every Living Dex PR:

```bash
for file in guides/*.js guides/*.mjs; do node --check "$file"; done
node guides/validate-guide.mjs
```

The guide validator currently expects 31 stages and checks unique stage/task IDs, supported task groups, Pokémon tokens in tasks and drawers, published Generation II data loading, required scripts, and script order.

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

The FireRed / LeafGreen guide contains 31 stages from Pallet Town through the Pokémon Tower summit and receipt of the Poké Flute.

Current guide progression:

- Pallet Town through Route 5;
- Routes 5–6, Vermilion City, S.S. Anne, Route 11, Diglett’s Cave / Route 2, and Lt. Surge;
- Route 9, Route 10 North, Rock Tunnel, Lavender / Route 8, Celadon setup, and Route 16 North;
- Game Corner prizes, Rocket Hideout, Celadon Gym, Pokémon Tower catches, and the summit/Poké Flute.

Research records:

- `guides/research-vermilion.md`;
- `guides/research-rock-tunnel-celadon.md`;
- `guides/research-celadon-tower.md`.

Important current plans:

- Porygon is the only required Game Corner prize; deterministic cash costs are documented by version.
- Scyther in FireRed and Pinsir in LeafGreen are optional guaranteed alternatives to the Safari Zone.
- The Ghost-family plan uses one Gastly and two wild Haunter on 7F, then trades one Haunter into Gengar.
- The Marowak spirit is uncatchable.
- The Poké Flute unlocks the two unique Snorlax encounters on Routes 12 and 16.

The guide factual-data order is:

1. `data.js`;
2. `generated-data.js`;
3. `generation-ii-data.js`;
4. `reference-data.js`;
5. route and localization files;
6. `guide.js` and touch corrections.

Published Johto Pokémon resolve from `DATA`; compact references are only for unpublished later-generation family links.

Preserve:

- version switching;
- persistent completion state and stable task IDs;
- exact living-dex quantities;
- optional tasks excluded from required progress;
- localized Pokémon links;
- compact disclosures and source drawer;
- one deterministic render and direct events.

Later-generation family planning may use compact records in `reference-data.js`, but those species must not appear in the visible Names list merely because the guide links them.

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

Continue Generation II from #170 in coherent evolutionary or linguistic groups. The next batch should be chosen only after reviewing source quality, family boundaries, and whether pending guide-reference species would be promoted into the published dataset.

Do not assume every batch must contain exactly nine species. Review depth and coherent linguistic grouping are more important than numerical regularity.

---

## 13. Next Living Dex chunk

The next coherent extension should:

1. choose and explain the first Snorlax encounter without risking both unique copies;
2. cover Route 12 and its completion-relevant catches, fishing, trades, and items;
3. continue through Routes 13–15;
4. arrive in Fuchsia City with the next catch plan prepared.

Keep the Safari Zone as a separate later chunk. Its timed navigation, version-exclusive encounters, fishing tables, HM03 Surf, Gold Teeth, one-save items, and family quantities need their own focused review.
