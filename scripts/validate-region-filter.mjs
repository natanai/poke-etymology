import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {fileURLToPath} from "node:url";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,"..");
const errors=[];

function loadScript(context,file){
  const source=fs.readFileSync(path.join(root,file),"utf8");
  vm.runInContext(source,context,{filename:file});
}

function expectEqual(actual,expected,label){
  if(JSON.stringify(actual)!==JSON.stringify(expected)){
    errors.push(`${label}: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`);
  }
}

const context=vm.createContext({console});
loadScript(context,"data.js");
loadScript(context,"generated-data.js");
loadScript(context,"generation-ii-data.js");

vm.runInContext(`
  const elements={
    "#q":{
      value:"",
      listeners:{},
      addEventListener(type,listener){this.listeners[type]=listener;},
      removeEventListener(type,listener){if(this.listeners[type]===listener) delete this.listeners[type];}
    },
    "#region":{
      value:"",
      options:[{value:"",textContent:"All regions"}],
      listeners:{},
      append(option){this.options.push(option);},
      addEventListener(type,listener){this.listeners[type]=listener;}
    },
    "#list":{innerHTML:""},
    "#count":{textContent:""},
    "#none":{hidden:false}
  };
  const document={createElement(){return {value:"",textContent:""};}};
  const $=selector=>elements[selector];
  const pad=value=>String(value).padStart(3,"0");
  const norm=value=>String(value).normalize("NFD").replace(/\\p{Diacritic}/gu,"").toLowerCase();
  let filtered=DATA;
  function filter(){}
  function draw(){}
  function currentHashPokemon(){return null;}
  function itemMarkup(pokemon){return pokemon.e;}
`,context);

loadScript(context,"region-filter.js");

expectEqual(
  vm.runInContext(`elements["#region"].options.map(option=>[option.value,option.textContent])`,context),
  [["","All regions"],["kanto","Kanto"],["johto","Johto"]],
  "published region options"
);
expectEqual(
  vm.runInContext(`regionForPokemon(DATA.find(pokemon=>pokemon.d===1))?.key`,context),
  "kanto",
  "Bulbasaur region"
);
expectEqual(
  vm.runInContext(`regionForPokemon(DATA.find(pokemon=>pokemon.d===152))?.key`,context),
  "johto",
  "Chikorita region"
);

function filteredIds(query,region=""){
  return vm.runInContext(`
    elements["#q"].value=${JSON.stringify(query)};
    elements["#region"].value=${JSON.stringify(region)};
    applyRegionAndSearchFilters();
    filtered.map(pokemon=>pokemon.d);
  `,context);
}

const publishedJohtoIds=vm.runInContext(
  `DATA.filter(pokemon=>pokemon.d>=152 && pokemon.d<=251).map(pokemon=>pokemon.d)`,
  context
);

expectEqual(filteredIds("kanto").length,151,"Kanto text search count");
expectEqual(filteredIds("johto"),publishedJohtoIds,"Johto text search results");
expectEqual(filteredIds("","johto"),publishedJohtoIds,"Johto selector results");
expectEqual(filteredIds("johto water"),[158,159,160],"combined region and Water-type search");
expectEqual(filteredIds("generation ii grass"),[152,153,154],"generation alias search");
expectEqual(filteredIds("johto bug"),[165,166,167,168],"new Johto Bug-type search");
expectEqual(filteredIds("johto","kanto"),[],"selector and conflicting query");

if(errors.length){
  console.error(`Region-filter validation failed with ${errors.length} error${errors.length===1?"":"s"}:`);
  errors.forEach(error=>console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Region-filter validation passed: Kanto and ${publishedJohtoIds.length} published Johto entries are searchable.`);
