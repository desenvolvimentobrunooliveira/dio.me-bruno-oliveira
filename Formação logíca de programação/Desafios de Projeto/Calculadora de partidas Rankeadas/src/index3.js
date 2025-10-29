//Calculadora de partidas Rankeadas
//"todos os caminhos levam a Roma" - function / switch / case

vitoriasDerrotas (100,25)


function vitoriasDerrotas(vitorias,derrotas){
    
    let saldoVitorias = (vitorias - derrotas)
    do{
        
 
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
    saldoVitorias --
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de "+ nivel)
    
    }while(saldoVitorias > 0)
    
    console.log("Fim de Jogo, as vidas são " + saldoVitorias + " e está no nivel " + nivel)

}
