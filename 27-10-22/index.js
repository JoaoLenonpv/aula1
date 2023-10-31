"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Classes_1 = require("./Classes");
var leitor = require("readline-sync");
var petshop = new Classes_1.SistemaDeAnimais();
while (true) {
    console.log("1 - Cadastrar Animais \uD83D\uDC31");
    console.log("2 - Remover Animais \uD83D\uDC31\u200D\uD83D\uDC64");
    console.log("3 - Listar Animais \uD83E\uDD93");
    console.log("4 - Fazer os animais interagirem \uD83D\uDC36");
    console.log("0 - Sair \u274C");
    var opt = leitor.questionInt("Informe a op\u00E7\u00E3o: ");
    switch (opt) {
        case 1:
            petshop.cadastrarAnimal();
            break;
        case 2:
            petshop.removerAnimais();
            break;
        case 3:
            petshop.listarAnimais();
            break;
        case 4:
            petshop.interagirAnimais();
            break;
        case 0:
            console.log("Saindo");
            process.exit(0);
        default:
            console.log("Op\u00E7\u00E3o inexistente, tente novamente");
            break;
    }
}