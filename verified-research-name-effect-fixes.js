const VERIFIED_NAME_EFFECT_FIXES=[
  {id:78,language:"English",languageIndex:2,meaning:"A rapid dash, with a possible secondary echo of ash."},
  {id:83,language:"English",languageIndex:2,meaning:"Something implausible or difficult to believe."},
  {id:109,language:"English",languageIndex:2,meaning:"Coughing, with the spelling also imitating the sound of a cough."},
  {id:110,language:"English",languageIndex:2,meaning:"Wheezing—difficult, often whistling breathing."},
  {id:114,language:"English",languageIndex:2,meaning:"A tangle given a name-like or taxonomic ending."},
  {id:138,language:"English",languageIndex:2,meaning:"Ammonite, reshaped into a compact fantasy name."},
  {id:140,language:"English",languageIndex:2,meaning:"A borrowed Japanese name evoking both a helmet and a horseshoe crab."},
  {id:141,language:"English",languageIndex:2,meaning:"A borrowed Japanese name retaining Kabuto with an unresolved prehistoric-sounding ending."},
  {id:148,language:"Japanese",languageIndex:0,meaning:"A white dragon."},
  {id:150,language:"English",languageIndex:2,meaning:"The second Mew."}
];

for(const {id,language,languageIndex,meaning} of VERIFIED_NAME_EFFECT_FIXES){
  const pokemon=DATA.find(item=>item.d===id);
  if(!pokemon||!Array.isArray(pokemon.x?.[languageIndex])){
    throw new Error(`Cannot apply ${language} name-effect fix for Pokémon #${id}`);
  }
  pokemon.x[languageIndex][1]=meaning;
}
