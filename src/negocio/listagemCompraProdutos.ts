import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemCompraProdutos extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        console.log(`\nInício da listagem de produtos consumidos \n`);

        let cliente: Cliente | undefined;

        // Solicita o CPF do cliente até encontrar um cliente válido
        while (!cliente) {
            const cpf = this.entrada.receberTexto(`Informe o CPF do cliente para ver os produtos consumidos: `);

            // Procura o cliente pelo CPF
            cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

            if (!cliente) {
                console.log(`\nCliente com CPF ${cpf} não encontrado. Tente novamente.\n`);
            }
        }
        console.log(`\nCliente encontrado: ${cliente.nome}. CPF: ${cliente.getCpf.getValor}\n`);
        console.log(`Produtos consumidos pelo cliente:\n`);

        //verifica se o cliente consumiu algum produto
        if (cliente.getProdutosConsumidos.length === 0){
            console.log(`\nNenhum produto consumido pelo cliente\n`)
            return
        }
        cliente.getProdutosConsumidos.forEach((produto, index) => {
            console.log(`${index + 1} - ${produto.nome} (Valor: R$${produto.preco.toFixed(2)})`)
        })
    }
}