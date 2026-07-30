(()=>{
  const LANGUAGE_KEY="poke-etymology-language";
  const VALID_LANGUAGES=["e","f","j"];
  const lang=VALID_LANGUAGES.includes(localStorage.getItem(LANGUAGE_KEY)) ? localStorage.getItem(LANGUAGE_KEY) : "e";

  const UI={
    e:{
      htmlLang:"en",names:"Names",livingDex:"Living Dex",data:"Data",navLabel:"Main navigation",
      allGuides:"All living-dex guides",gameVersion:"Game version",stages:"Guide stages",
      previous:"Previous stage",next:"Next stage",sources:"Sources",
      groups:{Catch:"Catch",Story:"Story",Items:"Items"},optional:"optional",
      markComplete:"Mark task complete",showDetails:"Show details",hideDetails:"Hide details",
      starterTitle:"First partner → postgame roamer",
      starterNote:"The beast begins roaming after the postgame Network Machine quest. Your choice cannot be changed in this save.",
      select:"Select",
      sourceLabels:[
        "Pallet Town and first partners","Route 1 through Route 2","Viridian Forest and Pewter",
        "Route 3, Mt. Moon, and Route 4","Cerulean through Route 5","Starter-dependent roaming beast"
      ]
    },
    f:{
      htmlLang:"fr",names:"Noms",livingDex:"Dex vivant",data:"Données",navLabel:"Navigation principale",
      allGuides:"Tous les guides de Dex vivant",gameVersion:"Version du jeu",stages:"Étapes du guide",
      previous:"Étape précédente",next:"Étape suivante",sources:"Sources",
      groups:{Catch:"Captures",Story:"Parcours",Items:"Objets"},optional:"facultatif",
      markComplete:"Marquer comme terminé",showDetails:"Afficher les détails",hideDetails:"Masquer les détails",
      starterTitle:"Premier partenaire → Pokémon errant d’après-jeu",
      starterNote:"Le Pokémon légendaire commence à errer après la quête d’après-jeu de la Machine réseau. Ce choix ne peut pas être modifié dans cette sauvegarde.",
      select:"Choisir",
      sourceLabels:[
        "Bourg Palette et premiers partenaires","Routes 1 à 2","Forêt de Jade et Argenta",
        "Route 3, Mont Sélénite et Route 4","Azuria à Route 5","Pokémon errant selon le premier partenaire"
      ]
    },
    j:{
      htmlLang:"ja",names:"名前",livingDex:"リビング図鑑",data:"データ",navLabel:"メインナビゲーション",
      allGuides:"リビング図鑑ガイド一覧",gameVersion:"ゲームバージョン",stages:"ガイドの区間",
      previous:"前の区間",next:"次の区間",sources:"出典",
      groups:{Catch:"捕獲",Story:"進行",Items:"道具"},optional:"任意",
      markComplete:"完了にする",showDetails:"詳細を表示",hideDetails:"詳細を隠す",
      starterTitle:"最初のパートナー → クリア後の徘徊ポケモン",
      starterNote:"クリア後のネットワークマシンのイベントを終えると徘徊を始めます。このセーブデータでは選び直せません。",
      select:"選ぶ",
      sourceLabels:[
        "マサラタウンと最初のパートナー","1ばんどうろから2ばんどうろ","トキワのもりとニビシティ",
        "3ばんどうろ・おつきみやま・4ばんどうろ","ハナダシティから5ばんどうろ","最初のパートナーで決まる徘徊ポケモン"
      ]
    }
  }[lang];

  const STAGE_COPY={
    "pallet-start":{
      e:{tab:"Start",title:"Pallet Town",subtitle:"First partner and first battle"},
      f:{tab:"Départ",title:"Bourg Palette",subtitle:"Premier partenaire et premier combat"},
      j:{tab:"はじまり",title:"マサラタウン",subtitle:"最初のパートナーと初戦"}
    },
    "route1-parcel":{
      e:{tab:"Route 1",title:"Route 1 → Viridian City",subtitle:"First trip north"},
      f:{tab:"Route 1",title:"Route 1 → Jadielle",subtitle:"Premier trajet vers le nord"},
      j:{tab:"1ばんどうろ",title:"1ばんどうろ → トキワシティ",subtitle:"はじめて北へ"}
    },
    "pokedex-route1":{
      e:{tab:"Pokédex",title:"Pokédex and Route 1 catches",subtitle:"Return trip after Oak’s Parcel"},
      f:{tab:"Pokédex",title:"Pokédex et captures de la Route 1",subtitle:"Retour après le Colis de Chen"},
      j:{tab:"ポケモンずかん",title:"ポケモンずかんと1ばんどうろ",subtitle:"おとどけもののあと"}
    },
    route22:{
      e:{tab:"Route 22",title:"Route 22",subtitle:"Optional westward detour"},
      f:{tab:"Route 22",title:"Route 22",subtitle:"Détour facultatif vers l’ouest"},
      j:{tab:"22ばんどうろ",title:"22ばんどうろ",subtitle:"西への寄り道"}
    },
    forest:{
      e:{tab:"Viridian Forest",title:"Route 2 and Viridian Forest",subtitle:"Viridian Forest"},
      f:{tab:"Forêt de Jade",title:"Route 2 et Forêt de Jade",subtitle:"Forêt de Jade"},
      j:{tab:"トキワのもり",title:"2ばんどうろとトキワのもり",subtitle:"トキワのもり"}
    },
    pewter:{
      e:{tab:"Pewter",title:"Pewter Gym",subtitle:"Brock and the first badge"},
      f:{tab:"Argenta",title:"Arène d’Argenta",subtitle:"Pierre et le premier badge"},
      j:{tab:"ニビ",title:"ニビジム",subtitle:"タケシと最初のバッジ"}
    },
    route3:{
      e:{tab:"Route 3",title:"Route 3",subtitle:"New catches before Mt. Moon"},
      f:{tab:"Route 3",title:"Route 3",subtitle:"Nouvelles captures avant le Mont Sélénite"},
      j:{tab:"3ばんどうろ",title:"3ばんどうろ",subtitle:"おつきみやま前の新しい出会い"}
    },
    "moon-entrance":{
      e:{tab:"Mt. Moon gate",title:"Route 4 West",subtitle:"Pokémon Center before Mt. Moon"},
      f:{tab:"Entrée du Mont Sélénite",title:"Route 4 Ouest",subtitle:"Centre Pokémon avant le Mont Sélénite"},
      j:{tab:"おつきみやま入口",title:"4ばんどうろ西",subtitle:"おつきみやま前のポケモンセンター"}
    },
    "mt-moon":{
      e:{tab:"Mt. Moon",title:"Mt. Moon",subtitle:"Catch on B2F before taking a fossil"},
      f:{tab:"Mont Sélénite",title:"Mont Sélénite",subtitle:"Captures au sous-sol avant le fossile"},
      j:{tab:"おつきみやま",title:"おつきみやま",subtitle:"ちか2かいで捕獲してから化石へ"}
    },
    "route-4":{
      e:{tab:"Route 4",title:"Route 4",subtitle:"Mt. Moon exit"},
      f:{tab:"Route 4",title:"Route 4",subtitle:"Sortie du Mont Sélénite"},
      j:{tab:"4ばんどうろ",title:"4ばんどうろ",subtitle:"おつきみやま出口"}
    },
    cerulean:{
      e:{tab:"Cerulean",title:"Cerulean City",subtitle:"Prepare before Route 24"},
      f:{tab:"Azuria",title:"Azuria",subtitle:"Préparation avant la Route 24"},
      j:{tab:"ハナダ",title:"ハナダシティ",subtitle:"24ばんどうろ前の準備"}
    },
    "routes-24-25":{
      e:{tab:"Routes 24–25",title:"Routes 24–25",subtitle:"Nugget Bridge and the cape"},
      f:{tab:"Routes 24–25",title:"Routes 24–25",subtitle:"Pont Pépite et cap"},
      j:{tab:"24・25ばんどうろ",title:"24・25ばんどうろ",subtitle:"ゴールデンボールブリッジと岬"}
    },
    "bill-return":{
      e:{tab:"Bill",title:"Bill and the return",subtitle:"Sea Cottage to Cerulean City"},
      f:{tab:"Léo",title:"Léo et le retour",subtitle:"Maison de Léo à Azuria"},
      j:{tab:"マサキ",title:"マサキと帰路",subtitle:"みさきのこやからハナダシティへ"}
    },
    "gym-route5":{
      e:{tab:"Gym → Route 5",title:"Cerulean Gym",subtitle:"Misty and the south exit"},
      f:{tab:"Arène → Route 5",title:"Arène d’Azuria",subtitle:"Ondine et la sortie sud"},
      j:{tab:"ジム → 5ばんどうろ",title:"ハナダジム",subtitle:"カスミと南口"}
    }
  };

  const TERMS=[
    {forms:["CT39 Tomberoche (TM39 Rock Tomb)","TM39 Rock Tomb","CT39 Tomberoche"],e:"TM39 Rock Tomb",f:"CT39 Tomberoche",j:"わざマシン39 がんせきふうじ"},
    {forms:["CT09 Balle Graine (TM09 Bullet Seed)","TM09 Bullet Seed","CT09 Balle Graine"],e:"TM09 Bullet Seed",f:"CT09 Balle Graine",j:"わざマシン09 タネマシンガン"},
    {forms:["CT05 Hurlement (TM05 Roar)","TM05 Roar","CT05 Hurlement"],e:"TM05 Roar",f:"CT05 Hurlement",j:"わざマシン05 ほえる"},
    {forms:["CT45 Attraction (TM45 Attract)","TM45 Attract","CT45 Attraction"],e:"TM45 Attract",f:"CT45 Attraction",j:"わざマシン45 メロメロ"},
    {forms:["CT43 Force Cachée (TM43 Secret Power)","TM43 Secret Power","CT43 Force Cachée"],e:"TM43 Secret Power",f:"CT43 Force Cachée",j:"わざマシン43 ひみつのちから"},
    {forms:["CT28 Tunnel (TM28 Dig)","TM28 Dig","CT28 Tunnel"],e:"TM28 Dig",f:"CT28 Tunnel",j:"わざマシン28 あなをほる"},
    {forms:["CT03 Vibraqua (TM03 Water Pulse)","TM03 Water Pulse","CT03 Vibraqua"],e:"TM03 Water Pulse",f:"CT03 Vibraqua",j:"わざマシン03 みずのはどう"},
    {forms:["Badge Roche (Boulder Badge)","Boulder Badge","Badge Roche"],e:"Boulder Badge",f:"Badge Roche",j:"グレーバッジ"},
    {forms:["Badge Cascade (Cascade Badge)","Cascade Badge","Badge Cascade"],e:"Cascade Badge",f:"Badge Cascade",j:"ブルーバッジ"},
    {forms:["Ultimapoing (Mega Punch)","Mega Punch","Ultimapoing"],e:"Mega Punch",f:"Ultimapoing",j:"メガトンパンチ"},
    {forms:["Ultimawashi (Mega Kick)","Mega Kick","Ultimawashi"],e:"Mega Kick",f:"Ultimawashi",j:"メガトンキック"},
    {forms:["Carte (Town Map)","Town Map","Carte"],e:"Town Map",f:"Carte",j:"タウンマップ"},
    {forms:["Super Balls","Great Balls"],e:"Great Balls",f:"Super Balls",j:"スーパーボール"},
    {forms:["Super Ball (Great Ball)","Great Ball","Super Ball"],e:"Great Ball",f:"Super Ball",j:"スーパーボール"},
    {forms:["Baie Framby (Razz Berry)","Razz Berry","Baie Framby"],e:"Razz Berry",f:"Baie Framby",j:"ズリのみ"},
    {forms:["Baie Oran (Oran Berry)","Oran Berry","Baie Oran"],e:"Oran Berry",f:"Baie Oran",j:"オレンのみ"},
    {forms:["Baie Remu (Bluk Berry)","Bluk Berry","Baie Remu"],e:"Bluk Berry",f:"Baie Remu",j:"ブリーのみ"},
    {forms:["Passe Bateau (S.S. Ticket)","S.S. Ticket","Passe Bateau"],e:"S.S. Ticket",f:"Passe Bateau",j:"ふねのチケット"},
    {forms:["Pierre Lune (Moon Stone)","Moon Stones","Moon Stone","Pierre Lune"],e:"Moon Stone",f:"Pierre Lune",j:"つきのいし"},
    {forms:["Sun Stone","Pierre Soleil"],e:"Sun Stone",f:"Pierre Soleil",j:"たいようのいし"},
    {forms:["Dome Fossil","Fossile Dôme"],e:"Dome Fossil",f:"Fossile Dôme",j:"こうらのカセキ"},
    {forms:["Helix Fossil","Fossile Nautile"],e:"Helix Fossil",f:"Fossile Nautile",j:"かいのカセキ"},
    {forms:["Running Shoes","Chaussures de Course"],e:"Running Shoes",f:"Chaussures de Course",j:"ランニングシューズ"},
    {forms:["Escape Rope","Corde Sortie"],e:"Escape Rope",f:"Corde Sortie",j:"あなぬけのヒモ"},
    {forms:["Teachy TV","TV ABC"],e:"Teachy TV",f:"TV ABC",j:"おしえテレビ"},
    {forms:["Téléport (Teleport)","Teleport","Téléport"],e:"Teleport",f:"Téléport",j:"テレポート"},
    {forms:["Coupe (Cut)","Cut","Coupe"],e:"Cut",f:"Coupe",j:"いあいぎり"},
    {forms:["Pépite (Nugget)","Nugget","Pépite"],e:"Nugget",f:"Pépite",j:"きんのたま"},
    {forms:["Bourg Palette (Pallet Town)","Bourg Palette","Pallet Town","マサラタウン"],e:"Pallet Town",f:"Bourg Palette",j:"マサラタウン"},
    {forms:["Jadielle (Viridian City)","Jadielle","Viridian City","トキワシティ"],e:"Viridian City",f:"Jadielle",j:"トキワシティ"},
    {forms:["Forêt de Jade (Viridian Forest)","Forêt de Jade","Viridian Forest","トキワのもり"],e:"Viridian Forest",f:"Forêt de Jade",j:"トキワのもり"},
    {forms:["Arène d’Argenta (Pewter Gym)","Arène d’Argenta","Pewter Gym","ニビジム"],e:"Pewter Gym",f:"Arène d’Argenta",j:"ニビジム"},
    {forms:["Argenta (Pewter City)","Argenta","Pewter City","ニビシティ"],e:"Pewter City",f:"Argenta",j:"ニビシティ"},
    {forms:["Pierre (Brock)","Brock","Pierre","タケシ"],e:"Brock",f:"Pierre",j:"タケシ"},
    {forms:["Mont Sélénite (Mt. Moon)","Mont Sélénite","Mt. Moon","おつきみやま"],e:"Mt. Moon",f:"Mont Sélénite",j:"おつきみやま"},
    {forms:["Arène d’Azuria (Cerulean Gym)","Arène d’Azuria","Cerulean Gym","ハナダジム"],e:"Cerulean Gym",f:"Arène d’Azuria",j:"ハナダジム"},
    {forms:["Azuria (Cerulean City)","Azuria","Cerulean City","ハナダシティ"],e:"Cerulean City",f:"Azuria",j:"ハナダシティ"},
    {forms:["Ondine (Misty)","Misty","Ondine","カスミ"],e:"Misty",f:"Ondine",j:"カスミ"},
    {forms:["Léo (Bill)","Bill","Léo","マサキ"],e:"Bill",f:"Léo",j:"マサキ"},
    {forms:["Carmin sur Mer (Vermilion City)","Carmin sur Mer","Vermilion City","クチバシティ"],e:"Vermilion City",f:"Carmin sur Mer",j:"クチバシティ"},
    {forms:["Professor Oak","Professeur Chen","オーキド博士"],e:"Professor Oak",f:"Professeur Chen",j:"オーキド博士"},
    {forms:["Oak’s Parcel","Oak's Parcel","Colis de Chen"],e:"Oak’s Parcel",f:"Colis de Chen",j:"おとどけもの"},
    {forms:["Daisy","Nina","ナナミ"],e:"Daisy",f:"Nina",j:"ナナミ"},
    {forms:["Nugget Bridge","Pont Pépite","ゴールデンボールブリッジ"],e:"Nugget Bridge",f:"Pont Pépite",j:"ゴールデンボールブリッジ"},
    {forms:["Sea Cottage","Maison de Léo","みさきのこや"],e:"Sea Cottage",f:"Maison de Léo",j:"みさきのこや"},
    {forms:["S.S. Anne","L’Océane","サント・アンヌ号"],e:"S.S. Anne",f:"L’Océane",j:"サント・アンヌ号"},
    {forms:["Pokémon Center","Centre Pokémon","ポケモンセンター"],e:"Pokémon Center",f:"Centre Pokémon",j:"ポケモンセンター"},
    {forms:["Poké Mart","Boutique Pokémon","フレンドリィショップ"],e:"Poké Mart",f:"Boutique Pokémon",j:"フレンドリィショップ"},
    {forms:["Team Rocket","ロケットだん"],e:"Team Rocket",f:"Team Rocket",j:"ロケットだん"},
    {forms:["Network Machine","Machine réseau","ネットワークマシン"],e:"Network Machine",f:"Machine réseau",j:"ネットワークマシン"}
  ];

  function localizeText(value){
    let output=String(value ?? "");
    for(const term of TERMS){
      const target=term[lang];
      for(const form of [...term.forms].sort((a,b)=>b.length-a.length)) output=output.split(form).join(target);
    }
    return output;
  }

  const stages=[...OPENING_STAGES,...MOON_STAGES,...CERULEAN_STAGES];
  for(const stage of stages){
    Object.assign(stage,STAGE_COPY[stage.id]?.[lang] || {});
    if(stage.warning) stage.warning=localizeText(stage.warning);
    if(stage.drawer){
      stage.drawer.title=localizeText(stage.drawer.title);
      stage.drawer.text=localizeText(stage.drawer.text);
    }
    for(const task of stage.tasks){
      for(const key of ["title","meta","detail"]) if(task[key]) task[key]=localizeText(task[key]);
      if(task.variants){
        for(const variant of Object.values(task.variants)){
          for(const key of ["title","meta","detail"]) if(variant[key]) variant[key]=localizeText(variant[key]);
        }
      }
    }
  }

  function applyStaticCopy(){
    document.documentElement.lang=UI.htmlLang;
    document.title=`FireRed / LeafGreen · ${UI.livingDex}`;
    const nav=document.querySelector(".primary-nav");
    if(nav) nav.setAttribute("aria-label",UI.navLabel);
    const navLinks=document.querySelectorAll(".primary-nav a");
    if(navLinks[0]) navLinks[0].textContent=UI.names;
    if(navLinks[1]) navLinks[1].textContent=UI.livingDex;
    if(navLinks[2]) navLinks[2].textContent=UI.data;
    const back=document.querySelector(".guide-back");
    if(back) back.setAttribute("aria-label",UI.allGuides);
    document.querySelector(".version-picker")?.setAttribute("aria-label",UI.gameVersion);
    document.querySelector("#stage-nav")?.setAttribute("aria-label",UI.stages);
    document.querySelector("#previous-stage")?.setAttribute("aria-label",UI.previous);
    document.querySelector("#next-stage")?.setAttribute("aria-label",UI.next);
    const sourceTitle=document.querySelector(".guide-sources summary span:first-child");
    if(sourceTitle) sourceTitle.textContent=UI.sources;
    document.querySelectorAll(".guide-sources li a").forEach((link,index)=>{
      if(UI.sourceLabels[index]) link.textContent=UI.sourceLabels[index];
    });
  }

  function translateRenderedControls(){
    document.querySelectorAll(".task-group h3").forEach(heading=>{
      if(UI.groups[heading.textContent]) heading.textContent=UI.groups[heading.textContent];
    });
    document.querySelectorAll(".optional-tag").forEach(tag=>tag.textContent=UI.optional);
    document.querySelectorAll("input[data-task]").forEach(input=>input.setAttribute("aria-label",UI.markComplete));
    document.querySelectorAll(".task-more").forEach(button=>{
      button.setAttribute("aria-label",button.getAttribute("aria-expanded")==="true" ? UI.hideDetails : UI.showDetails);
    });
    const starterTitle=document.querySelector("#starter-title");
    if(starterTitle) starterTitle.textContent=UI.starterTitle;
    const starterNote=document.querySelector(".starter-note");
    if(starterNote) starterNote.textContent=UI.starterNote;
    document.querySelectorAll(".starter-option input").forEach(input=>{
      const name=input.closest(".starter-option")?.querySelector(".starter-name")?.textContent?.trim();
      if(name) input.nextElementSibling?.setAttribute("aria-label",`${UI.select} ${name}`);
    });
  }

  applyStaticCopy();
  const panel=document.querySelector("#stage-panel");
  if(panel){
    const observer=new MutationObserver(translateRenderedControls);
    observer.observe(panel,{childList:true,subtree:true,attributes:true,attributeFilter:["aria-expanded"]});
  }
})();
