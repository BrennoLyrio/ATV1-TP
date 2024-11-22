import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    public produtos: Array<Produto>;
    
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public listar(): void {
        console.log(`\nLista de Todos os produtos:\n`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Marca: ` + produto.marca);
            console.log(`Categoria: ` + produto.categoria);
            console.log(`Tipo de animal: ` + produto.tipoAnimal);
            console.log(`Descrição: ` + produto.descricao);
            console.log(`Preço: R$${produto.preco.toFixed(2)}`);
            console.log(`----------------------------------------`)
        })
    }
}