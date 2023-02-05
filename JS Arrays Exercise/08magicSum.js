function magicSum(array,n){
    let buffArr=[]
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        for (let j = i+1; j < array.length; j++) {
            let secondElement = array[j];
            if((element+secondElement)==n){
                buffArr.push(element)
                buffArr.push(secondElement)
                console.log(buffArr.join(` `));
                buffArr=[]
        }
    }
        
    }
}
magicSum([3, 2, 3, 4, 5, 6],
    6
    )