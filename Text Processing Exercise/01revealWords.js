function revealWords(words,text){

    let wordss = [...words.split(`,`)]
    wordss = wordss.map(a => a.trim())

    for (let i = 0; i < wordss.length; i++) {
        let word = wordss[i]
        let censored  = `*`.repeat(word.length)
        if(text.includes(censored)){
            text = text.replace(censored,word)
        }
    }
    return console.log(text);
}revealWords('great',
'softuni is ***** place for learning new programming languages'

)