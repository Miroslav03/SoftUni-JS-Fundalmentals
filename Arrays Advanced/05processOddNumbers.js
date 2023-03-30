function processOddNumbers(array) {

    let newArr = array
        .filter((x,i) => i % 2 != 0)
        .map((x) => x * 2)
        .reverse()
        .join(` `)

    console.log(newArr);

} processOddNumbers([3,0,10,4,7,3])
