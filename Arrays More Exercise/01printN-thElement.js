function printNElement(array){

    let n = Number(array.pop())
    let finalArr = []

    for (let i = 0; i < array.length; i+=n) {
        let element = array[i];
        finalArr.push(element)
    }
    
    console.log(finalArr.join(` `));


}printNElement(['1', '2', '3', '4', '5', '6'])