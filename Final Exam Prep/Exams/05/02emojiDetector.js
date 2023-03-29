function emojiDetector(array){

    function multiply (array) {
        let sum=1;
        for (let i=0; i<array.length; i++) {
            sum = sum * array[i];
        } 
        return sum;
    }

    let pattern = /(:{2}|\*{2})(?<values>[A-Z][a-z]{2,})(\1)/g
    let numberPattern = /\d/g

    let text = array.shift()
    let coolThreshhold = 0
    let count = 0
    let numbers = text. match(numberPattern)//calculating threshhold
    if(numbers == null){
        coolThreshhold = 0
    }else{
        numbers = numbers.map(Number)
        coolThreshhold = multiply(numbers)
    }

    let validEmojis = text.match(pattern)
    coolEmojis = []
    if(validEmojis == null){
        count = 0
        coolEmojis = []
    }else{
        count = validEmojis.length
        for (let i = 0; i < validEmojis.length; i++) {
            let element = validEmojis[i]
            let finalCode = 0
            for (let j = 2; j < element.length-2; j++) {
                let letter = element[j]
                let code = letter.charCodeAt()
                finalCode +=code
            }
            if(finalCode>coolThreshhold){
                coolEmojis.push(element)
            }
        }
    }


    console.log(`Cool threshold: ${coolThreshhold}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join(`\n`));

}emojiDetector([":*Inavlid:*"])