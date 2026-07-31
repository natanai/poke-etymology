const GENERATION_II_DATA=[
  {d:152,e:"Chikorita",f:"Germignon",j:"チコリータ",r:"Chicorita",t:["Grass"],v:[0,0,0,0,1,0],x:[],c:"",reviewed:false},
  {d:153,e:"Bayleef",f:"Macronium",j:"ベイリーフ",r:"Bayleaf",t:["Grass"],v:[0,0,1,0,1,0],x:[],c:"",reviewed:false},
  {d:154,e:"Meganium",f:"Méganium",j:"メガニウム",r:"Meganium",t:["Grass"],v:[0,0,1,0,2,0],x:[],c:"",reviewed:false},
  {d:155,e:"Cyndaquil",f:"Héricendre",j:"ヒノアラシ",r:"Hinoarashi",t:["Fire"],v:[0,0,0,0,0,1],x:[],c:"",reviewed:false},
  {d:156,e:"Quilava",f:"Feurisson",j:"マグマラシ",r:"Magmarashi",t:["Fire"],v:[0,0,0,1,0,1],x:[],c:"",reviewed:false},
  {d:157,e:"Typhlosion",f:"Typhlosion",j:"バクフーン",r:"Bakphoon",t:["Fire"],v:[0,0,0,3,0,0],x:[],c:"",reviewed:false},
  {d:158,e:"Totodile",f:"Kaiminus",j:"ワニノコ",r:"Waninoko",t:["Water"],v:[0,1,0,0,0,0],x:[],c:"",reviewed:false},
  {d:159,e:"Croconaw",f:"Crocrodil",j:"アリゲイツ",r:"Alligates",t:["Water"],v:[0,1,1,0,0,0],x:[],c:"",reviewed:false},
  {d:160,e:"Feraligatr",f:"Aligatueur",j:"オーダイル",r:"Ordile",t:["Water"],v:[0,2,1,0,0,0],x:[],c:"",reviewed:false}
];

for(const record of GENERATION_II_DATA){
  if(!DATA.some(item=>item.d===record.d)) DATA.push(record);
}
DATA.sort((a,b)=>a.d-b.d);
