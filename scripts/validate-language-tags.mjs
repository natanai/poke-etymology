import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {fileURLToPath} from "node:url";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,"..");
const languageKeys=["japanese","french","english"];
const languageIndex={japanese:0,french:1,english:2};
const supportedTypes=new Set(["loanword"]);
const errors=[];

function loadScript(context,file){
  const fullPath=path.join(root,file);
  const source=fs.readFileSync(fullPath,"utf8");
  vm.runInContext(source,context,{filename:file});
}

function analysisRoots(item){
  if(Array.isArray(item)) return item[0] || "";
  return item?.roots || "";
}

function nthIndex(text,needle,occurrence){
  let from=0;
  let found=-1;
  for(let count=0;count<occurrence;count+=1){
    found=text.indexOf(needle,from);
    if(found<0) return -1;
    from=found+needle.length;
  }
  return found;
}

const context=vm.createContext({console});
loadScript(context,"data.js");
loadScript(context,"generated-data.js");
loadScript(context,"associations.js");
loadScript(context,"verified-research.js");

const batchFiles=fs.readdirSync(root)
  .filter(file=>/^verified-research-\d{3}-\d{3}\.js$/.test(file))
  .sort();
for(const file of batchFiles) loadScript(context,file);

const data=vm.runInContext("DATA",context);
let tagCount=0;
let taggedLanguageCount=0;

for(const pokemon of data){
  const analyses=pokemon.x || [];
  analyses.forEach((item,index)=>{
    if(Array.isArray(item) && item.length>3){
      errors.push(`#${pokemon.d} language row ${index+1}: tags must not be stored in a fourth array item`);
    }
  });

  const tagsByLanguage=pokemon.audit?.tags;
  if(tagsByLanguage==null) continue;
  if(!tagsByLanguage || typeof tagsByLanguage!=="object" || Array.isArray(tagsByLanguage)){
    errors.push(`#${pokemon.d}: tags must be an object keyed by language name`);
    continue;
  }

  for(const key of Object.keys(tagsByLanguage)){
    if(!languageKeys.includes(key)){
      errors.push(`#${pokemon.d}: unsupported language tag key ${JSON.stringify(key)}`);
    }
  }

  for(const key of languageKeys){
    const tags=tagsByLanguage[key];
    if(tags==null) continue;
    if(!Array.isArray(tags)){
      errors.push(`#${pokemon.d} ${key}: tag collection must be an array`);
      continue;
    }
    if(tags.length) taggedLanguageCount+=1;

    const index=languageIndex[key];
    const roots=analysisRoots(analyses[index]);
    const notes=pokemon.audit?.associations?.[index] || "";
    const combined=`${roots} ${notes}`;
    const seen=new Set();
    const ranges=[];

    tags.forEach((tag,tagIndex)=>{
      const prefix=`#${pokemon.d} ${key} tag ${tagIndex+1}`;
      if(!tag || typeof tag!=="object" || Array.isArray(tag)){
        errors.push(`${prefix}: tag must be an object`);
        return;
      }
      if(!supportedTypes.has(tag.type)){
        errors.push(`${prefix}: unsupported type ${JSON.stringify(tag.type)}`);
        return;
      }
      if(typeof tag.text!=="string" || !tag.text){
        errors.push(`${prefix}: text must be a non-empty string`);
        return;
      }
      const occurrence=tag.occurrence ?? 1;
      if(!Number.isInteger(occurrence) || occurrence<1){
        errors.push(`${prefix}: occurrence must be a positive integer`);
        return;
      }
      const identity=`${tag.type}\u0000${tag.text}\u0000${occurrence}`;
      if(seen.has(identity)){
        errors.push(`${prefix}: duplicate tag for ${JSON.stringify(tag.text)}`);
        return;
      }
      seen.add(identity);

      const start=nthIndex(roots,tag.text,occurrence);
      if(start<0){
        errors.push(`${prefix}: ${JSON.stringify(tag.text)} occurrence ${occurrence} is absent from Roots`);
        return;
      }
      const end=start+tag.text.length;
      if(ranges.some(range=>start<range.end && end>range.start)){
        errors.push(`${prefix}: target overlaps another tag`);
        return;
      }
      ranges.push({start,end});

      if(tag.type==="loanword"){
        if(typeof tag.sourceLanguage!=="string" || !tag.sourceLanguage.trim()){
          errors.push(`${prefix}: loanword tags require sourceLanguage`);
          return;
        }
        const sourcePattern=new RegExp(`\\b${tag.sourceLanguage.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&")}\\b`,"i");
        if(!sourcePattern.test(combined)){
          errors.push(`${prefix}: sourceLanguage ${JSON.stringify(tag.sourceLanguage)} is not named in Roots or Notes`);
          return;
        }
      }

      tagCount+=1;
    });
  }
}

if(errors.length){
  console.error(`Language tag validation failed with ${errors.length} error${errors.length===1?"":"s"}:`);
  errors.forEach(error=>console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Language tag validation passed: ${tagCount} tags across ${taggedLanguageCount} language analyses.`);
