const ROCK_TUNNEL_CELADON_STAGES=[
  {
    id:"route-9",
    tab:"Route 9",
    title:"Route 9",
    subtitle:"Cerulean City to Route 10",
    tasks:[
      {id:"route9-open",group:"Story",title:"Cut the tree east of Cerulean City",meta:"Route 9 begins beyond the fence",detail:"Bring a Pokémon with Cut. This is the only story route east from Cerulean City."},
      {id:"route9-aerial-ace",group:"Items",title:"TM40 Aerial Ace",meta:"Southwest corner · single use",detail:"Collect the visible TM before continuing east."},
      {id:"route9-hidden",group:"Items",title:"Hidden-item sweep",meta:"Ether · Chesto Berry · Rare Candy",detail:"The Ether is hidden on a northwest rock. The Chesto Berry and Rare Candy are hidden near the northeast end of the route.",optional:true},
      {id:"route9-finish",group:"Story",title:"Reach the Route 10 Pokémon Center",meta:"Heal before Rock Tunnel",detail:"The grass near the Pokémon Center contains the next required living-dex family."}
    ]
  },
  {
    id:"route-10-north",
    tab:"Route 10",
    title:"Route 10 North",
    subtitle:"Voltorb and Rock Tunnel preparation",
    tasks:[
      {id:"route10-voltorb",group:"Catch",title:"[[100]] ×2",meta:"40% · Lv. 14, 16, or 17 · +1 Speed EV",detail:"Keep one [[100]] and evolve the other into [[101]] at level 30."},
      {id:"route10-everstone",group:"Items",title:"Everstone",meta:"Pokémon Center · 20 caught species",detail:"Professor Oak’s aide gives this held item after the Pokédex records at least 20 caught species.",optional:true},
      {id:"route10-flash",group:"Story",title:"Put a Flash user in the party",meta:"HM05 from Route 2",detail:"Rock Tunnel can be crossed without Flash, but the intended route is much clearer with it."},
      {id:"route10-enter",group:"Story",title:"Enter Rock Tunnel",meta:"North entrance",detail:"Bring enough Poké Balls for two new families and leave room for the one-use Rock Slide tutor decision."}
    ]
  },
  {
    id:"rock-tunnel",
    tab:"Rock Tunnel",
    title:"Rock Tunnel",
    subtitle:"Machop, Onix, and the Rock Slide tutor",
    warning:"ONE USE: the Rock Slide tutor on B1F can teach only one Pokémon.",
    tasks:[
      {id:"rock-machop",group:"Catch",title:"[[66]] ×3",meta:"1F · 15% · Lv. 16–17 · +1 Attack EV",detail:"Reserve [[66]], [[67]], and [[68]]. [[67]] evolves at level 28; [[68]] requires trading [[67]]. The 1F rate is better than B1F’s 10%."},
      {id:"rock-onix",group:"Catch",title:"[[95]] ×2",meta:"B1F · 10% · Lv. 13, 15, or 17 · +1 Defense EV",detail:"Keep one [[95]]. Reserve the second for a later Metal Coat trade into [[208]] after the National Pokédex. B1F doubles the 1F encounter rate."},
      {id:"rock-slide-tutor",group:"Items",title:"Rock Slide tutor",meta:"B1F northwest · one use",detail:"The Youngster south of Picnicker Sofia teaches Rock Slide once. Leave it unused unless you have chosen a long-term recipient."},
      {id:"rock-items",group:"Items",title:"Cave item sweep",meta:"Repel · Escape Rope · Pearl · Revive · Max Ether",detail:"All five visible items can be collected along the normal route through both floors.",optional:true},
      {id:"rock-exit",group:"Story",title:"Leave through the southwest exit",meta:"Route 10 South → Lavender Town",detail:"Continue south past the remaining trainers to reach Lavender Town."}
    ]
  },
  {
    id:"lavender-route-8",
    tab:"Lavender → Route 8",
    title:"Lavender Town → Route 8",
    subtitle:"Delay Pokémon Tower; catch the version exclusive",
    tasks:[
      {id:"lavender-wait",group:"Story",title:"Leave Pokémon Tower for later",meta:"Silph Scope required for catches",detail:"Before obtaining the Silph Scope, the tower’s wild Pokémon appear as unidentified ghosts and cannot be caught. The Celadon Rocket Hideout supplies the required item."},
      {id:"route8-exclusive",group:"Catch",variants:{fr:{title:"[[58]] ×2",meta:"Route 8 · 20% · Lv. 15–18 · +1 Attack EV",detail:"Use Cut to enter the fenced grass. Keep one [[58]] and evolve the other into [[59]] with a Fire Stone."},lg:{title:"[[37]] ×2",meta:"Route 8 · 20% · Lv. 15–18 · +1 Speed EV",detail:"Use Cut to enter the fenced grass. Keep one [[37]] and evolve the other into [[38]] with a Fire Stone."}}},
      {id:"route8-berries",group:"Items",title:"Hidden berry sweep",meta:"Leppa · Lum · Rawst",detail:"All three berries are hidden inside the fenced grass patch reached with Cut.",optional:true},
      {id:"route8-underground",group:"Story",title:"Use the Underground Path to Route 7",meta:"Saffron City gate remains blocked",detail:"Take the eastern entrance on Route 8, cross beneath Saffron City, and emerge on Route 7."},
      {id:"route7-celadon",group:"Story",title:"Walk west into Celadon City",meta:"No required Route 7 catch yet",detail:"The Route 8 version-exclusive encounter is twice as common as the equivalent Route 7 encounter, so finish it before entering the city."}
    ]
  },
  {
    id:"celadon-setup",
    tab:"Celadon setup",
    title:"Celadon City",
    subtitle:"Eevee, Tea, and repeatable evolution stones",
    drawer:{title:"Eevee family plan",text:"A Generation II-aware living set ultimately needs six copies: [[133]], [[134]], [[135]], [[136]], [[196]], and [[197]]. This save gives one now. Breed additional copies at Four Island after the National Pokédex or obtain them by trade. FireRed and LeafGreen have no clock, so [[196]] and [[197]] must evolve in a compatible time-enabled game and be traded back."},
    tasks:[
      {id:"celadon-eevee",group:"Catch",title:"Receive [[133]]; keep it unevolved for now",meta:"Celadon Mansion roof · Lv. 25 · one per save",detail:"Leave an empty party slot, enter the mansion from the rear path behind the Pokémon Center, and climb to the rooftop room. Keeping the gift unevolved preserves the base form until postgame breeding or trading is available."},
      {id:"celadon-tea",group:"Items",title:"Tea",meta:"Celadon Mansion 1F",detail:"The elderly woman gives the Tea used to open every Saffron City gate."},
      {id:"celadon-coin-case",group:"Items",title:"Coin Case",meta:"Restaurant · south side of the city",detail:"Receive it from the man in the back of the restaurant. It is required for the Game Corner prize Pokémon in the next guide leg."},
      {id:"celadon-stones",group:"Items",title:"Evolution stones are repeatable purchases",meta:"Department Store 4F · $2100 each",detail:"Fire Stone, Thunder Stone, Water Stone, and Leaf Stone can be bought repeatedly. There is no need to conserve these four stone types as finite items."},
      {id:"celadon-restock",group:"Story",title:"Restock before the Route 16 detour",meta:"Great Balls · Super Repels · healing",detail:"The Department Store sells stronger supplies before the next set of city and Rocket objectives.",optional:true}
    ]
  },
  {
    id:"route-16-north",
    tab:"Route 16",
    title:"Route 16 North",
    subtitle:"Doduo, Fly, and the blocked Cycling Road",
    tasks:[
      {id:"route16-doduo",group:"Catch",title:"[[84]] ×2",meta:"35% · Lv. 18, 20, or 22 · +1 Attack EV",detail:"Keep one [[84]] and evolve the other into [[85]] at level 31."},
      {id:"route16-fly",group:"Items",title:"HM02 Fly",meta:"Northwest house · Cut required",detail:"Pass through the northern gate and speak to the woman in the hidden house. The Thunder Badge already allows Fly to be used outside battle."},
      {id:"route16-amulet",group:"Items",title:"Amulet Coin",meta:"Gate · 40 caught species",detail:"Professor Oak’s aide gives it after the Pokédex records at least 40 caught species.",optional:true},
      {id:"route16-snorlax",group:"Story",title:"Leave the sleeping [[143]] for later",meta:"Poké Flute required",detail:"The road south remains blocked until Pokémon Tower is completed. Return to Celadon City for the Game Corner and Rocket Hideout."}
    ]
  }
];
