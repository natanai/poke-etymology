# Project goals and boundaries

This document records the product direction so future work does not drift into becoming a generic Pokédex or an overengineered web application.

## Core identity

Poké Etymology is a **Pokémon language and completion companion** built primarily for people who enjoy words, localization, and understanding why names work.

It should explain:

- official Pokémon names across languages;
- roots, portmanteaus, puns, sound symbolism, mythology, science, and cultural references;
- literal meanings versus intended meanings;
- what a native speaker may immediately hear, recognize, or appreciate;
- how a localization preserves, replaces, or changes the original idea;
- uncertainty honestly, using local confidence labels rather than presenting every fan theory as fact.

## Practical playthrough goal

The same species data supports route-by-route living-dex guides. Those guides should include:

- exact encounter areas and rates where useful;
- how many copies are needed for a living dex;
- earliest practical catches and sensible backtracking;
- version exclusives, trades, fossils, evolution items, and irreversible choices;
- EV yields and EV-aware catch/defeat/flee advice;
- the selected primary language throughout;
- direct links from Pokémon references to the matching Names entry.

The guide should be an active checklist companion, not a complete prose walkthrough.

## Scope order

1. Make the Generation I species research excellent in English, French, and Japanese.
2. Build the first complete living-dex route for FireRed / LeafGreen.
3. Add Red, Blue, and Yellow within the Kanto phase.
4. Add other languages to the polished Kanto dataset.
5. Expand to later regions and games only after the current scope feels complete and trustworthy.

## Deliberate content boundaries

- No Pokémon sprites or artwork are required.
- Do not compete with Bulbapedia, Serebii, Pokémon Database, or other encyclopedic resources by duplicating every stat, move, item, or mechanic.
- Include game data only when it directly supports name research or the completion-guide experience.
- Keep the interface mobile-first and readable during an active playthrough.
- Preserve a retro Generation I sensibility through typography, borders, and Pokémon red/cream/black—not through fake controls or decorative labels that look interactive.
- Every visible button or navigation label must perform a clear real action.
- Keep user-facing copy sparse, concrete, and task-relevant.

## Static-first technical boundary

The site should feel like instantaneously loaded raw text.

Preserve:

- plain static HTML, CSS, and JavaScript;
- local committed data;
- one deterministic initial render;
- event-driven interaction;
- local storage only for user preferences and checklist progress;
- no required images or webfonts.

Do not introduce without an explicit, compelling user need:

- a client framework;
- hydration;
- runtime content APIs;
- persistent DOM observers;
- polling;
- recurring timers;
- large dependency bundles;
- large media assets;
- architecture that requires a loading state for ordinary text.

Performance regressions are product regressions, not merely technical issues.

## Documentation boundary

Repository documentation is part of the product’s maintainability.

Every substantive change must keep [`HANDOFF.md`](HANDOFF.md) and the affected standards current enough that another GPT can take over without reading the prior chat.