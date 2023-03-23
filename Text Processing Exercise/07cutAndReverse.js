function cutAndReverse(string) {
    let finalArr = []
    let length = string.length / 2
    let finalString = ``

    let firstHalf = string.substring(0, length)
    let secondHalf = string.substring(length)

    for (let i = firstHalf.length - 1; i >= 0; i--) {
        const letter = firstHalf[i];
        finalString += letter
    }

    finalArr.push(finalString)
    finalString = ``

    for (let i = secondHalf.length - 1; i >= 0; i--) {
        const letter = secondHalf[i];
        finalString += letter
    }
    finalArr.push(finalString)

    console.log(finalArr.join(`\n`));
    
} cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')