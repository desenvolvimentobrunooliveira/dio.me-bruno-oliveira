//funções com retorno


let resultado = soma(5, 10) 

console.log("A soma dos valores é " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}


console.log("A soma dos valores é " + soma(5,2))

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

let userName =  getFirstName ("Bruno de Souza Silva OLiveira") 

console.log("Seja bem vindo " + userName)

function getFirstName(name){///
        let firstName = name.split(" ")[0] //quebra os dados da função em vetores
        return firstName
}