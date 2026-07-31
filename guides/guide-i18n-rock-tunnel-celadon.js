(()=>{
  const key="poke-etymology-language";
  const lang=["e","f","j"].includes(localStorage.getItem(key)) ? localStorage.getItem(key) : "e";

  const STAGE_COPY={
    "route-9":{
      e:{tab:"Route 9",title:"Route 9",subtitle:"Cerulean City to Route 10"},
      f:{tab:"Route 9",title:"Route 9",subtitle:"D’Azuria à la Route 10"},
      j:{tab:"9ばんどうろ",title:"9ばんどうろ",subtitle:"ハナダシティから10ばんどうろへ"}
    },
    "route-10-north":{
      e:{tab:"Route 10",title:"Route 10 North",subtitle:"Voltorb and Rock Tunnel preparation"},
      f:{tab:"Route 10",title:"Route 10 Nord",subtitle:"Voltorbe et préparation de la Grotte"},
      j:{tab:"10ばんどうろ",title:"10ばんどうろ北",subtitle:"ビリリダマとイワヤマトンネルの準備"}
    },
    "rock-tunnel":{
      e:{tab:"Rock Tunnel",title:"Rock Tunnel",subtitle:"Machop, Onix, and the Rock Slide tutor"},
      f:{tab:"Grotte",title:"Grotte",subtitle:"Machoc, Onix et donneur Éboulement"},
      j:{tab:"イワヤマトンネル",title:"イワヤマトンネル",subtitle:"ワンリキー・イワーク・いわなだれ"}
    },
    "lavender-route-8":{
      e:{tab:"Lavender → Route 8",title:"Lavender Town → Route 8",subtitle:"Delay Pokémon Tower; catch the version exclusive"},
      f:{tab:"Lavanville → Route 8",title:"Lavanville → Route 8",subtitle:"Reporter la Tour Pokémon et capturer l’exclusivité"},
      j:{tab:"シオン → 8ばんどうろ",title:"シオンタウン → 8ばんどうろ",subtitle:"ポケモンタワーを後回しにして限定種を捕獲"}
    },
    "celadon-setup":{
      e:{tab:"Celadon setup",title:"Celadon City",subtitle:"Eevee, Tea, and repeatable evolution stones"},
      f:{tab:"Préparation Céladopole",title:"Céladopole",subtitle:"Évoli, Thé et pierres évolutives achetables"},
      j:{tab:"タマムシ準備",title:"タマムシシティ",subtitle:"イーブイ・おちゃ・購入できる進化の石"}
    },
    "route-16-north":{
      e:{tab:"Route 16",title:"Route 16 North",subtitle:"Doduo, Fly, and the blocked Cycling Road"},
      f:{tab:"Route 16",title:"Route 16 Nord",subtitle:"Doduo, Vol et Piste Cyclable bloquée"},
      j:{tab:"16ばんどうろ",title:"16ばんどうろ北",subtitle:"ドードー・そらをとぶ・通行止めのサイクリングロード"}
    }
  };

  const TERMS=[
    {forms:["TM40 Aerial Ace","CT40 Aéropique","わざマシン40 つばめがえし"],e:"TM40 Aerial Ace",f:"CT40 Aéropique",j:"わざマシン40 つばめがえし"},
    {forms:["Everstone","Pierre Stase","かわらずのいし"],e:"Everstone",f:"Pierre Stase",j:"かわらずのいし"},
    {forms:["Rock Slide tutor","donneur Éboulement","いわなだれのわざおしえ"],e:"Rock Slide tutor",f:"donneur Éboulement",j:"いわなだれのわざおしえ"},
    {forms:["Rock Slide","Éboulement","いわなだれ"],e:"Rock Slide",f:"Éboulement",j:"いわなだれ"},
    {forms:["Metal Coat","Peau Métal","メタルコート"],e:"Metal Coat",f:"Peau Métal",j:"メタルコート"},
    {forms:["National Pokédex","Pokédex National","ぜんこくずかん"],e:"National Pokédex",f:"Pokédex National",j:"ぜんこくずかん"},
    {forms:["Lavender Town","Lavanville","シオンタウン"],e:"Lavender Town",f:"Lavanville",j:"シオンタウン"},
    {forms:["Pokémon Tower","Tour Pokémon","ポケモンタワー"],e:"Pokémon Tower",f:"Tour Pokémon",j:"ポケモンタワー"},
    {forms:["Silph Scope","Scope Sylphe","シルフスコープ"],e:"Silph Scope",f:"Scope Sylphe",j:"シルフスコープ"},
    {forms:["Celadon Rocket Hideout","Repaire Rocket de Céladopole","ロケットだんアジト"],e:"Celadon Rocket Hideout",f:"Repaire Rocket de Céladopole",j:"ロケットだんアジト"},
    {forms:["Celadon City","Céladopole","タマムシシティ"],e:"Celadon City",f:"Céladopole",j:"タマムシシティ"},
    {forms:["Celadon Mansion","Manoir Céladon","タマムシマンション"],e:"Celadon Mansion",f:"Manoir Céladon",j:"タマムシマンション"},
    {forms:["Department Store","Centre commercial","デパート"],e:"Department Store",f:"Centre commercial",j:"デパート"},
    {forms:["Coin Case","Boîte Jetons","コインケース"],e:"Coin Case",f:"Boîte Jetons",j:"コインケース"},
    {forms:["Tea","Thé","おちゃ"],e:"Tea",f:"Thé",j:"おちゃ"},
    {forms:["Fire Stone","Pierre Feu","ほのおのいし"],e:"Fire Stone",f:"Pierre Feu",j:"ほのおのいし"},
    {forms:["Thunder Stone","Pierre Foudre","かみなりのいし"],e:"Thunder Stone",f:"Pierre Foudre",j:"かみなりのいし"},
    {forms:["Water Stone","Pierre Eau","みずのいし"],e:"Water Stone",f:"Pierre Eau",j:"みずのいし"},
    {forms:["Leaf Stone","Pierre Plante","リーフのいし"],e:"Leaf Stone",f:"Pierre Plante",j:"リーフのいし"},
    {forms:["Four Island","Île 4","４のしま"],e:"Four Island",f:"Île 4",j:"４のしま"},
    {forms:["Route 16 North","Route 16 Nord","16ばんどうろ北"],e:"Route 16 North",f:"Route 16 Nord",j:"16ばんどうろ北"},
    {forms:["HM02 Fly","CS02 Vol","ひでんマシン02 そらをとぶ"],e:"HM02 Fly",f:"CS02 Vol",j:"ひでんマシン02 そらをとぶ"},
    {forms:["Amulet Coin","Pièce Rune","おまもりこばん"],e:"Amulet Coin",f:"Pièce Rune",j:"おまもりこばん"},
    {forms:["Cycling Road","Piste Cyclable","サイクリングロード"],e:"Cycling Road",f:"Piste Cyclable",j:"サイクリングロード"},
    {forms:["Game Corner","Casino","ゲームコーナー"],e:"Game Corner",f:"Casino",j:"ゲームコーナー"},
    {forms:["Poké Flute","Poké Flûte","ポケモンのふえ"],e:"Poké Flute",f:"Poké Flûte",j:"ポケモンのふえ"},
    {forms:["Cut","Coupe","いあいぎり"],e:"Cut",f:"Coupe",j:"いあいぎり"},
    {forms:["Flash","フラッシュ"],e:"Flash",f:"Flash",j:"フラッシュ"},
    {forms:["Fly","Vol","そらをとぶ"],e:"Fly",f:"Vol",j:"そらをとぶ"},
    {forms:["Underground Path","Souterrain","ちかつうろ"],e:"Underground Path",f:"Souterrain",j:"ちかつうろ"},
    {forms:["Saffron City","Safrania","ヤマブキシティ"],e:"Saffron City",f:"Safrania",j:"ヤマブキシティ"},
    {forms:["Cerulean City","Azuria","ハナダシティ"],e:"Cerulean City",f:"Azuria",j:"ハナダシティ"},
    {forms:["Rock Tunnel","Grotte","イワヤマトンネル"],e:"Rock Tunnel",f:"Grotte",j:"イワヤマトンネル"}
  ];

  function localizeText(value){
    let output=String(value ?? "");
    for(const term of TERMS){
      const target=term[lang];
      for(const form of [...term.forms].sort((a,b)=>b.length-a.length)) output=output.split(form).join(target);
    }
    return output;
  }

  for(const stage of ROCK_TUNNEL_CELADON_STAGES){
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
    e:["Routes 9–10 and Rock Tunnel preparation","Rock Tunnel, Lavender Town, and Routes 8–7","Celadon City setup","Route 16, Doduo, and Fly"],
    f:["Routes 9–10 et préparation de la Grotte","Grotte, Lavanville et Routes 8–7","Préparation de Céladopole","Route 16, Doduo et Vol"],
    j:["9・10ばんどうろとイワヤマトンネル準備","イワヤマトンネル・シオンタウン・8〜7ばんどうろ","タマムシシティ準備","16ばんどうろ・ドードー・そらをとぶ"]
  }[lang];
  document.querySelectorAll(".guide-sources li a").forEach((link,index)=>{
    if(index>=9 && sourceLabels[index-9]) link.textContent=sourceLabels[index-9];
  });
})();
