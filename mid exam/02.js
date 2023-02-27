function problem2(input) {

    let routeToTitan = input[0].split(`||`)
    let startingAmountOfFuel = Number(input[1])
    let startingAmountOfAmunation = Number(input[2])

    for (let i = 0; i < routeToTitan.length; i++) {
        let cases = routeToTitan[i].split(` `)
        let command = cases[0]
        let number = Number(cases[1])
        switch (command) {
            case `Travel`:
                if (startingAmountOfFuel >= number) {
                    startingAmountOfFuel = startingAmountOfFuel - number
                    console.log(`The spaceship travelled ${number} light-years.`);
                } else {
                    return console.log(`Mission failed.`)
                }
                break;
            case `Enemy`:
                if (startingAmountOfAmunation >= number) {
                    startingAmountOfAmunation = startingAmountOfAmunation - number
                    console.log(`An enemy with ${number} armour is defeated.`);
                } else  {
                    if (startingAmountOfFuel >= number * 2) {
                        console.log(`An enemy with ${number} armour is outmaneuvered.`);
                    } else {
                        return console.log(`Mission failed.`)
                    }
                }
                break
            case `Repair`:
                startingAmountOfAmunation += (number * 2)
                startingAmountOfFuel += number
                console.log(`Ammunitions added: ${number * 2}.`);
                console.log(`Fuel added: ${number}.`);
                break;
            case `Titan`:
                return console.log("You have reached Titan, all passengers are safe.")
            
            default:
                break;
        }
    }
} problem2([ 'Travel 10||Enemy 30||Repair 15||Titan', 
'50', 
'80' ])

