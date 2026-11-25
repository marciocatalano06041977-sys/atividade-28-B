// 1. Solicita os dados ao estagiário e cria o objeto computador
const computador = {
    patrimonio: prompt("Digite o codigo do patrimônio do computador (ex: LAB-014):"),
    processador: prompt("Digite o processador (ex: Intel Core i5-12400):"),
    memoriaRAM: +prompt("Digite a memória RAM em GB (ex: 16):"),
    emManutencao: prompt("Está em manutenção? (sim / nao)") === "sim"
};

// 2. Exibe no console o resumo da máquina
console.log(
    "O computador de patrimônio " +
    computador.patrimonio +
    " possui processador " +
    computador.processador +
    " e " +
    computador.memoriaRAM +
    "GB de RAM."
);

// 3. Verifica e exibe o status de manutenção
if (computador.emManutencao) {
    console.log("Status: Em manutenção.");
} else {
    console.log("Status: Disponível / Sem manutenção.");
}

