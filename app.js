let lang="e", filtered=DATA;
const $=selector=>document.querySelector(selector);
const pad=value=>String(value).padStart(3,"0");
const norm=value=>String(value).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();
const esc=value=>String(value)
  .replaceAll("&","&amp;")
  .replaceAll("<","&lt;")
  .replaceAll(">","&gt;")
  .replaceAll('"',"&quot;")
  .replaceAll("'","&#039;");

function displayName(pokemon){
  return lang==="j" ? `${pokemon.j} (${pokemon.r})` : pokemon[lang];
}

function renderDetails(pokemon){
  const reviewed=Boolean(pokemon.reviewed || pokemon.x?.length);
  const audit=pokemon.audit || null;
  const associations=audit?.associations || (typeof ASSOCIATIONS!=="undefined" ? ASSOCIATIONS[pokemon.d] : null);
  const languages=["日本語 — Japanese","Français — French","English"];
  const labels=["HP / PV","Attack / Attaque","Defense / Défense","Sp. Atk / Atq. Spé.","Sp. Def / Déf. Spé.","Speed / Vitesse"];

  const etymology=reviewed ? `
    <section class="entry-section">
      <h3>Roots, meaning & native associations</h3>
      <div class="ety">
        ${pokemon.x.map((item,index)=>`
          <article>
            <h4>${languages[index]}</h4>
            <p class="roots"><strong>Roots:</strong> ${esc(item[0])}</p>
            <p>${esc(item[1])}</p>
            <p class="associations"><strong>May evoke:</strong> ${esc(associations?.[index] || "Association examples pending review.")}</p>
            <span class="confidence">${esc(item[2])}</span>
          </article>`).join("")}
      </div>
    </section>` : `
    <section class="entry-section pending">
      <h3>Etymology</h3>
      <p>Roots, native associations, and localization comparison pending research.</p>
    </section>`;

  const comparison=reviewed && pokemon.c ? `
    <section class="entry-section comparison">
      <h3>Localization</h3>
      <p>${esc(pokemon.c)}</p>
    </section>` : "";

  const sources=audit?.sources?.length ? `
    <section class="entry-section sources-section">
      <h3>Sources</h3>
      <ul class="source-list">
        ${audit.sources.map(source=>`<li><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a></li>`).join("")}
      </ul>
    </section>` : "";

  const status=audit
    ? `<span class="review-chip audited">Audited ${esc(audit.reviewedOn)}</span>`
    : `<span class="review-chip pending-chip">Research pending</span>`;

  return `
    <div class="inline-entry-head">
      <p class="eyebrow">National Pokédex #${pad(pokemon.d)}</p>
      <h3>${esc(pokemon.e)}</h3>
      <p>${esc(pokemon.f)} · ${esc(pokemon.j)} — ${esc(pokemon.r)}</p>
      <div class="entry-meta"><div class="chips">${pokemon.t.map(type=>`<span class="chip">${esc(type)}</span>`).join("")}</div>${status}</div>
    </div>
    ${comparison}
    <section class="entry-section">
      <h3>Names</h3>
      <div class="names">
        ${[["English",pokemon.e],["Français",pokemon.f],["日本語",pokemon.j],["Romanization",pokemon.r]]
          .map(([label,value])=>`<div style="grid-template-columns:minmax(0,1fr);gap:2px"><strong style="min-width:0;font-size:10px;text-transform:uppercase;color:var(--muted);overflow-wrap:anywhere">${label}</strong><span style="min-width:0;overflow-wrap:anywhere;word-break:break-word">${esc(value)}</span></div>`).join("")}
      </div>
    </section>
    ${etymology}
    <section class="entry-section">
      <h3>EV yield</h3>
      <div class="ev">${pokemon.v.map((value,index)=>`<div><small>${labels[index]}</small><strong>${value}</strong></div>`).join("")}</div>
    </section>
    ${sources}
    <div class="collapse-row"><button type="button" class="btn collapse-entry" data-collapse="${pokemon.d}">Collapse entry</button></div>`;
}

function draw(){
  $("#list").innerHTML=filtered.map(pokemon=>`
    <li class="pokemon-item">
      <button type="button" class="entry-toggle" data-d="${pokemon.d}" aria-expanded="false" aria-controls="entry-${pad(pokemon.d)}">
        <span class="dex-no">#${pad(pokemon.d)}</span>
        <span class="entry-summary"><strong>${esc(displayName(pokemon))}</strong><small>${esc(pokemon.t.join(" / "))}</small></span>
        <span class="expand-mark" aria-hidden="true">＋</span>
      </button>
      <div id="entry-${pad(pokemon.d)}" class="entry-panel" hidden></div>
    </li>`).join("");
  $("#count").textContent=`${filtered.length} ${filtered.length===1?"entry":"entries"}`;
  $("#none").hidden=filtered.length>0;
}

function filter(){
  const query=norm($("#q").value.trim());
  filtered=DATA.filter(pokemon=>norm([pokemon.d,pad(pokemon.d),pokemon.e,pokemon.f,pokemon.j,pokemon.r,...pokemon.t].join(" ")).includes(query));
  draw();
}

function toggle(button,forceOpen){
  const pokemon=DATA.find(item=>item.d===Number(button.dataset.d));
  if(!pokemon) return;
  const panel=document.getElementById(button.getAttribute("aria-controls"));
  const open=forceOpen ?? button.getAttribute("aria-expanded")!=="true";
  if(open && !panel.dataset.loaded){
    panel.innerHTML=renderDetails(pokemon);
    panel.dataset.loaded="true";
  }
  button.setAttribute("aria-expanded",String(open));
  button.querySelector(".expand-mark").textContent=open?"−":"＋";
  panel.hidden=!open;
}

$("#q").addEventListener("input",filter);
$("#list").addEventListener("click",event=>{
  const toggleButton=event.target.closest(".entry-toggle");
  if(toggleButton){
    toggle(toggleButton);
    return;
  }
  const collapseButton=event.target.closest("[data-collapse]");
  if(collapseButton){
    const item=collapseButton.closest(".pokemon-item");
    const button=item.querySelector(".entry-toggle");
    toggle(button,false);
    button.focus({preventScroll:true});
  }
});

document.querySelectorAll("[data-lang]").forEach(button=>button.addEventListener("click",()=>{
  lang=button.dataset.lang;
  document.querySelectorAll("[data-lang]").forEach(item=>{
    const selected=item===button;
    item.classList.toggle("on",selected);
    item.setAttribute("aria-pressed",String(selected));
  });
  draw();
}));

draw();
const initial=Number(location.hash.slice(1));
if(initial){
  const initialButton=document.querySelector(`[data-d="${initial}"]`);
  if(initialButton) toggle(initialButton,true);
}
