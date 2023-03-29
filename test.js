function plantDiscovery(array) {

    let plantNumber = Number(array.shift())
    let plantCollection = {}
    for (let i = 0; i < plantNumber; i++) {
        let element = array[i].split(`<->`)
        let plantName = element[0]
        let rarity = Number(element[1])

        plantCollection[plantName] = {
            rarity,
            rating: 0,
            ratinCount: 0
        }
    }

    let commandArr = array.slice(plantNumber)

    for (let i = 0; i < commandArr.length; i++) {
        let element = commandArr[i].split(` `).filter(a => a != `-`)
        let command = element[0]
        let commandValues = element.slice(1)

        switch (command) {

            case `Rate:`: {
                let name = commandValues[0]
                let rating = Number(commandValues[1])

                if (plantCollection.hasOwnProperty(name)) {
                    plantCollection[name].rating += rating
                    plantCollection[name].ratinCount += 1
                } else {
                    console.log(`error`);
                }
                break;
            }
            case `Update:`: {
                let name = commandValues[0]
                let newRarity = Number(commandValues[1])
                if (plantCollection.hasOwnProperty(name)) {
                    plantCollection[name].rarity = newRarity
                } else {
                    console.log(`error`);
                }

                break;
            } case `Reset:`: {
                let name = commandValues[0]
                if (plantCollection.hasOwnProperty(name)) {
                    plantCollection[name].rating = 0
                    plantCollection[name].ratinCount = 0
                } else {
                    console.log(`error`);
                }
                break;
            } case `Exhibition`: {

                console.log(`Plants for the exhibition:`);
                for (const [name, value] of Object.entries(plantCollection)) {
                    if (value.rating == 0 ) {
                        console.log(`- ${name}; Rarity: ${value.rarity}; Rating: ${(0).toFixed(2)}`)
                    } else {

                        console.log(`- ${name}; Rarity: ${value.rarity}; Rating: ${(value.rating / value.ratinCount).toFixed(2)}`);
                    }
                }
                return
                de
            }
            default:{
                console.log(`error`);
            }

        }
    }


}