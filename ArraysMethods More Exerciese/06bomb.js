function bomb(array, bomb) {
    let bombNumber = bomb[0]
    let splash = bomb[1]
    let sum = 0
    let bombNumberIndex = array.indexOf(bombNumber)

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (bombNumber == element) {
            array.splice(i + 1, splash)
            if (i - splash < 0) {
                array.splice(0, splash)
            }else{
                array.splice(i - splash, splash)

            }

        }
    }
    array = array.filter(x => x !== bombNumber)

    for (let j = 0; j < array.length; j++) {
        let sumElement = array[j];
        sum += sumElement
    }

    return console.log(sum);


} bomb([1, 1, 3, 4, 5], [1, 1])


