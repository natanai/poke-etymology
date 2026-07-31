const REGION_DEFINITIONS=Object.freeze([
  Object.freeze({
    key:"kanto",
    label:"Kanto",
    start:1,
    end:151,
    searchTerms:Object.freeze(["kanto","generation i","generation 1","gen i","gen 1"])
  }),
  Object.freeze({
    key:"johto",
    label:"Johto",
    start:152,
    end:251,
    searchTerms:Object.freeze(["johto","generation ii","generation 2","gen ii","gen 2"])
  })
]);

const PUBLISHED_POKEMON_IDS=new Set(DATA.map(pokemon=>pokemon.d));

function regionForPokemon(pokemon){
  return REGION_DEFINITIONS.find(region=>pokemon.d>=region.start && pokemon.d<=region.end) || null;
}

function publishedRegions(){
  return REGION_DEFINITIONS.filter(region=>DATA.some(pokemon=>pokemon.d>=region.start && pokemon.d<=region.end));
}

function pokemonSearchDocument(pokemon){
  const region=regionForPokemon(pokemon);
  return norm([
    pokemon.d,
    pad(pokemon.d),
    pokemon.e,
    pokemon.f,
    pokemon.j,
    pokemon.r,
    ...pokemon.t,
    region?.label || "",
    ...(region?.searchTerms || [])
  ].join(" "));
}

function drawRegionFilteredList(){
  const reference=currentHashPokemon();
  const rows=[...filtered];
  if(reference && !PUBLISHED_POKEMON_IDS.has(reference.d) && !rows.some(item=>item.d===reference.d)){
    rows.unshift(reference);
  }
  $("#list").innerHTML=rows.map(itemMarkup).join("");
  $("#count").textContent=`${filtered.length} ${filtered.length===1?"entry":"entries"}`;
  $("#none").hidden=filtered.length>0 || Boolean(reference && !PUBLISHED_POKEMON_IDS.has(reference.d));
}

function applyRegionAndSearchFilters(){
  const queryTerms=norm($("#q").value.trim()).split(/\s+/).filter(Boolean);
  const selectedRegion=$("#region").value;

  filtered=DATA.filter(pokemon=>{
    const region=regionForPokemon(pokemon);
    if(selectedRegion && region?.key!==selectedRegion) return false;
    const document=pokemonSearchDocument(pokemon);
    return queryTerms.every(term=>document.includes(term));
  });

  drawRegionFilteredList();
}

function initializeRegionFilter(){
  const select=$("#region");
  for(const region of publishedRegions()){
    const option=document.createElement("option");
    option.value=region.key;
    option.textContent=region.label;
    select.append(option);
  }

  $("#q").removeEventListener("input",filter);
  $("#q").addEventListener("input",applyRegionAndSearchFilters);
  select.addEventListener("change",applyRegionAndSearchFilters);

  draw=drawRegionFilteredList;
  applyRegionAndSearchFilters();
}

initializeRegionFilter();
