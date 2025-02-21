// Uma função só pode retornar uma valor ou um objeto

let resultado = soma (5, 10)

console.log("O resultado dessa função é " + resultado )

function soma(numA, numB){
    return numA + numB
}

// Outro exemplo de função no dia a dia usando split

let userName = getFirstName("Filipe Silva Canuto Alves Albuquerque")

console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}