(()=>{
  const key="poke-etymology-language";
  const lang=["e","f","j"].includes(localStorage.getItem(key)) ? localStorage.getItem(key) : "e";

  const STAGE_COPY={
    "safari-prize-run":{
      e:{tab:"Safari prizes",title:"Safari Zone — prize run",subtitle:"Secure Surf and the Gold Teeth before hunting rare catches"},
      f:{tab:"Récompenses Safari",title:"Parc Safari — récompenses",subtitle:"Sécuriser Surf et la Dent d’Or avant les captures rares"},
      j:{tab:"サファリ景品",title:"サファリゾーン — 景品ルート",subtitle:"珍しいポケモンを狙う前になみのりときんのいればを確保"}
    },
    "safari-center-catches":{
      e:{tab:"Safari Center",title:"Safari Zone — Center",subtitle:"Two common families plus the version-exclusive 4% catch"},
      f:{tab:"Safari Centre",title:"Parc Safari — Centre",subtitle:"Deux familles communes et l’exclusivité de version à 4%"},
      j:{tab:"サファリ中央",title:"サファリゾーン — 中央エリア",subtitle:"高確率の2系統とバージョン限定4%枠"}
    },
    "safari-rare-catches":{
      e:{tab:"Safari rares",title:"Safari Zone — rare-area runs",subtitle:"Use each species’ 4% area instead of its 1% fallback"},
      f:{tab:"Rares Safari",title:"Parc Safari — zones rares",subtitle:"Utiliser la zone à 4% de chaque espèce plutôt que son alternative à 1%"},
      j:{tab:"サファリ珍種",title:"サファリゾーン — 珍種エリア",subtitle:"各ポケモンは1%枠ではなく4%のエリアで狙う"}
    },
    "safari-dratini":{
      e:{tab:"Dratini",title:"Safari Zone — Dratini fishing",subtitle:"Use a stationary Super Rod run rather than hunting 1% Dragonair"},
      f:{tab:"Minidraco",title:"Parc Safari — pêche de Minidraco",subtitle:"Pêcher à la Méga Canne plutôt que chercher Draco à 1%"},
      j:{tab:"ミニリュウ",title:"サファリゾーン — ミニリュウ釣り",subtitle:"1%のハクリューより15%のミニリュウを狙う"}
    },
    "fuchsia-warden":{
      e:{tab:"Warden",title:"Fuchsia City — Safari cleanup",subtitle:"Return the Gold Teeth and unlock Strength"},
      f:{tab:"Gardien",title:"Parmanie — fin du Parc Safari",subtitle:"Rendre la Dent d’Or et obtenir Force"},
      j:{tab:"園長",title:"セキチクシティ — サファリ後",subtitle:"きんのいればを返してかいりきを入手"}
    }
  };

  const TERMS=[
    {forms:["Safari Zone","Parc Safari","サファリゾーン"],e:"Safari Zone",f:"Parc Safari",j:"サファリゾーン"},
    {forms:["Fuchsia City","Parmanie","セキチクシティ"],e:"Fuchsia City",f:"Parmanie",j:"セキチクシティ"},
    {forms:["Safari Balls","Safari Ball","サファリボール"],e:"Safari Balls",f:"Safari Balls",j:"サファリボール"},
    {forms:["Gold Teeth","Dent d’Or","Dent d'Or","きんのいれば"],e:"Gold Teeth",f:"Dent d’Or",j:"きんのいれば"},
    {forms:["HM03 Surf","CS03 Surf","ひでんマシン03 なみのり"],e:"HM03 Surf",f:"CS03 Surf",j:"ひでんマシン03 なみのり"},
    {forms:["HM04 Strength","CS04 Force","ひでんマシン04 かいりき"],e:"HM04 Strength",f:"CS04 Force",j:"ひでんマシン04 かいりき"},
    {forms:["Strength","Force","かいりき"],e:"Strength",f:"Force",j:"かいりき"},
    {forms:["Surf","なみのり"],e:"Surf",f:"Surf",j:"なみのり"},
    {forms:["Soul Badge","Badge Âme","ピンクバッジ"],e:"Soul Badge",f:"Badge Âme",j:"ピンクバッジ"},
    {forms:["Rainbow Badge","Badge Prisme","レインボーバッジ"],e:"Rainbow Badge",f:"Badge Prisme",j:"レインボーバッジ"},
    {forms:["Super Rod","Méga Canne","すごいつりざお"],e:"Super Rod",f:"Méga Canne",j:"すごいつりざお"},
    {forms:["Leaf Stone","Pierre Plante","リーフのいし"],e:"Leaf Stone",f:"Pierre Plante",j:"リーフのいし"},
    {forms:["Moon Stone","Pierre Lune","つきのいし"],e:"Moon Stone",f:"Pierre Lune",j:"つきのいし"},
    {forms:["Metal Coat","Peau Métal","メタルコート"],e:"Metal Coat",f:"Peau Métal",j:"メタルコート"},
    {forms:["National Pokédex","Pokédex National","ぜんこくずかん"],e:"National Pokédex",f:"Pokédex National",j:"ぜんこくずかん"},
    {forms:["TM11 Sunny Day","CT11 Zénith","わざマシン11 にほんばれ"],e:"TM11 Sunny Day",f:"CT11 Zénith",j:"わざマシン11 にほんばれ"},
    {forms:["TM32 Double Team","CT32 Reflet","わざマシン32 かげぶんしん"],e:"TM32 Double Team",f:"CT32 Reflet",j:"わざマシン32 かげぶんしん"},
    {forms:["TM47 Steel Wing","CT47 Aile d’Acier","CT47 Aile d'Acier","わざマシン47 はがねのつばさ"],e:"TM47 Steel Wing",f:"CT47 Aile d’Acier",j:"わざマシン47 はがねのつばさ"},
    {forms:["Warden’s house","Warden's house","Maison du Gardien","園長の家"],e:"Warden’s house",f:"Maison du Gardien",j:"園長の家"}
  ];

  function localizeText(value){
    let output=String(value ?? "");
    for(const term of TERMS){
      const target=term[lang];
      for(const form of [...term.forms].sort((a,b)=>b.length-a.length)) output=output.split(form).join(target);
    }
    return output;
  }

  for(const stage of SAFARI_STAGES){
    Object.assign(stage,STAGE_COPY[stage.id]?.[lang] || {});
    if(stage.warning) stage.warning=localizeText(stage.warning);
    if(stage.drawer){
      stage.drawer.title=localizeText(stage.drawer.title);
      stage.drawer.text=localizeText(stage.drawer.text);
    }
    for(const task of stage.tasks){
      for(const field of ["title","meta","detail"]) if(task[field]) task[field]=localizeText(task[field]);
      if(task.variants){
        for(const variant of Object.values(task.variants)){
          for(const field of ["title","meta","detail"]) if(variant[field]) variant[field]=localizeText(variant[field]);
        }
      }
    }
  }

  const sourceLabels={
    e:["Safari Zone step and ball limits","Safari West and Gold Teeth map data","Secret House and HM03 Surf reward","Warden and HM04 Strength reward"],
    f:["Limite de pas et Safari Balls","Carte de l’Ouest et Dent d’Or","Maison secrète et récompense CS03 Surf","Gardien et récompense CS04 Force"],
    j:["サファリゾーンの歩数とボール制限","西エリアときんのいればのマップデータ","ひみつのいえとひでんマシン03","園長とひでんマシン04"]
  }[lang];
  document.querySelectorAll(".guide-sources li a").forEach((link,index)=>{
    if(index>=23 && sourceLabels[index-23]) link.textContent=sourceLabels[index-23];
  });
})();
