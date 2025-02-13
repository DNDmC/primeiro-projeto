// Switch Case - Estrutura de decisão 
// Switch/Case/Break/Default


// Nesse caso abaixo onde usamos switch e case, quando o case encontra o resultado da variável
// Fruta que nesse caso é banana ele vai rodar tudo que estiver abaixo do case banana 
// Mas podemos resolver isso usando o break
// Sempre depois do default e do case devemos usar ":"
// Switch case também da pra usar com booleanos (não sendo tão recomendado visto que if já faria o trabalho)
// E também da pra se usar com números


let fruta = "abacate"

switch(fruta){
    case "laranja":
        console.log("suco de laranja")
    break

    case "banana":
    case "morango":
    case "abacate":
        console.log("vitamnina de " + fruta)
    break

    case"maça":
        console.log("suco de maça")
    break

    default:
    console.log("Suco genérico")
}