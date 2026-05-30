const bancoDeDadosRanking = [
    { nome: "Rafael",    total: 65, mes: 9,  trofeus: 0, mesesCampeao: [] },
    { nome: "Tarciso",   total: 68, mes: 10, trofeus: 1, mesesCampeao: ["Fevereiro"] },
    { nome: "Júlio",     total: 52, mes: 5,  trofeus: 0, mesesCampeao: [] },
    { nome: "Márcio",    total: 38, mes: 0,  trofeus: 0, mesesCampeao: [] },
    { nome: "Rubens",    total: 46, mes: 2,  trofeus: 1, mesesCampeao: ["Março"] },
    { nome: "Paulo",     total: 53, mes: 9,  trofeus: 1, mesesCampeao: ["Abril"] },
    { nome: "Fabio",     total: 37, mes: 15, trofeus: 0, mesesCampeao: [] },
    { nome: "Diniz",     total: 45, mes: 8,  trofeus: 0, mesesCampeao: [] },
    { nome: "Alex",      total: 26, mes: 0,  trofeus: 0, mesesCampeao: [] },
    { nome: "Anderson",  total: 29, mes: 7,  trofeus: 0, mesesCampeao: [] },
    { nome: "João",      total: 24, mes: 2,  trofeus: 0, mesesCampeao: [] },
    { nome: "Thiago",    total: 20, mes: 6,  trofeus: 0, mesesCampeao: [] },
    { nome: "Samyr",     total: 3,  mes: 3,  trofeus: 0, mesesCampeao: [] },
];

bancoDeDadosRanking.sort((a, b) => b.total - a.total);