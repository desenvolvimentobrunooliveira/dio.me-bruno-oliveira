// NOT (!)
//nega uma afirmação

/*
let tempo = "chuva"
let resultado = tempo !== "chuva"

console.log(!resultado)
*/


//verificar o tempo é diferente de chuva ou neve
//o horario é antes das 22, e não é menor de 18

let tempo = "chuva"
let horario = 20
let idade = 18
let podeSair = (tempo !== "chuva") && (horario <= 22) && (idade >= 18)

console.log("pode sair ? : " + podeSair)

console.log (!podeSair)

console.log (true && false)
