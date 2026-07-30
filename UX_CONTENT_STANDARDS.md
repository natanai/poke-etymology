# UX and content standards

This document records the interface and writing decisions learned through repeated iteration with Nat.

## Core UX principle

The site should feel like a **quiet, fast reference tool**, not a product landing page and not a decorative game mockup.

The user should be able to scan, tap one thing, see exactly the relevant information, collapse it, and continue playing.

## Visual identity

Use:

- warm cream/paper backgrounds;
- black text and panels;
- restrained Pokémon red accents;
- Courier-like monospace typography;
- hard rectangular borders;
- small hard shadows;
- subtle scanline or printed-paper texture;
- compact uppercase structural labels.

Avoid gradients used as decoration, rounded app-card aesthetics, excessive color coding, a full green LCD palette, fake plastic-console controls, default decorative artwork, dense dashboards, generic SaaS styling, and restaurant-signage-like red/white branding.

## Functional honesty

Every visible control must work.

Do not display fake A/B buttons, fake D-pads, POWER lights, decorative status labels, nonfunctional tabs, explanatory buttons, or icons without a clear action or accessible label.

Word tags and naming-credit records are information, not controls. They should not use pressed or button styling. Their source links remain ordinary links.

## Homepage and navigation

Keep the header and navigation short. Current top navigation concepts are Names, Living Dex, and Data.

Do not add long introductory prose, mission statements, project history, or feature explanations to the live homepage. Documentation belongs in the repository, not in the user's way.

## Pokémon list behavior

A Pokémon row should:

- show Pokédex number;
- show the selected-language name;
- show type summary;
- show `+` when closed and `−` when open;
- expand directly below itself;
- preserve scroll position.

Do not replace the list with a separate detail page or scroll to the top on ordinary entry opening. Direct links may scroll because that is their explicit goal.

## Entry structure

An expanded entry should contain:

1. Pokémon heading, types, and audit status;
2. compact Names & Etymology language list;
3. independently expandable language analyses;
4. localization comparison;
5. EV yield;
6. one collapsed Sources drawer;
7. icon-based collapse control.

Do not automatically open all languages.

## Language rows

Each row shows language label, localized name, Japanese romanization when relevant, and `+` / `−` control.

On narrow screens, language and name may stack. Never force a fixed label column that causes overlap. Long Japanese and romanized names must wrap safely.

## Expanded language analysis

Within an expanded language analysis:

- **Roots** identifies proposed components;
- the following ordinary paragraph explains the approximate result or name effect;
- **Notes** provides native-language context, examples, sound symbolism, register, or cultural recognition;
- **Name credit** documents the supported historical attribution and its scope;
- the confidence chip follows audited etymology content.

Roots, Notes, and Name credit are compact structural labels, not sentence-leading prose. Do not make Notes mandatory filler.

Pending etymology rows still show Name credit because attribution is independently researched. The credit must not make pending Roots appear audited.

### Word-level language tags

Word tags annotate an exact component inside Roots. Their data is authored in the audited entry according to [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md); the renderer must not infer them from prose.

Current `loanword` behavior:

- small white box with a black one-pixel border;
- plain lowercase `loanword`;
- no literal brackets;
- no donor language inside the box;
- centered directly above the exact tagged token;
- box and token kept together when wrapping;
- multiple independently tagged components allowed;
- the rest of Roots remains ordinary inline text.

The donor language and explanation remain in Roots or Notes.

Do not label the entire Roots panel, infer a tag because a word looks foreign, tag uncertain boundaries, add a post-render annotation pass, make the tag look clickable, or repeat the donor language in the box.

### Naming-credit record

[`NAMING_CREDITS.md`](NAMING_CREDITS.md) controls attribution content.

The live record should show:

- small uppercase `Name credit` label;
- one primary person or organization line;
- a short role label;
- one concise detail sentence explaining whether the credit is exact, program-level, team-level, or unresolved;
- one restrained source link.

The record should remain visually subordinate to Roots and Notes. It is a compact inset, not a fourth major section and not another disclosure.

Do not:

- put attribution in the closed language-row summary;
- show a long list of team members as a large heading;
- imply that a lead coined every exact word;
- hide team credit behind one better-known person;
- infer a creator from Pokémon design credit;
- label unknown attribution as a failure or warning;
- repeat the same source in the main entry source drawer solely because the credit already links it;
- show Generation I defaults on later-generation reference entries.

When the historical record conflicts, the visible detail should say so briefly and link to the strongest representative source. Fuller reconciliation belongs in repository documentation and batch notes.

## Sources

Sources should remain available but visually quiet.

Use one collapsed row with Sources label, count, and `+` / `−` indicator. Do not show a wall of full-width source buttons by default. Attribution has one inline source link because it must remain traceable within the language row.

## Collapse controls

The bottom entry collapse control should use the same `+` / `−` grammar, span the width, use a centered icon, include an accessibility label, and avoid visible English text such as “Collapse entry.”

## Living Dex layout

The guide should show compact version switch, progress, horizontally scrollable stage tabs, one active stage, grouped checklist rows, per-row detail controls, previous/next navigation, and one collapsed source drawer.

Do not show multiple stage bodies at once.

## Touch behavior

Mobile Safari and other touch browsers can preserve hover or focus styling after a tap.

Requirements:

- use `-webkit-tap-highlight-color: transparent` where appropriate;
- use `touch-action: manipulation` for buttons;
- put hover-only styling inside hover-capable media conditions when necessary;
- override inactive touch hover states under `(hover:none)` or `(pointer:coarse)`;
- clear touch/pen focus after activation when it would otherwise look selected;
- preserve keyboard `:focus-visible` indicators.

Do not remove all focus styling globally.

## Accessibility

Every icon-only button needs an `aria-label`.

Use semantic elements: `<button>` for actions, `<a>` for navigation, `<details>/<summary>` for disclosure, native form controls when practical, and logical heading hierarchy.

Keep visible text scalable and wrap-safe. Do not hide essential information exclusively in color.

Word tags are supplemental visible text; Roots must still communicate the borrowing if styling fails. Naming credit must remain understandable as plain text and its source link must have descriptive text.

## Language behavior

The Names page's selected language is the shared primary language.

The Living Dex should use it for Pokémon names, route/city names, character names, important items and moves, headings, navigation, group labels, and accessibility labels.

Language switching should not introduce an additional guide-only selector unless Nat requests one.

## Writing style

User-facing copy should be short, concrete, neutral, useful at the moment it appears, honest about uncertainty, and free of corporate or promotional tone.

For tags, use the controlled label from the tag definition. Do not improvise `borrowed`, `foreign`, `anglicism`, or `loan` inside the box.

For attribution roles, prefer precise phrases such as:

- `Specific English family-name contribution`
- `English naming lead`
- `French name adaptation`
- `Original naming staff`

Avoid a universal `Created by` label because it falsely collapses different evidence levels.

## Performance as UX

Loading speed is part of the design. The page should not wait for API calls, font loading, images, framework startup, hydration, DOM observation, or delayed animation.

Content, tags, and naming credits should appear during the same deterministic local render. A feature that causes visible delay, repeated layout, runaway CPU use, or a loading state for static text is a failed UX feature.

## Rejected patterns and why

### Full green Game Boy simulation

Rejected because the green dominated readability and made the tool feel like a decorative emulator skin.

### Fake controls

Rejected because they suggested interaction and consumed space without helping the user.

### Separate detail page

Rejected because the user lost their position and had to scroll repeatedly.

### All languages open together

Rejected because entries become long and scale poorly.

### Visible source wall

Rejected because citations occupied too much mobile space.

### Fixed two-column name table

Rejected because romanization and long names overlapped on narrow screens.

### Roots-wide loanword banner

Rejected because it described a whole panel when only one component was borrowed.

### Literal `[loanword]` inside a bordered box

Rejected because the border already provides bracket-like enclosure.

### Runtime linguistic inference

Rejected because prose can mention alternatives, examples, languages, and negation. The entry's researcher owns exact tags.

### Universal `Created by` attribution

Rejected because available evidence may establish an exact contributor, a program lead, a team, or only an unknown state. One label would convert all of those into false sole authorship.

### Generation-wide person copied into later generations

Rejected because naming and localization teams change. Attribution defaults are explicitly generation-scoped.

### Broad MutationObserver localization

Rejected because it created a feedback loop and violated static-first performance.

## Decision rule

When considering two designs, choose the one that:

1. shows less by default;
2. preserves the user's place;
3. uses an existing visual grammar;
4. adds fewer controls;
5. performs less runtime work;
6. remains understandable without explanatory copy;
7. keeps linguistic meaning in audited data;
8. states attribution scope instead of implying certainty.
