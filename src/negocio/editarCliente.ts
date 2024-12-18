import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";
import Edicao from "./editar";

export default class EditarCliente extends Edicao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public editar(): void {
        console.log(`\nInício da edição do cliente`);
        let buscaCpf = this.entrada.receberTexto(`Insira o CPF do cliente que deseja editar:`);

        let clienteEncontrado = this.clientes.find(cliente => cliente.getCpf.getValor === buscaCpf);

        if (clienteEncontrado) {
            console.log(`\nCliente encontrado!`);

            // Edição de Nome
            let novoNome = this.entrada.receberTexto(`Insira o novo nome (ou pressione Enter para manter o atual): `);
            if (novoNome) {
                clienteEncontrado.nome = novoNome;
            }

            // Edição de Nome Social
            let novoNomeSocial = this.entrada.receberTexto(`Insira o novo nome social (ou pressione Enter para manter o atual): `);
            if (novoNomeSocial) {
                clienteEncontrado.nomeSocial = novoNomeSocial;
            }

            // Edição de RGs
            while (true) {
                console.log(`\nRGS atuais:`);
                clienteEncontrado.getRgs.forEach((rg, index) => {
                    console.log(`${index + 1}. RG: ${rg.getValor}, Data de Emissão: ${rg.getDataEmissao.toLocaleDateString("pt-BR")}`);
                });

                console.log(`\nOpções:`);
                console.log(`1. Adicionar RG`);
                console.log(`2. Remover RG`);
                console.log(`3. Concluir edição de RGs`);

                let opcaoRg = this.entrada.receberTexto(`Escolha uma opção: `);

                if (opcaoRg === "1") {
                    let valorRg = this.entrada.receberTexto(`Informe o número do novo RG: `);
                    if (!/^\d+$/.test(valorRg)) {
                        console.log(`\nErro: O número do RG deve conter apenas dígitos. Tente novamente.\n`);
                        continue;
                    }

                    let dataEmissaoRg = this.entrada.receberTexto(`Informe a data de emissão do RG (formato dd/mm/yyyy): `);
                    let partesData = dataEmissaoRg.split("/");
                    if (partesData.length !== 3) {
                        console.log(`\nErro: Data inválida. Tente novamente.\n`);
                        continue;
                    }

                    let dia = Number(partesData[0]);
                    let mes = Number(partesData[1]);
                    let ano = Number(partesData[2]);
                    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
                        console.log(`\nErro: Data inválida. Tente novamente.\n`);
                        continue;
                    }

                    let dataEmissao = new Date(ano, mes - 1, dia);
                    let novoRg = new RG(valorRg, dataEmissao);
                    clienteEncontrado.getRgs.push(novoRg);
                    console.log(`RG ${valorRg} adicionado com sucesso!`);
                } else if (opcaoRg === "2") {
                    let indiceRg = this.entrada.receberTexto(`Informe o número do RG que deseja remover (ex: 1): `);
                    let indexRg = parseInt(indiceRg) - 1;

                    if (indexRg >= 0 && indexRg < clienteEncontrado.getRgs.length) {
                        let rgRemovido = clienteEncontrado.getRgs.splice(indexRg, 1)[0];
                        console.log(`RG ${rgRemovido.getValor} removido com sucesso!`);
                    } else {
                        console.log(`\nErro: Opção inválida. Tente novamente.\n`);
                    }
                } else if (opcaoRg === "3") {
                    break;
                } else {
                    console.log(`\nErro: Opção inválida. Tente novamente.\n`);
                }
            }

            // Edição de Telefones
            while (true) {
                console.log(`\nTelefones atuais:`);
                clienteEncontrado.getTelefones.forEach((telefone, index) => {
                    console.log(`${index + 1}. (${telefone.getDdd}) ${telefone.getNumero}`);
                });

                console.log(`\nOpções:`);
                console.log(`1. Adicionar telefone`);
                console.log(`2. Remover telefone`);
                console.log(`3. Concluir edição de telefones`);

                let opcao = this.entrada.receberTexto(`Escolha uma opção: `);

                if (opcao === "1") {
                    let ddd = this.entrada.receberTexto(`Insira o DDD do novo telefone: `);
                    if (!/^\d{2}$/.test(ddd)) {
                        console.log(`\nErro: O DDD deve conter exatamente 2 dígitos.\n`);
                        continue;
                    }

                    let numero = this.entrada.receberTexto(`Insira o número do novo telefone: `);
                    if (!/^\d{8,9}$/.test(numero)) {
                        console.log(`\nErro: O número do telefone deve conter entre 8 e 9 dígitos.\n`);
                        continue;
                    }

                    let telefoneExistente = clienteEncontrado.getTelefones.some(
                        telefone => telefone.getDdd === ddd && telefone.getNumero === numero
                    );

                    if (telefoneExistente) {
                        console.log(`\nErro: Já existe um telefone com esses dados.\n`);
                    } else {
                        let novoTelefone = new Telefone(ddd, numero);
                        clienteEncontrado.getTelefones.push(novoTelefone);
                        console.log(`Telefone (${ddd}) ${numero} adicionado com sucesso!`);
                    }
                } else if (opcao === "2") {
                    let indice = this.entrada.receberTexto(`Informe o número do telefone que deseja remover (ex: 1): `);
                    let index = parseInt(indice) - 1;

                    if (index >= 0 && index < clienteEncontrado.getTelefones.length) {
                        let telefoneRemovido = clienteEncontrado.getTelefones.splice(index, 1)[0];
                        console.log(`Telefone (${telefoneRemovido.getDdd}) ${telefoneRemovido.getNumero} removido com sucesso!`);
                    } else {
                        console.log(`\nErro: Opção inválida. Tente novamente.\n`);
                    }
                } else if (opcao === "3") {
                    break;
                } else {
                    console.log(`\nErro: Opção inválida. Tente novamente.\n`);
                }
            }

            console.log(`\nEdição concluída com sucesso!\n`);
        } else {
            console.log(`\nCliente não encontrado com o CPF informado.\n`);
        }
    }
}
