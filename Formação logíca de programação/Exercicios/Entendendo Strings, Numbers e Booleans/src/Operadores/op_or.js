// OR (||)
// só verdadeiro se uma das condições for verdadeiro

// só pode sair se não estiver chovendo OU se estiver de guarda chuva

let tempo = "chuva"
let item = "guarda chuva"

let podeSair= (tempo !== "chuva") || (item === "guarda chuva")

console.log("nosso personagem pode sair ? : " + podeSair)
