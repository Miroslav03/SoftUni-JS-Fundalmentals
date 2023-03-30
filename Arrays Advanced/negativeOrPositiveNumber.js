function negativeOrPositiveNumber(array){
    let newArr=[]
    for (let i = 0; i < array.length; i++) {
        let element = Number(array[i]);
        if(element<0){
            newArr.unshift(element)
        }else{
            newArr.push(element)
        }
        
    }
    return newArr.join(`\n `)


}negativeOrPositiveNumber(['7', '-2', '8', '9'])