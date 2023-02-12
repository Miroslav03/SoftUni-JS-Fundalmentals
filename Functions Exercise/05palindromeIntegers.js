function palindromeIntegers(array){
    let i
    
    let newString=``
    let currentString=``
    let finalNumber=0
    for ( i = 0; i < array.length; i++) {
        let currentNum=String(array[i])
            for (let j = currentNum.length-1; j >=0 ; j--) {
                 currentString=currentNum[j]
                    newString=newString + currentString

            }    
        finalNumber=Number(newString)
        if(array[i]==finalNumber){
            console.log(`true`);
        }else if(array[i]!=finalNumber){
            console.log(`false`);
        }
        newString=``
        currentString=``
    }

}console.log(palindromeIntegers([123,323,421,121]))