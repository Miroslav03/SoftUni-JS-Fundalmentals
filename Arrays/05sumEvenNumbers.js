function sumEvenNumbers(arr){
    let sum=0
    for (const el of arr) {
        if(el%2==0){
            let elNumber=Number(el)
            sum+=elNumber
        }
    }

    console.log(sum);


}sumEvenNumbers(['1','2','3','4','5','6'])
