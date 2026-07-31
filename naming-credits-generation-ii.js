const NAMING_CREDIT_GENERATION_II_DEFAULTS=Object.freeze({
  japanese:Object.freeze({
    kind:"team",
    people:[],
    organization:"Game Freak",
    role:"Generation II original naming staff",
    detail:"The individual creator of this Japanese species name is not publicly documented. Game Freak is documented as using dedicated Pokémon naming staff, so the credit remains team-level unless species-specific evidence is found.",
    source:Object.freeze({
      label:"Nintendo: Game Freak has dedicated Pokémon naming staff",
      url:"https://www.nintendo.co.jp/3ds/interview/ekjj/vol1/index.html"
    })
  }),
  french:Object.freeze({
    kind:"team",
    people:[],
    organization:"Nintendo France localization team",
    role:"Generation II French name adaptation",
    detail:"Julien Bardakoff describes creating the French names through Celebi and the first 251 Pokémon. Contemporary reporting also documents a wider Nintendo France translation team, so the default remains team-level unless a source identifies the exact species decision.",
    source:Object.freeze({
      label:"Julien Bardakoff interview: French names through the first 251 Pokémon",
      url:"https://www.dailymotion.com/video/xa47qxo"
    })
  }),
  english:Object.freeze({
    kind:"team",
    people:Object.freeze(["Gail Tilden","Hiro Nakamura","Jeff Kalles","William Giese"]),
    organization:"Nintendo of America",
    role:"Generation II English localization coordination",
    detail:"The Pokémon Gold and Silver US credits list Tilden, Nakamura, Kalles, and Giese among the localization coordinators. Jeff Kalles is separately documented as helping name many Generation II Pokémon, but the exact coiner is unknown for most species.",
    source:Object.freeze({
      label:"Pokémon Gold and Silver US staff credits",
      url:"https://bulbapedia.bulbagarden.net/wiki/Staff_of_Pok%C3%A9mon_Gold_and_Silver"
    })
  })
});

const NAMING_CREDIT_GENERATION_II_OVERRIDES=Object.freeze({
  156:Object.freeze({
    english:Object.freeze({
      kind:"specific",
      people:Object.freeze(["Jeff Kalles"]),
      organization:"Nintendo of America",
      role:"Specific English name contribution",
      detail:"Kalles identifies Quilava as his suggestion while assisting with Generation II names and finding a Pokémon name beginning with Q.",
      source:Object.freeze({
        label:"Bulbapedia: Jeff Kalles's Quilava naming contribution",
        url:"https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pok%C3%A9mon)#Concept_and_development"
      })
    })
  })
});

const namingCreditForGenerationI=namingCreditFor;
namingCreditFor=function(id,languageKey){
  const numericId=Number(id);
  if(Number.isInteger(numericId) && numericId>=152 && numericId<=251){
    return NAMING_CREDIT_GENERATION_II_OVERRIDES[numericId]?.[languageKey]
      || NAMING_CREDIT_GENERATION_II_DEFAULTS[languageKey]
      || null;
  }
  return namingCreditForGenerationI(id,languageKey);
};
