const MOON_STAGES=[
  {
    id:"pewter",
    tab:"Argenta",
    title:"Arène d’Argenta",
    subtitle:"Brock and the first badge",
    tasks:[
      {id:"brock",group:"Story",title:"Defeat Pierre (Brock)",meta:"[[74]] Lv. 12 · [[95]] Lv. 14",detail:"[[1]] and [[7]] have a straightforward advantage. [[4]] can learn Metal Claw at level 13."},
      {id:"boulder-badge",group:"Items",title:"Badge Roche (Boulder Badge)",meta:"Gym reward",detail:"Allows Flash to be used in the field once the HM is obtained."},
      {id:"rock-tomb",group:"Items",title:"CT39 Tomberoche (TM39 Rock Tomb)",meta:"Gym reward · single use",detail:"Rock Tomb lowers Speed and can give early teams useful Rock coverage."},
      {id:"running-shoes",group:"Story",title:"Receive the Running Shoes",meta:"East exit of Argenta",detail:"Professor Oak’s aide stops you before Route 3."}
    ]
  },
  {
    id:"route3",
    tab:"Route 3",
    title:"Route 3",
    subtitle:"New catches before Mt. Moon",
    tasks:[
      {id:"route3-nidoran-f",group:"Catch",title:"[[29]] ×3",variants:{fr:{meta:"1% · Lv. 6 · +1 HP EV",detail:"Rare in FireRed. Reserve the full [[29]] → [[30]] → [[31]] line, or catch the family more easily later in the Safari Zone."},lg:{meta:"14% · Lv. 6–7 · +1 HP EV",detail:"Common in LeafGreen. Reserve the full [[29]] → [[30]] → [[31]] line."}}},
      {id:"route3-nidoran-m",group:"Catch",title:"[[32]] ×3",variants:{fr:{meta:"14% · Lv. 6–7 · +1 Attack EV",detail:"Common in FireRed. Reserve the full [[32]] → [[33]] → [[34]] line."},lg:{meta:"1% · Lv. 6 · +1 Attack EV",detail:"Rare in LeafGreen. Reserve the full [[32]] → [[33]] → [[34]] line, or catch the family more easily later in the Safari Zone."}}},
      {id:"route3-jigglypuff",group:"Catch",title:"[[39]] ×2",meta:"10% · Lv. 3, 5, or 7 · +2 HP EV",detail:"Keep one [[39]] and evolve the second into [[40]] with a Moon Stone. [[174]] can be bred later."},
      {id:"route3-catchup",group:"Catch",title:"Finish [[21]] or [[56]] if needed",meta:"[[21]] 35% · [[56]] 10%",detail:"Route 3 is the easier place to finish the [[21]] family. [[56]] remains available here in both versions."},
      {id:"route3-center",group:"Story",title:"Reach the Mt. Moon Pokémon Center",meta:"Heal before entering the cave",detail:"Stock up on balls, Antidotes, and an Escape Rope if needed."}
    ]
  },
  {
    id:"moon-entrance",
    tab:"Mt. Moon gate",
    title:"Route 4 West",
    subtitle:"Pokémon Center before Mt. Moon",
    tasks:[
      {id:"magikarp",group:"Catch",title:"Buy [[129]]",meta:"$500 · Lv. 5 · optional early copy",detail:"This is the earliest [[129]] available. It evolves into [[130]] at level 20, but another [[129]] can be caught later with a fishing rod.",optional:true},
      {id:"moon-save",group:"Story",title:"Save and enter Mt. Moon",meta:"A fossil choice waits near the exit",detail:"You can collect only one of the two fossils in this save without trading."}
    ]
  },
  {
    id:"mt-moon",
    tab:"Mt. Moon",
    title:"Mont Sélénite (Mt. Moon)",
    subtitle:"Catch on B2F before taking a fossil",
    tasks:[
      {id:"moon-zubat",group:"Catch",title:"[[41]] ×3",meta:"49% on B2F · Lv. 8–11 · +1 Speed EV",detail:"Reserve [[41]], [[42]], and later [[169]]. The final evolution becomes available after the National Pokédex."},
      {id:"moon-geodude",group:"Catch",title:"[[74]] ×3",meta:"30% on B2F · Lv. 9–10 · +1 Defense EV",detail:"Reserve [[74]], [[75]], and [[76]]. [[76]] requires trading [[75]]."},
      {id:"moon-paras",group:"Catch",title:"[[46]] ×2",meta:"15% on B2F · Lv. 10 or 12 · +1 Attack EV",detail:"Keep one [[46]] and evolve the other into [[47]] at level 24."},
      {id:"moon-clefairy",group:"Catch",title:"[[35]] ×2",meta:"6% on B2F · Lv. 10 or 12 · +2 HP EV",detail:"B2F is the best floor. Keep one [[35]] and evolve the other into [[36]] with a Moon Stone; [[173]] can be bred later."},
      {id:"moon-tm09",group:"Items",title:"CT09 Balle Graine (TM09 Bullet Seed)",meta:"1F · west chamber",detail:"Single-use Grass-type TM."},
      {id:"moon-stones",group:"Items",title:"Collect both Moon Stones",meta:"One visible on 1F · one hidden on B2F",detail:"Several living-dex evolutions need Moon Stones, so take both available in the cave."},
      {id:"moon-fossil",group:"Story",title:"Choose one fossil",meta:"Dôme → [[140]] · Nautile → [[138]]",detail:"The Dome Fossil revives into [[140]]; the Helix Fossil revives into [[138]]. The other fossil requires a trade or another save."},
      {id:"moon-exit",group:"Story",title:"Leave through the eastern exit",meta:"Route 4 begins outside",detail:"Do not jump Route 4’s final ledge until its catches and items are finished."}
    ]
  }
];
