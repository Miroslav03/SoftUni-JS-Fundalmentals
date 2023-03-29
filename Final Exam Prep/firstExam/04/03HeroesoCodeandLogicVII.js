function herosOfCode(array){

    let heroCount = Number(array.shift())
    let party = new Map
    function createHero(name,hp,mp){
        let hero ={
            name:name,
            health:hp,
            mana:mp ,
            castSpell(mpNeeded,spellName){
                if(this.mana>=mpNeeded){
                    this.mana -= mpNeeded
                    console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mana} MP!`);
                }else{
                    console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
                }
            },
            takeDamage(damage,attacker){
                if(this.health - damage >0){
                    this.health -= damage
                    console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.health} HP left!`);
                }else{
                    party.delete(this.name)
                    console.log(`${this.name} has been killed by ${attacker}!`);
                }
            },
            recharge(amount){
                let diffrence = Math.min(200-this.mana,amount)
                this.mana += diffrence
                console.log(`${this.name} recharged for ${diffrence} MP!`)
            },
            heal(amount){
                let diffrence = Math.min(100-this.health,amount)
                this.health += diffrence
                console.log(`${this.name} healed for ${diffrence} HP!`)
            },
            toString(){
                console.log(`${this.name}\n  HP: ${this.health}\n  MP: ${this.mana}`);
            }

        }
        return hero
    }
    for (let i = 0; i < heroCount; i++) {
        let element = array[i].split(` `)
        let name = element[0]
        let hp = Number(element[1])
        let mp =  Number(element[2])
        let hero = createHero(name,hp,mp)
        party.set(name,hero)
    }
    
    let commandsArr = array.slice(heroCount)

    for (let i = 0; i < commandsArr.length; i++) {
        let element = commandsArr[i].split(` - `)
        let command = element[0]
        let name = element[1]
        let commandValues = element.slice(2)
        
        switch (command) {
            case `CastSpell`:{
                let hero = party.get(name)
                let mpNeeded = Number(commandValues[0])
                let spellName = commandValues[1]
                hero.castSpell(mpNeeded,spellName)
                break;
            }
            case `TakeDamage`:{
                let hero = party.get(name)
                let damage = Number(commandValues[0])
                let attacker = commandValues[1]
                hero.takeDamage(damage,attacker)
                break;
            }
            case `Recharge`:{
                let hero = party.get(name)
                let amount = Number(commandValues[0])
                hero.recharge(amount)
                break;
            }
            case `Heal`:{
                let hero = party.get(name)
                let amount = Number(commandValues[0])
                hero.heal(amount)
                break;
            }
            case `End`:{
                for (const hero of party.values()) {
                    hero.toString()
                }
                return
                
            }
        }
    }

}herosOfCode(['2',

'Solmyr 85 120',

'Kyrre 99 50',

'Heal - Solmyr - 10',

'Recharge - Solmyr - 50',

'TakeDamage - Kyrre - 66 - Orc',

'CastSpell - Kyrre - 15 - ViewEarth',

'End',])