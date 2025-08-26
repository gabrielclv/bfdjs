//arrays = variavel com mais de um valor anexada a esta usar ["coloque aqui seus valores"]
// criar uma lista(arrays = variavel com varios valores) com times a sua escolha
let times = ["Barcelona","Arsenal","Tottenham","Milan"]

let readline = require ('readline-sync')

let escolha = Number(readline.question("escolha um número de 1 a 4 e veja qual time você será!"))
switch(escolha) {
    case 1:
        console.log(times[0]);
        break;
    case 2:
        console.log(times[1]);
        break;
    case 3:
        console.log(times[2]);
        break;
    case 4:
        console.log(times[3]);
        break;
    default:
        console.log("erro kkkkk");                
}
