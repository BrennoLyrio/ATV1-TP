import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesMaisConsumiramProdutos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem dos 10 clientes que mais consumiram produtos (em quantidade):\n`);

        // Ordena os clientes com base na quantidade de produtos consumidos, em ordem decrescente
        const clientesMaisConsumiramProdutos = this.clientes
            .sort((a, b) => b.getProdutosConsumidos.length - a.getProdutosConsumidos.length)
            .slice(0, 10); // Pega apenas os 10 primeiros

        // Verifica se há clientes com produtos consumidos
        if (clientesMaisConsumiramProdutos.length === 0) {
            console.log("Nenhum cliente consumiu produtos.");
            return;
        }

        // Exibe os 10 clientes com a quantidade de produtos consumidos
        clientesMaisConsumiramProdutos.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} - Quantidade de produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
        });
    }
}
