import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Edicao from "./editar";

export default class EditarServico extends Edicao {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor (servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    // Função para validar se o valor é positivo
    private validarNumeroPositivo(valor: number): boolean {
        return valor > 0;
    }

    public editar(): void {
        console.log(`\nInício da edição do serviço`);

        //Listar os serviços existentes
        if (this.servicos.length === 0) {
            console.log(`Não há serviços cadastrados.`);
            return;
        }

        //Exibir lista de serviços
        console.log(`Serviços disponíveis para edição: `);
        this.servicos.forEach((servico, index) => {
            console.log(`\n${index + 1}. ${servico.nome} - ${servico.descricao} - R$${servico.valor}\n`);
        })

        let indiceServico = this.entrada.receberNumero(`\nInforme o número do serviço que deseja editar: `) - 1;

        //Se o índice é valido

        if (indiceServico >= 0 && indiceServico < this.servicos.length) {
            let servicoSelecionado = this.servicos[indiceServico];

            //novos dados
            let novoNome = this.entrada.receberTexto(`Informe o novo nome do serviço: `);
            let novaDescricao = this.entrada.receberTexto(`Informe a nova descrição do serviço: `);            
            let novoValor = this.entrada.receberNumero(`Informe o novo valor do serviço: R$`);
            

            if (novoNome) servicoSelecionado.nome = novoNome;
            if (novaDescricao) servicoSelecionado.descricao = novaDescricao;
            
            // Se o valor for informado, valida se é positivo antes de atualizar
            if (novoValor && this.validarNumeroPositivo(novoValor)) {
                servicoSelecionado.valor = novoValor;
            } else if (novoValor <= 0) {
                console.log(`Valor inválido. O valor do serviço deve ser positivo.`);
            }


            console.log(`\nServiço atualizado com sucesso!`);
        } else {
            console.log(`Índice de serviço inválido.`);
        }

    }
}