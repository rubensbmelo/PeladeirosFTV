const bancoDeDadosRanking = [
    { nome: "Tarciso",   total: 40, mes: 13 },
    { nome: "Rafael",    total: 39, mes: 13 },
    { nome: "Júlio",     total: 32, mes: 12 },
    { nome: "Márcio",    total: 31, mes: 7  },
    { nome: "Rubens",    total: 28, mes: 12 },
    { nome: "Paulo",     total: 26, mes: 11 },
    { nome: "Diniz",     total: 25, mes: 12 },  // corrigido (mes era 6, correto 7 + 5 hoje)
    { nome: "Alex",      total: 22, mes: 11 },
    { nome: "Anderson",  total: 15, mes: 6  },
    { nome: "Thiago",    total: 14, mes: 7  },
    { nome: "João",      total: 11, mes: 5  },  // corrigido (mes era 4, correto 5)
    { nome: "Fabio",     total: 11, mes: 11 },  // corrigido (mes era 7, correto 9 + 2 hoje)
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);