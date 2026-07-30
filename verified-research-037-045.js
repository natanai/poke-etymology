function expandedSourceSet(id,bulbapediaPage,extras=[]){
  return [...sourceSet(id,bulbapediaPage),...extras];
}

const VERIFIED_RESEARCH_037_045={
  37:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["六 (roku, six) + こんこん (konkon, a fox’s cry); possibly also 焜炉 (konro, stove)","A six-tailed fox name built around the conventional sound of a fox.","plausible"],
      ["goupil + six","Six-tailed fox.","strong"],
      ["Latin vulpes (fox) + six","A six-tailed fox.","strong"]
    ],
    c:"Japanese, French, and English all encode six and fox imagery. French uses the old literary fox word goupil, English uses a learned Latin fox root, and Japanese adds conventional fox sound symbolism.",
    a:[
      "六 is the ordinary number six. こんこん is a conventional fox cry in stories and children’s language; the proposed stove echo is secondary and less certain.",
      "goupil is an old or literary word for fox rather than the modern everyday renard. six remains completely transparent.",
      "vulpes is Latin rather than everyday English, but it survives in learned words such as vulpine. six is immediately recognizable."
    ],
    sources:expandedSourceSet(37,"Vulpix_%28Pok%C3%A9mon%29",[
      {label:"Académie française: goupil",url:"https://www.cnrtl.fr/definition/academie9/goupil"},
      {label:"Merriam-Webster: vulpine",url:"https://www.merriam-webster.com/dictionary/vulpine"}
    ])
  },
  38:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["九 (kyū, nine) or 九尾狐 (kyūbiko, nine-tailed fox) + こんこん (konkon, fox cry); possibly also 旧恨 (kyūkon, old grudge)","A nine-tailed fox name with possible curse or grudge wordplay.","plausible"],
      ["feu + renard, with neuf (nine) likely folded into the sound","A fire fox whose name also points toward nine.","plausible"],
      ["nine + tales, a homophone of tails","A nine-tailed mythical fox framed through stories or legends.","strong"]
    ],
    c:"All three names point to the nine-tailed fox. Japanese layers fox sound symbolism and possible curse language, French compresses fire, fox, and nine, and English deliberately spells tails as tales to foreground mythology.",
    a:[
      "九 is nine, and 九尾狐 is the familiar expression for a nine-tailed fox. 旧恨 means an old grudge, but that secondary reading is literary and should not be treated as the only origin.",
      "feu is fire and renard is the everyday word for fox. neuf is nine; its exact contribution to the compressed spelling is plausible rather than fully transparent.",
      "nine and tales are ordinary words. Because tales sounds exactly like tails, the spelling can evoke fairy tales and legends while still describing the nine tails."
    ],
    sources:expandedSourceSet(38,"Ninetales_%28Pok%C3%A9mon%29",[
      {label:"CNRTL: renard",url:"https://www.cnrtl.fr/definition/renard"},
      {label:"Encyclopaedia Britannica: kitsune",url:"https://www.britannica.com/topic/kitsune"}
    ])
  },
  39:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["プリン (purin, pudding)","Pudding, emphasizing a soft and rounded body.","strong"],
      ["rond + doux / doudou; also echoes roudoudou, a caramel sweet","A round, soft, comforting creature with a candy-like name.","strong"],
      ["jiggly + puff","A soft puff that jiggles or wobbles.","strong"]
    ],
    c:"Japanese uses a familiar dessert word, French builds a childlike cluster of roundness, softness, comfort, and candy, and English describes the body’s movement and puffed shape.",
    a:[
      "プリン is the everyday Japanese word for custard pudding and immediately suggests something soft, rounded, and dessert-like.",
      "rond means round, doux means soft or gentle, and doudou commonly evokes a comfort object or affectionate nickname. roudoudou is an old-fashioned caramel sweet.",
      "jiggly suggests soft wobbling movement; puff can be a small soft mass, a burst of air, or something swollen and rounded."
    ],
    sources:expandedSourceSet(39,"Jigglypuff_%28Pok%C3%A9mon%29",[
      {label:"CNRTL: doudou",url:"https://www.cnrtl.fr/definition/doudou"},
      {label:"CNRTL: roudoudou",url:"https://www.cnrtl.fr/definition/roudoudous"}
    ])
  },
  40:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["ぷくぷく (pukupuku, plump or puffed up) + プリン (Purin); other roundness words may contribute","A larger, puffed-up continuation of Purin.","plausible"],
      ["gros + doudou","A big, soft comfort-creature.","strong"],
      ["wiggly + tough; possibly also tuft","A wiggly but tougher evolution, possibly with a tuft of fur.","plausible"]
    ],
    c:"Each evolution enlarges the original softness in a different way: Japanese emphasizes puffed roundness, French simply makes the doudou bigger, and English contrasts wobbliness with toughness.",
    a:[
      "ぷくぷく commonly suggests something plump, swollen, or adorably chubby. The ending keeps the family resemblance to プリン.",
      "gros means big or large; doudou keeps the soft, reassuring, childlike association from Rondoudou.",
      "wiggly is ordinary descriptive English. tough is immediately recognizable, while tuft is a secondary possible echo suggested by the curl of fur."
    ],
    sources:expandedSourceSet(40,"Wigglytuff_%28Pok%C3%A9mon%29",[
      {label:"CNRTL: doudou",url:"https://www.cnrtl.fr/definition/doudou"}
    ])
  },
  41:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["ずばっと (zubatto, sharply, decisively, or with a piercing motion) + bat","A bat that strikes or pierces sharply.","strong"],
      ["Nosferatu + petit","A small vampire.","strong"],
      ["The Japanese Zubat name retained; bat remains transparent in English","A sharply striking bat whose original Japanese sound-play is mostly opaque in English.","strong"]
    ],
    c:"Japanese combines a dramatic motion word with bat. French replaces that sound effect with an explicit miniature-vampire reference, while English retains the Japanese form and leaves bat as the clearest native element.",
    a:[
      "ずばっと is used for something done sharply, cleanly, or piercingly and has the energetic feel of a manga sound effect. bat is an English loan.",
      "Nosferatu strongly evokes the classic vampire name and film tradition; petit is the ordinary word for small.",
      "bat is immediately recognizable, but zu- does not carry its Japanese adverbial meaning for most English speakers."
    ],
    sources:expandedSourceSet(41,"Zubat_%28Pok%C3%A9mon%29",[
      {label:"Encyclopaedia Britannica: Nosferatu",url:"https://www.britannica.com/topic/Nosferatu-film-by-Murnau"}
    ])
  },
  42:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["probably gore, ghoul, or gulp + bat","A large vampire bat associated with blood, monsters, or gulping.","plausible"],
      ["Nosferatu + alto (high)","A higher or more developed vampire bat.","plausible"],
      ["The Japanese Golbat name retained; probably gore, ghoul, or gulp + bat","A large bat whose first element may suggest blood, monsters, or swallowing.","plausible"]
    ],
    c:"Japanese and English share an intentionally dark but unresolved bat compound. French preserves the Nosferatu family and replaces petit with alto, suggesting elevation, growth, or a higher form.",
    a:[
      "bat is fully transparent as an English loan. gore, ghoul, and gulp all fit the creature, but no single first root is securely established.",
      "Nosferatu continues the vampire reference. alto is Italian for high and is familiar through music, though its exact intended nuance here remains uncertain.",
      "bat is obvious; gore, ghoul, and gulp are all familiar English possibilities, so the entry keeps them as alternatives instead of choosing one as fact."
    ],
    sources:sourceSet(42,"Golbat_%28Pok%C3%A9mon%29")
  },
  43:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["謎の草 (nazo no kusa, mysterious or enigmatic grass)","Mysterious grass.","strong"],
      ["mystère + herbe","Mystery grass or herb.","strong"],
      ["oddish (somewhat odd), also suggesting odd + radish","A somewhat strange radish-like plant.","strong"]
    ],
    c:"Japanese and French independently name it mysterious grass. English keeps the strangeness but turns the name into an adjective and a possible radish pun.",
    a:[
      "謎 is a mystery or riddle, の links the phrase, and 草 is grass or an herb. The full name sounds like an ordinary descriptive phrase.",
      "mystère is mystery and herbe is grass or herb; both components are immediately accessible to French speakers.",
      "odd is ordinary English for strange. The suffix -ish means somewhat, while radish is a familiar root vegetable that overlaps the ending."
    ],
    sources:sourceSet(43,"Oddish_%28Pok%C3%A9mon%29")
  },
  44:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["臭い花 (kusai hana, stinking flower)","Stinking flower.","strong"],
      ["ortie + fétide","Fetid nettle.","strong"],
      ["gloom, possibly reinforced by bloom, goo or glue, or glume","A gloomy, drooping flower with sticky secretions.","plausible"]
    ],
    c:"Japanese and French directly foreground the plant’s bad smell. English instead begins with a mood word and may layer in flower or sticky-substance echoes.",
    a:[
      "臭い is the ordinary adjective for smelly or stinking, and 花 is flower. The full name reads like a plain description.",
      "ortie is nettle and fétide means foul-smelling. The join is clear even though the creature is not literally a nettle.",
      "gloom is an ordinary word for darkness or sadness. bloom is a familiar flower word, while goo and glue fit the visible drool; those extra echoes are possible rather than certain."
    ],
    sources:expandedSourceSet(44,"Gloom_%28Pok%C3%A9mon%29",[
      {label:"CNRTL: ortie",url:"https://www.cnrtl.fr/definition/orties"},
      {label:"Académie française: fétide",url:"https://www.cnrtl.fr/definition/academie9/f%C3%A9tide"},
      {label:"Merriam-Webster: gloom",url:"https://www.merriam-webster.com/dictionary/gloom"}
    ])
  },
  45:{
    status:"audited",reviewedOn:"2026-07-29",
    x:[
      ["ラフレシア (Ruffresia), a Japanese transcription of Rafflesia","Rafflesia, the giant foul-smelling flower genus.","strong"],
      ["Rafflesia, the plant-genus name used unchanged","Rafflesia.","strong"],
      ["vile + plume; possibly also bloom","A repulsive flower or cloud of pollen.","strong"]
    ],
    c:"Japanese and French directly use the real flower genus. English creates a descriptive compound that retains both the foulness and the spreading flower or pollen image.",
    a:[
      "ラフレシア is recognizable as the imported botanical name Rafflesia rather than ordinary Japanese vocabulary.",
      "Rafflesia is the scientific genus name and therefore sounds botanical and specialized rather than like an everyday French compound.",
      "vile is a strong ordinary adjective for something repulsive. plume can mean a feather-like form or a spreading cloud, such as smoke or pollen; bloom may also echo in the ending."
    ],
    sources:expandedSourceSet(45,"Vileplume_%28Pok%C3%A9mon%29",[
      {label:"Encyclopaedia Britannica: Rafflesia",url:"https://www.britannica.com/plant/Rafflesia"},
      {label:"Merriam-Webster: plume",url:"https://www.merriam-webster.com/dictionary/plume"}
    ])
  }
};

for(const [id,research] of Object.entries(VERIFIED_RESEARCH_037_045)){
  const pokemon=DATA.find(item=>item.d===Number(id));
  if(!pokemon) continue;
  pokemon.x=research.x;
  pokemon.c=research.c;
  pokemon.reviewed=true;
  pokemon.audit={status:research.status,reviewedOn:research.reviewedOn,associations:research.a,sources:research.sources};
}
