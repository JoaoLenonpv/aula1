import * as leitor from "readline-sync"

class Medicamento{
    public nome: String;
    public qtdEstoque: number;
    public preco: number;

    constructor(nome: String, qtdEstoque: number, preco: number){
        this.nome = nome
        this.preco = preco
        this.qtdEstoque = qtdEstoque
    }
}

export class Farmacia{
    public medicamentos: Array<Medicamento>

    constructor(){
        this.medicamentos = []
    }

    public vendaMedicamentos(): void{
        let nome = leitor.question("Informe o nome do remédio para vender: ")
        let qtd = leitor.questionInt("Informe a quantidade: ")
        const medicamento = this.medicamentos.find(m => m.nome === nome)
        if (medicamento) {
            if(medicamento.qtdEstoque >= qtd) {
                medicamento.qtdEstoque -= qtd
                console.log(`Venda realizada: ${qtd} unidades de ${medicamento.nome}`);
            } else {
                console.log(`Estoque insuficiente para a venda de ${qtd} unidades de ${medicamento.nome}`);
            }
        } else {
            console.log(`Medicamento ${nome} não encontrado!`);
        }
    }

    // setters dos medicamentos 
    public comprarMedicamento(): void{
        let nome = leitor.question("Informe o nome do medicamento que irá ser comprado: ");
        let qtd = leitor.questionInt("A quantidade a ser comprada: ");
        let preco = leitor.questionInt("Informe o valor do medicamento: ");
        const medicamento = this.medicamentos.find(m => m.nome === nome)
        if (medicamento) {
            medicamento.qtdEstoque += qtd;
            medicamento.preco = preco
        } else {
            const novoMedicamento = new Medicamento(nome, qtd, preco);
            this.medicamentos.push(novoMedicamento);
        }
        console.log(`Compra realizada ${qtd} unidades de ${nome}`);
    }

    public inserirMedicamento(): void{
        let nome = leitor.question("Informe o nome do medicamento que irá ser inserido: ");
        let qtd = leitor.questionInt("A quantidade a ser inserida: ");
        let preco = leitor.questionInt("Informe o valor do medicamento: ");
        const novoMedicamento = new Medicamento(nome, qtd, preco);
        this.medicamentos.push(novoMedicamento);
        console.log(`Medicamento ${novoMedicamento.nome} inserido no estoque`);
    }

    public removerMedicamento(): void{
        let nome = leitor.question("Informe o nome do medicamento que irá ser removido: ");
        const index = this.medicamentos.findIndex(m => m.nome === nome)
        if (index){
            this.medicamentos.splice(index, 1)
            console.log(`Medicamento ${nome} removido do estoque`);            
        } else {
            console.log(`Medicamento ${nome} não removido do estoque, verifique o nome informado`);
        }
    }

    public substituirMedicamento(): void{
        let nomeAntigo = leitor.question("Insira o nome do remédio a ser substituido: ");

        const medicamentoAntigo = this.medicamentos.find((m) => m.nome === nomeAntigo)

        if (medicamentoAntigo) {
            //remover o remedio antigo
            const index = this.medicamentos.findIndex(m => m.nome === nomeAntigo)
            this.medicamentos.splice(index, 1)

            //inserir remedio novo
            let nomeNovo = leitor.question("Insira o nome do remédio a ser inserido no estoque: ");
            let qtd = leitor.questionInt("A quantidade a ser inserida: ");
            let preco = leitor.questionInt("Informe o valor do medicamento: ");
            const medicamentoNovo = new Medicamento(nomeNovo, qtd, preco)
            this.medicamentos.push(medicamentoNovo)
            console.log("Substituição realizada!");
        } else {
            console.log("Medicamento não encontrado para remoção");
        }

    }

    // get medicamentos:
    public visualizarEstoque(): void{
        console.log('Estoque de medicamento:');
        this.medicamentos.forEach((medicamento) => {
            console.log(`Nome: ${medicamento.nome}`);
            console.log(`Quantidade: ${medicamento.qtdEstoque}`);
            console.log(`Preco: ${medicamento.preco}`);
        })
    }
}