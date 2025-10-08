
// UMA FUNÇÃO DEVE PASSAR SEMPRE UMA AÇÃO E VAI SEMPRE EXECUTAR O MESMO CODIGO VARIANDO O OBJETO.


/*
torrar()

function torrar(){
  console.log("Insira o pão")  
}

torrar()
*/


//Delarar uma variavel com "let" indica uma variavel local
//Declarar uma variavel com "var" indica uma varivel global
/*
torrar("Pão de Forma")

function torrar(pao){
    console.log("Torrando o "+ pao)

}
*/



function nome(name, sname = "Padrão", idade = 99)// o parametro "Padrão" é o undefined
{
    console.log("Seu nome é " + name)
    console.log("Seu sobre nome é " + sname)
    console.log("Sua idade é de " + idade)
}

nome("Bruno", "Oliveira", 32)