import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {fileURLToPath} from "node:url";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,"..");
const start=Number(process.argv[2] ?? 1);
const end=Number(process.argv[3] ?? 151);
const languages=["Japanese","French","English"];

function loadScript(context,file){
  const source=fs.readFileSync(path.join(root,file),"utf8");
  vm.runInContext(source,context,{filename:file});
}

function clean(value){
  return String(value ?? "").replace(/[\t\r\n]+/g," ").trim();
}

const context=vm.createContext({console});
loadScript(context,"data.js");
loadScript(context,"generated-data.js");
loadScript(context,"associations.js");

const researchFiles=[
  "verified-research.js",
  ...fs.readdirSync(root).filter(file=>/^verified-research-\d{3}-\d{3}\.js$/.test(file)).sort(),
  "verified-research-name-effect-fixes.js"
];
for(const file of researchFiles) loadScript(context,file);

const data=vm.runInContext("DATA",context);
for(const pokemon of data.filter(item=>item.d>=start && item.d<=end)){
  for(let index=0;index<languages.length;index+=1){
    const row=pokemon.x?.[index];
    const roots=Array.isArray(row) ? row[0] : row?.roots;
    const meaning=Array.isArray(row) ? row[1] : row?.meaning;
    const confidence=Array.isArray(row) ? row[2] : row?.confidence;
    console.log([
      "AUDIT_ROW",
      String(pokemon.d).padStart(4,"0"),
      languages[index],
      clean(roots),
      clean(meaning),
      clean(confidence)
    ].join("\t"));
  }
}
