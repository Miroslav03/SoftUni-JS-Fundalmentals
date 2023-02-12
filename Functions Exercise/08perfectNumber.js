function perfectNumber(number){
    let sum=0
    for (let i = 1; i <= number     ; i++) {
        if(number%i==0){
            sum+=i    
        }
        if(sum==number){
            return console.log(`We have a perfect number!`);
        }
    }

    if(sum!=number){
        return console.log(`It's not so perfect.`);
    }


}perfectNumber(1236498)