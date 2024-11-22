import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesMaisConsumiramServicos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem dos 10 clientes que mais consumiram serviços (em quantidade):\n`);

        // Ordena os clientes com base na quantidade de serviços consumidos, em ordem decrescente
        const clientesMaisConsumiramServicos = this.clientes
            .sort((a, b) => b.getServicosConsumidos.length - a.getServicosConsumidos.length)
            .slice(0, 10); // Pega apenas os 10 primeiros

        // Verifica se há clientes com serviços consumidos
        if (clientesMaisConsumiramServicos.length === 0) {
            console.log("Nenhum cliente consumiu serviços.");
            return;
        }

        // Exibe os 10 clientes com a quantidade de serviços consumidos
        clientesMaisConsumiramServicos.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.nome} - Quantidade de serviços consumidos: ${cliente.getServicosConsumidos.length}`);
        });
    }
}
