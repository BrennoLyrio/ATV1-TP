import Produto from "../modelo/produto";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdutosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nProdutos mais consumidos:\n`);

        const produtoConsumo: { [nome: string]: number } = {};

        // Conta a quantidade de consumo de cada produto entre todos os clientes
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                produtoConsumo[produto.nome] = (produtoConsumo[produto.nome] || 0) + 1;
            });
        });

        // Ordena os produtos por quantidade consumida
        const produtosOrdenados = Object.entries(produtoConsumo)
            .sort(([, qtdA], [, qtdB]) => qtdB - qtdA)
            .slice(0, 10); // Pega os 10 produtos mais consumidos

        // Exibe a lista dos produtos mais consumidos
        produtosOrdenados.forEach(([nome, quantidade], index) => {
            console.log(`${index + 1} - ${nome}: ${quantidade} consumo(s)`);
        });
    }
}
