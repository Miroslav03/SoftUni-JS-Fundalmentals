function signCheck(num1, num2, num3) {
    let sign = `Positive`
    let isNegative = num1 < 0
    sign = check(sign, isNegative)
    let isNegative2 = num2 < 0
    sign = check(sign, isNegative2)
    let isNegative3 = num3 < 0
    sign = check(sign, isNegative3)

    return sign
    function check(sign, shouldchange) {
        if (shouldchange === false) {
            return sign
        }

        if (sign == `Positive`) {
            sign = `Negative`
        } else {
            sign = `Positive`
        }
        return sign
    }
} console.log(signCheck(1, -22, 3))