const SAFARI_STAGES=[
  {
    id:"safari-prize-run",
    tab:"Safari prizes",
    title:"Safari Zone — prize run",
    subtitle:"Secure Surf and the Gold Teeth before hunting rare catches",
    warning:"600 STEPS: each ₽500 entry gives 30 Safari Balls and ends after 600 field steps. Keep the first entry focused on the permanent rewards.",
    drawer:{title:"Why use several entries?",text:"Safari Pokémon can flee, and the rare targets are spread across different 4% encounter tables. The entry fee is repeatable. Secure HM03 Surf and the Gold Teeth first; then make short area-focused catch runs instead of gambling the permanent rewards on one overloaded session."},
    tasks:[
      {id:"safari-enter",group:"Story",title:"Enter the Safari Zone",meta:"₽500 · 30 Safari Balls · 600 field steps",detail:"The counter decreases as you move through the field. Catch anything useful that appears naturally, but do not pace in grass during this first run."},
      {id:"safari-prize-route",group:"Story",title:"Follow Center → East → North → West",meta:"Direct route to the Secret House",detail:"Treat navigation as the objective. Side-area hunting can wait for later entries with a fresh step counter and full set of Safari Balls."},
      {id:"safari-gold-teeth",group:"Items",title:"Pick up the Gold Teeth",meta:"West area · ground item",detail:"Collect the Gold Teeth before entering the nearby Secret House. They are needed for HM04 Strength back in Fuchsia City."},
      {id:"safari-surf",group:"Items",title:"Receive HM03 Surf",meta:"Secret House · West area",detail:"Speak to the man inside the Secret House. Surf is a one-time reward; Koga’s Soul Badge is still required before it can be used outside battle."},
      {id:"safari-tm-sweep",group:"Items",title:"Save side-route TMs for later catch runs",meta:"TM11 East · TM32 North · TM47 West",detail:"These single-use TMs are worthwhile, but there is no reason to jeopardize the first prize run for them. Collect each while revisiting its area for catches.",optional:true}
    ]
  },
  {
    id:"safari-center-catches",
    tab:"Safari Center",
    title:"Safari Zone — Center",
    subtitle:"Two common families plus the version-exclusive 4% catch",
    drawer:{title:"Version-exclusive bug",text:"The Game Corner prize was only a guaranteed alternative. If you already obtained your version’s [[123]] or [[127]] there, mark this catch complete and skip the 4% hunt. A future [[212]] requires another [[123]] after the National Pokédex; breeding or trading later is cleaner than catching two here."},
    tasks:[
      {id:"safari-rhyhorn",group:"Catch",title:"[[111]] ×2",meta:"Center · 20% · Lv. 25 · +1 Defense EV",detail:"Keep one [[111]] and evolve the second into [[112]] at level 42."},
      {id:"safari-exeggcute",group:"Catch",title:"[[102]] ×2",meta:"Center · 20% · Lv. 24–25 · +1 Defense EV",detail:"Keep one [[102]] and use a Leaf Stone on the second for [[103]]. Leaf Stones remain repeatable Department Store purchases."},
      {id:"safari-version-bug",group:"Catch",variants:{fr:{title:"[[123]] ×1",meta:"Center · 4% · Lv. 23 · +1 Attack EV",detail:"Catch one if you did not buy the Game Corner prize. Keep it as [[123]] for now; after the National Pokédex, breed or trade for another copy and evolve that copy into [[212]] by trading it with a Metal Coat."},lg:{title:"[[127]] ×1",meta:"Center · 4% · Lv. 23 · +2 Attack EV",detail:"Catch one if you did not buy the Game Corner prize. [[127]] has no evolution in FireRed or LeafGreen, so one retained copy completes the family."}}},
      {id:"safari-center-items",group:"Items",title:"Center item sweep",meta:"Nugget · Leaf Stone",detail:"Collect these if convenient during the catch run. Neither is uniquely required for the living dex.",optional:true}
    ]
  },
  {
    id:"safari-rare-catches",
    tab:"Safari rares",
    title:"Safari Zone — rare-area runs",
    subtitle:"Use each species’ 4% area instead of its 1% fallback",
    drawer:{title:"Deferred Nidoran line",text:"If you skipped the 1% Route 3 line, finish it here instead of returning north. In FireRed, target [[29]] plus two [[30]]; in LeafGreen, target [[32]] plus two [[33]]. Keep the base and one middle stage, then use a Moon Stone on the other middle stage for [[31]] or [[34]]. The relevant base and middle forms are 5% in multiple Safari areas."},
    tasks:[
      {id:"safari-kangaskhan",group:"Catch",title:"[[115]] ×1",meta:"East · 4% · Lv. 25 · +2 HP EV",detail:"East is the best table. West contains [[115]] at only 1%, so make East the dedicated hunt."},
      {id:"safari-chansey",group:"Catch",title:"[[113]] ×1",meta:"North · 4% · Lv. 26 · +2 HP EV",detail:"North raises [[113]] from the Center’s 1% rate to 4%. Keep this copy; after postgame breeding opens, breed another and evolve that copy by high friendship into [[242]]."},
      {id:"safari-tauros",group:"Catch",title:"[[128]] ×1",meta:"West · 4% · Lv. 25 · +1 Attack / +1 Speed EV",detail:"West is the best table. North contains [[128]] at only 1%."},
      {id:"safari-deferred-nidoran",group:"Catch",title:"Finish the deferred Route 3 Nidoran family if needed",meta:"Safari base + middle forms · 5% each in useful areas",detail:"This applies only if the rare 1% Route 3 family was intentionally deferred. Once the three living forms are covered, mark the earlier Route 3 family task complete.",optional:true},
      {id:"safari-rare-tms",group:"Items",title:"Collect the area TMs while hunting",meta:"TM11 Sunny Day · TM32 Double Team · TM47 Steel Wing",detail:"East holds TM11, North holds TM32, and West holds TM47. Each is single use in FireRed and LeafGreen.",optional:true}
    ]
  },
  {
    id:"safari-dratini",
    tab:"Dratini",
    title:"Safari Zone — Dratini fishing",
    subtitle:"Use a stationary Super Rod run rather than hunting 1% Dragonair",
    drawer:{title:"Why not catch Dragonair?",text:"The Super Rod gives [[147]] at 15% but [[148]] at only 1% in every Safari area. Catching three [[147]] is substantially more reliable: keep one, evolve one to [[148]] at level 30, and evolve the third through [[148]] into [[149]] at level 55."},
    tasks:[
      {id:"safari-dratini-family",group:"Catch",title:"[[147]] ×3",meta:"Super Rod · 15% · Lv. 15–25 · +1 Attack EV",detail:"Keep one [[147]]. Evolve the second into [[148]] at level 30, and the third into [[149]] at level 55. Fishing can be done near the entrance without spending the run walking between rare-grass areas."},
      {id:"safari-ignore-dragonair",group:"Story",title:"Do not wait for the 1% [[148]] slot",meta:"Super Rod · Lv. 25–35",detail:"If one appears, catching it can replace one planned evolution, but it should not be the route’s required strategy."}
    ]
  },
  {
    id:"fuchsia-warden",
    tab:"Warden",
    title:"Fuchsia City — Safari cleanup",
    subtitle:"Return the Gold Teeth and unlock Strength",
    tasks:[
      {id:"warden-teeth",group:"Story",title:"Return the Gold Teeth to the Safari Zone Warden",meta:"Warden’s house · southeast Fuchsia",detail:"Speak to the Warden after bringing the teeth back from the Safari Zone’s West area."},
      {id:"warden-strength",group:"Items",title:"Receive HM04 Strength",meta:"Reward from the Warden",detail:"The Rainbow Badge already permits Strength outside battle. This completes the Safari Zone’s permanent reward loop."},
      {id:"safari-finish",group:"Story",title:"Finish any remaining Safari catch runs",meta:"Re-entry remains available for ₽500",detail:"Do not leave a 4% family unfinished merely because one Safari session ended. Re-enter with 30 fresh Safari Balls and go directly to the target’s best area."},
      {id:"safari-stop-before-koga",group:"Story",title:"Stop before the next route leg",meta:"Next: Koga, Surf catches, and western Fuchsia exits",detail:"The next chunk can now use Surf outside battle after Koga, close the version water family, and plan the second Snorlax/Cycling Road branch."}
    ]
  }
];

VERMILION_STAGES.push(...SAFARI_STAGES);
