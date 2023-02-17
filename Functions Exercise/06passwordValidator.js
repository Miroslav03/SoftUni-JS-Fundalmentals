function passwordValidator(string) {
    let numberCount = 0
    let digits = string.length
    let areTwoDigits = false
    let isDigitCountRight = false

    function onlyLettersAndNumbers(string) {
        return Boolean(string.match(/^[A-Za-z0-9]*$/));
      }

    if (onlyLettersAndNumbers(string) === false) {
        console.log(`Password must consist only of letters and digits`);
    }


    if (digits >= 6 && digits <= 10) {
        isDigitCountRight = true
    } else {
        console.log(`Password must be between 6 and 10 characters`);
    }

    for (let i = 0; i < string.length; i++) {
        let element = string[i];
        let numberElement = Number(string[i])
        if (element == numberElement) {
            numberCount++
        }
        if (numberCount >= 2) {
            areTwoDigits = true

        }
    }

    if (areTwoDigits === false) {
        console.log(`Password must have at least 2 digits`);
    }

    if (onlyLettersAndNumbers(string) === true && isDigitCountRight === true && areTwoDigits === true) {
        console.log(`Password is valid`);
    }

} passwordValidator('');