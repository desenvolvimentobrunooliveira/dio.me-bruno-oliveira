/*
Problema de Operadores (Lógica e Comparação)
Crie as seguintes variáveis:

temperatura com o valor 28
estaChovendo com o valor true
humidade com o valor 85
Em seguida, use operadores lógicos e de comparação para verificar a seguinte condição.
A condição final deve ser true se:
A temperatura for maior que 25 E
A humidade for menor ou igual a 90 OU a variável estaChovendo for false
Seu código deve armazenar o resultado final dessa verificação em uma variável chamada 
podeSair e, em seguida, imprimir apenas essa variável no console.
*/

let temperatura = 28
let estaChovendo = true
let humidade = 85
let podeSair = (temperatura >= 25) && ((humidade <= 90) || (estaChovendo === false))

console.log(podeSair)

