// const dados = [
//     {
//         "id": 0,
//         "titulo": "WICKED: PARTE UM",
//         "ano_lancamento": "2024",
//         "descricao": "ANTES DE DOROTHY, EXISTIAM ELAS. EM UM OZ DESCONHECIDO, DUAS JOVENS COM DESTINOS ENTRELAÇADOS SE ENCONTRAM NA UNIVERSIDADE DE SHIZ: ELPHABA, UMA GAROTA DE PELE VERDE E ESPÍRITO INDOMÁVEL, E GLINDA, UMA POPULAR E AMBICIOSA ESTUDANTE DE BERÇO DE OURO. O QUE COMEÇA COMO UMA AMIZADE IMPROVÁVEL SE TRANSFORMA EM UMA HISTÓRIA ÉPICA DE MAGIA, ESCOLHAS E CONSEQUÊNCIAS. ENQUANTO O MUNDO AS ROTULA COMO BOA E MÁ, ELAS LUTAM PARA DEFINIR SUAS PRÓPRIAS IDENTIDADES EM UM UNIVERSO QUE NEM SEMPRE DISTINGUE O CERTO DO ERRADO. UMA JORNADA VISUALMENTE DESLUMBRANTE E EMOCIONALMENTE PROFUNDA, QUE REVELA O LADO OCULTO DO CONTO QUE PENSÁVAMOS CONHECER.",
//         "diretor": "JON M. CHU",
//         "imagem": "./Imagens/wicked.jpg",
//         "imagem_home": "./Imagens/wicked_home.jpg"
//     },
//     {
//         "id": 1,
//         "titulo": "AINDA ESTOU AQUI",
//         "ano_lancamento": "2024",
//         "descricao": "NUM BRASIL MARCADO PELA ESCURIDÃO DA DITADURA MILITAR, UMA MULHER SE TORNA LUZ. EUNICE PAIVA, ADVOGADA E MÃE, VÊ SUA VIDA VIRAR DE CABEÇA PARA BAIXO QUANDO SEU MARIDO DESAPARECE NAS MÃOS DO REGIME. ENQUANTO LUTA PARA CRIAR OS FILHOS, ELA SE TRANSFORMA EM UM SÍMBOLO DE RESISTÊNCIA E DETERMINAÇÃO. BASEADO EM UMA HISTÓRIA REAL COMOVENTE, ESTE FILME É UM TESTEMUNHO DO PODER DO AMOR E DA MEMÓRIA.",
//         "diretor": "WALTER SALLES",
//         "imagem": "./Imagens/ainda_estou.jpg",
//         "imagem_home": "./Imagens/ainda_estou_home.jpg"
//     },
//     {
//         "id": 2,
//         "titulo": "OPPENHEIMER",
//         "ano_lancamento": "2023",
//         "descricao": "ELE CRIOU A ARMA MAIS DESTRUTIVA DA HISTÓRIA... E NUNCA FOI O MESMO DEPOIS DISSO. \"OPPENHEIMER\" É UM MERGULHO PROFUNDO NA MENTE BRILHANTE E TORTURADA DE UM CIENTISTA QUE TRANSFORMOU O MUNDO — E PAGOU O PREÇO. EM UM JOGO DE PODER, CIÊNCIA E ÉTICA, O FILME DESVENDA OS BASTIDORES DO PROJETO MANHATTAN E O CONFLITO INTERNO DE UM HOMEM DIVIDIDO ENTRE A GLÓRIA E O REMORSO.",
//         "diretor": "CHRISTOPHER NOLAN",
//         "imagem": "./Imagens/oppenheimer.jpg",
//         "imagem_home": "./Imagens/oppenheimer_home.jpg"
//     },
//     {
//         "id": 3,
//         "titulo": "BARBIE",
//         "ano_lancamento": "2023",
//         "descricao": "BEM-VINDO AO MUNDO PERFEITO... OU QUASE. BARBIE VIVE EM BARBIELAND — UM UNIVERSO COLORIDO, BRILHANTE E IMPECAVELMENTE ORGANIZADO ONDE TODAS AS BARBIES SÃO PODEROSAS, OS KENS SÃO SECUNDÁRIOS E A FELICIDADE É A ÚNICA REGRA. MAS QUANDO BARBIE COMEÇA A QUESTIONAR A REALIDADE — E DESENVOLVE PÉS CHÃO — ELA EMBARCA EM UMA JORNADA AO MUNDO REAL PARA DESCOBRIR QUEM ELA REALMENTE É. UMA COMÉDIA ÁCIDA, INTELIGENTE E VISUALMENTE DESLUMBRANTE QUE BRINCA COM ESTEREÓTIPOS, EXPECTATIVAS SOCIAIS E IDENTIDADE, SEM PERDER O CHARME DE UMA BOA AVENTURA. BARBIE NÃO É APENAS UM FILME SOBRE BONECAS — É SOBRE SER MULHER, SER HUMANO, E SIM, SER KEN.",
//         "diretor": "GRETA GERWIG",
//         "imagem": "./Imagens/barbie.jpg",
//         "imagem_home": "./Imagens/barbie_home.jpg"
//     },
//     {
//         "id": 4,
//         "titulo": "ENOLA HOLMES",
//         "ano_lancamento": "2020",
//         "descricao": "EM PLENA INGLATERRA VITORIANA, ENOLA HOLMES, A IRMÃ MAIS NOVA DE SHERLOCK, DESCOBRE QUE SUA MÃE DESAPARECEU MISTERIOSAMENTE. RECUSANDO-SE A SER ENVIADA PARA UM INTERNATO, ELA FOGE PARA LONDRES, ENVOLVENDO-SE EM UMA CONSPIRAÇÃO QUE PODE MUDAR O DESTINO DO PAÍS. UMA AVENTURA INTELIGENTE E EMPODERADA, ONDE UMA JOVEM DESAFIA AS EXPECTATIVAS E MOSTRA QUE A INTELIGÊNCIA É UMA QUESTÃO DE ATITUDE.",
//         "diretor": "HARRY BRADBEER",
//         "imagem": "./Imagens/enola.jpg",
//         "imagem_home": "./Imagens/enola_home.jpg"
//     },
//     {
//         "id": 5,
//         "titulo": "DUNA: PARTE DOIS",
//         "ano_lancamento": "2024",
//         "descricao": "O DESTINO DE UM IMPÉRIO ESTÁ NAS MÃOS DE UM ÚNICO HOMEM. APÓS A TRAIÇÃO QUE DESTRUIU SUA CASA, PAUL ATREIDES SE ALIA AOS MISTERIOSOS FREMEN NAS AREIAS TRAIÇOEIRAS DE ARRAKIS. COM UMA VISÃO PROFÉTICA E UM DESEJO DE VINGANÇA, ELE PRECISA ESCOLHER ENTRE O AMOR, O PODER E O FUTURO DE TODA A HUMANIDADE. UMA AVENTURA ÉPICA, VISUALMENTE ESTONTEANTE E CARREGADA DE EMOÇÃO.",
//         "diretor": "DENIS VILLENEUVE",
//         "imagem": "./Imagens/duna.jpg",
//         "imagem_home": "./Imagens/duna_home.jpg"
//     },
//     {
//         "id": 6,
//         "titulo": "POBRES CRIATURAS",
//         "ano_lancamento": "2023",
//         "descricao": "UMA JOVEM MULHER É TRAZIDA DE VOLTA À VIDA POR UM CIENTISTA GENIAL — MAS NÃO É MAIS A MESMA. COM UMA MENTE EM DESCOBERTA CONSTANTE E UMA SEDE DE LIBERDADE, ELA EMBARCA EM UMA JORNADA SURREAL PELO MUNDO, CONFRONTANDO EXPECTATIVAS, DOGMAS E O PRÓPRIO SENTIDO DA EXISTÊNCIA. DIVERTIDO, PROVOCADOR E VISUALMENTE EXTRAVAGANTE, ESTE FILME É UMA CELEBRAÇÃO DA TRANSFORMAÇÃO E DO PODER DE ESCOLHER QUEM QUEREMOS SER.",
//         "diretor": "YORGOS LANTHIMOS",
//         "imagem": "./Imagens/pobres.jpg",
//         "imagem_home": "./Imagens/pobres_home.jpg"
//     },
//     {
//         "id": 7,
//         "titulo": "A SALA DOS PROFESSORES",
//         "ano_lancamento": "2023",
//         "descricao": "NUMA ESCOLA ONDE AS APARÊNCIAS ENGANAM, UMA PROFESSORA DEDICADA SE VÊ PRESA EM UMA TEIA DE SEGREDOS, ACUSAÇÕES E INJUSTIÇAS. QUANDO DECIDE DEFENDER UM ALUNO SUSPEITO DE ROUBO, ELA ABRE UMA CAIXA DE PANDORA QUE ABALA TODA A INSTITUIÇÃO. UM THRILLER SOCIAL INSTIGANTE, CHEIO DE TENSÃO, QUESTIONAMENTOS MORAIS E ESCOLHAS DIFÍCEIS.",
//         "diretor": "ILKER ÇATAK",
//         "imagem": "./Imagens/sala.jpg",
//         "imagem_home": "./Imagens/sala_home.jpg"
//     },
//     {
//         "id": 8,
//         "titulo": "ZONA DE INTERESSE",
//         "ano_lancamento": "2023",
//         "descricao": "EM UMA CASA COM JARDINS BEM CUIDADOS, PAREDES BRANCAS E SONS DISTANTES, UMA FAMÍLIA LEVA UMA VIDA \"NORMAL\"... A POUCOS METROS DE UM CAMPO DE CONCENTRAÇÃO. COM UMA NARRATIVA FRIA E CHOCANTE, ESTE FILME REVELA A BANALIDADE DO MAL E A CEGUEIRA MORAL DE QUEM PREFERE NÃO VER O HORROR AO SEU LADO. UMA EXPERIÊNCIA CINEMATOGRÁFICA PROFUNDA, DESAFIADORA E INESQUECÍVEL.",
//         "diretor": "JONATHAN GLAZER",
//         "imagem": "./Imagens/zona.jpg",
//         "imagem_home": "./Imagens/zona_home.jpg"
//     },
//     {
//         "id": 9,
//         "titulo": "O MENINO E A GARÇA",
//         "ano_lancamento": "2023",
//         "descricao": "APÓS UMA GRANDE PERDA, UM GAROTO ENCONTRA UMA MISTERIOSA GARÇA FALANTE QUE O LEVA A UM MUNDO ENCANTADO E ASSUSTADOR. LÁ, ELE BUSCARÁ RESPOSTAS SOBRE A VIDA, A MORTE E O SIGNIFICADO DE EXISTIR. A MAIS RECENTE OBRA-PRIMA DE HAYAO MIYAZAKI É UM MERGULHO POÉTICO EMOCIONANTE EM UNIVERSOS IMAGINÁRIOS, ONDE A INFÂNCIA E A FANTASIA SE ENCONTRAM COM A DOR E A CURA.",
//         "diretor": "HAYAO MIYAZAKI",
//         "imagem": "./Imagens/menino.jpg",
//         "imagem_home": "./Imagens/menino_home.jpg"
//     },
//     {
//         "id": 10,
//         "titulo": "FERRARI",
//         "ano_lancamento": "2023",
//         "descricao": "EMOÇÃO, VELOCIDADE E PERDA SE ENTRELAÇAM NESTA BIOGRAFIA PODEROSA DE ENZO FERRARI. ENTRE CORRIDAS MORTAIS, FALÊNCIAS E UM PASSADO TRAUMÁTICO, O FUNDADOR DA ESCUDERIA MAIS FAMOSA DO MUNDO PRECISA LUTAR PARA MANTER SUA FAMÍLIA UNIDA — E SUA PAIXÃO VIVA. UM DRAMA INTENSO E ESTILOSO, CHEIO DE MOTORES RUGINDO E CORAÇÕES PARTIDOS.",
//         "diretor": "MICHAEL MANN",
//         "imagem": "./Imagens/ferrari.jpg",
//         "imagem_home": "./Imagens/ferrari_home.jpg"
//     },
//     {
//         "id": 11,
//         "titulo": "O BATMAN",
//         "ano_lancamento": "2022",
//         "descricao": "A CIDADE DE GOTHAM ESTÁ EMBRENHADA EM CORRUPÇÃO E DESESPERO, E O HOMEM-MORCEGO SE LEVANTA DAS SOMBRAS COMO A ÚLTIMA ESPERANÇA DE JUSTIÇA. AO INVESTIGAR UMA SÉRIE DE ASSASSINATOS, BATMAN DESCOBRE UMA CONSPIRAÇÃO MAIOR DO QUE IMAGINAVA, ENFRENTANDO UMA SÉRIE DE INIMIGOS PERIGOSOS, CADA UM MAIS INSIDIOSO DO QUE O OUTRO. UM FILME CRUDO, SOMBRIO E ESTILISTICAMENTE IMPACTANTE, QUE REINVENTA O HERÓI EM SUA FORMA MAIS HUMANA E VULNERÁVEL.",
//         "diretor": "MATT REEVES",
//         "imagem": "./Imagens/batman.jpg",
//         "imagem_home": "./Imagens/batman_home.jpg"
//     },
//     {
//         "id": 12,
//         "titulo": "VINGADORES: GUERRA INFINITA",
//         "ano_lancamento": "2018",
//         "descricao": "OS VINGADORES E SEUS ALIADOS UNEM FORÇAS PARA IMPEDIR O TITÃ THOR, QUE AMEAÇA DESTRUIR O UNIVERSO COLETANDO AS GEMAS DO INFINITO. ENQUANTO O CUSTO DE UMA LUTA TITÂNICA ALCANÇA NOVOS NÍVEIS, UM DOS MAIS PERIGOSOS VILÕES DA HISTÓRIA DOS QUADRINHOS BATE À PORTA COM UM OBJETIVO IMPLACÁVEL: O EXTERMÍNIO DE MEIO UNIVERSO. UMA JORNADA REPLETA DE SACRIFÍCIOS, AMIZADE E CORAGEM.",
//         "diretor": "ANTHONY RUSSO E JOE RUSSO",
//         "imagem": "./Imagens/vingadores.jpg",
//         "imagem_home": "./Imagens/vingadores_home.jpg"
//     },
//     {
//         "id": 13,
//         "titulo": "VIDAS PASSADAS",
//         "ano_lancamento": "2023",
//         "descricao": "DOIS AMIGOS DE INFÂNCIA COREANOS SÃO SEPARADOS E SE REENCONTRAM DÉCADAS DEPOIS. ENTRE MEMÓRIAS, SILÊNCIOS E OLHARES, UMA HISTÓRIA DE AMOR E DESTINO TOMA FORMA. UM DRAMA DELICADO, MELANCÓLICO E UNIVERSAL SOBRE O QUE PODERIA TER SIDO.",
//         "diretor": "CELINE SONG",
//         "imagem": "./Imagens/vidas.jpg",
//         "imagem_home": "./Imagens/vidas_home.jpg"
//     },
//     {
//         "id": 14,
//         "titulo": "AVATAR: O CAMINHO DA ÁGUA",
//         "ano_lancamento": "2022",
//         "descricao": "EM PANDORA, JAKE SULLY E NEYTIRI AGORA TÊM UMA FAMÍLIA E TENTAM ENCONTRAR A PAZ EM UM MUNDO MÁGICO E VULNERÁVEL. NO ENTANTO, UMA NOVA AMEAÇA SURGE, FORÇANDO OS DOIS A ENFRENTAR O PASSADO E LIDAR COM OS PERIGOS DO MUNDO MARINHO, NO QUAL SEUS FILHOS CRESCEM. UMA EXPLOSÃO DE EMOÇÃO, BELEZA E INOVAÇÃO TECNOLÓGICA, LEVANDO O ESPECTADOR A UMA VIAGEM VISUAL QUE REDEFINIU A FANTASIA CINEMATOGRÁFICA.",
//         "diretor": "JAMES CAMERON",
//         "imagem": "./Imagens/avatar.jpg",
//         "imagem_home": "./Imagens/avatar_home.jpg"
//     },
//     {
//         "id": 15,
//         "titulo": "O ABUTRE",
//         "ano_lancamento": "2014",
//         "descricao": "UM JORNALISTA AMBICIOSO SE APROPRIA DE IMAGENS GRÁFICAS E DURA REALIDADE, VENDENDO AS IMAGENS MAIS CHOCANTES E IMPACTANTES DAS TRAGÉDIAS URBANAS. À MEDIDA QUE SE ADELITA EM UM MUNDO SANGRENTO E SEM ÉTICA, A LÍNHA ENTRE A MORAL E A AMBIÇÃO SE DESTROI. UM FILME SOMBRIO E ARREPIANTE SOBRE A BUSCA INCESSANTE POR FAMA E O CUSTO HUMANO DESSE CAMINHO.",
//         "diretor": "DAN GILROY",
//         "imagem": "./Imagens/abutre.jpg",
//         "imagem_home": "./Imagens/abutre_home.jpg"
//     },
//     {
//         "id": 16,
//         "titulo": "O PODEROSO CHEFÃO",
//         "ano_lancamento": "1972",
//         "descricao": "UMA SAGA ÉPICA SOBRE HONRA, FAMÍLIA E O PREÇO DO PODER. QUANDO O DONO DE UMA DAS MAIS INFLUENTES FAMÍLIAS MAFIOSAS É FERIDO, SEU FILHO HERDA UM IMPÉRIO DE VIOLÊNCIA E LEALDADE. UMA OBRA-PRIMA ABSOLUTA, ÍCONE DO CINEMA MUNDIAL.",
//         "diretor": "FRANCIS FORD COPPOLA",
//         "imagem": "./Imagens/poderoso.jpg",
//         "imagem_home": "./Imagens/poderoso_home.jpg"
//     },
//     {
//         "id": 17,
//         "titulo": "TITANIC",
//         "ano_lancamento": "1997",
//         "descricao": "UM AMOR IMPOSSÍVEL FLORESCE A BORDO DO NAVIO MAIS FAMOSO DA HISTÓRIA. ENQUANTO A CLASSE SOCIAL SEPARA SEUS MUNDOS, A TRAGÉDIA UNE SEUS DESTINOS. UM ROMANCE ÉPICO, INTENSO E DEVASTADOR QUE EMOCIONOU MILHÕES.",
//         "diretor": "JAMES CAMERON",
//         "imagem": "./Imagens/titanic.jpg",
//         "imagem_home": "./Imagens/titanic_home.jpg"
//     },
//     {
//         "id": 18,
//         "titulo": "O SENHOR DOS ANÉIS: A SOCIEDADE DO ANEL",
//         "ano_lancamento": "2001",
//         "descricao": "UM ANEL PODEROSO, UM POVO EM RISCO, UMA MISSÃO IMPOSSÍVEL. UM JOVEM HOBBIT CARREGA O DESTINO DA TERRA-MÉDIA EM SUAS MÃOS. A AVENTURA ÉPICA QUE REDEFINIU A FANTASIA NO CINEMA.",
//         "diretor": " PETER JACKSON",
//         "imagem": "./Imagens/senhor.jpg",
//         "imagem_home": "./Imagens/senhor_home.jpg"
//     },
//     {
//         "id": 19,
//         "titulo": "CLUBE DA LUTA",
//         "ano_lancamento": "1999",
//         "descricao": "UM HOMEM INSATISFEITO COM A VIDA CORPORATIVA ENCONTRA UM LÍDER ANARQUISTA E JUNTO DELE FORMA UM CLUBE SECRETO DE LUTA. UMA NARRATIVA SURPREENDENTE, SOMBRIA E SUBVERSIVA SOBRE IDENTIDADE, MASCULINIDADE E CAOS.",
//         "diretor": "DAVID FINCHER",
//         "imagem": "./Imagens/clube.jpg",
//         "imagem_home": "./Imagens/clube_home.jpg"
//     },
//     {
//         "id": 20,
//         "titulo": "FORREST GUMP: O CONTADOR DE HISTÓRIAS",
//         "ano_lancamento": "1994",
//         "descricao": "UM HOMEM SIMPLES, MAS EXTRAORDINÁRIO, PRESENCIA ALGUNS DOS MOMENTOS MAIS IMPORTANTES DO SÉCULO XX. ENTRE CORRIDAS, AMORES E GUERRAS, SUA HISTÓRIA PROVA QUE TODO MUNDO TEM ALGO A CONTAR.",
//         "diretor": "ROBERT ZEMECKIS",
//         "imagem": "./Imagens/forrest.jpg",
//         "imagem_home": "./Imagens/forrest_home.jpg"
//     },
//     {
//         "id": 21,
//         "titulo": "MATRIX",
//         "ano_lancamento": "1999",
//         "descricao": "O QUE É REAL? UM HACKER DESCOBRE QUE O MUNDO EM QUE VIVE É UMA SIMULAÇÃO E SE UNE A UM GRUPO DE REBELDES PARA LIBERTAR A HUMANIDADE. UMA REVOLUÇÃO VISUAL E FILOSÓFICA NO CINEMA DE AÇÃO.",
//         "diretor": "LANA WACHOWSKI",
//         "imagem": "./Imagens/matrix.jpg",
//         "imagem_home": "./Imagens/matrix_home.jpg"
//     },
//     {
//         "id": 22,
//         "titulo": "PARASITA",
//         "ano_lancamento": "2019",
//         "descricao": "DUAS FAMÍLIAS. UM ABISMO SOCIAL. QUANDO UMA COMEÇA A INFILTRAR-SE NA OUTRA, UMA SUCESSÃO DE ENGANOS, TENSÃO E REVELAÇÕES MORTAIS TRANSFORMA ESTA HISTÓRIA NUMA DENÚNCIA BRILHANTE SOBRE DESIGUALDADE. UM SUSPENSE GENIAL E CHOCANTE, VENCEDOR DO OSCAR DE MELHOR FILME.",
//         "diretor": "BONG JOON-HO",
//         "imagem": "./Imagens/parasita.jpg",
//         "imagem_home": "./Imagens/parasita_home.jpg"
//     },
//     {
//         "id": 23,
//         "titulo": "O SOM DO SILÊNCIO",
//         "ano_lancamento": "2019",
//         "descricao": "UM BATERISTA DE METAL PERDE A AUDIÇÃO E PRECISA RECONSTRUIR SUA VIDA EM SILÊNCIO. UMA EXPERIÊNCIA SENSORIAL, EMOCIONAL E PROFUNDAMENTE HUMANA SOBRE ACEITAÇÃO, MUDANÇA E O QUE SIGNIFICA ESCUTAR DE VERDADE.",
//         "diretor": "DARIUS MARDER",
//         "imagem": "./Imagens/som.jpg",
//         "imagem_home": "./Imagens/som_home.jpg"
//     },
//     {
//         "id": 24,
//         "titulo": "ATTACK ON TITAN: O ÚLTIMO ATAQUE",
//         "ano_lancamento": "2024",
//         "descricao": "EREN YEAGER, CONSUMIDO PELA DOR E PELO DESEJO DE VINGANÇA, LIBERTA O PODER ABSOLUTO DOS TITÃS PARA ANIQUILAR TODA A HUMANIDADE FORA DE ELDIA. ENQUANTO O MUNDO TREME DIANTE DO \"RETUMBAR\", SEUS ANTIGOS AMIGOS E INIMIGOS SE UNEM EM UMA CORRIDA DESESPERADA PARA DETÊ-LO. UMA CONCLUSÃO ÉPICA, EMOCIONAL E VISUALMENTE ESTONTEANTE QUE ENCERRA UMA DAS MAIORES SAGAS DO ANIME.",
//         "diretor": "YUICHIRO HAYASHI",
//         "imagem": "./Imagens/attack.jpg",
//         "imagem_home": "./Imagens/attack_home.jpg"
//     },
// ]