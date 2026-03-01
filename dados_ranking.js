// dados_ranking.js atualizado com a rodada de Março
const bancoDeDadosRanking = [
    { nome: "Tarciso", total: 32, mes: 5 },   // 27 + 5 vitórias
    { nome: "Márcio", total: 29, mes: 5 },    // 24 + 5 vitórias
    { nome: "Júlio", total: 27, mes: 7 },     // 20 + 7 vitórias
    { nome: "Rafael", total: 26, mes: 0 },    // 26 + 0 vitórias
    { nome: "Paulo", total: 19, mes: 4 },     // 15 + 4 vitórias
    { nome: "Rubens", total: 18, mes: 2 },    // 16 + 2 vitórias (Rubinho)
    { nome: "Alex", total: 16, mes: 5 },      // 11 + 5 vitórias
    { nome: "Diniz", total: 15, mes: 2 },     // 13 + 2 vitórias
    { nome: "Anderson", total: 11, mes: 2 },  // 9 + 2 vitórias
    { nome: "Thiago", total: 7, mes: 0 },     // 7 + 0 vitórias
    { nome: "João", total: 6, mes: 1 },       // 5 + 1 vitória
    { nome: "Fabio", total: 1, mes: 1 }       // Atleta novo entrando no ranking
];

// Ordenação opcional por vitórias no mês
bancoDeDadosRanking.sort((a, b) => b.mes - a.mes);