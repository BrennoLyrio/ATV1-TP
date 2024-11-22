import Produto from "../modelo/produto";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdutosPorPet extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nProdutos mais consumidos por tipo e raça de pets:\n`);

        // Mapeamento do consumo por tipo e raça
        const consumoPorPet: { [tipo: string]: { [raca: string]: { [produto: string]: number } } } = {};

        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                const tipo = pet.getTipo;
                const raca = pet.getRaca;

                if (!consumoPorPet[tipo]) {
                    consumoPorPet[tipo] = {};
                }
                if (!consumoPorPet[tipo][raca]) {
                    consumoPorPet[tipo][raca] = {};
                }

                cliente.getProdutosConsumidos.forEach(produto => {
                    consumoPorPet[tipo][raca][produto.nome] = (consumoPorPet[tipo][raca][produto.nome] || 0) + 1;
                });
            });
        });

        // Exibir os produtos mais consumidos por tipo e raça de pets
        for (const tipo in consumoPorPet) {
            console.log(`\nTipo de Pet: ${tipo}`);
            for (const raca in consumoPorPet[tipo]) {
                console.log(`  Raça: ${raca}`);
                const produtosOrdenados = Object.entries(consumoPorPet[tipo][raca])
                    .sort(([, qtdA], [, qtdB]) => qtdB - qtdA)
                    .slice(0, 5); // Pega os 5 produtos mais consumidos

                produtosOrdenados.forEach(([nome, quantidade], index) => {
                    console.log(`    ${index + 1} - ${nome}: ${quantidade} consumo(s)`);
                });
            }
        }
    }
}
