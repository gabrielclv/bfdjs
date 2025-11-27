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
        // completar as propriedades que estavam faltando
        this.cpf = cpf;
        this.nacionalidade = nacionalidade;
        this.sexo = sexo;
        this.altura = altura;
        
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
console.log('pessoa1 -> idade, altura, nacionalidade:', pessoa1.idade, pessoa1.altura, pessoa1.nacionalidade)

// ---- Novas classes pedidas no exercício: Animal, Veiculo e Celular ----

class Animal {
    public nome: string
    public idade: number
    public especie: string
    public domestico: boolean

    constructor(nome: string, idade: number, especie: string, domestico = false) {
        this.nome = nome
        this.idade = idade
        this.especie = especie
        this.domestico = domestico
    }

    emitirSom(): void {
        // comportamento genérico - subclasses / instâncias podem ter mais precisão
        console.log(`${this.nome} faz um som característico de ${this.especie}.`)
    }

    comer(comida: string): void {
        console.log(`${this.nome} está comendo ${comida}.`)
    }

    envelhecer(): void {
        this.idade++
        console.log(`${this.nome} agora tem ${this.idade} anos.`)
    }
}

class Veiculo {
    public marca: string
    public modelo: string
    public ano: number
    public ligado: boolean

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.ligado = false
    }

    ligar(): void {
        if (!this.ligado) {
            this.ligado = true
            console.log(`${this.marca} ${this.modelo} (${this.ano}) ligado.`)
        } else console.log('O veículo já está ligado.')
    }

    desligar(): void {
        if (this.ligado) {
            this.ligado = false
            console.log(`${this.marca} ${this.modelo} desligado.`)
        } else console.log('O veículo já está desligado.')
    }

    acelerar(velocidade: number): void {
        if (this.ligado) console.log(`${this.marca} acelerando a ${velocidade} km/h.`)
        else console.log('Não é possível acelerar com o veículo desligado.')
    }
}

class Celular {
    public marca: string
    public modelo: string
    public bateria: number // 0..100
    public ligado: boolean

    constructor(marca: string, modelo: string, bateria = 100) {
        this.marca = marca
        this.modelo = modelo
        this.bateria = Math.max(0, Math.min(100, bateria))
        this.ligado = false
    }

    ligar(): void {
        if (!this.ligado && this.bateria > 0) {
            this.ligado = true
            console.log(`${this.marca} ${this.modelo} ligado.`)
        } else if (this.bateria <= 0) console.log('Bateria descarregada.')
        else console.log('O celular já está ligado.')
    }

    desligar(): void {
        if (this.ligado) {
            this.ligado = false
            console.log(`${this.marca} ${this.modelo} desligado.`)
        } else console.log('O celular já está desligado.')
    }

    fazerLigacao(para: string): void {
        if (!this.ligado) return console.log('Ligue o celular antes de fazer chamadas.')
        if (this.bateria <= 0) return console.log('Bateria insuficiente para realizar a ligação.')
        this.bateria = Math.max(0, this.bateria - 1)
        console.log(`Ligando para ${para} de ${this.marca} ${this.modelo}. Bateria: ${this.bateria}%`)
    }

    enviarMensagem(para: string, texto: string): void {
        if (!this.ligado) return console.log('Ligue o celular antes de enviar mensagens.')
        if (this.bateria <= 0) return console.log('Bateria insuficiente para enviar mensagem.')
        this.bateria = Math.max(0, this.bateria - 1)
        console.log(`Mensagem para ${para}: "${texto}" (bateria ${this.bateria}%)`)
    }

    carregar(percentual: number): void {
        this.bateria = Math.min(100, this.bateria + percentual)
        console.log(`Carregando: bateria agora ${this.bateria}%`)
    }
}

// Exemplos de uso das novas classes
const cachorro = new Animal('Totó', 3, 'cachorro', true)
cachorro.emitirSom()
cachorro.comer('ração')

const carro = new Veiculo('Toyota', 'Corolla', 2020)
carro.ligar()
carro.acelerar(80)
carro.desligar()

const meuCelular = new Celular('XBrand', 'X100', 50)
meuCelular.ligar()
meuCelular.fazerLigacao('João')
meuCelular.enviarMensagem('Maria', 'Olá, tudo bem?')
meuCelular.carregar(30)
