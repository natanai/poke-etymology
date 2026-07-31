const CERULEAN_STAGES=[
  {
    id:"route-4",
    tab:"Route 4",
    title:"Route 4",
    subtitle:"Mount Moon exit",
    warning:"ONE-WAY: finish this stage before jumping the final ledge into Azuria.",
    drawer:{title:"One-use tutors",text:"The two Black Belts teach Ultimapoing (Mega Punch) and Ultimawashi (Mega Kick). Each can be used only once. Leave them unused unless you have a deliberate recipient."},
    tasks:[
      {id:"route4-exclusive",group:"Catch",variants:{fr:{title:"[[23]] ×2",meta:"25% · Lv. 6–12 · +1 Attack EV",detail:"Keep one [[23]]. Evolve the second into [[24]] at level 22. Catch or flee from extras if you are avoiding Attack EVs."},lg:{title:"[[27]] ×2",meta:"25% · Lv. 6–12 · +1 Defense EV",detail:"Keep one [[27]]. Evolve the second into [[28]] at level 22."}}},
      {id:"route4-roar",group:"Items",title:"CT05 Hurlement (TM05 Roar)",meta:"Visible · eastern hill",detail:"Take the item ball on the second-highest level of the eastern hill."},
      {id:"route4-great-ball",group:"Items",title:"Super Ball (Great Ball)",meta:"Hidden · northwest corner",detail:"Check the corner west of the northwest hill.",optional:true},
      {id:"route4-razz",group:"Items",title:"Baie Framby (Razz Berry)",meta:"Hidden · south-central ledge",detail:"Check the tile south of the easternmost of the three ledges.",optional:true},
      {id:"route4-leave",group:"Story",title:"Cross the final ledge",meta:"Continue east to Azuria",detail:"Once you drop into the city, you cannot walk back west through Route 4 until much later."}
    ]
  },
  {
    id:"cerulean",
    tab:"Azuria",
    title:"Azuria (Cerulean City)",
    subtitle:"Prepare before Route 24",
    warning:"Your rival battles you as soon as you walk north toward Route 24.",
    tasks:[
      {id:"cerulean-heal",group:"Story",title:"Heal and restock balls",meta:"[[63]] is ahead",detail:"Carry enough Poké Balls or Super Balls to throw immediately when [[63]] appears."},
      {id:"cerulean-save",group:"Story",title:"Save before walking north",meta:"Rival battle",detail:"The rival leads with [[17]] at level 17, followed by [[63]] level 16, [[19]] level 15, and the first partner at level 18."},
      {id:"cerulean-rival",group:"Story",title:"Defeat the rival",meta:"North exit",detail:"Electric or Rock attacks help against [[17]]. [[63]] knows only Téléport (Teleport), so it is a safe moment to give experience to a weaker party member."}
    ]
  },
  {
    id:"routes-24-25",
    tab:"Routes 24–25",
    title:"Routes 24–25",
    subtitle:"Nugget Bridge and the cape",
    tasks:[
      {id:"route24-exclusive",group:"Catch",variants:{fr:{title:"[[43]] ×4",meta:"25% · Lv. 12–14 · +1 Sp. Atk EV",detail:"Reserve [[43]], [[44]], [[45]], and [[182]]. The final branch needs a Sun Stone much later."},lg:{title:"[[69]] ×3",meta:"25% · Lv. 12–14 · +1 Attack EV",detail:"Reserve [[69]], [[70]], and [[71]]."}}},
      {id:"route24-abra",group:"Catch",title:"[[63]] ×4",meta:"15% · Lv. 8–13 · +1 Sp. Atk EV",detail:"Reserve [[63]], [[64]], and [[65]], then trade the fourth for [[122]] on Route 2. Throw a ball immediately: wild [[63]] normally uses Téléport (Teleport) on its first turn. [[65]] requires trading [[64]]."},
      {id:"route24-bridge",group:"Story",title:"Clear Nugget Bridge",meta:"Five trainers + Team Rocket",detail:"The sixth battle is the Team Rocket recruiter at the north end of the bridge."},
      {id:"route24-nugget",group:"Items",title:"Pépite (Nugget)",meta:"Bridge reward",detail:"The recruiter gives it before revealing Team Rocket. It can be sold for money."},
      {id:"route24-attract",group:"Items",title:"CT45 Attraction (TM45 Attract)",meta:"Northwest plateau",detail:"Collect it near the grassy area north of Nugget Bridge."},
      {id:"route25-secret",group:"Items",title:"CT43 Force Cachée (TM43 Secret Power)",meta:"Route 25 maze",detail:"Defeat Camper Flint from the correct side so he moves away from the item. If blocked, it remains obtainable later with Coupe (Cut)."},
      {id:"route25-hidden",group:"Items",title:"Hidden-item sweep",meta:"Elixir · berries · Ether",detail:"Route 25 also hides an Elixir, Baie Oran (Oran Berry), Baie Remu (Bluk Berry), and Ether.",optional:true}
    ]
  },
  {
    id:"bill-return",
    tab:"Léo",
    title:"Léo and the return",
    subtitle:"Sea Cottage to Azuria",
    tasks:[
      {id:"bill-help",group:"Story",title:"Help Léo (Bill)",meta:"Operate his PC",detail:"Speak to the Pokémon inside the cottage. After Léo enters the machine, use the computer to reverse the experiment."},
      {id:"bill-ticket",group:"Items",title:"Passe Bateau (S.S. Ticket)",meta:"Reward from Léo",detail:"This grants access to the S.S. Anne in Carmin sur Mer (Vermilion City)."},
      {id:"bill-pc",group:"Story",title:"Inspect Léo’s PC again",meta:"Adds four Pokédex pages",detail:"Exit and re-enter the cottage, then inspect the PC to register [[133]], [[134]], [[135]], and [[136]] as seen.",optional:true},
      {id:"cerulean-rocket",group:"Story",title:"Defeat the Rocket burglar",meta:"House in northeast Azuria",detail:"After helping Léo, the officer moves aside. Enter the damaged house and confront the grunt behind it."},
      {id:"cerulean-dig",group:"Items",title:"CT28 Tunnel (TM28 Dig)",meta:"Recovered from the burglar",detail:"The Rocket grunt returns the stolen TM after the battle."}
    ]
  },
  {
    id:"gym-route5",
    tab:"Gym → Route 5",
    title:"Arène d’Azuria",
    subtitle:"Ondine and the south exit",
    tasks:[
      {id:"misty-win",group:"Story",title:"Defeat Ondine (Misty)",meta:"[[120]] Lv. 18 · [[121]] Lv. 21",detail:"Grass and Electric attacks are effective. [[121]] is substantially faster and stronger than [[120]]."},
      {id:"misty-badge",group:"Items",title:"Badge Cascade (Cascade Badge)",meta:"Gym reward",detail:"It enables Coupe (Cut) in the field once you obtain the HM and ensures obedience through level 30."},
      {id:"misty-water-pulse",group:"Items",title:"CT03 Vibraqua (TM03 Water Pulse)",meta:"Gym reward",detail:"This TM is single-use in FireRed and LeafGreen, so save it until you have chosen a long-term recipient."},
      {id:"route5-enter",group:"Story",title:"Enter Route 5",meta:"Next leg: Carmin sur Mer",detail:"Proceed through the Underground Path toward Route 6 and Vermilion City."}
    ]
  }
];
