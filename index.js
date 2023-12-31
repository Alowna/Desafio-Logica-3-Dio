let heroClasses = {
    Mage: {
        className: "Mago",
        classAttack: "Magia"
    },
    Monk: {
        className: "Monge",
        classAttack: "Artes Marciais"
    },
    Warrior: {
        className: "Guerreiro",
        classAttack: "Espada"
    },
    Ninja: {
        className: "Ninja",
        classAttack: "Shuriken"
    }
}



class heroPlayer{
    constructor(name, age, type){
        this.heroName = name
        this.heroAge = age 
        this.heroClass = type
    }

    announceAttack(){
        console.log(`\n${this.heroClass[0]} atacou usando ${this.heroClass[1]}\n`)
    }
}