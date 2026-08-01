# Naming credits and attribution

This document is the authoritative specification for the naming-credit line shown inside every Japanese, French, and English language disclosure.

## Purpose

Pokémon species names are creative works, but surviving sources do not always identify one person who coined one exact name. The interface must document what is actually known without turning a team lead, translator, character designer, or later commentator into a falsely precise individual creator.

Every published language disclosure resolves to one documented attribution record. A record may identify:

- a **specific contributor** for an exact name or family;
- a **name creator/localizer** credited for the language set;
- a **naming lead** responsible for the program while the exact coiner remains unknown;
- a **team or organization** when no individual credit is public;
- an explicit **unknown** state if even the responsible team cannot be supported.

Etymology and provenance are separate claims. A confirmed derivation does not establish who coined the name, and a confirmed coiner does not prove every proposed root.

## Generation I baseline credits

### Japanese

- Display: **Game Freak**
- Role: **Original naming staff**
- Detail: the individual creator of the species name is not publicly documented.

Nintendo and Game Freak have described dedicated Pokémon naming staff, but the original game credits do not map individual Japanese species names to named staff members. Do not substitute a designer, director, or composer without an explicit naming source.

### French

- Display: **Nintendo France localization team**
- Role: **French name adaptation**

Contemporary evidence describes a wider team including Jean-Baptiste Fleury, Daniel Charbit, Nicolas Robert, Nicolas Gourio, and Pokémon specialist Julien Bardakoff. Later interviews frequently summarize Bardakoff as creator of the first 250 or 251 French names. The site therefore uses the documented team by default and adds Bardakoff overrides only for exact decisions he personally recounts.

### English

- Display: **Hiro Nakamura**
- Role: **English naming lead**

Gail Tilden identifies Nakamura as leading the English-language Pokémon naming program. This is program-level responsibility, not automatic proof that he personally coined every final word. Exact-name contributions require separate evidence.

## Generation II baseline credits

Generation II has a separate bounded registry in `naming-credits-generation-ii.js`; it does not silently inherit Generation I defaults.

### Japanese

- Display: **Game Freak**
- Role: **Generation II original naming staff**
- Scope: team-level unless a species-specific source identifies an individual.

### French

- Display: **Nintendo France localization team**
- Role: **Generation II French name adaptation**

Bardakoff describes the French naming work as extending through Celebi and the first 251 Pokémon. Contemporary evidence also describes a wider Nintendo France team, so exact-person overrides remain evidence-dependent.

### English

- Display: **Gail Tilden, Hiro Nakamura, Jeff Kalles & William Giese**
- Role: **Generation II English localization coordination**

The Pokémon Gold and Silver US credits list these people under US Coordination. Jeff Kalles is separately documented as assisting with many Generation II names, but most individual species are not mapped to one coiner.

The Generation II resolver intentionally covers #152–#251 while only published records appear in the interface.

## Exact-name overrides currently documented

### English

- **Poliwag, Poliwhirl, Poliwrath:** Gail Tilden identifies the family as her personal contribution.
- **Gyarados:** Nob Ogasawara says he recommended retaining the Japanese name after the proposed English name *Skulkraken* failed legal review.
- **Snorlax:** a published naming history attributes the suggestion to Bill Giese; the interface identifies this as published attribution rather than direct first-person testimony.
- **Articuno, Zapdos, Moltres:** Bill Giese recalls creating the elemental plus *uno/dos/tres* pattern.
- **Quilava:** Jeff Kalles identifies it as his suggestion while helping fill missing initial letters in the Generation II set.
- **Xatu:** Jeff Kalles identifies it as his suggestion while the team sought an X-initial name. He says he derived it from *xat*, which he described as a carved Indigenous American pole. The credit reports his wording narrowly and does not infer a more specific Indigenous culture or object category.

### French

- **Léviator:** Julien Bardakoff describes selecting the mythological sea-monster name in first person.
- **Évoli, Aquali, Voltali, Pyroli:** Bardakoff explains the coordinated family system in first person.
- **Artikodin, Électhor, Sulfura:** Bardakoff describes the coordinated element-plus-deity pattern using Odin, Thor, and Râ.

These overrides do not erase the wider team context. They replace the default display record only where exact evidence supports the individual contribution.

## Data structure

Generation I credits live in `naming-credits.js`. Generation II credits live in `naming-credits-generation-ii.js`, loaded immediately afterward.

Every resolved record has this shape:

```js
{
  kind: "specific" | "creator" | "lead" | "team" | "unknown",
  people: ["Person Name"],
  organization: "Organization",
  role: "Scope-accurate role",
  detail: "What is and is not documented.",
  source: {label, url}
}
```

Species-specific evidence belongs in the generation-appropriate override object:

```js
const NAMING_CREDIT_GENERATION_II_OVERRIDES = {
  178: {
    english: {
      kind: "specific",
      people: ["Jeff Kalles"],
      organization: "Nintendo of America",
      role: "Specific English name contribution",
      detail: "...",
      source: {label, url}
    }
  }
};
```

The renderer resolves records through:

```js
namingCreditFor(pokemonId, languageKey)
```

Supported language keys are exactly `japanese`, `french`, and `english`. Supported `kind` values are `specific`, `creator`, `lead`, `team`, and `unknown`.

## Required fields

Every resolved record must contain:

- `kind`;
- `people` as an array, empty only for `team` or `unknown`;
- `organization`;
- `role`;
- `detail`;
- `source.label`;
- `source.url` using HTTPS.

A `specific`, `creator`, or `lead` record requires at least one named person.

## Research rules

1. Prefer direct interviews, official publications, game credits, and statements from the people involved.
2. Distinguish **specific coinage** from **program leadership**.
3. Do not infer a namer from character-design credit.
4. Do not treat a game's text translator as species-name creator unless the source says they handled those names.
5. Do not convert “worked on localization” into “coined this name.”
6. When a source identifies a team but not an individual, show the team and say the individual is not publicly documented.
7. When a source identifies an exact contribution, add a species override and preserve the source.
8. If sources conflict, document the conflict rather than selecting the more famous person.
9. Credits are separate from etymology confidence.
10. Later first-person recollection must be reconciled with contemporary team credits rather than automatically replacing them.
11. A specific naming credit may exist before an etymology entry is audited; provenance alone must not mark the language analysis complete.
12. When exact-name evidence is a reputable secondary account rather than direct testimony, label it as such.
13. Designing, programming, or introducing a Pokémon does not establish authorship of its final name.
14. Never extend one generation's default merely by widening an earlier ID check. Research and define the next generation separately.
15. Cultural terminology must be reported no more specifically than the naming source supports. Do not infer a nation, tradition, or object category from character design.

## Display rules

The credit appears inside every language dropdown, including entries whose etymology is still pending. It shows:

- the structural label **Name credit**;
- the person or organization;
- the role;
- a concise scope/uncertainty detail;
- one restrained source link.

It must not imply that a naming lead coined every name, imply sole authorship where evidence credits a team, hide unknown attribution, crowd the language summary, or become a second source drawer.

## Adding another generation or language

For every new generation or language:

1. research the responsible naming/localization workflow;
2. create a separately bounded default or registry;
3. add exact-name overrides only where supported;
4. update the validator;
5. update this document, `HANDOFF.md`, `RESEARCH_METHOD.md`, `CONTRIBUTING.md`, and technical documentation as applicable;
6. verify every displayed entry resolves a complete record.

## Validation

Run:

```bash
node --check naming-credits.js
node --check naming-credits-generation-ii.js
node --check scripts/validate-naming-credits.mjs
node scripts/validate-naming-credits.mjs
```

Pull-request and Pages workflows must run the same validator before merge or deployment.
