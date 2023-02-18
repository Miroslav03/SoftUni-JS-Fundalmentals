function manOWar(input) {

    let pirateShipStatus = input[0].split(`>`).map(Number)
    let warshipStatus = input[1].split(`>`).map(Number)
    let damage = 0;
    let health = 0;
    let index = 0;
    let countToRepair = 0;
    let maxHealthSection = Number(input[2])
    let retire = false
    let repairflag = false
    for (let i = 3; i < input.length; i++) {
        let element = input[i].split(` `);
        let command = element[0]

        switch (command) {
            case 'Fire':
                index = Number(element[1])
                damage = Number(element[2])
                if (index >= 0 && index < warshipStatus.length) {


                    warshipStatus[index] -= damage

                    if (warshipStatus.some(element => element <= 0)) {
                        return console.log("You won! The enemy ship has sunken.");

                    }
                } else {

                }
                break;

            case 'Defend':
                let starIndex = Number(element[1])
                let endIndex = Number(element[2])
                damage = Number(element[3])
                if (starIndex >= 0 && starIndex < pirateShipStatus.length && endIndex >= 0 && endIndex < pirateShipStatus.length) {

                    for (let j = starIndex; j <= endIndex; j++) {
                        pirateShipStatus[j] -= damage

                    }
                    if (pirateShipStatus.some(element => element <= 0)) {
                        return console.log("You lost! The pirate ship has sunken.");

                    }
                } else {

                }
                break;

            case 'Repair':
                index = Number(element[1])
                health = Number(element[2])
                if (index >= 0 && index < pirateShipStatus.length) {
                    pirateShipStatus[index] += health
                    if (pirateShipStatus[index] >= maxHealthSection) {
                        pirateShipStatus[index] = maxHealthSection
                    }
                } else {

                }
                break;
            case 'Status':
                for (let k = 0; k < pirateShipStatus.length; k++) {
                    let repairElement = pirateShipStatus[k]
                    let percent = maxHealthSection * 0.2
                    if (repairElement < percent) {
                        countToRepair++
                        repairflag = true

                    }
                }
                if (repairflag) {
                    console.log(`${countToRepair} sections need repair.`);
                }

                break;
            case `Retire`:
                retire = true
                break

        }
        if (retire) {
            break
        }
    }
    let sumPirate = pirateShipStatus.reduce((sum, i) => sum += i, 0)
    let sumWarship = warshipStatus.reduce((sum, i) => sum += i, 0)

    console.log(`Pirate ship status: ${sumPirate}`);
    console.log(`Warship status: ${sumWarship}`);

} manOWar(["12>13>11>20>66",//PirateShip Status
    "12>22>33>44>55>32>18", //Warship Status
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire", "dasd"])
