function passwordGenerator(array) {

    function reverse(text){
        text = text.split(``).reverse().join(``)
        return text
    }


    let firstString = array[0]
    let secondString = array[1]
    let thirdString = array[2]

    let thirdStringArr = thirdString.split(``)
    let concatStrings = firstString + secondString

    let j = 0
    for (let i = 0; i < concatStrings.length; i++) {
        let element = concatStrings[i];
        if(j>=thirdStringArr.length){
            j=0
        }
        let repalcingLetter = thirdStringArr[j].toUpperCase()
       
        if(element == `a`||element == `i`||element == `u`||element == `e`||element == `o`){
            concatStrings = concatStrings.replace(element,repalcingLetter)
            j++
        }
    }
    
    concatStrings = reverse(concatStrings)
    console.log(`Your generated password is \n${concatStrings}`);

    
} passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]
    
)