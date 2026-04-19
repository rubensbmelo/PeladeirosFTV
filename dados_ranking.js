const bancoDeDadosRanking = [
    { nome: "Rafael",    total: 50, mes: 7  },
    { nome: "Tarciso",   total: 55, mes: 14 },
    { nome: "Júlio",     total: 41, mes: 4  },
    { nome: "Márcio",    total: 38, mes: 0  },
    { nome: "Rubens",    total: 42, mes: 7  },
    { nome: "Paulo",     total: 42, mes: 16 },
    { nome: "Fabio",     total: 22, mes: 10 },
    { nome: "Diniz",     total: 33, mes: 7  },
    { nome: "Alex",      total: 26, mes: 4  },
    { nome: "Anderson",  total: 20, mes: 5  },
    { nome: "João",      total: 22, mes: 11 },
    { nome: "Thiago",    total: 14, mes: 0  },
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);