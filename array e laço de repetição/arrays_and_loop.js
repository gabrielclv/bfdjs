let numeros = [];
let soma = 0;
let maior = Number.NEGATIVE_INFINITY;

// Pede 5 números ao usuário
for (let i = 0; i < 5; i++) {
  let num = Number(prompt(`Digite o ${i + 1}º número:`));
  numeros.push(num);
  soma += num;

  if (num > maior) {
    maior = num;
  }
}

// Exibe os resultados
console.log("Números digitados:", numeros);
console.log("Soma dos números:", soma);
console.log("Maior número:", maior);
