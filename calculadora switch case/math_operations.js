// Função principal da calculadora
function calculadora(a, b, operador) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
    case '/':
      if (b !== 0) {
        resultado = a / b;
      } else {
        resultado = 'Erro: Divisão por zero';
      }
      break;
    default:
      resultado = 'Operador inválido';
  }

  return resultado;
}

// Exemplos de uso
console.log(calculadora(10, 5, '+')); // 15
console.log(calculadora(10, 5, '-')); // 5
console.log(calculadora(10, 5, '*')); // 50
console.log(calculadora(10, 5, '/')); // 2
console.log(calculadora(10, 0, '/')); // Erro: Divisão por zero
console.log(calculadora(10, 5, '^')); // Operador inválido
