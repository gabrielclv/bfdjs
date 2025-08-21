//aluno: Gabriel Cauã Leal Vieira 

console.log("FORMULÁRIO")
let readline = require('readline-sync')

let nome=readline.question("Qual o seu nome?")
let idade=readline.question("Qual a sua idade?")
let data_de_nascimento=readline.question("Qual a sua data de Nascimento?")
let endereço=readline.question("qual o seu endereço?") 
let telefone=readline.question("Qual o seu telefone?")
let animal=readline.question("Tem animal em casa?")
let animais=readline.question("Quantos animais tem?")

console.log(nome,idade,data_de_nascimento,endereço,telefone,animal,animais)