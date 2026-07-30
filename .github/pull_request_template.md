## What changed

<!-- Describe the user-facing and repository changes. -->

## Why

<!-- Name the problem or project goal this addresses. -->

## Reliability / research decisions

<!-- List important sources, confidence choices, unresolved alternatives, borrowing decisions, or state “not applicable.” -->

## Performance impact

- [ ] Static local data only
- [ ] No new runtime network request
- [ ] No new persistent observer, timer, polling, or repeated render loop
- [ ] No new dependency, framework, font, or large asset
- [ ] Mobile load remains effectively instantaneous

Explain any unchecked item:

## Data and saved-state safety

- [ ] `data.js` still loads before `generated-data.js`
- [ ] Audited research and language tags are not stored in generated output
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
- [ ] Weak theories remain omitted or explicitly uncertain
- [ ] Supported word tags are authored inside the same audited entry under named language keys
- [ ] Loanword tags use exact Roots text and record a donor language explained in Roots or Notes
- [ ] `node scripts/validate-language-tags.mjs` passes

## Documentation

- [ ] `HANDOFF.md` updated when status, architecture, scope, next work, schema, or known issues changed
- [ ] Relevant method/standard document updated
- [ ] `LANGUAGE_TAGS.md` updated when a language key, tag type, field, validator rule, or visible tag behavior changed
- [ ] Issue #5 or other tracker updated when applicable
- [ ] `research-batches/` decision notes added for a completed name batch

## Deliberately not changed

<!-- Prevent future contributors from misreading an intentional boundary as unfinished work. -->

## Remaining uncertainty / follow-up

<!-- Be explicit. “None” is acceptable. -->
