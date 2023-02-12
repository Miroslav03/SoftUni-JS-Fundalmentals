function smallestOfNumbers(num1, num2, num3) {

    let min = num1;

    if (min > num2) {
        min = num2
    } 
    if (min > num3) {
        min = num3
    }

    return min
}console.log(smallestOfNumbers(600,
    342
    ,123))