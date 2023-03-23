function replaceRepeatingChars(char){
    let finalString = ``
    for (let i = 0; i < char.length; i++) {
        let letter = char[i]
        if(letter != finalString[finalString.length-1]){
            finalString = finalString + letter
        }else{
            continue    
        }
    }

console.log(finalString);


    
}replaceRepeatingChars('qqqwerqwecccwd')