/*
Crie duas variáveis, valor1 e valor2. Atribua o número 10 a valor1 e o número 5 a valor2.

Em seguida, execute as seguintes operações em sequência, armazenando o resultado de cada uma em novas variáveis:

Some valor1 e valor2.

Subtraia valor2 do resultado da soma.

Multiplique o novo resultado por 2.

Verifique se o resultado da multiplicação é maior ou igual a 30.

Verifique se a primeira condição (resultado >= 30) é verdadeira E se a variável valor1 é estritamente igual a 10.

Seu código deve imprimir apenas o resultado final da última verificação (o booleano true ou false).
*/


let valor1 = 10
let valor2 = 5

let soma = valor1 + valor2
let subtracao = soma - valor2
let multiplicacao = subtracao * 2

let maiorQue30 = multiplicacao >= 30

let condicaoVerdadeira = (maiorQue30 === true) && (valor1 === 10)

console.log(condicaoVerdadeira)

