let readline = require('readline-sync');

let nome = readline.question("Qual é o seu nome? ");
let ano = Number(readline.question("Em que ano você nasceu? "));

if (isNaN(ano)) {
    console.log("Ano inválido. Digite um número.");
} else {
    let idade = 2025 - ano;

    if (idade >= 18) {
        console.log("Você pode ser preso.");
    } else {
        console.log("Você é menor de idade.");
    }
}
