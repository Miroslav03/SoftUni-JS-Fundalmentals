function stringSubtracting(word,text){

    let changedWWord = word.toLowerCase()
    text = text.toLowerCase()
    let arr = text.split(` `)

    if(arr.includes(changedWWord)){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }


}stringSubtracting('Python',
'PyThon is the best programming language'

)