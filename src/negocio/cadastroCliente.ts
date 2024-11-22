import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        let nome: string;
        while (true) {
            nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
            if (/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
                break;
            }
            console.log(`\nErro: O nome deve conter apenas letras, tente novamente. \n`)
        }
        
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        

        // Loop para garantir CPF único
        let valor: string;
        while (true) {
            valor = this.entrada.receberTexto(`Por favor informe o número do CPF (11 dígitos): `);

            if (!/^\d{11}$/.test(valor)) {
                console.log(`\nErro: O CPF deve conter apenas números. Tente novamente.\n`);
                continue;
            }

            // Verifica se o CPF já existe
            let cpfExistente = this.clientes.some(cliente => cliente.getCpf.getValor === valor);
            if (!cpfExistente) {
                break; // CPF é único, sai do loop
            }
            console.log(`\nErro: Já existe um cliente com o CPF informado. Tente novamente.\n`);
        }

        let data: string;
        let dataValida = false;
        let ano: number = 0, mes: number = 0, dia: number = 0;

        while (!dataValida) {
            data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/');

            // Garantir que a data tenha exatamente 3 partes (dia, mês, ano)
            if (partesData.length !== 3) {
                console.log(`\nErro: Data inválida. Tente novamente.\n`);
                continue;
            }

            // Converte as partes da data para número
            dia = Number(partesData[0]);  // Converte dia para número
            mes = Number(partesData[1]);  // Converte mês para número
            ano = Number(partesData[2]);  // Converte ano para número

            // Verificação do ano, mês e dia
            if (ano < 1900 || ano > 2006) {
                console.log(`\nErro: O ano deve estar entre 1900 e 2006. Tente novamente.\n`);
                continue;
            }
            if (mes < 1 || mes > 12) {
                console.log(`\nErro: O mês deve estar entre 1 e 12. Tente novamente.\n`);
                continue;
            }
            if (dia < 1 || dia > 31) {
                console.log(`\nErro: O dia deve estar entre 1 e 31. Tente novamente.\n`);
                continue;
            }

            // Se passou por todas as verificações, a data é válida
            dataValida = true;
        }

        let dataEmissao = new Date(ano, mes - 1, dia);
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);

        //telefones

        while (true) {
            console.log(`\nCadastro de telefone`);
            let ddd = this.entrada.receberTexto(`Por favor informe o DDD: `);
            if (!/^\d{2}$/.test(ddd)) {
                console.log(`\nErro: O DDD deve conter exatamente 2 dígitos. Tente novamente.\n`);
                continue;
            }
        
            let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
            if (!/^\d{8,9}$/.test(numero)) {
                console.log(`\nErro: O número do telefone deve conter entre 8 e 9 dígitos. Tente novamente.\n`);
                continue;
            }
        
            // Verifica se o telefone (DDD e número) já existe na lista de telefones do cliente
            let telefoneExistente = this.clientes.some(cliente =>
                cliente.getTelefones.some(telefone => telefone.getDdd === ddd && telefone.getNumero === numero)
            );
        
            // Verifica se o telefone recém-adicionado é o mesmo que o último adicionado
            let telefoneRecente = cliente.getTelefones.some(telefone => telefone.getDdd === ddd && telefone.getNumero === numero);
        
            if (telefoneExistente) {
                console.log(`\nErro: Já existe um cliente com o telefone (${ddd}) ${numero}. Tente novamente.\n`);
                continue;
            }
        
            // Se o telefone foi recentemente adicionado, não permite a duplicação
            if (telefoneRecente) {
                console.log(`\nErro: Este número de telefone já foi adicionado. Tente novamente.\n`);
                continue;
            }
        
            let telefone = new Telefone(ddd, numero);
            cliente.getTelefones.push(telefone);
            console.log(`Telefone (${ddd}) ${numero} adicionado com sucesso!`);
        
            let adicionarOutro = this.entrada.receberTexto(`Deseja adicionar outro telefone? (s/n): `);
            if (adicionarOutro.toLowerCase() !== 's') {
                break;
            }
        }



        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}