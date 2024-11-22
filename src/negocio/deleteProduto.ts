import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Delete from "./delete";

export default class DeleteProduto extends Delete {
    public produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log(`\nInício da exclusão do produto\n`);

        // Solicitar o código SKU do produto a ser excluído
        const sku = this.entrada.receberTexto(`Informe o código identificador do produto (SKU) que deseja excluir: `);

        // Procurar o produto pelo codigo
        const produto = this.produtos.find(prod => prod.codigo === sku);

        if (produto) {
            // Se o produto for encontrado, removê-lo
            const index = this.produtos.indexOf(produto);
            this.produtos.splice(index, 1);  // Remove o produto do array
            console.log(`\nProduto com SKU ${sku} e nome ${produto.nome} excluído com sucesso!\n`);
        } else {
            // Se o produto não for encontrado, exibe uma mensagem de erro
            console.log(`\nProduto com SKU ${sku} não encontrado.\n`);
        }
    }
}
