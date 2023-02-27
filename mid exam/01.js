function problem1(input) {
    
    let days = Number(input.shift())
    let numberOfPlayers = Number(input.shift())
    let groupEnergy = Number(input.shift())
    let waterPerDayForOnePerson = Number(input.shift())
    let foodPerDayForOnePerson = Number(input.shift())
    input.unshift(5)

    let totalWater = days * numberOfPlayers * waterPerDayForOnePerson
    let totalFood = days * numberOfPlayers * foodPerDayForOnePerson

    for (let i = 1; i <= days; i++) {
        let dayEnergy = Number(input[i])
        groupEnergy -= dayEnergy
        if (groupEnergy <= 0) {
            return console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
        }

        if (i % 2 == 0) {
            totalWater = totalWater - (totalWater * 0.3)
            groupEnergy = groupEnergy + (groupEnergy * 0.05)
        }
        if (i % 3 == 0) {
            totalFood = totalFood - ((totalFood / numberOfPlayers).toFixed(2))
            groupEnergy = groupEnergy + (groupEnergy * 0.1)
        }
        
    }

        return console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
   
} problem1(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])


