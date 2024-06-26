const monitorings = [
  {
    location: `Bloco 01: 23°33'01.42"S 46°38'02.21"W`,
    culture: "Tomate",
    health: "Excelente",
    harvest: "Em 4 dias",
    estimatedQuantity: 879,
    estimatedProfit: 7298.23,
    sprite: "../../assets/tiles/f1.png",
  },
  {
    location: `Bloco 02: 23°33'15.60"S 46°37'51.40"W`,
    culture: "Alface",
    health: "Boa",
    harvest: "Em uma semana",
    estimatedQuantity: 500,
    estimatedProfit: 15000.55,
    sprite: "../../assets/tiles/g2.png",
  },
  {
    location: `Bloco 04: 23°33'35.50"S 46°37'25.70"W`,
    culture: "Milho",
    health: "Ruim",
    harvest: "Em um mês",
    estimatedQuantity: 200,
    estimatedProfit: 6000.00,
    sprite: "../../assets/tiles/e3.png",
  },
  {
    location: `Bloco 05: 23°33'45.10"S 46°37'11.90"W`,
    culture: "Feijão",
    health: "Excelente",
    harvest: "Em duas semanas",
    estimatedQuantity: 400,
    estimatedProfit: 12000.75,
    sprite: "../../assets/tiles/g3.png",
  },
  {
    location: `Bloco 06: 23°33'55.22"S 46°36'58.80"W`,
    culture: "Cenoura",
    health: "Boa",
    harvest: "Em três semanas",
    estimatedQuantity: 600,
    estimatedProfit: 18000.33,
    sprite: "../../assets/tiles/e2.png",
  },
  {
    location: `Bloco 07: 23°34'05.37"S 46°36'45.61"W`,
    culture: "Abóbora",
    health: "Insatisfatória",
    harvest: "Em quatro semanas",
    estimatedQuantity: 250,
    estimatedProfit: 7000.44,
    sprite: "../../assets/tiles/e1.png",
  },
  {
    location: `Bloco 01: 23°33'01.42"S 46°38'02.21"W`,
    culture: "Tomate",
    health: "Boa",
    harvest: "Em 2 dias",
    estimatedQuantity: 1226,
    estimatedProfit: 10298.23,
    sprite: "../../assets/tiles/f1.png",
  },
  {
    location: `Bloco 03: 23°33'25.89"S 46°37'39.12"W`,
    culture: "Trigo",
    health: "Excelente",
    harvest: "Em três semanas",
    estimatedQuantity: 300,
    estimatedProfit: 8000.89,
    sprite: "../../assets/tiles/t1.png",
  },
  {
    location: `Bloco 08: 23°34'15.50"S 46°36'32.40"W`,
    culture: "Batata",
    health: "Ruim",
    harvest: "Em seis semanas",
    estimatedQuantity: 150,
    estimatedProfit: 4500.20,
    sprite: "../../assets/tiles/e3.png",
  },
  {
    location: `Bloco 09: 23°34'25.68"S 46°36'19.20"W`,
    culture: "Pepino",
    health: "Excelente",
    harvest: "Em duas semanas",
    estimatedQuantity: 300,
    estimatedProfit: 9000.99,
    sprite: "../../assets/tiles/g1.png",
  },
  {
    location: `Bloco 10: 23°34'35.85"S 46°36'06.10"W`,
    culture: "Beterraba",
    health: "Boa",
    harvest: "Em três semanas",
    estimatedQuantity: 450,
    estimatedProfit: 13500.67,
    sprite: "../../assets/tiles/g2.png",
  },
  {
    location: `Bloco 11: 23°34'45.97"S 46°35'52.90"W`,
    culture: "Couve",
    health: "Insatisfatória",
    harvest: "Em quatro semanas",
    estimatedQuantity: 200,
    estimatedProfit: 6000.22,
    sprite: "../../assets/tiles/e2.png",
  },
  {
    location: `Bloco 12: 23°34'56.11"S 46°35'39.80"W`,
    culture: "Melancia",
    health: "Ruim",
    harvest: "Em cinco semanas",
    estimatedQuantity: 100,
    estimatedProfit: 3000.10,
    sprite: "../../assets/tiles/e3.png",
  },
  {
    location: `Bloco 13: 23°35'06.24"S 46°35'26.70"W`,
    culture: "Repolho",
    health: "Excelente",
    harvest: "Em duas semanas",
    estimatedQuantity: 500,
    estimatedProfit: 15000.55,
    sprite: "../../assets/tiles/g2.png",
  },
  {
    location: `Bloco 14: 23°35'16.36"S 46°35'13.60"W`,
    culture: "Pimentão",
    health: "Boa",
    harvest: "Em uma semana",
    estimatedQuantity: 350,
    estimatedProfit: 10500.45,
    sprite: "../../assets/tiles/g3.png",
  },
  {
    location: `Bloco 15: 23°35'26.48"S 46°35'00.50"W`,
    culture: "Ervilha",
    health: "Insatisfatória",
    harvest: "Em três semanas",
    estimatedQuantity: 150,
    estimatedProfit: 4500.18,
    sprite: "../../assets/tiles/g3.png",
  },
  {
    location: `Bloco 16: 23°35'36.59"S 46°34'47.40"W`,
    culture: "Espinafre",
    health: "Ruim",
    harvest: "Em quatro semanas",
    estimatedQuantity: 120,
    estimatedProfit: 3600.15,
    sprite: "../../assets/tiles/e3.png",
  },
  {
    location: `Bloco 17: 23°35'46.70"S 46°34'34.30"W`,
    culture: "Rúcula",
    health: "Excelente",
    harvest: "Em duas semanas",
    estimatedQuantity: 200,
    estimatedProfit: 6000.88,
    sprite: "../../assets/tiles/g1.png",
  },
  {
    location: `Bloco 18: 23°35'56.81"S 46°34'21.20"W`,
    culture: "Cebola",
    health: "Boa",
    harvest: "Em uma semana",
    estimatedQuantity: 300,
    estimatedProfit: 9000.44,
    sprite: "../../assets/tiles/g3.png",
  },
  {
    location: `Bloco 19: 23°36'06.92"S 46°34'08.10"W`,
    culture: "Quiabo",
    health: "Insatisfatória",
    harvest: "Em dois meses",
    estimatedQuantity: 100,
    estimatedProfit: 3000.22,
    sprite: "../../assets/tiles/e1.png",
  },
  {
    location: `Bloco 20: 23°36'17.03"S 46°33'55.00"W`,
    culture: "Abobrinha",
    health: "Ruim",
    harvest: "Em quatro semanas",
    estimatedQuantity: 80,
    estimatedProfit: 2400.10,
    sprite: "../../assets/tiles/e2.png",
  },
  {
    location: `Bloco 16: 23°35'36.59"S 46°34'47.40"W`,
    culture: "Espinafre",
    health: "Boa",
    harvest: "Em uma semana",
    estimatedQuantity: 120,
    estimatedProfit: 3600.15,
    sprite: "../../assets/tiles/g1.png",
  },
];
