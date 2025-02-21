// Criando uma função
// Eu posso criar uma função dentro de outra função
// Tudo o que está dentro do escopo de uma função é o que ela vai realizar
// A gente não deve começar função com número
// É uma boa praticar salvar as funções sempre como ações
// Cada função tem que fazer alguma coisa não adianta criar uma função, que faz UM MONTE de coisa (saiba separar as coisas)
// Chamando uma função
torrar()


function torrar(){
    console.log("Torrando pão")
    injetarPao()
}

function injetarPao(){
    console.log("Preparando para injetar o pão")
    console.log("Finalizado")
}