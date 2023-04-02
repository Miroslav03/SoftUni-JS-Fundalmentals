function hardWork(array) {
    let string = array[0]

    //sort the words in order

    let regex = /[_]+/g
    let matches = string.match(regex)
    let finalWords = []

    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < matches.length; j++) {
            let element = matches[j].length;
            
            const found = array[1].find(a => a.length == element)
            finalWords.push(found)
        }
        
        for (let k = 0; k < finalWords.length; k++) {
            const word = finalWords[k];
            let censored = (`_`.repeat(word.length))
            string =string.replace(censored,word)
        }
        
    }

    console.log(string);


} hardWork(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)