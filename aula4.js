// npm init -y (executar para criar package.json nodejs)
// npm i readline-sync (executar para instalar readline-sync) interação com o usuário e caixa de dialogo 
// npm é o gerenciador de pacotes do nodejs
let readline = require('readline-sync'); // importando a biblioteca readline-sync

let nome = readline.question("Qual o seu nome? "); // pergunta para o usuário
console.log('Oi'+ " " + nome ); // imprime o nome do usuário

// condicionais if = se, else = senão && = e, || = ou

let n1 = 1
let fruit = "banana"

//if(n1>= 2 && fruit == "banana"){
//    console.log("verdadeiro")
//}else{
//    console.log("falso")
//}

// atividade: if age lower than 18 you dont be arrested

let age = readline.question("Qual a sua idade? "); // pergunta a idade do usuário
if(age >= 18){
    console.log(nome + " " + "Você pode ser preso!")
}else{
    console.log(nome + "" + "Você não pode ser preso ainda!")
}