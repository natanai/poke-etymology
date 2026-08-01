import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {fileURLToPath} from "node:url";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,"..");
const languageKeys=["japanese","french","english"];
const supportedKinds=new Set(["specific","creator","lead","team","unknown"]);
const errors=[];

const context=vm.createContext({console});
for(const file of [
  "data.js",
  "generated-data.js",
  "generation-ii-data.js",
  "naming-credits.js",
  "naming-credits-generation-ii.js"
]){
  const source=fs.readFileSync(path.join(root,file),"utf8");
  vm.runInContext(source,context,{filename:file});
}

const data=vm.runInContext("DATA",context);
const generationIDefaults=vm.runInContext("NAMING_CREDIT_DEFAULTS",context);
const generationIOverrides=vm.runInContext("NAMING_CREDIT_OVERRIDES",context);
const generationIIDefaults=vm.runInContext("NAMING_CREDIT_GENERATION_II_DEFAULTS",context);
const generationIIOverrides=vm.runInContext("NAMING_CREDIT_GENERATION_II_OVERRIDES",context);
const resolve=vm.runInContext("namingCreditFor",context);

function validateRecord(record,prefix){
  if(!record || typeof record!=="object" || Array.isArray(record)){
    errors.push(`${prefix}: credit must be an object`);
    return;
  }
  if(!supportedKinds.has(record.kind)) errors.push(`${prefix}: unsupported kind ${JSON.stringify(record.kind)}`);
  if(!Array.isArray(record.people)) errors.push(`${prefix}: people must be an array`);
  else {
    if(record.people.some(person=>typeof person!=="string" || !person.trim())) errors.push(`${prefix}: people must contain non-empty names`);
    if(["specific","creator","lead"].includes(record.kind) && !record.people.length){
      errors.push(`${prefix}: ${record.kind} credits require at least one named person`);
    }
  }
  for(const field of ["organization","role","detail"]){
    if(typeof record[field]!=="string" || !record[field].trim()) errors.push(`${prefix}: ${field} must be a non-empty string`);
  }
  if(!record.source || typeof record.source!=="object" || Array.isArray(record.source)){
    errors.push(`${prefix}: source must be an object`);
  }else{
    if(typeof record.source.label!=="string" || !record.source.label.trim()) errors.push(`${prefix}: source.label must be a non-empty string`);
    if(typeof record.source.url!=="string" || !/^https:\/\//.test(record.source.url)) errors.push(`${prefix}: source.url must be an https URL`);
  }
}

function validateDefaults(defaults,prefix){
  for(const key of languageKeys){
    if(!(key in defaults)) errors.push(`${prefix}: missing ${key}`);
    else validateRecord(defaults[key],`${prefix}.${key}`);
  }
  for(const key of Object.keys(defaults)){
    if(!languageKeys.includes(key)) errors.push(`${prefix}: unsupported language key ${JSON.stringify(key)}`);
  }
}

function validateOverrides(overrides,prefix,minId,maxId){
  for(const [idText,byLanguage] of Object.entries(overrides)){
    const id=Number(idText);
    if(!Number.isInteger(id) || id<minId || id>maxId){
      errors.push(`${prefix} ${JSON.stringify(idText)}: ID must be ${minId}–${maxId}`);
    }
    if(!byLanguage || typeof byLanguage!=="object" || Array.isArray(byLanguage)){
      errors.push(`${prefix} #${idText}: override must be an object keyed by language`);
      continue;
    }
    for(const [key,record] of Object.entries(byLanguage)){
      if(!languageKeys.includes(key)) errors.push(`${prefix} #${idText}: unsupported language key ${JSON.stringify(key)}`);
      else validateRecord(record,`${prefix} #${idText}.${key}`);
    }
  }
}

validateDefaults(generationIDefaults,"generationI.defaults");
validateDefaults(generationIIDefaults,"generationII.defaults");
validateOverrides(generationIOverrides,"generationI.override",1,151);
validateOverrides(generationIIOverrides,"generationII.override",152,251);

const current=data.filter(item=>item.d>=1 && item.d<=251).sort((a,b)=>a.d-b.d);
let resolvedCount=0;
for(const pokemon of current){
  for(const key of languageKeys){
    const record=resolve(pokemon.d,key);
    validateRecord(record,`#${pokemon.d}.${key} resolved`);
    if(record) resolvedCount+=1;
  }
}

const maximumId=current.reduce((maximum,item)=>Math.max(maximum,item.d),0);
for(let id=1;id<=maximumId;id+=1){
  if(!current.some(item=>item.d===id)) errors.push(`dataset: missing Pokémon #${id} before current maximum #${maximumId}`);
}

for(const unsupportedId of [0,252,10000,NaN]){
  for(const key of languageKeys){
    if(resolve(unsupportedId,key)!==null){
      errors.push(`scope: ${String(unsupportedId)}.${key} must not inherit Generation I or II defaults`);
    }
  }
}
for(const supportedId of [152,196,251]){
  for(const key of languageKeys){
    validateRecord(resolve(supportedId,key),`scope: ${supportedId}.${key} Generation II default`);
  }
}

if(errors.length){
  console.error(`Naming credit validation failed with ${errors.length} error${errors.length===1?"":"s"}:`);
  errors.forEach(error=>console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Naming credit validation passed: ${resolvedCount} language disclosures covered across ${current.length} contiguous published Pokémon through #${maximumId}; Generation II defaults extend through #251.`);
