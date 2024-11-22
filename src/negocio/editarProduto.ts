import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Edicao from "./editar";

export default class EditarProduto extends Edicao {
    private entrada: Entrada
    public produtos: Array<Produto>

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()

    }

    // Função para validar se o número é positivo
    private validarNumeroPositivo(valor: number): boolean {
        return valor > 0;
    }


    public editar(): void {
        console.log(`\nInicio edicao do produto`)

        let codigoProduto = this.entrada.receberTexto(`Informe o código do produto que deseja alterar: `)

        let produto = this.produtos.find(p => p.codigo === codigoProduto)

        if (produto) {
            console.log(`Produto encontrado: ${produto.nome}, com o Código: ${produto.codigo}`);

            //Solicita os novos dados para o produto
            let novoNome = this.entrada.receberTexto(`Novo nome do produto (deixe em branco para não alterar): `);
            let novoPreco = this.entrada.receberNumero(`Novo preço do produto (deixe em branco para não alterar): R$`);
            let novaMarca = this.entrada.receberTexto(`Nova marca do produto (deixe em branco para não alterar): `);
            let novaCategoria = this.entrada.receberTexto(`Nova categoria do produto (deixe em branco para não alterar): `);
            let novoTipoAnimal = this.entrada.receberTexto(`Novo tipo de animal (deixe em branco para não alterar): `);
            let novoPesoQuantidade = this.entrada.receberTexto(`Novo peso/quantidade do produto (deixe em branco para não alterar): `);
            let novaDescricao = this.entrada.receberTexto(`Nova descrição do produto (deixe em branco para não alterar): `);

            // Se o campo for deixado em branco, mantém o valor atual
            if (novoNome) produto.nome = novoNome;
            if (novoPreco) produto.preco = novoPreco;
            if (novaMarca) produto.marca = novaMarca;
            if (novaCategoria) produto.categoria = novaCategoria;
            if (novoTipoAnimal) produto.tipoAnimal = novoTipoAnimal;
            if (novoPesoQuantidade) produto.pesoQuantidade = novoPesoQuantidade;
            if (novaDescricao) produto.descricao = novaDescricao;

            console.log(`\nProduto editado com sucesso!\n`)
        } else {
            console.log(`\nProduto não encontrado.\n`)
        }

    }
}