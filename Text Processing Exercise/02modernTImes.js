function modernTimes(text){

    let array = text.split(` `)

    for (let i = 0;i < array.length;i++) {
        let word = array[i]
        let leftWord = word.substring(1)
        
        if(word.includes(`#`)&&word.length>1&&(/^[a-zA-Z]+$/.test(leftWord)==true)){
            console.log(word.substring(1));
        }
    }





}modernTimes('The symbol # is known #variously1 in English-speaking #regions as the #number sign')