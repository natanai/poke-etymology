const ROUTE12_FUCHSIA_STAGES=[
  {
    id:"route-12-snorlax",
    tab:"Route 12",
    title:"Route 12",
    subtitle:"First Snorlax, the Super Rod, and completion-safe items",
    warning:"UNIQUE ENCOUNTER: save before waking [[143]]. Catch this one before touching the second and final wild copy on Route 16.",
    tasks:[
      {id:"route12-save-snorlax",group:"Story",title:"Save in front of [[143]]",meta:"Static encounter · Lv. 30",detail:"Bring enough Great Balls or Ultra Balls and a reliable status move. Reset if the encounter ends without a capture; do not spend the Route 16 copy as a backup yet."},
      {id:"route12-catch-snorlax",group:"Catch",title:"[[143]] ×1",meta:"Poké Flute · Lv. 30 · +2 HP EV",detail:"Use the Poké Flute and capture it. [[143]] has no evolution, so one retained copy completes this family."},
      {id:"route12-leftovers",group:"Items",title:"Hidden Leftovers",meta:"Use the Itemfinder where [[143]] slept",detail:"Stand on the exact tile formerly occupied by [[143]] and use the Itemfinder. This is one of the save’s two Snorlax-site Leftovers.",optional:true},
      {id:"route12-super-rod",group:"Items",title:"Receive the Super Rod",meta:"Fishing Guru’s younger brother",detail:"Visit the house on the pier. The Super Rod immediately unlocks the version-specific fishing family in the next stage."},
      {id:"route12-cut-items",group:"Items",title:"Cut-enclosure item sweep",meta:"Iron · hidden Rare Candy",detail:"Cut into the southwest enclosure for the Iron. The grass patch also hides a Rare Candy one tile east and two tiles north of its southwest corner.",optional:true}
    ]
  },
  {
    id:"route-12-fishing",
    tab:"Route 12 fishing",
    title:"Route 12 fishing",
    subtitle:"Use the new Super Rod for the high-rate version family",
    drawer:{title:"Wait on the 1% encounter",text:"The Super Rod also has a 1% [[54]] encounter in FireRed or 1% [[79]] encounter in LeafGreen. Do not grind for it here. After Koga enables Surf, Fuchsia City’s water is entirely [[54]] in FireRed or [[79]] in LeafGreen."},
    tasks:[
      {id:"route12-fishing-family",group:"Catch",variants:{fr:{title:"[[116]] ×3",meta:"Super Rod · 84% · Lv. 15–35 · +1 Sp. Atk EV",detail:"Keep one [[116]]. Evolve the second into [[117]] at level 32. Evolve the third into [[117]], then trade it holding a Dragon Scale after the National Pokédex to obtain [[230]]."},lg:{title:"[[98]] ×2",meta:"Super Rod · 84% · Lv. 15–35 · +1 Attack EV",detail:"Keep one [[98]] and evolve the second into [[99]] at level 28."}}},
      {id:"route12-fishing-finish",group:"Story",title:"Continue south after the family is secured",meta:"Route 13 → Route 14",detail:"The remaining Route 12 grass families were already covered earlier. Continue through the fence maze toward the better [[132]] rate on Route 14."}
    ]
  },
  {
    id:"routes-13-14",
    tab:"Routes 13–14",
    title:"Routes 13–14",
    subtitle:"Venonat family and the best pre-Fuchsia Ditto rate",
    tasks:[
      {id:"route14-venonat",group:"Catch",title:"[[48]] ×2",meta:"Route 14 · 30% · Lv. 24 or 26 · +1 Sp. Def EV",detail:"Keep one [[48]] and evolve the second into [[49]] at level 31."},
      {id:"route14-ditto",group:"Catch",title:"[[132]] ×1",meta:"Route 14 · 15% · Lv. 23 · +1 HP EV",detail:"Route 13 and Route 15 offer only 5%. Catch it on Route 14; it becomes especially useful once postgame breeding opens."},
      {id:"route13-pp-up",group:"Items",title:"Hidden PP Up",meta:"Route 13 · near the Trainer Tips sign",detail:"Check the ground near the sign in the southern fence maze.",optional:true},
      {id:"route14-hidden-items",group:"Items",title:"Route 14 hidden-item sweep",meta:"Pinap Berry · Zinc with Cut",detail:"The Pinap Berry is hidden on the route. Cut into the grass enclosure for the hidden Zinc.",optional:true},
      {id:"route14-finish",group:"Story",title:"Continue west to Route 15",meta:"No other new required family",detail:"Oddish or Bellsprout and the Pidgey family were already reserved earlier, so extras here are not needed for the living dex."}
    ]
  },
  {
    id:"route-15",
    tab:"Route 15",
    title:"Route 15",
    subtitle:"One-way northern hill, Rain Dance, and the Fuchsia gate",
    warning:"ONE-WAY LEDGE: enter the northern hill from Route 14 before dropping to the lower path if you want TM18.",
    tasks:[
      {id:"route15-north-path",group:"Story",title:"Take the northern Cut path",meta:"Enter from the Route 14 side",detail:"The hill runs east to west. Once you hop down near the gate, you cannot climb back onto it from the lower half without circling around."},
      {id:"route15-rain-dance",group:"Items",title:"TM18 Rain Dance",meta:"Northwest hill · Cut required",detail:"Collect it before the final ledge. The TM is single use in FireRed and LeafGreen.",optional:true},
      {id:"route15-exp-share",group:"Items",title:"Exp. Share at 50 caught species",meta:"Professor Oak’s aide · gate 2F",detail:"The aide checks caught Pokédex entries, not merely seen entries. A holder also receives the defeated Pokémon’s EV yield, so use it deliberately during EV-aware training.",optional:true},
      {id:"route15-enter-fuchsia",group:"Story",title:"Pass through the gate into Fuchsia City",meta:"Next: fishing setup",detail:"Heal before starting the city’s fishing catches. The Safari Zone remains untouched until the next dedicated guide chunk."}
    ]
  },
  {
    id:"fuchsia-setup",
    tab:"Fuchsia",
    title:"Fuchsia City",
    subtitle:"Good Rod families before the Safari Zone",
    drawer:{title:"Surf plan after Koga",text:"Once Surf is usable outside battle, Fuchsia City’s water gives [[54]] exclusively in FireRed or [[79]] exclusively in LeafGreen. Reserve two for [[54]] and [[55]], or three for [[79]], [[80]], and later [[199]]. The Safari Zone itself is deliberately left for the next guide chunk."},
    tasks:[
      {id:"fuchsia-good-rod",group:"Items",title:"Receive the Good Rod",meta:"Fishing Guru’s brother",detail:"Visit the eastern fishing house. This rod is the practical way to obtain the four-copy Poliwag family."},
      {id:"fuchsia-poliwag",group:"Catch",title:"[[60]] ×4",meta:"Good Rod · 20% · Lv. 5–15 · +1 Speed EV",detail:"Keep one [[60]]. Evolve three into [[61]] at level 25; retain one [[61]], use a Water Stone on one for [[62]], and later trade one holding a King’s Rock for [[186]]."},
      {id:"fuchsia-goldeen-seaking",group:"Catch",title:"[[118]] ×1 and [[119]] ×1",meta:"Super Rod · 40% each · Lv. 15–30",detail:"Catch both forms directly: [[118]] gives +1 Attack EV and [[119]] gives +2 Attack EV. This avoids raising a second [[118]] to level 33."},
      {id:"fuchsia-max-revive",group:"Items",title:"Hidden Max Revive",meta:"Fishing house backyard",detail:"Check one tile east of the southernmost flower behind the Fishing Guru’s brother’s house.",optional:true},
      {id:"fuchsia-stop",group:"Story",title:"Stop before entering the Safari Zone",meta:"Next chunk: timed Safari route",detail:"The Safari Zone needs its own encounter quantities, version-exclusive plan, HM03 Surf route, Gold Teeth route, and one-session navigation checklist."}
    ]
  }
];

VERMILION_STAGES.push(...ROUTE12_FUCHSIA_STAGES);
