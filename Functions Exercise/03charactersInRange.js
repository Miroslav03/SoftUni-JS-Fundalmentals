function characterInRange(n1,n2){
    let symbol=n1
    let symbol1=n2
    let string=``
    let letterFirst=symbol.charCodeAt(n1)
    let letterSecond=symbol1.charCodeAt(n1)

    if(letterFirst>letterSecond){
        for (let j = letterSecond+1; j < letterFirst; j++) {
        
            let cuurentSymbol=String.fromCharCode(j);
            string=string+ ` ` + cuurentSymbol
           
        }
    }else{
    for (let i = letterFirst+1; i < letterSecond; i++) {
        
        let cuurentSymbol=String.fromCharCode(i);
        string=string+ ` ` + cuurentSymbol
       
    }
    }

    return string;

}console.log(characterInRange('C',`#`))