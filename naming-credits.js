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
    kind:"team",
    people:[],
    organization:"Nintendo France localization team",
    role:"French name adaptation",
    detail:"Contemporary reporting credits Jean-Baptiste Fleury, Daniel Charbit, Nicolas Robert, Nicolas Gourio, and Pokémon specialist Julien Bardakoff. Later interviews often summarize Bardakoff as the creator of the first 251 French names; an exact coiner is not documented for most species.",
    source:Object.freeze({
      label:"Le Parisien: the Nintendo France Pokémon translation team",
      url:"https://www.leparisien.fr/archives/ils-ont-invente-les-noms-des-pokemon-29-12-2000-2001854436.php"
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

const BARD_AKOFF_EEVEE_FAMILY_SOURCE=Object.freeze({
  label:"Julien Bardakoff interview: Évoli family discussion at 40:11",
  url:"https://www.dailymotion.com/video/xa47qxo"
});

function bardakoffEeveeFamilyCredit(name){
  return Object.freeze({
    kind:"specific",
    people:Object.freeze(["Julien Bardakoff"]),
    organization:"Nintendo France",
    role:"Specific French family-name contribution",
    detail:`Bardakoff explains choosing ${name} as part of the coordinated Évoli, Aquali, Voltali, and Pyroli system; the wider localization project also had a documented Nintendo France team.`,
    source:BARD_AKOFF_EEVEE_FAMILY_SOURCE
  });
}

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
  130:Object.freeze({
    french:Object.freeze({
      kind:"specific",
      people:Object.freeze(["Julien Bardakoff"]),
      organization:"Nintendo France",
      role:"Specific French name contribution",
      detail:"Bardakoff describes choosing Léviator for the mythological sea-monster association; the wider localization project also had a documented Nintendo France team.",
      source:Object.freeze({
        label:"Julien Bardakoff interview: Léviator discussion at 31:29",
        url:"https://www.dailymotion.com/video/xa47qxo"
      })
    }),
    english:Object.freeze({
      kind:"specific",
      people:Object.freeze(["Nob Ogasawara"]),
      organization:"Nintendo of America",
      role:"Specific retention recommendation",
      detail:"Ogasawara says he recommended retaining Gyarados after the proposed English name Skulkraken failed legal review; Hiro Nakamura led the wider naming program.",
      source:Object.freeze({
        label:"ANMTV interview with Nob Ogasawara",
        url:"https://www.anmtvla.com/2022/09/exclusiva-entrevista-con-nob-ogasawara.html"
      })
    })
  }),
  133:Object.freeze({french:bardakoffEeveeFamilyCredit("Évoli")}),
  134:Object.freeze({french:bardakoffEeveeFamilyCredit("Aquali")}),
  135:Object.freeze({french:bardakoffEeveeFamilyCredit("Voltali")}),
  136:Object.freeze({french:bardakoffEeveeFamilyCredit("Pyroli")}),
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
  const numericId=Number(id);
  if(!Number.isInteger(numericId) || numericId<1 || numericId>151) return null;
  const base=NAMING_CREDIT_DEFAULTS[languageKey];
  const override=NAMING_CREDIT_OVERRIDES[numericId]?.[languageKey];
  return override || base || null;
}
