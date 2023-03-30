function smallestTwoNumbers(arr){

    let newArr=arr.sort((a,b) => b-a).slice(0,2).join(` `)
    
    console.log(newArr);


}smallestTwoNumbers([30, 15, 50, 5])