function Train(array) {

    let numberOfWagons = array.shift().split(` `).map(Number)
    let maxCompacity = Number(array.shift())

    for (let i = 0; i < array.length; i++) {
        let currentCase = array[i].split(` `)
        let command = currentCase[0]
        let number = Number(currentCase[1])

        switch (command) {
            case 'Add':
                if(number>maxCompacity){
                    let count=number/maxCompacity
                    for (let p = 1; p <= count; p++) {
                        numberOfWagons.push(maxCompacity)
                        number=number-maxCompacity
                        
                    }
                    numberOfWagons.push(number)
                }else{
                    numberOfWagons.push(number)
                }
                
                break;
            default:
                number = Number(currentCase[0])
                for (let j = 0; j < numberOfWagons.length; j++) {
                    let element = Number(numberOfWagons[j])
                    if (element < maxCompacity) {
                        if ((element + number) <= maxCompacity) {
                            numberOfWagons[j] = element + number
                            break;
                        } else {
                            continue;
                        }
                    }
                }
                break;
        }
    }
    return console.log(numberOfWagons.join(` `));
} Train(['32 54 21 12 4 0 23',
    '75',
    'Add 500',
    'Add 0',
    '30',
    '10',
    '75']
)


