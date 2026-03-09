const bancoDeDadosRanking = [
    { nome: "Tarciso",   total: 32, mes: 5  },  // sem jogos em 08/03
    { nome: "Márcio",    total: 29, mes: 5  },  // sem jogos em 08/03
    { nome: "Júlio",     total: 27, mes: 7  },  // sem jogos em 08/03
    { nome: "Rafael",    total: 32, mes: 6  },  // 26 + 6
    { nome: "Paulo",     total: 22, mes: 7  },  // 19 + 3
    { nome: "Rubens",    total: 19, mes: 3  },  // 18 + 1 (Rubinho)
    { nome: "Alex",      total: 19, mes: 8  },  // 16 + 3
    { nome: "Diniz",     total: 18, mes: 5  },  // 15 + 3
    { nome: "Anderson",  total: 12, mes: 3  },  // 11 + 1
    { nome: "Thiago",    total: 10, mes: 3  },  // 7 + 3
    { nome: "João",      total: 7,  mes: 1  },  // 6 + 1 (só 1 jogo, perdeu os outros como dupla)
    { nome: "Fabio",     total: 7,  mes: 7  },  // 1 + 6
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);