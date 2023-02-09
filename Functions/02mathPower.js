function mathPower(number,givenPower){
    let finalNum=number
    for (let i = 1; i <givenPower ; i++) {
        finalNum=finalNum*number
        
    }
    
   return finalNum
   
}mathPower(3,4)