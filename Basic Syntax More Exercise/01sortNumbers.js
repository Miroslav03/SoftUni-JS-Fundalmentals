function sortNumbers(firstNum, secondNum, thirdNum) {

    let arr = []

    arr.push(firstNum)
    arr.push(secondNum)
    arr.push(thirdNum)

    arr.sort((a, b) => b - a)

    console.log(arr.join(`\n`));

} sortNumbers(1, 2, 3)