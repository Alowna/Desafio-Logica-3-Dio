
class heroPlayer{
    constructor(name, age, type){
        this.heroName = name
        this.heroAge = age 
        this.heroClass = type
    }

    announceAttack(){
        console.log(`\n${this.heroName} atacou usando ${this.heroClass}\n`)
    }
}