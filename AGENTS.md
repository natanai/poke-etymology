# Instructions for AI agents

## STOP before editing any Pokémon name analysis

Before proposing, editing, researching, or publishing anything in this repository:

1. Read [`HANDOFF.md`](HANDOFF.md) completely.
2. Follow its startup protocol and linked standards.
3. **Before touching name data, read [`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md) completely.**
4. Read [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md), [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md), and [`NAMING_CREDITS.md`](NAMING_CREDITS.md) for every name-analysis contribution.
5. Inspect current `main`, recent PRs, and relevant open issues.
6. Do not rely on a prior chat transcript, model memory, a wiki summary, or generated prose as the source of truth.
7. Keep `HANDOFF.md` current when project state, architecture, scope, next work, research rules, or known risks change.

## Non-negotiable Roots-only rule

The meaning/effect line may state only what is conveyed by the displayed Roots, the ordinary meaning of the whole name, or explicitly stated linguistic wordplay.

It may **not** import facts from:

- the Pokémon's appearance or anatomy;
- its behavior, powers, type, moves, or abilities;
- its evolutionary stage or family role;
- game mechanics;
- Pokédex lore, story, origin, cloning, fossil revival, or design inspiration.

Those facts may explain **why the name fits**, but they belong in Notes or comparison—not meaning/effect.

Use the blind-name test: if the sprite, Pokédex, evolution family, and story were hidden, could a reader still derive every substantive word of the gloss from Roots? If not, rewrite it.

Canonical failures:

- `far-fetched` is not “an unbelievable duck-and-vegetable creature”; it means something implausible or difficult to believe.
- 白竜 is not “a sacred-looking white dragon”; it means “white dragon.”
- `Mew + two` does not mean “genetically engineered counterpart”; it means “the second Mew.”

## Required validation for name work

Run:

```bash
node scripts/validate-language-tags.mjs
node scripts/validate-name-effects.mjs
node scripts/validate-naming-credits.mjs
```

If the name-effect digest changes, manually compare every changed Roots→meaning/effect pair and renew the baseline only with the exact attestation documented in `NAME_EFFECT_STANDARD.md`.

Never weaken the validator, exclude a new file or generation from its coverage, hand-edit around the baseline, or copy a digest merely to pass CI.

Any pull request changing name-analysis data must contain this exact checked line:

```text
- [x] I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.
```

Failing to include it is a validation error, not optional documentation.

## Other non-negotiable defaults

- reliability over research volume;
- static local data over runtime fetching;
- one deterministic render over observers, timers, polling, or hydration;
- near-instant raw-text loading;
- mobile-first, uncluttered, functional UI;
- no fake controls;
- no generic Pokédex scope expansion;
- no claims of deployment until deployment is actually verified;
- branch → validation → PR → merge for normal work;
- direct `main` changes only for small emergency hotfixes.

A new agent receiving “Carefully read the handoff document and follow its instructions” should treat `HANDOFF.md` as the authoritative operational record and `NAME_EFFECT_STANDARD.md` as the controlling semantic rule for every Roots→meaning/effect pair.
