import { EmpresaDesenvolvimento } from "./Empresa";
import * as leitor from "readline-sync"
let empresa = new EmpresaDesenvolvimento("3KTI", "SENAC")
let menu = true
while(menu){
    let opt = leitor.questionInt("Digite: \n1 - Verificar funcionarios \n2 - Contratar funcionarios \n3 - Demitir funcionarios \n4 - Sair \n:")
    switch(opt){
        case 1:
            empresa.getEmpresa()
            break
        case 2:
            empresa.addFuncionario()
            break
        case 3:
            empresa.removerFuncionario()
            break
        case 4:
            console.log("Saindo.")
            menu = false
            break
    }
}