# Living Dex guide method

The Living Dex guide is a route-by-route active play companion. It is not a conventional walkthrough and should not become one.

## Primary user goal

Help a player complete a living dex while progressing naturally through Pokémon FireRed or LeafGreen, with minimal backtracking and no avoidable permanent misses.

The original working context is the French version of FireRed, but the guide must support FireRed and LeafGreen and inherit the primary language selected on the Names page.

## Core presentation rule

Show **one current stage** at a time.

Within that stage, show only information that affects a decision now:

- what to catch;
- how many copies to catch;
- encounter rate and level range when useful;
- what each copy is reserved for;
- what can safely wait;
- version differences;
- one-way transitions;
- one-per-save choices;
- trade, stone, fossil, breeding, and postgame requirements;
- key story actions;
- optional useful pickups;
- EV consequences when they matter.

Keep details collapsed behind the row’s `+` control. Do not lead with prose.

## Living-dex quantity method

For each family, determine the number of simultaneous forms ultimately needed.

Examples:

- a three-stage ordinary family generally needs three catches or one catch plus enough breedable copies later;
- a two-stage family generally needs two copies;
- a branched evolution needs one retained base form plus one copy for every branch;
- a stone evolution may require delaying evolution until the stone is available;
- a trade evolution requires an explicit trade plan;
- a baby form may require postgame breeding rather than an early catch;
- a later-generation evolution may belong in `reference-data.js` and should be acknowledged without entering the visible Generation I index;
- fossils and mutually exclusive gifts require a one-save limitation warning and a second-game/trade plan.

Do not tell the player to catch extra copies without explaining the family plan.

## Earliest practical catch rule

“Earliest” is not automatically “best.” Recommend the earliest practical location when it:

- prevents a miss;
- has a meaningfully better rate;
- avoids long backtracking;
- fits the player’s current route;
- supports an immediate evolution or story need;
- reduces EV conflicts for a trained team member.

It is acceptable to say a species is available now but easier later.

## Encounter information

Use game- and version-specific sources.

For each recommended catch, verify:

- map and sub-area;
- FireRed versus LeafGreen table;
- encounter method;
- encounter rate;
- level range;
- time or condition if applicable;
- whether another route offers a much better rate;
- whether the area becomes inaccessible or inconvenient later.

Do not reuse current PokeAPI encounter assumptions.

## EV guidance

EV information is included to support Nat’s EV-aware playthrough, but should stay concise.

Use EV notes when they help the player decide whether to:

- catch and flee;
- defeat a wild species;
- avoid grinding in an area;
- use a route for intentional training;
- protect a starter’s desired spread.

Do not turn the guide into a complete competitive-training manual.

The main Names page currently uses current PokeAPI EV yields. The guide must verify Generation III effort yields separately.

## Missable and irreversible decisions

Clearly flag decisions such as:

- starter choice and the resulting postgame roaming beast;
- fossil choice;
- one-use move tutors;
- unique gifts;
- one-way ledges or exits;
- version exclusives;
- trade-only evolutions;
- finite evolution stones before repeatable sources;
- choices that require another save or another game for a complete living dex.

Warnings belong beside the exact stage where the decision occurs.

## Story tasks

Include story steps only when they:

- unlock catching or an area;
- control route order;
- create a one-way transition;
- provide a completion-relevant item;
- affect an encounter or evolution plan;
- are necessary to understand the next checklist stage.

Do not reproduce every trainer, dialogue scene, or room unless it matters to completion.

## Items

Required or strategically useful items can appear as tasks.

Mark an item `optional:true` when it is helpful but not required for route or living-dex completion. Optional tasks do not count toward required progress.

Examples of appropriate item coverage:

- Poké Balls before the first catch segment;
- Moon Stones needed for evolution planning;
- fossils;
- unique TMs or tutors when one-use status matters;
- evolution stones;
- key items;
- useful hidden items only when the detour is sensible.

## Stage structure

Each stage should have a stable unique `id` and short tab label.

Recommended shape:

```js
{
  id: "route-name-or-event",
  tab: "Short tab",
  title: "Current place or objective",
  subtitle: "One-line context",
  warning: "Only when necessary",
  tasks: [...],
  drawer: {
    title: "Optional contextual topic",
    text: "Collapsed explanation"
  }
}
```

Task groups are limited to:

- `Catch`
- `Story`
- `Items`

Do not create many new group categories unless the existing structure genuinely fails.

## Pokémon tokens and links

Use `[[Pokédex ID]]` in task title, metadata, detail, trainer team, evolution, and choice text.

Example:

```js
{
  id: "route1-pidgey",
  group: "Catch",
  title: "[[16]] ×3",
  meta: "50% · Lv. 2–5 · +1 Speed EV",
  detail: "Reserve one each for [[16]], [[17]], and [[18]]."
}
```

The renderer converts tokens into localized links to the matching Names entry.

Do not hardcode Pokémon names in guide prose when a token can be used.

## Language behavior

The guide reads:

```text
poke-etymology-language
```

Supported values:

- `e` English
- `f` French
- `j` Japanese

Language selection should affect:

- Pokémon names;
- route and city names;
- character names;
- major item and move names;
- stage tabs and headings;
- group headings;
- navigation labels;
- source labels;
- accessibility labels.

Full prose translation is not yet complete. Do not bulk machine-translate all guide prose and present it as reviewed. Translate in controlled, reviewable increments.

## Version behavior

Version-specific tasks use `variants`:

```js
variants: {
  fr: {title, meta, detail},
  lg: {title, meta, detail}
}
```

The base task carries the stable `id`, group, optional state, and shared fields.

Checklist state is kept separately for FireRed and LeafGreen.

## Saved progress

Current storage key:

```text
poke-etymology-frlg-guide-v2
```

Preserve task IDs whenever possible. Renaming display text is safe; renaming IDs can silently lose progress.

When adding earlier stages, changing order, or altering schema:

1. inspect existing storage migrations;
2. determine whether the old stage index still maps correctly;
3. increment storage version when necessary;
4. migrate the old object explicitly;
5. preserve version-specific checks.

## Source standard

Prefer:

1. official game data or official guides where available;
2. version-specific extracted game data;
3. reliable walkthrough and encounter tables such as Bulbapedia as a secondary structured reference;
4. a second independent reference for irreversible or high-impact claims.

Source drawers can contain broad route references, but important unusual claims should also be documented in source comments, research notes, PR descriptions, or dedicated guide-data notes so they can be audited later.

## Performance standard

The guide must render from local static JavaScript data.

Do not add:

- runtime encounter API calls;
- background synchronization;
- a persistent DOM observer;
- timers;
- automatic rerender loops;
- large map images;
- client frameworks.

After the initial render, work should happen only in response to direct user actions.

## Mobile test checklist

Before merging guide changes, test a narrow phone viewport:

- the page fills with content immediately;
- progress is not `0 / 0` unless the guide truly has no tasks;
- each task appears once;
- CPU use settles after render;
- tabs scroll horizontally;
- the active tab is distinct;
- inactive tabs do not retain a ghost touch state;
- text does not overlap;
- long names wrap;
- detail buttons expand only their row;
- checklist taps work without accidental link activation;
- version switching preserves separate checks;
- Pokémon links preserve language and open the correct entry;
- optional tasks do not count toward required progress;
- reloading preserves state.

## Current route boundary

At the 2026-07-31 snapshot, the guide contains 26 stages from Pallet Town through the northern Route 16 detour after first arriving in Celadon City.

Completed guide research records:

- `guides/research-vermilion.md` — Routes 5–6 through Vermilion Gym;
- `guides/research-rock-tunnel-celadon.md` — Route 9 through Route 16 North.

The next coherent extension should cover the Celadon Game Corner prize plan, Rocket Hideout and Silph Scope, Celadon Gym, and the return to Pokémon Tower. Keep those objectives in a separate reviewable chunk rather than mixing them into the Route 9–16 travel leg.