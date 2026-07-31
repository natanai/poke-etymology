# Full multilingual name-effect scope audit

**Reviewed:** 2026-07-31  
**Scope:** all 151 Generation I Pokémon × Japanese, French, and English = **453 language analyses**

## Why this audit was necessary

The project had correctly researched many Roots but sometimes allowed the following meaning/effect line to become a miniature description of the Pokémon. This silently changed a linguistic claim into a design, anatomy, evolution, mechanics, or lore claim.

The original diagnostic example was English Farfetch'd:

- Roots: *far-fetched*, altered with an apostrophe
- invalid gloss: “An implausible or unbelievable duck-and-vegetable creature.”
- valid gloss: “Something implausible or difficult to believe.”

Duck-and-vegetable context explains why the expression fits the character and belongs in Notes or localization comparison. It is not the lexical meaning of *far-fetched*.

Japanese Dragonair showed that the error was not limited to English:

- Roots: 白竜 (*hakuryū*, white dragon)
- invalid gloss: “A sacred-looking white dragon.”
- valid gloss: “A white dragon.”

A traditional sacred association may be useful Notes material, but “looking” converts it into an unsupported visual judgment.

## Audit method

1. The final runtime data was assembled after `data.js`, generated data, all numbered verified-research overlays, and the correction overlay.
2. `scripts/report-name-effects.mjs` printed every final `(ID, language, Roots, meaning/effect, confidence)` row in four bounded CI partitions: #001–#040, #041–#080, #081–#120, and #121–#151.
3. Every one of the 453 Roots→meaning/effect pairs was manually reviewed using the blind-name test in `NAME_EFFECT_STANDARD.md`.
4. A gloss was changed when a substantive word depended on seeing or knowing the Pokémon rather than on the displayed Roots, an ordinary definition of the whole name, or explicitly stated wordplay.
5. The first automated enforcement run then caught two residual leaks—Golduck Japanese referenced body color, and Pinsir English described its crushing anatomy—which were also corrected before the baseline was sealed.

## Result

**132 of 453 meaning/effect lines were corrected.** The remaining 321 were retained after individual review.

The corrections cover all three languages and include these recurring categories:

- **appearance or anatomy:** prominent tails, oversized claws, heads, shells, limbs, body shape, visual judgments;
- **behavior or powers:** firing, digging, controlling weather, swallowing, protecting, or other actions absent from Roots;
- **evolutionary framing:** first/middle/final stage, larger evolution, developed form, second sphere;
- **mechanics:** evolution stones and other game processes;
- **story or Pokédex lore:** cloning, genetic engineering, artificial creation, fossil revival, discovery;
- **unsupported evaluative language:** elegant, heroic, sacred, powerful, gentle, intelligent, fierce, and similar adjectives not supplied by the name;
- **species/design labels absent from Roots:** horse, bird, duck, fossil, gas creature, plant creature, and similar additions.

Representative corrections include:

- Doduo: “Two-headed dodo” → “A duo of dodos.”
- Dodrio: “Three-headed dodo” → “A trio of dodos.”
- Omastar: “The star-shaped evolution of Omanyte” → “A star ammonite.”
- Snorlax: “A relaxed, constantly snoring creature” → “A relaxed or lax snorer.”
- Mewtwo: genetic-engineering summaries → “The second Mew.”
- Articuno, Zapdos, and Moltres: removed legendary-bird descriptions not encoded by the elemental and numeral constructions.

The complete correction overlay is `verified-research-name-effect-fixes.js`.

## Deliberately preserved boundaries

This audit did **not** alter:

- Roots or their confidence labels;
- Notes and their native-language/contextual discussion;
- localization comparisons;
- source lists;
- language tags;
- naming-credit records;
- Pokémon factual data.

A gloss was not shortened merely for being creature-oriented. Applying a root naturally remains valid—for example, “a wrathful tadpole” follows from *polliwog + wrath*. A line was changed only when it asserted something not entailed by the linguistic construction.

## Permanent prevention added

The audit produced a repository-wide invariant rather than another one-time cleanup:

- `NAME_EFFECT_STANDARD.md` is the authoritative semantic rule and contains formal entailment, the blind-name test, forbidden categories, canonical failures, and scaling requirements.
- `AGENTS.md`, `CONTRIBUTING.md`, `RESEARCH_METHOD.md`, the README, the PR template, and `HANDOFF.md` all point to the same rule.
- `scripts/validate-name-effects.mjs` assembles final runtime data, checks recurrent leakage patterns, and verifies a SHA-256 digest over every audited `(ID, language, Roots, meaning/effect)` row.
- `name-effect-scope-baseline.json` records the reviewed dataset. Every new audited entry or changed Roots/gloss pair changes the digest and fails CI until manually reviewed.
- Name-analysis pull requests must contain the exact checked attestation: “I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.”
- The validator refuses baseline renewal without the same exact environment attestation and warns contributors not to copy a digest from CI.

## Scaling rule

The audit and validator are generation-independent. As the project expands beyond 1,000 Pokémon, every new audited language row must enter the assembled snapshot and baseline. No generation, language, bulk import, GPT, or contributor receives a weaker standard for speed.
