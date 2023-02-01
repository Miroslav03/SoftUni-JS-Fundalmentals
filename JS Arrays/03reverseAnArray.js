function reverseAnArray(n,arr){
    let arr1=[]
    for (let i = n-1; i >=0; i--) {
        const element = arr[i];
        
        arr1.push(element)
    }

    console.log(arr1.join(` `));


}
reverseAnArray(3, [10, 20, 30, 40, 50])