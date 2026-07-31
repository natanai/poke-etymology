import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {execFileSync} from "node:child_process";
import {fileURLToPath} from "node:url";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,"..");
const baselinePath=path.join(root,"name-effect-scope-baseline.json");
const languages=["Japanese","French","English"];
const exactAttestation="I manually compared every changed meaning/effect line against its displayed Roots and moved design/lore context to Notes.";
const errors=[];

const prohibitedPatterns=[
  {label:"visual or anatomical description",pattern:/\b(?:body|bodies|appearance|sacred-looking|scared-looking|visibly built|defined by|distinguished by|characterized by)\b/i},
  {label:"unsupported design action",pattern:/\b(?:growing on it|attached to it|carries|carrying|wears|wearing|holds|holding|fires|controls|dwelling|covered|prominent|oversized|enlarged|whose limbs|whose stinger)\b/i},
  {label:"evolutionary-stage context",pattern:/\b(?:evolved|evolution's|final form|middle stage|first stage|fully developed|later form|second sphere|stage after|produced through a stone)\b/i},
  {label:"story or creation lore",pattern:/\b(?:artificially created|genetically engineered|cloned Mew|newly discovered life-form|Pokédex lore)\b/i}
];

function loadScript(context,file){
  const source=fs.readFileSync(path.join(root,file),"utf8");
  vm.runInContext(source,context,{filename:file});
}

function rowPart(row,key,index){
  if(Array.isArray(row)) return row[index] ?? "";
  return row?.[key] ?? "";
}

function assembledData(){
  const context=vm.createContext({console});
  loadScript(context,"data.js");
  loadScript(context,"generated-data.js");
  loadScript(context,"generation-ii-data.js");
  loadScript(context,"associations.js");
  const researchFiles=[
    "verified-research.js",
    ...fs.readdirSync(root).filter(file=>/^verified-research-\d{3}-\d{3}\.js$/.test(file)).sort(),
    "verified-research-name-effect-fixes.js"
  ];
  for(const file of researchFiles) loadScript(context,file);
  return vm.runInContext("DATA",context);
}

function scopeSnapshot(data){
  const audited=data.filter(item=>item.reviewed===true && item.audit?.status==="audited");
  const rows=[];
  for(const pokemon of audited){
    if(!Array.isArray(pokemon.x) || pokemon.x.length!==3){
      errors.push(`#${pokemon.d}: audited entry must contain exactly Japanese, French, and English analyses`);
      continue;
    }
    pokemon.x.forEach((row,index)=>{
      const roots=String(rowPart(row,"roots",0)).trim();
      const meaning=String(rowPart(row,"meaning",1)).trim();
      const confidence=String(rowPart(row,"confidence",2)).trim();
      if(!roots) errors.push(`#${pokemon.d} ${languages[index]}: Roots is empty`);
      if(!meaning) errors.push(`#${pokemon.d} ${languages[index]}: meaning/effect is empty`);
      if(!confidence) errors.push(`#${pokemon.d} ${languages[index]}: confidence is empty`);
      for(const {label,pattern} of prohibitedPatterns){
        if(pattern.test(meaning)){
          errors.push(`#${pokemon.d} ${languages[index]}: meaning/effect contains ${label}: ${JSON.stringify(meaning)}`);
        }
      }
      rows.push({id:pokemon.d,language:languages[index],roots,meaning});
    });
  }
  rows.sort((a,b)=>a.id-b.id || languages.indexOf(a.language)-languages.indexOf(b.language));
  const digest=crypto.createHash("sha256").update(JSON.stringify(rows)).digest("hex");
  return {
    schemaVersion:1,
    auditedEntries:audited.length,
    languageRows:rows.length,
    auditedThrough:audited.reduce((maximum,item)=>Math.max(maximum,item.d),0),
    digest,
    rows
  };
}

function requirePullRequestAttestation(){
  const eventPath=process.env.GITHUB_EVENT_PATH;
  if(!eventPath || !fs.existsSync(eventPath)) return;
  const event=JSON.parse(fs.readFileSync(eventPath,"utf8"));
  const pullRequest=event.pull_request;
  if(!pullRequest) return;
  let changedFiles=[];
  try{
    changedFiles=execFileSync("git",[
      "diff","--name-only",pullRequest.base.sha,pullRequest.head.sha
    ],{cwd:root,encoding:"utf8"}).trim().split(/\r?\n/).filter(Boolean);
  }catch(error){
    errors.push(`Could not inspect pull-request files for name-effect attestation: ${error.message}`);
    return;
  }
  const scopeSensitive=changedFiles.some(file=>
    /^(?:data\.js|generated-data\.js|generation-ii-data\.js|verified-research(?:-.*)?\.js|name-effect-scope-baseline\.json)$/.test(file)
  );
  if(!scopeSensitive) return;
  const requiredLine=`- [x] ${exactAttestation}`;
  if(!String(pullRequest.body ?? "").includes(requiredLine)){
    errors.push(`Pull request must contain this exact checked attestation because name-analysis data changed: ${requiredLine}`);
  }
}

const snapshot=scopeSnapshot(assembledData());

if(process.argv.includes("--write-baseline")){
  if(process.env.NAME_EFFECT_SCOPE_ATTESTATION!==exactAttestation){
    console.error("Refusing to rewrite the name-effect baseline without the exact manual-review attestation.");
    console.error(`Set NAME_EFFECT_SCOPE_ATTESTATION=${JSON.stringify(exactAttestation)}`);
    process.exit(1);
  }
  const baseline={
    schemaVersion:snapshot.schemaVersion,
    auditedEntries:snapshot.auditedEntries,
    languageRows:snapshot.languageRows,
    auditedThrough:snapshot.auditedThrough,
    digest:snapshot.digest,
    reviewedOn:new Date().toISOString().slice(0,10),
    attestation:exactAttestation
  };
  fs.writeFileSync(baselinePath,`${JSON.stringify(baseline,null,2)}\n`);
  console.log(`Wrote name-effect scope baseline for ${baseline.languageRows} language rows: ${baseline.digest}`);
  process.exit(0);
}

const baseline=JSON.parse(fs.readFileSync(baselinePath,"utf8"));
for(const key of ["schemaVersion","auditedEntries","languageRows","auditedThrough","digest"]){
  if(baseline[key]!==snapshot[key]){
    errors.push(`Name-effect audit baseline mismatch for ${key}: expected ${JSON.stringify(baseline[key])}, assembled data is ${JSON.stringify(snapshot[key])}`);
  }
}
if(baseline.attestation!==exactAttestation){
  errors.push("Name-effect baseline is missing the required exact attestation.");
}
requirePullRequestAttestation();

if(errors.length){
  console.error(`Name-effect validation failed with ${errors.length} error${errors.length===1?"":"s"}:`);
  errors.forEach(error=>console.error(`- ${error}`));
  console.error(`Current assembled digest: ${snapshot.digest}`);
  console.error("Do not merely copy the digest. Read NAME_EFFECT_STANDARD.md, manually review every changed Roots → meaning/effect pair, move design/lore material to Notes, then renew the baseline with the required attestation.");
  process.exit(1);
}

console.log(`Name-effect validation passed: ${snapshot.languageRows} audited language rows through #${snapshot.auditedThrough}; digest ${snapshot.digest}.`);
