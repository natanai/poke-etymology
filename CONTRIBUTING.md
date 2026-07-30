# Contributing

This repository is maintained as a small, research-heavy static site. Contributions should preserve both factual reliability and the near-zero-overhead user experience.

## Read first

Before changing anything, read:

1. [`HANDOFF.md`](HANDOFF.md)
2. [`PROJECT_GOALS.md`](PROJECT_GOALS.md)
3. the method document relevant to the task
4. [`TECHNICAL_ARCHITECTURE.md`](TECHNICAL_ARCHITECTURE.md)
5. [`UX_CONTENT_STANDARDS.md`](UX_CONTENT_STANDARDS.md)

## Branch workflow

For ordinary changes:

1. inspect current `main`;
2. create `agent/<purpose>` from current `main`;
3. make coherent commits;
4. compare the branch with `main`;
5. validate;
6. open a descriptive PR;
7. merge only after it is mergeable;
8. update trackers and handoff documentation.

Direct `main` edits are for emergency hotfixes only.

## Research contributions

Do not submit bulk etymology generated from one wiki or one model pass.

Each audited entry requires:

- official names;
- romanization;
- verified factual record;
- separate Japanese, French, and English analysis;
- meaning/effect;
- meaningful Notes;
- local confidence;
- localization comparison;
- review date;
- visible source list.

Use [`RESEARCH_METHOD.md`](RESEARCH_METHOD.md).

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
- keep audited research out of generated output;
- preserve `sourceSet()` load order;
- preserve guide task IDs;
- write local-storage migrations for schema or stage-order changes;
- distinguish current PokeAPI data from Generation III game data.

## Required validation

Run relevant syntax checks:

```bash
node --check app.js
node --check scripts/build-data.mjs
node --check guides/guide.js
node --check guides/guide-i18n.js
node --check guides/guide-copy-overrides.js
node --check guides/guide-touch.js
node --check guides/index-i18n.js
```

Also perform task-specific structural checks.

### Names page

- 151 visible Generation I records remain available;
- searched names work across languages;
- audited and pending states remain distinct;
- entries expand in place;
- languages expand independently;
- direct hashes work;
- no mobile text overlap;
- sources remain collapsed.

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
- UX rules;
- known limitations;
- a significant failure or lesson.

Update other standards when their details change.

The work is not complete if a future contributor would need the old chat to understand it.

## PR description standard

Explain:

- what changed;
- why it changed;
- what was deliberately not changed;
- research or source decisions;
- performance impact;
- data/storage impact;
- validation performed;
- documentation updated;
- unresolved issues.

Use the repository PR template.

## Communication standard

Be precise about status.

Distinguish:

- written on a branch;
- PR opened;
- PR merged;
- workflow passed;
- Pages deployed;
- live behavior visually verified.

Do not claim deployment merely because a merge succeeded.