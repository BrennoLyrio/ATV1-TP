import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor (servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de serviço`)

        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let valor: number;

        while (true) {
            let entradaPreco = this.entrada.receberTexto(`Por favor, informe o valor do produto (use vírgula para os centavos): R$ `);

            entradaPreco = entradaPreco.replace(',', '.');

            let precoConvertido = parseFloat(entradaPreco);

            if (!isNaN(precoConvertido) && precoConvertido >= 0) {
                valor = precoConvertido;
                break;
            }

            console.log(`\nErro: Valor inválido. Certifique-se de usar números e vírgula como separador decimal. Tente novamente.\n`);
        }

        let descricao = this.entrada.receberTexto(`Por favor diga um breve descrição do serviço: `)
        let servico = new Servico(nome, valor, descricao)
        this.servicos.push(servico)

        console.log(`\nServiço cadastrado com sucesso! \n`)
    }


}