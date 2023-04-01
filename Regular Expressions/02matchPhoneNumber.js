function phoneNUmberMAtch(array){

    let regex = /\+359([- ])2\1\d{3}\1\d{4}\b/g
  
    let match = array[0].match(regex)
     
    console.log(match.join(`, `));

}phoneNUmberMAtch(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])

