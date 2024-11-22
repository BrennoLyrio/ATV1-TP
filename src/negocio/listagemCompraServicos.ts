import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemCompraServicos extends Listagem {
    private clientes: Array<Cliente>;
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        console.log(`\nInício da listagem de serviços consumidos\n`);

        let cliente: Cliente | undefined;

        while (!cliente) {
            const cpf = this.entrada.receberTexto(`Informe o CPF do cliente para ver os serviços consumidos: `);

            cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

            if (!cliente) {
                console.log(`\nCliente com CPF ${cpf} não encontrado. Tente novamente.\n`);
            }
        }

        console.log(`\nCliente encontrado: ${cliente.nome}. CPF: ${cliente.getCpf.getValor}\n`);
        console.log(`Serviços consumidos pelo cliente:\n`);

        
        if (cliente.getServicosConsumidos.length === 0) {
            console.log(`Nenhum serviço consumido pelo cliente.\n`);
            return;
        }

        cliente.getServicosConsumidos.forEach((servico, index) => {
            console.log(`${index + 1} - ${servico.nome} (Valor: R$${servico.valor.toFixed(2)})`);
        });
    }
}