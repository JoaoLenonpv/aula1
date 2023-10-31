import { SistemaDeAnimais } from "./Classes";
import * as leitor from "readline-sync"

let petshop = new SistemaDeAnimais()

while(true){
    console.log(`1 - Cadastrar Animais 🐱`);
    console.log(`2 - Remover Animais 🐱‍👤`);
    console.log(`3 - Listar Animais 🦓`);
    console.log(`4 - Fazer os animais interagirem 🐶`);
    console.log(`0 - Sair ❌`);

    let opt = leitor.questionInt(`Informe a opção: `);
    switch(opt){
        case 1:
            petshop.cadastrarAnimal()
            break;
        case 2:
            petshop.removerAnimais()
            break;
        case 3: 
            petshop.listarAnimais()
            break;
        case 4:
            petshop.interagirAnimais()
            break;
        case 0:
            console.log(`Saindo`);
            process.exit(0)
        default:
            console.log(`Opção inexistente, tente novamente`);
            break;
    }
}