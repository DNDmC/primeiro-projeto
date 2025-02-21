function winRate(victory, loss){
    let calculusWin = victory - loss
    return calculusWin
}

let rankedBalance = winRate(201, 100)
console.log("O seu saldo de partidas rankeadas é de " + rankedBalance)

function heroName(){
    let charachterName = "Grindewald"
    return charachterName
}

function rankClassification(rankedBalance){
switch(true){
    case rankedBalance < 10:
        return "Ferro"
    break

    case rankedBalance >= 11 && rankedBalance <= 20:
        return "Bronze"
    break

    case rankedBalance >= 21 && rankedBalance <= 50:
        return "Prata"
    break

    case rankedBalance >= 51 && rankedBalance <= 80:
        return "Ouro"
    break

    case rankedBalance >= 81 && rankedBalance <= 90:
        return "Diamante"
    break

    case rankedBalance >= 91 && rankedBalance <= 100:
        return "Lendário"
    break

    case rankedBalance >= 101:
        return "Imortal"
    break

    default:
        return "Sistema não conseguiu calcular o XP do Heroi"
    }
}

console.log("O herói de nome " + heroName() + " tem um saldo de vitórias de " + rankedBalance + " e está no nível " + rankClassification(rankedBalance))