import { Loja } from "./Loja";
import * as leitor from "readline-sync"
let loja = new Loja("Loja 3KTI", "SENAC Centro")
let menu = true
while(menu){
    let opt = leitor.questionInt("Digite: \n1 - Verificar produtos \n2 - Inserir produtos \n3 - Remover produtos \n4 - Sair \n:")
    switch(opt){
        case 1:
            loja.getProdutos()
            break
        case 2:
            loja.setProdutos()
            break
        case 3:
            loja.removerProdutos()
            break
        case 4:
            console.log("Saindo.")
            menu = false
            break
    }
}