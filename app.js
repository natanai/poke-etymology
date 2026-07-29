let lang="e", filtered=DATA, current=null;
const $=s=>document.querySelector(s);
const pad=n=>String(n).padStart(3,"0");
const norm=s=>String(s).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();

function displayName(p){
  if(lang==="j") return `${p.j} (${p.r})`;
  return p[lang];
}

function draw(){
  $("#list").innerHTML=filtered.map(p=>`
    <li>
      <button type="button" data-d="${p.d}" aria-label="Open ${p.e}">
        <span class="dex-no">#${pad(p.d)}</span>
        <strong>${displayName(p)}</strong>
        <span class="type">${p.t.join(" / ")}</span>
      </button>
    </li>`).join("");
  $("#count").textContent=`${filtered.length} ${filtered.length===1?"entry":"entries"}`;
  $("#none").hidden=filtered.length>0;
}

function filter(){
  const q=norm($("#q").value.trim());
  filtered=DATA.filter(p=>norm([p.d,pad(p.d),p.e,p.f,p.j,p.r,...p.t].join(" ")).includes(q));
  draw();
}

function show(d){
  const p=DATA.find(x=>x.d===+d);
  if(!p) return;
  current=p;
  history.replaceState(null,"",`#${pad(p.d)}`);
  $("#dex").textContent=`National Pokédex #${pad(p.d)}`;
  $("#name").textContent=p.e;
  $("#sub").textContent=`${p.f} · ${p.j} — ${p.r}`;
  $("#pos").textContent=`${p.d} / ${DATA.length}`;
  $("#chips").innerHTML=p.t.map(x=>`<span class="chip">${x}</span>`).join("");
  $("#names").innerHTML=[
    ["English",p.e],
    ["Français",p.f],
    ["日本語",p.j],
    ["Romanization",p.r]
  ].map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("");

  const labs=["HP / PV","Attack / Attaque","Defense / Défense","Sp. Atk / Atq. Spé.","Sp. Def / Déf. Spé.","Speed / Vitesse"];
  $("#ev").innerHTML=p.v.map((x,i)=>`<div><small>${labs[i]}</small><strong>${x}</strong></div>`).join("");

  const reviewed=Array.isArray(p.x)&&p.x.length>0;
  $("#comparison-section").hidden=!reviewed;
  $("#roots-section").hidden=!reviewed;
  $("#pending-section").hidden=reviewed;
  if(reviewed){
    const ll=["日本語 — Japanese","Français — French","English"];
    $("#ety").innerHTML=p.x.map((x,i)=>`
      <article>
        <h4>${ll[i]}</h4>
        <p class="roots"><strong>Roots:</strong> ${x[0]}</p>
        <p>${x[1]}</p>
        <span class="confidence">${x[2]} confidence</span>
      </article>`).join("");
    $("#compare").textContent=p.c;
  }

  $("#prev").disabled=p.d===1;
  $("#next").disabled=p.d===DATA.length;
  $("#browse").hidden=true;
  $("#detail").hidden=false;
  document.title=`${p.e} · Poké Etymology`;
  scrollTo(0,0);
}

function closeEntry(){
  history.replaceState(null,"",`${location.pathname}#explore`);
  $("#detail").hidden=true;
  $("#browse").hidden=false;
  document.title="Poké Etymology";
  requestAnimationFrame(()=>$("#explore").scrollIntoView());
}

$("#q").addEventListener("input",filter);
$("#list").addEventListener("click",e=>{
  const b=e.target.closest("[data-d]");
  if(b) show(b.dataset.d);
});
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{
  lang=b.dataset.lang;
  document.querySelectorAll("[data-lang]").forEach(x=>{
    const selected=x===b;
    x.classList.toggle("on",selected);
    x.setAttribute("aria-pressed",String(selected));
  });
  draw();
}));
$("#back").addEventListener("click",closeEntry);
$("#prev").addEventListener("click",()=>show(current.d-1));
$("#next").addEventListener("click",()=>show(current.d+1));
addEventListener("keydown",e=>{
  if($("#detail").hidden) return;
  if(e.key==="Escape") closeEntry();
  else if(e.key==="ArrowLeft"&&current.d>1) show(current.d-1);
  else if(e.key==="ArrowRight"&&current.d<DATA.length) show(current.d+1);
});
addEventListener("hashchange",()=>{
  const n=+location.hash.slice(1);
  if(n) show(n);
});

draw();
const initial=+location.hash.slice(1);
if(initial) show(initial);
