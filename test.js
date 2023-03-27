function mirrorWords(array) {

    let pairRegex = /([@#])(?<first>[a-zA-Z]{3,})\1\1(?<second>[a-zA-Z]{3,})\1/g
    let filterRegex = /[@#]/
    let searhingformatch = array.shift()
    let pairs = searhingformatch.match(pairRegex)
    let mirrors = new Map

    if(pairs != null){
        for (let i = 0; i < pairs.length; i++) {
            let element = pairs[i].split(filterRegex).filter(a => a)
            let firstWord = element[0]
            let secondWord = element[1]
    
            let reversedSecond = reverse(secondWord)
            let reversedFirst = reverse(firstWord)
    
            if (reversedSecond == firstWord || reversedFirst == secondWord) {
                mirrors.set(firstWord, secondWord)
            }
        }
    }
    

    let mirrorsArr = []
    if(pairs == null) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }else if (pairs.length > 0 && mirrors.size > 0) {
        console.log(`${pairs.length} word pairs found!`);
        for (const [first, second] of mirrors) {
            let text = ``
            text = `${first} <=> ${second}`
            mirrorsArr.push(text)
        }
        console.log(`The mirror words are:`);
        console.log(mirrorsArr.join(`, `));
    } else if (pairs.length > 0 && mirrors.size <= 0) {
        console.log(`${pairs.length} word pairs found!`);
        console.log("No mirror words!");
    }


    function reverse(text) {
        return text.split(``).reverse().join(``)
    }

} mirrorWords([
    `#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#`
]
)