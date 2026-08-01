# Poké Etymology

A mobile-first Pokémon language and completion companion.

## Start here

Any new GPT, coding agent, or contributor must begin with [`HANDOFF.md`](HANDOFF.md). It records the current state, next work, architecture, research standards, UX decisions, known failures, and required workflow.

> **Before adding or revising any Pokémon name analysis, read [`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md).** Meaning/effect lines are Roots-only linguistic claims. Appearance, anatomy, behavior, evolution, mechanics, and lore belong in Notes or comparison unless the displayed Roots literally encode them.

When adding or revising language research, also read:

- [`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md) for the mandatory Roots→meaning/effect entailment rule and audit baseline;
- [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) for entry-owned word annotations such as **loanword**;
- [`NAMING_CREDITS.md`](NAMING_CREDITS.md) for historical attribution inside every language disclosure.

The interface does not infer tags, semantic scope, or naming authorship from prose.

## Current release

- all 151 Generation I species plus the first 18 Generation II species, #152–#169, in English, French, Japanese, and Japanese romanization;
- complete audited comparative name research for #001–#169;
- current structured types and EV yields for the Names index;
- in-place Pokémon and per-language disclosures;
- visible audit dates, confidence labels, native-language Notes, localization comparisons, collapsed sources, and entry-owned word-level language tags;
- documented generation-scoped **Name credit** records inside every Japanese, French, and English disclosure, including honest team/lead/unknown states and a specific English Quilava credit;
- a Kanto/Johto region selector plus searchable region and generation terms;
- a FireRed / LeafGreen living-dex guide maintained in parallel with the name-research batches;
- shared primary-language behavior and direct Pokémon links between the guide and Names index;
- static, framework-free, near-zero-overhead delivery.

## Project standards

- [`PROJECT_GOALS.md`](PROJECT_GOALS.md)
- [`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md)
- [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md)
- [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md)
- [`NAMING_CREDITS.md`](NAMING_CREDITS.md)
- [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md)
- [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md)
- [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md)
- [`DECISION_LOG.md`](DECISION_LOG.md)
- [`CONTRIBUTING.md`](CONTRIBUTING.md)

## Validation

Before opening a research pull request, run:

```bash
node scripts/validate-region-filter.mjs
node scripts/validate-language-tags.mjs
node scripts/validate-name-effects.mjs
node scripts/validate-naming-credits.mjs
```

The name-effect validator assembles the rendered research data, rejects recurrent design/lore leakage, and verifies a SHA-256 baseline covering every audited Roots→meaning/effect pair. The same validation runs on pull requests and before publication where configured.

## Live site

https://natanai.github.io/poke-etymology/

## Current next work

See [`HANDOFF.md`](HANDOFF.md) and issue #31. Continue Generation II etymology from #170 in coherent reviewed batches while the FireRed / LeafGreen Living Dex guide advances independently. Before merging either stream, compare it with the latest `main` and review concurrent changes.
