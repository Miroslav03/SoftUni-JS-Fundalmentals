function nonDecreasing(array) {
    let currentHighest = array[0]
    let finalArr = []
   

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if(element>=currentHighest){
            finalArr.push(element)
            currentHighest = element
        }else{
            continue
        }
    }

    console.log(finalArr.join(` `));


} nonDecreasing([ 20, 3, 2, 15, 6, 1])