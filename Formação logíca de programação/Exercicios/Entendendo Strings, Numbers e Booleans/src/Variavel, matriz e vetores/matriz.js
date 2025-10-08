//variável - quando precisamos armazenar um único valor tanto let quanto var
let variavelNomesPokemon = "Pikachu"

console.log(variavelNomesPokemon)

//array ou vetor - quando precisamos armazenar mais de um valor
let vetorNomesPokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]

console.log(vetorNomesPokemon[1])

//matriz ou array multidimensional - quando precisamos armazenar mais de um valor e cada valor tem mais de uma característica
//timePokemon [ [nome, sexo, tipo, nivel], 
let timePokemon = [
    ["Pikachu", "M", "Elétrico", 5],
    ["Charmander", "M", "Fogo", 8],
    ["bulbasaur", "F", "Planta", 7],
]

console.log("O Pokemon " + timePokemon[1][0] + "é do tipo " + timePokemon[1][2] + " e está no nível " + timePokemon[1][3])

console.log("O time Pokemon tem " + timePokemon.length + " Membros") //quantidade de pokemons no time


var mensagem = "olá"
console.log(mensagem)

let meuVetor = []
