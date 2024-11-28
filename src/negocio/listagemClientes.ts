import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);

            // Exibindo RGS
            if (cliente.getRgs.length > 0) {
                console.log(`RGs:`);
                cliente.getRgs.forEach(rg => {
                    console.log(`  RG: ${rg.getValor} - Data de Emissão: ${rg.getDataEmissao.toLocaleDateString()}`);
                });
            } else {
                console.log(`RGs: Nenhum RG cadastrado`);
            }

            if (cliente.getTelefones.length > 0) {
                console.log(`Telefones:`);
                cliente.getTelefones.forEach(telefone => {
                    console.log(`  (${telefone.getDdd}) ${telefone.getNumero}`);
                });
            } else {
                console.log(`Telefones: Nenhum telefone cadastrado`);
            }
        });
        console.log(`\n`);
    }
}