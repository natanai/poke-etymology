const VERIFIED_ENGLISH_NAME_EFFECT_FIXES={
  78:"A rapid dash, with a possible secondary echo of ash.",
  83:"Something implausible or difficult to believe.",
  109:"Coughing, with the spelling also imitating the sound of a cough.",
  110:"Wheezing—difficult, often whistling breathing.",
  114:"A tangle given a name-like or taxonomic ending.",
  138:"Ammonite, reshaped into a compact fantasy name.",
  140:"A borrowed Japanese name evoking both a helmet and a horseshoe crab.",
  141:"A borrowed Japanese name retaining Kabuto with an unresolved prehistoric-sounding ending.",
  150:"The second Mew."
};

for(const [id,meaning] of Object.entries(VERIFIED_ENGLISH_NAME_EFFECT_FIXES)){
  const pokemon=DATA.find(item=>item.d===Number(id));
  if(!pokemon||!Array.isArray(pokemon.x?.[2])){
    throw new Error(`Cannot apply English name-effect fix for Pokémon #${id}`);
  }
  pokemon.x[2][1]=meaning;
}
