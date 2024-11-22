import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet extends Cadastro {
    private entrada: Entrada
    private clientes: Array<Cliente>

    constructor ( clientes: Array<Cliente>) {
        super()
        this.entrada = new Entrada
        this.clientes = clientes;
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do pet`)

         // Buscar cliente pelo CPF
         let cpfCliente = this.entrada.receberTexto(`Informe o CPF do cliente: `);
         let clienteSelecionado: Cliente | undefined = this.clientes.find(cliente => cliente.getCpf.getValor === cpfCliente);

        //coleta informações do pet
        let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet (ex.: cao, gato): `)
        let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `)
        let genero = ''
        let generoValido = false
        while (!generoValido) {
            genero = this.entrada.receberTexto(`Por favor informe o gênero do pet (macho ou femea): `).toLowerCase();
        
            if (genero === 'macho' || genero === 'femea') {
                generoValido = true; // Gênero válido, sai do loop
            } else {
                console.log(`Gênero inválido! Por favor, informe "macho" ou "femea".`);
            }
        }

        // Cria uma nova instância de Pet com os dados fornecidos
        let pet = new Pet(nome, raca, genero, tipo);
        
        // Adiciona o pet ao array de pets
        clienteSelecionado?.adicionarPet(pet);
        
        console.log(`\nPet cadastrado com sucesso para o cliente ${clienteSelecionado?.nome}!\n`);
    }
}