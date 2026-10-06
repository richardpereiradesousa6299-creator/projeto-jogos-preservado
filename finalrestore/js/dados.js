/* Dados do catálogo (usados por todas as páginas) */
var GENEROS = {"acao": "Ação e aventura", "estrategia": "Estratégia", "simulacao": "Simulação", "puzzle": "Puzzle", "corrida": "Corrida e esportes", "rpg": "RPG"};
var JOGOS = [
 {
  "id": 1,
  "img": "minecraft.svg",
  "nome": "Minecraft",
  "genero": "simulacao",
  "tipo": "Sandbox e construção",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "longo",
  "clima": [
   "amigos",
   "relaxar"
  ],
  "desc": "Mundo aberto para coletar, construir e explorar, sozinho ou com amigos."
 },
 {
  "id": 2,
  "img": "stardew-valley.svg",
  "nome": "Stardew Valley",
  "genero": "simulacao",
  "tipo": "Simulação de fazenda",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "longo",
  "clima": [
   "relaxar"
  ],
  "desc": "Plante, pesque e conheça os moradores da cidade, sem pressa."
 },
 {
  "id": 3,
  "img": "hollow-knight.svg",
  "nome": "Hollow Knight",
  "genero": "acao",
  "tipo": "Ação e exploração 2D",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Um reino subterrâneo cheio de segredos e chefes difíceis."
 },
 {
  "id": 4,
  "img": "celeste.svg",
  "nome": "Celeste",
  "genero": "acao",
  "tipo": "Plataforma e superação",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "desafio"
  ],
  "desc": "Fases curtas de pulos precisos, com opções de assistência."
 },
 {
  "id": 5,
  "img": "portal-2.svg",
  "nome": "Portal 2",
  "genero": "puzzle",
  "tipo": "Puzzle em primeira pessoa",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Resolva salas usando portais, com humor e uma boa história."
 },
 {
  "id": 6,
  "img": "mario-kart-8-deluxe.svg",
  "nome": "Mario Kart 8 Deluxe",
  "genero": "corrida",
  "tipo": "Corrida",
  "plat": [
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "amigos"
  ],
  "desc": "Corridas rápidas e divertidas para jogar em grupo."
 },
 {
  "id": 7,
  "img": "the-witcher-3.svg",
  "nome": "The Witcher 3",
  "genero": "rpg",
  "tipo": "RPG de mundo aberto",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Missões com escolhas importantes em um mundo enorme."
 },
 {
  "id": 8,
  "img": "civilization-vi.svg",
  "nome": "Civilization VI",
  "genero": "estrategia",
  "tipo": "Estratégia por turnos",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "longo",
  "clima": [
   "desafio",
   "relaxar"
  ],
  "desc": "Construa um império e conduza sua civilização pela história."
 },
 {
  "id": 9,
  "img": "rocket-league.svg",
  "nome": "Rocket League",
  "genero": "corrida",
  "tipo": "Futebol com carros",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "amigos"
  ],
  "desc": "Partidas de poucos minutos, fáceis de aprender e difíceis de dominar."
 },
 {
  "id": 10,
  "img": "monument-valley.svg",
  "nome": "Monument Valley",
  "genero": "puzzle",
  "tipo": "Puzzle de ilusão de ótica",
  "plat": [
   "celular"
  ],
  "tempo": "curto",
  "clima": [
   "relaxar"
  ],
  "desc": "Quebra-cabeças visuais calmos, perfeitos para o celular."
 },
 {
  "id": 11,
  "img": "terraria.svg",
  "nome": "Terraria",
  "genero": "acao",
  "tipo": "Aventura e construção 2D",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "longo",
  "clima": [
   "amigos",
   "desafio"
  ],
  "desc": "Explore, construa e enfrente chefes em um mundo 2D."
 },
 {
  "id": 12,
  "img": "slay-the-spire.svg",
  "nome": "Slay the Spire",
  "genero": "estrategia",
  "tipo": "Cartas e estratégia",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "curto",
  "clima": [
   "desafio"
  ],
  "desc": "Monte um baralho e suba a torre em partidas curtas."
 },
 {
  "id": 13,
  "img": "baldurs-gate-3.svg",
  "nome": "Baldur's Gate 3",
  "genero": "rpg",
  "tipo": "RPG de fantasia",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Aventura em grupo com muitas escolhas e consequências."
 },
 {
  "id": 14,
  "img": "overcooked-2.svg",
  "nome": "Overcooked! 2",
  "genero": "simulacao",
  "tipo": "Cozinha cooperativa",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "amigos"
  ],
  "desc": "Cozinhe em equipe contra o relógio, com muita bagunça."
 },
 {
  "id": 15,
  "img": "baba-is-you.svg",
  "nome": "Baba Is You",
  "genero": "puzzle",
  "tipo": "Puzzle de regras",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "desafio"
  ],
  "desc": "Mude as regras do jogo para resolver cada fase."
 },
 {
  "id": 16,
  "img": "hades.svg",
  "nome": "Hades",
  "genero": "acao",
  "tipo": "Ação roguelike",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "desafio"
  ],
  "desc": "Fuja do submundo em partidas rápidas e cheias de ação."
 },
 {
  "id": 17,
  "img": "the-legend-of-zelda-breath-of-the-wild.svg",
  "nome": "The Legend of Zelda: Breath of the Wild",
  "genero": "acao",
  "tipo": "Aventura de mundo aberto",
  "plat": [
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "relaxar",
   "desafio"
  ],
  "desc": "Explore um reino enorme com liberdade para resolver tudo do seu jeito."
 },
 {
  "id": 18,
  "img": "god-of-war.svg",
  "nome": "God of War",
  "genero": "acao",
  "tipo": "Ação e mitologia",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Combates intensos e uma história de pai e filho na mitologia nórdica."
 },
 {
  "id": 19,
  "img": "dead-cells.svg",
  "nome": "Dead Cells",
  "genero": "acao",
  "tipo": "Ação roguelike 2D",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "curto",
  "clima": [
   "desafio"
  ],
  "desc": "Combate rápido em um castelo que muda a cada tentativa."
 },
 {
  "id": 20,
  "img": "cuphead.svg",
  "nome": "Cuphead",
  "genero": "acao",
  "tipo": "Plataforma e chefes",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "desafio",
   "amigos"
  ],
  "desc": "Chefes difíceis em um visual de desenho animado antigo."
 },
 {
  "id": 21,
  "img": "super-mario-odyssey.svg",
  "nome": "Super Mario Odyssey",
  "genero": "acao",
  "tipo": "Plataforma 3D",
  "plat": [
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "relaxar"
  ],
  "desc": "Pule por reinos criativos em uma aventura cheia de segredos."
 },
 {
  "id": 22,
  "img": "vampire-survivors.svg",
  "nome": "Vampire Survivors",
  "genero": "acao",
  "tipo": "Sobrevivência arcade",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "curto",
  "clima": [
   "relaxar"
  ],
  "desc": "Sobreviva a hordas de monstros em partidas de poucos minutos."
 },
 {
  "id": 23,
  "img": "xcom-2.svg",
  "nome": "XCOM 2",
  "genero": "estrategia",
  "tipo": "Tática por turnos",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Comande uma resistência em batalhas onde cada decisão importa."
 },
 {
  "id": 24,
  "img": "into-the-breach.svg",
  "nome": "Into the Breach",
  "genero": "estrategia",
  "tipo": "Tática em tabuleiro",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "desafio"
  ],
  "desc": "Quebra-cabeça tático com robôs gigantes em mapas pequenos."
 },
 {
  "id": 25,
  "img": "age-of-empires-ii-definitive-edition.svg",
  "nome": "Age of Empires II: Definitive Edition",
  "genero": "estrategia",
  "tipo": "Estratégia em tempo real",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio",
   "amigos"
  ],
  "desc": "Construa uma civilização medieval e enfrente amigos ou o computador."
 },
 {
  "id": 26,
  "img": "plants-vs-zombies.svg",
  "nome": "Plants vs. Zombies",
  "genero": "estrategia",
  "tipo": "Defesa de torres",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "curto",
  "clima": [
   "relaxar"
  ],
  "desc": "Plante defensores para impedir que os zumbis cheguem à sua casa."
 },
 {
  "id": 27,
  "img": "fire-emblem-three-houses.svg",
  "nome": "Fire Emblem: Three Houses",
  "genero": "estrategia",
  "tipo": "Estratégia e RPG tático",
  "plat": [
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Ensine uma turma de alunos e lidere batalhas em uma academia."
 },
 {
  "id": 28,
  "img": "frostpunk.svg",
  "nome": "Frostpunk",
  "genero": "estrategia",
  "tipo": "Sobrevivência e gestão",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Lidere uma cidade em um mundo congelado e tome decisões difíceis."
 },
 {
  "id": 29,
  "img": "animal-crossing-new-horizons.svg",
  "nome": "Animal Crossing: New Horizons",
  "genero": "simulacao",
  "tipo": "Vida em uma ilha",
  "plat": [
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "relaxar",
   "amigos"
  ],
  "desc": "Monte sua ilha, colecione itens e viva no ritmo das estações."
 },
 {
  "id": 30,
  "img": "the-sims-4.svg",
  "nome": "The Sims 4",
  "genero": "simulacao",
  "tipo": "Simulação de vida",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "relaxar"
  ],
  "desc": "Crie pessoas, construa casas e conte a história da família."
 },
 {
  "id": 31,
  "img": "cities-skylines.svg",
  "nome": "Cities: Skylines",
  "genero": "simulacao",
  "tipo": "Construção de cidades",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "relaxar"
  ],
  "desc": "Planeje ruas, bairros e serviços para a cidade crescer."
 },
 {
  "id": 32,
  "img": "powerwash-simulator.svg",
  "nome": "Powerwash Simulator",
  "genero": "simulacao",
  "tipo": "Simulação de limpeza",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "relaxar"
  ],
  "desc": "Limpe sujeira com jatos de água e relaxe vendo tudo brilhar."
 },
 {
  "id": 33,
  "img": "kerbal-space-program.svg",
  "nome": "Kerbal Space Program",
  "genero": "simulacao",
  "tipo": "Simulação espacial",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Projete foguetes e leve seus astronautas ao espaço."
 },
 {
  "id": 34,
  "img": "tetris-effect-connected.svg",
  "nome": "Tetris Effect: Connected",
  "genero": "puzzle",
  "tipo": "Puzzle com música",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "relaxar",
   "amigos"
  ],
  "desc": "O clássico dos blocos com músicas e efeitos visuais envolventes."
 },
 {
  "id": 35,
  "img": "the-witness.svg",
  "nome": "The Witness",
  "genero": "puzzle",
  "tipo": "Puzzle em ilha aberta",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Explore uma ilha e descubra as regras de centenas de painéis."
 },
 {
  "id": 36,
  "img": "return-of-the-obra-dinn.svg",
  "nome": "Return of the Obra Dinn",
  "genero": "puzzle",
  "tipo": "Mistério e dedução",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Investigue o destino da tripulação de um navio em visual 1-bit."
 },
 {
  "id": 37,
  "img": "machinarium.svg",
  "nome": "Machinarium",
  "genero": "puzzle",
  "tipo": "Aventura point-and-click",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "longo",
  "clima": [
   "relaxar"
  ],
  "desc": "Ajude um pequeno robô em enigmas desenhados à mão."
 },
 {
  "id": 38,
  "img": "gris.svg",
  "nome": "Gris",
  "genero": "puzzle",
  "tipo": "Aventura artística",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "curto",
  "clima": [
   "relaxar"
  ],
  "desc": "Uma jornada sem palavras, com arte em aquarela e música delicada."
 },
 {
  "id": 39,
  "img": "forza-horizon-5.svg",
  "nome": "Forza Horizon 5",
  "genero": "corrida",
  "tipo": "Corrida em mundo aberto",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "amigos",
   "relaxar"
  ],
  "desc": "Corra livremente por paisagens do México com centenas de carros."
 },
 {
  "id": 40,
  "img": "gran-turismo-7.svg",
  "nome": "Gran Turismo 7",
  "genero": "corrida",
  "tipo": "Simulador de corrida",
  "plat": [
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Colecione carros e dispute corridas em pistas famosas."
 },
 {
  "id": 41,
  "img": "fall-guys.svg",
  "nome": "Fall Guys",
  "genero": "corrida",
  "tipo": "Corrida de obstáculos",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "amigos"
  ],
  "desc": "Dezenas de jogadores competem em provas malucas até sobrar um."
 },
 {
  "id": 42,
  "img": "trackmania.svg",
  "nome": "Trackmania",
  "genero": "corrida",
  "tipo": "Corrida arcade",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "desafio",
   "amigos"
  ],
  "desc": "Pistas curtas e velozes para bater seu próprio recorde."
 },
 {
  "id": 43,
  "img": "tony-hawks-pro-skater-1-2.svg",
  "nome": "Tony Hawk's Pro Skater 1 + 2",
  "genero": "corrida",
  "tipo": "Skate arcade",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "desafio"
  ],
  "desc": "Encadeie manobras em pistas clássicas de skate."
 },
 {
  "id": 44,
  "img": "golf-with-your-friends.svg",
  "nome": "Golf With Your Friends",
  "genero": "corrida",
  "tipo": "Minigolfe",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "amigos"
  ],
  "desc": "Minigolfe cheio de obstáculos para jogar com os amigos."
 },
 {
  "id": 45,
  "img": "the-elder-scrolls-v-skyrim.svg",
  "nome": "The Elder Scrolls V: Skyrim",
  "genero": "rpg",
  "tipo": "RPG de mundo aberto",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio",
   "relaxar"
  ],
  "desc": "Explore uma terra de dragões e monte seu próprio herói."
 },
 {
  "id": 46,
  "img": "disco-elysium.svg",
  "nome": "Disco Elysium",
  "genero": "rpg",
  "tipo": "RPG de investigação",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Investigue um crime com um detetive e decisões tomadas em diálogos."
 },
 {
  "id": 47,
  "img": "persona-5-royal.svg",
  "nome": "Persona 5 Royal",
  "genero": "rpg",
  "tipo": "RPG japonês",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "desafio"
  ],
  "desc": "Viva a rotina escolar de dia e enfrente criaturas em outro mundo."
 },
 {
  "id": 48,
  "img": "divinity-original-sin-2.svg",
  "nome": "Divinity: Original Sin 2",
  "genero": "rpg",
  "tipo": "RPG tático",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "longo",
  "clima": [
   "amigos",
   "desafio"
  ],
  "desc": "Aventura em grupo, com combate por turnos e muita liberdade."
 },
 {
  "id": 49,
  "img": "undertale.svg",
  "nome": "Undertale",
  "genero": "rpg",
  "tipo": "RPG de escolhas",
  "plat": [
   "pc",
   "console"
  ],
  "tempo": "curto",
  "clima": [
   "relaxar"
  ],
  "desc": "RPG em que você pode vencer os combates conversando."
 },
 {
  "id": 50,
  "img": "genshin-impact.svg",
  "nome": "Genshin Impact",
  "genero": "rpg",
  "tipo": "RPG de ação gratuito",
  "plat": [
   "pc",
   "console",
   "celular"
  ],
  "tempo": "longo",
  "clima": [
   "amigos",
   "relaxar"
  ],
  "desc": "Mundo aberto gratuito (com compras no jogo) e combate em tempo real."
 }
];
