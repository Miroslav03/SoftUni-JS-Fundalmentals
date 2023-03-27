function mirrorWords(array) {

    let pairRegex = /([@#])(?<first>[a-zA-Z]{3,})\1\1(?<second>[a-zA-Z]{3,})\1/g
    let mirrors = new Map 
    let count = 0 
    for (let text of array) {
        let pairs = text.matchAll(pairRegex)
        for (let match of pairs) {
            count++
            let firstWord = match.groups.first
            let secondWord = match.groups.second

            let reversedSecond = reverse(secondWord)
            let reversedFirst = reverse(firstWord) 

            if(reversedSecond == firstWord||reversedFirst==secondWord){
                mirrors.set(firstWord,secondWord)
            }
        }
    }

    let mirrorsArr = []
    
    if(count>0&&mirrors.size>0){
        console.log(`${count} word pairs found!`);
        for (const [first,second] of mirrors) {
            let text = ``
            text = `${first} <=> ${second}` 
            mirrorsArr.push(text)
        }
        console.log(`The mirror words are:`);
        console.log(mirrorsArr.join(`, `));
    }else if(count>0&&mirrors.size<=0){
        console.log(`${count} word pairs found!`);
        console.log("No mirror words!");
    }else if(count==0){
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }

    
    function reverse(text) {
        return text.split(``).reverse().join(``)
    }

} mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
    ]
)