//Escrevendo as classes de um Jogo

//criação de class
class heroi{
    constructor(nome, idade, tipo,ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

//definindo os tipos de ataques
    switch(tipo){
    case(tipo = "mago"):
    this.ataque = "magia"
    break

    case(tipo = "guerreiro"):
    this.ataque = "espada"
    break
    
    case(tipo = "monge"):
    this.ataque = "artes marciais"
    break

    case(tipo = "ninja"):
    this.ataque = "shuriken"
    break

}
    
    }
        atacar(){
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
}

let personagem = new heroi ("Dong Quinxue",35,"mago")

personagem.atacar()
