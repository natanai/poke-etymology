(()=>{
  const key="poke-etymology-language";
  const lang=["e","f","j"].includes(localStorage.getItem(key)) ? localStorage.getItem(key) : "e";

  const STAGE_COPY={
    "route-12-snorlax":{
      e:{tab:"Route 12",title:"Route 12",subtitle:"First Snorlax, the Super Rod, and completion-safe items"},
      f:{tab:"Route 12",title:"Route 12",subtitle:"Premier Ronflex, Méga Canne et objets sans risque"},
      j:{tab:"１２ばんどうろ",title:"１２ばんどうろ",subtitle:"最初のカビゴン・すごいつりざお・取り逃し防止"}
    },
    "route-12-fishing":{
      e:{tab:"Route 12 fishing",title:"Route 12 fishing",subtitle:"Use the new Super Rod for the high-rate version family"},
      f:{tab:"Pêche Route 12",title:"Pêche sur la Route 12",subtitle:"Utiliser la Méga Canne pour la famille de version à haut taux"},
      j:{tab:"１２ばんどうろ つり",title:"１２ばんどうろのつり",subtitle:"すごいつりざおで高確率のバージョン別系統を確保"}
    },
    "routes-13-14":{
      e:{tab:"Routes 13–14",title:"Routes 13–14",subtitle:"Venonat family and the best pre-Fuchsia Ditto rate"},
      f:{tab:"Routes 13–14",title:"Routes 13–14",subtitle:"Famille Mimitoss et meilleur taux de Métamorph avant Parmanie"},
      j:{tab:"１３・１４ばんどうろ",title:"１３・１４ばんどうろ",subtitle:"コンパン系統とセキチク前で最高のメタモン出現率"}
    },
    "route-15":{
      e:{tab:"Route 15",title:"Route 15",subtitle:"One-way northern hill, Rain Dance, and the Fuchsia gate"},
      f:{tab:"Route 15",title:"Route 15",subtitle:"Colline nord à sens unique, Danse Pluie et porte de Parmanie"},
      j:{tab:"１５ばんどうろ",title:"１５ばんどうろ",subtitle:"一方通行の北側・あまごい・セキチクのゲート"}
    },
    "fuchsia-setup":{
      e:{tab:"Fuchsia",title:"Fuchsia City",subtitle:"Good Rod families before the Safari Zone"},
      f:{tab:"Parmanie",title:"Parmanie",subtitle:"Familles à pêcher avant le Parc Safari"},
      j:{tab:"セキチク",title:"セキチクシティ",subtitle:"サファリゾーン前のいいつりざお系統"}
    }
  };

  const TERMS=[
    {forms:["Fuchsia City","Parmanie","セキチクシティ"],e:"Fuchsia City",f:"Parmanie",j:"セキチクシティ"},
    {forms:["Route 12","１２ばんどうろ"],e:"Route 12",f:"Route 12",j:"１２ばんどうろ"},
    {forms:["Route 13","１３ばんどうろ"],e:"Route 13",f:"Route 13",j:"１３ばんどうろ"},
    {forms:["Route 14","１４ばんどうろ"],e:"Route 14",f:"Route 14",j:"１４ばんどうろ"},
    {forms:["Route 15","１５ばんどうろ"],e:"Route 15",f:"Route 15",j:"１５ばんどうろ"},
    {forms:["Route 16","１６ばんどうろ"],e:"Route 16",f:"Route 16",j:"１６ばんどうろ"},
    {forms:["Great Balls","Super Balls","スーパーボール"],e:"Great Balls",f:"Super Balls",j:"スーパーボール"},
    {forms:["Ultra Balls","Hyper Balls","ハイパーボール"],e:"Ultra Balls",f:"Hyper Balls",j:"ハイパーボール"},
    {forms:["Poké Flute","Poké Flûte","ポケモンのふえ"],e:"Poké Flute",f:"Poké Flûte",j:"ポケモンのふえ"},
    {forms:["Super Rod","Méga Canne","すごいつりざお"],e:"Super Rod",f:"Méga Canne",j:"すごいつりざお"},
    {forms:["Good Rod","Super Canne","いいつりざお"],e:"Good Rod",f:"Super Canne",j:"いいつりざお"},
    {forms:["Fishing Guru","Maître Pêcheur","つりおやじ"],e:"Fishing Guru",f:"Maître Pêcheur",j:"つりおやじ"},
    {forms:["Leftovers","Restes","たべのこし"],e:"Leftovers",f:"Restes",j:"たべのこし"},
    {forms:["Itemfinder","Cherch’Objet","ダウジングマシン"],e:"Itemfinder",f:"Cherch’Objet",j:"ダウジングマシン"},
    {forms:["Iron","Fer","ブロムヘキシン"],e:"Iron",f:"Fer",j:"ブロムヘキシン"},
    {forms:["Rare Candy","Super Bonbon","ふしぎなアメ"],e:"Rare Candy",f:"Super Bonbon",j:"ふしぎなアメ"},
    {forms:["Cut","Coupe","いあいぎり"],e:"Cut",f:"Coupe",j:"いあいぎり"},
    {forms:["Dragon Scale","Écaille Draco","りゅうのウロコ"],e:"Dragon Scale",f:"Écaille Draco",j:"りゅうのウロコ"},
    {forms:["National Pokédex","Pokédex National","ぜんこくずかん"],e:"National Pokédex",f:"Pokédex National",j:"ぜんこくずかん"},
    {forms:["PP Up","PP Plus","ポイントアップ"],e:"PP Up",f:"PP Plus",j:"ポイントアップ"},
    {forms:["Pinap Berry","Baie Nanana","パイルのみ"],e:"Pinap Berry",f:"Baie Nanana",j:"パイルのみ"},
    {forms:["Zinc","キトサン"],e:"Zinc",f:"Zinc",j:"キトサン"},
    {forms:["TM18 Rain Dance","CT18 Danse Pluie","わざマシン18 あまごい"],e:"TM18 Rain Dance",f:"CT18 Danse Pluie",j:"わざマシン18 あまごい"},
    {forms:["Exp. Share","Multi Exp","がくしゅうそうち"],e:"Exp. Share",f:"Multi Exp",j:"がくしゅうそうち"},
    {forms:["Professor Oak","Professeur Chen","オーキドはかせ"],e:"Professor Oak",f:"Professeur Chen",j:"オーキドはかせ"},
    {forms:["Safari Zone","Parc Safari","サファリゾーン"],e:"Safari Zone",f:"Parc Safari",j:"サファリゾーン"},
    {forms:["HM03 Surf","CS03 Surf","ひでんマシン03 なみのり"],e:"HM03 Surf",f:"CS03 Surf",j:"ひでんマシン03 なみのり"},
    {forms:["Surf","なみのり"],e:"Surf",f:"Surf",j:"なみのり"},
    {forms:["Gold Teeth","Dent d’Or","きんのいれば"],e:"Gold Teeth",f:"Dent d’Or",j:"きんのいれば"},
    {forms:["Water Stone","Pierre Eau","みずのいし"],e:"Water Stone",f:"Pierre Eau",j:"みずのいし"},
    {forms:["King’s Rock","King's Rock","Roche Royale","おうじゃのしるし"],e:"King’s Rock",f:"Roche Royale",j:"おうじゃのしるし"},
    {forms:["Max Revive","Rappel Max","げんきのかたまり"],e:"Max Revive",f:"Rappel Max",j:"げんきのかたまり"}
  ];

  function localizeText(value){
    let output=String(value ?? "");
    for(const term of TERMS){
      const target=term[lang];
      for(const form of [...term.forms].sort((a,b)=>b.length-a.length)) output=output.split(form).join(target);
    }
    return output;
  }

  for(const stage of ROUTE12_FUCHSIA_STAGES){
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
    e:["Extracted FireRed / LeafGreen encounter tables","Route 12, Snorlax, and the Super Rod","Route 13 maze and hidden PP Up","Route 14 encounters and hidden items","Route 15 hill and Exp. Share","Fuchsia City rods and hidden item"],
    f:["Tables de rencontres extraites de Rouge Feu / Vert Feuille","Route 12, Ronflex et Méga Canne","Labyrinthe de la Route 13 et PP Plus caché","Rencontres et objets cachés de la Route 14","Colline de la Route 15 et Multi Exp","Cannes et objet caché de Parmanie"],
    j:["ファイアレッド・リーフグリーン抽出出現データ","１２ばんどうろ・カビゴン・すごいつりざお","１３ばんどうろの迷路と隠しポイントアップ","１４ばんどうろの出現と隠し道具","１５ばんどうろの高台とがくしゅうそうち","セキチクシティのつりざおと隠し道具"]
  }[lang];
  document.querySelectorAll(".guide-sources li a").forEach((link,index)=>{
    if(index>=17 && sourceLabels[index-17]) link.textContent=sourceLabels[index-17];
  });
})();
