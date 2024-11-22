// listagemClientesValor.ts
import Cliente from "../modelo/cliente"; 
import Produto from "../modelo/produto"; 
import Servico from "../modelo/servico";  
import Listagem from "./listagem";  

export default class ListagemClienteValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        // Array para armazenar os totais consumidos por cada cliente
        let clientesComValorConsumido = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.reduce((total, produto: Produto) => total + produto.preco, 0);
            const totalServicos = cliente.getServicosConsumidos.reduce((total, servico: Servico) => total + servico.valor, 0);
            const totalConsumido = totalProdutos + totalServicos;
            return { cliente, totalConsumido };
        });

        // Ordenando os clientes pelo valor total consumido, do maior para o menor
        const clientesOrdenados = clientesComValorConsumido.sort((a, b) => b.totalConsumido - a.totalConsumido);

        console.log(`\nTop 5 Clientes que mais consumiram em valor:\n`);

        // Exibindo os 5 primeiros clientes
        for (let i = 0; i < 5 && i < clientesOrdenados.length; i++) {
            const { cliente, totalConsumido } = clientesOrdenados[i];
            console.log(`${i + 1} - Nome: ${cliente.nome}, CPF: ${cliente.getCpf.getValor}, Total Consumido: R$${totalConsumido.toFixed(2)}`);
        }
    }
}
