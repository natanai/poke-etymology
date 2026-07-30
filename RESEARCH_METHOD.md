# Research and verification method

Each Pokémon entry is reviewed as a set of separate claims rather than receiving one blanket “verified” label.

The goal is not to produce the most elaborate possible etymology. The goal is to publish the most useful account that the evidence can support.

## What is checked

1. Official English, French, and Japanese names
2. Japanese romanization
3. Types and EV yield, with generation/version limitations identified
4. Proposed roots and wordplay in each language
5. Literal or approximate meaning
6. Familiar words, phrases, sounds, registers, or cultural references a native speaker may notice
7. Borrowed lexical components and any entry-owned language tags they require
8. The relationship between the three localizations
9. Sources and date of review

## Evidence labels

- **confirmed** — an official creator, publication, game, or other primary source explicitly states the origin
- **strong** — the construction is linguistically transparent and supported by reliable language references and multiple Pokémon references
- **plausible** — the interpretation fits spelling, sound, design, and context, but another explanation is also reasonable
- **speculative** — insufficient evidence; normally omit rather than publish as fact

A Pokémon may contain both confirmed and uncertain components. State uncertainty locally instead of averaging everything into one confidence score.

Do not upgrade a repeated fan theory merely because many secondary sites copy it.

## Source hierarchy

1. Official Pokémon games, Pokédexes, websites, card lists, publications, localizer statements, and creator interviews
2. Official or archival Game Freak material
3. Structured game data such as PokéAPI, checked against another reference where practical
4. Reputable dictionaries, etymological dictionaries, corpora, language institutions, botanical/zoological databases, biographies, and cultural reference works
5. Bulbapedia and similar specialist references as research leads and secondary summaries
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
- a creator statement;
- a literary or cultural reference;
- an unusual pronunciation, sound-symbolic form, register claim, or borrowing route.

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

Example:

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
- a proposed foreign resemblance whose role in the Pokémon name remains uncertain;
- an English root inside the English-language analysis itself.

If prose explicitly calls a component an English loanword, English-derived form, or similar secure borrowing, the entry must contain the corresponding authored tag. The validator enforces this for standardized explicit wording.

## Meaning / name effect

The second line should communicate what the construction does as a name, not merely repeat the Roots field.

It may describe:

- the literal image;
- the joke;
- the personality effect;
- the progression within an evolutionary family;
- how a clipped or borrowed form sounds.

Keep it concise.

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
- the donor language or adaptation route that supports a tag.

Notes are not claims that every speaker has the same reaction.

Use cautious phrasing when native-speaker review is still needed.

Do not force a Notes paragraph. If there is no useful additional context, omit or revise rather than pad the entry.

Example:

> English **-saur** is most readily recognized through words such as **dinosaur** and **tyrannosaur**, rather than as a standalone everyday word.

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
- **audited** — names, factual data, roots, Notes, tags where applicable, comparison, and sources have been checked
- **native review requested** — structurally audited, but fluent/native review is still desired for nuance

The live UI currently distinguishes audited from pending. More granular internal statuses may be added later if they remain clear and useful.

## Batch process

Entries are audited in evolutionary-family or other linguistically coherent batches.

Every batch should:

1. verify names and romanization;
2. verify factual data and identify version limitations;
3. compare existing text against sources;
4. correct overconfident or incomplete claims;
5. write separate analysis for Japanese, French, and English;
6. add meaningful Notes;
7. identify supported borrowed components and author their entry-owned tags;
8. attach base and targeted sources;
9. record the actual review date;
10. preserve unresolved alternatives explicitly;
11. write a concise `research-batches/<range>-notes.md` decision record;
12. run syntax and language-tag validation;
13. load the file in numerical order;
14. update issue #5 and `HANDOFF.md`.

## Batch size

Choose the largest batch that can be researched without lowering quality.

A larger batch is acceptable when:

- evolutionary families share source material;
- the roots are transparent;
- claims can be checked independently;
- targeted sources are available;
- tag decisions can be reviewed at the same claim level;
- the final completeness check remains manageable.

Stop earlier when:

- many names depend on mythology, history, scientific nomenclature, or obscure wordplay;
- source quality becomes thin;
- alternatives cannot be evaluated carefully;
- Notes start becoming generic;
- citations become copied boilerplate rather than claim support;
- tags would require guessing a donor language or exact token boundary.

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

`tags` is optional when no supported tag applies. Its language keys are named explicitly: `japanese`, `french`, and `english`.

Language analysis order in `x` and `a` must remain Japanese, French, English because the renderer indexes those arrays in that order. Tags do not use indexes.

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

Do not store tags in a fourth language-row array item. That retired form is rejected by validation.

## Completeness checks

Before marking a batch complete, verify:

- every intended ID appears exactly once;
- no unintended ID is overwritten;
- all three names match official records;
- romanization is present and reasonable;
- each language has Roots, name effect, confidence, and meaningful Notes where appropriate;
- every supported word-level tag is authored inside the same entry;
- every tag targets an exact Roots substring under the correct named language key;
- every loanword tag records a donor language that is explained in Roots or Notes;
- explicit standardized borrowing claims are not left untagged;
- uncertain foreign resemblance is not upgraded into a tag;
- comparison text is present;
- review date is current;
- sources exist and are relevant;
- targeted claims have targeted support;
- weak theories are omitted or labeled plausible;
- the new script is loaded in `index.html`;
- `node --check` passes;
- `node scripts/validate-language-tags.mjs` passes;
- issue #5 and handoff status are updated.

## Native-speaker review

The project can make careful language claims using dictionaries, corpora, and specialist sources, but should remain open to correction from fluent/native speakers.

When nuance is uncertain:

- say so;
- avoid universal claims about what all speakers hear;
- record the item in batch notes;
- prefer “may suggest,” “can resemble,” or “is likely recognizable as” when appropriate;
- defer a tag when the lexical status, donor language, or exact boundary is not secure;
- do not hide uncertainty behind polished prose or a confident-looking annotation.

This process exists to prevent a large amount of convincing but unreliable AI-generated etymology from entering the site.
