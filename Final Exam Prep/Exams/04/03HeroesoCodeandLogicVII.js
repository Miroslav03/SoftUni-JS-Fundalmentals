function herosOfCode(array){

    let heroCount = Number(array.shift())
    let heros = {}
    for (let i = 0; i < heroCount; i++) {
        let element = array[i].split(` `)
        let name = element[0]
        let hp = Number(element[1])
        let mp =  Number(element[2])

        heros[name]= {
            health:hp,
            mana:mp
        }
    }
    
    let commandsArr = array.slice(heroCount)

    for (let i = 0; i < commandsArr.length; i++) {
        let element = commandsArr[i].split(` - `)
        let command = element[0]
        let name = element[1]
        let commandValues = element.slice(2)
        
        switch (command) {
            case `CastSpell`:{
                let mpNeeded = Number(commandValues[0])
                let spellName = commandValues[1]
                if(heros[name].mana>=mpNeeded){
                    heros[name].mana -= mpNeeded
                    console.log(`${name} has successfully cast ${spellName} and now has ${heros[name].mana} MP!`);
                }else{
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;
            }
            case `TakeDamage`:{
                let damage = Number(commandValues[0])
                let attacker = commandValues[1]
                if(heros[name].health - damage >0){
                    heros[name].health-= damage
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heros[name].health} HP left!`);
                }else{
                    delete heros[name]
                    console.log(`${name} has been killed by ${attacker}!`);
                }
                break;
            }
            case `Recharge`:{
                let amount = Number(commandValues[0])
                let diffrence = Math.min(200-heros[name].mana,amount)
                heros[name].mana += diffrence
                console.log(`${name} recharged for ${diffrence} MP!`)
                break;
            }
            case `Heal`:{
                let amount = Number(commandValues[0])
                let diffrence = Math.min(100-heros[name].health,amount)
                heros[name].health += diffrence
                console.log(`${name} healed for ${diffrence} HP!`)
                break;
            }
            case `End`:{
                for (const [hero,arr] of Object.entries(heros)) {
                    console.log(`${hero}\n  HP: ${arr.health}\n  MP: ${arr.mana}`)
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