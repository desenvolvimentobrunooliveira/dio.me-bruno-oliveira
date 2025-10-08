//default (mensagem genérica caso nenhuma da condições seja atendida)

let fruta = "morango"

switch(fruta){
    case "laranja":
        console.log("Suco de laranja")
    break
    
    case "banana":
    case "morango":
        console.log("Vitamina de banana")
    break

    case "maça":
        console.log("vitamina de maça")
    break

    default:
        console.log("Suco qualquer")
}