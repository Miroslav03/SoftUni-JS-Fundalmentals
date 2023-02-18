function tresureHunt(input) {

    let initialLoot = input[0].split(`|`)
    let breakflag =  false
    let sum = 0 
    for (let i = 1; i < input.length; i++) {
        let element = input[i].split(` `);
        let command = element.shift()
        switch (command) {
            case `Loot`:
                for (let j = 0; j < element.length; j++) {
                    let lootElement = element[j];
                    let includes = initialLoot.includes(lootElement)
                    if (includes == false) {
                        initialLoot.unshift(lootElement)
                    } else {
                        continue
                    }
                }
                break;
            case `Drop`:
                let index = Number(element[0])
                if(index>=0&&index<initialLoot.length){
                let takenElement = initialLoot[index]
                initialLoot = initialLoot.filter(item => item !== takenElement);
                initialLoot.push(takenElement)
                }else{
                    break
                }
                break;
            case `Steal`:
                let count=Number(element[0])
                if(count>=initialLoot.length){
                    let lastElements = initialLoot.splice(-count)
                    console.log(lastElements.join(`, `));
                    return console.log(`Failed treasure hunt.`);
                }else{
                 lastElements = initialLoot.splice(-count)
                console.log(lastElements.join(`, `));
                }
                break;
            case `Yohoho!`:
                breakflag=true
                break    
            default:
                break;
        }
        if(breakflag){
            break
        }
    }

    for (let k = 0; k < initialLoot.length; k++) {
        let lastLoot = initialLoot[k];
        for (let p = 0; p < lastLoot.length; p++) {
            sum++
        }
    }
    sum=sum/initialLoot.length

    console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);

} tresureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])


