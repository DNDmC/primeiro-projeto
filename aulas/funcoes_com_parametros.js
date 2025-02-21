// Sempre que eu tiver parâmetros opcionais, tenho que deixar eles por último para não dar erro na execução do código


torrar("pão na chap" , "Filipe")

function torrar(pao, nome, valor = 99.99){
    console.log("Torrada feita com " + pao)
    console.log("Ela é um pedido de " + nome)
    console.log("O valor do pedido foi " + valor)
}
