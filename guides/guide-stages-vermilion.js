const VERMILION_STAGES=[
  {
    id:"routes-5-6",
    tab:"Routes 5–6",
    title:"Routes 5–6",
    subtitle:"Underground Path to Vermilion City",
    tasks:[
      {id:"route56-meowth",group:"Catch",title:"[[52]] ×2",meta:"35% · Lv. 10, 12, 14, or 16 · +1 Speed EV",detail:"Catch on either Route 5 or Route 6. Keep one [[52]] and evolve the other into [[53]] at level 28."},
      {id:"route56-underground",group:"Story",title:"Use the Underground Path",meta:"Saffron City gates are still blocked",detail:"Enter south of Route 5 and follow the tunnel to Route 6."},
      {id:"route6-hidden",group:"Items",title:"Hidden Rare Candy and Sitrus Berry",meta:"Route 6 hills",detail:"The Rare Candy is hidden on the northeast hill; the Sitrus Berry is hidden on the northwest hill.",optional:true},
      {id:"route6-vermilion",group:"Story",title:"Reach Vermilion City",meta:"Heal before exploring the port",detail:"The city contains two unique living-dex acquisitions and the ticketed entrance to the S.S. Anne."}
    ]
  },
  {
    id:"vermilion-city",
    tab:"Vermilion",
    title:"Vermilion City",
    subtitle:"Unique trade, fishing, and travel tools",
    tasks:[
      {id:"vermilion-magikarp",group:"Catch",title:"Own [[129]] ×2 total",meta:"Old Rod · 100% · Lv. 5 · +1 Speed EV",detail:"Receive the Old Rod from the Fishing Guru. Catch two [[129]] if you skipped the Route 4 purchase, or catch one more if you bought that early copy. Keep one and evolve the other into [[130]] at level 20."},
      {id:"vermilion-farfetchd",group:"Catch",title:"Trade a spare [[21]] for [[83]]",meta:"Unique in-game trade · same level",detail:"The traded [[83]] arrives holding a Stick. If you kept only two [[21]], catch a third on Route 11 at 35% before completing this trade. [[83]] can carry Cut now and Fly later."},
      {id:"vermilion-vs-seeker",group:"Items",title:"Vs. Seeker",meta:"Pokémon Center counter",detail:"The Ace Trainer at the counter gives this reusable rematch tool. It is useful for money, experience, and controlled EV training.",optional:true},
      {id:"vermilion-bike-voucher",group:"Items",title:"Bike Voucher",meta:"Pokémon Fan Club Chairman",detail:"Listen to the Chairman, then exchange the voucher at the Bike Shop in Cerulean City whenever convenient."},
      {id:"vermilion-board",group:"Story",title:"Board the S.S. Anne",meta:"S.S. Ticket required",detail:"Show Bill’s ticket at the harbor entrance. Once the captain is helped, the ship will leave permanently when you exit."}
    ]
  },
  {
    id:"ss-anne",
    tab:"S.S. Anne",
    title:"S.S. Anne",
    subtitle:"Permanent missables and HM01 Cut",
    warning:"PERMANENT: after receiving HM01 Cut, the ship leaves forever when you exit. Clear every room and item you want first.",
    tasks:[
      {id:"ssanne-clear",group:"Story",title:"Clear desired cabins and trainers",meta:"A woman on 1F heals your party",detail:"Use the free healing room instead of leaving the ship. Finish optional battles and room searches before visiting the captain."},
      {id:"ssanne-brick-break",group:"Items",title:"TM31 Brick Break",meta:"1F · second cabin from the left",detail:"A single-use Fighting-type TM and one of the ship’s most useful permanent missables."},
      {id:"ssanne-rest",group:"Items",title:"TM44 Rest",meta:"B1F · fourth cabin from the right",detail:"A single-use recovery TM. Collect it before the ship departs."},
      {id:"ssanne-kitchen",group:"Items",title:"Kitchen item sweep",meta:"Great Ball · Chesto, Cheri, and Pecha Berries",detail:"The three berries are hidden in the kitchen trash cans; the Great Ball is visible in the lower-left corner.",optional:true},
      {id:"ssanne-rival",group:"Story",title:"Defeat the rival",meta:"Upper deck stairs",detail:"The rival blocks the route to the captain. Heal first if the ship’s trainers have worn down the party."},
      {id:"ssanne-cut",group:"Items",title:"HM01 Cut",meta:"Captain’s quarters",detail:"Help the seasick captain after the rival battle. The HM is reusable, but a Pokémon cannot forget Cut normally until the Move Deleter becomes available."},
      {id:"ssanne-leave",group:"Story",title:"Leave only when the ship is finished",meta:"Departure is permanent",detail:"Exiting after helping the captain causes the S.S. Anne to sail away, permanently removing its remaining trainers and items."}
    ]
  },
  {
    id:"route-11",
    tab:"Route 11",
    title:"Route 11",
    subtitle:"Drowzee, catch-up Spearow, and the east gate",
    tasks:[
      {id:"route11-drowzee",group:"Catch",title:"[[96]] ×2",meta:"25% · Lv. 11, 13, or 15 · +1 Sp. Def EV",detail:"Keep one [[96]] and evolve the other into [[97]] at level 26."},
      {id:"route11-spearow",group:"Catch",title:"Catch a spare [[21]] if needed",meta:"35% · Lv. 13, 15, or 17 · +1 Speed EV",detail:"Use this copy for the unique [[83]] trade in Vermilion City if your earlier two copies are reserved for [[21]] and [[22]].",optional:true},
      {id:"route11-itemfinder",group:"Items",title:"Itemfinder",meta:"East gate · 30 caught species",detail:"Professor Oak’s aide gives it after the Pokédex records at least 30 caught species.",optional:true},
      {id:"route11-cave",group:"Story",title:"Enter Diglett’s Cave",meta:"Northwest side of Route 11",detail:"The cave leads back to the east side of Route 2 and opens several completion-critical rewards."}
    ]
  },
  {
    id:"diglett-route2",
    tab:"Diglett → Route 2",
    title:"Diglett’s Cave → Route 2",
    subtitle:"Ground catches, Mr. Mime, Flash, and Old Amber",
    tasks:[
      {id:"diglett-family",group:"Catch",title:"[[50]] ×2 or [[50]] + [[51]]",meta:"[[50]] 95% · Lv. 15–22 · +1 Speed EV · [[51]] 5% · Lv. 29 or 31 · +2 Speed EV",detail:"The fastest result is one [[50]] plus a wild [[51]]. If the 5% encounter is not worth waiting for, catch two [[50]] and evolve one at level 26."},
      {id:"route2-mrmime",group:"Catch",title:"Trade a spare [[63]] for [[122]]",meta:"Route 2 northeast house · unique trade",detail:"The traded [[122]] matches the level of the [[63]] you give. This is why the earlier Abra plan requires four copies: [[63]], [[64]], [[65]], and this trade."},
      {id:"route2-flash",group:"Items",title:"HM05 Flash",meta:"Route 2 gate · 10 caught species",detail:"Use Cut to reach Professor Oak’s aide. Flash is needed for a comfortable trip through Rock Tunnel."},
      {id:"pewter-old-amber",group:"Items",title:"Old Amber",meta:"Pewter Museum back entrance · Cut required",detail:"Enter the employee-only side of the museum and receive the fossil that can later be revived into [[142]]."},
      {id:"route2-return",group:"Story",title:"Return through Diglett’s Cave",meta:"Next: Vermilion Gym",detail:"Backtrack to Vermilion City. The Ground-type catches from the cave are especially useful against Lt. Surge."}
    ]
  },
  {
    id:"vermilion-gym",
    tab:"Vermilion Gym",
    title:"Vermilion Gym",
    subtitle:"Lt. Surge and the third badge",
    tasks:[
      {id:"surge-puzzle",group:"Story",title:"Cut the entrance tree and open both switches",meta:"The second switch is adjacent to the first",detail:"Checking an incorrect trash can after finding the first switch resets the puzzle."},
      {id:"surge-win",group:"Story",title:"Defeat Lt. Surge",meta:"[[100]] Lv. 21 · [[25]] Lv. 18 · [[26]] Lv. 24",detail:"Ground-type moves ignore Electric attacks. A [[50]] or [[51]] from the cave can simplify the battle considerably."},
      {id:"surge-badge",group:"Items",title:"Thunder Badge",meta:"Gym reward",detail:"The badge enables Fly outside battle once HM02 is obtained."},
      {id:"surge-shock-wave",group:"Items",title:"TM34 Shock Wave",meta:"Gym reward · single use",detail:"Shock Wave never misses under ordinary accuracy checks. Save the single-use TM for a deliberate recipient."},
      {id:"surge-next",group:"Story",title:"Return toward Cerulean City",meta:"Next route: Route 9",detail:"Use the Underground Path northward, then Cut the tree east of Cerulean City to continue toward Rock Tunnel."}
    ]
  }
];
