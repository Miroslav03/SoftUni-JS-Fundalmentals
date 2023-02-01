function evenAndOddSubtraction(array){

    let sumEven=0
    let sumOdd=0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element%2==0){
            sumEven+=element
        }else{
            sumOdd+=element
        }
    }
    console.log(sumEven-sumOdd);

}
evenAndOddSubtraction([1,2,3,4,5,6])
