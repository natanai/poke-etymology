(()=>{
  const key="poke-etymology-language";
  const lang=["e","f","j"].includes(localStorage.getItem(key)) ? localStorage.getItem(key) : "e";

  const STAGE_COPY={
    "routes-5-6":{
      e:{tab:"Routes 5–6",title:"Routes 5–6",subtitle:"Underground Path to Vermilion City"},
      f:{tab:"Routes 5–6",title:"Routes 5–6",subtitle:"Souterrain vers Carmin sur Mer"},
      j:{tab:"5・6ばんどうろ",title:"5・6ばんどうろ",subtitle:"ちかつうろからクチバシティへ"}
    },
    "vermilion-city":{
      e:{tab:"Vermilion",title:"Vermilion City",subtitle:"Unique trade, fishing, and travel tools"},
      f:{tab:"Carmin sur Mer",title:"Carmin sur Mer",subtitle:"Échange unique, pêche et outils de déplacement"},
      j:{tab:"クチバ",title:"クチバシティ",subtitle:"交換・つり・移動の準備"}
    },
    "ss-anne":{
      e:{tab:"S.S. Anne",title:"S.S. Anne",subtitle:"Permanent missables and HM01 Cut"},
      f:{tab:"L’Océane",title:"L’Océane",subtitle:"Objets définitivement manquables et CS01 Coupe"},
      j:{tab:"サント・アンヌ号",title:"サント・アンヌ号",subtitle:"取り逃し注意とひでんマシン01 いあいぎり"}
    },
    "route-11":{
      e:{tab:"Route 11",title:"Route 11",subtitle:"Drowzee, catch-up Spearow, and the east gate"},
      f:{tab:"Route 11",title:"Route 11",subtitle:"Soporifik, Piafabec de secours et porte est"},
      j:{tab:"11ばんどうろ",title:"11ばんどうろ",subtitle:"スリープ、オニスズメ補充と東ゲート"}
    },
    "diglett-route2":{
      e:{tab:"Diglett → Route 2",title:"Diglett’s Cave → Route 2",subtitle:"Ground catches, Mr. Mime, Flash, and Old Amber"},
      f:{tab:"Taupiqueur → Route 2",title:"Cave Taupiqueur → Route 2",subtitle:"Captures Sol, M. Mime, Flash et Vieil Ambre"},
      j:{tab:"ディグダ → 2ばんどうろ",title:"ディグダのあな → 2ばんどうろ",subtitle:"じめんタイプ・バリヤード・フラッシュ・ひみつのコハク"}
    },
    "vermilion-gym":{
      e:{tab:"Vermilion Gym",title:"Vermilion Gym",subtitle:"Lt. Surge and the third badge"},
      f:{tab:"Arène de Carmin",title:"Arène de Carmin sur Mer",subtitle:"Major Bob et le troisième badge"},
      j:{tab:"クチバジム",title:"クチバジム",subtitle:"マチスと3つめのバッジ"}
    }
  };

  const TERMS=[
    {forms:["Underground Path","Souterrain","ちかつうろ"],e:"Underground Path",f:"Souterrain",j:"ちかつうろ"},
    {forms:["Saffron City","Safrania","ヤマブキシティ"],e:"Saffron City",f:"Safrania",j:"ヤマブキシティ"},
    {forms:["Vermilion City","Carmin sur Mer","クチバシティ"],e:"Vermilion City",f:"Carmin sur Mer",j:"クチバシティ"},
    {forms:["Cerulean City","Azuria","ハナダシティ"],e:"Cerulean City",f:"Azuria",j:"ハナダシティ"},
    {forms:["Rock Tunnel","Grotte","イワヤマトンネル"],e:"Rock Tunnel",f:"Grotte",j:"イワヤマトンネル"},
    {forms:["Old Rod","Canne","ボロのつりざお"],e:"Old Rod",f:"Canne",j:"ボロのつりざお"},
    {forms:["Fishing Guru","Maître Pêcheur","つりおやじ"],e:"Fishing Guru",f:"Maître Pêcheur",j:"つりおやじ"},
    {forms:["Stick","Bâton","ながねぎ"],e:"Stick",f:"Bâton",j:"ながねぎ"},
    {forms:["Vs. Seeker","Cherche VS","バトルサーチャー"],e:"Vs. Seeker",f:"Cherche VS",j:"バトルサーチャー"},
    {forms:["Bike Voucher","Bon Commande","ひきかえけん"],e:"Bike Voucher",f:"Bon Commande",j:"ひきかえけん"},
    {forms:["Bike Shop","Boutique de Cycles","サイクルショップ"],e:"Bike Shop",f:"Boutique de Cycles",j:"サイクルショップ"},
    {forms:["Pokémon Fan Club Chairman","Président du Fan Club Pokémon","ポケモンだいすきクラブ会長"],e:"Pokémon Fan Club Chairman",f:"Président du Fan Club Pokémon",j:"ポケモンだいすきクラブ会長"},
    {forms:["S.S. Anne","L’Océane","サント・アンヌ号"],e:"S.S. Anne",f:"L’Océane",j:"サント・アンヌ号"},
    {forms:["HM01 Cut","CS01 Coupe","ひでんマシン01 いあいぎり"],e:"HM01 Cut",f:"CS01 Coupe",j:"ひでんマシン01 いあいぎり"},
    {forms:["TM31 Brick Break","CT31 Casse-Brique","わざマシン31 かわらわり"],e:"TM31 Brick Break",f:"CT31 Casse-Brique",j:"わざマシン31 かわらわり"},
    {forms:["TM44 Rest","CT44 Repos","わざマシン44 ねむる"],e:"TM44 Rest",f:"CT44 Repos",j:"わざマシン44 ねむる"},
    {forms:["Great Ball","Super Ball","スーパーボール"],e:"Great Ball",f:"Super Ball",j:"スーパーボール"},
    {forms:["Rare Candy","Super Bonbon","ふしぎなアメ"],e:"Rare Candy",f:"Super Bonbon",j:"ふしぎなアメ"},
    {forms:["Sitrus Berry","Baie Sitrus","オボンのみ"],e:"Sitrus Berry",f:"Baie Sitrus",j:"オボンのみ"},
    {forms:["Chesto Berry","Baie Maron","カゴのみ"],e:"Chesto Berry",f:"Baie Maron",j:"カゴのみ"},
    {forms:["Cheri Berry","Baie Ceriz","クラボのみ"],e:"Cheri Berry",f:"Baie Ceriz",j:"クラボのみ"},
    {forms:["Pecha Berry","Baie Pêcha","モモンのみ"],e:"Pecha Berry",f:"Baie Pêcha",j:"モモンのみ"},
    {forms:["Diglett’s Cave","Cave Taupiqueur","ディグダのあな"],e:"Diglett’s Cave",f:"Cave Taupiqueur",j:"ディグダのあな"},
    {forms:["Itemfinder","Cherch’Objet","ダウジングマシン"],e:"Itemfinder",f:"Cherch’Objet",j:"ダウジングマシン"},
    {forms:["HM05 Flash","CS05 Flash","ひでんマシン05 フラッシュ"],e:"HM05 Flash",f:"CS05 Flash",j:"ひでんマシン05 フラッシュ"},
    {forms:["Old Amber","Vieil Ambre","ひみつのコハク"],e:"Old Amber",f:"Vieil Ambre",j:"ひみつのコハク"},
    {forms:["Pewter Museum","Musée des Sciences d’Argenta","ニビかがくはくぶつかん"],e:"Pewter Museum",f:"Musée des Sciences d’Argenta",j:"ニビかがくはくぶつかん"},
    {forms:["Professor Oak","Professeur Chen","オーキド博士"],e:"Professor Oak",f:"Professeur Chen",j:"オーキド博士"},
    {forms:["Vermilion Gym","Arène de Carmin sur Mer","クチバジム"],e:"Vermilion Gym",f:"Arène de Carmin sur Mer",j:"クチバジム"},
    {forms:["Lt. Surge","Major Bob","マチス"],e:"Lt. Surge",f:"Major Bob",j:"マチス"},
    {forms:["Thunder Badge","Badge Foudre","オレンジバッジ"],e:"Thunder Badge",f:"Badge Foudre",j:"オレンジバッジ"},
    {forms:["TM34 Shock Wave","CT34 Onde de Choc","わざマシン34 でんげきは"],e:"TM34 Shock Wave",f:"CT34 Onde de Choc",j:"わざマシン34 でんげきは"},
    {forms:["Move Deleter","Effaceur de Capacités","わすれオヤジ"],e:"Move Deleter",f:"Effaceur de Capacités",j:"わすれオヤジ"},
    {forms:["Cut","Coupe","いあいぎり"],e:"Cut",f:"Coupe",j:"いあいぎり"},
    {forms:["Flash","フラッシュ"],e:"Flash",f:"Flash",j:"フラッシュ"},
    {forms:["Fly","Vol","そらをとぶ"],e:"Fly",f:"Vol",j:"そらをとぶ"}
  ];

  function localizeText(value){
    let output=String(value ?? "");
    for(const term of TERMS){
      const target=term[lang];
      for(const form of [...term.forms].sort((a,b)=>b.length-a.length)) output=output.split(form).join(target);
    }
    return output;
  }

  for(const stage of VERMILION_STAGES){
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
    e:["Routes 5–6 and Vermilion City","S.S. Anne permanent missables","Route 11, Diglett’s Cave, and Route 2"],
    f:["Routes 5–6 et Carmin sur Mer","Objets définitivement manquables de L’Océane","Route 11, Cave Taupiqueur et Route 2"],
    j:["5・6ばんどうろとクチバシティ","サント・アンヌ号の取り逃し要素","11ばんどうろ・ディグダのあな・2ばんどうろ"]
  }[lang];
  document.querySelectorAll(".guide-sources li a").forEach((link,index)=>{
    if(index>=6 && sourceLabels[index-6]) link.textContent=sourceLabels[index-6];
  });
})();
