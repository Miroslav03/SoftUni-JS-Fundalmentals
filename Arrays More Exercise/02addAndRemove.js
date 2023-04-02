function addAndRemove(array) {

    let initialNumber = 1
    let finalArr = []
    for (let i = 0; i < array.length; i++) {
        const comand = array[i];
        if (comand == `add`) {
            finalArr.push(initialNumber)
            initialNumber++
        } else {
            finalArr.pop()
            initialNumber++
        }
    }

    if (finalArr.length == 0){
        console.log(`Empty`);
    }else{
        console.log(finalArr.join(` `));
    }



} addAndRemove([])