function lowerOrUpper(symbol){

    let char=symbol

    let ASCInumber=char.charCodeAt(char)

    if(ASCInumber>=65&&ASCInumber<=95){
        console.log(`upper-case`);
    }else {
        console.log(`lower-case`);
    }


}
lowerOrUpper(`l`)