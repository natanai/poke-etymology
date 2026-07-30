# UX and content standards

This document records the interface and writing decisions learned through repeated iteration with Nat.

## Core UX principle

The site should feel like a **quiet, fast reference tool**, not a product landing page and not a decorative game mockup.

The user should be able to:

- scan;
- tap one thing;
- see exactly the relevant information;
- collapse it;
- continue playing.

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

Do not display:

- fake A/B buttons;
- fake D-pads;
- POWER lights;
- status labels that look interactive;
- decorative tabs;
- buttons that only explain the site;
- icons without a clear action or accessible label.

## Homepage and navigation

Keep the header and navigation short.

Current top navigation concepts:

- Names
- Living Dex
- Data

Do not add long introductory prose, mission statements, project history, or feature explanations to the live homepage.

Documentation belongs in the repository, not in the user’s way.

## Pokémon list behavior

A Pokémon row should:

- show Pokédex number;
- show the selected-language name;
- show type summary;
- show `+` when closed and `−` when open;
- expand directly below itself;
- remain in the user’s current scroll position.

Do not replace the list with a separate detail page or scroll to the top on ordinary entry opening.

Direct links may scroll to the referenced Pokémon because that is the explicit navigation goal.

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

On narrow screens, the language and name may stack. Never force a fixed label column that causes overlap.

Long Japanese and romanized names must wrap safely.

## Roots and Notes

Within an expanded language analysis:

- **Roots** identifies the proposed name components;
- the following ordinary paragraph explains the approximate result or name effect;
- **Notes** provides native-language context, familiar examples, sound symbolism, register, or cultural recognition;
- the confidence chip follows.

Roots and Notes are small structural labels, not sentence-leading text.

Do not use visible wording such as “May evoke:” when it makes the following text read awkwardly.

Do not make Notes a mandatory filler box. If a note adds nothing meaningful, revise or omit it.

## Sources

Sources should remain available but visually quiet.

Use one collapsed row with:

- Sources label;
- count;
- `+` / `−` indicator.

Do not show four or more full-width source buttons by default.

Source links can expand into a simple list.

## Collapse controls

The bottom entry collapse control should communicate through the same visual `+` / `−` grammar used elsewhere.

It should:

- span the available width;
- have a clear centered icon;
- include an invisible accessibility label;
- not rely on visible English text such as “Collapse entry.”

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

Keep visible text scalable and wrap-safe.

Do not hide essential information exclusively in color.

## Language behavior

The Names page’s selected language is the shared primary language.

The Living Dex should use it for:

- Pokémon names;
- route and city names;
- character names;
- important items and moves;
- stage headings;
- navigation and group labels;
- accessibility labels.

Language switching should not introduce an additional guide-only selector unless Nat requests one.

## Writing style

User-facing copy should be:

- short;
- concrete;
- neutral;
- useful at the moment it appears;
- honest about uncertainty;
- free of corporate or promotional tone.

Prefer:

> 5% · Lv. 3 or 5 · +2 Speed EV

and a collapsed explanation over a long paragraph containing the same facts.

Avoid:

- “Welcome to…”;
- “Our mission…”;
- “This prototype demonstrates…”;
- “Explore our comprehensive…”;
- unnecessary instructions such as “Click the plus button to expand.”

The interface should make that obvious.

## Performance as UX

Loading speed is part of the visual and interaction design.

The page should not wait for:

- API calls;
- font loading;
- image loading;
- framework startup;
- hydration;
- observation of DOM changes;
- delayed animation.

Content should appear as soon as local static scripts parse.

A feature that causes visible delay, repeated layout, runaway CPU use, or a loading state for static text is a failed UX feature even if it is logically correct.

## Rejected patterns and why

### Full green Game Boy simulation

Rejected because the green dominated readability and made the tool feel like a decorative emulator skin.

### Fake controls

Rejected because they suggested interaction and took space without helping the user.

### Generic red/white redesign

Rejected because it lost the project’s distinct restrained retro reference quality and resembled unrelated restaurant branding.

### Separate detail page

Rejected because the user had to lose their position and scroll repeatedly.

### All languages open together

Rejected because entries become long and will scale poorly as languages are added.

### Visible source list

Rejected because citations occupied too much mobile screen space.

### Text-only collapse button

Rejected because it looked like an ignorable generic button and depended on English copy.

### Fixed two-column name table

Rejected because narrow screens caused Romanization and long names to overlap.

### Inline “Roots:” / “May evoke:”

Rejected because the labels read as part of the prose and “May evoke” produced stilted sentences.

### Broad MutationObserver localization

Rejected because it created a feedback loop, repeated text, prevented normal rendering, and violated the static-first performance requirement.

## Decision rule

When considering two designs, choose the one that:

1. shows less by default;
2. preserves the user’s place;
3. uses an existing visual grammar;
4. adds fewer controls;
5. performs less runtime work;
6. remains understandable without explanatory prose.