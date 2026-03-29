const bancoDeDadosRanking = [
    { nome: "Rafael",    total: 43, mes: 17 },
    { nome: "Tarciso",   total: 41, mes: 14 },
    { nome: "Márcio",    total: 38, mes: 14 },
    { nome: "Júlio",     total: 37, mes: 17 },
    { nome: "Rubens",    total: 35, mes: 19 },
    { nome: "Paulo",     total: 26, mes: 11 },
    { nome: "Diniz",     total: 26, mes: 13 },
    { nome: "Alex",      total: 22, mes: 11 },
    { nome: "Anderson",  total: 15, mes: 6  },
    { nome: "Thiago",    total: 14, mes: 7  },
    { nome: "João",      total: 11, mes: 5  },
    { nome: "Fabio",     total: 12, mes: 12 },
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);