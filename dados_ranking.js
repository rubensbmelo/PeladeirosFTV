const bancoDeDadosRanking = [
    { nome: "Rafael",    total: 45, mes: 2  },
    { nome: "Tarciso",   total: 41, mes: 0  },
    { nome: "Júlio",     total: 41, mes: 4  },
    { nome: "Márcio",    total: 38, mes: 0  },
    { nome: "Rubens",    total: 38, mes: 3  },
    { nome: "Paulo",     total: 31, mes: 5  },
    { nome: "Fabio",     total: 17, mes: 5  },
    { nome: "Diniz",     total: 29, mes: 3  },
    { nome: "Alex",      total: 22, mes: 0  },
    { nome: "Anderson",  total: 15, mes: 0  },
    { nome: "João",      total: 15, mes: 4  },
    { nome: "Thiago",    total: 14, mes: 0  },
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);