function picoolo(array) {

    let map = new Map

    for (const el of array) {
        let [comand, carNumber] = el.split(`, `)
        if (comand == "IN") {
            map.set(carNumber)
        } else if (comand == "OUT") {
            map.delete(carNumber)
        }
    }

    let finalArr = new Map([...map.entries()].sort())

    if (finalArr.size == 0) {

        return console.log(`Parking Lot is Empty`);
        
    } else {
        for (const [key, value] of finalArr) {
            if (finalArr.size == 0) {
                return console.log(`Parking Lot is Empty`);
            }
            console.log(key);
        }
    }

} picoolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']


)