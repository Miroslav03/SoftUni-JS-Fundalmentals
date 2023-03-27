function dateMatch(array){

    let regex = /\d{2}([-//.])[A-Z][a-z]{2}\1\d{4}/g
    let splitRegex = /([-//.])/

    let finalArr = []

    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let match = element.match(regex)
        finalArr = finalArr.concat(match)
    }

    
    
    for (let j = 0; j < finalArr.length; j++) {
        let currentDate = finalArr[j];
        let result = currentDate.split(splitRegex).filter(a => (a != '/')).filter(a => (a != '.')).filter(a => (a != '-'))
        console.log(`Day: ${result[0]}, Month: ${result[1]}, Year: ${result[2]}`);
    }

}dateMatch(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])