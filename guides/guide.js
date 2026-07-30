const STORAGE_KEY="poke-etymology-frlg-guide-v1";
const GROUP_ORDER=["Catch","Story","Items"];

const STAGES=[
  {
    id:"route-4",
    tab:"Route 4",
    title:"Route 4",
    subtitle:"Mount Moon exit",
    warning:"ONE-WAY: finish this stage before jumping the final ledge into Azuria.",
    drawer:{title:"One-use tutors",text:"The two Black Belts teach Ultimapoing (Mega Punch) and Ultimawashi (Mega Kick). Each can be used only once. Leave them unused unless you have a deliberate recipient."},
    tasks:[
      {
        id:"route4-exclusive",
        group:"Catch",
        variants:{
          fr:{title:"Abo (Ekans) ×2",meta:"25% · Lv. 6–12 · +1 Attack EV",detail:"Keep one Abo. Evolve the second into Arbok at level 22. Catch or flee from extras if you are avoiding Attack EVs."},
          lg:{title:"Sabelette (Sandshrew) ×2",meta:"25% · Lv. 6–12 · +1 Defense EV",detail:"Keep one Sabelette. Evolve the second into Sablaireau (Sandslash) at level 22."}
        }
      },
      {id:"route4-roar",group:"Items",title:"CT05 Hurlement (TM05 Roar)",meta:"Visible · eastern hill",detail:"Take the item ball on the second-highest level of the eastern hill."},
      {id:"route4-great-ball",group:"Items",title:"Super Ball (Great Ball)",meta:"Hidden · northwest corner",detail:"Check the corner west of the northwest hill.",optional:true},
      {id:"route4-razz",group:"Items",title:"Baie Framby (Razz Berry)",meta:"Hidden · south-central ledge",detail:"Check the tile south of the easternmost of the three ledges.",optional:true},
      {id:"route4-leave",group:"Story",title:"Cross the final ledge",meta:"Continue east to Azuria",detail:"Once you drop into the city, you cannot walk back west through Route 4 until much later."}
    ]
  },
  {
    id:"cerulean",
    tab:"Azuria",
    title:"Azuria (Cerulean City)",
    subtitle:"Prepare before Route 24",
    warning:"Your rival battles you as soon as you walk north toward Route 24.",
    tasks:[
      {id:"cerulean-heal",group:"Story",title:"Heal and restock balls",meta:"Abra is ahead",detail:"Carry enough Poké Balls or Super Balls to throw immediately when Abra appears."},
      {id:"cerulean-save",group:"Story",title:"Save before walking north",meta:"Rival battle",detail:"The rival leads with Roucoups (Pidgeotto) at level 17, followed by Abra level 16, Rattata level 15, and the starter at level 18."},
      {id:"cerulean-rival",group:"Story",title:"Defeat the rival",meta:"North exit",detail:"Electric or Rock attacks help against Roucoups. Abra knows only Téléport (Teleport), so it is a safe moment to give experience to a weaker party member."}
    ]
  },
  {
    id:"routes-24-25",
    tab:"Routes 24–25",
    title:"Routes 24–25",
    subtitle:"Nugget Bridge and the cape",
    tasks:[
      {
        id:"route24-exclusive",
        group:"Catch",
        variants:{
          fr:{title:"Mystherbe (Oddish) ×4",meta:"25% · Lv. 12–14 · +1 Sp. Atk EV",detail:"Reserve one each for Mystherbe, Ortide (Gloom), Rafflesia (Vileplume), and Joliflor (Bellossom). The final branch needs a Sun Stone much later."},
          lg:{title:"Chétiflor (Bellsprout) ×3",meta:"25% · Lv. 12–14 · +1 Attack EV",detail:"Reserve one each for Chétiflor, Boustiflor (Weepinbell), and Empiflor (Victreebel)."}
        }
      },
      {id:"route24-abra",group:"Catch",title:"Abra ×3",meta:"15% · Lv. 8–13 · +1 Sp. Atk EV",detail:"Reserve Abra, Kadabra, and Alakazam. Throw a ball immediately: wild Abra normally uses Téléport (Teleport) on its first turn. Alakazam requires trading Kadabra."},
      {id:"route24-bridge",group:"Story",title:"Clear Nugget Bridge",meta:"Five trainers + Team Rocket",detail:"The sixth battle is the Team Rocket recruiter at the north end of the bridge."},
      {id:"route24-nugget",group:"Items",title:"Pépite (Nugget)",meta:"Bridge reward",detail:"The recruiter gives it before revealing Team Rocket. It can be sold for money."},
      {id:"route24-attract",group:"Items",title:"CT45 Attraction (TM45 Attract)",meta:"Northwest plateau",detail:"Collect it near the grassy area north of Nugget Bridge."},
      {id:"route25-secret",group:"Items",title:"CT43 Force Cachée (TM43 Secret Power)",meta:"Route 25 maze",detail:"Defeat Camper Flint from the correct side so he moves away from the item. If blocked, it remains obtainable later with Coupe (Cut)."},
      {id:"route25-hidden",group:"Items",title:"Hidden-item sweep",meta:"Elixir · berries · Ether",detail:"Route 25 also hides an Elixir, Baie Oran (Oran Berry), Baie Remu (Bluk Berry), and Ether.",optional:true}
    ]
  },
  {
    id:"bill-return",
    tab:"Léo",
    title:"Léo and the return",
    subtitle:"Sea Cottage to Azuria",
    tasks:[
      {id:"bill-help",group:"Story",title:"Help Léo (Bill)",meta:"Operate his PC",detail:"Speak to the Pokémon inside the cottage. After Léo enters the machine, use the computer to reverse the experiment."},
      {id:"bill-ticket",group:"Items",title:"Passe Bateau (S.S. Ticket)",meta:"Reward from Léo",detail:"This grants access to the S.S. Anne in Carmin sur Mer (Vermilion City)."},
      {id:"bill-pc",group:"Story",title:"Inspect Léo’s PC again",meta:"Adds four Pokédex pages",detail:"Exit and re-enter the cottage, then inspect the PC to register Eevee, Aquali (Vaporeon), Voltali (Jolteon), and Pyroli (Flareon) as seen.",optional:true},
      {id:"cerulean-rocket",group:"Story",title:"Defeat the Rocket burglar",meta:"House in northeast Azuria",detail:"After helping Léo, the officer moves aside. Enter the damaged house and confront the grunt behind it."},
      {id:"cerulean-dig",group:"Items",title:"CT28 Tunnel (TM28 Dig)",meta:"Recovered from the burglar",detail:"The Rocket grunt returns the stolen TM after the battle."}
    ]
  },
  {
    id:"gym-route5",
    tab:"Gym → Route 5",
    title:"Arène d’Azuria",
    subtitle:"Ondine and the south exit",
    tasks:[
      {id:"misty-win",group:"Story",title:"Defeat Ondine (Misty)",meta:"Stari Lv. 18 · Staross Lv. 21",detail:"Grass and Electric attacks are effective. Staross is substantially faster and stronger than Stari."},
      {id:"misty-badge",group:"Items",title:"Badge Cascade (Cascade Badge)",meta:"Gym reward",detail:"It enables Coupe (Cut) in the field once you obtain the HM and ensures obedience through level 30."},
      {id:"misty-water-pulse",group:"Items",title:"CT03 Vibraqua (TM03 Water Pulse)",meta:"Gym reward",detail:"This TM is single-use in FireRed and LeafGreen, so save it until you have chosen a long-term recipient."},
      {id:"route5-enter",group:"Story",title:"Enter Route 5",meta:"Next leg: Carmin sur Mer",detail:"Proceed through the Underground Path toward Route 6 and Vermilion City."}
    ]
  }
];

function loadState(){
  try{
    const parsed=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(parsed && typeof parsed==="object") return parsed;
  }catch(error){}
  return {version:"fr",stage:0,checks:{fr:{},lg:{}}};
}

const state=loadState();
if(!["fr","lg"].includes(state.version)) state.version="fr";
if(!Number.isInteger(state.stage) || state.stage<0 || state.stage>=STAGES.length) state.stage=0;
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

function resolvedTask(task){
  return task.variants ? {...task,...task.variants[state.version]} : task;
}

function allRequiredTasks(){
  return STAGES.flatMap(stage=>stage.tasks).filter(task=>!task.optional);
}

function renderProgress(){
  const tasks=allRequiredTasks();
  const completed=tasks.filter(task=>state.checks[state.version][task.id]).length;
  $("#guide-progress").textContent=`${completed} / ${tasks.length}`;
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

function taskMarkup(rawTask){
  const task=resolvedTask(rawTask);
  const checked=Boolean(state.checks[state.version][task.id]);
  const detailId=`detail-${task.id}`;
  return `<div class="guide-task${checked?" done":""}" data-task-row="${esc(task.id)}">
    <label class="task-check">
      <input type="checkbox" data-task="${esc(task.id)}" ${checked?"checked":""}>
      <span class="task-box" aria-hidden="true"></span>
      <span class="task-copy">
        <strong>${esc(task.title)}${task.optional?'<span class="optional-tag">optional</span>':""}</strong>
        <small>${esc(task.meta || "")}</small>
      </span>
    </label>
    ${task.detail?`<button type="button" class="task-more" aria-expanded="false" aria-controls="${detailId}" aria-label="Show details">+</button>`:""}
    ${task.detail?`<div id="${detailId}" class="task-detail" hidden><p>${esc(task.detail)}</p></div>`:""}
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
    ${groups.map(({group,tasks})=>`<section class="task-group"><h3>${esc(group)}</h3>${tasks.map(taskMarkup).join("")}</section>`).join("")}
    ${stage.drawer?`<details class="stage-drawer"><summary><span>${esc(stage.drawer.title)}</span><span class="drawer-mark" aria-hidden="true"></span></summary><p>${esc(stage.drawer.text)}</p></details>`:""}`;
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
  const input=event.target.closest("[data-task]");
  if(!input) return;
  state.checks[state.version][input.dataset.task]=input.checked;
  saveState();
  const row=input.closest(".guide-task");
  row?.classList.toggle("done",input.checked);
  renderProgress();
});

$("#stage-panel").addEventListener("click",event=>{
  const button=event.target.closest(".task-more");
  if(!button) return;
  const detail=document.getElementById(button.getAttribute("aria-controls"));
  const open=button.getAttribute("aria-expanded")!=="true";
  button.setAttribute("aria-expanded",String(open));
  button.setAttribute("aria-label",open?"Hide details":"Show details");
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
