function oddAndEvenSum(number) {
    let string = String(number)
    let oddSum = 0
    let evenSum = 0
    let final
    let  concatenation = () =>console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
   
    for (let i = 0; i < string.length; i++) {
        let element = string[i];
        let number = Number(element)
        if (number % 2 == 0) {
            evenSum += number
        } else {
            oddSum += number
        }
    }
    return concatenation()

} oddAndEvenSum(1000435)