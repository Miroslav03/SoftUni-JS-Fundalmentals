function sumFirstAndLast(array){

    let firstElemnt=Number(array.shift());
    let lastElement=Number(array.pop());

    return firstElemnt+lastElement

}sumFirstAndLast(['20', '30', '40'])