// Sempre bom lembrar que a ordem dos fatores vai alterar o produto sim
// Operadores matématicos servem para você realizar cálculos matemáticos mas também para concatenações no caso do +


// Operação de adição
let idade = 30
const inicioFrase = "Valor da minha variável é "
console.log(inicioFrase + idade)

idade = 30 + 6
console.log(inicioFrase + idade)

// Operação de subtração
idade = 30 - 6
console.log(inicioFrase + idade)

let codigoDoProduto = 1023
let coddigoExato = codigoDoProduto - 1000
console.log(coddigoExato)

// Operação de Multiplicação
let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)


let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando 
console.log ("O resultado da multiplicação é: " + produto)


// Operação de divisão
let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("A divisão entre duas pessoas é: " + notaDoMercado / pessoasParaDividir)

// Operação de divisão com módulo (resto da divisão)
let calculo = 10 % 3
console.log(calculo)

// Operadores de Incremento
let contador = 1

//Incremento ++
contador++
contador++

// Decremento
contador--
contador--

console.log(contador)