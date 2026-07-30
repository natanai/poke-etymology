# Poké Etymology

A mobile-first Pokémon language and completion companion.

## Start here

Any new GPT, coding agent, or contributor must begin with [`HANDOFF.md`](HANDOFF.md). It records the current state, next work, architecture, research standards, UX decisions, known failures, and required workflow.

When adding or revising language research, also read [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md). Word-level annotations such as **loanword** are authored inside the audited entry; the interface never infers them from prose.

## Current release

- all 151 Generation I species in English, French, Japanese, and Japanese romanization;
- audited comparative name research for #001–#108;
- pending entries clearly separated from audited research;
- current structured types and EV yields for the Names index;
- in-place Pokémon and per-language disclosures;
- visible audit dates, confidence labels, native-language Notes, localization comparisons, collapsed sources, and entry-owned word-level language tags;
- a FireRed / LeafGreen living-dex guide covering Pallet Town through Route 5;
- shared primary-language behavior and direct Pokémon links between the guide and Names index;
- static, framework-free, near-zero-overhead delivery.

## Project standards

- [`PROJECT_GOALS.md`](PROJECT_GOALS.md)
- [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md)
- [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md)
- [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md)
- [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md)
- [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md)
- [`DECISION_LOG.md`](DECISION_LOG.md)
- [`CONTRIBUTING.md`](CONTRIBUTING.md)

## Validation

Before opening a research pull request, run:

```bash
node scripts/validate-language-tags.mjs
```

The same validation runs on pull requests and before GitHub Pages deployment.

## Live site

https://natanai.github.io/poke-etymology/

## Current next work

See [`HANDOFF.md`](HANDOFF.md) and [issue #5](https://github.com/natanai/poke-etymology/issues/5). After the #091–#108 audit, the next normal name batch begins at #109 Koffing.
