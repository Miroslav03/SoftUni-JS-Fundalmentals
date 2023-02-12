function simpleCalculator(num1, num2, operator) {
    let finalResult

    let multiply = () => num1 * num2;
    let divide = () => num1 / num2;
    let add = () => num1 + num2;
    let subtract = () => num1 - num2;

    if (operator == `multiply`) {
        finalResult = multiply(num1, num2);
    } else if (operator == `divide`) {
        finalResult = divide(num1, num2);
    } else if (operator == `add`) {
        finalResult = add(num1, num2);
    } else if (operator == `subtract`) {
        finalResult = subtract(num1, num2);
    }

    
    return finalResult;

} simpleCalculator

