import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Delete from "./delete";

export default class DeletePet extends Delete {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        console.log(`\nInício da exclusão do pet\n`);

        const cpf = this.entrada.receberTexto(`Informe o CPF do cliente que deseja excluir o pet: `);

        // Encontrar o cliente com o CPF fornecido
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

        if (cliente) {
            console.log(`Cliente encontrado: ${cliente.nome}. CPF: ${cpf}`);

            // Se o cliente tiver pets, exibe os pets disponíveis para exclusão
            if (cliente.getPets.length > 0) {
                console.log(`Pets do cliente ${cliente.nome}:`);
                cliente.getPets.forEach((pet, index) => {
                    console.log(`${index + 1}. ${pet.getNome} (Tipo: ${pet.getTipo}, Raça: ${pet.getRaca})`);
                });

                // Solicitar o número do pet a ser excluído
                let numeroPet = this.entrada.receberNumero(`Informe o número do pet que deseja excluir: `) - 1;

                // Verificar se o número informado é válido
                if (numeroPet >= 0 && numeroPet < cliente.getPets.length) {
                    // Encontrar o pet usando findIndex
                    const petIndex = cliente.getPets.findIndex((pet, index) => index === numeroPet);

                    if (petIndex !== -1) {
                        // Excluir o pet
                        const petSelecionado = cliente.getPets[petIndex];
                        cliente.getPets.splice(petIndex, 1);
                        console.log(`\nPet ${petSelecionado.getNome} excluído com sucesso!\n`);
                    }
                } else {
                    console.log(`\nNúmero de pet inválido. Nenhum pet foi excluído.\n`);
                }
            } else {
                console.log(`\nEste cliente não possui pets cadastrados.\n`);
            }
        } else {
            console.log(`\nCliente com CPF ${cpf} não encontrado.\n`);
        }
    }
}
