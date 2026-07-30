# Naming credits and attribution

This document is the authoritative specification for the naming-credit line shown inside every Japanese, French, and English language disclosure.

## Purpose

Pokémon species names are creative works, but the surviving record does not always identify one person who coined one exact name. The interface must document what is actually known without turning a team lead, translator, character designer, or later commentator into a falsely precise individual creator.

Every Generation I language disclosure therefore resolves to one documented attribution record. That record may identify:

- a **specific contributor** for an exact name or evolutionary family;
- a **name creator/localizer** credited for the language set;
- a **naming lead** responsible for the naming program, while the exact coiner remains unknown;
- a **team or organization** when no individual credit is public;
- an explicit **unknown** state if even the responsible team cannot be supported.

## Generation I baseline credits

### Japanese

- Display: **Game Freak**
- Role: **Original naming staff**
- Detail: the individual creator of the species name is not publicly documented.

Nintendo and Game Freak have described dedicated staff who assign Pokémon names, but the original Generation I game credits do not map individual Japanese species names to named staff members. Do not substitute a Pokémon designer, director, or composer unless a primary source explicitly credits that person with the name.

### French

- Display: **Nintendo France localization team**
- Role: **French name adaptation**
- Detail: contemporary reporting names Jean-Baptiste Fleury, Daniel Charbit, Nicolas Robert, Nicolas Gourio, and Pokémon specialist Julien Bardakoff; the exact coiner is not publicly mapped for most species.

The historical record is not perfectly uniform. A December 2000 report describes all five translators as adapting the 150 Japanese names and identifies Bardakoff as Nintendo's Pokémon specialist. Later interviews and profiles frequently summarize Bardakoff as the creator of the first 250 or 251 French names, and Bardakoff himself often uses singular first-person language when explaining the work.

The site therefore does **not** present sole authorship by Bardakoff as an uncontested species-by-species fact. It credits the documented Nintendo France team by default while preserving Bardakoff's central specialist role in the detail. A species-specific override may identify Bardakoff or another contributor only when a source clearly ties that exact person to that exact naming decision.

### English

- Display: **Hiro Nakamura**
- Role: **English naming lead**

Gail Tilden identifies Nakamura as the person who led the English-language Pokémon naming program and was responsible for the English names. This is a program-level credit, not automatic proof that he personally coined every final word. The default detail must continue to say that the exact coiner is not separately documented unless an entry has a supported override.

## Exact-name overrides currently documented

- **Poliwag, Poliwhirl, Poliwrath:** Gail Tilden identifies the family as her personal contribution.
- **Gyarados:** Nob Ogasawara says he recommended retaining the Japanese name after the proposed English name *Skulkraken* failed legal review.
- **Articuno, Zapdos, Moltres:** Bill Giese recalls creating the shared elemental plus *uno/dos/tres* pattern.

Overrides replace the default display record for that language disclosure, but their detail should preserve the wider naming-program context when useful.

## Data structure

Credits live in `naming-credits.js`.

```js
const NAMING_CREDIT_DEFAULTS = {
  japanese: {
    kind: "team",
    people: [],
    organization: "Game Freak",
    role: "Original naming staff",
    detail: "The individual creator ... is not publicly documented.",
    source: {label, url}
  },
  french: {
    kind: "team",
    people: [],
    organization: "Nintendo France localization team",
    role: "French name adaptation",
    detail: "Contemporary reporting credits five named translators ...",
    source: {label, url}
  },
  english: {
    kind: "lead",
    people: ["Hiro Nakamura"],
    organization: "Nintendo of America",
    role: "English naming lead",
    detail: "...",
    source: {label, url}
  }
};
```

Species-specific evidence belongs in `NAMING_CREDIT_OVERRIDES`:

```js
const NAMING_CREDIT_OVERRIDES = {
  60: {
    english: {
      kind: "specific",
      people: ["Gail Tilden"],
      organization: "Nintendo of America",
      role: "Specific English family-name contribution",
      detail: "...",
      source: {label, url}
    }
  }
};
```

The renderer resolves a record through:

```js
namingCreditFor(pokemonId, languageKey)
```

Supported language keys are exactly:

- `japanese`
- `french`
- `english`

Supported `kind` values are:

- `specific`
- `creator`
- `lead`
- `team`
- `unknown`

## Required fields

Every resolved record must contain:

- `kind`
- `people` as an array, which may be empty only for `team` or `unknown`
- `organization`
- `role`
- `detail`
- `source.label`
- `source.url`

A `specific`, `creator`, or `lead` record requires at least one named person.

## Research rules

1. Prefer direct interviews, official publications, game credits, and statements from the people involved.
2. Distinguish **specific coinage** from **program leadership**.
3. Do not infer a namer from character-design credit.
4. Do not treat the game's text translator as the species-name creator unless the source says they handled those names.
5. Do not convert “worked on localization” into “coined this name.”
6. When a source identifies a team but not an individual, show the team and say the individual is not publicly documented.
7. When a source identifies an exact contribution, add a species override and preserve the source.
8. If sources conflict, document the conflict in `detail` and the relevant batch notes rather than selecting the more famous person.
9. Credits are historical provenance, separate from etymology confidence. A confirmed name origin does not establish its creator, and a confirmed creator does not automatically confirm every proposed root.
10. Later first-person recollection can be valuable primary testimony, but it must be reconciled with contemporary team credits rather than automatically replacing them.

## Display rules

The credit appears inside every language dropdown, including entries whose etymology research is still pending.

It should show:

- the small structural label **Name credit**;
- the person or organization;
- the role;
- a concise detail explaining the scope or uncertainty;
- one restrained source link.

The line must not:

- imply that a naming lead personally coined every name;
- imply sole authorship where contemporary evidence credits a team;
- hide unknown attribution;
- crowd the language summary header;
- become a second large source drawer;
- add an interactive control other than the ordinary source link.

## Adding another generation or language

Do not copy Generation I defaults into another generation without research. Naming teams and localization workflows change over time.

For a new generation or language:

1. identify the responsible naming/localization workflow from primary sources;
2. create a generation-scoped default or a clearly bounded registry;
3. add exact-name overrides where known;
4. update the validator;
5. update this document, `HANDOFF.md`, `RESEARCH_METHOD.md`, `CONTRIBUTING.md`, and the technical/UX documentation;
6. verify every displayed entry resolves a complete record.

## Validation

Run:

```bash
node --check naming-credits.js
node --check scripts/validate-naming-credits.mjs
node scripts/validate-naming-credits.mjs
```

The pull-request and Pages workflows must run the same validator before merge or deployment.
