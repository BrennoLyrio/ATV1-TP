import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Edicao from "./editar";

export default class EditarPet extends Edicao {
    private entrada: Entrada
    private clientes: Array<Cliente>
    constructor ( clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public editar(): void {
        console.log(`\nInicio da edicao do pet`)

        let buscaCpf = this.entrada.receberTexto(`Insira o CPF do cliente que deseja editar o nome do pet: `)
        
        let clienteEncontrado = this.clientes.find (cliente => cliente.getCpf.getValor === buscaCpf)
        if (clienteEncontrado) {
            console.log(`Cliente encontrado!`)
            
            if (clienteEncontrado.getPets.length === 0) {
                console.log(`Este cliente não possui pets cadastrados.`);
                return;
            } 

            //Listar os pets do cliente e permitir a escolha do pet a ser editado
            console.log(`Pets do cliente ${clienteEncontrado.nome}:`);
            clienteEncontrado.getPets.forEach((pet, index) => {
                console.log(`${index + 1}. ${pet.getNome}`);
            });

            //escolher o pet para editar
            let indicePet = this.entrada.receberNumero (`Informe o número do pet que deseja editar: `) - 1;

            //verificar se o indice é válido
            if (indicePet >= 0 && indicePet < clienteEncontrado.getPets.length) {
                let petSelecionado = clienteEncontrado.getPets[indicePet];

                //receber o novo nome, tipo, raca e gênero para o pet
                let novoNome = this.entrada.receberTexto(`Informe o novo nome do pet (ou pressione Enter para manter "${petSelecionado.getNome}"): `);
                if (novoNome.trim() !== '') {
                    petSelecionado.setNome(novoNome);
                }

                let novoTipo = this.entrada.receberTexto(`Informe o novo tipo do pet (Ex: cachorro, gato, etc.) ou pressione Enter para manter "${petSelecionado.getTipo}": `);
                if (novoTipo.trim() !== '') {
                    petSelecionado.setTipo(novoTipo);
                }

                let novaRaca = this.entrada.receberTexto(`Informe a nova raça do pet (ou pressione Enter para manter "${petSelecionado.getRaca}"): `);
                if (novaRaca.trim() !== '') {
                    petSelecionado.setRaca(novaRaca);
                }

                let novoGenero = this.entrada.receberTexto(`Informe o novo gênero do pet (Ex: macho, fêmea) ou pressione Enter para manter "${petSelecionado.getGenero}": `);
                if (novoGenero.trim() !== '') {
                    petSelecionado.setGenero(novoGenero);
                }

                console.log(`\nPet atualizado com sucesso!\n`);

            } else {
                console.log(`\nÍndice de pet inválido\n`);
            }
        } else {
            console.log(`\nCliente com CPF ${buscaCpf} não encontrado.\n`)
        }
    }
}