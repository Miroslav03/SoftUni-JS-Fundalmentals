function repeatString(string,repeatCount){
    let finalString=string
    for (let i = 1; i < repeatCount; i++) {
        finalString=finalString+string
        
    }

    console.log(finalString);

}repeatString(`String`,1)





