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
for(const file of ["data.js","generated-data.js","naming-credits.js"]){
  const source=fs.readFileSync(path.join(root,file),"utf8");
  vm.runInContext(source,context,{filename:file});
}

const data=vm.runInContext("DATA",context);
const defaults=vm.runInContext("NAMING_CREDIT_DEFAULTS",context);
const overrides=vm.runInContext("NAMING_CREDIT_OVERRIDES",context);
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

for(const key of languageKeys){
  if(!(key in defaults)) errors.push(`defaults: missing ${key}`);
  else validateRecord(defaults[key],`defaults.${key}`);
}
for(const key of Object.keys(defaults)){
  if(!languageKeys.includes(key)) errors.push(`defaults: unsupported language key ${JSON.stringify(key)}`);
}

for(const [idText,byLanguage] of Object.entries(overrides)){
  const id=Number(idText);
  if(!Number.isInteger(id) || id<1 || id>151) errors.push(`override ${JSON.stringify(idText)}: ID must be 1–151`);
  if(!byLanguage || typeof byLanguage!=="object" || Array.isArray(byLanguage)){
    errors.push(`#${idText}: override must be an object keyed by language`);
    continue;
  }
  for(const [key,record] of Object.entries(byLanguage)){
    if(!languageKeys.includes(key)) errors.push(`#${idText}: unsupported language key ${JSON.stringify(key)}`);
    else validateRecord(record,`#${idText}.${key}`);
  }
}

let resolvedCount=0;
for(const pokemon of data.filter(item=>item.d>=1 && item.d<=151)){
  for(const key of languageKeys){
    const record=resolve(pokemon.d,key);
    validateRecord(record,`#${pokemon.d}.${key} resolved`);
    if(record) resolvedCount+=1;
  }
}

if(data.filter(item=>item.d>=1 && item.d<=151).length!==151){
  errors.push(`dataset: expected 151 Generation I entries`);
}

if(errors.length){
  console.error(`Naming credit validation failed with ${errors.length} error${errors.length===1?"":"s"}:`);
  errors.forEach(error=>console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Naming credit validation passed: ${resolvedCount} language disclosures covered across 151 Pokémon.`);
