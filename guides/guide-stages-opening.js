const OPENING_STAGES=[
  {
    id:"pallet-start",
    tab:"Start",
    title:"Bourg Palette (Pallet Town)",
    subtitle:"First partner and first battle",
    starterPicker:true,
    tasks:[
      {id:"home-potion",group:"Items",title:"Take the Potion from your PC",meta:"Bedroom · item storage",detail:"Withdraw the Potion before leaving home. It can rescue the first rival battle.",optional:true},
      {id:"starter-rival",group:"Story",title:"Defeat the rival",meta:"Both first partners are Lv. 5",detail:"Your rival always chooses the first partner with a type advantage over yours. Winning is useful experience but is not required to continue."},
      {id:"leave-pallet",group:"Story",title:"Leave for Route 1",meta:"No Poké Balls yet",detail:"You cannot catch wild Pokémon until after delivering Oak’s Parcel and receiving the Pokédex."}
    ]
  },
  {
    id:"route1-parcel",
    tab:"Route 1",
    title:"Route 1 → Jadielle",
    subtitle:"First trip north",
    tasks:[
      {id:"route1-sample",group:"Items",title:"Free Potion",meta:"Poké Mart employee · Route 1",detail:"Speak to the employee near the sign for a free Potion.",optional:true},
      {id:"parcel",group:"Story",title:"Receive Oak’s Parcel",meta:"Jadielle (Viridian City) Poké Mart",detail:"The shopkeeper gives you the parcel immediately. You cannot buy supplies until it is delivered."},
      {id:"return-pallet",group:"Story",title:"Return to Bourg Palette",meta:"Use Route 1’s southbound ledges",detail:"Deliver the parcel to Professor Oak in his laboratory."}
    ]
  },
  {
    id:"pokedex-route1",
    tab:"Pokédex",
    title:"Pokédex and Route 1 catches",
    subtitle:"Return trip after the parcel",
    tasks:[
      {id:"receive-pokedex",group:"Story",title:"Receive the Pokédex and 5 Poké Balls",meta:"Professor Oak’s laboratory",detail:"Catching becomes available after this conversation."},
      {id:"town-map",group:"Items",title:"Carte (Town Map)",meta:"From Daisy in the rival’s house",detail:"Visit the house east of yours after receiving the Pokédex.",optional:true},
      {id:"route1-pidgey",group:"Catch",title:"[[16]] ×3",meta:"50% · Lv. 2–5 · +1 Speed EV",detail:"Reserve one each for [[16]], [[17]], and [[18]]."},
      {id:"route1-rattata",group:"Catch",title:"[[19]] ×2",meta:"50% · Lv. 2–4 · +1 Speed EV",detail:"Reserve one [[19]] and evolve the other into [[20]] at level 20."},
      {id:"viridian-restock",group:"Story",title:"Heal and buy supplies in Jadielle",meta:"Balls · Antidotes · Potions",detail:"The old man at the north exit moves after the parcel is delivered and gives you the Teachy TV."}
    ]
  },
  {
    id:"route22",
    tab:"Route 22",
    title:"Route 22",
    subtitle:"Optional westward detour",
    tasks:[
      {id:"route22-mankey",group:"Catch",title:"[[56]] ×2",meta:"45% · Lv. 2–5 · +1 Attack EV",detail:"Reserve one [[56]] and evolve the second into [[57]] at level 28."},
      {id:"route22-spearow",group:"Catch",title:"[[21]] ×3",meta:"10% · Lv. 3 or 5 · +1 Speed EV",detail:"Reserve one [[21]], evolve one into [[22]] at level 20, and trade the third for [[83]] in Vermilion City. Route 3 offers a much higher 35% rate if you prefer to wait."},
      {id:"route22-rival",group:"Story",title:"Optional rival battle",meta:"[[16]] Lv. 9 + rival’s first partner Lv. 9",detail:"This battle is not required. [[16]] can be dangerous to a player using [[1]] because it already knows Gust.",optional:true}
    ]
  },
  {
    id:"forest",
    tab:"Forest",
    title:"Route 2 and Forêt de Jade",
    subtitle:"Viridian Forest",
    tasks:[
      {id:"forest-caterpie",group:"Catch",title:"[[10]] ×3",meta:"40% in the forest · +1 HP EV",detail:"Reserve [[10]], [[11]], and [[12]]. [[11]] evolves at level 10."},
      {id:"forest-weedle",group:"Catch",title:"[[13]] ×3",meta:"40% in the forest · +1 Speed EV",detail:"Reserve [[13]], [[14]], and [[15]]. [[14]] evolves at level 10."},
      {id:"forest-pikachu",group:"Catch",title:"[[25]] ×2",meta:"5% · Lv. 3 or 5 · +2 Speed EV",detail:"Keep one [[25]] and later use a Thunder Stone on the other for [[26]]."},
      {id:"forest-items",group:"Items",title:"Forest supply sweep",meta:"Poké Ball · Antidotes · Potions",detail:"The visible Poké Ball and healing items are useful, but none are unique.",optional:true},
      {id:"forest-clear",group:"Story",title:"Reach Argenta (Pewter City)",meta:"Exit at the north end",detail:"Heal and prepare for the Rock-type Gym."}
    ]
  }
];
