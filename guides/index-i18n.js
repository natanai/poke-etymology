(()=>{
  const key="poke-etymology-language";
  const lang=["e","f","j"].includes(localStorage.getItem(key)) ? localStorage.getItem(key) : "e";
  const copy={
    e:{html:"en",title:"Living Dex",names:"Names",data:"Data",nav:"Main navigation",kanto:"Kanto",range:"Pallet Town → Route 5",later:"Later"},
    f:{html:"fr",title:"Dex vivant",names:"Noms",data:"Données",nav:"Navigation principale",kanto:"Kanto",range:"Bourg Palette → Route 5",later:"Plus tard"},
    j:{html:"ja",title:"リビング図鑑",names:"名前",data:"データ",nav:"メインナビゲーション",kanto:"カントー",range:"マサラタウン → 5ばんどうろ",later:"今後"}
  }[lang];
  document.documentElement.lang=copy.html;
  document.title=`${copy.title} · Poké Etymology`;
  document.querySelector(".site-header h1").textContent=copy.title;
  const nav=document.querySelector(".primary-nav");
  nav?.setAttribute("aria-label",copy.nav);
  const links=document.querySelectorAll(".primary-nav a");
  if(links[0]) links[0].textContent=copy.names;
  if(links[1]) links[1].textContent=copy.title;
  if(links[2]) links[2].textContent=copy.data;
  document.querySelector(".section-heading h2").textContent=copy.kanto;
  const rows=document.querySelectorAll(".guide-link span");
  if(rows[0]) rows[0].textContent=copy.range;
  if(rows[1]) rows[1].textContent=copy.later;
})();
