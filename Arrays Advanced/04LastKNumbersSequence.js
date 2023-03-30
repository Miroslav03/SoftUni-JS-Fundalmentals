function lastKNumbersSequence(n,k){

    let arr=[1]

    while(arr.length<n){

        let elment=arr.slice(-k).reduce((sum,i) => sum+=i,0)

        arr.push(elment)

    }

    console.log(arr.join(` `));

}lastKNumbersSequence(6,3)
