function searchForANumber(array, manipulation) {

    let numbersToTake=manipulation[0]
    let numbersToDeleteFromNewArr=manipulation[1]
    let seaarchedNumber=manipulation[2]
    let newArr=[]
    let count=0
    for (let i = 0; i < numbersToTake; i++) {
        let element = array[i];
        newArr.push(element)
    }
    
    newArr.splice(0,numbersToDeleteFromNewArr)
   
    for (let j = 0; j < newArr.length; j++) {
        let finalElement=newArr[j]
        if(finalElement==seaarchedNumber){
            count++
            
        }
       
    }
    return console.log(`Number ${seaarchedNumber} occurs ${count} times.`);

} searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])