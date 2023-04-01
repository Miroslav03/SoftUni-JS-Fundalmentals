function pirates(array) {
    let city ={}
    let count = 0
    for (let i = 0; i < array.length; i++) {
        let target = array[i].split(`||`);
        let name = target[0]
        let population = Number(target[1])
        let gold = Number(target[2])

        if(name == 'Sail'){
            break
        }
        if(city.hasOwnProperty(name)){
            city[name].population +=population
            city[name].gold +=gold
        }else{
            city[name] = {
                population,
                gold
            }
        }
        count++
    }

    let secondArr = array.slice(count+1)
    
    for (let i = 0; i < secondArr.length; i++) {
        let element = secondArr[i].split(`=>`);
        let command = element[0]
        let name = element[1]
        let commandValues= element.slice(2)

        switch (command) {
            case `Prosper`:{
                let gold = Number(commandValues[0])
                if(gold<0){
                    console.log("Gold added cannot be a negative number!" );
                }else{
                    city[name].gold +=gold
                    console.log(`${gold} gold added to the city treasury. ${name} now has ${city[name].gold} gold.`);
                }
                break;
            }
            case `Plunder`:{
                let peopleKilled = Number(commandValues[0])
                let goldStolen =  Number(commandValues[1])

                city[name].population -=peopleKilled
                city[name].gold -=goldStolen

                console.log(`${name} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
                if(city[name].population<=0||city[name].gold<=0){
                    delete city[name]
                    console.log(`${name} has been wiped off the map!`);
                }
                break;
            }
            case `End`:{
                let size= 0
                for (const name of Object.entries(city)) {
                    size++
                }
                if(size == 0 ){
                    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
                }else{
                    console.log(`Ahoy, Captain! There are ${size} wealthy settlements to go to:`);
                for (const [name,arr] of Object.entries(city)) {
                    console.log(`${name} -> Population: ${arr.population} citizens, Gold: ${arr.gold} kg`);
                }
                }
                return
            }    
        
        }
        
    }

    

} pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Sail",
"Plunder=>Tortuga=>7500000=>380",
"Plunder=>Santo Domingo=>7500000=>380",
"End"])

