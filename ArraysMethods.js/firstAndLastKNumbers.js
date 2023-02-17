function firstAndLastKNumbers(array){

    let kelementrs=(array[0])
    let firstLineArr=array.slice(1,kelementrs+1)
    let secondLineArr=array.slice(array.length-kelementrs)



    let final=firstLineArr.join(` `) + `\n ` + secondLineArr.join(' ')


   return console.log(final)



}firstAndLastKNumbers([3,
    6, 7, 8, 9]
   )