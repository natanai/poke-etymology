# FireRed / LeafGreen Living Dex research — Route 12 through Fuchsia City

**Reviewed:** 2026-07-31  
**Guide stages:** `route-12-snorlax` through `fuchsia-setup`

This record documents the completion logic, extracted encounter data, and deliberately deferred Safari Zone work behind the fourth guide extension.

## Scope

The chunk begins after receiving the Poké Flute and ends in Fuchsia City before entering the Safari Zone.

The five stages are:

1. Route 12 Snorlax and items;
2. Route 12 fishing;
3. Routes 13–14;
4. Route 15;
5. Fuchsia City fishing setup.

The Safari Zone is intentionally separate because its 500-step sessions, area-specific version exclusives, HM03 Surf route, Gold Teeth route, and family quantities need one focused plan.

## Primary encounter source

Encounter species, levels, and slot positions were checked against the `pret/pokefirered` decompilation:

- https://github.com/pret/pokefirered/blob/master/src/data/wild_encounters.json

The repository builds matching English FireRed and LeafGreen ROM images and is treated as the primary encounter-table source:

- https://github.com/pret/pokefirered

The extracted Generation III slot weights are:

- land: 20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1%;
- Good Rod: 60, 20, 20%;
- Super Rod: 40, 40, 15, 4, 1%.

These weights are applied to each map’s ordered species slots. This resolves several summaries that combine repeated slots into one displayed percentage.

## Route 12 Snorlax

### Unique encounter protection

The sleeping Snorlax on Route 12 is level 30. Together with the Route 16 encounter, it is one of only two wild Snorlax available in the save.

The guide therefore requires:

1. save before waking it;
2. capture this copy;
3. reset if the encounter ends without a capture;
4. leave the Route 16 copy untouched until the first is secure.

Only one Snorlax is needed because it has no evolution.

Generation III Snorlax yields +2 HP EVs.

### Leftovers

After the capture, using the Itemfinder on the exact tile where Snorlax slept reveals Leftovers. The corresponding Route 16 site can provide a second copy later.

### Super Rod and Cut enclosure

The Fishing Guru’s younger brother gives the Super Rod from the pier house.

The southwest Cut enclosure contains:

- a visible Iron;
- a hidden Rare Candy in the grass.

These items are useful but not required for living-dex progress, so they remain optional.

References:

- https://bulbapedia.bulbagarden.net/wiki/Kanto_Route_12
- https://bulbapedia.bulbagarden.net/wiki/Walkthrough:Pok%C3%A9mon_FireRed_and_LeafGreen/Part_10
- https://www.pokepedia.fr/Route_12_%28Kanto%29
- https://www.pokebip.com/page/jeux-video/pokemon-rouge-feu-vert-feuille/guide-des-lieux/route-12

## Route 12 fishing

### Corrected version split

The extracted encounter data establishes:

- **FireRed:** Horsea occupies 84% of the Super Rod table;
- **LeafGreen:** Krabby occupies 84% of the Super Rod table.

This is the opposite of an earlier secondary summary. The guide follows the extracted ROM data.

### FireRed Horsea quantity

Catch three Horsea:

- retain one Horsea;
- evolve one into Seadra at level 32;
- evolve the third into Seadra, then trade it holding a Dragon Scale after the National Pokédex to obtain Kingdra.

Horsea yields +1 Special Attack EV.

Kingdra is stored as a compact guide reference so its localized name is linkable before it becomes a published audited Names entry.

### LeafGreen Krabby quantity

Catch two Krabby:

- retain one Krabby;
- evolve the second into Kingler at level 28.

Krabby yields +1 Attack EV.

### Why the 1% encounter waits

The last Super Rod slot is:

- FireRed: Psyduck at 1%;
- LeafGreen: Slowpoke at 1%.

After Koga allows Surf outside battle, every Fuchsia City surfing slot is Psyduck in FireRed or Slowpoke in LeafGreen. The guide therefore avoids a long 1% grind and records the guaranteed later plan instead.

Primary data:

- https://github.com/pret/pokefirered/blob/master/src/data/wild_encounters.json

Secondary presentation checks:

- https://bulbapedia.bulbagarden.net/wiki/Kanto_Route_12
- https://www.pokebip.com/pokedex/rouge-feu-vert-feuille/localisations/kanto/route-12

## Routes 13–14

### Why Route 14 is the catch stop

Both versions use the same relevant land-slot pattern here.

Route 14 combines repeated slots into:

- Venonat: 30%, levels 24 or 26;
- Ditto: 15%, level 23.

Route 13 and Route 15 contain Ditto at only 5%. Route 14 is therefore the clean practical stop and avoids tripling the expected search time.

### Venonat family quantity

Catch two Venonat:

- retain one Venonat;
- evolve the second into Venomoth at level 31.

Venonat yields +1 Special Defense EV.

### Ditto quantity

One Ditto completes the living-dex species requirement. It also becomes useful when postgame breeding opens, but breeding utility is context rather than a reason to catch extra copies.

Ditto yields +1 HP EV.

### Optional hidden items

- Route 13: hidden PP Up near the Trainer Tips sign;
- Route 14: hidden Pinap Berry;
- Route 14: hidden Zinc in the Cut-accessible grass enclosure.

References:

- https://github.com/pret/pokefirered/blob/master/src/data/wild_encounters.json
- https://bulbapedia.bulbagarden.net/wiki/Kanto_Route_13
- https://bulbapedia.bulbagarden.net/wiki/Kanto_Route_14
- https://www.pokepedia.fr/Route_14_%28Kanto%29

## Route 15

### Northern hill

Route 15 is split by a long ledge. The northern hill is entered from the Route 14 side with Cut and runs east to west. The player may hop down to the southern half, but cannot climb back onto the hill from below.

TM18 Rain Dance is on the northwest hill. It is single-use in FireRed and LeafGreen, so the route gives a compact one-way-path warning.

### Exp. Share

Professor Oak’s aide on the gate’s second floor gives the Exp. Share after 50 different species have been caught. Seen entries do not satisfy the requirement.

The reward is useful but not required, so it remains optional. The guide also warns that an Exp. Share holder receives EVs from defeated Pokémon, which matters during EV-aware play.

References:

- https://bulbapedia.bulbagarden.net/wiki/Kanto_Route_15
- https://bulbapedia.bulbagarden.net/wiki/Exp._Share
- https://www.pokepedia.fr/Route_15_%28Kanto%29

## Fuchsia City

### Good Rod is still useful

The Fishing Guru’s brother gives the Good Rod.

The extracted Fuchsia Good Rod table is:

- Goldeen: 60%, levels 5–15;
- Magikarp: 20%, levels 5–15;
- Poliwag: 20%, levels 5–15.

Although the player already owns the Super Rod, the Good Rod is the practical source for Poliwag here.

### Poliwag family quantity

Four simultaneous forms are planned:

- Poliwag;
- Poliwhirl;
- Poliwrath;
- Politoed.

Catch four Poliwag. Retain one, evolve three at level 25, retain one Poliwhirl, use a Water Stone on one for Poliwrath, and later trade one Poliwhirl holding a King’s Rock for Politoed.

Poliwag yields +1 Speed EV.

Politoed is stored as a compact guide reference for localized links.

### Goldeen and Seaking direct catches

The Fuchsia Super Rod table contains:

- Goldeen: 40%, levels 15–25;
- Seaking: 40%, levels 20–30;
- Gyarados: 15%;
- version water family: 4% and 1%.

The guide catches one Goldeen and one Seaking directly. This avoids raising another Goldeen to level 33.

Generation III effort yields:

- Goldeen: +1 Attack;
- Seaking: +2 Attack.

### Post-Koga Surf plan

After Surf becomes usable outside battle:

- FireRed Fuchsia water is 100% Psyduck;
- LeafGreen Fuchsia water is 100% Slowpoke.

Planned quantities:

- FireRed: two Psyduck for Psyduck and Golduck;
- LeafGreen: three Slowpoke for Slowpoke, Slowbro, and later Slowking.

Slowking is stored as a compact guide reference.

### Hidden Max Revive

A hidden Max Revive is one tile east of the southernmost flower in the Fishing Guru’s brother’s backyard. It remains optional.

References:

- https://github.com/pret/pokefirered/blob/master/src/data/wild_encounters.json
- https://bulbapedia.bulbagarden.net/wiki/Fuchsia_City
- https://bulbapedia.bulbagarden.net/wiki/Good_Rod
- https://www.pokepedia.fr/Parmanie

## Reference-record additions

The compact guide reference layer gains:

- #186 Politoed / Tarpaud / ニョロトノ;
- #199 Slowking / Roigada / ヤドキング;
- #230 Kingdra / Hyporoi / キングドラ.

These records support localized guide links and Generation III family planning. They are not presented as audited name-etymology entries and must be removed from `reference-data.js` if later promoted into published `DATA`.

## UX and performance decisions

- Route 12 Snorlax and Route 12 fishing are separate so the unique capture warning is not buried in a fishing list.
- The Route 13 fence maze and Route 14 catches share one stage because Route 14 is the actual completion stop.
- Route 15 has no duplicate catch rows; it focuses only on the one-way hill and threshold reward.
- Fuchsia fishing is completed before the Safari Zone, but the timed Safari route remains a separate chunk.
- Optional items and the Exp. Share do not count toward required progress.
- Existing stage and task IDs remain unchanged; five stages append after the Pokémon Tower summit.
- All Pokémon names use `[[ID]]` tokens and remain localized direct links.
- No runtime request, image, observer, timer, polling, framework, or repeated background process was added.
- The route remains static local JavaScript consumed during the existing one-pass render.
