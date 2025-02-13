// AND (&&)
// Quando eu utilizo mais de uma operador isso se chama expressão como na linha 7

let idade = 18
let verificado = false 
let resultado = (idade >= 18) && (verificado === true)

console.log(resultado)

// AND (&&) - 100 moedas coletadas e 1 item estrela
let moedasColetadas = 100
let item = "estrela"
let resultado1 = (moedasColetadas === 100) && (item === "estrela")
console.log(resultado1)

// OR (||) - Nosso boneco só pode sair sem ãao estiver chovendo (ou) com guarda chuva
let tempo = "chuva"
let item1 = "guarda chuva"
let podeSair = (tempo !== "sol") || (item1 === "camisa")
console.log("Nosso personagem pode sair ? " + podeSair)

// NOT (!) - Nega uma afirmação
// Eu consigo trocar a polarização de uma variável booleana usando o not (!) no exemplo abaixo eu tenho um resultado true
// Porém se eu colocar ! no resultado2 ele vai mudar para false e se eu colocar mais um ! ele muda para true novamente
let tempo1 = "chuva"
let resultado2 = tempo1 === "chuva"
console.log(!!resultado2)

// Outro exemplode troca de polaridade de um booleano
// Ao eu negar a condição AND(&&) por completa utilizando o NOT(!) ela se tornou verdadeira 
let clima = "chuva"
let horario = 8

let resultado3 = !((clima !== "chuva") && (horario > 6))
console.log(resultado3)

