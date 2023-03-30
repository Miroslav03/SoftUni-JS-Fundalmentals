function arrayRotation(arr,n){
    let finalArr=arr;
    let rotations=0
      for (let i = 0; i < n; i++) {
        const element = finalArr[0];

        finalArr=[]
        for (let j = 1; j < arr.length; j++) {
            finalArr.push(arr[j])
            
        }
        finalArr.push(element)
        arr=finalArr
      }
      
      console.log(finalArr.join(` `));


}arrayRotation([51, 47, 32, 61, 21], 2)