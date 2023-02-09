function smallestOfNumbers(num1, num2, num3) {

    let min = num1;

    if (min > num2) {
        min = num2
    } else if (min > num3) {
        min = num3
    }

    return min
}console.log(smallestOfNumbers(6,2,8))