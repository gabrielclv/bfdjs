let readline = require ('readline-sync');

let nome = readline.question("Qual é o seu nome? ");
let ano = readline.question("Em que ano você nasceu? ");


idade = 2025 - ano


if(idade>=18){
    console.log("você pode ser preso")
}else{
    console.log("você é menor de idade")
}