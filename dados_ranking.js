const bancoDeDadosRanking = [
    { nome: "Rafael",    total: 49, mes: 6  },
    { nome: "Tarciso",   total: 49, mes: 8  },
    { nome: "Júlio",     total: 41, mes: 4  },
    { nome: "Márcio",    total: 38, mes: 0  },
    { nome: "Rubens",    total: 41, mes: 6  },
    { nome: "Paulo",     total: 39, mes: 13 },
    { nome: "Fabio",     total: 17, mes: 5  },
    { nome: "Diniz",     total: 30, mes: 4  },
    { nome: "Alex",      total: 25, mes: 3  },
    { nome: "Anderson",  total: 19, mes: 4  },
    { nome: "João",      total: 16, mes: 5  },
    { nome: "Thiago",    total: 14, mes: 0  },
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);