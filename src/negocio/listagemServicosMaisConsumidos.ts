import Servico from "../modelo/servico";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemServicosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nServiços mais consumidos:\n`);

        const servicoConsumo: { [nome: string]: number } = {};

        // Conta a quantidade de consumo de cada serviço entre todos os clientes
        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                servicoConsumo[servico.nome] = (servicoConsumo[servico.nome] || 0) + 1;
            });
        });

        // Ordena os serviços por quantidade consumida
        const servicosOrdenados = Object.entries(servicoConsumo)
            .sort(([, qtdA], [, qtdB]) => qtdB - qtdA)
            .slice(0, 10); // Pega os 10 serviços mais consumidos

        // Exibe a lista dos serviços mais consumidos
        servicosOrdenados.forEach(([nome, quantidade], index) => {
            console.log(`${index + 1} - ${nome}: ${quantidade} consumo(s)`);
        });
    }
}
