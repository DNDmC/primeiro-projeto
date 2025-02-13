let nomeHeroi = "Celebrinor"
let xpHeroi = 5.000

switch(true){
    case xpHeroi < 1.000:
        console.log("Ferro")
    break

    case xpHeroi >= 1.001 && xpHeroi <= 2.000:
        console.log("Bronze")
    break

    case xpHeroi >= 2.001 && xpHeroi <= 5.000:
        console.log("Prata")
    break

    case xpHeroi >= 5.001 && xpHeroi <= 7.000:
        console.log("Ouro")
    break

    case xpHeroi >= 7.001 && xpHeroi <= 8.000:
        console.log("Platina")
    break

    case xpHeroi >= 8.001 && xpHeroi <= 9.000:
        console.log("Ascendente")
    break

    case xpHeroi >= 9.001 && xpHeroi <= 10.000:
        console.log(xpHeroi + " Imortal")
    break

    case xpHeroi >= 10.001:
        console.log("Radiante")
    break

    default:
        console.log("Sistema não conseguiu calcular o XP do Heroi " + nomeHeroi)
}

console.log("O herói de nome " + nomeHeroi + " está no nivel de " + xpHeroi)