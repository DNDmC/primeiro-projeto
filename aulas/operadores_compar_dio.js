 // = é atribuição (linha 4)
 // == é comparação de valor linha(5)
 // === é para comparar o valor e o formato do produto
 // !== é para verficar se é difernete da variável estipulada
 
 
let numero = "1"
console.log(numero == "1")

let numero1 = "1"
console.log(numero1 === 1)

let marca = "Apple"
console.log(marca !== "Apple")

// Guardando o resultado de uma comparação em uma outra variável (TRUE ou FALSE)
let marca1 = "Apple"
let resultado = marca1 !== "Samsung"
console.log(resultado)

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let checkCpf = cpfUsuario === cpfBloqueado
console.log("O usuário de CPF " + cpfUsuario + " pode embarcar? " + checkCpf)


let cpfPermitido = "222.333.555-01"
let cpfDoUsuario = "222.333.555-02"

let estaBloqueado = cpfDoUsuario !== cpfPermitido
console.log("O usuário está bloqueado? " + estaBloqueado)

// > é para verificar se o resultado é maior que outro 
// >= para verificar se o número é maior ou igual que outro
// < para verificar se o número é menor que outro
// <= para verificar se o número é menor ou igual que outro

let idadeMinima = 18
let idadeUsuario = 18
let idadeValida = idadeUsuario >= idadeMinima

console.log(idadeValida)


let idadeCorte = 50
let idadeDoUsuario = 50

let resultadoTerceiraIdade = idadeCorte <= idadeDoUsuario
console.log(resultadoTerceiraIdade)