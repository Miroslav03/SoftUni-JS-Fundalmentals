function listProducts(arr){

    let newArr=arr.sort()
   
    for (let i = 0; i < newArr.length; i++) {

        const element = newArr[i];
        console.log(`${i+1}.${element}`);
        
    }

}listProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
