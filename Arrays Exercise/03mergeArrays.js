function mergeArrays(arr1,arr2){
    let finalArr=[]

    for (let i = 0; i < arr1.length; i++) {
        let element = Number(arr1[i]);
        let elementSecondArray=Number(arr2[i])

        if(i%2==0||i==0){
            finalArr.push(element+elementSecondArray)
        }else {
            let element = String(arr1[i]);
            let elementSecondArray=String(arr2[i])
            finalArr.push(element+elementSecondArray)
        }
    }

    console.log(finalArr.join(` - `));


}mergeArrays(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)