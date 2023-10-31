import { Farmacia } from "./Classes";
import * as leitor from "readline-sync"

const farmacia = new Farmacia()

while(true){
    console.log(`Selecione uma opção: `);
    console.log(`1 - Vender Medicamento`);
    console.log(`2 - Comprar Medicamento`);
    console.log(`3 - Substituir Medicamento`);
    console.log(`4 - Remover Medicamento`);
    console.log(`5 - Inserir Medicamento`);
    console.log(`6 - Visualizar Estoque`);
    console.log(`7 - Sair`);
    let option = leitor.questionInt("Digite o número desejado: ")

    switch(option){
        case 1:
            farmacia.vendaMedicamentos();
            break;
        case 2:
            farmacia.comprarMedicamento();
            break;
        case 3:
            farmacia.substituirMedicamento();
            break;
        case 4:
            farmacia.removerMedicamento();
            break;
        case 5:
            farmacia.inserirMedicamento();
            break;
        case 6:
            farmacia.visualizarEstoque();
            break;
        case 7:
            console.log("Saindo...");
            process.exit(0);
        default:
            console.log("Opção inválida, tente novamente");
    }
}