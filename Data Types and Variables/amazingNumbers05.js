function AmazingNumbers(number){
    let sum=0
    let string=String(number)
    for(let i=0;i<string.length;i++){
        sum+=Number(string[i])
    }
    let result=String(sum).includes(`9`)
    console.log(result?`${number} Amazing? True`:`${number} Amazing? False`);


}AmazingNumbers(1233)