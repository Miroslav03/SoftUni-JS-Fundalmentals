function emojiDetector(array){

    let pattern = /([::|**]{2})[A-Z]([a-z]{2,})\1/g
    let symbols = /[::|**]/g
    let numberPattern = /\d/g

    let text = array.shift()
    let numbers = numberPattern.exec(text)
    
    let coolThreshhold = 1//
    let emojiFound = 0 
    let foundEmojis = []
    let coolEmojis = []

    while (numbers) {
        let number = Number(numbers[0])
        coolThreshhold *= number
        numbers = numberPattern.exec(text)

    }

    let emojis = pattern.exec(text)

    while (emojis) {
        let emoji = emojis[0]
        foundEmojis.push(emoji)
        emojis = pattern.exec(text)
    }

    emojiFound = foundEmojis.length

    for (let i = 0; i < foundEmojis.length; i++) {
        let element = foundEmojis[i]
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

    console.log(`Cool threshold: ${coolThreshhold}`);
    console.log(`${emojiFound} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join(`\n`));

}emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])