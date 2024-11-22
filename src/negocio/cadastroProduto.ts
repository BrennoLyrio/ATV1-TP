import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);

        let codigoSKU = this.entrada.receberTexto(`Informe o código identificador do produto (SKU): `);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `);
        let preco: number;

        while (true) {
            let entradaPreco = this.entrada.receberTexto(`Por favor, informe o valor do produto (use vírgula para os centavos): R$ `);

            // Substituir vírgula por ponto para formato numérico padrão
            entradaPreco = entradaPreco.replace(',', '.');

            // Tentar converter para número
            let precoConvertido = parseFloat(entradaPreco);

            // Verificar se a conversão foi bem-sucedida
            if (!isNaN(precoConvertido) && precoConvertido >= 0) {
                preco = precoConvertido;
                break;
            }

            console.log(`\nErro: Valor inválido. Certifique-se de usar números e vírgula como separador decimal. Tente novamente.\n`);
        }

        let marca = this.entrada.receberTexto(`Qual a marca do produto: `);

        let categoria = this.entrada.receberTexto(`Informe a categoria do produto (ex: alimentos, brinquedos, medicamentos, higiene): `);
        let tipoAnimal = this.entrada.receberTexto(`Para qual tipo de animal é este produto? (ex: cachorro, gato, todos): `);
        let pesoQuantidade = this.entrada.receberTexto(`Informe o peso ou quantidade do produto (ex: 500g, 1L): `);
        let descricao = this.entrada.receberTexto(`Escreva uma breve descrição do produto: `);

        // Cria o produto com as informações fornecidas
        let produto = new Produto(
            codigoSKU,
            nome,
            preco,
            marca,
            categoria,
            tipoAnimal,
            pesoQuantidade,
            descricao
        );

        // Adiciona o produto ao array de produtos
        this.produtos.push(produto);
        console.log(`\nProduto cadastrado com sucesso!\n`);
    }
}
