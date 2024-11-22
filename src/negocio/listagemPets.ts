import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nListagem de clientes e seus pets:`);

        this.clientes.forEach(cliente => {
            console.log(`Cliente: ${cliente.nome}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            console.log(`Pets:`);
            cliente.getPets.forEach(pet => {
                console.log(`- Pet: ${pet.getNome}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}`);
            });
            console.log('-----------------------------------');
        });
        console.log(`\n`)
    }
}
