# FireRed / LeafGreen Living Dex — Vermilion research record

## Scope

This guide-only batch extends the active route from Route 5 through the complete Vermilion arc:

1. Routes 5–6 and the Underground Path
2. Vermilion City
3. S.S. Anne
4. Route 11
5. Diglett’s Cave and the east side of Route 2
6. Vermilion Gym

The next route boundary is the return toward Cerulean City before Route 9 and Rock Tunnel.

## Merge isolation

This batch intentionally changes only files under `guides/`.

It does not modify:

- Generation I or Generation II name data;
- `data.js` or `generated-data.js`;
- research overlays;
- naming credits;
- language tags;
- name-effect baselines or validators;
- root documentation likely to be edited by parallel name-research work.

This is deliberate so concurrent Generation II name-entry work can merge with minimal conflict. The root handoff and architecture documents should be synchronized after concurrent work lands rather than edited simultaneously from two branches.

## Living-dex quantity decisions

### Spearow and Farfetch’d

The earlier plan required only two Spearow for Spearow and Fearow. Vermilion reveals a third required copy because the only ordinary FireRed/LeafGreen acquisition of Farfetch’d is the in-game Spearow trade.

The guide now recommends:

- one Spearow retained;
- one evolved into Fearow;
- one traded for Farfetch’d.

Route 11 provides a 35% catch-up opportunity if the player did not prepare the third copy earlier.

### Abra and Mr. Mime

The earlier plan required three Abra for Abra, Kadabra, and Alakazam. The Route 2 trade requires a fourth Abra for Mr. Mime.

The guide now recommends four Abra and explains the fourth purpose at both the original catch stage and the trade stage.

### Magikarp and Gyarados

A living dex requires two simultaneous copies:

- one Magikarp retained;
- one evolved into Gyarados.

The Route 4 purchase remains an optional early copy. The Old Rod in Vermilion provides a 100% level-5 source, and the guide adjusts the quantity according to whether the early copy was purchased.

### Meowth and Persian

Routes 5 and 6 provide Meowth at 35% in both versions. Catch two: retain Meowth and evolve Persian.

### Drowzee and Hypno

Route 11 provides Drowzee at 25%. Catch two: retain Drowzee and evolve Hypno.

### Diglett and Dugtrio

Diglett’s Cave provides:

- Diglett at 95%, levels 15–22;
- Dugtrio at 5%, levels 29 or 31.

The guide presents two valid completion strategies:

- catch one Diglett and one wild Dugtrio for the fastest completed family; or
- catch two Diglett and evolve one at level 26 if waiting for the 5% encounter is undesirable.

## Route-order decision

Route 11 and Diglett’s Cave are placed before Vermilion Gym because this order:

- obtains the Diglett family when first convenient;
- reaches the unique Mr. Mime trade;
- obtains HM05 Flash after ten caught species;
- obtains Old Amber through the Pewter Museum back entrance;
- supplies Ground-type Pokémon that are immune to Lt. Surge’s Electric-type attacks.

The route then returns through Diglett’s Cave for the gym.

## Permanent and one-save warnings

### S.S. Anne

After the captain is helped and HM01 Cut is received, the ship departs permanently when the player exits. Remaining trainers and items become unavailable.

The guide therefore places a permanent warning at the top of the stage and specifically names:

- TM31 Brick Break;
- TM44 Rest;
- the kitchen Great Ball and hidden berries;
- the free healing room;
- the rival battle;
- HM01 Cut.

### Unique trades

Farfetch’d and Mr. Mime are represented as unique in-game trades, with the required donor Pokémon included in the earlier living-dex quantities.

## EV notes

Generation III effort yields used in this batch:

- Meowth: +1 Speed
- Magikarp: +1 Speed
- Spearow: +1 Speed
- Drowzee: +1 Special Defense
- Diglett: +1 Speed
- Dugtrio: +2 Speed

EV text remains compact and decision-oriented rather than expanding into a training guide.

## Sources

Primary route verification used FireRed/LeafGreen-specific encounter and walkthrough references:

- Bulbapedia FireRed/LeafGreen walkthrough, Part 6
- Bulbapedia S.S. Anne location and walkthrough data
- Bulbapedia FireRed/LeafGreen walkthrough, Part 7
- Bulbapedia Route 5 encounter table
- Bulbapedia Route 6 encounter table
- Bulbapedia Route 11 encounter table
- Bulbapedia Diglett’s Cave encounter table
- Bulbapedia Route 2 trade and aide rewards
- pret/pokefirered decompilation data as a primary game-data cross-check where needed

French terminology was checked separately for Bon Commande, Cherche VS, Vieil Ambre, and Major Bob.

## Performance and state safety

- All content is committed static JavaScript.
- No runtime fetch, observer, timer, polling, or background work was added.
- Existing task IDs and stage order remain unchanged; six stages are appended.
- The current local-storage key remains valid because prior stage indices are preserved.
- New tasks use unique stable IDs.
- Pokémon references use `[[Pokédex ID]]` tokens so they remain localized and clickable.
