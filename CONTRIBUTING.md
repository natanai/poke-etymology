# Contributing

This repository is maintained as a small, research-heavy static site. Contributions should preserve both factual reliability and the near-zero-overhead user experience.

## Read first

Before changing anything, read:

1. [`HANDOFF.md`](HANDOFF.md)
2. [`PROJECT_GOALS.md`](PROJECT_GOALS.md)
3. **[`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md) before any name-analysis work**
4. the method document relevant to the task
5. [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) for any name-analysis contribution
6. [`NAMING_CREDITS.md`](NAMING_CREDITS.md) for any naming-history or language-entry contribution
7. [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md)
8. [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md)

The meaning/effect rule is non-negotiable: **meaning/effect states what the name says linguistically; Notes state why the name fits the Pokémon.**

## Branch workflow

For ordinary changes:

1. inspect current `main`;
2. create `agent/<purpose>` from current `main`;
3. make coherent commits;
4. open the pull request as a draft while work is still in progress;
5. compare the branch with current `main` and reconcile concurrent work;
6. run every affected validator and renew any intentional semantic baseline change;
7. resolve every known failure before marking the PR ready;
8. mark ready only when hosted CI is expected to pass;
9. merge only after the PR is mergeable and required checks pass;
10. update trackers and handoff documentation.

Do not intentionally use a ready PR to obtain an expected red hosted run, including to discover a semantic digest or confirm a known baseline mismatch. Hosted CI is a final confirmation step, not a discovery mechanism for failures already known to the contributor.

For `agent/*` branches this lifecycle is enforced by CI: if an agent PR is opened ready, the static-data workflow converts it back to draft and defers normal hosted validation until a later `ready_for_review` event.

Direct `main` edits are for emergency hotfixes only.

## Research contributions

Do not submit bulk etymology generated from one wiki or one model pass.

Each audited entry requires:

- official names;
- romanization;
- verified factual record;
- separate Japanese, French, and English analysis;
- Roots and meaning/effect;
- meaningful Notes;
- local confidence;
- localization comparison;
- review date;
- visible source list;
- entry-owned language tags wherever the audited analysis establishes a supported tagged feature;
- a valid naming-credit record resolved for every language disclosure.

Use [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md).

### Meaning/effect is a Roots-only claim

Read [`NAME_EFFECT_STANDARD.md`](NAME_EFFECT_STANDARD.md) completely. It controls whenever another instruction seems broader.

For every language row:

- write Roots first;
- make every substantive word of meaning/effect derivable from Roots, an ordinary whole-word definition, or explicitly stated linguistic wordplay;
- use the blind-name test: hide the sprite, anatomy, evolution family, mechanics, and Pokédex story, then ask whether the gloss still follows;
- move appearance, body, behavior, powers, evolution, mechanics, story, and design rationale to Notes or comparison;
- never add a true fact about the Pokémon merely because it makes the gloss sound more vivid.

Canonical failures:

- *far-fetched* does not mean “duck-and-vegetable creature”;
- 白竜 does not mean “sacred-looking white dragon”;
- Mew + two does not mean “genetically engineered counterpart.”

Any change to audited Roots or meaning/effect changes the SHA-256 audit baseline and must be manually reviewed. Renew the baseline only with the exact attestation documented in `NAME_EFFECT_STANDARD.md`. Never copy a digest from CI or weaken the validator to make a bad gloss pass.

### Language-analysis tags are part of the entry

Word annotations such as **loanword** are research data, not a presentation-layer guess.

A contributor who establishes that a displayed root is borrowed is responsible for adding the corresponding tag in the same audited entry:

```js
tags: {
  japanese: [
    {type:"loanword",text:"ディグ",sourceLanguage:"English"}
  ]
}
```

Requirements:

- use the named receiving-language key: `japanese`, `french`, or `english`;
- set `text` to an exact substring of that language row’s Roots;
- record the donor language in `sourceLanguage`;
- keep the donor-language explanation in Roots or Notes;
- do not use a fourth language-row array item;
- do not rely on `app.js` to infer a tag from prose;
- do not tag proper names, scientific terms, learned roots, or uncertain foreign resemblances merely because they look non-native;
- consult [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md) for the complete schema and definition.

When adding another language in the future, add its explicit language key to the schema, renderer, validators, baseline, and documentation rather than reusing a positional index.

### Naming credits require scope-accurate attribution

The **Name credit** line is historical provenance, separate from etymology.

Do not put a famous person’s name on an entry merely because they:

- designed the Pokémon;
- directed the game;
- translated surrounding text;
- led a localization department;
- later explained the name;
- are commonly described by secondary media as “the creator” without species-level evidence.

Use the narrowest supported credit:

- `specific` for a documented exact name or family contribution;
- `creator` for a person securely credited with the language set;
- `lead` for responsibility over a naming program without exact coinage;
- `team` when the record identifies a group but not one coiner;
- `unknown` when even the responsible team cannot be supported.

Every record needs a source and an explicit detail sentence explaining its scope. Conflicting sources belong in that detail and in the relevant batch notes. Read [`NAMING_CREDITS.md`](NAMING_CREDITS.md) before changing defaults or overrides.

## Living Dex contributions

Guide additions must be:

- FireRed / LeafGreen specific;
- route ordered;
- version aware;
- completion focused;
- EV aware only where useful;
- sparse by default;
- saved-progress safe;
- built from local static data.

Use [`LIVING_DEX_METHOD.md`](LIVING_DEX_METHOD.md).

## Performance budget

The default budget is effectively zero additional runtime overhead.

Do not add a dependency or background process without explicit justification.

A normal feature should use:

- local static data;
- one initial render;
- delegated event listeners;
- local storage only when state must persist;
- CSS rather than JavaScript for purely visual behavior.

A PR must explain any addition of:

- a network request;
- a timer;
- an observer;
- a large asset;
- a new build dependency;
- a new persistent storage key;
- a full rerender strategy.

Persistent DOM observers are currently prohibited because one caused an infinite render loop.

## Data safety

Before changing data or script order:

- read [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md);
- preserve `data.js` before `generated-data.js`;
- load `naming-credits.js` before `app.js`;
- keep audited research out of generated output;
- preserve `sourceSet()` / `expandedSourceSet()` load order;
- keep language tags inside their audited entry;
- keep naming-credit defaults and exact overrides in `naming-credits.js` rather than research prose;
- ensure every audited name row remains included in `validate-name-effects.mjs` and the audit baseline;
- preserve guide task IDs;
- write local-storage migrations for schema or stage-order changes;
- distinguish current PokeAPI data from Generation III game data.

## Required validation

Run relevant syntax checks:

```bash
node --check app.js
node --check naming-credits.js
node --check scripts/build-data.mjs
node --check scripts/report-name-effects.mjs
node --check scripts/validate-language-tags.mjs
node --check scripts/validate-name-effects.mjs
node --check scripts/validate-naming-credits.mjs
node --check guides/guide.js
node --check guides/guide-i18n.js
node --check guides/guide-copy-overrides.js
node --check guides/guide-touch.js
node --check guides/index-i18n.js
```

For every name-research, tag, or attribution change, also run:

```bash
node scripts/validate-language-tags.mjs
node scripts/validate-name-effects.mjs
node scripts/validate-naming-credits.mjs
```

Pull requests run all three validators. Publication workflows should run them again before publishing.

Also perform task-specific structural checks.

### Names page

- 151 visible Generation I records remain available;
- searched names work across languages;
- audited and pending states remain distinct;
- entries expand in place;
- languages expand independently;
- direct hashes work;
- no mobile text overlap;
- sources remain collapsed;
- every meaning/effect claim is entailed by its Roots rather than imported from design, lore, anatomy, evolution, or mechanics;
- the name-effect baseline covers every audited language row and changes whenever Roots or meaning/effect changes;
- every tag is authored inside the correct entry and language key;
- every tag sits over the exact intended Roots token;
- the visible box contains `loanword`, without literal brackets or donor-language text;
- no untagged explicit borrowing claim is introduced;
- no tag is inferred from prose during rendering;
- all 453 Generation I language disclosures resolve a complete naming-credit record;
- credit wording distinguishes exact contributor, creator, lead, team, and unknown states;
- pending entries still show their naming credit;
- each credit exposes its source without creating a second large source drawer.

### Living Dex

- progress is populated;
- tasks appear once;
- no runaway CPU use;
- no observer, timer, or repeated mutation loop;
- version switch works;
- stage navigation works;
- saved checks survive reload;
- Pokémon links open the right entry;
- primary language is preserved;
- touch states clear correctly.

## Documentation requirement

Update `HANDOFF.md` whenever a PR changes:

- current completion status;
- next work;
- architecture;
- storage;
- script order;
- research method;
- name-effect scope or baseline rules;
- language-tag schema;
- naming-credit schema or historical conclusions;
- UX rules;
- known limitations;
- a significant failure or lesson.

Update the relevant authoritative standard—not just the handoff—when its details change. Name-effect changes require review of `NAME_EFFECT_STANDARD.md`; language-tag changes require review of `LANGUAGE_TAGS.md`; attribution changes require review of `NAMING_CREDITS.md`. These may also require `RESEARCH_METHOD.md`, `TECHNICAL_ARCHITECTURE.md`, `UX_CONTENT_STANDARDS.md`, `DECISION_LOG.md`, and this file.

The work is not complete if a future contributor would need the old chat to understand it.

## PR description standard

Explain:

- what changed;
- why it changed;
- what was deliberately not changed;
- research or source decisions;
- name-effect scope review and baseline renewal when applicable;
- attribution scope and conflicts where relevant;
- performance impact;
- data/storage impact;
- validation performed;
- documentation updated;
- unresolved issues.

Use the repository PR template.

## Communication standard

Be precise about status. Distinguish:

- written on a branch;
- PR opened;
- PR merged;
- workflow passed;
- Pages deployed;
- live behavior visually verified.

Do not claim deployment merely because a merge succeeded.
