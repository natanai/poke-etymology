const LANGUAGE_KEY="poke-etymology-language";
const VALID_LANGUAGES=["e","f","j"];
const queryLanguage=new URLSearchParams(location.search).get("lang");
let lang=VALID_LANGUAGES.includes(queryLanguage)
  ? queryLanguage
  : (VALID_LANGUAGES.includes(localStorage.getItem(LANGUAGE_KEY)) ? localStorage.getItem(LANGUAGE_KEY) : "e");
if(VALID_LANGUAGES.includes(queryLanguage)) localStorage.setItem(LANGUAGE_KEY,queryLanguage);

const REFERENCE_DATA=typeof REFERENCE_POKEMON!=="undefined" ? REFERENCE_POKEMON : [];
const ALL_POKEMON=[...DATA,...REFERENCE_DATA];
let filtered=DATA;
const $=selector=>document.querySelector(selector);
const pad=value=>String(value).padStart(3,"0");
const norm=value=>String(value).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();
const esc=value=>String(value)
  .replaceAll("&","&amp;")
  .replaceAll("<","&lt;")
  .replaceAll(">","&gt;")
  .replaceAll('"',"&quot;")
  .replaceAll("'","&#039;");

function findPokemon(id){
  return ALL_POKEMON.find(item=>item.d===Number(id));
}

function displayName(pokemon){
  return lang==="j" ? `${pokemon.j} (${pokemon.r})` : pokemon[lang];
}

function renderDetails(pokemon){
  const reviewed=Boolean(pokemon.reviewed || pokemon.x?.length);
  const audit=pokemon.audit || null;
  const associations=audit?.associations || (typeof ASSOCIATIONS!=="undefined" ? ASSOCIATIONS[pokemon.d] : null);
  const languages=[
    {label:"日本語",name:`${pokemon.j} (${pokemon.r})`},
    {label:"Français",name:pokemon.f},
    {label:"English",name:pokemon.e}
  ];
  const labels=["HP / PV","Attack / Attaque","Defense / Défense","Sp. Atk / Atq. Spé.","Sp. Def / Déf. Spé.","Speed / Vitesse"];

  const languageDetails=`
    <section class="entry-section language-section">
      <h3>Names & etymology</h3>
      <div class="language-list">
        ${languages.map((language,index)=>{
          const item=pokemon.x?.[index];
          const body=reviewed && item ? `
            <div class="language-body">
              <p class="roots"><strong>Roots:</strong> ${esc(item[0])}</p>
              <p>${esc(item[1])}</p>
              <p class="associations"><strong>May evoke:</strong> ${esc(associations?.[index] || "Association examples pending review.")}</p>
              <span class="confidence">${esc(item[2])}</span>
            </div>` : `
            <div class="language-body pending-language">
              <p>Roots, meaning, and native associations pending research.</p>
            </div>`;
          return `
            <details class="language-detail">
              <summary>
                <span class="language-label">${esc(language.label)}</span>
                <strong>${esc(language.name)}</strong>
                <span class="language-mark" aria-hidden="true"></span>
              </summary>
              ${body}
            </details>`;
        }).join("")}
      </div>
    </section>`;

  const comparison=reviewed && pokemon.c ? `
    <section class="entry-section comparison">
      <h3>Localization</h3>
      <p>${esc(pokemon.c)}</p>
    </section>` : "";

  const sources=audit?.sources?.length ? `
    <section class="entry-section sources-section">
      <details class="sources-detail">
        <summary>
          <span class="sources-label">Sources</span>
          <span class="sources-count">${audit.sources.length}</span>
          <span class="source-mark" aria-hidden="true"></span>
        </summary>
        <ul class="source-list">
          ${audit.sources.map(source=>`<li><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a></li>`).join("")}
        </ul>
      </details>
    </section>` : "";

  const status=audit
    ? `<span class="review-chip audited">Audited ${esc(audit.reviewedOn)}</span>`
    : `<span class="review-chip pending-chip">Research pending</span>`;

  return `
    <div class="inline-entry-head">
      <p class="eyebrow">National Pokédex #${pad(pokemon.d)}</p>
      <h3>${esc(pokemon.e)}</h3>
      <div class="entry-meta"><div class="chips">${pokemon.t.map(type=>`<span class="chip">${esc(type)}</span>`).join("")}</div>${status}</div>
    </div>
    ${languageDetails}
    ${comparison}
    <section class="entry-section">
      <h3>EV yield</h3>
      <div class="ev">${pokemon.v.map((value,index)=>`<div><small>${labels[index]}</small><strong>${value}</strong></div>`).join("")}</div>
    </section>
    ${sources}
    <div class="collapse-row">
      <button type="button" class="collapse-entry" data-collapse="${pokemon.d}" aria-label="Collapse entry">
        <span class="collapse-icon" aria-hidden="true">−</span>
      </button>
    </div>`;
}

function itemMarkup(pokemon){
  return `<li class="pokemon-item${pokemon.d>151?" reference-item":""}">
    <button type="button" class="entry-toggle" data-d="${pokemon.d}" aria-expanded="false" aria-controls="entry-${pad(pokemon.d)}">
      <span class="dex-no">#${pad(pokemon.d)}</span>
      <span class="entry-summary"><strong>${esc(displayName(pokemon))}</strong><small>${esc(pokemon.t.join(" / "))}</small></span>
      <span class="expand-mark" aria-hidden="true">＋</span>
    </button>
    <div id="entry-${pad(pokemon.d)}" class="entry-panel" hidden></div>
  </li>`;
}

function currentHashPokemon(){
  return findPokemon(Number(location.hash.slice(1)));
}

function draw(){
  const reference=currentHashPokemon();
  const rows=[...filtered];
  if(reference && reference.d>151 && !rows.some(item=>item.d===reference.d)) rows.unshift(reference);
  $("#list").innerHTML=rows.map(itemMarkup).join("");
  $("#count").textContent=`${filtered.length} ${filtered.length===1?"entry":"entries"}`;
  $("#none").hidden=filtered.length>0 || Boolean(reference);
}

function filter(){
  const query=norm($("#q").value.trim());
  filtered=DATA.filter(pokemon=>norm([pokemon.d,pad(pokemon.d),pokemon.e,pokemon.f,pokemon.j,pokemon.r,...pokemon.t].join(" ")).includes(query));
  draw();
}

function toggle(button,forceOpen){
  const pokemon=findPokemon(button.dataset.d);
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

function syncLanguageButtons(){
  document.querySelectorAll("[data-lang]").forEach(item=>{
    const selected=item.dataset.lang===lang;
    item.classList.toggle("on",selected);
    item.setAttribute("aria-pressed",String(selected));
  });
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
  localStorage.setItem(LANGUAGE_KEY,lang);
  syncLanguageButtons();
  draw();
}));

syncLanguageButtons();
draw();
const initial=Number(location.hash.slice(1));
if(initial){
  const initialButton=document.querySelector(`[data-d="${initial}"]`);
  if(initialButton){
    toggle(initialButton,true);
    requestAnimationFrame(()=>initialButton.closest(".pokemon-item")?.scrollIntoView({block:"start"}));
  }
}
