const NAMING_CREDIT_DEFAULTS=Object.freeze({
  japanese:Object.freeze({
    kind:"team",
    people:[],
    organization:"Game Freak",
    role:"Original naming staff",
    detail:"The individual creator of this Japanese species name is not publicly documented.",
    source:Object.freeze({
      label:"Nintendo: Game Freak has dedicated Pokémon naming staff",
      url:"https://www.nintendo.co.jp/3ds/interview/ekjj/vol1/index.html"
    })
  }),
  french:Object.freeze({
    kind:"creator",
    people:Object.freeze(["Julien Bardakoff"]),
    organization:"Nintendo France",
    role:"French name creator",
    detail:"Bardakoff is credited with creating the French names of the first 251 Pokémon.",
    source:Object.freeze({
      label:"Julien Bardakoff interview on the first French Pokémon names",
      url:"https://www.youtube.com/watch?v=_a65mmTtCis"
    })
  }),
  english:Object.freeze({
    kind:"lead",
    people:Object.freeze(["Hiro Nakamura"]),
    organization:"Nintendo of America",
    role:"English naming lead",
    detail:"Nakamura led the Generation I English naming program; the exact coiner is not separately documented unless an entry says otherwise.",
    source:Object.freeze({
      label:"Video Game History Foundation interview with Gail Tilden",
      url:"https://gamehistory.org/episode-126-a-fireside-chat-with-gail-tilden/"
    })
  })
});

const NAMING_CREDIT_OVERRIDES=Object.freeze({
  60:Object.freeze({english:Object.freeze({
    kind:"specific",
    people:Object.freeze(["Gail Tilden"]),
    organization:"Nintendo of America",
    role:"Specific English family-name contribution",
    detail:"Tilden identifies Poliwag, Poliwhirl, and Poliwrath as her personal naming contribution; Hiro Nakamura led the wider naming program.",
    source:Object.freeze({
      label:"Johto Times interview with Gail Tilden",
      url:"https://johtotimes.com/issues/2025-12-18-interview-with-gail-tilden"
    })
  })}),
  61:Object.freeze({english:Object.freeze({
    kind:"specific",
    people:Object.freeze(["Gail Tilden"]),
    organization:"Nintendo of America",
    role:"Specific English family-name contribution",
    detail:"Tilden identifies Poliwag, Poliwhirl, and Poliwrath as her personal naming contribution; Hiro Nakamura led the wider naming program.",
    source:Object.freeze({
      label:"Johto Times interview with Gail Tilden",
      url:"https://johtotimes.com/issues/2025-12-18-interview-with-gail-tilden"
    })
  })}),
  62:Object.freeze({english:Object.freeze({
    kind:"specific",
    people:Object.freeze(["Gail Tilden"]),
    organization:"Nintendo of America",
    role:"Specific English family-name contribution",
    detail:"Tilden identifies Poliwag, Poliwhirl, and Poliwrath as her personal naming contribution; Hiro Nakamura led the wider naming program.",
    source:Object.freeze({
      label:"Johto Times interview with Gail Tilden",
      url:"https://johtotimes.com/issues/2025-12-18-interview-with-gail-tilden"
    })
  })}),
  130:Object.freeze({english:Object.freeze({
    kind:"specific",
    people:Object.freeze(["Nob Ogasawara"]),
    organization:"Nintendo of America",
    role:"Specific retention recommendation",
    detail:"Ogasawara says he recommended retaining Gyarados after the proposed English name Skulkraken failed legal review; Hiro Nakamura led the wider naming program.",
    source:Object.freeze({
      label:"ANMTV interview with Nob Ogasawara",
      url:"https://www.anmtvla.com/2022/09/exclusiva-entrevista-con-nob-ogasawara.html"
    })
  })}),
  144:Object.freeze({english:Object.freeze({
    kind:"specific",
    people:Object.freeze(["Bill Giese"]),
    organization:"Nintendo of America",
    role:"Specific English name contribution",
    detail:"Giese recalls creating the Articuno, Zapdos, and Moltres naming pattern; Hiro Nakamura led the wider naming program.",
    source:Object.freeze({
      label:"TIME interview on the Generation I English localization",
      url:"https://time.com/6796536/history-origins-pokemon/"
    })
  })}),
  145:Object.freeze({english:Object.freeze({
    kind:"specific",
    people:Object.freeze(["Bill Giese"]),
    organization:"Nintendo of America",
    role:"Specific English name contribution",
    detail:"Giese recalls creating the Articuno, Zapdos, and Moltres naming pattern; Hiro Nakamura led the wider naming program.",
    source:Object.freeze({
      label:"TIME interview on the Generation I English localization",
      url:"https://time.com/6796536/history-origins-pokemon/"
    })
  })}),
  146:Object.freeze({english:Object.freeze({
    kind:"specific",
    people:Object.freeze(["Bill Giese"]),
    organization:"Nintendo of America",
    role:"Specific English name contribution",
    detail:"Giese recalls creating the Articuno, Zapdos, and Moltres naming pattern; Hiro Nakamura led the wider naming program.",
    source:Object.freeze({
      label:"TIME interview on the Generation I English localization",
      url:"https://time.com/6796536/history-origins-pokemon/"
    })
  })})
});

function namingCreditFor(id,languageKey){
  const base=NAMING_CREDIT_DEFAULTS[languageKey];
  const override=NAMING_CREDIT_OVERRIDES[id]?.[languageKey];
  return override || base || null;
}
