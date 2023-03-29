function plantDiscovery(array) {

    let plantNumber = Number(array.shift())
    let plantCollection = {}
    for (let i = 0; i < plantNumber; i++) {
        let element = array[i].split(`<->`)
        let plantName = element[0]
        let rarity = Number(element[1])

        plantCollection[plantName] = {
            rarity,
            ratinCount: []
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
                    plantCollection[name].ratinCount.push(rating)
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
                    plantCollection[name].ratinCount = []

                } else {
                    console.log(`error`);
                }
                break;
            } case `Exhibition`: {

                console.log(`Plants for the exhibition:`);
                for (const [name, value] of Object.entries(plantCollection)) {
                        let summed = sumArr(plantCollection[name].ratinCount)
                        let length = plantCollection[name].ratinCount.length
                        if(length == 0 ){
                            length = 1
                        }
                        console.log(`- ${name}; Rarity: ${value.rarity}; Rating: ${(summed / length).toFixed(2)}`);
                }
            }
                return

        
            default: {
            console.log(`error`);
        }

    }
}

function sumArr(arr) {
    let finalSum = 0
    for (const el of arr) {
        finalSum += el
    }
    return finalSum
}
} plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

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




