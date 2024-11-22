import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import RegistroCompra from "./registrarCompra";

export default class RegistrarCompraServicos extends RegistroCompra {
    private servicos: Array<Servico>;
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public registrarCompra(): void {
        console.log(`\nInício do registro de compra de serviços\n`);

        // Solicita o CPF do cliente
        const cpf = this.entrada.receberTexto(`Informe o CPF do cliente que deseja adquirir o(s) serviço(s): `);

        // Procura o cliente pelo CPF
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

        if (!cliente) {
            console.log(`\nCliente com CPF ${cpf} não encontrado.\n`);
            return;
        }

        console.log(`\nCliente encontrado: ${cliente.nome}. CPF: ${cpf}\n`);

        let continuar = true;

        while (continuar) {
            console.log(`\nServiços disponíveis para compra:`)
            this.servicos.forEach((servico, index) => {
                console.log(`${index + 1} - ${servico.nome} (Valor: R$${servico.valor})`);
            });

            // Solicita o número do serviço para adicionar ao cliente
            let escolhaServico = this.entrada.receberNumero(`Informe o número do serviço que deseja adquirir ou 0 para encerrar: `);

            // Encerrar a compra se o usuário digitar 0
            if (escolhaServico === 0) {
                continuar = false;
                console.log(`\nCompra de serviços finalizada.\n`);
                break;
            }

            // Verificar se a escolha é válida
            if (escolhaServico > 0 && escolhaServico <= this.servicos.length) {
                const servicoSelecionado = this.servicos[escolhaServico - 1];
                cliente.getServicosConsumidos.push(servicoSelecionado);
                console.log(`\nServiço "${servicoSelecionado.nome}" adicionado ao consumo do cliente.\n`);
            } else {
                console.log(`\nOpção inválida. Tente novamente.\n`);
            }
        }
    }
}
