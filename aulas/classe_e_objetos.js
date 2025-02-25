// Classe é a padronização do formato de uma estrutura de dados
// Objeto mantem a padronização da forma(classe) e implementa o seus valores das propriedades
// Objeto podem ter métodos inteligente ou funções próprias
// Instanciar um objeto significa criar na memória um novo objeeto com base na classe
// Qualquer coisa que eu transporte do mundo real para programação é um objeto, ou seja qualquer coisa que eu queira representar na programção é um objeto
// Classes podem ter funções e comportamentos, sendo essa uma das maiores diferenças dela para um JSON
// O 'this' para classe seria a mesma coisa de criar uma variável usando 'let'
// Objeto quando falamos de classe só vai aparecer no código quando ele de fato é usado por ecemplo na linha 17, isso é um objeto
// Método é uma função que trabalha em contexto de uma classe 


class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com ${this.saborRecheio}`)
    }

    assar(){
        console.log("Bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("Chocolate", "Recheio de Nutela")
let boloPremium = new formaDeBolo("Baunilha", "Recheio de coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()