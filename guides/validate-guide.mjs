import {readFile} from "node:fs/promises";
import vm from "node:vm";

const root=new URL("../",import.meta.url);
const guideRoot=new URL("./",import.meta.url);
const context=vm.createContext({console});

async function run(path,exportName,globalName){
  const source=await readFile(new URL(path,root),"utf8");
  const suffix=exportName ? `\nglobalThis.${globalName}=${exportName};` : "";
  vm.runInContext(source+suffix,context,{filename:path});
  return exportName ? context[globalName] : undefined;
}

const data=await run("data.js","DATA","DATA_EXPORT");
await run("generated-data.js");
await run("generation-ii-data.js");
const references=await run("reference-data.js","REFERENCE_POKEMON","REFERENCE_EXPORT");
const opening=await run("guides/guide-stages-opening.js","OPENING_STAGES","OPENING_EXPORT");
const moon=await run("guides/guide-stages-moon.js","MOON_STAGES","MOON_EXPORT");
const cerulean=await run("guides/guide-stages-cerulean.js","CERULEAN_STAGES","CERULEAN_EXPORT");
const vermilion=await run("guides/guide-stages-vermilion.js","VERMILION_STAGES","VERMILION_EXPORT");
await run("guides/guide-stages-rock-tunnel-celadon.js","ROCK_TUNNEL_CELADON_STAGES","ROCK_TUNNEL_CELADON_EXPORT");
await run("guides/guide-stages-celadon-tower.js","CELADON_TOWER_STAGES","CELADON_TOWER_EXPORT");
await run("guides/guide-stages-route12-fuchsia.js","ROUTE12_FUCHSIA_STAGES","ROUTE12_FUCHSIA_EXPORT");

const stages=[...opening,...moon,...cerulean,...vermilion];
const allowedGroups=new Set(["Catch","Story","Items"]);
const stageIds=new Set();
const taskIds=new Set();
const publishedIds=new Set(data.map(item=>Number(item.d)));
const pokemonIds=new Set([...data,...references].map(item=>Number(item.d)));
const errors=[];

if(stages.length!==36) errors.push(`Expected 36 stages, found ${stages.length}.`);
for(const reference of references){
  if(publishedIds.has(Number(reference.d))) errors.push(`Reference Pokémon [[${reference.d}]] duplicates a published DATA record.`);
}

for(const stage of stages){
  if(!stage.id || !stage.tab || !stage.title || !stage.subtitle || !Array.isArray(stage.tasks)){
    errors.push(`Malformed stage: ${stage.id || "<missing id>"}.`);
    continue;
  }
  if(stageIds.has(stage.id)) errors.push(`Duplicate stage id: ${stage.id}.`);
  stageIds.add(stage.id);
  for(const task of stage.tasks){
    const variants=task.variants ? Object.values(task.variants) : [];
    const hasTitle=Boolean(task.title) || (variants.length>0 && variants.every(variant=>Boolean(variant.title)));
    if(!task.id || !task.group || !hasTitle) errors.push(`Malformed task in ${stage.id}.`);
    if(taskIds.has(task.id)) errors.push(`Duplicate task id: ${task.id}.`);
    taskIds.add(task.id);
    if(!allowedGroups.has(task.group)) errors.push(`Unsupported task group ${task.group} in ${task.id}.`);
    const values=[task.title,task.meta,task.detail];
    for(const variant of variants) values.push(variant.title,variant.meta,variant.detail);
    for(const value of values.filter(Boolean)){
      for(const match of String(value).matchAll(/\[\[(\d+)\]\]/g)){
        const id=Number(match[1]);
        if(!pokemonIds.has(id)) errors.push(`Unknown Pokémon token [[${id}]] in ${task.id}.`);
      }
    }
  }
  if(stage.drawer?.text){
    for(const match of String(stage.drawer.text).matchAll(/\[\[(\d+)\]\]/g)){
      const id=Number(match[1]);
      if(!pokemonIds.has(id)) errors.push(`Unknown Pokémon token [[${id}]] in ${stage.id} drawer.`);
    }
  }
}

const html=await readFile(new URL("firered-leafgreen.html",guideRoot),"utf8");
const orderedScripts=[
  "../data.js",
  "../generated-data.js",
  "../generation-ii-data.js",
  "../reference-data.js",
  "guide-stages-opening.js",
  "guide-stages-moon.js",
  "guide-stages-cerulean.js",
  "guide-stages-vermilion.js",
  "guide-stages-rock-tunnel-celadon.js",
  "guide-stages-celadon-tower.js",
  "guide-stages-route12-fuchsia.js",
  "guide-i18n.js",
  "guide-i18n-vermilion.js",
  "guide-i18n-rock-tunnel-celadon.js",
  "guide-i18n-celadon-tower.js",
  "guide-i18n-route12-fuchsia.js",
  "guide-copy-overrides.js",
  "guide.js",
  "guide-touch.js"
];
let previous=-1;
for(const script of orderedScripts){
  const index=html.indexOf(script);
  if(index<0) errors.push(`Missing script in HTML: ${script}.`);
  if(index<=previous) errors.push(`Incorrect script order near ${script}.`);
  previous=index;
}

if(errors.length){
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${stages.length} stages, ${taskIds.size} unique tasks, and all Pokémon tokens.`);
