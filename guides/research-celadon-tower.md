# FireRed / LeafGreen Living Dex research — Game Corner through Pokémon Tower

**Reviewed:** 2026-07-31  
**Guide stages:** `game-corner-prizes` through `pokemon-tower-summit`

This document records the completion logic, source checks, and deliberately excluded walkthrough detail behind the third guide extension.

## Scope

The chunk starts after the northern Route 16 detour and ends when Mr. Fuji gives the Poké Flute.

The five stages are:

1. Celadon Game Corner prizes;
2. Rocket Hideout and the Silph Scope;
3. Celadon Gym;
4. Pokémon Tower catches;
5. Pokémon Tower summit and the Poké Flute.

The next route decision—Route 12 versus Route 16—is intentionally left for the following chunk.

## Celadon Game Corner

### Required prize: Porygon

Porygon is not available as a wild encounter in FireRed or LeafGreen. The Celadon prize counter is the required Kanto source.

Version-specific prizes:

| Version | Coins | Level |
|---|---:|---:|
| FireRed | 9999 | 26 |
| LeafGreen | 6500 | 18 |

Coins can be bought at 50 for $1000 or 500 for $10,000. The exchange rate is therefore always $20 per Coin.

The Game Corner contains 300 free Coins in total:

- 50 from patrons;
- 250 hidden on the floor.

Deterministic cash plans after collecting all 300:

- FireRed: buy 9700 Coins for $194,000, leaving one Coin after claiming Porygon;
- LeafGreen: buy 6200 Coins for $124,000.

Buying from zero costs $200,000 in FireRed or $130,000 in LeafGreen.

The guide does not tell the player to gamble for the required prize. Slot outcomes are variable, and no machine offers a dependable completion route. Cash purchase is expensive but deterministic.

### Porygon2 family plan

One Porygon is kept as the base form. After the National Pokédex and Four Island breeding become available, breed another Porygon and trade it while holding an Up-Grade to obtain Porygon2.

Porygon2 is included in `reference-data.js` so its localized name is linkable without placing it in the visible Generation I index.

### Optional version prize

FireRed offers Scyther for 5500 Coins at level 25. LeafGreen offers Pinsir for 2500 Coins at level 18.

These are optional guaranteed alternatives to catching the same version-exclusive species in the Safari Zone. They do not count toward required guide progress.

For a Generation II-aware family:

- retain one Scyther;
- breed another after the National Pokédex;
- trade the second while holding a Metal Coat to obtain Scizor.

Scizor is included in `reference-data.js` for localized guide links.

Pinsir has no Generation II evolution, so one copy is sufficient.

### Why other prizes wait

Abra and Clefairy are already covered by earlier stages. Dratini is not recommended here because the three-stage family would require a much larger Coin commitment; the Safari Zone provides a later catch route.

### Hidden staircase

The Rocket Grunt guarding the poster must be defeated. Inspecting the poster afterward reveals the switch that opens the staircase to the right.

References:

- https://bulbapedia.bulbagarden.net/wiki/Celadon_Game_Corner
- https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen/Part_9
- https://www.pokepedia.fr/Casino_de_C%C3%A9ladopole
- https://bulbapedia.bulbagarden.net/wiki/Porygon2_%28Pok%C3%A9mon%29
- https://bulbapedia.bulbagarden.net/wiki/Scizor_%28Pok%C3%A9mon%29

## Rocket Hideout

### Lift Key

The B4F Grunt does not leave the Lift Key as an ordinary visible pickup. After the battle, speak to him so he drops it. The elevator then provides the clean route to Giovanni’s southeast B4F room.

### Giovanni

Giovanni’s FireRed / LeafGreen team is:

- Onix level 25;
- Rhyhorn level 24;
- Kangaskhan level 29.

Water and Grass attacks handle the two Rock/Ground Pokémon efficiently. Kangaskhan is the less type-exploitable final threat.

### Silph Scope

Giovanni leaves the Silph Scope after he is defeated. The player must pick it up from the floor. It identifies wild Ghost Pokémon and the Marowak spirit in Pokémon Tower.

### Optional unique-item sweep

The guide groups these optional one-save pickups:

- Moon Stone and TM12 Taunt on B2F;
- TM21 Frustration on B3F;
- TM49 Snatch near the northwest B4F Lift Key area.

They are useful and finite but do not gate living-dex completion, so the combined task is optional.

References:

- https://bulbapedia.bulbagarden.net/wiki/Rocket_Hideout
- https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen/Part_9
- https://www.pokepedia.fr/Repaire_Rocket
- https://www.pokepedia.fr/Cl%C3%A9_Ascenseur
- https://www.pokepedia.fr/Scope_Sylphe

## Celadon Gym

Erika’s FireRed / LeafGreen team is:

- Victreebel level 29;
- Tangela level 24;
- Vileplume level 29.

The Gym requires Cut and contains Grass/Poison opponents with multiple status moves. The guide therefore keeps preparation concise: bring Cut, status recovery, and an effective attacking type.

Rewards:

- Rainbow Badge;
- TM19 Giga Drain;
- Strength becomes usable outside battle;
- traded Pokémon obey through level 50.

TM19 is single-use in Generation III, so the task tells the player to choose its recipient deliberately.

References:

- https://bulbapedia.bulbagarden.net/wiki/Celadon_Gym
- https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen/Part_9
- https://www.pokepedia.fr/Ar%C3%A8ne_de_C%C3%A9ladopole
- https://www.pokepedia.fr/Badge_Prisme

## Pokémon Tower catches

### Why use 7F

Generation III 7F encounters are:

- Gastly: 75%, levels 15–19;
- Haunter: 15%, levels 23 or 25;
- Cubone: 10%, levels 17 or 19.

This floor provides all three required catch targets together and offers the tower’s strongest Haunter rate.

### Gastly family quantity

The guide recommends:

- one Gastly retained as Gastly;
- two wild Haunter;
- retain one Haunter;
- trade the other Haunter into Gengar.

Catching the evolved forms directly avoids leveling two additional Gastly to level 25. The trade requirement remains explicit.

Generation III effort yields shown in the guide:

- Gastly: +1 Special Attack;
- Haunter: +2 Special Attack.

### Cubone family quantity

Catch two Cubone:

- retain one Cubone;
- evolve the other into Marowak at level 28.

Cubone gives +1 Defense EV in Generation III.

### Rival and healing zone

The rival battle occurs on 2F before the wild encounter floors. The protected white tile on 5F restores the party for free; it is useful but not required, so it remains optional.

### Marowak spirit

The Silph Scope reveals the level-30 Marowak spirit at the stairway above 6F. It cannot be caught. It must be defeated to open access to the summit.

The guide gives this an explicit warning so the player does not waste time or Poké Balls attempting an impossible living-dex capture.

References:

- https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Tower
- https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen/Part_10
- https://www.pokepedia.fr/Tour_Pok%C3%A9mon
- https://www.pokepedia.fr/Fant%C3%B4me_%28Tour_Pok%C3%A9mon%29

## Tower summit and Poké Flute

Three Rocket Grunts block Mr. Fuji on the summit. Speaking to him after those battles returns the player automatically to the Volunteer Pokémon House, where he gives the reusable Poké Flute.

The Poké Flute wakes the two level-30 Snorlax encounters blocking Route 12 and Route 16. These are the only two wild Snorlax in the save. Only one copy is needed for the living dex, but the next route chunk should tell the player to save before waking the first and leave the second untouched until the first capture is secure.

### Hidden Soothe Bell

After rescuing Mr. Fuji, return to the location where he stood and use the Itemfinder to obtain the hidden Soothe Bell. It is optional, but strategically useful for friendship evolutions such as Crobat, Espeon, and Umbreon.

References:

- https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Tower
- https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Flute
- https://bulbapedia.bulbagarden.net/wiki/Kanto_Route_12
- https://bulbapedia.bulbagarden.net/wiki/Kanto_Route_16
- https://www.pokepedia.fr/Pok%C3%A9_Fl%C3%BBte
- https://www.pokepedia.fr/Grelot_Zen

## UX and performance decisions

- The tower is split into catches and summit stages so neither becomes an oversized mobile checklist.
- Game Corner gambling is not represented as a required task; deterministic cash costs are shown instead.
- Optional guaranteed Scyther/Pinsir and optional item sweeps do not count toward progress.
- Existing stage and task IDs remain unchanged; five stages append after Route 16 North.
- All Pokémon names use `[[ID]]` tokens and remain localized links.
- No runtime request, image, observer, timer, polling, framework, or repeated background process was added.
- The route remains local static JavaScript consumed during the existing one-pass render.
