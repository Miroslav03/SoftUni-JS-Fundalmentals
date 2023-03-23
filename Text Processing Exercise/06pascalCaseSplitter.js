function pascalCaseSplitter(string) {
    let finalArr = []
    let word = ``
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        let upperCaseLetter = letter.toUpperCase()

        if(letter == upperCaseLetter){
            finalArr.push(word)
            word = ``
            word = word + letter

        }else{
            word = word + letter
        }
    }
    finalArr.push(word)
    finalArr = finalArr.filter(a => a.length != 0)
    console.log(finalArr.join(`, `));
    
} pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')