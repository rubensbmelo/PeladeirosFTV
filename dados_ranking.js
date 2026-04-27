const bancoDeDadosRanking = [
    { nome: "Rafael",    total: 56, mes: 13 },  // 7 + 6
    { nome: "Tarciso",   total: 58, mes: 17 },  // 14 + 3
    { nome: "Júlio",     total: 47, mes: 10 },  // 4 + 6
    { nome: "Márcio",    total: 38, mes: 0  },  // não jogou
    { nome: "Rubens",    total: 44, mes: 9  },  // 7 + 2
    { nome: "Paulo",     total: 44, mes: 18 },  // 16 + 2
    { nome: "Fabio",     total: 22, mes: 10 },  // sem alteração
    { nome: "Diniz",     total: 37, mes: 11 },  // 33+4 / 7+4
    { nome: "Alex",      total: 26, mes: 4  },  // sem alteração
    { nome: "Anderson",  total: 22, mes: 7  },  // 5 + 2
    { nome: "João",      total: 22, mes: 11 },  // sem alteração
    { nome: "Thiago",    total: 14, mes: 0  },  // sem alteração
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);