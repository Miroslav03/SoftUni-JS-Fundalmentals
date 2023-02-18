function muOnline(input) {

    let health = 100;
    let bitcoin = 0;
    let roomsBeaten = 0

    let rooms = input.split(`|`)

    for (let i = 0; i < rooms.length; i++) {
        let element = rooms[i].split(` `)
        let command = element[0]
        let number = Number(element[1])

        switch (command) {
            case `potion`:
                health += number
                if (health >= 100) {
                    console.log(`You healed for ${100 - (health - number)} hp.`);
                    health = 100
                    console.log(`Current health: 100 hp.`)
                } else {
                    console.log(`You healed for ${number} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
                roomsBeaten++
                break;
            case `chest`:
                console.log(`You found ${number} bitcoins.`);
                bitcoin += number
                roomsBeaten++
                break;

            default:
                if (health > 0) {
                    health -= number
                    roomsBeaten++
                    if (health <= 0) {
                        return console.log(`You died! Killed by ${command}.` + `\n` + `Best room: ${roomsBeaten}`)
                    }
                    console.log(`You slayed ${command}.`);
                }
                break;
        }
        if (roomsBeaten == rooms.length) {
            console.log(`You've made it!`);
            console.log(`Bitcoins: ${bitcoin}`);
            console.log(`Health: ${health}`);
        }
    }

} muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")