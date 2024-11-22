import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Delete from "./delete";

export default class DeleteCliente extends Delete {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log(`\nInício da exclusão do cliente\n`);

        const cpf = this.entrada.receberTexto(`Informe o CPF do cliente que deseja excluir: `);

        // Usando findIndex para procurar o índice do cliente
        const clienteIndex = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf);

        if (clienteIndex !== -1) {
            const cliente = this.clientes[clienteIndex];

            // Exibe o nome do cliente encontrado
            console.log(`Cliente encontrado: ${cliente.nome}. CPF: ${cpf}`);

            // Confirmação para excluir
            const confirmacao = this.entrada.receberTexto(`Tem certeza que deseja excluir este cliente? (s/n): `);

            if (confirmacao.toLowerCase() === 's') {
                // Exclui o cliente do array usando splice
                this.clientes.splice(clienteIndex, 1);
                console.log(`\nCliente ${cliente.nome} com CPF ${cpf} foi excluído com sucesso!\n`);
            } else {
                console.log(`\nExclusão do cliente ${cliente.nome} foi cancelada.\n`);
            }
        } else {
            console.log(`\nCliente com CPF ${cpf} não encontrado.\n`);
        }
    }
}
