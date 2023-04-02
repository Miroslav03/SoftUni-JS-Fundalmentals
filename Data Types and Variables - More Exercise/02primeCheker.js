function primeCheker(params) {
    
    if(params<=1){
        return console.log(`false`);
    }

    for (let i = 2; i < params; i++) {
        if(params%i==0){
            return console.log(`false`);
        }
        
    }
    return console.log(`true`);

}primeCheker(6)