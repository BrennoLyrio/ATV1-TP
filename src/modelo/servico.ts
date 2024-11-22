export default class Servico {
    public nome: string
    public valor: number
    public descricao: string

    constructor (nome: string, valor: number, descricao: string) {
        this.nome = nome
        this.valor = valor
        this.descricao = descricao
    }
}