import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import RegistroCompra from "./registrarCompra";

export default class RegistroCompraProdutos extends RegistroCompra {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor (clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public registrarCompra(): void {
        console.log(`\nInício do registro de compra de produtos\n`)

        // Solicita o CPF do cliente
        const cpf = this.entrada.receberTexto(`Informe o CPF do cliente que deseja adquirir o(s) produto(s): `);

        // Procura o cliente pelo CPF
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

        if (!cliente) {
            console.log(`\nCliente com CPF ${cpf} não encontrado.\n`);
            return;
        }

        console.log(`\nCliente encontrado: ${cliente.nome}. CPF: ${cpf}\n`);
        
        let continuar = true;

        while(continuar) {
            console.log(`\nProdutos disponíveis para compra:`)
            this.produtos.forEach((produto, index) => {
                console.log(`${index + 1} - ${produto.nome} (Valor: R$${produto.preco})`);
            });

            //solicitando o numero do produto para add no carrinho
            let escolhaProduto = this.entrada.receberNumero(`Informe o número do produto que deseja adquirir ou 0 para encerrar: `);

            // Encerrar a compra se o usuário digitar 0
            if (escolhaProduto === 0) {
                continuar = false;
                console.log(`\nCompra finalizada.\n`);
                break;
            }

            // Verificar se a escolha é válida
            if (escolhaProduto > 0 && escolhaProduto <= this.produtos.length) {
                const produtoSelecionado = this.produtos[escolhaProduto - 1];
                cliente.getProdutosConsumidos.push(produtoSelecionado);
                console.log(`\nProduto "${produtoSelecionado.nome}" adicionado ao consumo do cliente.\n`);
            } else {
                console.log(`\nOpção inválida. Tente novamente.\n`);
            }
        }
    }
}