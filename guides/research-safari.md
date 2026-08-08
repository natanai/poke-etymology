# FireRed / LeafGreen Living Dex research — Safari Zone

**Reviewed:** 2026-08-08  
**Guide stages:** `safari-prize-run` through `fuchsia-warden`

This record documents the encounter math, completion quantities, route decisions, and a correction to the project’s earlier Safari step-limit note.

## Scope

This chunk begins at Fuchsia City before the first Safari Zone entry and ends after returning the Gold Teeth to the Warden for HM04 Strength.

The five stages are:

1. a direct Safari prize run for the Gold Teeth and HM03 Surf;
2. a Center catch run for Rhyhorn, Exeggcute, and the version-exclusive bug;
3. purpose-specific East / North / West rare-catch runs;
4. a stationary Super Rod run for the Dratini family;
5. the Warden / HM04 Strength cleanup.

Koga, post-Surf Fuchsia catches, the second Snorlax, and Cycling Road remain outside this chunk.

## Primary sources

### Extracted encounter data

Encounter species, levels, and slot positions were checked against the `pret/pokefirered` decompilation:

- https://github.com/pret/pokefirered/blob/master/src/data/wild_encounters.json

The relevant Generation III land slot weights are:

- 20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1%.

The Super Rod slots are:

- 40, 40, 15, 4, 1%.

Repeated species slots are combined below when stating practical encounter percentages.

### Safari timer and balls

The project handoff previously referred to a **500-step** Safari limit. That is not correct for FireRed / LeafGreen.

`src/safari_zone.c` sets:

- `gSafariZoneStepCounter = 600`;
- `gNumSafariBalls = 30`.

The field-step handler decrements the step counter while the player moves in the Safari Zone and ends the session at zero.

Source:

- https://github.com/pret/pokefirered/blob/master/src/safari_zone.c

The entrance script charges ₽500 for an entry and describes the 30-ball allocation:

- https://github.com/pret/pokefirered/blob/master/data/maps/FuchsiaCity_SafariZone_Entrance/scripts.inc

All authoritative project documentation should therefore say **600 steps**, not 500.

## Why the first entry is a prize run

The permanent completion-critical rewards sit at the far end of the Safari route:

- Gold Teeth in the West area;
- HM03 Surf from the Secret House in the West area.

The direct area sequence is:

**Center → East → North → West → Secret House**

The first entry should prioritize this route rather than deliberately pacing in grass for rare encounters. Incidental catches are welcome, but rare hunting can be repeated later for another ₽500 with 30 fresh Safari Balls and a reset 600-step counter.

This separates a deterministic navigation objective from stochastic catches that can flee.

Map / script sources:

- Center map: https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_Center/map.json
- East map: https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_East/map.json
- North map: https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_North/map.json
- West map: https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_West/map.json
- Secret House reward: https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_SecretHouse/scripts.inc

The West map places the Gold Teeth in the same destination area as the Secret House.

## Center catch run

### Rhyhorn family

In both versions, Safari Center contains:

- Rhyhorn: **20%**, level 25.

Catch two:

- retain one Rhyhorn;
- evolve the other into Rhydon at level 42.

Generation III Rhyhorn yields +1 Defense EV.

### Exeggcute family

In both versions, Center contains two 10% Exeggcute slots:

- Exeggcute: **20%**, levels 24–25.

Catch two:

- retain one Exeggcute;
- use a Leaf Stone on the second for Exeggutor.

Leaf Stones are repeatable Department Store purchases, so no finite-stone warning is needed here.

Generation III Exeggcute yields +1 Defense EV.

### Version-exclusive bug

Center is the best Safari table for the version-exclusive bug:

- FireRed: Scyther **4%**, level 23;
- LeafGreen: Pinsir **4%**, level 23.

The East area contains the same version-exclusive species at only 1%, so Center is the preferred hunt.

The earlier Celadon Game Corner stage offered a guaranteed prize as an optional alternative. If the player bought that prize, this task is already complete.

For FireRed, only one Scyther is needed for the Kanto living dex now. Scizor becomes available after the National Pokédex through a Metal Coat trade, so breeding or trading for a second Scyther later is cleaner than forcing two Safari catches now.

Scizor remains a compact guide reference until it is published as an audited Names entry.

Generation III effort yields:

- Scyther: +1 Attack;
- Pinsir: +2 Attack.

## Rare-area runs

The three non-version-exclusive Safari rarities each have one practical 4% area and a 1% fallback elsewhere. The guide uses the 4% table every time.

### Kangaskhan

- East: **4%**, level 25;
- West: 1%, level 28.

Catch one in East.

Generation III Kangaskhan yields +2 HP EVs.

### Chansey

- North: **4%**, level 26;
- Center: 1%, level 23.

Catch one in North.

For the Generation II-aware family plan, retain this Chansey. After postgame breeding becomes available, breed another copy and evolve that copy by high friendship into Blissey.

Blissey (#242) is added to `reference-data.js` only so this guide can show its localized name and link. It is not being presented as an audited etymology entry.

Generation III Chansey yields +2 HP EVs.

### Tauros

- West: **4%**, level 25;
- North: 1%, level 28.

Catch one in West.

Generation III Tauros yields +1 Attack and +1 Speed EV.

## Deferred Nidoran family

The earlier Route 3 stage deliberately allowed the version-rare Nidoran family to wait for the Safari Zone.

A direct Safari completion plan avoids catching and leveling three base forms:

### FireRed rare female family

Target:

- one Nidoran♀;
- two Nidorina.

Retain Nidoran♀ and one Nidorina. Use a Moon Stone on the second Nidorina for Nidoqueen.

Useful Safari slots include Nidoran♀ at 5% in East / West and Nidorina at 5% in Center / North.

### LeafGreen rare male family

Target:

- one Nidoran♂;
- two Nidorino.

Retain Nidoran♂ and one Nidorino. Use a Moon Stone on the second Nidorino for Nidoking.

Useful Safari slots include Nidoran♂ at 5% in East / West and Nidorino at 5% in Center / North.

This task is conditional because many players will already have completed the family on Route 3. The earlier Route 3 task remains the saved-progress authority; the Safari row merely gives the deferred completion route.

## Dratini family

Every Safari area uses the same relevant Super Rod slots:

- Dratini: **15%**, levels 15–25;
- Dragonair: **1%**, levels 25–35.

Catch three Dratini:

- retain one Dratini;
- evolve one into Dragonair at level 30;
- evolve the third through Dragonair into Dragonite at level 55.

This is more reliable than making a 1% Dragonair encounter mandatory. If Dragonair appears and is caught, it can replace one planned evolution, but the route does not depend on it.

Generation III Dratini yields +1 Attack EV.

Fishing is deliberately its own run. The player can fish without walking between rare-grass areas, so the 600-step navigation limit is not the important constraint for this task; the 30 Safari Balls and possible fleeing are.

## Safari items

The first prize run should not be overloaded with side-item detours. The guide instead points out three single-use TMs that fit later catch runs:

- East: TM11 Sunny Day;
- North: TM32 Double Team;
- West: TM47 Steel Wing.

Other useful map items include Max Revives, Max Potions, a Nugget, Protein, and Leaf Stones. They are not required for living-dex completion and therefore remain optional.

Map sources:

- https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_Center/map.json
- https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_East/map.json
- https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_North/map.json
- https://github.com/pret/pokefirered/blob/master/data/maps/SafariZone_West/map.json

## Warden and Strength

Returning the Gold Teeth to the Safari Zone Warden in Fuchsia City rewards HM04 Strength.

Source:

- https://github.com/pret/pokefirered/blob/master/data/maps/FuchsiaCity_WardensHouse/scripts.inc

The Rainbow Badge was obtained earlier from Erika and already permits Strength to be used outside battle once HM04 is available.

Koga remains the next major progression step because his Soul Badge enables HM03 Surf outside battle.

## Reference-record addition

The compact guide reference layer gains:

- #242 Blissey / Leuphorie / ハピナス — Hapinasu.

Its Generation III type is Normal and its effort yield is +3 HP.

This compact record supports guide linking only. If #242 is later promoted into published Generation II data, it must be removed from `reference-data.js`; the guide validator rejects reference records that duplicate published `DATA`.

## UX and performance decisions

- The Safari content is split by player objective rather than by every map boundary.
- The first run separates deterministic permanent rewards from probabilistic rare catches.
- Rhyhorn, Exeggcute, and the version-exclusive 4% species share Center because that is an efficient combined hunt.
- Kangaskhan, Chansey, and Tauros share one conceptual stage but explicitly identify their best 4% areas.
- Dratini gets its own stationary fishing stage because its resource constraints differ from grass hunting.
- The Warden task sits outside the timed Safari session and closes the Gold Teeth reward loop.
- Existing stage and task IDs remain unchanged; five stages append after Fuchsia setup.
- Optional item sweeps and deferred-family cleanup do not count toward required progress.
- No runtime request, image, observer, timer, polling, framework, hydration, or repeated background process was added.
