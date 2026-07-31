# Research and verification method

> **Before writing or changing any meaning/effect line, read [`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md).** It is the controlling semantic standard for every language and generation. A meaning/effect line states what the name says linguistically; Notes state why the name fits the Pokémon.

Each Pokémon entry is reviewed as a set of separate claims rather than receiving one blanket “verified” label.

The goal is not to produce the most elaborate possible etymology. The goal is to publish the most useful account that the evidence can support.

## What is checked

1. Official English, French, and Japanese names
2. Japanese romanization
3. Types and EV yield, with generation/version limitations identified
4. Proposed roots and wordplay in each language
5. Literal or approximate meaning
6. **Whether every substantive word of meaning/effect is entailed by the displayed Roots rather than imported from design, lore, anatomy, evolution, or mechanics**
7. Familiar words, phrases, sounds, registers, or cultural references a native speaker may notice
8. Borrowed lexical components and any entry-owned language tags they require
9. Historical naming attribution at the narrowest supportable scope
10. The relationship between the three localizations
11. Sources and date of review

## Evidence labels

- **confirmed** — an official creator, publication, game, localizer, or other primary source explicitly states the origin
- **strong** — the construction is linguistically transparent and supported by reliable language references and multiple Pokémon references
- **plausible** — the interpretation fits spelling, sound, design, and context, but another explanation is also reasonable
- **speculative** — insufficient evidence; normally omit rather than publish as fact

A Pokémon may contain both confirmed and uncertain components. State uncertainty locally instead of averaging everything into one confidence score.

Do not upgrade a repeated fan theory merely because many secondary sites copy it.

## Source hierarchy

1. Official Pokémon games, Pokédexes, websites, card lists, publications, localizer statements, creator interviews, and contemporary reporting
2. Official or archival Game Freak, Nintendo, Creatures, or Pokémon Company material
3. Structured game data such as PokéAPI, checked against another reference where practical
4. Reputable dictionaries, etymological dictionaries, corpora, language institutions, botanical/zoological databases, biographies, and cultural reference works
5. Bulbapedia, Poképédia, and similar specialist references as research leads and secondary summaries
6. General fan discussions only as leads to claims that must be verified elsewhere

Source quality is claim-specific. A dictionary can establish what a French word means but not prove that the Pokémon localizer intended it. A creator interview can confirm intention but may still need a dictionary to explain register or ordinary usage.

## Citation requirements

Every audited entry must expose a source list.

The standard base list normally includes:

- Official Japanese Pokédex
- PokéAPI species record
- PokéAPI battle record
- relevant Bulbapedia name-origin notes

That base list is not sufficient for every claim.

Add targeted sources when they materially support:

- ordinary or archaic vocabulary;
- a historical person;
- mythology or folklore;
- botanical or zoological terminology;
- a scientific genus;
- a creator or localizer statement;
- a literary or cultural reference;
- an unusual pronunciation, sound-symbolic form, register claim, or borrowing route;
- a naming-credit default or species-specific override.

Use descriptive source labels. Avoid a vague list of links that does not reveal what each source supports.

## Roots

The Roots field should identify the proposed components and their relevant meanings.

Good Roots text:

- distinguishes an existing whole word from an invented split;
- names uncertainty beside the uncertain component;
- explains voicing, clipping, reversal, borrowing, or spelling adaptation when relevant;
- gives the donor language when a component is borrowed;
- avoids piling unrelated possibilities into one unranked list.

Example:

> 銭亀 (zenigame), an existing term for a young Japanese pond turtle, from 銭 (zeni, old-fashioned money or coin) + 亀 (kame, turtle)

This is better than treating the name as two arbitrary dictionary roots because it explains that the compound itself already exists.

## Borrowed components and tags

A loanword tag is a machine-readable research annotation owned by the audited entry. It is not inferred by the renderer from prose.

Read [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) before adding or changing tags.

When a component meets the project definition of a loanword:

1. explain the borrowing and donor language in Roots or Notes;
2. add a `loanword` tag under the receiving language in that same entry;
3. target the exact characters displayed in Roots;
4. preserve uncertainty in prose and confidence rather than using a tag to imply more certainty than the evidence supports.

```js
tags: {
  japanese: [
    {type:"loanword",text:"ディグ",sourceLanguage:"English"}
  ]
}
```

Do not automatically tag:

- every Latin or Greek learned root;
- an international scientific term;
- a proper name merely retained across languages;
- a distant historical cognate;
- a proposed foreign resemblance whose role remains uncertain;
- an English root inside the English-language analysis itself.

If prose explicitly calls a component an English loanword, English-derived form, or similar secure borrowing, the entry must contain the corresponding authored tag. The validator enforces this for standardized wording.

## Naming attribution

Naming credit is historical provenance, not a fourth etymology-confidence claim.

Read [`NAMING_CREDITS.md`](NAMING_CREDITS.md) before changing attribution data.

For each language, ask separate questions:

1. Who or what organization handled the naming program?
2. Is a particular person documented as the lead, creator, or team member?
3. Does any source identify the exact coiner or exact family contribution?
4. Is the statement contemporary, retrospective, or secondary?
5. Do credible sources conflict about individual versus team authorship?

Use the narrowest supported category:

- `specific` — exact name or family contribution;
- `creator` — individual securely credited for the language set;
- `lead` — program responsibility without proof of personal coinage for every word;
- `team` — a group is documented but individual mapping is not;
- `unknown` — even the responsible team cannot be supported.

Do not infer a namer from design credit, game direction, general translation credit, or later explanation of an etymology. A person may accurately explain a name without having coined it.

When evidence conflicts, preserve the conflict in the attribution detail and batch notes. For Generation I French, for example, contemporary reporting credits a five-person Nintendo France team while later interviews often summarize Julien Bardakoff as the creator of the first 251 names. The default credit therefore remains team-level unless an exact species contribution is documented.

## Meaning / name effect — mandatory Roots-only scope

Read [`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md). Its requirements are non-negotiable.

The second line should communicate what the construction does as a name without merely repeating Roots. **Every substantive claim must still be derivable from Roots, an ordinary whole-word definition, or explicitly stated linguistic wordplay.**

It may describe:

- the literal image encoded by the components;
- the ordinary meaning of an existing whole word;
- the joke, homophone, reversal, clipping, or grammatical effect;
- register, name-like morphology, or sound symbolism already identified in Roots;
- a documented proper-name, scientific, mythological, or cultural referent;
- cautious competing associations already stated in Roots.

It may not add information merely because that information is true of the Pokémon.

Forbidden unless the Roots literally encode it:

- appearance or visual judgment;
- anatomy, carried objects, body shape, or prominent features;
- behavior, powers, type, moves, or abilities;
- first/middle/final evolutionary-stage framing;
- stone evolution or other mechanics;
- cloning, genetic engineering, fossil revival, discovery, or Pokédex story;
- adjectives such as powerful, elegant, sacred, intelligent, heroic, gentle, or fierce when no listed root supplies them.

Use the blind-name test: hide the sprite, Pokédex, evolution family, mechanics, and story. If any word in the gloss can no longer be justified, move it to Notes.

Canonical examples:

- *far-fetched* → “Something implausible or difficult to believe,” not a duck-and-vegetable description;
- 白竜 → “A white dragon,” not “a sacred-looking white dragon”;
- Mew + two → “The second Mew,” not a genetic-engineering summary;
- dodo + duo → “A duo of dodos,” not “two-headed dodo.”

Keep the line concise. Vividness is never a reason to exceed the Roots.

## Name-effect audit baseline

`node scripts/validate-name-effects.mjs` assembles the final rendered research data after every overlay, scans for recurrent leakage language, and verifies a SHA-256 digest of every audited `(ID, language, Roots, meaning/effect)` row.

Any changed Roots or meaning/effect pair—or any newly audited Pokémon—changes the digest and fails validation.

After manually reviewing every changed pair, renew the baseline only with:

```bash
NAME_EFFECT_SCOPE_ATTESTATION='I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.' \
node scripts/validate-name-effects.mjs --write-baseline
```

The command is a semantic attestation. Never copy the digest from CI, hand-edit it, weaken the validator, or exclude a new file or generation from coverage.

## Notes

The interface label is **Notes**.

Notes are for meaningful native-language context that the root split alone does not provide:

- familiar example words;
- how obvious the root is to an ordinary speaker;
- everyday versus technical, archaic, literary, regional, or borrowed register;
- sound symbolism;
- grammatical or phrase-level puns;
- a well-known cultural figure or object;
- why two similar-looking words are not equally likely;
- how a loanword sounds in the receiving language;
- the donor language or adaptation route that supports a tag;
- **why the linguistic name fits the Pokémon's appearance, anatomy, behavior, evolution, mechanics, or story.**

Notes are not claims that every speaker has the same reaction. Use cautious phrasing when native-speaker review is still needed. Do not force a Notes paragraph merely to fill space.

## Localization comparison

The comparison should explain the relationship among the Japanese, French, and English names.

Useful questions:

- Did a localization retain the Japanese name unchanged?
- Did it translate the core image?
- Did it invent a different native-language joke?
- Does one language make a concept more obvious?
- Does an evolutionary family escalate in a deliberate pattern?
- Did a localization lose sound symbolism but gain another association?
- Did it borrow a lexical component, and is that borrowing natively transparent or opaque?

Do not rank localizations as “better” without a specific analytical reason.

## Review statuses

- **pending** — factual record exists, but etymology has not been researched
- **draft** — initial research entered; sources or language notes remain incomplete
- **audited** — names, factual data, roots, meaning/effect scope, Notes, tags where applicable, comparison, and sources have been checked
- **native review requested** — structurally audited, but fluent/native review is still desired for nuance

The live UI currently distinguishes audited from pending. Naming credits display for both states because attribution is stored separately from the etymology overlay.

## Batch process

Entries are audited in evolutionary-family or other linguistically coherent batches.

Every batch should:

1. verify names and romanization;
2. verify factual data and identify version limitations;
3. compare existing text against sources;
4. correct overconfident or incomplete claims;
5. write separate analysis for Japanese, French, and English;
6. write Roots before meaning/effect;
7. run the blind-name test on every Roots→meaning/effect pair;
8. move design, lore, anatomy, evolution, and mechanics to Notes or comparison;
9. add meaningful Notes;
10. identify supported borrowed components and author their entry-owned tags;
11. review whether any exact naming-credit override is supported;
12. attach base and targeted sources;
13. record the actual review date;
14. preserve unresolved alternatives explicitly;
15. write a concise `research-batches/<range>-notes.md` decision record;
16. renew the name-effect baseline with the exact attestation when Roots or meaning/effect changed;
17. run syntax, name-effect, language-tag, and naming-credit validation;
18. load the file in numerical order;
19. update trackers and `HANDOFF.md`.

## Batch size

Choose the largest batch that can be researched without lowering quality.

A larger batch is acceptable when families share source material, roots are transparent, claims can be checked independently, targeted sources are available, tag decisions remain manageable, naming attribution does not require unsupported species-level guesses, and every Roots→meaning/effect pair still receives individual semantic review.

Stop earlier when many names depend on obscure wordplay, source quality becomes thin, alternatives cannot be evaluated carefully, Notes become generic, tags/credits would require guessing, or the blind-name test would be rushed.

Reliability matters more than reaching a round number.

## Data-file structure

Each batch entry generally follows:

```js
id: {
  status: "audited",
  reviewedOn: "YYYY-MM-DD",
  x: [
    [japaneseRoots, japaneseMeaning, japaneseConfidence],
    [frenchRoots, frenchMeaning, frenchConfidence],
    [englishRoots, englishMeaning, englishConfidence]
  ],
  tags: {
    japanese: [
      {type: "loanword", text: "exact Roots substring", sourceLanguage: "English"}
    ]
  },
  c: "Localization comparison",
  a: [japaneseNotes, frenchNotes, englishNotes],
  sources: [{label, url}, ...]
}
```

`tags` is optional when no supported tag applies. Language order in `x` and `a` remains Japanese, French, English. Tags use named language keys.

Naming credits do **not** belong in every research entry. Generation-scoped defaults and exact exceptions live in `naming-credits.js`, where `namingCreditFor(id, languageKey)` resolves them independently of audit status.

The overlay assignment must copy tags into the rendered audit object:

```js
pokemon.audit = {
  status: research.status,
  reviewedOn: research.reviewedOn,
  associations: research.a,
  sources: research.sources,
  tags: research.tags
};
```

## Completeness checks

Before marking a batch complete, verify:

- every intended ID appears exactly once;
- no unintended ID is overwritten;
- all three names and romanization match official records;
- each language has Roots, meaning/effect, confidence, and meaningful Notes where appropriate;
- every meaning/effect proposition is entailed by Roots under `NAME_EFFECT_STANDARD.md`;
- design, lore, anatomy, behavior, evolution, and mechanics are confined to Notes or comparison unless literally encoded;
- the name-effect digest baseline includes every audited language row and has been renewed through the exact manual attestation;
- every supported word-level tag is authored inside the same entry;
- every tag targets an exact Roots substring under the correct language key;
- every loanword tag records a donor language explained in Roots or Notes;
- explicit standardized borrowing claims are not left untagged;
- uncertain foreign resemblance is not upgraded into a tag;
- comparison text, review date, and relevant sources are present;
- weak theories are omitted or labeled plausible;
- the new script is loaded in `index.html`;
- all audited language disclosures resolve a valid naming-credit record;
- later-generation reference entries do not inherit Generation I credit defaults;
- `node --check` passes;
- all three name validators pass;
- trackers and handoff status are updated.

## Native-speaker review

The project can make careful language claims using dictionaries, corpora, and specialist sources, but should remain open to correction from fluent/native speakers.

When nuance is uncertain, say so, avoid universal claims, record the item in batch notes, use cautious phrasing, defer tags or individual credits when boundaries are insecure, and do not hide uncertainty behind polished prose.

This process exists to prevent a large amount of convincing but unreliable AI-generated etymology, false semantic glosses, or false creative attribution from entering the site.
