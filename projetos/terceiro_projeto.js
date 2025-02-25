class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        const ataques = {
            "Mago": "magia",
            "Guerreiro": "espada",
            "Monge": "artes marciais",
            "Ninja": "shuriken"
        }

        const ataque = ataques[this.tipo] || "uma forma desconhecida"
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let hero1 = new hero("Wyll", 25, "Guerreiro")
let hero2 = new hero("Gale", 30, "Mago")
let hero3 = new hero("Tu", 70, "Monge")
let hero4 = new hero("Kakashi", 40, "Ninja")
let hero5 = new hero("Astarion", 120, "Vampiro") //Teste de erro

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
hero5.atacar()