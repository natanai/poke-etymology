const CELADON_TOWER_STAGES=[
  {
    id:"game-corner-prizes",
    tab:"Game Corner",
    title:"Celadon Game Corner",
    subtitle:"Porygon, optional version prize, and the hidden stairs",
    drawer:{title:"Prize plan",text:"[[137]] is the only living-dex species that must come from this prize counter. Buy one now. After the National Pokédex, breed a second [[137]] and trade that copy while it holds an Up-Grade to obtain [[233]]. FireRed’s [[123]] and LeafGreen’s [[127]] are optional guaranteed alternatives to catching them in the Safari Zone. Abra and Clefairy are already covered; wait for the Safari Zone rather than buying the three-copy Dratini family here."},
    tasks:[
      {id:"gamecorner-free-coins",group:"Items",title:"Collect up to 300 free Coins",meta:"50 from patrons · 250 hidden on the floor",detail:"The free sweep lowers the deterministic cash cost of the required prize. The hidden Coins require the Coin Case.",optional:true},
      {id:"gamecorner-porygon",group:"Catch",variants:{fr:{title:"[[137]] ×1",meta:"9999 Coins · Lv. 26 · only Kanto source",detail:"Buying from zero costs $200,000. After collecting all 300 free Coins, buy 9700 more for $194,000. Keep this copy as [[137]] and breed a second postgame for [[233]]."},lg:{title:"[[137]] ×1",meta:"6500 Coins · Lv. 18 · only Kanto source",detail:"Buying from zero costs $130,000. After collecting all 300 free Coins, buy 6200 more for $124,000. Keep this copy as [[137]] and breed a second postgame for [[233]]."}}},
      {id:"gamecorner-version-prize",group:"Catch",optional:true,variants:{fr:{title:"Optional guaranteed [[123]]",meta:"5500 Coins · Lv. 25",detail:"This avoids the later Safari Zone encounter. Keep one [[123]]; a postgame-bred second copy can evolve into [[212]] by trading with a Metal Coat."},lg:{title:"Optional guaranteed [[127]]",meta:"2500 Coins · Lv. 18",detail:"This avoids the later Safari Zone encounter. [[127]] has no Generation II evolution, so only one copy is needed."}}},
      {id:"gamecorner-stairs",group:"Story",title:"Reveal the Rocket Hideout stairs",meta:"Defeat the Grunt guarding the poster",detail:"Inspect the poster after the battle and press the hidden switch. The staircase opens immediately to the right."}
    ]
  },
  {
    id:"rocket-hideout",
    tab:"Rocket Hideout",
    title:"Rocket Hideout",
    subtitle:"Lift Key, Giovanni, and the Silph Scope",
    tasks:[
      {id:"hideout-lift-key",group:"Story",title:"Obtain the Lift Key",meta:"B4F northwest · speak to the defeated Grunt",detail:"The Grunt does not drop the key until you talk to him after the battle. Return through the spinner maze and use the elevator to reach B4F southeast."},
      {id:"hideout-unique-items",group:"Items",title:"Moon Stone and single-use TM sweep",meta:"TM12 Taunt · TM21 Frustration · TM49 Snatch",detail:"The Moon Stone and TM12 are on B2F, TM21 is on B3F, and TM49 is in the northwest B4F room near the Lift Key Grunt.",optional:true},
      {id:"hideout-giovanni",group:"Story",title:"Defeat Giovanni",meta:"[[95]] Lv. 25 · [[111]] Lv. 24 · [[115]] Lv. 29",detail:"His Rock/Ground Pokémon are highly vulnerable to Water and Grass attacks. Kangaskhan is the main neutral-damage threat."},
      {id:"hideout-silph-scope",group:"Items",title:"Pick up the Silph Scope",meta:"B4F southeast · dropped after Giovanni",detail:"Do not leave it on the floor. It identifies the wild Ghost Pokémon and the Marowak spirit in Pokémon Tower."}
    ]
  },
  {
    id:"celadon-gym",
    tab:"Celadon Gym",
    title:"Celadon Gym",
    subtitle:"Erika, the Rainbow Badge, and Strength access",
    tasks:[
      {id:"celadon-gym-enter",group:"Story",title:"Enter with Cut and status healing",meta:"Grass and Poison specialists",detail:"Cut is required inside the Gym. Fire, Ice, Flying, Psychic, and Bug attacks are useful; bring answers to sleep, paralysis, and poison."},
      {id:"celadon-erika",group:"Story",title:"Defeat Erika",meta:"[[71]] Lv. 29 · [[114]] Lv. 24 · [[45]] Lv. 29",detail:"Victreebel and Vileplume can stack status effects. Tangela has lower offensive pressure but can prolong the battle."},
      {id:"celadon-rainbow",group:"Items",title:"Rainbow Badge and TM19 Giga Drain",meta:"Strength becomes usable outside battle",detail:"The badge also makes traded Pokémon obey through level 50. TM19 is single use, so choose its recipient deliberately."}
    ]
  },
  {
    id:"pokemon-tower-catches",
    tab:"Tower catches",
    title:"Pokémon Tower",
    subtitle:"Rival, healing floor, and the Ghost-family catch plan",
    warning:"UNCATCHABLE: the level-30 Marowak spirit must be defeated; it cannot join the living dex.",
    tasks:[
      {id:"tower-gastly",group:"Catch",title:"[[92]] ×1",meta:"7F · 75% · Lv. 15–19 · +1 Sp. Atk EV",detail:"Keep this copy as [[92]]. The two evolved forms are cleaner to obtain directly as wild [[93]]."},
      {id:"tower-haunter",group:"Catch",title:"[[93]] ×2",meta:"7F · 15% · Lv. 23 or 25 · +2 Sp. Atk EV",detail:"Keep one [[93]] and trade the other to obtain [[94]]. Catching both directly avoids leveling two additional [[92]]."},
      {id:"tower-cubone",group:"Catch",title:"[[104]] ×2",meta:"7F · 10% · Lv. 17 or 19 · +1 Defense EV",detail:"Keep one [[104]] and evolve the other into [[105]] at level 28."},
      {id:"tower-rival",group:"Story",title:"Defeat the rival on 2F",meta:"Five-Pokémon team · starter-dependent",detail:"The battle happens before the wild floors. Heal in Lavender Town first if needed."},
      {id:"tower-healing-zone",group:"Story",title:"Use the healing zone on 5F",meta:"Free full-party recovery",detail:"The protected white tile restores the party and makes it practical to finish the climb without leaving the tower.",optional:true},
      {id:"tower-marowak",group:"Story",title:"Defeat the Marowak spirit",meta:"6F stairway · Lv. 30",detail:"The Silph Scope reveals the ghost. It cannot be caught; defeating it opens the stairway to 7F, which has the best combined catch rates."}
    ]
  },
  {
    id:"pokemon-tower-summit",
    tab:"Tower summit",
    title:"Pokémon Tower Summit",
    subtitle:"Rescue Mr. Fuji and unlock the southern routes",
    drawer:{title:"Next: the two Snorlax",text:"The Poké Flute unlocks the level-30 [[143]] encounters on Routes 12 and 16. These are the only two wild [[143]] in the save. Only one is needed for the living dex: save before waking the first, catch it, and leave the second untouched until that capture is secure."},
    tasks:[
      {id:"tower-rockets",group:"Story",title:"Defeat the three Rocket Grunts on 7F",meta:"They block Mr. Fuji",detail:"Clear all three battles, then speak to Mr. Fuji at the north end of the floor."},
      {id:"tower-rescue-fuji",group:"Story",title:"Return with Mr. Fuji",meta:"Automatic trip to the Volunteer Pokémon House",detail:"Speaking to him after the Grunts are defeated returns you to his house at the base of the tower."},
      {id:"tower-poke-flute",group:"Items",title:"Receive the Poké Flute",meta:"Mr. Fuji’s house",detail:"The reusable flute wakes the two sleeping [[143]] that block Routes 12 and 16."},
      {id:"tower-soothe-bell",group:"Items",title:"Hidden Soothe Bell",meta:"7F · Mr. Fuji’s former spot · Itemfinder required",detail:"Return to the summit and use the Itemfinder exactly where Mr. Fuji stood. The held item speeds friendship evolutions such as [[169]], [[196]], and [[197]].",optional:true}
    ]
  }
];

VERMILION_STAGES.push(...CELADON_TOWER_STAGES);
