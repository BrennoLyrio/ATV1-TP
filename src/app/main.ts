import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import EditarCliente from "../negocio/editarCliente";
import ListagemClientes from "../negocio/listagemClientes";
import Cliente from "../modelo/cliente";
import EditarPet from "../negocio/editarPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import EditarProduto from "../negocio/editarProduto";
import EditarServico from "../negocio/editarServico";
import ListagemPets from "../negocio/listagemPets";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServico from "../negocio/listagemServicos";
import DeleteCliente from "../negocio/deleteCliente";
import DeletePet from "../negocio/deletePet";
import DeleteProduto from "../negocio/deleteProduto";
import DeleteServico from "../negocio/deleteServico";
import RegistroCompra from "../negocio/registrarCompra";
import RegistrarCompraProdutos from "../negocio/compraProdutos";
import RegistroCompraProdutos from "../negocio/compraProdutos";
import RegistrarCompraServicos from "../negocio/compraServicos";
import ListagemCompraProdutos from "../negocio/listagemCompraProdutos";
import ListagemCompraServicos from "../negocio/listagemCompraServicos";
import ListagemClientesMaisConsumiramProdutos from "../negocio/ListagemClientesMaisConsumiramProdutos";
import ListagemClientesMaisConsumiramServicos from "../negocio/ListagemClientesMaisConsumiramServicos";
import ListagemProdutosMaisConsumidos from "../negocio/listagemProdutosMaisConsumidos";
import ListagemServicosMaisConsumidos from "../negocio/listagemServicosMaisConsumidos";
import ListagemProdutosPorPet from "../negocio/ListagemProdutosPorPet";
import ListagemServicosPorPet from "../negocio/listagemServicosPorPet";
import ListagemClienteValor from "../negocio/listagemClienteValor";

console.log(`\nBem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);

let empresa = new Empresa();
let entrada = new Entrada();
let execucao = true;

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Pet`);
    console.log(`3 - Produto`);
    console.log(`4 - Serviço`);
    console.log(`5 - Listagens mais Específicas`)
    console.log(`0 - Sair`);

    let opcao = entrada.receberNumero(`Escolha uma opção: `);

    switch (opcao) {
        case 1:
            menuCliente();
            break;
        case 2:
            menuPet();
            break;
        case 3:
            menuProduto();
            break;
        case 4:
            menuServico();
            break;
        case 5:
            menuListagensEspecificas();
            break
        case 0:
            execucao = false;
            console.log(`Até mais!`);
            break;
        default:
            console.log(`Opção inválida! Tente novamente.`);
    }
}

// Função do Menu Cliente
function menuCliente() {
    let continuar = true;
    while (continuar) {
        console.log(`\nMenu Cliente:`);
        console.log(`1 - Cadastrar Cliente`);
        console.log(`2 - Listar Todos os Clientes`);
        console.log(`3 - Editar Cliente`);
        console.log(`4 - Deletar Cliente`);
        console.log(`0 - Voltar ao Menu Principal`);

        let opcao = entrada.receberNumero(`Escolha uma opção: `);

        switch (opcao) {
            case 1:
                let cadastroCliente = new CadastroCliente(empresa.getClientes);
                cadastroCliente.cadastrar();
                break;
            case 2:
                let listagemCliente = new ListagemClientes(empresa.getClientes);
                listagemCliente.listar();
                break;
            case 3:
                let editarCliente = new EditarCliente(empresa.getClientes);
                editarCliente.editar();
                break;
            case 4:
                let deleteCliente = new DeleteCliente(empresa.getClientes);
                deleteCliente.deletar();
                break;
            case 0:
                continuar = false;
                break;
            default:
                console.log(`Opção inválida! Tente novamente.`);
        }
    }
}

// Função do Menu Pet
function menuPet() {
    let continuar = true;
    while (continuar) {
        console.log(`\nMenu Pet:`);
        console.log(`1 - Cadastrar Pet`);
        console.log(`2 - Editar Pet`);
        console.log(`3 - Listar Todos os Pets`);
        console.log(`4 - Deletar Pet`);
        console.log(`0 - Voltar ao Menu Principal`);

        let opcao = entrada.receberNumero(`Escolha uma opção: `);

        switch (opcao) {
            case 1:
                let cadastroPet = new CadastroPet(empresa.getClientes);
                cadastroPet.cadastrar();
                break;
            case 2:
                let editarPet = new EditarPet(empresa.getClientes);
                editarPet.editar();
                break;
            case 3:
                let listagemPets = new ListagemPets(empresa.getClientes);
                listagemPets.listar();
                break;
            case 4:
                let deletePet = new DeletePet(empresa.getClientes);
                deletePet.deletar();
                break;
            case 0:
                continuar = false;
                break;
            default:
                console.log(`Opção inválida! Tente novamente.`);
        }
    }
}

// Função do Menu Produto
function menuProduto() {
    let continuar = true;
    while (continuar) {
        console.log(`\nMenu Produto:`);
        console.log(`1 - Cadastrar Produto`);
        console.log(`2 - Editar Produto`);
        console.log(`3 - Listar Todos os Produtos`);
        console.log(`4 - Registrar Compra de Produtos`)
        console.log(`5 - Listar os Produtos Consumidos pelo Cliente`)
        console.log(`6 - Deletar Produto`);
        console.log(`0 - Voltar ao Menu Principal`);

        let opcao = entrada.receberNumero(`Escolha uma opção: `);

        switch (opcao) {
            case 1:
                let cadastroProduto = new CadastroProduto(empresa.getProdutos);
                cadastroProduto.cadastrar();
                break;
            case 2:
                let editarProduto = new EditarProduto(empresa.getProdutos);
                editarProduto.editar();
                break;
            case 3:
                let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
                listagemProdutos.listar();
                break;
            case 4:
                let registrarCompra = new RegistroCompraProdutos(empresa.getClientes, empresa.getProdutos);
                registrarCompra.registrarCompra()
                break;
            case 5:
                let listagemCompraProdutos = new ListagemCompraProdutos(empresa.getClientes);
                listagemCompraProdutos.listar()
                break;
            case 6:
                let deleteProduto = new DeleteProduto(empresa.getProdutos);
                deleteProduto.deletar();
                break;
            case 0:
                continuar = false;
                break;
            default:
                console.log(`Opção inválida! Tente novamente.`);
        }
    }
}

// Função do Menu Serviço
function menuServico() {
    let continuar = true;
    while (continuar) {
        console.log(`\nMenu Serviço:`);
        console.log(`1 - Cadastrar Serviço`);
        console.log(`2 - Editar Serviço`);
        console.log(`3 - Listar Todos os Serviços`);
        console.log(`4 - Registrar Compra de Serviços`)
        console.log(`5 - Listar os Serviços Consumidos pelo Cliente`)
        console.log(`6 - Deletar Serviço`);
        console.log(`0 - Voltar ao Menu Principal`);

        let opcao = entrada.receberNumero(`Escolha uma opção: `);

        switch (opcao) {
            case 1:
                let cadastroServico = new CadastroServico(empresa.getServicos);
                cadastroServico.cadastrar();
                break;
            case 2:
                let editarServico = new EditarServico(empresa.getServicos);
                editarServico.editar();
                break;
            case 3:
                let listagemServicos = new ListagemServico(empresa.getServicos);
                listagemServicos.listar();
                break;
            case 4:
                let registrarCompraServicos = new RegistrarCompraServicos(empresa.getClientes, empresa.getServicos);
                registrarCompraServicos.registrarCompra();
                break;
            case 5:
                let listagemCompraServicos = new ListagemCompraServicos(empresa.getClientes);
                listagemCompraServicos.listar()
                break;
            case 6:
                let deleteServico = new DeleteServico(empresa.getServicos);
                deleteServico.deletar();
                break;
            case 0:
                continuar = false;
                break;
            default:
                console.log(`Opção inválida! Tente novamente.`);
        }
    }
}

// Função do Menu de Listagens Específicas
function menuListagensEspecificas() {
    let continuar = true;
    while (continuar) {
        console.log(`\nMenu de Listagens mais Específicas:`);
        console.log(`1 - Listar os 10 Clientes que Mais Consumiram Produtos`);
        console.log(`2 - Listar os 10 Clientes que Mais Consumiram Serviços`);
        console.log(`3 - Listar os Produtos Mais Consumidos`);
        console.log(`4 - Listar os Serviços Mais Consumidos`);
        console.log(`5 - Listar Produtos Mais Consumidos por Tipo e Raça de Pets`);
        console.log(`6 - Listar Serviços Mais Consumidos por Tipo e Raça de Pets`);
        console.log(`7 - Listar os 5 Clientes que Mais Consumiram em Valor`);
        console.log(`0 - Voltar ao Menu Principal`);

        let opcao = entrada.receberNumero(`Escolha uma opção: `);

        switch (opcao) {
            case 1:
                const listagemClientesMaisConsumiramProdutos = new ListagemClientesMaisConsumiramProdutos(empresa.getClientes);
                listagemClientesMaisConsumiramProdutos.listar();
                break;
            case 2:
                const listagemClientesMaisConsumiramServicos = new ListagemClientesMaisConsumiramServicos(empresa.getClientes);
                listagemClientesMaisConsumiramServicos.listar();
                break;
            case 3:
                const listagemProdutosMaisConsumidos = new ListagemProdutosMaisConsumidos(empresa.getClientes);
                listagemProdutosMaisConsumidos.listar();
                break;
            case 4:
                const listagemServicosMaisConsumidos = new ListagemServicosMaisConsumidos(empresa.getClientes);
                listagemServicosMaisConsumidos.listar();
                break;
            case 5:
                const listagemProdutosPorPet = new ListagemProdutosPorPet(empresa.getClientes);
                listagemProdutosPorPet.listar();
                break;
            case 6:
                const listagemServicosPorPet = new ListagemServicosPorPet(empresa.getClientes);
                listagemServicosPorPet.listar();
                break;
            case 7:
                const listagemClienteValor = new ListagemClienteValor(empresa.getClientes);
                listagemClienteValor.listar();
                break;
            case 0:
                continuar = false;
                break;
            default:
                console.log(`Opção inválida! Tente novamente.`);
        }
    }
}
