function rotateArr(array){

    let numberOfRotations = Number(array.pop())

    for (let i = 0;i < numberOfRotations;i++) {
        const element = array.pop();
        array.unshift(element)
    }

    console.log(array.join(` `));
}rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])