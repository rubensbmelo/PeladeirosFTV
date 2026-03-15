const bancoDeDadosRanking = [
    { nome: "Tarciso",   total: 35, mes: 8  },  // 32 + 3
    { nome: "Rafael",    total: 35, mes: 9  },  // 32 + 3
    { nome: "Júlio",     total: 32, mes: 12 },  // 27 + 5
    { nome: "Rubens",    total: 24, mes: 8  },  // 19 + 5 (Rubinho)
    { nome: "Márcio",    total: 29, mes: 5  },  // sem jogos em 15/03
    { nome: "Paulo",     total: 23, mes: 8  },  // 22 + 1
    { nome: "Alex",      total: 20, mes: 9  },  // 19 + 1
    { nome: "Diniz",     total: 19, mes: 6  },  // 18 + 1
    { nome: "Anderson",  total: 12, mes: 3  },  // sem jogos em 15/03
    { nome: "Thiago",    total: 11, mes: 4  },  // 10 + 1
    { nome: "João",      total: 10, mes: 4  },  // 7 + 3
    { nome: "Fabio",     total: 7,  mes: 7  },  // sem jogos em 15/03
    { nome: "Ximba",     total: 3,  mes: 3  },  // novo
    { nome: "Marcinho",  total: 2,  mes: 2  },  // novo
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);