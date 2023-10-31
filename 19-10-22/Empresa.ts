import * as leitor from "readline-sync"

class Funcionario{
    nome: String;
    cargo: String;
    constructor(nome: String, cargo: String){
        this.nome = nome
        this.cargo = cargo
    }
}

export class EmpresaDesenvolvimento{
    nome: String;
    endereco: String;
    funcionarios: Array<Funcionario>;

    constructor(nome: String, endereco: String){
        this.nome = nome
        this.endereco = endereco
        this.funcionarios = []
    }

    addFuncionario(): void{
        let nomeF  = leitor.question("Informe o nome do funcionario: ")
        let cargoF = leitor.question("Informe o cargo do funcionario: ")
        let novoFuncionario = new Funcionario(nomeF, cargoF)
        this.funcionarios.push(novoFuncionario)
    }

    removerFuncionario(): void{
        let nomeRemover = leitor.question("Informe o nome do funcionario a ser demitido: ")
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.nome !== nomeRemover)
    }

    getEmpresa(): void{
        console.log(`Empresa de Desenvolvimento ${this.nome}`)
        this.funcionarios.forEach(funcionario => {
            console.log(`Nome do Funcionario ${funcionario.nome} e seu cargo: ${funcionario.cargo}`);
        })
    }


}
