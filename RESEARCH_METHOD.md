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
7. The relationship between the three localizations
8. Sources and date of review

## Evidence labels

- **confirmed** — an official creator, publication, game, or other primary source explicitly states the origin
- **strong** — the construction is linguistically transparent and supported by reliable language references and multiple Pokémon references
- **plausible** — the interpretation fits spelling, sound, design, and context, but another explanation is also reasonable
- **speculative** — insufficient evidence; normally omit rather than publish as fact

A Pokémon may contain both confirmed and uncertain components. State uncertainty locally instead of averaging everything into one confidence score.

Do not upgrade a repeated fan theory merely because many secondary sites copy it.

## Source hierarchy

1. Official Pokémon games, Pokédexes, websites, card lists, publications, and creator interviews
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
- an unusual pronunciation, sound-symbolic form, or register claim.

Use descriptive source labels. Avoid a vague list of links that does not reveal what each source supports.

## Roots

The Roots field should identify the proposed components and their relevant meanings.

Good Roots text:

- distinguishes an existing whole word from an invented split;
- names uncertainty beside the uncertain component;
- explains voicing, clipping, reversal, borrowing, or spelling adaptation when relevant;
- avoids piling unrelated possibilities into one unranked list.

Example:

> 銭亀 (zenigame), an existing term for a young Japanese pond turtle, from 銭 (zeni, old-fashioned money or coin) + 亀 (kame, turtle)

This is better than treating the name as two arbitrary dictionary roots because it explains that the compound itself already exists.

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
- how a loanword sounds in the receiving language.

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

Do not rank localizations as “better” without a specific analytical reason.

## Review statuses

- **pending** — factual record exists, but etymology has not been researched
- **draft** — initial research entered; sources or language notes remain incomplete
- **audited** — names, factual data, roots, Notes, comparison, and sources have been checked
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
7. attach base and targeted sources;
8. record the actual review date;
9. preserve unresolved alternatives explicitly;
10. write a concise `research-batches/<range>-notes.md` decision record;
11. validate structure and syntax;
12. load the file in numerical order;
13. update issue #5 and `HANDOFF.md`.

## Batch size

Choose the largest batch that can be researched without lowering quality.

A larger batch is acceptable when:

- evolutionary families share source material;
- the roots are transparent;
- claims can be checked independently;
- targeted sources are available;
- the final completeness check remains manageable.

Stop earlier when:

- many names depend on mythology, history, scientific nomenclature, or obscure wordplay;
- source quality becomes thin;
- alternatives cannot be evaluated carefully;
- Notes start becoming generic;
- citations become copied boilerplate rather than claim support.

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
  c: "Localization comparison",
  a: [japaneseNotes, frenchNotes, englishNotes],
  sources: [{label, url}, ...]
}
```

Language order must remain Japanese, French, English because the renderer indexes the arrays in that order.

## Completeness checks

Before marking a batch complete, verify:

- every intended ID appears exactly once;
- no unintended ID is overwritten;
- all three names match official records;
- romanization is present and reasonable;
- each language has Roots, name effect, confidence, and meaningful Notes where appropriate;
- comparison text is present;
- review date is current;
- sources exist and are relevant;
- targeted claims have targeted support;
- weak theories are omitted or labeled plausible;
- the new script is loaded in `index.html`;
- `node --check` passes;
- issue #5 and handoff status are updated.

## Native-speaker review

The project can make careful language claims using dictionaries, corpora, and specialist sources, but should remain open to correction from fluent/native speakers.

When nuance is uncertain:

- say so;
- avoid universal claims about what all speakers hear;
- record the item in batch notes;
- prefer “may suggest,” “can resemble,” or “is likely recognizable as” when appropriate;
- do not hide uncertainty behind polished prose.

This process exists to prevent a large amount of convincing but unreliable AI-generated etymology from entering the site.