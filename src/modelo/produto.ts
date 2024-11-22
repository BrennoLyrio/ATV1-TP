export default class Produto {
    public codigo: string
    public nome: string
    public preco: number
    public marca: string
    public categoria: string
    public tipoAnimal: string
    public pesoQuantidade: string
    public descricao: string

    constructor(codigo: string, nome: string, preco: number, marca: string, categoria: string, tipoAnimal: string, pesoQuantidade: string, 
        descricao: string
    ) {
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
        this.marca = marca
        this.categoria = categoria
        this.tipoAnimal = tipoAnimal
        this.pesoQuantidade = pesoQuantidade
        this.descricao = descricao
    }
}