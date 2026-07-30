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

Avoid:

- gradients used as decoration;
- rounded app-card aesthetics;
- excessive color coding;
- a full green LCD palette;
- fake plastic-console controls;
- cartoon sprites or artwork as default decoration;
- dense dashboards;
- generic modern SaaS styling;
- restaurant-signage-like red/white branding.

## Functional honesty

Every visible control must work.

Do not display fake A/B buttons, fake D-pads, POWER lights, decorative status labels, nonfunctional tabs, explanatory buttons, or icons without a clear action or accessible label.

Word tags are labels, not controls. They should not use hover, pressed, focus, or button styling.

## Homepage and navigation

Keep the header and navigation short. Current top navigation concepts are Names, Living Dex, and Data.

Do not add long introductory prose, mission statements, project history, or feature explanations to the live homepage. Documentation belongs in the repository, not in the user’s way.

## Pokémon list behavior

A Pokémon row should:

- show Pokédex number;
- show the selected-language name;
- show type summary;
- show `+` when closed and `−` when open;
- expand directly below itself;
- remain in the user’s current scroll position.

Do not replace the list with a separate detail page or scroll to the top on ordinary entry opening. Direct links may scroll because that is the explicit navigation goal.

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

Each row shows:

- language label;
- localized name;
- Japanese romanization when relevant;
- `+` or `−` control.

On narrow screens, language and name may stack. Never force a fixed label column that causes overlap. Long Japanese and romanized names must wrap safely.

## Roots, tags, and Notes

Within an expanded language analysis:

- **Roots** identifies the proposed name components;
- the following ordinary paragraph explains the approximate result or name effect;
- **Notes** provides native-language context, familiar examples, sound symbolism, register, or cultural recognition;
- the confidence chip follows.

Roots and Notes are small structural labels, not sentence-leading text. Do not use visible wording such as “May evoke:” when it makes the following text read awkwardly. Do not make Notes mandatory filler.

### Word-level language tags

Word tags annotate an exact component inside Roots. Their data is authored in the audited entry according to [`LANGUAGE_TAGS.md`](LANGUAGE_TAGS.md); the renderer must not infer them from prose.

Current `loanword` behavior:

- display a small white box with a black one-pixel border;
- display the plain lowercase word `loanword`;
- do **not** include literal brackets inside the box;
- do **not** place the donor language inside the box;
- center the box directly above the exact tagged Roots token;
- keep the box and token together when the line wraps;
- allow multiple independently tagged components in one Roots line;
- leave the rest of the Roots sentence as ordinary inline text.

The donor language and fuller explanation remain in Roots or Notes, where they can be read naturally and evaluated as research.

Do not:

- label the entire Roots panel;
- put a banner above all Roots text;
- color a whole word or panel as the only indication;
- infer a tag because a word looks foreign;
- tag uncertain boundaries;
- add a post-render annotation pass;
- make the tag look clickable;
- repeat the donor language in the tiny tag.

If the annotation makes a mobile line unreadable, revise the Roots wording or exact target rather than detaching the tag from the word it describes.

## Sources

Sources should remain available but visually quiet.

Use one collapsed row with Sources label, count, and `+` / `−` indicator. Do not show four or more full-width source buttons by default. Source links may expand into a simple list.

## Collapse controls

The bottom entry collapse control should communicate through the same `+` / `−` grammar used elsewhere.

It should span the width, use a centered icon, include an invisible accessibility label, and avoid visible English text such as “Collapse entry.”

## Living Dex layout

The guide should show:

- compact version switch;
- progress;
- horizontally scrollable stage tabs;
- one active stage;
- grouped checklist rows;
- per-row detail controls;
- previous/next navigation;
- one collapsed source drawer.

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

Use semantic elements:

- `<button>` for actions;
- `<a>` for navigation;
- `<details>/<summary>` for simple disclosure;
- native checkboxes or radios when practical;
- headings in a logical hierarchy.

Keep visible text scalable and wrap-safe. Do not hide essential information exclusively in color.

Word tags are supplemental visible text, not interactive elements. The underlying Roots prose must still communicate the borrowing if styles fail or the annotation is not shown.

## Language behavior

The Names page’s selected language is the shared primary language.

The Living Dex should use it for Pokémon names, route and city names, character names, important items and moves, headings, navigation, group labels, and accessibility labels.

Language switching should not introduce an additional guide-only selector unless Nat requests one.

## Writing style

User-facing copy should be short, concrete, neutral, useful at the moment it appears, honest about uncertainty, and free of corporate or promotional tone.

Prefer:

> 5% · Lv. 3 or 5 · +2 Speed EV

and a collapsed explanation over a long paragraph containing the same facts.

Avoid “Welcome to…,” “Our mission…,” “This prototype demonstrates…,” “Explore our comprehensive…,” and unnecessary instructions such as “Click the plus button to expand.” The interface should make that obvious.

For tags, use the controlled label from the tag definition. Do not improvise synonyms such as `borrowed`, `foreign`, `anglicism`, or `loan` in the box unless a new formally defined tag type is approved.

## Performance as UX

Loading speed is part of the design. The page should not wait for API calls, font loading, images, framework startup, hydration, DOM observation, or delayed animation.

Content and tags should appear as soon as local static scripts parse. A feature that causes visible delay, repeated layout, runaway CPU use, or a loading state for static text is a failed UX feature.

## Rejected patterns and why

### Full green Game Boy simulation

Rejected because the green dominated readability and made the tool feel like a decorative emulator skin.

### Fake controls

Rejected because they suggested interaction and took space without helping the user.

### Generic red/white redesign

Rejected because it lost the project’s restrained retro reference quality and resembled unrelated restaurant branding.

### Separate detail page

Rejected because the user had to lose their position and scroll repeatedly.

### All languages open together

Rejected because entries become long and scale poorly as languages are added.

### Visible source list

Rejected because citations occupied too much mobile space.

### Text-only collapse button

Rejected because it looked like an ignorable generic button and depended on English copy.

### Fixed two-column name table

Rejected because narrow screens caused romanization and long names to overlap.

### Inline “Roots:” / “May evoke:”

Rejected because the labels read as prose and “May evoke” produced stilted sentences.

### Roots-wide loanword banner

Rejected because it described a whole panel when only one component was borrowed and visually separated the claim from the word it described.

### Literal `[loanword]` inside a bordered box

Rejected because the border already provides the bracket-like enclosure. Literal brackets add redundant visual punctuation.

### Runtime loanword inference

Rejected because prose can mention multiple languages, alternatives, examples, and negations. The entry’s researcher—not a regular expression in the renderer—owns the decision about which exact token receives a tag.

### Broad MutationObserver localization

Rejected because it created a feedback loop, repeated text, prevented normal rendering, and violated the static-first performance requirement.

## Decision rule

When considering two designs, choose the one that:

1. shows less by default;
2. preserves the user’s place;
3. uses an existing visual grammar;
4. adds fewer controls;
5. performs less runtime work;
6. remains understandable without explanatory prose;
7. keeps linguistic meaning in audited data rather than presentation heuristics.
