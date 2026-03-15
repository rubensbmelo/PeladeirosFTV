const bancoDeDadosRanking = [
    { nome: "Tarciso",   total: 35, mes: 8  },
    { nome: "Rafael",    total: 35, mes: 9  },
    { nome: "Júlio",     total: 32, mes: 12 },
    { nome: "Márcio",    total: 31, mes: 7  },  // Marcinho = Márcio
    { nome: "Rubens",    total: 24, mes: 8  },
    { nome: "Paulo",     total: 23, mes: 8  },
    { nome: "Alex",      total: 20, mes: 9  },
    { nome: "Anderson",  total: 15, mes: 6  },  // Ximba = Anderson
    { nome: "Diniz",     total: 19, mes: 6  },
    { nome: "Thiago",    total: 11, mes: 4  },
    { nome: "João",      total: 10, mes: 4  },
    { nome: "Fabio",     total: 7,  mes: 7  },
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);