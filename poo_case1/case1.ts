// fazer abstração e construir classe com uma pessoa, celular e animal
class pessoa {
    public nome: string
    public altura : number
    public cpf: number
    public idade: number
    public nacionalidade: string
    public sexo: string

    constructor(nome:string, idade:number, cpf: number, nacionalidade:string, sexo: string, altura: number){
        this.nome = nome;
        this.idade = idade;

        
    }

    apresentar(): void {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
  
    envelhecer(): void {
        this.idade++;
    }
    comer(): void {
    }
    dormir(): void {
    }
    andar(): void {
    }
    morrer(): void {
    }
}

const pessoa1 = new pessoa('Marquinho',11,1542373005,'chique-chique','mulher',10);
pessoa1.apresentar();
pessoa1.envelhecer();
console.log[pessoa1.idade,pessoa1.altura,pessoa1.nacionalidade]