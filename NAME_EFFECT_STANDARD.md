# STOP: meaning/effect lines are Roots-only claims

> **This is a non-negotiable data rule for every language, every Pokémon, every generation, and every contributor—including GPTs and coding agents.**
>
> Before writing or changing any meaning/effect line, compare it word by word with the displayed **Roots**. If a substantive claim cannot be derived from those Roots, an ordinary definition of the whole name, or explicitly stated sound/wordplay, it does **not** belong in meaning/effect.

This file is authoritative. When another document is vague or seems to permit broader wording, this rule controls.

## The rule in one sentence

**Meaning/effect explains what the name says or does linguistically; Notes explain why that name fits the Pokémon.**

A Pokémon's appearance, anatomy, behavior, evolution, game mechanics, Pokédex story, or design inspiration may explain why a name was chosen. None of those facts becomes part of the name's meaning merely because it matches the Pokémon.

## Formal entailment rule

For one language entry, let:

- **R** = the displayed Roots, including explicitly listed whole-word meanings, components, clipping, borrowing, puns, and sound associations;
- **G** = the proposed meaning/effect gloss.

The gloss is valid only when every substantive proposition in **G** is entailed by **R** plus ordinary linguistic knowledge needed to paraphrase **R**.

1. Every published meaning/effect line makes one or more claims.
2. A claim presented as the meaning/effect of a name must be supported by the name analysis.
3. Design, lore, anatomy, evolution, and mechanics are not linguistic components unless the Roots explicitly encode them.
4. Therefore, any claim supplied only by design, lore, anatomy, evolution, or mechanics is invalid in meaning/effect and must be moved to Notes or the localization comparison.

A gloss does not become valid merely because it is true of the Pokémon.

## The blind-name test

Before accepting a gloss, imagine that you cannot see the Pokémon, its sprite, Pokédex entry, type, evolution family, moves, or story.

Ask:

1. Could a reader derive this gloss from the written name and Roots alone?
2. Does every adjective come from a root, whole-word definition, grammatical effect, register, or documented sound association?
3. Does every action come from the name rather than from what the Pokémon does?
4. Does the line mention size, body parts, shape, appearance, evolutionary stage, game mechanics, creation story, or behavior that the Roots do not state?

If any answer exposes outside information, the gloss fails.

## Content that belongs in meaning/effect

Meaning/effect may concisely state:

- a literal compound: `white + dragon` → “A white dragon.”
- an existing word's ordinary meaning: *far-fetched* → “Something implausible or difficult to believe.”
- a transparent pun: `nine + tales`, homophonous with *nine tails* → “Nine tales, punning on nine tails.”
- a grammatical or sentence-level joke identified in Roots;
- clipping, reversal, respelling, borrowing, or name-like morphology;
- sound symbolism or register explicitly identified in Roots;
- a documented proper-name, mythological, scientific, or cultural referent;
- a cautious combination of competing roots already stated in Roots.

The line may apply a component naturally—“a wrathful tadpole” from *polliwog + wrath*—but it may not add a trait merely because the Pokémon has it.

## Content forbidden from meaning/effect unless literally encoded in Roots

Move these to Notes or comparison:

- visual judgments: “sacred-looking,” “cute-looking,” “menacing-looking”;
- anatomy and design: prominent tail, oversized claw, shell resemblance, body shape, limbs, fur, heads, carried objects;
- behavior and powers: fires blasts, controls weather, digs underground, swallows, protects, rescues;
- evolutionary framing: first stage, middle stage, final form, larger evolution, fully developed, second sphere;
- mechanics: evolved with a stone, type, move, ability, stat, encounter method;
- story and Pokédex lore: cloned, genetically engineered, artificially created, newly discovered, revived fossil;
- unsupported evaluative adjectives: powerful, heroic, elegant, sacred, gentle, intelligent, fierce, unless a listed root actually supplies that meaning;
- species/design labels absent from Roots: duck, bird, horse, fossil, gas creature, plant creature, and similar additions.

## Canonical bad and good examples

### Farfetch'd

**Roots:** *far-fetched*, altered with an apostrophe

Bad:

> An implausible or unbelievable duck-and-vegetable creature.

Why it fails: *far-fetched* means implausible or difficult to believe. Duck and vegetable come from the character design and localization context.

Good:

> Something implausible or difficult to believe.

The duck, leek, Japanese proverb, and localization relationship belong in Notes and comparison.

### Dragonair — Japanese

**Roots:** 白竜 (*hakuryū*, white dragon)

Bad:

> A sacred-looking white dragon.

Why it fails: 白竜 supplies “white dragon.” A traditional sacred association may be relevant Notes material, but “looking” is a visual judgment not encoded by the compound.

Good:

> A white dragon.

### Mewtwo

**Roots:** Mew + two

Bad:

> The second, genetically engineered counterpart to Mew.

Why it fails: “genetically engineered counterpart” is story information.

Good:

> The second Mew.

### Doduo

**Roots:** dodo + duo

Bad:

> Two-headed dodo.

Why it fails: *duo* supplies a pair, not specifically two heads.

Good:

> A duo of dodos.

### Omastar

**Roots:** Omanyte/ammonite family base + star

Bad:

> The star-shaped evolution of Omanyte.

Why it fails: “evolution of Omanyte” is family context, and “shaped” is a design claim.

Good:

> A star ammonite.

### Snorlax

**Roots:** snore + lax/relax

Bad:

> A relaxed, constantly snoring creature.

Why it fails: “constantly” and the creature framing come from behavior/context.

Good:

> A relaxed or lax snorer.

## Existing words and referents

An existing whole word or named referent may be explained by its ordinary definition. For example:

- Rafflesia may be identified as the flower genus because that is the referent of the borrowed name.
- *drowsy* may be glossed as sleepy because that is the word's meaning.
- a mythological proper name may be identified with its documented figure.

Do not expand a referent into every fact known about it. Include only the information needed to identify the lexical or cultural referent; additional relevance belongs in Notes.

## Required writing workflow

For every language row:

1. Research and write Roots first.
2. Write a literal one-sentence paraphrase using only Roots.
3. Run the blind-name test.
4. Move all “why it fits this Pokémon” material to Notes.
5. Preserve uncertainty in Roots and confidence rather than compensating with a vivid gloss.
6. Run `node scripts/validate-name-effects.mjs`.
7. If Roots or meaning/effect changed, manually review every changed pair and renew the audit baseline only with the exact attestation required by the validator.
8. Check the exact name-effect attestation in the pull-request template.

## Baseline renewal is an attestation, not a formatting command

The repository stores a SHA-256 digest of every audited `(Pokédex ID, language, Roots, meaning/effect)` row. Any change or new audited entry changes that digest and fails CI.

After manually reviewing every changed pair, renew it with:

```bash
NAME_EFFECT_SCOPE_ATTESTATION='I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.' \
node scripts/validate-name-effects.mjs --write-baseline
```

Never copy the digest from a failed CI log merely to make the check pass. Doing so falsely certifies semantic review.

## No validator bypasses

Do not:

- weaken or delete prohibited-pattern checks to accommodate a bad gloss;
- exclude a new generation, language, or file from the assembled audit;
- hand-edit the baseline digest without performing the review;
- add a blanket exception for words such as “evolution,” “body,” or “appearance”;
- hide unsupported context in euphemistic wording;
- claim that Notes support material in meaning/effect—the fields serve different purposes.

A genuine lexical exception must be documented narrowly in this standard or in a dedicated, exact validator exception with a written reason. Correcting the gloss is the default.

## Scaling beyond Generation I

This rule is generation-independent. When the project grows beyond 1,000 Pokémon:

- every audited language row must be included in the assembled snapshot;
- every new language must be added explicitly to the validator and schema;
- no generation may receive a weaker standard for speed;
- bulk model output must remain draft until each Roots→meaning/effect pair passes the blind-name test;
- batch size must shrink whenever semantic review quality would otherwise fall.

The purpose of the standard is to prevent plausible-sounding AI prose from silently converting character knowledge into false etymology.
