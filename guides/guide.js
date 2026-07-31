const STORAGE_KEY="poke-etymology-frlg-guide-v2";
const LEGACY_STORAGE_KEY="poke-etymology-frlg-guide-v1";
const LANGUAGE_KEY="poke-etymology-language";
const VALID_LANGUAGES=["e","f","j"];
const PRIMARY_LANGUAGE=VALID_LANGUAGES.includes(localStorage.getItem(LANGUAGE_KEY)) ? localStorage.getItem(LANGUAGE_KEY) : "e";
const GUIDE_UI={
  e:{groups:{Catch:"Catch",Story:"Story",Items:"Items"},optional:"optional",markComplete:"Mark task complete",showDetails:"Show details",hideDetails:"Hide details",starterTitle:"First partner → postgame roamer",starterNote:"The beast begins roaming after the postgame Network Machine quest. Your choice cannot be changed in this save.",select:"Select"},
  f:{groups:{Catch:"Captures",Story:"Parcours",Items:"Objets"},optional:"facultatif",markComplete:"Marquer comme terminé",showDetails:"Afficher les détails",hideDetails:"Masquer les détails",starterTitle:"Premier partenaire → Pokémon errant d’après-jeu",starterNote:"Le Pokémon légendaire commence à errer après la quête d’après-jeu de la Machine réseau. Ce choix ne peut pas être modifié dans cette sauvegarde.",select:"Choisir"},
  j:{groups:{Catch:"捕獲",Story:"進行",Items:"道具"},optional:"任意",markComplete:"完了にする",showDetails:"詳細を表示",hideDetails:"詳細を隠す",starterTitle:"最初のパートナー → クリア後の徘徊ポケモン",starterNote:"クリア後のネットワークマシンのイベントを終えると徘徊を始めます。このセーブデータでは選び直せません。",select:"選ぶ"}
}[PRIMARY_LANGUAGE];
const ALL_POKEMON=[...DATA,...(typeof REFERENCE_POKEMON!=="undefined" ? REFERENCE_POKEMON : [])];
const GROUP_ORDER=["Catch","Story","Items"];

const STARTER_CHOICES=[
  {starter:1,roamer:244},
  {starter:4,roamer:245},
  {starter:7,roamer:243}
];

const STAGES=[...OPENING_STAGES,...MOON_STAGES,...CERULEAN_STAGES,...VERMILION_STAGES];

function loadState(){
  try{
    const current=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(current && typeof current==="object") return current;
  }catch(error){}
  try{
    const legacy=JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
    if(legacy && typeof legacy==="object") return {...legacy,stage:(Number(legacy.stage)||0)+9,starter:null};
  }catch(error){}
  return {version:"fr",stage:0,starter:null,checks:{fr:{},lg:{}}};
}

const state=loadState();
if(!["fr","lg"].includes(state.version)) state.version="fr";
if(!Number.isInteger(state.stage) || state.stage<0 || state.stage>=STAGES.length) state.stage=0;
if(![1,4,7].includes(state.starter)) state.starter=null;
state.checks=state.checks || {fr:{},lg:{}};
state.checks.fr=state.checks.fr || {};
state.checks.lg=state.checks.lg || {};

const $=selector=>document.querySelector(selector);
const esc=value=>String(value)
  .replaceAll("&","&amp;")
  .replaceAll("<","&lt;")
  .replaceAll(">","&gt;")
  .replaceAll('"',"&quot;")
  .replaceAll("'","&#039;");

function saveState(){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
}

function pokemon(id){
  return ALL_POKEMON.find(item=>item.d===Number(id));
}

function pokemonName(id){
  const item=pokemon(id);
  if(!item) return `#${String(id).padStart(3,"0")}`;
  return PRIMARY_LANGUAGE==="j" ? `${item.j} (${item.r})` : item[PRIMARY_LANGUAGE];
}

function pokemonLink(id){
  const item=pokemon(id);
  const name=pokemonName(id);
  if(!item) return `<span>${esc(name)}</span>`;
  return `<a class="pokemon-link" href="../?lang=${PRIMARY_LANGUAGE}#${item.d}">${esc(name)}</a>`;
}

function richText(value){
  const text=String(value ?? "");
  let output="";
  let cursor=0;
  for(const match of text.matchAll(/\[\[(\d+)\]\]/g)){
    output+=esc(text.slice(cursor,match.index));
    output+=pokemonLink(Number(match[1]));
    cursor=match.index+match[0].length;
  }
  return output+esc(text.slice(cursor));
}

function resolvedTask(task){
  return task.variants ? {...task,...task.variants[state.version]} : task;
}

function allRequiredTasks(){
  return STAGES.flatMap(stage=>stage.tasks).filter(task=>!task.optional);
}

function renderProgress(){
  const tasks=allRequiredTasks();
  const taskCompleted=tasks.filter(task=>state.checks[state.version][task.id]).length;
  const total=tasks.length+1;
  const completed=taskCompleted+(state.starter?1:0);
  $("#guide-progress").textContent=`${completed} / ${total}`;
}

function renderVersion(){
  document.querySelectorAll("[data-version]").forEach(button=>{
    const selected=button.dataset.version===state.version;
    button.setAttribute("aria-pressed",String(selected));
  });
}

function renderStageNav(){
  $("#stage-nav").innerHTML=STAGES.map((stage,index)=>`
    <button type="button" class="stage-tab" data-stage="${index}" ${index===state.stage?'aria-current="step"':''}>${esc(stage.tab)}</button>`).join("");
  const active=$("#stage-nav [aria-current='step']");
  active?.scrollIntoView({block:"nearest",inline:"center"});
}

function starterMarkup(){
  return `<section class="starter-picker" aria-labelledby="starter-title">
    <h3 id="starter-title">${esc(GUIDE_UI.starterTitle)}</h3>
    <div class="starter-options">
      ${STARTER_CHOICES.map(choice=>{
        const selected=state.starter===choice.starter;
        return `<div class="starter-option${selected?" selected":""}">
          <input id="starter-${choice.starter}" type="radio" name="starter" value="${choice.starter}" ${selected?"checked":""}>
          <label for="starter-${choice.starter}" aria-label="${esc(`${GUIDE_UI.select} ${pokemonName(choice.starter)}`)}"></label>
          <span class="starter-name">${pokemonLink(choice.starter)}</span>
          <span class="roamer-name">→ ${pokemonLink(choice.roamer)}</span>
        </div>`;
      }).join("")}
    </div>
    <p class="starter-note">${esc(GUIDE_UI.starterNote)}</p>
  </section>`;
}

function taskMarkup(rawTask){
  const task=resolvedTask(rawTask);
  const checked=Boolean(state.checks[state.version][task.id]);
  const detailId=`detail-${task.id}`;
  const checkId=`check-${task.id}`;
  return `<div class="guide-task${checked?" done":""}" data-task-row="${esc(task.id)}">
    <div class="task-check">
      <input id="${checkId}" type="checkbox" data-task="${esc(task.id)}" aria-label="${esc(GUIDE_UI.markComplete)}" ${checked?"checked":""}>
      <label class="task-box" for="${checkId}" aria-hidden="true"></label>
      <span class="task-copy">
        <strong>${richText(task.title)}${task.optional?`<span class="optional-tag">${esc(GUIDE_UI.optional)}</span>`:""}</strong>
        <small>${richText(task.meta || "")}</small>
      </span>
    </div>
    ${task.detail?`<button type="button" class="task-more" aria-expanded="false" aria-controls="${detailId}" aria-label="${esc(GUIDE_UI.showDetails)}">+</button>`:""}
    ${task.detail?`<div id="${detailId}" class="task-detail" hidden><p>${richText(task.detail)}</p></div>`:""}
  </div>`;
}

function renderStage(){
  const stage=STAGES[state.stage];
  const groups=GROUP_ORDER.map(group=>({group,tasks:stage.tasks.filter(task=>task.group===group)})).filter(item=>item.tasks.length);
  $("#stage-panel").innerHTML=`
    <header class="stage-head">
      <p class="eyebrow">${String(state.stage+1).padStart(2,"0")} / ${String(STAGES.length).padStart(2,"0")} · ${esc(stage.subtitle)}</p>
      <h2 id="guide-stage-title">${esc(stage.title)}</h2>
    </header>
    ${stage.warning?`<p class="stage-warning">${esc(stage.warning)}</p>`:""}
    ${stage.starterPicker?starterMarkup():""}
    ${groups.map(({group,tasks})=>`<section class="task-group"><h3>${esc(GUIDE_UI.groups[group] || group)}</h3>${tasks.map(taskMarkup).join("")}</section>`).join("")}
    ${stage.drawer?`<details class="stage-drawer"><summary><span>${esc(stage.drawer.title)}</span><span class="drawer-mark" aria-hidden="true"></span></summary><p>${richText(stage.drawer.text)}</p></details>`:""}`;
  $("#previous-stage").disabled=state.stage===0;
  $("#next-stage").disabled=state.stage===STAGES.length-1;
  $("#stage-position").textContent=`${state.stage+1} / ${STAGES.length}`;
}

function render(){
  renderVersion();
  renderStageNav();
  renderStage();
  renderProgress();
}

$(".version-picker").addEventListener("click",event=>{
  const button=event.target.closest("[data-version]");
  if(!button || button.dataset.version===state.version) return;
  state.version=button.dataset.version;
  saveState();
  render();
});

$("#stage-nav").addEventListener("click",event=>{
  const button=event.target.closest("[data-stage]");
  if(!button) return;
  state.stage=Number(button.dataset.stage);
  saveState();
  render();
});

$("#stage-panel").addEventListener("change",event=>{
  const starter=event.target.closest("input[name='starter']");
  if(starter){
    state.starter=Number(starter.value);
    saveState();
    renderStage();
    renderProgress();
    return;
  }
  const input=event.target.closest("[data-task]");
  if(!input) return;
  state.checks[state.version][input.dataset.task]=input.checked;
  saveState();
  const row=input.closest(".guide-task");
  row?.classList.toggle("done",input.checked);
  renderProgress();
});

$("#stage-panel").addEventListener("click",event=>{
  if(event.target.closest(".pokemon-link")) return;
  const button=event.target.closest(".task-more");
  if(!button) return;
  const detail=document.getElementById(button.getAttribute("aria-controls"));
  const open=button.getAttribute("aria-expanded")!=="true";
  button.setAttribute("aria-expanded",String(open));
  button.setAttribute("aria-label",open?GUIDE_UI.hideDetails:GUIDE_UI.showDetails);
  button.textContent=open?"−":"+";
  detail.hidden=!open;
});

$("#previous-stage").addEventListener("click",()=>{
  if(state.stage===0) return;
  state.stage-=1;
  saveState();
  render();
  $(".guide-app").scrollIntoView({behavior:"smooth",block:"start"});
});

$("#next-stage").addEventListener("click",()=>{
  if(state.stage===STAGES.length-1) return;
  state.stage+=1;
  saveState();
  render();
  $(".guide-app").scrollIntoView({behavior:"smooth",block:"start"});
});

render();