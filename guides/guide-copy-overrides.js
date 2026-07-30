(()=>{
  const key="poke-etymology-language";
  const lang=["e","f","j"].includes(localStorage.getItem(key)) ? localStorage.getItem(key) : "e";
  const stages=[...OPENING_STAGES,...MOON_STAGES,...CERULEAN_STAGES];
  const moon=stages.find(stage=>stage.id==="mt-moon");
  const moonStones=moon?.tasks.find(task=>task.id==="moon-stones");
  if(moonStones){
    moonStones.title={
      e:"Collect both Moon Stones",
      f:"Ramasser les deux Pierres Lune",
      j:"つきのいしを2個回収"
    }[lang];
  }
  const route4=stages.find(stage=>stage.id==="route-4");
  if(route4?.drawer){
    route4.drawer.title={e:"One-use tutors",f:"Maîtres de capacités à usage unique",j:"一度だけの技教え"}[lang];
  }
})();
