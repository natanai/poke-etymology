(()=>{
  const key="poke-etymology-language";
  const lang=["e","f","j"].includes(localStorage.getItem(key)) ? localStorage.getItem(key) : "e";

  const STAGE_COPY={
    "game-corner-prizes":{
      e:{tab:"Game Corner",title:"Celadon Game Corner",subtitle:"Porygon, optional version prize, and the hidden stairs"},
      f:{tab:"Casino",title:"Casino de Céladopole",subtitle:"Porygon, récompense de version facultative et escalier secret"},
      j:{tab:"ゲームコーナー",title:"タマムシゲームコーナー",subtitle:"ポリゴン・任意の限定景品・ひみつのかいだん"}
    },
    "rocket-hideout":{
      e:{tab:"Rocket Hideout",title:"Rocket Hideout",subtitle:"Lift Key, Giovanni, and the Silph Scope"},
      f:{tab:"Repaire Rocket",title:"Repaire Rocket",subtitle:"Clé Ascenseur, Giovanni et Scope Sylphe"},
      j:{tab:"ロケットだんアジト",title:"ロケットだんアジト",subtitle:"エレベータのカギ・サカキ・シルフスコープ"}
    },
    "celadon-gym":{
      e:{tab:"Celadon Gym",title:"Celadon Gym",subtitle:"Erika, the Rainbow Badge, and Strength access"},
      f:{tab:"Arène Céladopole",title:"Arène de Céladopole",subtitle:"Erika, Badge Prisme et accès à Force"},
      j:{tab:"タマムシジム",title:"タマムシジム",subtitle:"エリカ・レインボーバッジ・かいりき"}
    },
    "pokemon-tower-catches":{
      e:{tab:"Tower catches",title:"Pokémon Tower",subtitle:"Rival, healing floor, and the Ghost-family catch plan"},
      f:{tab:"Captures Tour",title:"Tour Pokémon",subtitle:"Rival, zone de soin et plan de capture Spectre"},
      j:{tab:"タワー捕獲",title:"ポケモンタワー",subtitle:"ライバル・回復エリア・ゴースト系捕獲"}
    },
    "pokemon-tower-summit":{
      e:{tab:"Tower summit",title:"Pokémon Tower Summit",subtitle:"Rescue Mr. Fuji and unlock the southern routes"},
      f:{tab:"Sommet de la Tour",title:"Sommet de la Tour Pokémon",subtitle:"Sauver M. Fuji et ouvrir les routes du sud"},
      j:{tab:"タワー最上階",title:"ポケモンタワー最上階",subtitle:"フジろうじんを助けて南の道を開く"}
    }
  };

  const TERMS=[
    {forms:["Celadon Game Corner","Casino de Céladopole","タマムシゲームコーナー"],e:"Celadon Game Corner",f:"Casino de Céladopole",j:"タマムシゲームコーナー"},
    {forms:["Game Corner","Casino","ゲームコーナー"],e:"Game Corner",f:"Casino",j:"ゲームコーナー"},
    {forms:["Coin Case","Boîte Jetons","コインケース"],e:"Coin Case",f:"Boîte Jetons",j:"コインケース"},
    {forms:["Coins","Jetons","コイン"],e:"Coins",f:"Jetons",j:"コイン"},
    {forms:["Rocket Hideout","Repaire Rocket","ロケットだんアジト"],e:"Rocket Hideout",f:"Repaire Rocket",j:"ロケットだんアジト"},
    {forms:["Lift Key","Clé Ascenseur","エレベータのカギ"],e:"Lift Key",f:"Clé Ascenseur",j:"エレベータのカギ"},
    {forms:["Silph Scope","Scope Sylphe","シルフスコープ"],e:"Silph Scope",f:"Scope Sylphe",j:"シルフスコープ"},
    {forms:["Giovanni","サカキ"],e:"Giovanni",f:"Giovanni",j:"サカキ"},
    {forms:["Moon Stone","Pierre Lune","つきのいし"],e:"Moon Stone",f:"Pierre Lune",j:"つきのいし"},
    {forms:["TM12 Taunt","CT12 Provoc","わざマシン12 ちょうはつ"],e:"TM12 Taunt",f:"CT12 Provoc",j:"わざマシン12 ちょうはつ"},
    {forms:["TM21 Frustration","CT21 Frustration","わざマシン21 やつあたり"],e:"TM21 Frustration",f:"CT21 Frustration",j:"わざマシン21 やつあたり"},
    {forms:["TM49 Snatch","CT49 Saisie","わざマシン49 よこどり"],e:"TM49 Snatch",f:"CT49 Saisie",j:"わざマシン49 よこどり"},
    {forms:["Metal Coat","Peau Métal","メタルコート"],e:"Metal Coat",f:"Peau Métal",j:"メタルコート"},
    {forms:["Up-Grade","Améliorator","アップグレード"],e:"Up-Grade",f:"Améliorator",j:"アップグレード"},
    {forms:["National Pokédex","Pokédex National","ぜんこくずかん"],e:"National Pokédex",f:"Pokédex National",j:"ぜんこくずかん"},
    {forms:["Safari Zone","Parc Safari","サファリゾーン"],e:"Safari Zone",f:"Parc Safari",j:"サファリゾーン"},
    {forms:["Celadon Gym","Arène de Céladopole","タマムシジム"],e:"Celadon Gym",f:"Arène de Céladopole",j:"タマムシジム"},
    {forms:["Erika","エリカ"],e:"Erika",f:"Erika",j:"エリカ"},
    {forms:["Rainbow Badge","Badge Prisme","レインボーバッジ"],e:"Rainbow Badge",f:"Badge Prisme",j:"レインボーバッジ"},
    {forms:["TM19 Giga Drain","CT19 Giga-Sangsue","わざマシン19 ギガドレイン"],e:"TM19 Giga Drain",f:"CT19 Giga-Sangsue",j:"わざマシン19 ギガドレイン"},
    {forms:["Strength","Force","かいりき"],e:"Strength",f:"Force",j:"かいりき"},
    {forms:["Pokémon Tower Summit","Sommet de la Tour Pokémon","ポケモンタワー最上階"],e:"Pokémon Tower Summit",f:"Sommet de la Tour Pokémon",j:"ポケモンタワー最上階"},
    {forms:["Pokémon Tower","Tour Pokémon","ポケモンタワー"],e:"Pokémon Tower",f:"Tour Pokémon",j:"ポケモンタワー"},
    {forms:["Lavender Town","Lavanville","シオンタウン"],e:"Lavender Town",f:"Lavanville",j:"シオンタウン"},
    {forms:["Mr. Fuji","M. Fuji","フジろうじん"],e:"Mr. Fuji",f:"M. Fuji",j:"フジろうじん"},
    {forms:["Poké Flute","Poké Flûte","ポケモンのふえ"],e:"Poké Flute",f:"Poké Flûte",j:"ポケモンのふえ"},
    {forms:["Soothe Bell","Grelot Zen","やすらぎのすず"],e:"Soothe Bell",f:"Grelot Zen",j:"やすらぎのすず"},
    {forms:["Itemfinder","Cherch’Objet","ダウジングマシン"],e:"Itemfinder",f:"Cherch’Objet",j:"ダウジングマシン"},
    {forms:["Volunteer Pokémon House","Maison Pokémon","ポケモンハウス"],e:"Volunteer Pokémon House",f:"Maison Pokémon",j:"ポケモンハウス"}
  ];

  function localizeText(value){
    let output=String(value ?? "");
    for(const term of TERMS){
      const target=term[lang];
      for(const form of [...term.forms].sort((a,b)=>b.length-a.length)) output=output.split(form).join(target);
    }
    return output;
  }

  for(const stage of CELADON_TOWER_STAGES){
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
    e:["Game Corner prizes and cash costs","Rocket Hideout and Silph Scope","Celadon Gym and Erika","Pokémon Tower encounters and Poké Flute"],
    f:["Récompenses du Casino et coûts en argent","Repaire Rocket et Scope Sylphe","Arène de Céladopole et Erika","Rencontres de la Tour Pokémon et Poké Flûte"],
    j:["ゲームコーナー景品と必要資金","ロケットだんアジトとシルフスコープ","タマムシジムとエリカ","ポケモンタワーの出現率とポケモンのふえ"]
  }[lang];
  document.querySelectorAll(".guide-sources li a").forEach((link,index)=>{
    if(index>=13 && sourceLabels[index-13]) link.textContent=sourceLabels[index-13];
  });
})();
