// Condicional IF
// O if só vai ser executado se a expressão ou variável for verdadeira (true)
// Pode ser passada tanto um booleano como uma expressão que retorne true ou false 

let eLigado = true

if(eLigado){console.log("executou comando")}

// Exemplo 2
let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
}
console.log( "Itens comprados: " + itensComprados )


// Condicional ELSE

let temOvos = false
let itemComprado = ""

if(temOvos){
    itemComprado = "Leite"
}
else{
    console.log("passou na seção de congelados"); itemComprado = "Lasanha congelada"
}

console.log("item comprado: " + itemComprado)


// Condicional ELSE IF (ELIF do python)

let nivelFome = [1, 2, 3]

if(nivelFome === 1){
console.log("pouca fome")
}else if(nivelFome === 2){
console.log("muita fome")
}else{
console.log("você está faminto")
}