import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Delete from "./delete";

export default class DeleteServico extends Delete {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log(`\nInício da exclusão do serviço\n`);

        // Se houver serviços cadastrados, exibe a lista de serviços com numeração
        if (this.servicos.length > 0) {
            console.log(`Serviços cadastrados:`);
            this.servicos.forEach((servico, index) => {
                console.log(`${index + 1} - ${servico.nome}`);
            });

            // Solicitar o número do serviço a ser excluído
            const numeroServico = this.entrada.receberNumero(`Informe o número do serviço que deseja excluir: `) - 1;

            // Verificar se o número informado é válido
            if (numeroServico >= 0 && numeroServico < this.servicos.length) {
                // Encontrar o serviço a partir do número escolhido
                const servicoSelecionado = this.servicos[numeroServico];

                // Confirmar a exclusão
                const confirmacao = this.entrada.receberTexto(`Tem certeza que deseja excluir o serviço "${servicoSelecionado.nome}"? (s/n): `);

                if (confirmacao.toLowerCase() === 's') {
                    // Excluir o serviço
                    this.servicos.splice(numeroServico, 1);
                    console.log(`\nServiço "${servicoSelecionado.nome}" excluído com sucesso!\n`);
                } else {
                    console.log(`\nExclusão do serviço "${servicoSelecionado.nome}" foi cancelada.\n`);
                }
            } else {
                console.log(`\nNúmero de serviço inválido. Nenhum serviço foi excluído.\n`);
            }
        } else {
            console.log(`\nNão há serviços cadastrados para exclusão.\n`);
        }
    }
}
