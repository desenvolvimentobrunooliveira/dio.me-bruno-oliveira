//Calculadora de partidas Rankeadas
// "todos os caminhos levam a Roma" - com switch / case

let vitorias = 0
let derrotas = 0
let nivel = ""


vitorias = 101
derrotas = 0

let saldoVitorias = (vitorias - derrotas)


switch (true){
    case(saldoVitorias <= 10):
        nivel = "Ferro"
        break
    
    case(saldoVitorias >= 11 && saldoVitorias <= 20):
        nivel = "Bronze"
        break

    case(saldoVitorias >= 21 && saldoVitorias <= 50):
        nivel = "Prata"
        break

    case(saldoVitorias >= 51 && saldoVitorias <= 80):
        nivel = "Ouro"
        break
    
    case(saldoVitorias >= 81 && saldoVitorias <= 90):
        nivel = "Diamante"
        break
    
    case(saldoVitorias >= 91 && saldoVitorias <= 100):
        nivel = "Lendário"
        break

    case(saldoVitorias >= 101):
        nivel = "Imortal"
}


console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de "+ nivel)


