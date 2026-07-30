# Language-analysis tags

This document is the authoritative specification for machine-readable annotations attached to words inside a language analysis.

The first supported tag is **loanword**. The system is intentionally general enough to add another carefully defined tag type later without scraping prose or creating a second data store.

## Core rule

A tag is research data owned by the same audited Pokémon entry as its Roots, meaning/effect, confidence, Notes, comparison, and sources.

Do not:

- infer tags in `app.js` from words such as “loanword” in Roots or Notes;
- keep a separate global map of tags;
- add tags by observing or modifying rendered HTML;
- tag a whole Roots panel when only one component is borrowed;
- use a tag to make a research claim that the entry prose and sources do not support.

## Entry structure

Tags live in an optional `tags` object on the audited entry:

```js
50: {
  status: "audited",
  reviewedOn: "2026-07-30",
  x: [
    ["English dig, adapted as ディグ (digu)", "A digging creature.", "strong"],
    ["taupe + marteau-piqueur", "Mole jackhammer.", "strong"],
    ["dig + -let, a diminutive suffix", "A small digging creature.", "strong"]
  ],
  tags: {
    japanese: [
      {type: "loanword", text: "ディグ", sourceLanguage: "English"}
    ]
  },
  c: "...",
  a: ["...", "...", "..."],
  sources: [/* ... */]
}
```

Supported language keys currently are:

- `japanese`
- `french`
- `english`

These names are deliberately explicit. Do not use numeric indexes, `j` / `f` / `e`, or a separate array whose meaning depends on position.

## Tag object

A root tag has this shape:

```js
{
  type: "loanword",
  text: "ディグ",
  sourceLanguage: "English",
  occurrence: 1 // optional
}
```

### `type`

Required. It identifies the annotation behavior and visible label.

Currently supported:

- `loanword` → displays the small boxed label `loanword`

Do not invent a new type inside a research batch. A new type requires:

1. a clear research definition;
2. an entry-owned data example;
3. a renderer definition in `ROOT_TAG_DEFINITIONS` in `app.js`;
4. restrained accessible styling;
5. validator support;
6. updates to this document, `RESEARCH_METHOD.md`, `TECHNICAL_ARCHITECTURE.md`, `UX_CONTENT_STANDARDS.md`, `CONTRIBUTING.md`, and `HANDOFF.md`.

### `text`

Required. It must exactly match the characters displayed in that language row’s Roots string.

Good:

```js
{text: "コクーン"}
```

when Roots contains:

```text
コクーン (kokūn), a direct transcription of English cocoon
```

Bad:

```js
{text: "cocoon"}
```

when the intended visible annotation belongs over `コクーン`.

Prefer the receiving-language form when it is present in Roots. If Roots only presents a translated analytical component, the tag may target that exact displayed component.

### `sourceLanguage`

Required for `loanword` tags. Use the language from which the receiving language borrowed the tagged form, according to the audited research.

Examples:

```js
sourceLanguage: "English"
sourceLanguage: "Italian"
```

The source language is research metadata. It is not printed inside the tiny tag because Roots or Notes should explain the borrowing in readable prose.

Do not guess a donor language merely from spelling. If the borrowing is secure but its route is uncertain, finish the research before adding the tag or explicitly document the uncertainty and defer the tag.

### `occurrence`

Optional positive integer. It is only needed when the exact same `text` appears more than once in the Roots string.

- omitted → first occurrence
- `occurrence: 2` → second occurrence

Do not use `occurrence` to compensate for vague `text`. Choose the most exact stable text possible.

## Loanword definition for this project

Use `type: "loanword"` when an item in one language’s Pokémon name is a borrowed lexical form used in that receiving language.

Typical examples:

- Japanese katakana derived from English vocabulary;
- an English word deliberately retained inside a French localization;
- another securely documented borrowed word used as a name component.

Do not automatically tag:

- every Latin or Greek learned root;
- every international scientific name;
- a proper name merely retained internationally;
- a cognate shared through older language history;
- a proposed foreign resemblance whose role in the name is uncertain;
- an English-language root inside the English name itself.

The tag answers: **“Is this displayed component borrowed vocabulary in the language being analyzed?”** It does not answer: **“Did this word ultimately originate in another language centuries ago?”**

## Visible behavior

The interface displays a tiny white, black-bordered box containing:

```text
loanword
```

The box is centered directly over the exact tagged component. It does not contain literal brackets and does not include the source language.

The tagged component and box stay together when the line wraps on mobile.

## Multiple tags

A language row may contain multiple tags:

```js
tags: {
  japanese: [
    {type: "loanword", text: "gold", sourceLanguage: "English"},
    {type: "loanword", text: "duck", sourceLanguage: "English"}
  ]
}
```

Tags may not overlap. If one proposed target is contained inside another, revise the Roots wording or choose the precise intended component.

## Relationship to prose and sources

Metadata does not replace explanation.

For every loanword tag:

- Roots or Notes should state the donor language and explain the adaptation or register;
- confidence still belongs to the language analysis as a research claim;
- the source list must support unusual borrowing or localization claims where needed;
- uncertainty must remain in prose rather than being hidden by a confident-looking tag.

The tag is a scan aid, not evidence by itself.

## Contributor workflow

When adding or revising a language analysis:

1. Research the proposed borrowing.
2. Write Roots, meaning/effect, confidence, and Notes.
3. Decide whether a component meets the project definition of a loanword.
4. Add the tag inside that same audited entry under the receiving-language key.
5. Set `text` to an exact substring of Roots.
6. Set `sourceLanguage` to the supported donor language.
7. Add `occurrence` only when necessary.
8. Run:

```bash
node scripts/validate-language-tags.mjs
```

9. Inspect the rendered entry on a narrow mobile viewport.
10. Record any unresolved borrowing route in the batch decision notes.

## Validation contract

`scripts/validate-language-tags.mjs` must reject:

- the retired `loanwords` shortcut;
- tags outside an audited entry’s `tags` object;
- unsupported language keys;
- unsupported tag types;
- missing or empty `text`;
- tagged text absent from Roots;
- invalid `occurrence` values;
- missing `sourceLanguage` for a loanword;
- duplicate or overlapping tags;
- a donor language not named in Roots or Notes.

The Pages workflow and pull-request validation workflow run this validator.

## Backward compatibility

Existing language analysis rows may remain the historical three-item arrays:

```js
[roots, meaning, confidence]
```

Tags do not belong in a fourth array item. The retired form below must not be used:

```js
[roots, meaning, confidence, {loanwords: ["..."]}]
```

Keeping tags at the named entry level avoids hidden positional meaning and makes the data easier to extend and review.
