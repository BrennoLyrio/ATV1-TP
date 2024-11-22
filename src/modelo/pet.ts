export default class Pet {
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getNome(){return this.nome}  //esse método get serve para só ler os dados privados e não alterá-los
    public get getRaca(){return this.raca}
    public get getGenero(){return this.genero}
    public get getTipo(){return this.tipo}

    public setNome(novoNome: string): void {
        this.nome = novoNome
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public setRaca(raca: string): void {
        this.raca = raca;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }
}