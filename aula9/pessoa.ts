//pessoa comun
export class pessoa{
    public tamanho : Number
    public nome : String
    public idade : Number
    public nacionalidade : String

    constructor(tamanho, nome, idade , nacionalidade) {
        this.idade = idade
        this.nacionalidade = nacionalidade
        this.nome = nome
        this.tamanho = tamanho
    }
    comer(){}
    dormir(){}
    andar(){}
    estudar(){}
    cozinhar(){}
}