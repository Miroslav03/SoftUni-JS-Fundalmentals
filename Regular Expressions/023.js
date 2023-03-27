function phoneNUmberMAtch(array){

    let regex = /\+359([- ])2\1\d{3}\1\d{4}\b/g
    let finalArr = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let match = element.match(regex)
        finalArr = finalArr.concat(match)
    }

    console.log(finalArr.join(`, `));

}phoneNUmberMAtch(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
