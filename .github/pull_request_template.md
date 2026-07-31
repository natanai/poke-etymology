## What changed

<!-- Describe the user-facing and repository changes. -->

## Why

<!-- Name the problem or project goal this addresses. -->

## Reliability / research decisions

<!-- List important sources, confidence choices, unresolved alternatives, borrowing decisions, attribution scope/conflicts, or state “not applicable.” -->

## Mandatory name-effect scope attestation

For every pull request that adds or changes Pokémon Roots or meaning/effect data:

- [ ] I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.
- [ ] Every substantive meaning/effect claim follows from the displayed Roots, an ordinary whole-word definition, or explicitly stated linguistic wordplay.
- [ ] I applied the blind-name test without relying on the sprite, anatomy, behavior, evolution family, game mechanics, or Pokédex story.
- [ ] `name-effect-scope-baseline.json` was renewed through the exact attested command in `NAME_EFFECT_STANDARD.md`.
- [ ] I did not copy a digest from CI, weaken the validator, or exclude new data from its coverage.
- [ ] Not applicable—this pull request does not add or change name-analysis data.

The first checked sentence above is an exact machine-validated attestation. Do not check it without performing the review.

## Performance impact

- [ ] Static local data only
- [ ] No new runtime network request
- [ ] No new persistent observer, timer, polling, or repeated render loop
- [ ] No new dependency, framework, font, or large asset
- [ ] Mobile load remains effectively instantaneous

Explain any unchecked item:

## Data and saved-state safety

- [ ] `data.js` still loads before `generated-data.js`
- [ ] `naming-credits.js` loads before `app.js`
- [ ] Audited research and language tags are not stored in generated output
- [ ] Naming credits remain generation-scoped and do not leak onto reference entries
- [ ] Every audited language row remains included in name-effect validation and its baseline
- [ ] Existing guide task IDs and saved progress are preserved, or a migration is included
- [ ] Current PokeAPI data is not mistaken for FireRed / LeafGreen-specific data
- [ ] Not applicable

## UX validation

- [ ] Narrow mobile layout checked
- [ ] No overlapping text
- [ ] Touch controls do not retain ghost hover/focus
- [ ] Keyboard focus remains visible
- [ ] Disclosures open only the intended content
- [ ] No unnecessary user-facing copy or decorative fake controls

For word-tag changes, confirm:

- [ ] Each box is centered over the exact intended Roots token
- [ ] The visible box says plain `loanword`, with no literal brackets or donor language
- [ ] Tags remain noninteractive and wrap safely with their token
- [ ] No Roots-wide banner or runtime prose inference was introduced

For naming-credit changes, confirm:

- [ ] Every Generation I language disclosure resolves a complete record
- [ ] Exact contributor, creator, lead, team, and unknown states are not collapsed into one claim
- [ ] Every record includes a scope explanation and source
- [ ] Pending entries still show credit without appearing etymologically audited
- [ ] Later-generation reference entries do not inherit Generation I defaults
- [ ] No designer, translator, or team lead is presented as exact coiner without evidence

## Technical validation

List commands and structural checks performed:

```text

```

For Living Dex work, confirm:

- [ ] Progress populates instead of remaining `0 / 0`
- [ ] Tasks appear exactly once
- [ ] CPU activity settles after initial render
- [ ] Version, stage, checklist, language, and Pokémon links work

For research work, confirm:

- [ ] Every intended ID appears exactly once
- [ ] Japanese / French / English order is preserved
- [ ] Roots, meaning, Notes, confidence, comparison, review date, and sources are present
- [ ] Every meaning/effect proposition is entailed by Roots under `NAME_EFFECT_STANDARD.md`
- [ ] Appearance, anatomy, behavior, evolution, mechanics, and story context are confined to Notes or comparison unless literally encoded
- [ ] Weak theories remain omitted or explicitly uncertain
- [ ] Supported word tags are authored inside the same audited entry under named language keys
- [ ] Loanword tags use exact Roots text and record a donor language explained in Roots or Notes
- [ ] Exact naming-credit overrides were added only where species-level evidence exists
- [ ] `node scripts/validate-language-tags.mjs` passes
- [ ] `node scripts/validate-name-effects.mjs` passes
- [ ] `node scripts/validate-naming-credits.mjs` passes

## Documentation

- [ ] `HANDOFF.md` updated when status, architecture, scope, next work, schema, or known issues changed
- [ ] Relevant method/standard document updated
- [ ] `NAME_EFFECT_STANDARD.md` updated when semantic scope, baseline coverage, validator rules, or required attestation changed
- [ ] `LANGUAGE_TAGS.md` updated when a language key, tag type, field, validator rule, or visible tag behavior changed
- [ ] `NAMING_CREDITS.md` updated when an attribution default, override rule, evidence conclusion, validator rule, or display behavior changed
- [ ] Issue #5 or other tracker updated when applicable
- [ ] `research-batches/` decision notes added for a completed name batch or repository-wide audit

## Deliberately not changed

<!-- Prevent future contributors from misreading an intentional boundary as unfinished work. -->

## Remaining uncertainty / follow-up

<!-- Be explicit. “None” is acceptable. -->
